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

let currentPlan = "rec";
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
    console.warn("Falha ao salvar LocalStorage:", e);
    return false;
  }
}

async function loadProgress(){
  const local = readLocalProgress();
  if(local) progress = local;
  progressLoaded = true;
  return progress;
}

let saveTimeout = null;
function saveProgress(){
  writeLocalProgress(progress);
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async ()=>{
    try{
      await fetch('/api/progress', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(progress)
      });
    }catch(_){}
  }, 1000);
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
  const payload = { app:"Treino Felipe — Hipertrofia & Deficit", version:STORAGE_VERSION, exportedAt:new Date().toISOString(), progress };
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
      showToast("📥 Backup restaurado com sucesso!");
    }catch(e){
      console.error(e);
      showToast("⚠️ Arquivo de backup inválido");
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
  const query = encodeURIComponent(exerciseName + " execução correta musculação");
  const url = "https://www.youtube.com/results?search_query=" + query;
  return `<a class="howto-link" href="${url}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
    Ver vídeo
  </a>`;
}

function gifLink(exerciseName){
  const query = encodeURIComponent(exerciseName + " exercício execução correta");
  const url = "https://www.google.com/search?q=" + query + "&tbm=isch&tbs=itp:animated";
  return `<a class="howto-link" href="${url}" target="_blank" rel="noopener">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
    Ver GIF
  </a>`;
}

// ==== BUSCA INTELIGENTE DE DETALHES DE EXERCÍCIO ====
function getExerciseDetails(name, defaultEx){
  if(typeof EXERCISE_KNOWLEDGE !== 'undefined' && EXERCISE_KNOWLEDGE[name]){
    return EXERCISE_KNOWLEDGE[name];
  }
  if(typeof EXERCISE_KNOWLEDGE !== 'undefined'){
    const nlow = name.toLowerCase();
    // Prioriza equipamento específico (máquina, smith, polia/cabo, halteres)
    for(const [k, v] of Object.entries(EXERCISE_KNOWLEDGE)){
      const klow = k.toLowerCase();
      if(nlow.includes('máquina') && klow.includes('máquina') && (nlow.includes('inclinado') ? klow.includes('inclinado') : true)) return v;
      if(nlow.includes('smith') && klow.includes('smith') && (nlow.includes('inclinado') ? klow.includes('inclinado') : true)) return v;
      if(nlow.includes('polia') && klow.includes('polia')) return v;
      if(nlow.includes('cabo') && (klow.includes('polia') || klow.includes('cabo'))) return v;
    }

    const clean = name.replace(/\s*\([^)]*\)/g, '').replace(/articulad[oa]/gi, '').replace(/\s+/g, ' ').trim().toLowerCase();
    for(const [k, v] of Object.entries(EXERCISE_KNOWLEDGE)){
      const kclean = k.replace(/\s*\([^)]*\)/g, '').replace(/articulad[oa]/gi, '').replace(/\s+/g, ' ').trim().toLowerCase();
      if(kclean === clean || kclean.includes(clean) || clean.includes(kclean)){
        return v;
      }
    }
  }
  return {
    target: defaultEx?.target || "Hipertrofia e força muscular",
    how: defaultEx?.how || "Execute com cadência controlada (2 a 3 segundos na descida), mantendo as articulações alinhadas e contração voluntária no músculo alvo.",
    alts: defaultEx?.alts || []
  };
}

function getTip(exerciseName){
  const d = getExerciseDetails(exerciseName);
  return d.how;
}

// ==== SISTEMA MODAL OVERLAY (ELIMINA EMPILHAMENTO DE TELAS) ====
function openModal(title, badge, rendererFn){
  const overlay = document.getElementById('appModalOverlay');
  const titleEl = document.getElementById('appModalTitle');
  const badgeEl = document.getElementById('appModalBadge');
  const bodyEl = document.getElementById('appModalBody');
  if(!overlay || !bodyEl) return;
  
  if(titleEl) titleEl.textContent = title;
  if(badgeEl) badgeEl.textContent = badge;
  bodyEl.innerHTML = '';
  rendererFn(bodyEl);
  
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  const overlay = document.getElementById('appModalOverlay');
  if(!overlay) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});
const modalOverlayEl = document.getElementById('appModalOverlay');
if(modalOverlayEl){
  modalOverlayEl.addEventListener('click', (e) => {
    if(e.target === modalOverlayEl) closeModal();
  });
}
const modalCloseBtn = document.getElementById('appModalClose');
if(modalCloseBtn){
  modalCloseBtn.addEventListener('click', closeModal);
}

