// =======================================================
// GUIA DE TREINO — MÓDULO DE DIETA & DÉFICIT CALÓRICO (FELIPE)
// =======================================================

// --- Gerenciamento de Tema (Dark / Light) ---
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

// --- Estado da Dieta ---
let dietState = {
  weight: 89.5,
  targetWeight: 80.0,
  height: 168,
  age: 29,
  activity: 1.45,
  mode: 'deficit',
  customDeficit: 450
};

function loadDietState(){
  try {
    const saved = localStorage.getItem('diet_state_felipe');
    if(saved) dietState = Object.assign(dietState, JSON.parse(saved));
  } catch(e){}
}

function saveDietState(){
  try {
    localStorage.setItem('diet_state_felipe', JSON.stringify(dietState));
  } catch(e){}
}

function renderDietPage(){
  const container = document.getElementById('dietContainer');
  if(!container) return;
  loadDietState();

  const w = parseFloat(dietState.weight) || 89.5;
  const targetW = parseFloat(dietState.targetWeight) || 80.0;
  const h = parseFloat(dietState.height) || 168;
  const a = parseFloat(dietState.age) || 29;
  const act = parseFloat(dietState.activity) || 1.45;
  const def = parseFloat(dietState.customDeficit) || 450;
  const mode = dietState.mode || 'deficit';

  // Fórmula Mifflin-St Jeor (Homem)
  const bmr = Math.round((10 * w) + (6.25 * h) - (5 * a) + 5);
  const tdee = Math.round(bmr * act);
  const deficitCals = Math.max(1200, Math.round(tdee - def));
  const targetCals = mode === 'deficit' ? deficitCals : tdee;

  // Proteína: 2.0 g/kg em déficit, 1.8 g/kg em manutenção
  const pPerKg = mode === 'deficit' ? 2.0 : 1.8;
  const protGrams = Math.round(w * pPerKg);
  const protCals = protGrams * 4;

  // Gordura: 0.75 g/kg
  const fPerKg = 0.75;
  const fatGrams = Math.round(w * fPerKg);
  const fatCals = fatGrams * 9;

  // Carboidrato: restante das calorias
  const remainingCals = Math.max(0, targetCals - protCals - fatCals);
  const carbGrams = Math.round(remainingCals / 4);

  // Água recomendada: 40ml por kg
  const waterLiters = ((w * 40) / 1000).toFixed(1);

  // Progresso em relação à meta de peso
  const startWeight = 104.0;
  const totalToLose = Math.max(1, startWeight - targetW);
  const lostSoFar = Math.max(0, startWeight - w);
  const progressPct = Math.min(100, Math.max(0, Math.round((lostSoFar / totalToLose) * 100)));
  const toLoseRemaining = Math.max(0, (w - targetW)).toFixed(1);

  container.innerHTML = `
    <!-- Barra de Progresso Rumo aos 80kg -->
    <div class="diet-progress-card">
      <div class="dpc-top">
        <span>🏆 <b>Rumo ao Físico Alvo (${targetW} kg · Estrutura Forte e Seca)</b></span>
        <span class="dpc-pct">${progressPct}% concluído</span>
      </div>
      <div class="dpc-track">
        <div class="dpc-fill" style="width:${progressPct}%"></div>
      </div>
      <div class="dpc-bottom">
        <span>Início: <b>104 kg</b></span>
        <span>Atual na Balança: <b>${w} kg</b> (-${lostSoFar.toFixed(1)} kg)</span>
        <span>Alvo: <b>${targetW} kg</b> (faltam apenas ${toLoseRemaining} kg!)</span>
      </div>
    </div>

    <!-- Inputs Interativos -->
    <div class="diet-inputs-grid">
      <div class="diet-input-item">
        <label>Peso Atual (kg):</label>
        <input type="number" step="0.1" id="dietWeightInput" value="${w}">
      </div>
      <div class="diet-input-item">
        <label>Altura (cm):</label>
        <input type="number" step="1" id="dietHeightInput" value="${h}">
      </div>
      <div class="diet-input-item">
        <label>Peso Alvo (kg):</label>
        <input type="number" step="0.5" id="dietTargetInput" value="${targetW}">
      </div>
      <div class="diet-input-item">
        <label>Nível de Atividade:</label>
        <select id="dietActivityInput">
          <option value="1.35" ${act === 1.35 ? 'selected' : ''}>Leve (3 treinos/semana)</option>
          <option value="1.45" ${act === 1.45 ? 'selected' : ''}>Moderado (5 treinos + bike - Padrão)</option>
          <option value="1.55" ${act === 1.55 ? 'selected' : ''}>Intenso (5 treinos + cardio diário)</option>
        </select>
      </div>
      <div class="diet-input-item">
        <label>Déficit Diário (kcal):</label>
        <select id="dietDeficitInput">
          <option value="350" ${def === 350 ? 'selected' : ''}>Suave (-350 kcal / ~350g por semana)</option>
          <option value="450" ${def === 450 ? 'selected' : ''}>Ideal (-450 kcal / ~500g por semana)</option>
          <option value="600" ${def === 600 ? 'selected' : ''}>Acelerado (-600 kcal / ~650g por semana)</option>
        </select>
      </div>
    </div>

    <!-- Toggle de Modo (Déficit vs Manutenção) -->
    <div class="diet-mode-tabs">
      <button type="button" class="diet-tab-btn ${mode === 'deficit' ? 'active' : ''}" data-mode="deficit">
        🔥 Modo Déficit (Secar Gordura)
      </button>
      <button type="button" class="diet-tab-btn ${mode === 'maintenance' ? 'active' : ''}" data-mode="maintenance">
        🛡️ Modo Manutenção (Dia Livre / Descanso)
      </button>
    </div>

    <!-- Números Principais -->
    <div class="diet-stat-cards">
      <div class="diet-stat-card ${mode === 'deficit' ? 'active-highlight' : ''}">
        <span class="dsc-tag">CALORIAS DO DIA</span>
        <b class="dsc-val">${targetCals} <span>kcal</span></b>
        <span class="dsc-note">${mode === 'deficit' ? `Déficit de -${def} kcal sobre a manutenção` : 'Calorias para manter 100% o peso estável'}</span>
      </div>
      <div class="diet-stat-card">
        <span class="dsc-tag">TAXA BASAL (TMB)</span>
        <b class="dsc-val">${bmr} <span>kcal</span></b>
        <span class="dsc-note">Gasto mínimo para funções vitais</span>
      </div>
      <div class="diet-stat-card ${mode === 'maintenance' ? 'active-highlight' : ''}">
        <span class="dsc-tag">MANUTENÇÃO TOTAL (GCD)</span>
        <b class="dsc-val">${tdee} <span>kcal</span></b>
        <span class="dsc-note">Comer até aqui NÃO engorda</span>
      </div>
    </div>

    <!-- Cards de Macronutrientes -->
    <h4 style="margin:20px 0 10px;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-dim)">
      🍽️ Meta Diária de Macronutrientes (${mode === 'deficit' ? 'Secando Gordura' : 'Mantendo Peso'})
    </h4>
    <div class="macro-cards-grid">
      <div class="macro-card macro-prot">
        <div class="mc-head"><span>🥩 Proteína</span><b>${protGrams}g</b></div>
        <div class="mc-sub">${pPerKg}g/kg · ${protCals} kcal</div>
        <div class="mc-desc">Segura a musculatura dos braços e peitoral enquanto a gordura queima.</div>
      </div>
      <div class="macro-card macro-carb">
        <div class="mc-head"><span>🍚 Carboidratos</span><b>${carbGrams}g</b></div>
        <div class="mc-sub">${(carbGrams/w).toFixed(1)}g/kg · ${remainingCals} kcal</div>
        <div class="mc-desc">Combustível para treinar pesado e garantir o pump muscular nos treinos.</div>
      </div>
      <div class="macro-card macro-fat">
        <div class="mc-head"><span>🥑 Gorduras Boas</span><b>${fatGrams}g</b></div>
        <div class="mc-sub">${fPerKg}g/kg · ${fatCals} kcal</div>
        <div class="mc-desc">Produção de testosterona e lubrificação articular.</div>
      </div>
      <div class="macro-card macro-water">
        <div class="mc-head"><span>💧 Água Mínima</span><b>${waterLiters}L</b></div>
        <div class="mc-sub">40ml por kg de peso</div>
        <div class="mc-desc">Elimina retenção líquida e acelera a síntese proteica.</div>
      </div>
    </div>

    <!-- Guia da Balança de Comida -->
    <div class="scale-guide-card">
      <div class="sg-title">⚖️ Como Pesar na sua Balança de Cozinha</div>
      <div class="sg-alert">
        <b>💡 Regra Cru vs Grelhado:</b> A carne perde cerca de 25% a 30% de água na chapa. 
        Se você pesar <b>já grelhado</b>, 100g tem <b>~31g de proteína</b>. Se pesar <b>cru</b>, 100g tem <b>~23g de proteína</b>. 
        Mantenha sempre o mesmo padrão!
      </div>
      <div class="scale-table-wrap">
        <table class="scale-table">
          <thead>
            <tr>
              <th>Alimento</th>
              <th>Porção</th>
              <th>Prot</th>
              <th>Carb</th>
              <th>Gord</th>
              <th>Kcal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><b>Peito de frango</b> (grelhado)</td><td>100g</td><td>31g</td><td>0g</td><td>3g</td><td>155 kcal</td></tr>
            <tr><td><b>Patinho moído</b> (grelhado)</td><td>100g</td><td>32g</td><td>0g</td><td>6g</td><td>185 kcal</td></tr>
            <tr><td><b>Ovos inteiros</b></td><td>2 médios</td><td>13g</td><td>1g</td><td>10g</td><td>145 kcal</td></tr>
            <tr><td><b>Arroz branco</b> (cozido)</td><td>100g</td><td>2.5g</td><td>28g</td><td>0.2g</td><td>130 kcal</td></tr>
            <tr><td><b>Batata inglesa</b> (cozida)</td><td>100g</td><td>2g</td><td>19g</td><td>0.1g</td><td>85 kcal 🔥</td></tr>
            <tr><td><b>Banana prata</b></td><td>1 média (~100g)</td><td>1.2g</td><td>23g</td><td>0.2g</td><td>90 kcal</td></tr>
            <tr><td><b>Azeite de oliva</b></td><td>1 colher sopa (~10g)</td><td>0g</td><td>0g</td><td>10g</td><td>90 kcal ⚠️</td></tr>
          </tbody>
        </table>
      </div>
      <div class="scale-note">⚠️ <b>Atenção ao azeite/óleo:</b> Não jogue direto da garrafa na frigideira! Um fio despretensioso pode adicionar 200 a 300 kcal invisíveis. Pese a colher na balança.</div>
    </div>

    <!-- O que fazer em dias atípicos / jacadas -->
    <div class="diet-safe-card">
      <b>🛡️ O que fazer se não conseguir bater a meta ou tiver evento social?</b>
      <p>1. <b>Mude para o Modo Manutenção:</b> Bater até <b>${tdee} kcal</b> no dia NÃO te faz engordar. Ele apenas mantém seu peso exatamente onde está por 24 horas.</p>
      <p>2. <b>Sem desespero:</b> Se exagerar em uma refeição, <b>NÃO faça jejum punitivo de 24h</b> nem corte carboidratos a zero no dia seguinte. Apenas volte ao plano normal.</p>
      <p>3. <b>Foco nas Proteínas:</b> Mesmo em dias atípicos, busque bater os <b>~${protGrams}g de proteína</b> para não perder músculo.</p>
    </div>
  `;

  // Listeners de inputs
  container.querySelector('#dietWeightInput').addEventListener('change', (e)=>{
    dietState.weight = parseFloat(e.target.value) || 89.5;
    saveDietState();
    renderDietPage();
  });
  container.querySelector('#dietHeightInput').addEventListener('change', (e)=>{
    dietState.height = parseFloat(e.target.value) || 168;
    saveDietState();
    renderDietPage();
  });
  container.querySelector('#dietTargetInput').addEventListener('change', (e)=>{
    dietState.targetWeight = parseFloat(e.target.value) || 80.0;
    saveDietState();
    renderDietPage();
  });
  container.querySelector('#dietActivityInput').addEventListener('change', (e)=>{
    dietState.activity = parseFloat(e.target.value) || 1.45;
    saveDietState();
    renderDietPage();
  });
  container.querySelector('#dietDeficitInput').addEventListener('change', (e)=>{
    dietState.customDeficit = parseFloat(e.target.value) || 450;
    saveDietState();
    renderDietPage();
  });
  container.querySelectorAll('.diet-tab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      dietState.mode = btn.dataset.mode;
      saveDietState();
      renderDietPage();
    });
  });
}

// Inicializar página de dieta
document.addEventListener('DOMContentLoaded', renderDietPage);
renderDietPage();
