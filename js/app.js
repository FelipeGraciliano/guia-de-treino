// ==========================================
// GUIA DE TREINO — LÓGICA PRINCIPAL (APP.JS)
// ==========================================

const themeToggle = document.getElementById('themeToggle');
if(localStorage.getItem('theme') === 'light'){ 
  document.documentElement.classList.add('light-mode'); 
}
if(themeToggle){
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    localStorage.setItem('theme', document.documentElement.classList.contains('light-mode') ? 'light' : 'dark');
  });
}

let currentPlan = "a";
let currentDay = "seg";
const state = {};
Object.keys(PLANS).forEach(p => { state[p] = {}; });

// ---- Persistência: séries marcadas no dia + variação escolhida por exercício ----
const STORAGE_KEY = "workout-progress";
const STORAGE_VERSION = 2;
let progress = { version: STORAGE_VERSION, checks: {}, selectedVariant: {}, experiment: {}, logs: {}, history: {}, lastPlan: null, lastDay: null };
let progressLoaded = false;

function todayStr(){
  const d = new Date();
  return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
}

function normalizeProgress(parsed){
  if(!parsed || typeof parsed !== "object") return null;
  return {
    version: parsed.version || 1,
    checks: parsed.checks || {},
    selectedVariant: parsed.selectedVariant || {},
    experiment: parsed.experiment || {},
    logs: parsed.logs || {},
    history: parsed.history || {},
    lastPlan: parsed.lastPlan || null,
    lastDay: parsed.lastDay || null
  };
}

function readLocalProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? normalizeProgress(JSON.parse(raw)) : null;
  }catch(e){
    console.warn("LocalStorage indisponível:", e);
    return null;
  }
}

function writeLocalProgress(payload){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    return true;
  }catch(e){
    console.warn("Não consegui salvar no LocalStorage:", e);
    return false;
  }
}

async function loadProgress(){
  let parsed = readLocalProgress();
  if(!parsed){
    try{
      if(window.storage && typeof window.storage.get === "function"){
        const result = await window.storage.get(STORAGE_KEY, false);
        if(result && result.value) parsed = normalizeProgress(JSON.parse(result.value));
      }
    }catch(e){
      console.warn("Armazenamento legado indisponível:", e);
    }
  }
  if(parsed){
    progress = parsed;
    // Migra dados antigos para o armazenamento padrão do navegador quando possível.
    writeLocalProgress(progress);
  }
  progressLoaded = true;
}

let saveTimer = null;
function saveProgress(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async ()=>{
    const saved = writeLocalProgress(progress);
    if(!saved){
      try{
        if(window.storage && typeof window.storage.set === "function") await window.storage.set(STORAGE_KEY, JSON.stringify(progress), false);
      }catch(e){
        console.error("Não consegui salvar o progresso:", e);
      }
    }
    showToast(saved ? "💾 Salvo neste navegador" : "⚠️ Não foi possível salvar");
  }, 250);
}