// ==== LOGS E HISTÓRICO ====
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
  if(!list.length) return '<div class="history-empty">Ainda não há histórico registrado para este exercício. Marque as séries e cargas para acompanhar a evolução.</div>';
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

// ==== RENDERIZAÇÃO DO DIA E EXERCÍCIOS ====
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
    html += `<div class="note" style="border-color:var(--qua);color:var(--ink-dim)">⚠️ Joelhos e lombar: mantenha o alinhamento de joelho com as pontas dos pés e amplitude segura sem retroversão pélvica.</div>`;
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
      const currentName = variantNames[activeVariant];
      const currentDetails = getExerciseDetails(currentName, ex);

      html += `
        <div class="ex-card" id="card-${id}">
          <div class="ex-top">
            <div>
              <p class="ex-name" id="name-${id}">${activeVariant>0 ? '🔁 ' : ''}${currentName} ${ex.advanced ? `<button type="button" class="adv-tag-btn" data-tech="${ex.advanced.replace(/"/g,'&quot;')}" title="Toque para entender esta técnica">${ex.advanced} ℹ️</button>` : ''}</p>
              <div class="ex-target-pill" id="target-${id}">🎯 ${currentDetails.target}</div>
            </div>
            <div class="ex-scheme">${ex.scheme}</div>
          </div>

          <span id="howto-${id}" class="howto-links">
            ${howtoLink(currentName)}
            ${gifLink(currentName)}
          </span>

          <div class="sets-row" data-total="${setsCount}" data-id="${id}" data-gi="${gi}" data-ei="${ei}">
            ${Array.from({length:setsCount}).map((_,si)=>`<div class="set-dot" data-set="${si}">${si+1}</div>`).join('')}
          </div>

          <div class="set-log">
            <span class="set-log-head">Série</span><span class="set-log-head">Carga (kg)</span><span class="set-log-head">Reps</span>
            ${Array.from({length:setsCount}).map((_,si)=>{
              const l=getLog(planKey,dayKey,gi,ei,si);
              return `<span class="set-num">${si+1}</span><input inputmode="decimal" type="text" placeholder="—" data-log-field="weight" data-log-set="${si}" value="${String(l.weight??'').replace(/"/g,'&quot;')}"><input inputmode="numeric" type="text" placeholder="—" data-log-field="reps" data-log-set="${si}" value="${String(l.reps??'').replace(/"/g,'&quot;')}">`;
            }).join('')}
          </div>

          <button class="summary-btn history-btn" type="button" data-history-toggle="${id}" data-gi="${gi}" data-ei="${ei}">📈 Histórico de Cargas</button>
          <div class="history-panel" id="history-${id}"><div class="history-title">Histórico do exercício</div>${renderHistory(planKey,dayKey,gi,ei)}</div>

          <!-- COMO FAZER DETALHADO (TÉCNICA, POSTURA E CADÊNCIA) -->
          <div class="ex-how-box" id="howbox-${id}">
            <div class="ex-how-head">
              <span>📐 Como Executar com Perfeição</span>
              <span style="font-size:10px; opacity:0.85;">Cadência 2-0-2 / Controle</span>
            </div>
            <div class="ex-how-text" id="howtext-${id}">${currentDetails.how}</div>
          </div>

          <!-- 3 SUBSTITUTOS PARA QUANDO NÃO TIVER O EQUIPAMENTO -->
          ${ex.alts && ex.alts.length ? `
          <button class="ex-swap" data-toggle="${id}" id="swaptoggle-${id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
            <span class="swap-label">${activeVariant>0 ? 'Trocar variação (fazendo substituto)' : 'Não tem o equipamento? (3 Opções de substituição)'}</span>
          </button>
          <div class="alt-row" id="alt-${id}">
            ${variantNames.map((v,i)=>{
              const badge = i === 0 ? 'Padrão' : ('Opção ' + i);
              return `
              <button class="variant-pick${i===activeVariant?' picked':''}" data-ex-id="${id}" data-variant="${i}" data-variant-name="${v.replace(/"/g,'&quot;')}" data-gi="${gi}" data-ei="${ei}">
                <span class="vp-check">${i===activeVariant?'●':'○'}</span>
                <span class="vp-label"><span class="alt-badge-equip">${badge}</span>${v}</span>
              </button>`;
            }).join('')}
          </div>
          ` : ''}
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
      const varName = btn.dataset.variantName;
      progress.selectedVariant[id] = variant;
      saveProgress();

      // Atualiza os botões visuais
      const altRow = document.getElementById('alt-'+id);
      altRow.querySelectorAll('.variant-pick').forEach(b=>{
        const isPicked = parseInt(b.dataset.variant,10) === variant;
        b.classList.toggle('picked', isPicked);
        b.querySelector('.vp-check').textContent = isPicked ? '●' : '○';
      });

      // Detalhes atualizados do exercício escolhido
      const details = getExerciseDetails(varName);

      // Localiza exercício original do plano para preservar técnica avançada
      const card = btn.closest('.ex-card');
      const setsRow = card ? card.querySelector('.sets-row') : null;
      const gi = btn.dataset.gi !== undefined ? parseInt(btn.dataset.gi, 10) : (setsRow ? parseInt(setsRow.dataset.gi, 10) : 0);
      const ei = btn.dataset.ei !== undefined ? parseInt(btn.dataset.ei, 10) : (setsRow ? parseInt(setsRow.dataset.ei, 10) : 0);
      const ex = PLANS[planKey]?.days[dayKey]?.groups[gi]?.exercises[ei];

      // Atualiza nome exibido, foco, instruções e links
      const nameEl = document.getElementById('name-'+id);
      nameEl.innerHTML = (variant>0 ? '🔁 ' : '') + varName + (ex && ex.advanced ? ` <button type="button" class="adv-tag-btn" data-tech="${ex.advanced.replace(/"/g,'&quot;')}" title="Toque para entender esta técnica">${ex.advanced} ℹ️</button>` : '');
      nameEl.querySelectorAll('.adv-tag-btn').forEach(b=>{
        b.addEventListener('click', (ev)=>{
          ev.stopPropagation();
          openTechModal(b.dataset.tech);
        });
      });
      
      const targetEl = document.getElementById('target-'+id);
      if(targetEl) targetEl.innerHTML = '🎯 ' + details.target;

      const howEl = document.getElementById('howtext-'+id);
      if(howEl) howEl.innerHTML = details.how;

      document.getElementById('howto-'+id).innerHTML = howtoLink(varName) + gifLink(varName);

      const swapBtn = document.getElementById('swaptoggle-'+id);
      if(swapBtn){
        const labelEl = swapBtn.querySelector('.swap-label');
        if(labelEl) labelEl.textContent = variant>0 ? 'Trocar variação (fazendo substituto)' : 'Não tem o equipamento? (3 Opções de substituição)';
      }

      addHistoryEntry(planKey, dayKey, gi, ei, varName);
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
      const card = btn.closest('.ex-card');
      const setsRow = card ? card.querySelector('.sets-row') : null;
      const gi = btn.dataset.gi !== undefined ? parseInt(btn.dataset.gi, 10) : (setsRow ? parseInt(setsRow.dataset.gi, 10) : 0);
      const ei = btn.dataset.ei !== undefined ? parseInt(btn.dataset.ei, 10) : (setsRow ? parseInt(setsRow.dataset.ei, 10) : 0);
      if(hp.classList.contains('show')) hp.innerHTML='<div class="history-title">Histórico do exercício</div>'+renderHistory(planKey,dayKey,gi,ei);
    });
  });

  panel.querySelector('[data-reset-day]').addEventListener('click', ()=>{
    panel.querySelectorAll('.set-dot.checked').forEach(dot=>dot.classList.remove('checked'));
    panel.querySelectorAll('.ex-card').forEach(card=>card.classList.remove('done'));
    panel.querySelectorAll('.sets-row').forEach(row=>{
      delete progress.checks[row.dataset.id];
    });
    saveProgress();
    updateProgress(planKey, dayKey);
    renderNav(planKey);
    showToast("Dia desmarcado");
  });

  panel.querySelectorAll('.adv-tag-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      openTechModal(btn.dataset.tech);
    });
  });

  updateProgress(planKey, dayKey);
}