function showToast(message="Salvo") {
  let toast = document.getElementById('saveToast');
  if(!toast){
    toast = document.createElement('div');
    toast.id = 'saveToast';
    toast.className = 'save-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(()=> toast.classList.remove('show'), 1500);
}

function exportProgress(){
  const payload = { app:"Treino 10 v3-2", version:STORAGE_VERSION, exportedAt:new Date().toISOString(), progress };
  const blob = new Blob([JSON.stringify(payload,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "treino-backup-" + todayStr() + ".json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast("📤 Backup exportado");
}

function importProgress(){
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.onchange = async ()=>{
    const file = input.files && input.files[0];
    if(!file) return;
    try{
      const text = await file.text();
      const data = JSON.parse(text);
      const parsed = normalizeProgress(data.progress || data);
      if(!parsed) throw new Error("Formato inválido");
      if(!confirm("Importar este backup vai substituir o progresso atual neste aparelho. Continuar?")) return;
      progress = parsed;
      writeLocalProgress(progress);
      renderProgressPanel();
      renderPlanSwitch();
      renderNav(currentPlan);
      showToast("📥 Backup restaurado");
    }catch(e){
      console.error(e);
      showToast("⚠️ Backup inválido");
    }
  };
  input.click();
}

function setsCountFromScheme(scheme){
  const n = parseInt(scheme.split('×')[0].trim(), 10);
  return isNaN(n) ? 3 : n;
}
function exId(planKey, dayKey, gi, ei){ return planKey+"-"+dayKey+"-"+gi+"-"+ei; }

function howtoLink(exerciseName){
  const query = encodeURIComponent(exerciseName + " execução correta forma");
  const url = "https://www.youtube.com/results?search_query=" + query;
  return `<a class="howto-link" href="${url}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
    Ver execução
  </a>`;
}

function gifLink(exerciseName){
  const query = encodeURIComponent(exerciseName + " exercício execução");
  const url = "https://www.google.com/search?q=" + query + "&tbm=isch&tbs=itp:animated";
  return `<a class="howto-link" href="${url}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
    Ver GIF
  </a>`;
}

const TIPS = {
"Barra fixa": "Pegada pronada um pouco mais aberta que os ombros, puxe o corpo até o queixo passar da barra, sem balançar as pernas pra pegar embalo.",
"Abdominal na polia": "Ajoelhado de frente pra polia alta, segure a corda atrás da nuca e flexione o tronco enrolando a coluna pra baixo — não puxe com os braços, o movimento vem do abdômen contraindo.",
"Agachamento livre": "Pés na largura dos ombros, barra apoiada no trapézio (não no pescoço), desça levando o quadril pra trás como se fosse sentar, mantendo o peito erguido e os joelhos alinhados com a ponta dos pés.",
"Cadeira extensora": "Ajuste o encosto pra o joelho ficar alinhado com o eixo da máquina, estenda a perna até quase travar e desça controlado — não jogue o peso com impulso.",
"Crossover na polia alta": "Polias na posição alta, incline levemente o tronco à frente e puxe os cabos pra baixo e pra frente num arco, cruzando as mãos na frente do quadril, cotovelos levemente flexionados o tempo todo.",
"Crossover na polia baixa": "Polias na posição baixa, puxe os cabos de baixo pra cima cruzando na altura do peito, como se estivesse abraçando algo — foco em apertar o peito no topo do movimento.",
"Crucifixo / Pec Deck": "Sentado, costas apoiadas, uma leve flexão nos cotovelos que se mantém fixa, feche os braços à frente do peito sem deixar os ombros subirem.",
"Crucifixo com halteres": "Deitado no banco, halteres acima do peito com os braços quase estendidos, abra os braços em arco até sentir alongamento no peito, sem descer demais pra não forçar o ombro.",
"Crucifixo inverso": "Tronco inclinado à frente, halteres pendendo, abra os braços pros lados como se fosse voar, focando em juntar as escápulas — não é balançar o peso.",
"Desenvolvimento Arnold": "Comece com os halteres na frente do rosto, palmas voltadas pra você, e ao empurrar pra cima gire o punho até as palmas ficarem pra frente no topo.",
"Desenvolvimento militar com barra": "Barra na altura dos ombros com pegada pouco mais aberta que os ombros, empurre em linha reta acima da cabeça mantendo o abdômen contraído pra não arquear demais a lombar.",
"Desenvolvimento com halteres": "Sentado com apoio nas costas, halteres na altura dos ombros, empurre pra cima até quase estender o cotovelo, sem bater os halteres no topo.",
"Elevação de pernas": "Deitado ou pendurado na barra, suba as pernas controlando o movimento até a horizontal ou mais, evitando balançar o corpo pra usar impulso.",
"Elevação frontal com halteres": "Halteres na frente das coxas, suba um braço (ou os dois) até a altura dos ombros com o cotovelo levemente flexionado, sem usar embalo do tronco.",
"Elevação lateral": "Halteres ao lado do corpo, suba os braços até a altura dos ombros com leve flexão no cotovelo, liderando o movimento com o cotovelo e não com a mão.",
"Elevação lateral inclinada no banco": "Deitado de lado num banco inclinado, o braço de baixo eleva o halter puro, sem ajuda do corpo — a posição trava qualquer impulso, então use menos peso do que na elevação em pé.",
"Elevação lateral na polia": "Polia baixa ao lado do corpo, puxe o cabo cruzando levemente na frente do corpo até a altura do ombro, mantendo o cotovelo semi-flexionado fixo.",
"Elevação lateral com halteres": "Halteres ao lado do corpo, suba os dois braços juntos até a altura dos ombros liderando com o cotovelo, sem balançar o tronco pra dar impulso.",
"Face pull na polia": "Polia na altura do rosto com corda, puxe em direção ao rosto abrindo os cotovelos pros lados e girando os punhos pra fora no final.",
"Encolhimento com halteres": "Halteres ao lado do corpo, suba os ombros em direção às orelhas (só os ombros, sem girar) e segure 1 segundo no topo antes de descer controlado.",
"Encolhimento com barra": "Barra na frente do corpo com pegada pronada, suba os ombros puro pra cima sem flexionar os cotovelos nem usar as costas pra impulsionar.",
"Hip thrust": "Costas apoiadas num banco, barra ou peso sobre o quadril, empurre o quadril pra cima até o corpo formar uma linha reta dos ombros aos joelhos, apertando o glúteo no topo.",
"Leg press 45°": "Pés na largura dos ombros na plataforma, desça até os joelhos formarem cerca de 90°, sem tirar a lombar do encosto nem travar os joelhos no topo.",
"Mesa flexora": "Deitado de bruços, tornozelos sob o apoio, flexione os joelhos puxando o peso em direção ao glúteo, controlando bem a descida.",
"Panturrilha em pé": "Na máquina ou com halteres, desça o calcanhar o máximo que conseguir pra alongar, depois suba na ponta do pé apertando a panturrilha no topo — movimento lento, sem quicar.",
"Panturrilha sentado": "Joelhos dobrados a 90°, peso sobre as coxas, suba e desça na ponta dos pés controlando bem — essa posição foca o sóleo, o músculo mais embaixo da panturrilha.",
"Pec Deck": "Sentado, cotovelos na altura do peito apoiados nas almofadas, feche os braços à frente sem deixar os ombros subirem em direção às orelhas.",
"Pulldown unilateral na polia": "Um braço de cada vez, puxe o cabo até a altura do peito levando o cotovelo pra trás e pro corpo, sentindo a contração nas costas, não no braço.",
"Pullover na polia": "Em pé de costas pra polia alta com braços estendidos acima da cabeça, puxe o cabo num arco até a altura das coxas, mantendo o cotovelo levemente flexionado e fixo.",
"Puxada alta aberta": "Pegada mais aberta que os ombros, puxe a barra até a altura do queixo/peito levando os cotovelos pra baixo e pra trás, sem jogar o tronco pra trás.",
"Puxada alta com triângulo": "Pegada neutra e fechada no triângulo, puxe até o peito levando os cotovelos pro lado do corpo, aproveitando a amplitude maior dessa pegada.",
"Puxada supinada (pegada inversa)": "Pegada fechada com as palmas viradas pra você, puxe até o peito — essa pegada ativa mais o bíceps junto com as costas.",
"Remada baixa com triângulo": "Sentado, tronco ereto, puxe o triângulo até a altura do abdômen levando os cotovelos pra trás rente ao corpo, sem balançar o tronco pra ajudar.",
"Remada cavalinho": "Barra presa numa ponta, você fica entre a barra e a pega em V ou triângulo, puxe até o abdômen mantendo o tronco firme, quase sem inclinar.",
"Remada curvada": "Tronco inclinado à frente cerca de 45°, barra próxima às canelas, puxe até a altura do abdômen levando os cotovelos pra trás, mantendo a lombar neutra o tempo todo.",
"Rosca 21": "7 reps na metade de baixo do movimento, 7 na metade de cima, e 7 na amplitude completa, sem descanso entre os blocos — ótimo pra fechar o treino de bíceps.",
"Rosca Scott": "Braços apoiados no banco Scott, desça controlado até quase estender o cotovelo e suba sem balançar o corpo — o apoio impede o impulso.",
"Rosca alternada inclinada": "Deitado num banco inclinado, braços soltos pra trás do corpo, alterne a flexão de cada braço — a posição alonga mais o bíceps no início do movimento.",
"Rosca concentrada": "Sentado, cotovelo apoiado na parte interna da coxa, flexione o braço isoladamente até o topo, apertando o bíceps.",
"Rosca direta W": "Barra W (ondulada) pega menos peso no punho, flexione os cotovelos sem balançar o tronco pra ajudar a subir o peso.",
"Rosca inclinada": "Sentado num banco inclinado com os braços soltos atrás do corpo, flexione controlado — o alongamento no início é o que faz essa variação valer a pena.",
"Rosca martelo": "Halteres com pegada neutra (palmas viradas uma pra outra), flexione os cotovelos sem girar o punho — pega o braquial e o antebraço.",
"Rosca martelo cross-body": "Pegada neutra, mas leve o halter em direção ao ombro oposto em vez de subir reto — muda um pouco o ângulo de trabalho.",
"Stiff": "Barra próxima às canelas, joelhos levemente flexionados (quase travados), desça o tronco levando o quadril pra trás, sentindo alongar o posterior de coxa, sem arredondar as costas.",
"Stiff com halteres": "Mesma lógica do stiff com barra, só que os halteres deslizam ao lado das pernas — mais fácil de controlar pra quem está aprendendo o movimento.",
"Supino declinado ou mergulho assistido": "No banco declinado, desça a barra/halteres até o peito na parte inferior; no mergulho, incline levemente o tronco à frente pra focar mais no peito do que no tríceps.",
"Supino inclinado com halteres": "Banco a 30-45°, halteres na altura do peito, empurre pra cima sem travar o cotovelo no topo — inclinação maior que isso já rouba trabalho do ombro.",
"Supino inclinado na máquina": "Ajuste o banco pra pegada ficar na altura do peito superior, empurre controlado — a máquina trava o trajeto, então foque em sentir o peito trabalhando, não só empurrar peso.",
"Supino reto com barra": "Pegada um pouco mais aberta que os ombros, desça a barra até tocar o peito levemente, cotovelos a uns 45° do corpo (não colados nem totalmente abertos).",
"Tríceps acima da cabeça na corda": "De costas pra polia baixa, corda atrás da cabeça, estenda os braços pra frente e pra cima — essa posição alonga bem a cabeça longa do tríceps.",
"Tríceps corda": "Cotovelos colados ao corpo, empurre a corda pra baixo abrindo as pontas no final do movimento, sem deixar o cotovelo se afastar do tronco.",
"Tríceps francês": "Deitado ou em pé, halter ou barra atrás da cabeça, estenda o cotovelo mantendo o braço fixo — só o antebraço se move.",
"Tríceps francês unilateral": "Mesmo movimento do francês, só que um braço de cada vez — ajuda a perceber se um lado está mais fraco que o outro.",
"Tríceps pulley com barra": "Cotovelos fixos ao lado do corpo, empurre a barra pra baixo até estender o cotovelo, sem deixar o corpo balançar pra ajudar.",
"Tríceps pulley com corda": "Igual ao pulley com barra, mas a corda permite abrir as mãos no final, ativando um pouco mais a cabeça lateral.",
"Tríceps testa": "Deitado no banco, barra ou halteres começando estendidos acima do peito, desça flexionando só o cotovelo até quase tocar a testa, sem mexer o braço.",
"Tríceps testa com halteres": "Mesma ideia do tríceps testa, só que com halteres — permite girar o punho e cada braço trabalha um pouco independente.",
"Tríceps unilateral na polia": "Um braço de cada vez na polia, cotovelo fixo, empurre pra baixo até estender — bom pra perceber diferenças entre os lados.",
"Barra fixa": "Comece com as escápulas controladas, puxe os cotovelos para baixo e evite balançar o corpo. Use uma assistência adequada se necessário.",
"Remada cavalinho": "Mantenha o tronco estável, puxe o apoio/pegador em direção ao abdômen e controle a volta sem transformar a remada em balanço.",
"Remada articulada": "Ajuste o banco para os braços alcançarem a posição inicial sem perder a postura; puxe com os cotovelos e controle a volta.",
"Remada baixa com triângulo": "Mantenha o tronco estável, puxe o triângulo em direção ao abdômen e evite projetar o corpo para trás para terminar a repetição.",
"Crossover na polia média": "Fique no centro das polias, cotovelos levemente flexionados e feche as mãos à frente do tronco de forma controlada.",
"Crossover na polia baixa": "Parta com as mãos mais baixas e leve-as para cima e para dentro em direção à linha do peito, sem elevar os ombros.",
"Puxada alta neutra": "Use pegada neutra e puxe os cotovelos para baixo, mantendo o tronco estável e evitando puxar com o balanço.",
"Puxada unilateral na máquina": "Trabalhe um lado por vez, puxando o cotovelo para baixo e mantendo o ombro controlado durante todo o percurso.",
"Crucifixo inverso na máquina": "Com peito apoiado quando possível, abra os braços usando o deltoide posterior e controle a volta sem encolher os ombros.",
"Elevação lateral na máquina": "Mantenha o movimento lateral controlado, subindo até uma amplitude confortável e sem usar impulso do tronco.",
"Pec Deck": "Mantenha o peito apoiado, leve os braços para a frente sem bater as placas e controle o alongamento na volta.",
};

const GENERIC_TIPS = [
  [/^Rosca/, "Movimento de flexão de cotovelo focado no bíceps. Mantenha o cotovelo parado ao lado do corpo e evite balançar o tronco pra ajudar a subir o peso."],
  [/^Tríceps/, "Extensão de cotovelo focada no tríceps. Cotovelo fixo, sem deixar o corpo balançar — o movimento deve vir só do antebraço."],
  [/^Supino/, "Deitado no banco, desça a barra/halteres controlado até quase tocar o peito e empurre de volta sem travar o cotovelo com força no topo."],
  [/^(Puxada|Remada|Pulldown)/, "Puxe levando o cotovelo pra trás e pro corpo, sentindo a contração nas costas — evite usar o embalo do tronco pra puxar o peso."],
  [/^Face pull/, "Puxe a corda em direção ao rosto abrindo os cotovelos, focando em juntar as escápulas."],
  [/^(Elevação lateral|Elevação frontal|Desenvolvimento)/, "Movimento de ombro: mantenha o cotovelo levemente flexionado e controle a descida — não use impulso do corpo pra levantar o peso."],
  [/^(Agachamento|Leg press|Passada|Hack)/, "Desça controlado mantendo o joelho alinhado com a ponta do pé e o peito erguido, sem deixar a lombar arredondar."],
  [/^(Stiff|Levantamento terra romeno|Good morning)/, "Quadril pra trás, joelhos quase travados, desça o tronco sentindo alongar o posterior de coxa — mantenha as costas retas o tempo todo."],
  [/^Panturrilha/, "Desça o calcanhar pra alongar bem e suba na ponta do pé apertando o músculo no topo — movimento lento, sem quicar."],
  [/^(Abdominal|Prancha|Elevação de pernas|Roda abdominal)/, "Foco em contrair o abdômen enrolando a coluna, não em puxar com os braços ou balançar o corpo."],
  [/^(Hip thrust|Elevação pélvica|Cadeira abdutora)/, "Aperte o glúteo no topo do movimento — é essa contração final que faz o exercício valer a pena, não só levantar o peso."],
  [/^(Crucifixo|Pec Deck|Crossover)/, "Mantenha uma leve flexão fixa no cotovelo e feche os braços à frente do peito, sem deixar os ombros subirem em direção às orelhas."],
  [/^(Cadeira flexora|Flexora)/, "Flexione o joelho puxando o peso em direção ao glúteo, controlando bem a volta — não deixe o peso cair sozinho."],
];

function getTip(exerciseName){
  if(TIPS[exerciseName]) return TIPS[exerciseName];
  for(const [pattern, tip] of GENERIC_TIPS){
    if(pattern.test(exerciseName)) return tip + " (dica geral pra essa variação — o vídeo de execução mostra o movimento específico.)";
  }
  return "Sem dica específica ainda pra essa variação — toca em \"Ver execução\" pra ver o movimento em vídeo.";
}

function logId(planKey, dayKey, gi, ei, si){ return exId(planKey, dayKey, gi, ei)+"-set-"+si; }
function getLog(planKey, dayKey, gi, ei, si){
  return progress.logs[logId(planKey,dayKey,gi,ei,si)] || {weight:"", reps:""};
}
function saveSetLog(planKey, dayKey, gi, ei, si, field, value){
  const id=logId(planKey,dayKey,gi,ei,si);
  progress.logs[id]=progress.logs[id] || {weight:"",reps:""};
  progress.logs[id][field]=value;
  saveProgress();
}
function addHistoryEntry(planKey, dayKey, gi, ei, variantName){
  const ex=PLANS[planKey].days[dayKey].groups[gi].exercises[ei];
  const base=exId(planKey,dayKey,gi,ei);
  const sets=[];
  const count=setsCountFromScheme(ex.scheme);
  for(let si=0;si<count;si++){
    const log=getLog(planKey,dayKey,gi,ei,si);
    if(log.weight!=="" || log.reps!=="") sets.push({set:si+1,weight:log.weight,reps:log.reps,done:!!(progress.checks[base]?.sets?.[si])});
  }
  if(!sets.length) return;
  const key=base;
  progress.history[key]=progress.history[key] || [];
  const date=todayStr();
  const existing=progress.history[key].find(h=>h.date===date);
  const entry={date,exercise:variantName,sets};
  if(existing) Object.assign(existing,entry); else progress.history[key].unshift(entry);
  progress.history[key]=progress.history[key].slice(0,10);
}
function renderHistory(planKey,dayKey,gi,ei){
  const id=exId(planKey,dayKey,gi,ei);
  const list=progress.history[id] || [];
  if(!list.length) return '<div class="history-empty">Ainda não há histórico registrado para este exercício.</div>';
  return list.slice(0,5).map(h=>`<div class="history-item"><b>${h.date} · ${h.exercise}</b><span>${h.sets.map(x=>`S${x.set}: ${x.weight!==""?x.weight+' kg':'—'} × ${x.reps!==""?x.reps:'—'}${x.done?' ✓':''}`).join(' · ')}</span></div>`).join('');
}

function updateExCardStatus(card, totalSets, doneSets){
  card.classList.toggle('done', doneSets === totalSets);
}
function updateProgress(planKey, dayKey){
  const panel = document.getElementById('panel-'+planKey+'-'+dayKey);
  if(!panel) return;
  let total = 0, done = 0;
  panel.querySelectorAll('.set-dot').forEach(dot=>{
    total++;
    if(dot.classList.contains('checked')) done++;
  });
  const pct = total ? Math.round((done/total)*100) : 0;
  panel.querySelector('.progress-fill').style.width = pct + '%';
  panel.querySelector('.progress-label').textContent = done + '/' + total + ' séries';
}

function renderSplitBar(split){
  if(!split) return '';
  const bar = split.map(([label,color,pct]) => `<div style="width:${pct}%; background:var(--${color});"></div>`).join('');
  const legend = split.map(([label,color,pct]) => `<span><i style="background:var(--${color})"></i>${label} ${pct}%</span>`).join('');
  return `<div class="split-bar">${bar}</div><div class="split-legend">${legend}</div>`;
}

function renderDay(planKey, dayKey){
  const d = PLANS[planKey].days[dayKey];
  const panel = document.createElement('div');
  panel.className = 'day-panel plan-' + planKey;
  panel.id = 'panel-'+planKey+'-'+dayKey;

  let html = `
    <div class="day-title">
      <h2>${d.label} — ${d.title}</h2>
    </div>
    ${d.division ? `<div class="day-division" style="--dc:var(--${d.color})">
      <div class="dd-row"><b>🏋️ DIVISÃO</b><span class="dd-div">${d.division}</span></div>
      <div class="dd-row"><b>MÚSCULOS</b><span>${d.muscles}</span></div>
    </div>` : ''}
    <div class="progress-wrap">
      <div class="progress-track"><div class="progress-fill"></div></div>
      <div class="progress-label">0/0 séries</div>
    </div>
  `;
  if(d.note){ html += `<div class="note">${d.note}</div>`; }
  if(/perna|legs|quadríceps/i.test(d.title)){
    html += `<div class="note" style="border-color:var(--qua);color:var(--ink-dim)">⚠️ Se houver dor persistente, inchaço, instabilidade ou piora dos sintomas no joelho, interrompa o movimento e procure avaliação profissional.</div>`;
  }

  d.groups.forEach((g, gi) => {
    html += `<div class="group"><div class="group-head"><h3>${g.name}</h3>${g.total ? `<span>${g.total}</span>` : ''}</div>`;
    html += renderSplitBar(g.split);
    g.exercises.forEach((ex, ei) => {
      const setsCount = setsCountFromScheme(ex.scheme);
      const id = exId(planKey, dayKey, gi, ei);
      const variantNames = [ex.name, ...(ex.alts||[])];
      const savedVariant = progress.selectedVariant[id] || 0;
      const activeVariant = variantNames[savedVariant] ? savedVariant : 0;
      html += `
        <div class="ex-card" id="card-${id}">
          <div class="ex-top">
            <div>
              <p class="ex-name" id="name-${id}">${activeVariant>0 ? '🔁 ' : ''}${variantNames[activeVariant]} ${ex.advanced ? `<span class="adv-tag">${ex.advanced}</span>` : ''}</p>
              ${ex.target ? `<p class="ex-target">${ex.target}</p>` : ''}
            </div>
            <div class="ex-scheme">${ex.scheme}</div>
          </div>
          <span id="howto-${id}" class="howto-links">${howtoLink(variantNames[activeVariant])}${gifLink(variantNames[activeVariant])}</span>
          <div class="sets-row" data-total="${setsCount}" data-id="${id}" data-gi="${gi}" data-ei="${ei}">
            ${Array.from({length:setsCount}).map((_,si)=>`<div class="set-dot" data-set="${si}">${si+1}</div>`).join('')}
          </div>
          <div class="set-log">
            <span class="set-log-head">Série</span><span class="set-log-head">Carga (kg)</span><span class="set-log-head">Reps</span>
            ${Array.from({length:setsCount}).map((_,si)=>{const l=getLog(planKey,dayKey,gi,ei,si); return `<span class="set-num">${si+1}</span><input inputmode="decimal" type="text" placeholder="—" data-log-field="weight" data-log-set="${si}" value="${String(l.weight??'').replace(/"/g,'&quot;')}"><input inputmode="numeric" type="text" placeholder="—" data-log-field="reps" data-log-set="${si}" value="${String(l.reps??'').replace(/"/g,'&quot;')}">`;}).join('')}
          </div>
          <button class="summary-btn history-btn" type="button" data-history-toggle="${id}">📈 Histórico</button>
          <div class="history-panel" id="history-${id}"><div class="history-title">Histórico do exercício</div>${renderHistory(planKey,dayKey,gi,ei)}</div>
          ${ex.alts && ex.alts.length ? `
          <button class="ex-swap" data-toggle="${id}" id="swaptoggle-${id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
            ${activeVariant>0 ? 'Trocar variação (fazendo substituto)' : 'Não tem o equipamento?'}
          </button>
          <div class="alt-row" id="alt-${id}">
            ${variantNames.map((v,i)=>`
              <button class="variant-pick${i===activeVariant?' picked':''}" data-ex-id="${id}" data-variant="${i}">
                <span class="vp-check">${i===activeVariant?'●':'○'}</span>
                <span class="vp-label">${i===0?'Principal: ':'Opção '+i+': '}${v}</span>
              </button>`).join('')}
          </div>
          ` : ''}
          <div class="ex-tip" id="tip-${id}"><b>Como fazer:</b> ${getTip(variantNames[activeVariant])}</div>
        </div>
      `;
    });
    html += `</div>`;
  });

  html += `<button class="reset-btn" data-reset-plan="${planKey}" data-reset-day="${dayKey}">Desmarcar tudo do dia</button>`;

  panel.innerHTML = html;
  document.getElementById('dayContainer').appendChild(panel);

  // Restaura séries marcadas hoje
  panel.querySelectorAll('.sets-row').forEach(row=>{
    const id = row.dataset.id;
    const total = parseInt(row.dataset.total, 10);
    const saved = progress.checks[id];
    if(saved && saved.date === todayStr() && Array.isArray(saved.sets)){
      row.querySelectorAll('.set-dot').forEach((dot, i)=>{
        if(saved.sets[i]) dot.classList.add('checked');
      });
      const card = document.getElementById('card-'+id);
      updateExCardStatus(card, total, row.querySelectorAll('.set-dot.checked').length);
    }
  });

  panel.querySelectorAll('.sets-row').forEach(row=>{
    const id = row.dataset.id;
    const total = parseInt(row.dataset.total, 10);
    row.querySelectorAll('.set-dot').forEach(dot=>{
      dot.addEventListener('click', ()=>{
        dot.classList.toggle('checked');
        const card = document.getElementById('card-'+row.dataset.id);
        const doneCount = row.querySelectorAll('.set-dot.checked').length;
        updateExCardStatus(card, total, doneCount);
        updateProgress(planKey, dayKey);
        const setsArr = Array.from(row.querySelectorAll('.set-dot')).map(d=>d.classList.contains('checked'));
        progress.checks[id] = { date: todayStr(), sets: setsArr };
        const rowGi=parseInt(row.dataset.gi,10);
        const rowEi=parseInt(row.dataset.ei,10);
        const ex2=PLANS[planKey].days[dayKey].groups[rowGi].exercises[rowEi];
        const variants2=[ex2.name,...(ex2.alts||[])];
        addHistoryEntry(planKey,dayKey,rowGi,rowEi,variants2[parseInt(progress.selectedVariant[id]||0,10)] || ex2.name);
        saveProgress();
        renderNav(planKey);
      });
    });
  });

  panel.querySelectorAll('[data-toggle]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.getElementById('alt-'+btn.dataset.toggle).classList.toggle('open');
    });
  });

  panel.querySelectorAll('.variant-pick').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.dataset.exId;
      const variant = parseInt(btn.dataset.variant, 10);
      progress.selectedVariant[id] = variant;
      saveProgress();

      // Atualiza os botões de seleção (radio visual)
      const altRow = document.getElementById('alt-'+id);
      altRow.querySelectorAll('.variant-pick').forEach(b=>{
        const isPicked = parseInt(b.dataset.variant,10) === variant;
        b.classList.toggle('picked', isPicked);
        b.querySelector('.vp-check').textContent = isPicked ? '●' : '○';
      });

      // Atualiza nome exibido, link de execução e dica pra variação escolhida
      const label = btn.querySelector('.vp-label').textContent.replace(/^(Principal|Opção \d+): /, '');
      const nameEl = document.getElementById('name-'+id);
      nameEl.textContent = (variant>0 ? '🔁 ' : '') + label;
      document.getElementById('howto-'+id).innerHTML = howtoLink(label) + gifLink(label);
      document.getElementById('tip-'+id).innerHTML = `<b>Como fazer:</b> ${getTip(label)}`;

      const swapBtn = document.getElementById('swaptoggle-'+id);
      const label2 = swapBtn.childNodes[swapBtn.childNodes.length-1];
      label2.textContent = variant>0 ? ' Trocar variação (fazendo substituto)' : ' Não tem o equipamento?';
    });
  });

  panel.querySelectorAll('[data-log-field]').forEach(input=>{
    input.addEventListener('input', ()=>{
      const row=input.closest('.ex-card');
      const setsRow=row.querySelector('.sets-row');
      const id=setsRow.dataset.id;
      const gi2=parseInt(setsRow.dataset.gi,10);
      const ei2=parseInt(setsRow.dataset.ei,10);
      const si=parseInt(input.dataset.logSet,10);
      saveSetLog(planKey,dayKey,gi2,ei2,si,input.dataset.logField,input.value.trim());
      const ex2=PLANS[planKey].days[dayKey].groups[gi2].exercises[ei2];
      const variants2=[ex2.name,...(ex2.alts||[])];
      addHistoryEntry(planKey,dayKey,gi2,ei2,variants2[parseInt(progress.selectedVariant[id]||0,10)] || ex2.name);
    });
  });
  panel.querySelectorAll('[data-history-toggle]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const hp=document.getElementById('history-'+btn.dataset.historyToggle);
      if(!hp) return;
      hp.classList.toggle('show');
      if(hp.classList.contains('show')) hp.innerHTML='<div class="history-title">Histórico do exercício</div>'+renderHistory(planKey,dayKey,gi,ei);
    });
  });

  panel.querySelector('[data-reset-day]').addEventListener('click', ()=>{
    panel.querySelectorAll('.set-dot.checked').forEach(dot=>dot.classList.remove('checked'));
    panel.querySelectorAll('.ex-card').forEach(card=>card.classList.remove('done'));
    panel.querySelectorAll('.sets-row').forEach(row=>{
      delete progress.checks[row.dataset.id];
    });
    updateProgress(planKey, dayKey);
    saveProgress();
    renderNav(planKey);
  });

  updateProgress(planKey, dayKey);
}