// ==== PAINEL DE ESTRATÉGIA DO PLANO (COLAPSÁVEL & LIMPO) ====
function renderStrategyPanel(planKey){
  const panel = document.getElementById('strategyPanel');
  const p = PLANS[planKey];
  if(!panel || !p) return;
  if(!p.meta){ panel.classList.remove('show'); panel.innerHTML=''; return; }

  panel.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <div>
        <div class="strategy-title" style="font-size:16px;">${p.label}</div>
        <div style="font-size:12px; opacity:.75; margin-top:2px;">${p.desc}</div>
      </div>
      <button type="button" id="toggleStrategyBtn" style="padding:6px 12px; background:var(--card); border:1px solid var(--line); border-radius:10px; color:var(--ink); font-size:11.5px; font-weight:600; cursor:pointer;">
        📐 Ver Estrutura & Divisão ▾
      </button>
    </div>
    <div id="strategyExpandable" style="display:none; margin-top:12px;">
      ${renderDivisionCard(p)}
      ${renderWeekDistribution(planKey)}
      <div class="strategy-grid">
        ${Object.entries(p.meta).map(([k,v])=>`<div class="strategy-item"><b>${k}</b>${v}</div>`).join('')}
      </div>
    </div>
  `;
  panel.classList.add('show');

  const tBtn = panel.querySelector('#toggleStrategyBtn');
  const exp = panel.querySelector('#strategyExpandable');
  if(tBtn && exp){
    tBtn.addEventListener('click', ()=>{
      const isOpen = exp.style.display !== 'none';
      exp.style.display = isOpen ? 'none' : 'block';
      tBtn.innerHTML = isOpen ? '📐 Ver Estrutura & Divisão ▾' : '📐 Recolher Estrutura ▴';
    });
  }

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

// ==== COMPARAÇÃO DE PLANOS NO MODAL ====
function renderComparison(container){
  const target = container || document.getElementById('appModalBody');
  if(!target) return;
  const keys = Object.keys(PLANS);
  const options = keys.map(k=>`<option value="${k}">${PLANS[k].label}</option>`).join('');
  const a = currentPlan;
  const b = keys.find(k=>k!==a) || a;

  target.innerHTML = `
    <div style="font-size:12px;opacity:.75;margin-bottom:12px;">Compare divisão semanal, volume, músculos trabalhados e estilo entre duas estratégias.</div>
    <div class="compare-grid">
      <div>
        <label style="font-size:10px; font-weight:700; text-transform:uppercase; color:var(--ink-faint); display:block; margin-bottom:4px;">Estratégia A</label>
        <select id="cmpA">${options}</select>
      </div>
      <div>
        <label style="font-size:10px; font-weight:700; text-transform:uppercase; color:var(--ink-faint); display:block; margin-bottom:4px;">Estratégia B</label>
        <select id="cmpB">${options}</select>
      </div>
    </div>
    <div id="cmpResult" style="margin-top:14px;"></div>
  `;
  target.querySelector('#cmpA').value = a;
  target.querySelector('#cmpB').value = b;

  const renderTable = ()=>{
    const ka = target.querySelector('#cmpA').value;
    const kb = target.querySelector('#cmpB').value;
    const pa = PLANS[ka];
    const pb = PLANS[kb];
    const rows = [
      ['Divisão', pa.division||pa.desc, pb.division||pb.desc],
      ['Músculos trabalhados', pa.divisionMuscles||'—', pb.divisionMuscles||'—'],
      ['Descrição da divisão', pa.divisionDescription||'—', pb.divisionDescription||'—'],
      ['Resumo', pa.desc, pb.desc],
      ['Foco estético', pa.meta?.foco||'—', pb.meta?.foco||'—'],
      ['Frequência', pa.meta?.frequencia||'—', pb.meta?.frequencia||'—'],
      ['Estilo & Volume', pa.meta?.estilo||'—', pb.meta?.estilo||'—'],
      ['Fase de aplicação', pa.meta?.fase||'—', pb.meta?.fase||'—'],
      ['Dias de treino', Object.values(pa.days).map(d=>d.title).join(' • '), Object.values(pb.days).map(d=>d.title).join(' • ')]
    ];
    target.querySelector('#cmpResult').innerHTML = `
      <table class="compare-table">
        <thead>
          <tr>
            <th>Parâmetro</th>
            <th>${pa.label}</th>
            <th>${pb.label}</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}
        </tbody>
      </table>`;
  };

  target.querySelectorAll('select').forEach(x=>x.addEventListener('change', renderTable));
  renderTable();
}

function renderPlanSwitch(){
  const wrap = document.getElementById('planSwitch');
  wrap.innerHTML = '';
  const isEmergency = (k) => k === 'em' || k === 'em4';
  const isRecommended = (k) => k === 'rec';
  Object.keys(PLANS).filter(pk=>planMatchesCurrentFilters(pk)).forEach((planKey) => {
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
      if(saved && saved.date === todayStr() && Array.isArray(saved.sets)){
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

// ==== RESUMO DE SÉRIES POR SEMANA (MAPA COMPLETO INCLUINDO CORE) ====
function getExerciseMuscleGroup(name, target, gname){
  const str = (name + " " + (target||"") + " " + (gname||"")).toLowerCase();
  if(/supino|peito|crucifixo(?! inverso)|pec deck|crossover|mergulho/i.test(name)) return "Peito";
  if(/puxada|remada|pulldown|pullover|dorsal|costas|cavalinho|barra fixa/i.test(name)) return "Costas";
  if(/desenvolvimento|elevação lateral|elevação frontal|crucifixo inverso|face pull|encolhimento|ombro|deltoide|trapézio/i.test(name)) return "Ombro";
  if(/rosca|bíceps|biceps|braquial/i.test(name)) return "Bíceps";
  if(/tríceps|triceps|testa|francês|pulley/i.test(name)) return "Tríceps";
  if(/abdominal|elevação de pernas|prancha|core|abdômen/i.test(name)) return "Abdômen";
  if(/agachamento|leg press|extensora|flexora|stiff|terra romeno|panturrilha|passada|hack|quadríceps|posterior|glúteo|perna|hip thrust|abdutora/i.test(name)) return "Pernas";
  if(str.includes("peito") || str.includes("peitoral")) return "Peito";
  if(str.includes("costas") || str.includes("dorsal")) return "Costas";
  if(str.includes("tríceps") || str.includes("triceps")) return "Tríceps";
  if(str.includes("bíceps") || str.includes("biceps")) return "Bíceps";
  if(str.includes("ombro") || str.includes("deltoide")) return "Ombro";
  if(str.includes("abdômen") || str.includes("abdominal") || str.includes("core")) return "Abdômen";
  if(str.includes("perna") || str.includes("glúteo") || str.includes("panturrilha")) return "Pernas";
  return "Outros";
}

function computeWeeklySummary(planKey){
  const totals = {};
  const days = PLANS[planKey].days;
  Object.keys(days).forEach(dayKey=>{
    days[dayKey].groups.forEach(g=>{
      g.exercises.forEach(ex=>{
        const muscle = getExerciseMuscleGroup(ex.name, ex.target, g.name);
        const sets = setsCountFromScheme(ex.scheme);
        totals[muscle] = (totals[muscle]||0) + sets;
      });
    });
  });
  return totals;
}

function renderSummary(planKey, container){
  const target = container || document.getElementById('appModalBody');
  if(!target) return;
  const totals = computeWeeklySummary(planKey);
  const max = Math.max(...Object.values(totals), 1);
  const order = ["Peito","Costas","Ombro","Bíceps","Tríceps","Pernas","Abdômen"];
  const keys = order.filter(k=>totals[k]!==undefined).concat(Object.keys(totals).filter(k=>!order.includes(k)));
  
  let html = `
    <div style="font-size:13px; opacity:.8; margin-bottom:14px;">
      Total de séries diretas semanais prescritas no plano <b>${PLANS[planKey].label}</b>:
    </div>
  `;
  keys.forEach(k=>{
    const pct = Math.round((totals[k]/max)*100);
    const color = k === 'Abdômen' ? '#3b82f6' : 'var(--seg)';
    html += `
      <div class="summary-row">
        <span class="sname">${k}</span>
        <div class="sbar-track"><div class="sbar-fill" style="width:${pct}%; background:${color}"></div></div>
        <span class="sval">${totals[k]} séries</span>
      </div>`;
  });

  html += `
    <div style="margin-top:16px; padding:12px; background:rgba(59, 130, 246, 0.1); border:1px solid rgba(59, 130, 246, 0.25); border-radius:12px; font-size:12px; line-height:1.5;">
      💡 <b>Diretriz de Séries para Core / Abdômen:</b><br>
      Para hipertrofia e definição estética dos gomos abdominais sem alargar a linha de cintura, a literatura recomenda entre <b>6 a 8 séries diretas por semana</b> (distribuídas em 2 sessões semanais: foco Infra na elevação de pernas + foco Supra no cabo). Os exercícios compostos pesados (leg press, stiff, remadas) já recrutam a estabilização isométrica do core.
    </div>
  `;

  target.innerHTML = html;
}

// ==== MEU PROGRESSO & HISTÓRICO NO MODAL ====
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

function renderProgressPanel(container){
  const target = container || document.getElementById('appModalBody');
  if(!target) return;
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
  }).join('') : '<div class="history-empty">Ainda não há sessões registradas no histórico. Complete séries no treino para ver aqui!</div>';

  target.innerHTML=`
    <div class="progress-stats">
      <div class="progress-stat"><b>${dates.length}</b><span>dias registrados</span></div>
      <div class="progress-stat"><b>${totalDone}</b><span>séries concluídas</span></div>
      <div class="progress-stat"><b>${totalSets}</b><span>séries com carga</span></div>
      <div class="progress-stat"><b>${exerciseCount}</b><span>exercícios c/ histórico</span></div>
    </div>
    <div class="progress-section">
      <h4>Últimos 7 dias de treino</h4>
      <div class="progress-days">
        ${week.map(x=>`<div class="progress-day"><div class="progress-day-bar"><div class="progress-day-fill" style="height:${Math.max(4,Math.round((x.count/max)*100))}%"></div></div><div class="progress-day-label">${x.label}</div><div class="progress-day-count">${x.count}</div></div>`).join('')}
      </div>
    </div>
    <div class="progress-section">
      <h4>Registros recentes</h4>
      <div class="progress-recent">${recentHtml}</div>
    </div>
    <div class="progress-actions">
      <button type="button" class="summary-btn progress-action" id="exportProgressBtn">📤 Fazer backup dos dados</button>
      <button type="button" class="summary-btn progress-action" id="importProgressBtn">📥 Restaurar backup</button>
    </div>
    <div class="progress-note">Os dados ficam salvos com segurança neste navegador. Exporte um backup para não perder o progresso caso troque de aparelho.</div>`;

  target.querySelector('#exportProgressBtn').addEventListener('click',exportProgress);
  target.querySelector('#importProgressBtn').addEventListener('click',importProgress);
}

// ==== MODO EXPERIMENTO NO MODAL ====
const EXPERIMENT_QUESTIONS = [
  ['carga', 'A carga está progredindo nos exercícios principais?'],
  ['reps', 'As repetições estão aumentando dentro da faixa de hipertrofia?'],
  ['execucao', 'A técnica e cadência estão controladas (sem roubar com o corpo)?'],
  ['recuperacao', 'Você acorda recuperado e sem dores articulares anormais?'],
  ['desconforto', 'Sentiu desconforto articular no ombro ou joelho?'],
  ['sentindo', 'Sente o músculo-alvo queimar e com ótimo pump sanguíneo?'],
  ['cansativo', 'O volume total do treino está viável para sua rotina diária?'],
  ['manter', 'Quer continuar mantendo essa estratégia por mais 3-4 semanas?'],
];

function renderExperiment(planKey, container){
  const target = container || document.getElementById('appModalBody');
  if(!target) return;
  const saved = progress.experiment[planKey] || {};
  let html = `
    <div style="font-size:12px;opacity:.75;margin-bottom:12px;">Avaliação rápida de auto-percepção para a estratégia <b>${PLANS[planKey].label}</b>:</div>
  `;
  EXPERIMENT_QUESTIONS.forEach(([qid, qtext])=>{
    const checked = saved[qid] ? 'checked' : '';
    html += `<label style="display:flex;align-items:center;gap:10px;padding:9px 0;font-size:13px;border-bottom:1px solid rgba(127,127,127,.18);cursor:pointer;">
      <input type="checkbox" data-qid="${qid}" ${checked} style="width:18px;height:18px;flex:0 0 auto;accent-color:#3b82f6;">
      <span>${qtext}</span>
    </label>`;
  });
  if(saved.updatedAt){
    html += `<p style="font-size:11px;opacity:.6;margin-top:10px;">Última atualização registrada: ${saved.updatedAt}</p>`;
  }
  target.innerHTML = html;
  target.querySelectorAll('input[type=checkbox]').forEach(cb=>{
    cb.addEventListener('change', ()=>{
      if(!progress.experiment[planKey]) progress.experiment[planKey] = {};
      progress.experiment[planKey][cb.dataset.qid] = cb.checked;
      progress.experiment[planKey].updatedAt = todayStr();
      saveProgress();
    });
  });
}

function selectPlan(planKey){
  renderStrategyPanel(planKey);
  currentPlan = planKey;
  document.querySelectorAll('.plan-btn').forEach(b=>b.classList.toggle('active', b.dataset.plan===planKey));
  renderNav(planKey);
  const firstDay = Object.keys(PLANS[planKey].days)[0];
  selectDay(planKey, firstDay);
}

document.getElementById('planSearch').addEventListener('input', e=>{
  planSearchTerm = normSearch(e.target.value);
  renderPlanSwitch();
});

// ==== VINCULAÇÃO DOS BOTÕES DA BARRA RÁPIDA AO MODAL FLUIDO ====
const progressBtn = document.getElementById('progressBtn');
if(progressBtn){
  progressBtn.addEventListener('click', ()=>{
    openModal('Meu Progresso', 'HISTÓRICO & BACKUP', (body)=>{
      renderProgressPanel(body);
    });
  });
}

const summaryBtn = document.getElementById('summaryBtn');
if(summaryBtn){
  summaryBtn.addEventListener('click', ()=>{
    openModal('Resumo de Séries Semanais', 'VOLUME POR MÚSCULO', (body)=>{
      renderSummary(currentPlan, body);
    });
  });
}

const compareBtn = document.getElementById('compareBtn');
if(compareBtn){
  compareBtn.addEventListener('click', ()=>{
    openModal('Comparar Estratégias', 'BIBLIOTECA DE PLANOS', (body)=>{
      renderComparison(body);
    });
  });
}

const experimentBtn = document.getElementById('experimentBtn');
if(experimentBtn){
  experimentBtn.addEventListener('click', ()=>{
    openModal('Modo Experimento', 'AVALIAÇÃO DE INTENSIDADE', (body)=>{
      renderExperiment(currentPlan, body);
    });
  });
}

// ==== DICIONÁRIO E GLOSSÁRIO DE TÉCNICAS AVANÇADAS ====
const ADVANCED_TECHNIQUES_INFO = {
  "drop-set": {
    badge: "EXAUSTÃO METABÓLICA",
    title: "🔥 Drop-Set (Falha + Redução de Carga)",
    what: "Técnica de alta intensidade onde você realiza a série normal até a falha, reduz a carga em cerca de 20% a 30% imediatamente (em menos de 5 segundos, sem descansar) e continua fazendo o máximo de repetições possíveis até uma nova falha.",
    steps: [
      "Execute a sua série com carga pesada até a falha técnica.",
      "Sem descansar, reduza cerca de 20% a 30% do peso (mude o pino da máquina ou pegue halteres mais leves).",
      "Continue o exercício imediatamente até não conseguir mais nenhuma repetição com boa postura.",
      "(Opcional): Em drop-sets duplos, reduza mais uma vez e esgote totalmente o músculo."
    ],
    why: "Recruta as fibras musculares remanescentes de contração rápida que sobreviveram à primeira série, gerando alto estresse metabólico e volume efetivo em tempo recorde.",
    note: "Use APENAS na última série do exercício indicado. Fazer em todas as séries destrói a sua recuperação do treino."
  },
  "rest-pause": {
    badge: "ALTA TENSÃO MECÂNICA",
    title: "🔥 Rest-Pause (Pausa Curta de Respiro)",
    what: "Técnica onde você atinge a falha com uma carga pesada, descansa apenas 10 a 15 segundos respirando fundo, e volta com a MESMA carga pesada para arrancar mais 2 a 4 repetições extras.",
    steps: [
      "Execute a série pesada até a falha técnica (ex: 8 a 10 repetições).",
      "Solte o peso e respire fundo contando de 10 a 15 segundos.",
      "Pegue a MESMA carga pesada e faça mais 2 a 4 repetições com esforço máximo.",
      "Descanse normalmente antes do próximo exercício."
    ],
    why: "Permite acumular repetições extras de altíssima tensão mecânica sem precisar diminuir o peso, estimulando grande hipertrofia miofibrilar.",
    note: "Mantenha a coluna e a postura travadas. Não balance o corpo para 'roubar' na pausa."
  },
  "pico de contração": {
    badge: "CONEXÃO MENTE-MÚSCULO",
    title: "🔥 Pico de Contração (Pausa Isométrica no Topo)",
    what: "Segurar a contração voluntária máxima por 1 a 2 segundos inteiros no ponto em que o músculo está completamente encurtado, antes de começar a descida.",
    steps: [
      "Puxe ou empurre o peso até o ponto de máxima contração (ex: topo da puxada alta ou da panturrilha).",
      "Congele a carga por 1 a 2 segundos completos, espremendo o músculo com força voluntária máxima.",
      "Inicie a fase excêntrica descendo de forma lenta e controlada (2 a 3 segundos)."
    ],
    why: "Elimina qualquer chance de embalo ou impulso do corpo ('roubo') e maximiza o recrutamento neuromuscular e densidade visual do músculo.",
    note: "Se necessário, reduza levemente a carga para conseguir cravar a pausa de 2 segundos sem tremer a postura."
  },
  "segurar": {
    badge: "CONTROLE ARTICULAR",
    title: "🔥 Isometria no Ponto Final",
    what: "Pausa consciente de 1 segundo no final do movimento para garantir controle motor e proteção articular.",
    steps: [
      "No final do percurso concêntrico, pare o movimento conscientemente por 1 segundo.",
      "Sinta a contração pura antes de retornar lentamente."
    ],
    why: "Protege os tendões contra trancos balísticos e aumenta o tempo sob tensão.",
    note: "Respire continuamente; não prenda a respiração durante a isometria."
  }
};

function getTechInfo(techString){
  const s = (techString || '').toLowerCase();
  if(s.includes('drop-set') || s.includes('drop set')) return ADVANCED_TECHNIQUES_INFO['drop-set'];
  if(s.includes('rest-pause') || s.includes('rest pause')) return ADVANCED_TECHNIQUES_INFO['rest-pause'];
  if(s.includes('pico')) return ADVANCED_TECHNIQUES_INFO['pico de contração'];
  if(s.includes('segurar') || s.includes('isometria')) return ADVANCED_TECHNIQUES_INFO['segurar'];
  return ADVANCED_TECHNIQUES_INFO['drop-set'];
}

function openTechModal(techString){
  const info = getTechInfo(techString);
  openModal(info.title, info.badge, (body)=>{
    body.innerHTML = `
      <div class="adv-tech-card" style="border:none; padding:0; background:transparent;">
        <p class="adv-tech-desc">${info.what}</p>
        <div style="font-size:12px; font-weight:700; color:var(--ink); text-transform:uppercase; letter-spacing:.05em; margin:14px 0 6px;">
          ⏱️ Como Executar Passo a Passo:
        </div>
        <ol class="adv-tech-steps">
          ${info.steps.map(s=>`<li>${s}</li>`).join('')}
        </ol>
        <div style="font-size:12px; font-weight:700; color:var(--ink); text-transform:uppercase; letter-spacing:.05em; margin:14px 0 6px;">
          🎯 Por Que Ela Funciona:
        </div>
        <p class="adv-tech-desc" style="margin-bottom:12px;">${info.why}</p>
        <div class="adv-tech-note">
          <b>⚠️ Regra de Segurança:</b> ${info.note}
        </div>
      </div>
    `;
  });
}

function renderTechGlossary(container){
  const target = container || document.getElementById('appModalBody');
  if(!target) return;
  const list = Object.values(ADVANCED_TECHNIQUES_INFO);
  target.innerHTML = `
    <div style="font-size:12.5px; opacity:.8; margin-bottom:14px;">
      As técnicas avançadas são aceleradores de intensidade usados com moderação estratégica nas últimas séries para gerar estímulo máximo sem precisar de treinos longos:
    </div>
    ${list.map(t=>`
      <div class="adv-tech-card">
        <div class="adv-tech-head">
          <h4 class="adv-tech-title">${t.title}</h4>
          <span class="adv-tech-badge">${t.badge}</span>
        </div>
        <p class="adv-tech-desc">${t.what}</p>
        <ol class="adv-tech-steps">
          ${t.steps.map(s=>`<li>${s}</li>`).join('')}
        </ol>
        <div class="adv-tech-note">
          <b>💡 Dica Pro:</b> ${t.note}
        </div>
      </div>
    `).join('')}
  `;
}

const techGlossaryBtn = document.getElementById('techGlossaryBtn');
if(techGlossaryBtn){
  techGlossaryBtn.addEventListener('click', ()=>{
    openModal('Glossário de Técnicas Avançadas', 'INTENSIDADE & HIPERTROFIA', (body)=>{
      renderTechGlossary(body);
    });
  });
}

async function init(){
  await loadProgress();
  renderCatFilter();
  renderPlanSwitch();
  const lastPlan = (progress.lastPlan && PLANS[progress.lastPlan]) ? progress.lastPlan : 'rec';
  const lastDay = (progress.lastDay && PLANS[lastPlan].days[progress.lastDay]) ? progress.lastDay : Object.keys(PLANS[lastPlan].days)[0];
  currentPlan = lastPlan;
  renderStrategyPanel(currentPlan);
  Object.keys(PLANS).forEach(planKey=>{
    Object.keys(PLANS[planKey].days).forEach(dayKey=> renderDay(planKey, dayKey));
  });
  document.querySelectorAll('.plan-btn').forEach(b=>b.classList.toggle('active', b.dataset.plan===lastPlan));
  renderNav(lastPlan);
  selectDay(lastPlan, lastDay);
}
init();