function renderStrategyPanel(planKey){
  const panel=document.getElementById('strategyPanel');
  const p=PLANS[planKey];
  if(!panel || !p) return;
  if(!p.meta){ panel.classList.remove('show'); panel.innerHTML=''; return; }
  panel.innerHTML=`<div class="strategy-head"><div><div class="strategy-title">${p.label}</div><div style="font-size:12px;opacity:.75;margin-top:3px">${p.desc}</div></div></div>${renderDivisionCard(p)}${renderWeekDistribution(planKey)}<div class="strategy-grid">${Object.entries(p.meta).map(([k,v])=>`<div class="strategy-item"><b>${k}</b>${v}</div>`).join('')}</div>`;
  panel.classList.add('show');
  panel.querySelectorAll('.week-row[data-day]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      selectDay(planKey, btn.dataset.day);
      const nav = document.getElementById('dayNav');
      if(nav && nav.scrollIntoView) nav.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
}


function renderCatFilter(){
  const wrap = document.getElementById('catFilter');
  wrap.innerHTML = '';
  const present = new Set(['all']);
  Object.keys(PLANS).forEach(pk=>{
    if(PLANS[pk].category) present.add(PLANS[pk].category);
    if((PLANS[pk].tags||[]).includes('EXPERIMENTAL')) present.add('EXP');
  });
  Object.keys(CATEGORY_LABELS).forEach(catKey=>{
    if(!present.has(catKey)) return;
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (catKey===currentCategoryFilter ? ' active' : '');
    btn.textContent = CATEGORY_LABELS[catKey];
    btn.addEventListener('click', ()=>{
      currentCategoryFilter = catKey;
      renderCatFilter();
      renderPlanSwitch();
      const visiblePlans = Object.keys(PLANS).filter(pk=>planMatchesCurrentFilters(pk));
      if(visiblePlans.length && !visiblePlans.includes(currentPlan)){
        selectPlan(visiblePlans[0]);
      }
    });
    wrap.appendChild(btn);
  });
}

let planSearchTerm = "";
function searchablePlanText(planKey){
  const p=PLANS[planKey]||{};
  const dayText = Object.values(p.days||{}).map(d=>[d.division,d.muscles].join(" "));
  return normSearch([p.label,p.desc,p.category,...(p.tags||[]),...(p.meta?Object.values(p.meta):[]),p.division,p.divisionMuscles,p.divisionDescription,...dayText].join(" "));
}
function planMatchesCurrentFilters(planKey){
  return planMatchesFilter(planKey,currentCategoryFilter) && (!planSearchTerm || searchablePlanText(planKey).includes(planSearchTerm));
}
function renderComparison(){
  const panel=document.getElementById('comparisonPanel');
  if(!panel.classList.contains('open')) return;
  const keys=Object.keys(PLANS);
  const options=keys.map(k=>`<option value="${k}">${PLANS[k].label}</option>`).join('');
  const a=panel.dataset.a||currentPlan;
  const b=panel.dataset.b||keys.find(k=>k!==a)||a;
  panel.innerHTML=`<div style="font-weight:800;font-size:16px">⚖️ Comparar estratégias</div><div style="font-size:11px;opacity:.7;margin:3px 0 9px">Compare divisão, frequência, foco e fase. A tabela descreve; não escolhe por você.</div><div class="compare-grid"><select id="cmpA">${options}</select><select id="cmpB">${options}</select></div><div id="cmpResult"></div>`;
  panel.querySelector('#cmpA').value=a; panel.querySelector('#cmpB').value=b;
  const render=()=>{
    const ka=panel.querySelector('#cmpA').value,kb=panel.querySelector('#cmpB').value; panel.dataset.a=ka;panel.dataset.b=kb;
    const pa=PLANS[ka],pb=PLANS[kb];
    const rows=[['Divisão',pa.division||pa.desc,pb.division||pb.desc],['O que é treinado',pa.divisionMuscles||'—',pb.divisionMuscles||'—'],['Descrição da divisão',pa.divisionDescription||'—',pb.divisionDescription||'—'],['Resumo',pa.desc,pb.desc],['Categoria',pa.category||'—',pb.category||'—'],['Tags',(pa.tags||[]).join(', ')||'—',(pb.tags||[]).join(', ')||'—'],['Foco',pa.meta?.foco||'—',pb.meta?.foco||'—'],['Frequência',pa.meta?.frequencia||'—',pb.meta?.frequencia||'—'],['Estilo',pa.meta?.estilo||'—',pb.meta?.estilo||'—'],['Fase',pa.meta?.fase||'—',pb.meta?.fase||'—'],['Dias',Object.values(pa.days).map(d=>d.title).join(' • '),Object.values(pb.days).map(d=>d.title).join(' • ')],['Semana',Object.values(pa.days).map(d=>d.label+': '+d.division+' ('+d.muscles+')').join(' • '),Object.values(pb.days).map(d=>d.label+': '+d.division+' ('+d.muscles+')').join(' • ')]];
    panel.querySelector('#cmpResult').innerHTML=`<table class="compare-table"><thead><tr><th>Item</th><th>${pa.label}</th><th>${pb.label}</th></tr></thead><tbody>${rows.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table>`;
  };
  panel.querySelectorAll('select').forEach(x=>x.addEventListener('change',render)); render();
}

function renderPlanSwitch(){
  const wrap = document.getElementById('planSwitch');
  wrap.innerHTML = '';
  const isEmergency = (k) => k === 'em' || k === 'em4';
  const isRecommended = (k) => k === 'rec';
  Object.keys(PLANS).filter(pk=>planMatchesCurrentFilters(pk)).forEach((planKey, i) => {
    const p = PLANS[planKey];
    const btn = document.createElement('button');
    btn.className = 'plan-btn' + (planKey===currentPlan ? ' active' : '') + (isEmergency(planKey) ? ' highlight' : '') + (isRecommended(planKey) ? ' recommended' : '');
    btn.dataset.plan = planKey;
    btn.innerHTML = `<span class="pname">${isEmergency(planKey) ? '🚨 ' : ''}${p.label}</span><span class="pdesc">${p.desc}</span>${p.division ? `<span class="pdiv" title="${p.division}">${p.division}</span>` : ''}`;
    btn.addEventListener('click', ()=> selectPlan(planKey));
    wrap.appendChild(btn);
  });
}

function isDayDoneToday(planKey, dayKey){
  const day = PLANS[planKey].days[dayKey];
  let totalSets = 0, doneSets = 0;
  day.groups.forEach(g=>{
    g.exercises.forEach((ex, ei)=>{
      const gi = day.groups.indexOf(g);
      const id = exId(planKey, dayKey, gi, ei);
      const total = setsCountFromScheme(ex.scheme);
      totalSets += total;
      const saved = progress.checks[id];
      if(saved && saved.date === todayStr()){
        doneSets += saved.sets.filter(Boolean).length;
      }
    });
  });
  return totalSets > 0 && doneSets === totalSets;
}

const WEEKDAY_KEY = ["dom","seg","ter","qua","qui","sex","sab"];
function todayKey(){ return WEEKDAY_KEY[new Date().getDay()]; }

function renderNav(planKey){
  const nav = document.getElementById('dayNav');
  nav.innerHTML = '';
  const days = PLANS[planKey].days;
  const today = todayKey();
  const activeDay = days[currentDay] ? currentDay : Object.keys(days)[0];
  Object.keys(days).forEach((dayKey)=>{
    const d = days[dayKey];
    const btn = document.createElement('button');
    btn.className = 'day-btn' + (dayKey===activeDay ? ' active' : '');
    btn.dataset.day = dayKey;
    const done = isDayDoneToday(planKey, dayKey);
    const isToday = dayKey === today;
    btn.innerHTML = `<span class="dot" style="background:var(--${d.color})"></span>${d.label}${done ? ' ✓' : ''}${isToday ? '<span class="today-tag">hoje</span>' : ''}`;
    btn.addEventListener('click', ()=> selectDay(planKey, dayKey));
    nav.appendChild(btn);
  });
}

function selectDay(planKey, dayKey){
  currentDay = dayKey;
  document.querySelectorAll('.day-btn').forEach(b=>b.classList.toggle('active', b.dataset.day===dayKey));
  document.querySelectorAll('.day-panel').forEach(p=>{
    const belongsToPlan = p.classList.contains('plan-'+planKey);
    const isThisDay = p.id === 'panel-'+planKey+'-'+dayKey;
    p.classList.toggle('active', belongsToPlan && isThisDay);
  });
  document.body.setAttribute('data-active', dayKey);
  progress.lastPlan = planKey;
  progress.lastDay = dayKey;
  saveProgress();
}

function computeWeeklySummary(planKey){
  const MUSCLE_MAP = {
    "Peito":"Peito", "Costas":"Costas", "Tríceps":"Tríceps", "Bíceps":"Bíceps",
    "Ombro":"Ombro", "Ombros":"Ombro", "Ombro lateral":"Ombro", "Ombro posterior":"Ombro",
    "Quadríceps":"Pernas", "Posterior":"Pernas", "Glúteos":"Pernas",
    "Panturrilhas":"Pernas", "Panturrilha":"Pernas", "Abdômen":"Abdômen",
  };
  const totals = {};
  const days = PLANS[planKey].days;
  Object.keys(days).forEach(dayKey=>{
    days[dayKey].groups.forEach(g=>{
      const base = g.name.split('—')[0].trim();
      const muscle = MUSCLE_MAP[base] || base;
      const sets = g.exercises.reduce((s,ex)=> s + setsCountFromScheme(ex.scheme), 0);
      totals[muscle] = (totals[muscle]||0) + sets;
    });
  });
  return totals;
}

function renderSummary(planKey){
  const panel = document.getElementById('summaryPanel');
  const totals = computeWeeklySummary(planKey);
  const max = Math.max(...Object.values(totals), 1);
  const order = ["Peito","Costas","Ombro","Bíceps","Tríceps","Pernas","Abdômen"];
  const keys = order.filter(k=>totals[k]!==undefined).concat(Object.keys(totals).filter(k=>!order.includes(k)));
  let html = `<h4>Séries por semana — ${PLANS[planKey].label}</h4>`;
  keys.forEach(k=>{
    const pct = Math.round((totals[k]/max)*100);
    html += `
      <div class="summary-row">
        <span class="sname">${k}</span>
        <div class="sbar-track"><div class="sbar-fill" style="width:${pct}%; background:var(--${PLANS[planKey].days[Object.keys(PLANS[planKey].days)[0]].color})"></div></div>
        <span class="sval">${totals[k]}</span>
      </div>`;
  });
  panel.innerHTML = html;
}

document.getElementById('summaryBtn').addEventListener('click', ()=>{
  const panel = document.getElementById('summaryPanel');
  const willOpen = !panel.classList.contains('open');
  if(willOpen) renderSummary(currentPlan);
  panel.classList.toggle('open', willOpen);
});

function dateKeyFromDate(d){
  return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
}

function collectProgressHistory(){
  const byDate = {};
  const exerciseKeys = Object.keys(progress.history || {});
  exerciseKeys.forEach(key=>{
    (progress.history[key] || []).forEach(entry=>{
      if(!entry || !entry.date) return;
      if(!byDate[entry.date]) byDate[entry.date]={sets:0,done:0,exercises:new Set()};
      byDate[entry.date].exercises.add(entry.exercise || key);
      (entry.sets || []).forEach(set=>{
        byDate[entry.date].sets++;
        if(set.done) byDate[entry.date].done++;
      });
    });
  });
  return {byDate, exerciseCount:exerciseKeys.filter(k=>(progress.history[k]||[]).length).length};
}

function renderProgressPanel(){
  const panel=document.getElementById('progressPanel');
  if(!panel) return;
  const {byDate,exerciseCount}=collectProgressHistory();
  const dates=Object.keys(byDate).sort((a,b)=>new Date(b)-new Date(a));
  const totalSets=dates.reduce((sum,d)=>sum+byDate[d].sets,0);
  const totalDone=dates.reduce((sum,d)=>sum+byDate[d].done,0);
  const recentDates=dates.slice(0,5);
  const now=new Date();
  const week=[];
  for(let i=6;i>=0;i--){
    const d=new Date(now); d.setHours(0,0,0,0); d.setDate(d.getDate()-i);
    const key=dateKeyFromDate(d);
    week.push({key, label:d.toLocaleDateString('pt-BR',{weekday:'short'}).replace('.',''), count:byDate[key]?.done||0});
  }
  const max=Math.max(...week.map(x=>x.count),1);
  const recentHtml=recentDates.length ? recentDates.map(date=>{
    const x=byDate[date];
    return `<div class="progress-recent-item"><b>📅 ${date}</b><span>${x.done} séries concluídas · ${x.sets} séries registradas · ${x.exercises.size} exercício(s)</span></div>`;
  }).join('') : '<div class="history-empty">Ainda não há sessões registradas no histórico.</div>';
  panel.innerHTML=`
    <div class="progress-head"><div><div class="progress-title">📈 Meu progresso</div><div class="progress-sub">Resumo do que já foi registrado neste aparelho.</div></div></div>
    <div class="progress-stats">
      <div class="progress-stat"><b>${dates.length}</b><span>dias registrados</span></div>
      <div class="progress-stat"><b>${totalDone}</b><span>séries concluídas</span></div>
      <div class="progress-stat"><b>${totalSets}</b><span>séries registradas</span></div>
      <div class="progress-stat"><b>${exerciseCount}</b><span>exercícios com histórico</span></div>
    </div>
    <div class="progress-section"><h4>Últimos 7 dias</h4><div class="progress-days">${week.map(x=>`<div class="progress-day"><div class="progress-day-bar"><div class="progress-day-fill" style="height:${Math.max(4,Math.round((x.count/max)*100))}%"></div></div><div class="progress-day-label">${x.label}</div><div class="progress-day-count">${x.count}</div></div>`).join('')}</div></div>
    <div class="progress-section"><h4>Registros recentes</h4><div class="progress-recent">${recentHtml}</div></div>
    <div class="progress-actions">
      <button type="button" class="summary-btn progress-action" id="exportProgressBtn">📤 Exportar backup</button>
      <button type="button" class="summary-btn progress-action" id="importProgressBtn">📥 Importar backup</button>
    </div>
    <div class="progress-note">O backup é um arquivo JSON com seu andamento. Guarde uma cópia fora do navegador para conseguir restaurar os dados se trocar de aparelho ou limpar os dados do navegador.</div>`;
  panel.querySelector('#exportProgressBtn').addEventListener('click',exportProgress);
  panel.querySelector('#importProgressBtn').addEventListener('click',importProgress);
}

document.getElementById('progressBtn').addEventListener('click',()=>{
  const panel=document.getElementById('progressPanel');
  const willOpen=!panel.classList.contains('open');
  if(willOpen) renderProgressPanel();
  panel.classList.toggle('open',willOpen);
});

const EXPERIMENT_QUESTIONS = [
  ['carga', 'A carga está progredindo?'],
  ['reps', 'As repetições estão progredindo?'],
  ['execucao', 'A execução está boa?'],
  ['recuperacao', 'Você está recuperando bem entre as sessões?'],
  ['desconforto', 'Algum exercício está causando desconforto?'],
  ['sentindo', 'Você sente o músculo-alvo trabalhando?'],
  ['cansativo', 'O treino está ficando excessivamente cansativo?'],
  ['manter', 'Você quer manter essa estratégia?'],
];

function renderExperiment(planKey){
  const panel = document.getElementById('experimentPanel');
  const saved = progress.experiment[planKey] || {};
  let html = `<h4>🧪 Modo Experimento — ${PLANS[planKey].label}</h4>
    <p style="font-size:12px;opacity:.7;margin:-4px 0 10px">Marque o que se aplica agora. Isso fica salvo por plano, então você pode comparar como cada estratégia está indo ao longo do tempo.</p>`;
  EXPERIMENT_QUESTIONS.forEach(([qid, qtext])=>{
    const checked = saved[qid] ? 'checked' : '';
    html += `<label style="display:flex;align-items:center;gap:8px;padding:7px 0;font-size:13px;border-bottom:1px solid rgba(127,127,127,.15)">
      <input type="checkbox" data-qid="${qid}" ${checked} style="width:16px;height:16px;flex:0 0 auto">
      ${qtext}
    </label>`;
  });
  if(saved.updatedAt){
    html += `<p style="font-size:11px;opacity:.6;margin-top:8px">Última atualização: ${saved.updatedAt}</p>`;
  }
  panel.innerHTML = html;
  panel.querySelectorAll('input[type=checkbox]').forEach(cb=>{
    cb.addEventListener('change', ()=>{
      if(!progress.experiment[planKey]) progress.experiment[planKey] = {};
      progress.experiment[planKey][cb.dataset.qid] = cb.checked;
      progress.experiment[planKey].updatedAt = todayStr();
      saveProgress();
    });
  });
}

document.getElementById('experimentBtn').addEventListener('click', ()=>{
  const panel = document.getElementById('experimentPanel');
  const willOpen = !panel.classList.contains('open');
  if(willOpen) renderExperiment(currentPlan);
  panel.classList.toggle('open', willOpen);
});

function selectPlan(planKey){
  renderStrategyPanel(planKey);
  currentPlan = planKey;
  document.querySelectorAll('.plan-btn').forEach(b=>b.classList.toggle('active', b.dataset.plan===planKey));
  renderNav(planKey);
  const firstDay = Object.keys(PLANS[planKey].days)[0];
  selectDay(planKey, firstDay);
  const panel = document.getElementById('summaryPanel');
  if(panel.classList.contains('open')) renderSummary(planKey);
  const expPanel = document.getElementById('experimentPanel');
  if(expPanel.classList.contains('open')) renderExperiment(planKey);
}

document.getElementById('planSearch').addEventListener('input',e=>{
  planSearchTerm=normSearch(e.target.value);
  renderPlanSwitch();
  if(document.getElementById('comparisonPanel').classList.contains('open')) renderComparison();
});
document.getElementById('compareBtn').addEventListener('click',()=>{
  const panel=document.getElementById('comparisonPanel');
  panel.classList.toggle('open');
  if(panel.classList.contains('open')) renderComparison();
});

async function init(){
  await loadProgress();
  renderCatFilter();
  renderPlanSwitch();
renderStrategyPanel(currentPlan);
  Object.keys(PLANS).forEach(planKey=>{
    Object.keys(PLANS[planKey].days).forEach(dayKey=> renderDay(planKey, dayKey));
  });
  const lastPlan = (progress.lastPlan && PLANS[progress.lastPlan]) ? progress.lastPlan : 'rec';
  const lastDay = (progress.lastDay && PLANS[lastPlan].days[progress.lastDay]) ? progress.lastDay : Object.keys(PLANS[lastPlan].days)[0];
  currentPlan = lastPlan;
  renderStrategyPanel(lastPlan);
  document.querySelectorAll('.plan-btn').forEach(b=>b.classList.toggle('active', b.dataset.plan===lastPlan));
  renderNav(lastPlan);
  selectDay(lastPlan, lastDay);
}
init();