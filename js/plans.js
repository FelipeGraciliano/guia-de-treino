// ==========================================
// GUIA DE TREINO — BANCO DE DADOS DE PLANOS
// ==========================================

const PLANS = {
  rec: {
    label: "⭐ Felipe (Volume Otimizado)",
    desc: "Plano principal personalizado: foco estético no V-Taper (costas/ombro lateral/peito superior), volume ótimo (10-18 séries) e técnicas de pump.", category:"REC", tags:["RECOMENDADO","HIPERTROFIA","V-TAPER","ESTÉTICA","PUMP"],
    meta: { foco:"Estética V-Taper, Peitoral Superior e Braços 3D", frequencia:"5 dias (Push A/B, Pull A/B, Legs)", estilo:"Volume Otimizado (10-18 séries) & Intensidade", fase:"Felipe — Lapidação com Déficit Calórico" },
    division: "Push / Pull / Legs + Push / Pull",
    divisionMuscles: "Peito Superior, Dorsais Abertas, Ombros 3D, Braços e Pernas",
    divisionDescription: "Divisão de 5 dias projetada para construir o formato em V e desenhar peitoral e braços",
    days: {
      seg: {
        label: "Segunda", color: "seg", title: "Push A — Foco: Peito Superior + Ombro Lateral",
        note: "O volume por sessão aqui é menor (cerca de 20 séries totais). O segredo é INTENSIDADE (chegar perto da falha) e não quantidade. Descanse 90-120s.",
        groups: [
          { name: "Peito", total: "10 séries", exercises: [
            { name:"Supino inclinado com halteres", scheme:"4×8–12", target:"Peitoral superior (ajuda na postura visual)", alts:["Supino inclinado na máquina"] },
            { name:"Supino reto com barra", scheme:"3×6–10", target:"Peitoral médio/geral", alts:["Supino reto com halteres","Supino reto no Smith"] },
            { name:"Crossover na polia baixa (de baixo pra cima)", scheme:"3×10–15", target:"Corte superior e miolo do peito", advanced: "🔥 Drop-set na última", alts:["Crucifixo inclinado com halteres"] }
          ]},
          { name: "Ombros", total: "7 séries", exercises: [
            { name:"Desenvolvimento militar", scheme:"3×6–10", target:"Deltoide anterior", alts:["Desenvolvimento com halteres"] },
            { name:"Elevação lateral com halteres", scheme:"4×10–15", target:"Deltoide lateral (Essencial para o V-Taper)", advanced: "🔥 Drop-set na última", alts:["Elevação lateral na máquina"] }
          ]},
          { name: "Tríceps", total: "6 séries", exercises: [
            { name:"Tríceps testa", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps francês"] },
            { name:"Tríceps pulley com corda", scheme:"3×10–15", target:"Lateral / medial", advanced: "🔥 Drop-set na última", alts:["Tríceps barra reta na polia"] }
          ]}
        ]
      },
      ter: {
        label: "Terça", color: "ter", title: "Pull A — Foco: Costas Largura + Bíceps",
        note: "Descanse bem entre as puxadas (120s) para garantir que você consegue progredir carga. Bíceps precisa de 60-90s apenas.",
        groups: [
          { name: "Costas", total: "10 séries", exercises: [
            { name:"Puxada alta aberta", scheme:"4×8–12", target:"Dorsal (Largura - Foco V-Taper)", advanced: "🔥 Pico de contração", alts:["Puxada na máquina articulada"] },
            { name:"Pulldown unilateral na polia", scheme:"3×10–15", target:"Dorsal (isolamento)", alts:["Pullover na polia"] },
            { name:"Remada curvada com barra", scheme:"3×8–10", target:"Espessura geral", alts:["Remada cavalinho"] }
          ]},
          { name: "Ombro Posterior", total: "3 séries", exercises: [
            { name:"Crucifixo inverso", scheme:"3×12–15", target:"Deltoide posterior", alts:["Face pull na polia"] }
          ]},
          { name: "Bíceps", total: "6 séries", exercises: [
            { name:"Rosca direta com barra/W", scheme:"3×8–10", target:"Massa geral", advanced: "🔥 Drop-set na última", alts:["Rosca direta na polia"] },
            { name:"Rosca Scott", scheme:"3×10–12", target:"Bíceps (Cabeça curta)", advanced: "🔥 Rest-pause na última", alts:["Rosca concentrada"] }
          ]}
        ]
      },
      qua: {
        label: "Quarta", color: "qua", title: "Legs & Abdômen — Intensidade sem Exagero",
        note: "O volume não é gigantesco, mas cada série precisa ser pesada de verdade. Descanse 2 a 3 minutos no Leg Press.",
        groups: [
          { name: "Quadríceps", total: "7 séries", exercises: [
            { name:"Leg press 45°", scheme:"4×8–12", target:"Quadríceps geral (seguro e pesado)", alts:["Agachamento livre","Hack machine"] },
            { name:"Cadeira extensora", scheme:"3×10–15", target:"Quadríceps isolado", advanced: "🔥 Drop-set nas duas últimas", alts:["Leg press unilateral"] }
          ]},
          { name: "Posteriores e Glúteos", total: "7 séries", exercises: [
            { name:"Stiff com halteres ou barra", scheme:"4×8–12", target:"Posterior + Glúteo", alts:["Levantamento terra romeno com barra"] },
            { name:"Mesa flexora", scheme:"3×10–15", target:"Posterior isolado", advanced: "🔥 Rest-pause na última", alts:["Cadeira flexora"] }
          ]},
          { name: "Panturrilhas", total: "4 séries", exercises: [
            { name:"Panturrilha no leg press ou em pé", scheme:"4×12–20", target:"Gastrocnêmio", advanced: "🔥 Pico de contração de 2s", alts:["Panturrilha sentado"] }
          ]},
          { name: "Abdômen & Linha de Cintura", total: "3 séries", exercises: [
            { name:"Elevação de pernas suspensa ou paralela", scheme:"3×12–15", target:"Abdômen infra / compactar cintura", advanced: "🔥 Segurar 1s no topo", alts:["Abdominal infra no chão","Abdominal na polia (corda)"] }
          ]}
        ]
      },
      qui: {
        label: "Quinta", color: "qui", title: "Push B — Foco: Peito Superior 2x + Tríceps",
        note: "Treino denso (17 séries). Foco em encher a porção superior do peito com halteres e queimar o tríceps.",
        groups: [
          { name: "Peito", total: "10 séries", exercises: [
            { name:"Supino inclinado 30° com halteres", scheme:"4×8–10", target:"Peitoral superior (2ª frequência com carga máxima)", alts:["Supino reto com halteres","Supino inclinado articulado"] },
            { name:"Mergulho nas paralelas ou Supino declinado", scheme:"3×8–12", target:"Corte inferior do peito (a linha de baixo)", alts:["Supino declinado na máquina"] },
            { name:"Crossover na polia alta", scheme:"3×10–15", target:"Ênfase inferior e miolo", advanced: "🔥 Rest-pause na última", alts:["Pec Deck"] }
          ]},
          { name: "Ombros", total: "4 séries", exercises: [
            { name:"Elevação lateral na polia (por trás)", scheme:"4×12–20", target:"Deltoide lateral (tensão constante)", alts:["Elevação lateral com halteres"] }
          ]},
          { name: "Tríceps", total: "6 séries", exercises: [
            { name:"Tríceps francês com halteres", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps testa"] },
            { name:"Tríceps pulley com barra", scheme:"3×10–12", target:"Lateral / medial", advanced: "🔥 Rest-pause na última", alts:["Tríceps pulley com corda"] }
          ]}
        ]
      },
      sex: {
        label: "Sexta", color: "sex", title: "Pull B — Foco: Costas Espessura + Deltoide 3D + Bíceps",
        note: "Foco nas remadas pesadas, traseira do ombro e bíceps alongado. Treino denso e rápido.",
        groups: [
          { name: "Costas", total: "10 séries", exercises: [
            { name:"Remada cavalinho", scheme:"4×6–10", target:"Espessura", alts:["Remada curvada com barra"] },
            { name:"Remada baixa com triângulo", scheme:"3×8–12", target:"Romboides / Trapézio médio", alts:["Remada na máquina articulada"] },
            { name:"Puxada supinada (pegada inversa)", scheme:"3×8–12", target:"Dorsal + Bíceps auxiliar", alts:["Puxada alta com triângulo"] }
          ]},
          { name: "Deltoide Posterior & Trapézio", total: "6 séries", exercises: [
            { name:"Face pull na polia com corda", scheme:"3×12–15", target:"Deltoide posterior e rotação externa (Ombro 3D)", advanced: "🔥 Segurar 1s atrás", alts:["Crucifixo inverso máquina","Crucifixo inverso cabo"] },
            { name:"Encolhimento com halteres", scheme:"3×10–15", target:"Trapézio superior", advanced: "🔥 Pico de contração de 2s", alts:["Encolhimento com barra"] }
          ]},
          { name: "Bíceps", total: "6 séries", exercises: [
            { name:"Rosca inclinada", scheme:"3×8–12", target:"Cabeça longa (posição alongada)", advanced: "🔥 Rest-pause na última", alts:["Rosca alternada inclinada"] },
            { name:"Rosca martelo", scheme:"3×10–12", target:"Braquial", advanced: "🔥 Drop-set na última", alts:["Rosca martelo na polia com corda"] }
          ]}
        ]
      }
    }
  },
  a: {
    label: "Plano A · Misto 2x (5 Dias)",
    desc: "5 dias — Membros superiores 2x na semana, pernas concentradas 1x. Ótimo equilíbrio para quem foca no tronco.", category:"A", tags:["HIPERTROFIA","5 DIAS","TRONCO 2X","PERNAS 1X"],
    meta: { foco:"Peito/Costas/Ombro/Bíceps/Tríceps 2x na semana + Pernas 1x", frequencia:"5 dias (Seg a Sex)", estilo:"Divisão mista por grupamento", fase:"Hipertrofia Geral de Tronco" },
    division: "Peito/Tríceps/Ombro + Costas/Bíceps + Pernas + Peito/Costas + Braços/Ombros",
    divisionMuscles: "Tronco Completo 2x e Pernas 1x",
    divisionDescription: "Divisão clássica focada em alta frequência para tronco com pernas completas no meio da semana",
    days: {
      seg: {
        label: "Segunda", color: "seg",
        title: "Peito + Tríceps + Ombro lateral",
        groups: [
          { name: "Peito", total: "11 séries", split: [["Superior","seg",40],["Médio","ter",35],["Inferior","qua",25]], exercises: [
            { name:"Supino inclinado com halteres", scheme:"3×6–10", target:"Peitoral superior", alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Supino reto com barra", scheme:"3×6–10", target:"Peitoral médio", alts:["Supino reto com halteres","Supino reto no Smith","Flexão de braço tradicional"] },
            { name:"Crossover na polia alta", scheme:"3×10–15", target:"Ênfase na região inferior", alts:["Crucifixo inclinado com halteres","Flexão de braço com pés elevados","Supino neutro com halteres"] },
            { name:"Crucifixo / Pec Deck", scheme:"2×10–15", target:"Peitoral geral, encurtamento", alts:["Crossover na polia média","Crucifixo com halteres","Crossover na polia alta"] },
          ]},
          { name: "Tríceps", total: "8 séries diretas", split: [["Cabeça longa","seg",50],["Lateral/medial","ter",50]], exercises: [
            { name:"Tríceps testa", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps testa com halteres","Tríceps testa na polia","Tríceps francês"] },
            { name:"Tríceps pulley com barra", scheme:"3×8–12", target:"Lateral / medial", alts:["Tríceps pulley com corda","Tríceps corda","Tríceps testa"] },
            { name:"Tríceps acima da cabeça na corda", scheme:"2×10–15", target:"Cabeça longa", alts:["Tríceps francês com halteres","Tríceps testa","Tríceps francês unilateral"] },
          ]},
          { name: "Ombro lateral", total: "3 séries", exercises: [
            { name:"Elevação lateral", scheme:"3×12–20", target:"Deltoide lateral", advanced: "🔥 Drop-set na última", alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
          { name: "Panturrilhas", total: "4 séries", exercises: [
            { name:"Panturrilha sentado", scheme:"4×12–20", target:"Sóleo (2ª frequência da semana)", alts:["Panturrilha em pé","Panturrilha no leg press"] },
          ]},
        ]
      },
      ter: {
        label: "Terça", color: "ter",
        title: "Costas + Bíceps + Ombro posterior",
        groups: [
          { name: "Costas", total: "12 séries", split: [["Largura","ter",50],["Espessura","seg",25],["Detalhe","qui",25]], exercises: [
            { name:"Puxada alta aberta", scheme:"3×6–10", target:"Largura / dorsal", alts:["Puxada na máquina articulada","Puxada supinada (pegada inversa)","Puxada alta neutra"] },
            { name:"Puxada alta com triângulo", scheme:"3×8–12", target:"Dorsal, maior amplitude", alts:["Puxada supinada (pegada inversa)","Puxada na máquina articulada","Puxada alta neutra"] },
            { name:"Remada curvada", scheme:"3×6–10", target:"Espessura", alts:["Remada cavalinho","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Remada baixa com triângulo", scheme:"3×8–12", target:"Romboides / trapézio médio", alts:["Remada baixa unilateral","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
          ]},
          { name: "Trapézio", total: "3 séries", exercises: [
            { name:"Encolhimento com halteres", scheme:"3×10–15", target:"Trapézio superior", alts:["Encolhimento com barra","Encolhimento na máquina Smith","Remada alta com barra"] },
          ]},
          { name: "Bíceps", total: "8 séries diretas", split: [["Cabeça longa","seg",47],["Cabeça curta","ter",28],["Braquial","qua",25]], exercises: [
            { name:"Rosca direta W", scheme:"3×6–10", target:"Massa geral", alts:["Rosca direta com barra reta","Rosca direta na polia","Rosca Scott"] },
            { name:"Rosca inclinada", scheme:"3×8–12", target:"Cabeça longa", alts:["Rosca concentrada","Rosca 21","Rosca martelo"] },
            { name:"Rosca martelo", scheme:"2×10–15", target:"Braquial", alts:["Rosca martelo na polia com corda","Rosca martelo alternada","Rosca Zottman"] },
          ]},
          { name: "Ombro posterior", total: "", exercises: [
            { name:"Crucifixo inverso", scheme:"2×12–20", target:"Deltoide posterior", alts:["Crucifixo inverso na máquina (peck deck invertido)","Face pull na polia","Remada alta com barra"] },
          ]},
        ]
      },
      qua: {
        label: "Quarta", color: "qua",
        title: "Pernas completas",
        note: "Treino pesado e completo — não empilha série em cima de série à toa em cada região.",
        groups: [
          { name: "Quadríceps", total: "10 séries", exercises: [
            { name:"Agachamento livre", scheme:"4×6–10", target:"Quadríceps geral / força", alts:["Agachamento no Smith","Leg press 45°","Hack machine"] },
            { name:"Leg press 45°", scheme:"3×8–12", target:"Quadríceps geral", alts:["Hack machine","Agachamento livre","Hack machine (variação)"] },
            { name:"Cadeira extensora", scheme:"3×10–15", target:"Quadríceps, definição", advanced: "🔥 Drop-set na última", alts:["Agachamento búlgaro","Leg press unilateral (foco quadríceps)","Passada (afundo)"] },
          ]},
          { name: "Posterior", total: "9 séries", exercises: [
            { name:"Stiff", scheme:"3×6–10", target:"Posterior de coxa, glúteo e lombar", alts:["Stiff com halteres","Good morning","Levantamento terra romeno com barra"] },
            { name:"Mesa flexora", scheme:"3×8–12", target:"Posterior de coxa", advanced: "🔥 Pico de contração", alts:["Flexora em pé (unilateral)","Stiff com halteres","Cadeira flexora"] },
            { name:"Cadeira flexora", scheme:"3×10–15", target:"Isolamento de posterior", advanced: "🔥 Rest-pause na última", alts:["Mesa flexora","Flexora em pé (unilateral)"] },
          ]},
          { name: "Glúteos", total: "", exercises: [
            { name:"Hip thrust", scheme:"3×8–12", target:"Agachamento + leg press + stiff já ajudam bastante", alts:["Elevação pélvica no chão","Cadeira abdutora","Agachamento sumô"] },
          ]},
          { name: "Panturrilhas", total: "", exercises: [
            { name:"Panturrilha em pé", scheme:"3×8–12", target:"Gastrocnêmio", alts:["Panturrilha no leg press","Panturrilha unilateral com halteres","Panturrilha no Smith"] },
            { name:"Panturrilha sentado", scheme:"3×12–20", target:"Sóleo", alts:["Panturrilha unilateral com halteres","Panturrilha no leg press","Panturrilha no Smith"] },
          ]},
          { name: "Abdômen", total: "", exercises: [
            { name:"Abdominal na polia", scheme:"3×10–15", target:"Reto abdominal", alts:["Abdominal no solo","Roda abdominal (ab wheel)","Prancha com carga"] },
            { name:"Elevação de pernas", scheme:"3×10–15", target:"Abdômen inferior", alts:["Elevação de joelhos na paralela","Abdominal infra no banco declinado","Roda abdominal (ab wheel)"] },
          ]},
        ]
      },
      qui: {
        label: "Quinta", color: "qui",
        title: "Ombros + Braços",
        note: "Estímulo forte nos músculos que já trabalharam indiretamente no peito e nas costas.",
        groups: [
          { name: "Ombros", total: "12 séries diretas", split: [["Lateral","ter",50],["Posterior","qua",33],["Anterior","seg",17]], exercises: [
            { name:"Desenvolvimento com halteres", scheme:"3×6–10", target:"Deltoide anterior", alts:["Desenvolvimento na máquina","Desenvolvimento Arnold","Desenvolvimento militar com barra"] },
            { name:"Elevação lateral na polia", scheme:"4×10–20", target:"Deltoide lateral", alts:["Elevação lateral com halteres","Elevação lateral na máquina","Elevação lateral sentado"] },
            { name:"Elevação lateral inclinada no banco", scheme:"2×12–20", target:"Deltoide lateral, isolamento estrito", alts:["Elevação lateral unilateral na polia","Elevação lateral com halteres","Elevação lateral na máquina"] },
            { name:"Face pull na polia", scheme:"2×12–20", target:"Posterior", alts:["Crucifixo inverso na máquina","Crucifixo inverso no banco inclinado","Crucifixo inverso na máquina (variação)"] },
          ]},
          { name: "Bíceps", total: "8 séries", exercises: [
            { name:"Rosca Scott", scheme:"3×8–12", target:"Ênfase na cabeça curta", alts:["Rosca Scott na polia","Rosca Scott com halteres","Rosca Scott unilateral"] },
            { name:"Rosca alternada inclinada", scheme:"3×8–12", target:"Cabeça longa", alts:["Rosca alternada em pé","Rosca 21","Rosca Scott"] },
            { name:"Rosca concentrada", scheme:"2×10–15", target:"Pico, cabeça longa", alts:["Rosca alternada em pé","Rosca Scott","Rosca 21"] },
          ]},
          { name: "Tríceps", total: "8 séries", exercises: [
            { name:"Tríceps corda", scheme:"3×10–15", target:"Lateral / medial", alts:["Tríceps barra reta na polia","Tríceps corda unilateral","Tríceps testa"] },
            { name:"Tríceps francês", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps francês com halteres","Tríceps francês na polia","Tríceps francês unilateral"] },
            { name:"Tríceps unilateral na polia", scheme:"2×10–15", target:"Lateral / medial, controle", alts:["Tríceps coice (kickback)","Tríceps corda unilateral","Tríceps francês unilateral"] },
          ]},
        ]
      },
      sex: {
        label: "Sexta", color: "sex",
        title: "Peito + Costas",
        note: "Dia que fecha a semana.",
        groups: [
          { name: "Peito", total: "9 séries", exercises: [
            { name:"Supino inclinado na máquina", scheme:"3×8–12", target:"Superior", alts:["Supino inclinado com halteres","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Supino declinado ou mergulho assistido", scheme:"2×8–12", target:"Ênfase inferior", alts:["Flexão declinada","Crossover na polia baixa","Mergulho entre bancos"] },
            { name:"Pec Deck", scheme:"2×10–15", target:"Região média", alts:["Crucifixo com halteres","Crossover na polia média","Crossover na polia alta"] },
            { name:"Crossover na polia baixa", scheme:"2×10–15", target:"Ênfase superior", alts:["Crucifixo reto com halteres","Crucifixo inclinado com halteres","Flexão de braço com pés elevados"] },
          ]},
          { name: "Costas", total: "5 séries", exercises: [
            { name:"Remada cavalinho", scheme:"3×6–10", target:"Espessura, ângulo diferente da remada curvada", alts:["Remada curvada com barra","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Pullover na polia", scheme:"2×10–15", target:"Dorsal, posição alongada", alts:["Pullover com halteres","Pullover na máquina","Remada baixa com triângulo"] },
          ]},
          { name: "Trapézio", total: "2 séries", exercises: [
            { name:"Encolhimento com barra", scheme:"2×10–15", target:"Trapézio superior, ângulo diferente da terça", alts:["Encolhimento com halteres","Encolhimento na máquina Smith","Encolhimento com barra trap (hex bar)"] },
          ]},
        ]
      },
    }
  },
  b: {
    label: "Plano B · PPL (5 Dias)",
    desc: "5 dias — Push / Pull / Legs por padrão mecânico de empurrar e puxar. Divisão consagrada da musculação.", category:"ALT", tags:["HIPERTROFIA","PUSH/PULL","PADRÃO MOVIMENTO"],
    meta: { foco:"Push/Pull/Legs por padrão de movimento", frequencia:"5 dias, cada grupo 2x (pernas 1x)", estilo:"Agrupado por padrão mecânico (empurrar/puxar)", fase:"Hipertrofia Geral" },
    days: {
      seg: {
        label: "Segunda", color: "seg",
        title: "Push A — Peito + Ombro + Tríceps",
        note: "Peito, ombro e tríceps trabalham juntos porque o ombro e o tríceps já ajudam de verdade em todo exercício de empurrar.",
        groups: [
          { name: "Peito", total: "9 séries", split: [["Médio","ter",44],["Superior","seg",33],["Inferior","qua",23]], exercises: [
            { name:"Supino reto com barra", scheme:"4×6–10", target:"Peitoral médio", alts:["Supino reto com halteres","Supino reto no Smith","Flexão de braço tradicional"] },
            { name:"Supino inclinado com halteres", scheme:"3×8–12", target:"Peitoral superior", alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Crossover na polia alta", scheme:"2×10–15", target:"Ênfase inferior", alts:["Crucifixo no Pec Deck","Flexão de braço com pés elevados","Supino neutro com halteres"] },
          ]},
          { name: "Ombro", total: "6 séries diretas", exercises: [
            { name:"Desenvolvimento com halteres", scheme:"3×8–12", target:"Deltoide anterior", alts:["Desenvolvimento na máquina","Desenvolvimento Arnold","Desenvolvimento militar com barra"] },
            { name:"Elevação lateral", scheme:"3×12–20", target:"Deltoide lateral", alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
          { name: "Tríceps", total: "8 séries", split: [["Cabeça longa","seg",63],["Lateral/medial","ter",37]], exercises: [
            { name:"Tríceps testa", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps testa com halteres","Tríceps testa na polia","Tríceps francês"] },
            { name:"Tríceps pulley com corda", scheme:"3×10–15", target:"Lateral / medial", alts:["Tríceps pulley com barra","Tríceps corda unilateral","Tríceps testa"] },
            { name:"Tríceps francês unilateral", scheme:"2×10–15", target:"Cabeça longa", alts:["Tríceps coice (kickback)","Tríceps francês com halteres","Tríceps francês"] },
          ]},
        ]
      },
      ter: {
        label: "Terça", color: "ter",
        title: "Pull A — Costas + Bíceps + Ombro posterior",
        note: "Costas e bíceps na mesma sessão porque toda puxada já recruta o bíceps como auxiliar.",
        groups: [
          { name: "Costas", total: "11 séries", split: [["Largura","ter",64],["Espessura","seg",36]], exercises: [
            { name:"Puxada alta aberta", scheme:"4×6–10", target:"Largura / dorsal", alts:["Puxada na máquina articulada","Puxada supinada (pegada inversa)","Puxada alta neutra"] },
            { name:"Remada curvada", scheme:"4×6–10", target:"Espessura", alts:["Remada cavalinho","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Puxada alta com triângulo", scheme:"3×8–12", target:"Largura, maior amplitude", alts:["Puxada supinada (pegada inversa)","Puxada na máquina articulada","Puxada alta neutra"] },
          ]},
          { name: "Ombro posterior", total: "", exercises: [
            { name:"Crucifixo inverso", scheme:"3×12–20", target:"Deltoide posterior", alts:["Crucifixo inverso na máquina","Face pull na polia","Remada alta com barra"] },
          ]},
          { name: "Trapézio", total: "3 séries", exercises: [
            { name:"Encolhimento com halteres", scheme:"3×10–15", target:"Trapézio superior", alts:["Encolhimento com barra","Encolhimento na máquina Smith","Remada alta com barra"] },
          ]},
          { name: "Bíceps", total: "8 séries", split: [["Massa geral","ter",38],["Braquial","qua",25],["Cabeça longa","seg",37]], exercises: [
            { name:"Rosca direta W", scheme:"3×6–10", target:"Massa geral", alts:["Rosca direta com barra reta","Rosca direta na polia","Rosca Scott"] },
            { name:"Rosca martelo", scheme:"2×10–15", target:"Braquial", alts:["Rosca martelo na polia com corda","Rosca martelo alternada","Rosca Zottman"] },
            { name:"Rosca concentrada", scheme:"3×10–15", target:"Cabeça longa, pico", alts:["Rosca alternada em pé","Rosca Scott","Rosca 21"] },
          ]},
        ]
      },
      qua: {
        label: "Quarta", color: "qua",
        title: "Pernas completas",
        note: "Igual ao dia de pernas do Plano A — treino pesado e completo, já resolve a semana toda.",
        groups: [
          { name: "Quadríceps", total: "10 séries", exercises: [
            { name:"Agachamento livre", scheme:"4×6–10", target:"Quadríceps geral / força", alts:["Agachamento no Smith","Leg press 45°","Hack machine"] },
            { name:"Leg press 45°", scheme:"3×8–12", target:"Quadríceps geral", alts:["Hack machine","Agachamento livre","Hack machine (variação)"] },
            { name:"Cadeira extensora", scheme:"3×10–15", target:"Quadríceps, definição", alts:["Agachamento búlgaro","Leg press unilateral (foco quadríceps)","Passada (afundo)"] },
          ]},
          { name: "Posterior", total: "6 séries", exercises: [
            { name:"Stiff", scheme:"3×6–10", target:"Posterior de coxa, glúteo e lombar", alts:["Stiff com halteres","Good morning","Levantamento terra romeno com barra"] },
            { name:"Mesa flexora", scheme:"3×8–12", target:"Posterior de coxa", alts:["Flexora em pé (unilateral)","Stiff com halteres","Cadeira flexora"] },
          ]},
          { name: "Glúteos", total: "", exercises: [
            { name:"Hip thrust", scheme:"3×8–12", target:"Agachamento + leg press + stiff já ajudam bastante", alts:["Elevação pélvica no chão","Cadeira abdutora","Agachamento sumô"] },
          ]},
          { name: "Panturrilhas", total: "", exercises: [
            { name:"Panturrilha em pé", scheme:"3×8–12", target:"Gastrocnêmio", alts:["Panturrilha no leg press","Panturrilha unilateral com halteres","Panturrilha no Smith"] },
            { name:"Panturrilha sentado", scheme:"3×12–20", target:"Sóleo", alts:["Panturrilha unilateral com halteres","Panturrilha no leg press","Panturrilha no Smith"] },
          ]},
          { name: "Abdômen", total: "", exercises: [
            { name:"Abdominal na polia", scheme:"3×10–15", target:"Reto abdominal", alts:["Abdominal no solo","Roda abdominal (ab wheel)","Prancha com carga"] },
            { name:"Elevação de pernas", scheme:"3×10–15", target:"Abdômen inferior", alts:["Elevação de joelhos na paralela","Abdominal infra no banco declinado","Roda abdominal (ab wheel)"] },
          ]},
        ]
      },
      qui: {
        label: "Quinta", color: "qui",
        title: "Push B — Peito + Ombro + Tríceps",
        note: "Mesma lógica de segunda, com ângulos diferentes pra pegar o peito e o ombro de outro jeito.",
        groups: [
          { name: "Peito", total: "8 séries", split: [["Superior","seg",38],["Inferior","qua",38],["Médio","ter",24]], exercises: [
            { name:"Supino inclinado na máquina", scheme:"3×8–12", target:"Superior", alts:["Supino inclinado com halteres","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Supino declinado ou mergulho assistido", scheme:"3×8–12", target:"Ênfase inferior", alts:["Flexão declinada","Crossover na polia baixa","Mergulho entre bancos"] },
            { name:"Pec Deck", scheme:"2×10–15", target:"Região média", alts:["Crucifixo com halteres","Crossover na polia média","Crossover na polia alta"] },
          ]},
          { name: "Ombro", total: "7 séries diretas", exercises: [
            { name:"Desenvolvimento Arnold", scheme:"3×8–12", target:"Deltoide anterior", alts:["Desenvolvimento militar com barra","Desenvolvimento com halteres","Desenvolvimento na máquina"] },
            { name:"Elevação lateral na polia", scheme:"4×10–20", target:"Deltoide lateral", alts:["Elevação lateral com halteres","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
          { name: "Tríceps", total: "8 séries", split: [["Cabeça longa","seg",63],["Lateral/medial","ter",37]], exercises: [
            { name:"Tríceps francês", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps francês com halteres","Tríceps francês na polia","Tríceps francês unilateral"] },
            { name:"Tríceps corda", scheme:"3×10–15", target:"Lateral / medial", alts:["Tríceps barra reta na polia","Tríceps corda unilateral","Tríceps testa"] },
            { name:"Tríceps testa com halteres", scheme:"2×10–15", target:"Cabeça longa", alts:["Tríceps testa na polia","Tríceps testa","Tríceps francês"] },
          ]},
        ]
      },
      sex: {
        label: "Sexta", color: "sex",
        title: "Pull B — Costas + Bíceps + Ombro posterior",
        note: "Fecha a semana repetindo costas e bíceps com foco em espessura e detalhe.",
        groups: [
          { name: "Costas", total: "8 séries", split: [["Espessura","seg",38],["Largura","ter",38],["Detalhe","qui",24]], exercises: [
            { name:"Remada cavalinho", scheme:"3×6–10", target:"Espessura", alts:["Remada curvada com barra","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Puxada supinada (pegada inversa)", scheme:"3×8–12", target:"Largura, ângulo diferente da terça", alts:["Puxada na máquina articulada","Puxada alta neutra","Puxada alta aberta"] },
            { name:"Remada baixa com triângulo", scheme:"2×10–15", target:"Romboides / trapézio médio", alts:["Remada baixa com barra reta","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
          ]},
          { name: "Ombro posterior", total: "", exercises: [
            { name:"Face pull na polia", scheme:"3×12–20", target:"Deltoide posterior / rotadores", alts:["Crucifixo inverso no banco inclinado","Remada alta com barra","Crucifixo inverso na máquina"] },
          ]},
          { name: "Trapézio", total: "2 séries", exercises: [
            { name:"Encolhimento com barra", scheme:"2×10–15", target:"Trapézio superior, ângulo diferente da terça", alts:["Encolhimento com halteres","Encolhimento na máquina Smith","Encolhimento com barra trap (hex bar)"] },
          ]},
          { name: "Bíceps", total: "8 séries", split: [["Cabeça longa","seg",63],["Cabeça curta","ter",37]], exercises: [
            { name:"Rosca inclinada", scheme:"3×8–12", target:"Cabeça longa", alts:["Rosca alternada inclinada","Rosca 21","Rosca martelo"] },
            { name:"Rosca Scott", scheme:"3×8–12", target:"Ênfase cabeça curta", alts:["Rosca Scott na polia","Rosca Scott com halteres","Rosca Scott unilateral"] },
            { name:"Rosca martelo cross-body", scheme:"2×10–15", target:"Braquial", alts:["Rosca martelo na polia","Rosca martelo alternada","Rosca Zottman"] },
          ]},
        ]
      },
    }
  },
  c: {
    label: "Plano C · Torso / Limbs (4-5 Dias)",
    desc: "Tronco (Peito e Costas) e Membros (Braços e Pernas) separados. Máximo foco em braços e pernas.", category:"ALT", tags:["BRAÇOS & PERNAS","TRONCO","ESPECIALIZAÇÃO"],
    meta: { foco:"Especialização em braços e pernas com tronco consolidado", frequencia:"5 dias, cada grupo 2x (pernas 1x)", estilo:"Agrupado por região do corpo (tronco/membros)", fase:"Especialização de Membros" },
    days: {
      seg: {
        label: "Segunda", color: "seg",
        title: "Torso A — Peito + Costas",
        note: "Peito e costas na mesma sessão, antagonistas trabalhando juntos.",
        groups: [
          { name: "Peito", total: "9 séries", split: [["Médio","ter",44],["Superior","seg",33],["Inferior","qua",23]], exercises: [
            { name:"Supino reto com barra", scheme:"4×6–10", target:"Peitoral médio", advanced: "🔥 Bi-set com Remada", alts:["Supino reto com halteres","Supino reto no Smith","Flexão de braço tradicional"] },
            { name:"Supino inclinado com halteres", scheme:"3×8–12", target:"Peitoral superior", alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Crossover na polia alta", scheme:"2×10–15", target:"Ênfase inferior", alts:["Crucifixo no Pec Deck","Flexão de braço com pés elevados","Supino neutro com halteres"] },
          ]},
          { name: "Costas", total: "11 séries", split: [["Largura","ter",64],["Espessura","seg",36]], exercises: [
            { name:"Remada curvada", scheme:"4×6–10", target:"Espessura", advanced: "🔥 Bi-set com Supino", alts:["Remada cavalinho","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Puxada alta aberta", scheme:"4×6–10", target:"Largura / dorsal", alts:["Puxada na máquina articulada","Puxada supinada (pegada inversa)","Puxada alta neutra"] },
            { name:"Puxada alta com triângulo", scheme:"3×8–12", target:"Largura, maior amplitude", alts:["Puxada supinada (pegada inversa)","Puxada na máquina articulada","Puxada alta neutra"] },
          ]},
          { name: "Trapézio", total: "3 séries", exercises: [
            { name:"Encolhimento com halteres", scheme:"3×10–15", target:"Trapézio superior", alts:["Encolhimento com barra","Encolhimento na máquina Smith","Remada alta com barra"] },
          ]},
        ]
      },
      ter: {
        label: "Terça", color: "ter",
        title: "Limbs A — Ombro + Bíceps + Tríceps",
        note: "Todos os membros superiores numa sessão só, cada um com volume direto de verdade.",
        groups: [
          { name: "Ombro", total: "9 séries diretas", split: [["Anterior","seg",33],["Lateral","ter",34],["Posterior","qua",33]], exercises: [
            { name:"Desenvolvimento com halteres", scheme:"3×8–12", target:"Deltoide anterior", alts:["Desenvolvimento na máquina","Desenvolvimento Arnold","Desenvolvimento militar com barra"] },
            { name:"Elevação lateral", scheme:"3×12–20", target:"Deltoide lateral", alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"] },
            { name:"Crucifixo inverso", scheme:"3×12–20", target:"Posterior", alts:["Crucifixo inverso na máquina","Face pull na polia","Remada alta com barra"] },
          ]},
          { name: "Bíceps", total: "7 séries", split: [["Massa geral","ter",43],["Braquial","qua",29],["Cabeça longa","seg",28]], exercises: [
            { name:"Rosca direta W", scheme:"3×6–10", target:"Massa geral", alts:["Rosca direta com barra reta","Rosca direta na polia","Rosca Scott"] },
            { name:"Rosca martelo", scheme:"2×10–15", target:"Braquial", alts:["Rosca martelo na polia com corda","Rosca martelo alternada","Rosca Zottman"] },
            { name:"Rosca concentrada", scheme:"2×10–15", target:"Cabeça longa, pico", alts:["Rosca alternada em pé","Rosca Scott","Rosca 21"] },
          ]},
          { name: "Tríceps", total: "8 séries", split: [["Cabeça longa","seg",50],["Lateral/medial","ter",50]], exercises: [
            { name:"Tríceps testa", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps testa com halteres","Tríceps testa na polia","Tríceps francês"] },
            { name:"Tríceps pulley com corda", scheme:"3×10–15", target:"Lateral / medial", alts:["Tríceps pulley com barra","Tríceps corda unilateral","Tríceps testa"] },
            { name:"Tríceps francês unilateral", scheme:"2×10–15", target:"Cabeça longa", alts:["Tríceps coice (kickback)","Tríceps francês com halteres","Tríceps francês"] },
          ]},
        ]
      },
      qua: {
        label: "Quarta", color: "qua",
        title: "Pernas completas",
        note: "Igual aos outros planos — treino pesado e completo, já resolve a semana toda.",
        groups: [
          { name: "Quadríceps", total: "10 séries", exercises: [
            { name:"Agachamento livre", scheme:"4×6–10", target:"Quadríceps geral / força", alts:["Agachamento no Smith","Leg press 45°","Hack machine"] },
            { name:"Leg press 45°", scheme:"3×8–12", target:"Quadríceps geral", alts:["Hack machine","Agachamento livre","Hack machine (variação)"] },
            { name:"Cadeira extensora", scheme:"3×10–15", target:"Quadríceps, definição", alts:["Agachamento búlgaro","Leg press unilateral (foco quadríceps)","Passada (afundo)"] },
          ]},
          { name: "Posterior", total: "6 séries", exercises: [
            { name:"Stiff", scheme:"3×6–10", target:"Posterior de coxa, glúteo e lombar", alts:["Stiff com halteres","Good morning","Levantamento terra romeno com barra"] },
            { name:"Mesa flexora", scheme:"3×8–12", target:"Posterior de coxa", alts:["Flexora em pé (unilateral)","Stiff com halteres","Cadeira flexora"] },
          ]},
          { name: "Glúteos", total: "", exercises: [
            { name:"Hip thrust", scheme:"3×8–12", target:"Agachamento + leg press + stiff já ajudam bastante", alts:["Elevação pélvica no chão","Cadeira abdutora","Agachamento sumô"] },
          ]},
          { name: "Panturrilhas", total: "", exercises: [
            { name:"Panturrilha em pé", scheme:"3×8–12", target:"Gastrocnêmio", alts:["Panturrilha no leg press","Panturrilha unilateral com halteres","Panturrilha no Smith"] },
            { name:"Panturrilha sentado", scheme:"3×12–20", target:"Sóleo", alts:["Panturrilha unilateral com halteres","Panturrilha no leg press","Panturrilha no Smith"] },
          ]},
          { name: "Abdômen", total: "", exercises: [
            { name:"Abdominal na polia", scheme:"3×10–15", target:"Reto abdominal", alts:["Abdominal no solo","Roda abdominal (ab wheel)","Prancha com carga"] },
            { name:"Elevação de pernas", scheme:"3×10–15", target:"Abdômen inferior", alts:["Elevação de joelhos na paralela","Abdominal infra no banco declinado","Roda abdominal (ab wheel)"] },
          ]},
        ]
      },
      qui: {
        label: "Quinta", color: "qui",
        title: "Torso B — Peito + Costas",
        note: "Mesma lógica de segunda, com ângulos diferentes.",
        groups: [
          { name: "Peito", total: "8 séries", split: [["Superior","seg",38],["Inferior","qua",38],["Médio","ter",24]], exercises: [
            { name:"Supino inclinado na máquina", scheme:"3×8–12", target:"Superior", advanced: "🔥 Bi-set com Puxada", alts:["Supino inclinado com halteres","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Supino declinado ou mergulho assistido", scheme:"3×8–12", target:"Ênfase inferior", alts:["Flexão declinada","Crossover na polia baixa","Mergulho entre bancos"] },
            { name:"Pec Deck", scheme:"2×10–15", target:"Região média", alts:["Crucifixo com halteres","Crossover na polia média","Crossover na polia alta"] },
          ]},
          { name: "Costas", total: "9 séries", split: [["Espessura","seg",33],["Largura","ter",33],["Detalhe","qui",34]], exercises: [
            { name:"Puxada supinada (pegada inversa)", scheme:"3×8–12", target:"Largura, ângulo diferente da segunda", advanced: "🔥 Bi-set com Supino Incl.", alts:["Puxada na máquina articulada","Puxada alta neutra","Puxada alta aberta"] },
            { name:"Remada cavalinho", scheme:"3×6–10", target:"Espessura", alts:["Remada curvada com barra","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Remada baixa com triângulo", scheme:"3×8–12", target:"Romboides / trapézio médio", alts:["Remada baixa com barra reta","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
          ]},
          { name: "Trapézio", total: "2 séries", exercises: [
            { name:"Encolhimento com barra", scheme:"2×10–15", target:"Trapézio superior, ângulo diferente da segunda", alts:["Encolhimento com halteres","Encolhimento na máquina Smith","Encolhimento com barra trap (hex bar)"] },
          ]},
        ]
      },
      sex: {
        label: "Sexta", color: "sex",
        title: "Limbs B — Ombro + Bíceps + Tríceps",
        note: "Fecha a semana com os membros de novo, ângulos diferentes de terça.",
        groups: [
          { name: "Ombro", total: "10 séries diretas", split: [["Lateral","ter",40],["Anterior","seg",30],["Posterior","qua",30]], exercises: [
            { name:"Elevação lateral na polia", scheme:"4×10–20", target:"Deltoide lateral", alts:["Elevação lateral com halteres","Elevação lateral na máquina","Elevação lateral sentado"] },
            { name:"Desenvolvimento Arnold", scheme:"3×8–12", target:"Deltoide anterior", alts:["Desenvolvimento militar com barra","Desenvolvimento com halteres","Desenvolvimento na máquina"] },
            { name:"Face pull na polia", scheme:"3×12–20", target:"Posterior", alts:["Crucifixo inverso no banco inclinado","Remada alta com barra","Crucifixo inverso na máquina"] },
          ]},
          { name: "Bíceps", total: "7 séries", split: [["Cabeça longa","seg",43],["Cabeça curta","ter",28],["Braquial","qua",29]], exercises: [
            { name:"Rosca inclinada", scheme:"3×8–12", target:"Cabeça longa", alts:["Rosca alternada inclinada","Rosca 21","Rosca martelo"] },
            { name:"Rosca Scott", scheme:"2×10–15", target:"Ênfase cabeça curta", alts:["Rosca Scott na polia","Rosca Scott com halteres","Rosca Scott unilateral"] },
            { name:"Rosca martelo cross-body", scheme:"2×10–15", target:"Braquial", alts:["Rosca martelo na polia","Rosca martelo alternada","Rosca Zottman"] },
          ]},
          { name: "Tríceps", total: "8 séries", split: [["Cabeça longa","seg",50],["Lateral/medial","ter",50]], exercises: [
            { name:"Tríceps francês", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps francês com halteres","Tríceps francês na polia","Tríceps francês unilateral"] },
            { name:"Tríceps corda", scheme:"3×10–15", target:"Lateral / medial", alts:["Tríceps barra reta na polia","Tríceps corda unilateral","Tríceps testa"] },
            { name:"Tríceps testa com halteres", scheme:"2×10–15", target:"Cabeça longa", alts:["Tríceps testa na polia","Tríceps testa","Tríceps francês"] },
          ]},
        ]
      },
    }
  },
  d: {
    label: "Plano D · Prioridade Rotativa (5 Dias)",
    desc: "5 dias — 1 grupo prioritário pesado por dia (Peito, Costas, Pernas, Ombros, Braços). Para choque muscular e quebra de platô.", category:"ALT", tags:["CHOQUE","FORÇA","QUEBRA DE PLATÔ"],
    meta: { foco:"Choque muscular com 1 grupo pesado por dia", frequencia:"5 dias, cada grupo 2x com volume desigual", estilo:"1 grupo em foco pesado + resto em manutenção", fase:"Quebra de Platô" },
    days: {
      seg: {
        label: "Segunda", color: "seg",
        title: "Peito (foco) + Tríceps e Ombro (manutenção)",
        note: "Peito é o foco da semana — vem primeiro, com você mais descansado, e leva o volume mais alto.",
        groups: [
          { name: "Peito — foco principal", total: "15 séries", split: [["Superior","seg",27],["Médio","ter",40],["Inferior","qua",33]], exercises: [
            { name:"Supino reto com barra", scheme:"4×6–10", target:"Peitoral médio", alts:["Supino reto com halteres","Supino reto no Smith","Flexão de braço tradicional"] },
            { name:"Supino inclinado com halteres", scheme:"4×6–10", target:"Peitoral superior", alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Supino declinado ou mergulho assistido", scheme:"3×8–12", target:"Ênfase inferior", alts:["Flexão declinada","Crossover na polia baixa","Mergulho entre bancos"] },
            { name:"Crossover na polia alta", scheme:"2×10–15", target:"Ênfase inferior", alts:["Crucifixo no Pec Deck","Flexão de braço com pés elevados","Supino neutro com halteres"] },
            { name:"Pec Deck", scheme:"2×10–15", target:"Peitoral médio", alts:["Crucifixo com halteres","Crossover na polia média","Crossover na polia alta"] },
          ]},
          { name: "Tríceps — manutenção", total: "6 séries", exercises: [
            { name:"Tríceps testa", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps testa com halteres","Tríceps testa na polia","Tríceps francês"] },
            { name:"Tríceps pulley com barra", scheme:"3×10–15", target:"Lateral / medial", alts:["Tríceps pulley com corda","Tríceps corda unilateral","Tríceps testa"] },
          ]},
          { name: "Ombro — manutenção", total: "3 séries", exercises: [
            { name:"Elevação lateral", scheme:"3×12–20", target:"Deltoide lateral", alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
        ]
      },
      ter: {
        label: "Terça", color: "ter",
        title: "Costas (foco) + Bíceps (manutenção)",
        note: "Costas ainda pega você descansado — segundo dia da semana, foco total.",
        groups: [
          { name: "Costas — foco principal", total: "16 séries", split: [["Largura","ter",44],["Espessura","seg",25],["Detalhe","qui",31]], exercises: [
            { name:"Puxada alta aberta", scheme:"4×6–10", target:"Largura / dorsal", alts:["Puxada na máquina articulada","Puxada supinada (pegada inversa)","Puxada alta neutra"] },
            { name:"Remada curvada", scheme:"4×6–10", target:"Espessura", alts:["Remada cavalinho","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Puxada alta com triângulo", scheme:"3×8–12", target:"Largura, maior amplitude", alts:["Puxada supinada (pegada inversa)","Puxada na máquina articulada","Puxada alta neutra"] },
            { name:"Remada baixa com triângulo", scheme:"3×8–12", target:"Romboides / trapézio médio", alts:["Remada baixa com barra reta","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Pulldown unilateral na polia", scheme:"2×10–15", target:"Dorsal / controle", alts:["Puxada unilateral na máquina","Remada baixa unilateral","Puxada supinada (pegada inversa)"] },
          ]},
          { name: "Trapézio", total: "3 séries", exercises: [
            { name:"Encolhimento com halteres", scheme:"3×10–15", target:"Trapézio superior", alts:["Encolhimento com barra","Encolhimento na máquina Smith","Remada alta com barra"] },
          ]},
          { name: "Bíceps — manutenção", total: "6 séries", exercises: [
            { name:"Rosca direta W", scheme:"3×6–10", target:"Massa geral", alts:["Rosca direta com barra reta","Rosca direta na polia","Rosca Scott"] },
            { name:"Rosca 21", scheme:"3×10–15", target:"Amplitude parcial, geral", alts:["Rosca alternada em pé","Rosca inversa (foco antebraço)","Rosca concentrada"] },
          ]},
        ]
      },
      qua: {
        label: "Quarta", color: "qua",
        title: "Pernas completas",
        note: "Não entra na lógica de prioridade — sempre o mesmo volume alto, o corpo todo depende dela.",
        groups: [
          { name: "Quadríceps", total: "10 séries", exercises: [
            { name:"Agachamento livre", scheme:"4×6–10", target:"Quadríceps geral / força", alts:["Agachamento no Smith","Leg press 45°","Hack machine"] },
            { name:"Leg press 45°", scheme:"3×8–12", target:"Quadríceps geral", alts:["Hack machine","Agachamento livre","Hack machine (variação)"] },
            { name:"Cadeira extensora", scheme:"3×10–15", target:"Quadríceps, definição", alts:["Agachamento búlgaro","Leg press unilateral (foco quadríceps)","Passada (afundo)"] },
          ]},
          { name: "Posterior", total: "6 séries", exercises: [
            { name:"Stiff", scheme:"3×6–10", target:"Posterior de coxa, glúteo e lombar", alts:["Stiff com halteres","Good morning","Levantamento terra romeno com barra"] },
            { name:"Mesa flexora", scheme:"3×8–12", target:"Posterior de coxa", alts:["Flexora em pé (unilateral)","Stiff com halteres","Cadeira flexora"] },
          ]},
          { name: "Glúteos", total: "", exercises: [
            { name:"Hip thrust", scheme:"3×8–12", target:"Agachamento + leg press + stiff já ajudam bastante", alts:["Elevação pélvica no chão","Cadeira abdutora","Agachamento sumô"] },
          ]},
          { name: "Panturrilhas", total: "", exercises: [
            { name:"Panturrilha em pé", scheme:"3×8–12", target:"Gastrocnêmio", alts:["Panturrilha no leg press","Panturrilha unilateral com halteres","Panturrilha no Smith"] },
            { name:"Panturrilha sentado", scheme:"3×12–20", target:"Sóleo", alts:["Panturrilha unilateral com halteres","Panturrilha no leg press","Panturrilha no Smith"] },
          ]},
          { name: "Abdômen", total: "", exercises: [
            { name:"Abdominal na polia", scheme:"3×10–15", target:"Reto abdominal", alts:["Abdominal no solo","Roda abdominal (ab wheel)","Prancha com carga"] },
            { name:"Elevação de pernas", scheme:"3×10–15", target:"Abdômen inferior", alts:["Elevação de joelhos na paralela","Abdominal infra no banco declinado","Roda abdominal (ab wheel)"] },
          ]},
        ]
      },
      qui: {
        label: "Quinta", color: "qui",
        title: "Ombro (foco) + Peito (manutenção)",
        note: "Segunda metade da semana: ombro vira prioridade, peito passa a ser só manutenção.",
        groups: [
          { name: "Ombro — foco principal", total: "20 séries", split: [["Anterior","seg",35],["Lateral","ter",35],["Posterior","qua",30]], exercises: [
            { name:"Desenvolvimento com halteres", scheme:"4×6–10", target:"Deltoide anterior, compound", alts:["Desenvolvimento na máquina","Desenvolvimento militar com barra","Desenvolvimento Arnold"] },
            { name:"Elevação frontal com halteres", scheme:"3×8–12", target:"Deltoide anterior, isolamento", alts:["Elevação frontal na polia","Elevação frontal com barra","Elevação frontal alternada"] },
            { name:"Elevação lateral na polia", scheme:"4×10–20", target:"Deltoide lateral", alts:["Elevação lateral com halteres","Elevação lateral na máquina","Elevação lateral sentado"] },
            { name:"Elevação lateral inclinada no banco", scheme:"3×12–20", target:"Deltoide lateral, isolamento estrito", alts:["Elevação lateral unilateral na polia","Elevação lateral com halteres","Elevação lateral na máquina"] },
            { name:"Crucifixo inverso", scheme:"4×12–20", target:"Posterior", alts:["Crucifixo inverso na máquina","Face pull na polia","Remada alta com barra"] },
            { name:"Face pull na polia", scheme:"2×12–20", target:"Posterior", alts:["Crucifixo inverso no banco inclinado","Remada alta com barra","Crucifixo inverso na máquina"] },
          ]},
          { name: "Peito — manutenção", total: "6 séries", exercises: [
            { name:"Supino inclinado na máquina", scheme:"3×8–12", target:"Superior", alts:["Supino inclinado com halteres","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Crucifixo com halteres", scheme:"3×10–15", target:"Região média", alts:["Pec Deck","Crossover na polia média","Crossover na polia média (variação)"] },
          ]},
        ]
      },
      sex: {
        label: "Sexta", color: "sex",
        title: "Braços (foco) + Costas (manutenção)",
        note: "Fecha a semana com braços recebendo o volume mais alto, já que ficaram só na manutenção o resto da semana.",
        groups: [
          { name: "Bíceps — foco principal", total: "11 séries", split: [["Cabeça longa","seg",27],["Cabeça curta","ter",27],["Braquial","qua",18],["Pico","qui",18]], exercises: [
            { name:"Rosca inclinada", scheme:"3×8–12", target:"Cabeça longa", alts:["Rosca alternada inclinada","Rosca alternada em pé","Rosca martelo"] },
            { name:"Rosca Scott", scheme:"3×8–12", target:"Ênfase cabeça curta", alts:["Rosca Scott na polia","Rosca Scott com halteres","Rosca Scott unilateral"] },
            { name:"Rosca martelo", scheme:"3×10–15", target:"Braquial", alts:["Rosca martelo na polia com corda","Rosca martelo alternada","Rosca Zottman"] },
            { name:"Rosca concentrada", scheme:"2×10–15", target:"Pico, cabeça longa", alts:["Rosca alternada em pé","Rosca Scott","Rosca 21"] },
          ]},
          { name: "Tríceps — foco principal", total: "11 séries", split: [["Cabeça longa","seg",55],["Lateral/medial","ter",45]], exercises: [
            { name:"Tríceps francês", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps francês com halteres","Tríceps francês na polia","Tríceps francês unilateral"] },
            { name:"Tríceps pulley com corda", scheme:"3×10–15", target:"Lateral / medial", alts:["Tríceps pulley com barra","Tríceps corda unilateral","Tríceps testa"] },
            { name:"Tríceps testa com halteres", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps testa na polia","Tríceps testa","Tríceps francês"] },
            { name:"Tríceps corda", scheme:"2×10–15", target:"Lateral / medial", alts:["Tríceps barra reta na polia","Tríceps coice (kickback)","Tríceps testa"] },
          ]},
          { name: "Costas — manutenção", total: "6 séries", exercises: [
            { name:"Remada cavalinho", scheme:"3×6–10", target:"Espessura", alts:["Remada curvada com barra","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Pullover na polia", scheme:"3×10–15", target:"Dorsal, posição alongada", alts:["Pullover com halteres","Pullover na máquina","Remada baixa com triângulo"] },
          ]},
          { name: "Trapézio — manutenção", total: "2 séries", exercises: [
            { name:"Encolhimento com barra", scheme:"2×10–15", target:"Trapézio superior, manutenção", alts:["Encolhimento com halteres","Encolhimento na máquina Smith","Encolhimento com barra trap (hex bar)"] },
          ]},
        ]
      },
    }
  },
  em: {
    label: "Emergência 3D (3 Dias)",
    desc: "3 dias — Semana corrida, viagem ou imprevistos. Mantém 100% da sua massa muscular e força sem regredir.", category:"UTIL", tags:["EMERGÊNCIA","3 DIAS","MANUTENÇÃO"],
    meta: { foco:"Preservação total de massa muscular com menor tempo", frequencia:"3 dias na semana", estilo:"Push / Legs / Pull condensado", fase:"Manutenção / Sobrevivência" },
    days: {
      seg: {
        label: "Dia 1", color: "seg",
        title: "Push — Peito + Ombro + Tríceps",
        note: "Use em qualquer um dos 3 dias que sobrarem na semana, não precisa ser segunda de verdade. Cardio opcional: 20–30 min de bike depois do treino, se quiser.",
        groups: [
          { name: "Peito", total: "11 séries", split: [["Médio","ter",36],["Superior","seg",36],["Inferior","qua",28]], exercises: [
            { name:"Supino reto com barra", scheme:"4×8–10", target:"Peitoral médio", alts:["Supino reto com halteres","Supino reto no Smith","Flexão de braço tradicional"] },
            { name:"Supino inclinado com halteres", scheme:"4×10–12", target:"Peitoral superior", alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Crossover na polia alta", scheme:"3×12", target:"Inferior / miolo", alts:["Pec Deck","Crucifixo com halteres","Supino neutro com halteres"] },
          ]},
          { name: "Ombro", total: "7 séries diretas", exercises: [
            { name:"Desenvolvimento com halteres", scheme:"3×10", target:"Deltoide anterior", alts:["Desenvolvimento na máquina","Desenvolvimento Arnold","Desenvolvimento militar com barra"] },
            { name:"Elevação lateral", scheme:"4×12–15", target:"Deltoide lateral", alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
          { name: "Tríceps", total: "7 séries", exercises: [
            { name:"Tríceps pulley com barra", scheme:"4×10", target:"Cabeça lateral", alts:["Tríceps pulley com corda","Tríceps corda","Tríceps testa"] },
            { name:"Tríceps testa", scheme:"3×12", target:"Cabeça longa", alts:["Tríceps corda","Tríceps testa com halteres","Tríceps francês"] },
          ]},
        ]
      },
      qua: {
        label: "Dia 2", color: "qua",
        title: "Legs & Core — Pernas completo + Abdômen",
        note: "Sem cardio nesse dia — poupe as pernas pro treino em si. Adicionei o hip thrust, que faltava pro glúteo receber trabalho direto.",
        groups: [
          { name: "Quadríceps", total: "8 séries", exercises: [
            { name:"Agachamento livre", scheme:"4×8–10", target:"Quadríceps geral", alts:["Leg press 45°","Agachamento no Smith","Hack machine"] },
            { name:"Cadeira extensora", scheme:"4×12", target:"Quadríceps isolado", alts:["Agachamento búlgaro","Leg press unilateral (foco quadríceps)","Passada (afundo)"] },
          ]},
          { name: "Posterior", total: "7 séries", exercises: [
            { name:"Mesa flexora", scheme:"4×10–12", target:"Posterior de coxa", alts:["Cadeira flexora","Flexora em pé (unilateral)","Cadeira flexora (variação)"] },
            { name:"Stiff com halteres", scheme:"3×10", target:"Posterior, glúteo e lombar", alts:["Stiff com barra","Good morning","Levantamento terra romeno com barra"] },
          ]},
          { name: "Glúteos", total: "3 séries", exercises: [
            { name:"Hip thrust", scheme:"3×10", target:"Glúteo direto", alts:["Elevação pélvica no chão","Cadeira abdutora","Agachamento sumô"] },
          ]},
          { name: "Panturrilha", total: "4 séries", exercises: [
            { name:"Panturrilha sentado", scheme:"4×15", target:"Sóleo", alts:["Panturrilha em pé","Panturrilha no leg press","Panturrilha no Smith"] },
          ]},
          { name: "Abdômen", total: "4 séries", exercises: [
            { name:"Abdominal na polia", scheme:"4×15–20", target:"Reto abdominal", alts:["Abdominal no solo","Roda abdominal (ab wheel)","Prancha com carga"] },
          ]},
        ]
      },
      ter: {
        label: "Dia 3", color: "ter",
        title: "Pull — Costas + Ombro posterior + Bíceps",
        note: "Cardio opcional: 20–30 min de bike depois do treino, se quiser.",
        groups: [
          { name: "Costas", total: "14 séries", split: [["Largura","ter",50],["Espessura","seg",50]], exercises: [
            { name:"Puxada alta aberta", scheme:"4×10", target:"Largura / dorsal", alts:["Puxada na máquina articulada","Puxada supinada (pegada inversa)","Puxada alta neutra"] },
            { name:"Puxada alta com triângulo", scheme:"3×11–12", target:"Largura inferior", alts:["Puxada supinada (pegada inversa)","Puxada na máquina articulada","Puxada alta neutra"] },
            { name:"Remada baixa com triângulo", scheme:"4×10", target:"Espessura / miolo", alts:["Remada baixa com barra reta","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Remada curvada", scheme:"3×10", target:"Densidade geral", alts:["Remada cavalinho","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
          ]},
          { name: "Ombro posterior", total: "4 séries", exercises: [
            { name:"Crucifixo inverso", scheme:"4×12", target:"Deltoide posterior", alts:["Crucifixo inverso na máquina","Face pull na polia","Remada alta com barra"] },
          ]},
          { name: "Bíceps", total: "7 séries", exercises: [
            { name:"Rosca direta W", scheme:"4×10", target:"Bíceps geral", alts:["Rosca direta com barra reta","Rosca alternada em pé","Rosca Scott"] },
            { name:"Rosca martelo", scheme:"3×12", target:"Braquial", alts:["Rosca martelo na polia com corda","Rosca martelo alternada","Rosca Zottman"] },
          ]},
        ]
      },
    }
  },
  em4: {
    label: "Emergência 4D (4 Dias)",
    desc: "4 dias — Para semanas curtas ou feriados. Push, Pull e Legs completos + 1 dia de Upper para fechar o corpo todo.", category:"UTIL", tags:["EMERGÊNCIA","4 DIAS","COMPLETO"],
    meta: { foco:"Treino completo e balanceado em 4 dias", frequencia:"4 dias na semana", estilo:"Push/Pull/Legs + Upper de reforço", fase:"Adaptação de Rotina" },
    days: {
      seg: {
        label: "Dia 1", color: "seg",
        title: "Push — Peito + Ombro + Tríceps",
        note: "Recebe reforço no Dia 4, então o peito fecha a semana bem perto de 2x.",
        groups: [
          { name: "Peito", total: "9 séries", exercises: [
            { name:"Supino reto com barra", scheme:"4×8–10", target:"Peitoral médio", alts:["Supino reto com halteres","Supino reto no Smith","Flexão de braço tradicional"] },
            { name:"Supino inclinado com halteres", scheme:"3×10–12", target:"Peitoral superior", alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Crossover na polia alta", scheme:"2×12", target:"Inferior / miolo", alts:["Pec Deck","Crucifixo com halteres","Supino neutro com halteres"] },
          ]},
          { name: "Ombro", total: "6 séries diretas", exercises: [
            { name:"Desenvolvimento com halteres", scheme:"3×10", target:"Deltoide anterior", alts:["Desenvolvimento na máquina","Desenvolvimento Arnold","Desenvolvimento militar com barra"] },
            { name:"Elevação lateral", scheme:"3×12–15", target:"Deltoide lateral", alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
          { name: "Tríceps", total: "5 séries", exercises: [
            { name:"Tríceps pulley com barra", scheme:"3×10", target:"Cabeça lateral", alts:["Tríceps pulley com corda","Tríceps corda","Tríceps testa"] },
            { name:"Tríceps testa", scheme:"2×12", target:"Cabeça longa", alts:["Tríceps corda","Tríceps testa com halteres","Tríceps francês"] },
          ]},
        ]
      },
      ter: {
        label: "Dia 2", color: "ter",
        title: "Pull — Costas + Ombro posterior + Bíceps",
        note: "Também recebe reforço no Dia 4 — costas fica perto de 2x na semana.",
        groups: [
          { name: "Costas", total: "12 séries", exercises: [
            { name:"Puxada alta aberta", scheme:"4×10", target:"Largura / dorsal", alts:["Puxada na máquina articulada","Puxada supinada (pegada inversa)","Puxada alta neutra"] },
            { name:"Remada curvada", scheme:"3×10", target:"Espessura", alts:["Remada cavalinho","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Puxada alta com triângulo", scheme:"3×11–12", target:"Largura inferior", alts:["Puxada supinada (pegada inversa)","Puxada na máquina articulada","Puxada alta neutra"] },
            { name:"Remada baixa com triângulo", scheme:"2×10", target:"Romboides / trapézio", alts:["Remada baixa com barra reta","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
          ]},
          { name: "Ombro posterior", total: "3 séries", exercises: [
            { name:"Crucifixo inverso", scheme:"3×12", target:"Deltoide posterior", alts:["Crucifixo inverso na máquina","Face pull na polia","Remada alta com barra"] },
          ]},
          { name: "Bíceps", total: "5 séries", exercises: [
            { name:"Rosca direta W", scheme:"3×10", target:"Bíceps geral", alts:["Rosca direta com barra reta","Rosca alternada em pé","Rosca Scott"] },
            { name:"Rosca martelo", scheme:"2×12", target:"Braquial", alts:["Rosca martelo na polia com corda","Rosca martelo alternada","Rosca Zottman"] },
          ]},
        ]
      },
      qua: {
        label: "Dia 3", color: "qua",
        title: "Pernas completas",
        note: "Fica 1x mesmo — é a que mais pede recuperação, não compensa espremer 2x numa semana de 4 dias.",
        groups: [
          { name: "Quadríceps", total: "8 séries", exercises: [
            { name:"Agachamento livre", scheme:"4×8–10", target:"Quadríceps geral", alts:["Leg press 45°","Agachamento no Smith","Hack machine"] },
            { name:"Cadeira extensora", scheme:"4×12", target:"Quadríceps isolado", alts:["Agachamento búlgaro","Leg press unilateral (foco quadríceps)","Passada (afundo)"] },
          ]},
          { name: "Posterior", total: "6 séries", exercises: [
            { name:"Mesa flexora", scheme:"3×10–12", target:"Posterior de coxa", alts:["Cadeira flexora","Flexora em pé (unilateral)","Cadeira flexora (variação)"] },
            { name:"Stiff com halteres", scheme:"3×10", target:"Posterior, glúteo e lombar", alts:["Stiff com barra","Good morning","Levantamento terra romeno com barra"] },
          ]},
          { name: "Glúteos", total: "3 séries", exercises: [
            { name:"Hip thrust", scheme:"3×10", target:"Glúteo direto", alts:["Elevação pélvica no chão","Cadeira abdutora","Agachamento sumô"] },
          ]},
          { name: "Panturrilha e abdômen", total: "6 séries", exercises: [
            { name:"Panturrilha em pé", scheme:"3×15", target:"Gastrocnêmio", alts:["Panturrilha sentado","Panturrilha no leg press","Panturrilha no Smith"] },
            { name:"Abdominal na polia", scheme:"3×15–20", target:"Reto abdominal", alts:["Abdominal no solo","Roda abdominal (ab wheel)","Prancha com carga"] },
          ]},
        ]
      },
      qui: {
        label: "Dia 4", color: "qui",
        title: "Upper manutenção — Peito + Costas + Ombro + Braço",
        note: "O dia que salva a semana: passa rápido por tudo de novo, com volume baixo, só pra dar a 2ª frequência e não perder o ganho.",
        groups: [
          { name: "Peito + Costas", total: "6 séries", exercises: [
            { name:"Supino inclinado na máquina", scheme:"3×10–12", target:"Peitoral, manutenção", alts:["Supino inclinado com halteres","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Remada cavalinho", scheme:"3×10", target:"Costas, manutenção", alts:["Puxada alta aberta","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
          ]},
          { name: "Ombro", total: "3 séries", exercises: [
            { name:"Elevação lateral na polia", scheme:"3×12–15", target:"Deltoide lateral", alts:["Elevação lateral com halteres","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
          { name: "Bíceps + Tríceps", total: "4 séries", exercises: [
            { name:"Rosca inclinada", scheme:"2×10–12", target:"Bíceps, manutenção", alts:["Rosca alternada inclinada","Rosca Scott","Rosca martelo"] },
            { name:"Tríceps corda", scheme:"2×10–15", target:"Tríceps, manutenção", alts:["Tríceps barra reta na polia","Tríceps corda unilateral","Tríceps testa"] },
          ]},
        ]
      },
    }
  },
  fb: {
    label: "Full Body A/B/C (3-5 Dias)",
    desc: "Corpo todo estimulado em cada sessão. Máximo gasto calórico e alta queima metabólica.", category:"ALT", tags:["ALTA FREQUÊNCIA","GASTO CALÓRICO","CORPO TODO"],
    meta: { foco:"Corpo inteiro em cada sessão com alto gasto energético", frequencia:"3 a 5 dias na semana", estilo:"Full Body — alta frequência e queima metabólica", fase:"Secagem e Alta Frequência" },
    days: {
      seg: {
        label: "Segunda", color: "seg",
        title: "Full Body A",
        note: "Cada composto principal aparece 1x por dia (por isso o volume por músculo é baixo), mas a frequência sobe muito na semana — o oposto da lógica de split. Reuni os 4 compostos num grupo só pra ficar claro que são o corpo inteiro na mesma sessão, não peças soltas.",
        groups: [
          { name: "Compostos — corpo todo", total: "13 séries", exercises: [
            { name:"Agachamento livre", scheme:"4×6–10", target:"Quadríceps geral / força", alts:["Leg press 45°","Agachamento no Smith","Hack machine"] },
            { name:"Supino reto com barra", scheme:"3×6–10", target:"Peitoral médio, compound", alts:["Supino reto com halteres","Supino reto no Smith","Flexão de braço tradicional"] },
            { name:"Remada curvada", scheme:"3×6–10", target:"Costas, espessura", alts:["Remada cavalinho","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Desenvolvimento com halteres", scheme:"3×8–12", target:"Deltoide anterior", alts:["Desenvolvimento na máquina","Desenvolvimento Arnold","Desenvolvimento militar com barra"] },
          ]},
          { name: "Panturrilha", total: "3 séries", exercises: [
            { name:"Panturrilha em pé", scheme:"3×12–15", target:"Gastrocnêmio", alts:["Panturrilha sentado","Panturrilha no Smith","Panturrilha no leg press"] },
          ]},
        ]
      },
      ter: {
        label: "Terça", color: "ter",
        title: "Full Body B",
        note: "Muda o padrão principal de perna pra dobradiça de quadril (hip hinge) em vez de agachamento, e é o único dia que já entra com braço direto — como o resto da semana já dá bastante trabalho indireto de bíceps/tríceps via supino e puxada, esse toque direto é suficiente.",
        groups: [
          { name: "Compostos — corpo todo", total: "13 séries", exercises: [
            { name:"Stiff", scheme:"4×6–10", target:"Posterior de coxa, glúteo e lombar", alts:["Stiff com halteres","Levantamento terra romeno com barra","Good morning"] },
            { name:"Puxada alta aberta", scheme:"3×8–12", target:"Largura / dorsal", alts:["Puxada na máquina articulada","Puxada supinada (pegada inversa)","Puxada alta neutra"] },
            { name:"Supino inclinado com halteres", scheme:"3×8–12", target:"Peitoral superior, posição alongada", alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Elevação lateral", scheme:"3×12–20", target:"Deltoide lateral", alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
          { name: "Braço", total: "6 séries", exercises: [
            { name:"Rosca direta W", scheme:"3×8–12", target:"Bíceps, massa geral", alts:["Rosca direta com barra reta","Rosca direta na polia","Rosca Scott"] },
            { name:"Tríceps corda", scheme:"3×10–15", target:"Lateral / medial", alts:["Tríceps barra reta na polia","Tríceps corda unilateral","Tríceps pulley com barra"] },
          ]},
        ]
      },
      qua: {
        label: "Quarta", color: "qua",
        title: "Full Body C",
        note: "Mais máquina e unilateral — dia pra poupar um pouco o sistema nervoso central dos dois compostos pesados livres de segunda e terça. Glúteo e abdômen entram aqui porque é o único dia sem outro exercício de perna competindo por energia.",
        groups: [
          { name: "Compostos — corpo todo", total: "13 séries", exercises: [
            { name:"Leg press 45°", scheme:"4×8–12", target:"Quadríceps geral", alts:["Hack machine","Agachamento livre","Passada (afundo)"] },
            { name:"Puxada alta com triângulo", scheme:"3×8–12", target:"Costas, largura e maior amplitude", alts:["Puxada supinada (pegada inversa)","Puxada na máquina articulada","Puxada alta neutra"] },
            { name:"Pec Deck", scheme:"3×10–15", target:"Peitoral médio", alts:["Crucifixo com halteres","Crossover na polia alta","Crucifixo no Pec Deck"] },
            { name:"Crucifixo inverso", scheme:"3×12–20", target:"Deltoide posterior", alts:["Crucifixo inverso na máquina","Face pull na polia","Crucifixo inverso no banco inclinado"] },
          ]},
          { name: "Glúteo e core", total: "6 séries", exercises: [
            { name:"Hip thrust", scheme:"3×8–12", target:"Glúteo direto", alts:["Elevação pélvica no chão","Cadeira abdutora","Agachamento sumô"] },
            { name:"Abdominal na polia", scheme:"3×10–15", target:"Reto abdominal", alts:["Abdominal no solo","Roda abdominal (ab wheel)","Prancha com carga"] },
          ]},
        ]
      },
      qui: {
        label: "Quinta", color: "qui",
        title: "Full Body A2",
        note: "Mesma função do dia A (quadríceps + peito + costas + ombro), exercícios diferentes — fecha peito inferior e costas detalhe, que não apareciam ainda na semana.",
        groups: [
          { name: "Compostos — corpo todo", total: "13 séries", exercises: [
            { name:"Passada (afundo)", scheme:"4×8–12", target:"Quadríceps, unilateral", alts:["Agachamento búlgaro","Leg press unilateral (foco quadríceps)","Cadeira extensora"] },
            { name:"Supino declinado ou mergulho assistido", scheme:"3×8–12", target:"Peito, ênfase inferior", alts:["Flexão declinada","Crossover na polia baixa","Mergulho entre bancos"] },
            { name:"Remada baixa com triângulo", scheme:"3×8–12", target:"Costas, romboides / trapézio médio", alts:["Remada baixa com barra reta","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Desenvolvimento Arnold", scheme:"3×8–12", target:"Deltoide anterior, ângulo diferente de segunda", alts:["Desenvolvimento com halteres","Desenvolvimento militar com barra","Desenvolvimento na máquina"] },
          ]},
          { name: "Panturrilha", total: "3 séries", exercises: [
            { name:"Panturrilha sentado", scheme:"3×12–20", target:"Sóleo, diferente do gastrocnêmio de segunda", alts:["Panturrilha em pé","Panturrilha no Smith","Panturrilha unilateral com halteres"] },
          ]},
        ]
      },
      sex: {
        label: "Sexta", color: "sex",
        title: "Full Body B2",
        note: "Mesma função do dia B (hip hinge + costas + peito + ombro + braço), exercícios diferentes — fecha braquial e cabeça longa de tríceps, que ainda não tinham aparecido na semana.",
        groups: [
          { name: "Compostos — corpo todo", total: "13 séries", exercises: [
            { name:"Levantamento terra romeno com barra", scheme:"4×6–10", target:"Posterior de coxa, glúteo, ângulo diferente do stiff", alts:["Stiff com halteres","Stiff","Good morning"] },
            { name:"Pulldown unilateral na polia", scheme:"3×10–15", target:"Costas, dorsal / controle, unilateral", alts:["Puxada unilateral na máquina","Remada baixa unilateral","Puxada supinada (pegada inversa)"] },
            { name:"Crossover na polia baixa", scheme:"3×10–15", target:"Peito, superior, ângulo diferente do supino", alts:["Flexão de braço com pés elevados","Crucifixo inclinado com halteres","Supino neutro com halteres"] },
            { name:"Elevação lateral na polia", scheme:"3×12–20", target:"Deltoide lateral, ângulo diferente de terça", alts:["Elevação lateral com halteres","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
          { name: "Braço", total: "6 séries", exercises: [
            { name:"Rosca martelo", scheme:"3×10–15", target:"Braquial", alts:["Rosca martelo na polia com corda","Rosca martelo alternada","Rosca Zottman"] },
            { name:"Tríceps testa", scheme:"3×8–12", target:"Cabeça longa", alts:["Tríceps testa com halteres","Tríceps testa na polia","Tríceps francês"] },
          ]},
        ]
      },
    }
  },
  abc: {
    label: "ABC Clássico (5 Dias)",
    desc: "A famosa divisão clássica de academia: Peito/Tríceps (A), Costas/Bíceps (B) e Pernas/Ombros (C).", category:"ALT", tags:["TRADICIONAL","ACADEMIA","CLÁSSICO"],
    meta: { foco:"Peito+Tríceps / Costas+Bíceps / Perna+Ombro", frequencia:"5 dias, A e B 2x / C 1x", estilo:"Divisão clássica de academia, intuitiva e direta", fase:"Hipertrofia Geral Tradicional" },
    days: {
      seg: {
        label: "Segunda", color: "seg",
        title: "A — Peito + Tríceps",
        note: "O ABC clássico: 3 dias fixos que se repetem — A e B aparecem 2x na semana, C 1x. Na semana seguinte, comece por C pra ele também pegar a frequência dupla.",
        groups: [
          { name: "Peito", total: "9 séries", exercises: [
            { name:"Supino reto com barra", scheme:"4×6–10", target:"Peitoral médio", alts:["Supino reto com halteres","Supino reto no Smith","Flexão de braço tradicional"] },
            { name:"Supino inclinado com halteres", scheme:"3×8–12", target:"Peitoral superior, posição alongada", alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Crossover na polia alta", scheme:"2×10–15", target:"Ênfase inferior", alts:["Crucifixo no Pec Deck","Flexão de braço com pés elevados","Crucifixo com halteres"] },
          ]},
          { name: "Tríceps", total: "6 séries", exercises: [
            { name:"Tríceps testa", scheme:"3×8–12", target:"Cabeça longa, alongamento", alts:["Tríceps testa com halteres","Tríceps testa na polia","Tríceps francês"] },
            { name:"Tríceps corda", scheme:"3×10–15", target:"Lateral / medial", alts:["Tríceps barra reta na polia","Tríceps corda unilateral","Tríceps pulley com barra"] },
          ]},
        ]
      },
      ter: {
        label: "Terça", color: "ter",
        title: "B — Costas + Bíceps",
        note: "Puxada + remada pra largura e espessura, bíceps fechando como auxiliar natural de tudo que já foi puxado.",
        groups: [
          { name: "Costas", total: "10 séries", exercises: [
            { name:"Puxada alta aberta", scheme:"4×6–10", target:"Largura / dorsal", alts:["Puxada na máquina articulada","Puxada supinada (pegada inversa)","Puxada alta neutra"] },
            { name:"Remada curvada", scheme:"3×6–10", target:"Espessura", alts:["Remada cavalinho","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Puxada alta com triângulo", scheme:"3×8–12", target:"Largura, maior amplitude", alts:["Puxada supinada (pegada inversa)","Puxada na máquina articulada","Puxada alta neutra"] },
          ]},
          { name: "Bíceps", total: "5 séries", exercises: [
            { name:"Rosca direta W", scheme:"3×6–10", target:"Massa geral", alts:["Rosca direta com barra reta","Rosca direta na polia","Rosca Scott"] },
            { name:"Rosca martelo", scheme:"2×10–15", target:"Braquial", alts:["Rosca martelo na polia com corda","Rosca martelo alternada","Rosca Zottman"] },
          ]},
        ]
      },
      qua: {
        label: "Quarta", color: "qua",
        title: "C — Pernas + Ombro",
        note: "O dia mais pesado do ABC, junta perna completa com ombro — clássico, mas exige disposição. Só acontece 1x nessa semana; troque a ordem na próxima pra ele também repetir.",
        groups: [
          { name: "Pernas", total: "9 séries", exercises: [
            { name:"Agachamento livre", scheme:"4×6–10", target:"Quadríceps geral / força", alts:["Leg press 45°","Agachamento no Smith","Hack machine"] },
            { name:"Leg press 45°", scheme:"3×8–12", target:"Quadríceps geral", alts:["Hack machine","Agachamento livre","Passada (afundo)"] },
            { name:"Stiff", scheme:"2×8–12", target:"Posterior de coxa, glúteo e lombar", alts:["Stiff com halteres","Levantamento terra romeno com barra","Good morning"] },
          ]},
          { name: "Ombro", total: "6 séries diretas", exercises: [
            { name:"Desenvolvimento com halteres", scheme:"3×8–12", target:"Deltoide anterior", alts:["Desenvolvimento na máquina","Desenvolvimento Arnold","Desenvolvimento militar com barra"] },
            { name:"Elevação lateral", scheme:"3×12–20", target:"Deltoide lateral", alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
          { name: "Panturrilha", total: "3 séries", exercises: [
            { name:"Panturrilha em pé", scheme:"3×12–15", target:"Gastrocnêmio", alts:["Panturrilha sentado","Panturrilha no Smith","Panturrilha no leg press"] },
          ]},
        ]
      },
      qui: {
        label: "Quinta", color: "qui",
        title: "A2 — Peito + Tríceps",
        note: "Mesmo agrupamento de segunda, exercícios e equipamentos diferentes — sem repetir movimento na semana.",
        groups: [
          { name: "Peito", total: "8 séries", exercises: [
            { name:"Supino inclinado na máquina", scheme:"3×8–12", target:"Peitoral superior", alts:["Supino inclinado com halteres","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Supino declinado ou mergulho assistido", scheme:"3×8–12", target:"Ênfase inferior", alts:["Flexão declinada","Crossover na polia baixa","Mergulho entre bancos"] },
            { name:"Pec Deck", scheme:"2×10–15", target:"Peitoral médio", alts:["Crucifixo com halteres","Crossover na polia alta","Crucifixo no Pec Deck"] },
          ]},
          { name: "Tríceps", total: "6 séries", exercises: [
            { name:"Tríceps francês", scheme:"3×8–12", target:"Cabeça longa, ângulo diferente da testa", alts:["Tríceps francês com halteres","Tríceps francês unilateral","Tríceps testa"] },
            { name:"Tríceps unilateral na polia", scheme:"3×10–15", target:"Lateral / medial, unilateral", alts:["Tríceps coice (kickback)","Tríceps corda unilateral","Tríceps pulley com corda"] },
          ]},
        ]
      },
      sex: {
        label: "Sexta", color: "sex",
        title: "B2 — Costas + Bíceps",
        note: "Fecha a semana com o mesmo agrupamento de terça, exercícios diferentes — peito e costas terminam a semana em 2x, perna e ombro em 1x (característica do ABC clássico).",
        groups: [
          { name: "Costas", total: "8 séries", exercises: [
            { name:"Remada cavalinho", scheme:"3×6–10", target:"Espessura, ângulo diferente da remada curvada", alts:["Remada curvada com barra","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Pulldown unilateral na polia", scheme:"3×10–15", target:"Dorsal / controle, unilateral", alts:["Puxada unilateral na máquina","Remada baixa unilateral","Puxada supinada (pegada inversa)"] },
            { name:"Remada baixa com triângulo", scheme:"2×10–15", target:"Romboides / trapézio médio", alts:["Remada baixa com barra reta","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
          ]},
          { name: "Bíceps", total: "5 séries", exercises: [
            { name:"Rosca Scott", scheme:"3×8–12", target:"Cabeça curta", alts:["Rosca Scott na polia","Rosca Scott com halteres","Rosca Scott unilateral"] },
            { name:"Rosca inclinada", scheme:"2×10–15", target:"Cabeça longa, posição alongada", alts:["Rosca alternada inclinada","Rosca 21","Rosca martelo"] },
          ]},
        ]
      },
    }
  },
  pplul: {
    label: "PPL + UL (5 Dias)",
    desc: "5 dias — Push/Pull/Legs nos 3 primeiros dias e Upper/Lower nos 2 últimos. Estrutura balanceada e consagrada.", category:"A", tags:["HIPERTROFIA","5 DIAS","PPL+UL","PADRÃO OURO"],
    meta: { foco:"Push/Pull/Legs + Upper/Lower", frequencia:"5 dias, cada grupo 2x", estilo:"PPL dedicado + Upper/Lower como 2ª passada", fase:"Hipertrofia Geral Balanceada" },
    days: {
      seg: {
        label: "Segunda", color: "seg",
        title: "Push — Peito + Ombro + Tríceps",
        note: "Dia dedicado de verdade — peito, ombro e tríceps não dividem espaço com mais nada, então o volume aqui é alto (parecido com o Plano B). Quinta (Upper) é que vai passar de novo por tudo isso com volume mais leve.",
        groups: [
          { name: "Peito", total: "9 séries", exercises: [
            { name:"Supino reto com barra", scheme:"4×6–10", target:"Peitoral médio, compound", alts:["Supino reto com halteres","Supino reto no Smith","Flexão de braço tradicional"] },
            { name:"Supino inclinado com halteres", scheme:"3×8–12", target:"Peitoral superior, posição alongada", alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Crossover na polia alta", scheme:"2×10–15", target:"Ênfase inferior", alts:["Crucifixo no Pec Deck","Flexão de braço com pés elevados","Crucifixo com halteres"] },
          ]},
          { name: "Ombro", total: "7 séries", exercises: [
            { name:"Desenvolvimento militar com barra", scheme:"3×6–10", target:"Deltoide anterior, compound", alts:["Desenvolvimento com halteres","Desenvolvimento Arnold","Desenvolvimento na máquina"] },
            { name:"Elevação lateral na polia", scheme:"4×12–20", target:"Deltoide lateral", advanced: "🔥 Drop-set na última", alts:["Elevação lateral com halteres","Elevação lateral na máquina","Elevação lateral sentado"] },
          ]},
          { name: "Tríceps", total: "6 séries", exercises: [
            { name:"Tríceps pulley com barra", scheme:"3×8–12", target:"Lateral / medial", alts:["Tríceps pulley com corda","Tríceps corda","Tríceps testa"] },
            { name:"Tríceps testa", scheme:"3×8–12", target:"Cabeça longa, alongamento", alts:["Tríceps testa com halteres","Tríceps testa na polia","Tríceps francês"] },
          ]},
        ]
      },
      ter: {
        label: "Terça", color: "ter",
        title: "Pull — Costas + Bíceps",
        note: "Também dia dedicado — costas com largura, espessura e detalhe no mesmo treino, bíceps com dois ângulos diferentes.",
        groups: [
          { name: "Costas", total: "10 séries", exercises: [
            { name:"Puxada alta aberta", scheme:"4×6–10", target:"Largura / dorsal", alts:["Puxada na máquina articulada","Puxada supinada (pegada inversa)","Puxada alta neutra"] },
            { name:"Remada cavalinho", scheme:"3×6–10", target:"Espessura", alts:["Remada curvada com barra","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Puxada alta com triângulo", scheme:"3×8–12", target:"Largura, maior amplitude", alts:["Puxada supinada (pegada inversa)","Puxada na máquina articulada","Puxada alta neutra"] },
          ]},
          { name: "Ombro posterior", total: "3 séries", exercises: [
            { name:"Crucifixo inverso", scheme:"3×12–20", target:"Deltoide posterior", alts:["Crucifixo inverso na máquina","Face pull na polia","Crucifixo inverso no banco inclinado"] },
          ]},
          { name: "Bíceps", total: "5 séries", exercises: [
            { name:"Rosca inclinada", scheme:"3×8–12", target:"Cabeça longa, posição alongada", alts:["Rosca alternada inclinada","Rosca martelo","Rosca 21"] },
            { name:"Rosca direta W", scheme:"2×8–12", target:"Bíceps, massa geral", alts:["Rosca direta com barra reta","Rosca direta na polia","Rosca Scott"] },
          ]},
        ]
      },
      qua: {
        label: "Quarta", color: "qua",
        title: "Legs — Pernas completas",
        note: "Dia de perna completo, igual à lógica dos outros planos. Sexta (Lower) fecha a 2ª frequência com ênfase diferente.",
        groups: [
          { name: "Quadríceps", total: "7 séries", exercises: [
            { name:"Agachamento livre", scheme:"4×6–10", target:"Quadríceps geral / força", alts:["Leg press 45°","Agachamento no Smith","Hack machine"] },
            { name:"Cadeira extensora", scheme:"3×10–15", target:"Quadríceps, definição", advanced: "🔥 Pico de contração", alts:["Agachamento búlgaro","Leg press unilateral (foco quadríceps)","Passada (afundo)"] },
          ]},
          { name: "Posterior", total: "3 séries", exercises: [
            { name:"Stiff", scheme:"3×6–10", target:"Posterior de coxa, glúteo e lombar", alts:["Stiff com halteres","Levantamento terra romeno com barra","Good morning"] },
          ]},
          { name: "Glúteo e panturrilha", total: "6 séries", exercises: [
            { name:"Hip thrust", scheme:"3×8–12", target:"Glúteo direto", alts:["Elevação pélvica no chão","Cadeira abdutora","Agachamento sumô"] },
            { name:"Panturrilha em pé", scheme:"3×12–15", target:"Gastrocnêmio", alts:["Panturrilha sentado","Panturrilha no Smith","Panturrilha no leg press"] },
          ]},
        ]
      },
      qui: {
        label: "Quinta", color: "qui",
        title: "Upper — Peito + Costas + Ombro + Braço",
        note: "Aqui sim o volume é mais leve por músculo — essa sessão só existe pra dar a 2ª frequência da semana pra tudo que já foi trabalhado com volume alto em Push/Pull, com ângulos diferentes.",
        groups: [
          { name: "Peito", total: "5 séries", split: [["Superior","seg",60],["Inferior","qua",40]], exercises: [
            { name:"Supino inclinado na máquina", scheme:"3×8–12", target:"Peitoral superior, ângulo diferente da segunda", alts:["Supino inclinado com halteres","Supino inclinado no Smith","Flexão inclinada"] },
            { name:"Supino declinado ou mergulho assistido", scheme:"2×10–15", target:"Ênfase inferior, ângulo diferente da segunda", alts:["Flexão declinada","Crossover na polia baixa","Mergulho entre bancos"] },
          ]},
          { name: "Costas + Ombro + Braço", total: "10 séries", exercises: [
            { name:"Remada baixa com triângulo", scheme:"3×8–12", target:"Romboides / trapézio médio", alts:["Remada baixa com barra reta","Remada na máquina articulada","Remada unilateral com halter (serrote)"] },
            { name:"Elevação lateral com halteres", scheme:"3×12–20", target:"Deltoide lateral", alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"] },
            { name:"Rosca Scott", scheme:"2×8–12", target:"Bíceps, cabeça curta", alts:["Rosca Scott na polia","Rosca Scott com halteres","Rosca Scott unilateral"] },
            { name:"Tríceps francês", scheme:"2×10–15", target:"Tríceps, cabeça longa, alongamento", alts:["Tríceps francês com halteres","Tríceps francês unilateral","Tríceps testa"] },
          ]},
        ]
      },
      sex: {
        label: "Sexta", color: "sex",
        title: "Lower — Pernas, ênfase diferente",
        note: "Fecha perna em 2x na semana — foco em posterior/glúteo médio e unilateral, complementando o quadríceps pesado de quarta. Volume mais leve, igual ao Upper.",
        groups: [
          { name: "Posterior e quadríceps", total: "6 séries", exercises: [
            { name:"Mesa flexora", scheme:"3×8–12", target:"Posterior de coxa", alts:["Cadeira flexora","Flexora em pé (unilateral)","Stiff com halteres"] },
            { name:"Leg press 45°", scheme:"3×8–12", target:"Quadríceps geral", alts:["Hack machine","Agachamento livre","Passada (afundo)"] },
          ]},
          { name: "Glúteo e panturrilha", total: "5 séries", exercises: [
            { name:"Cadeira abdutora", scheme:"2×12–15", target:"Glúteo médio, diferente do hip thrust", alts:["Elevação pélvica no chão","Agachamento sumô","Hip thrust"] },
            { name:"Panturrilha sentado", scheme:"3×12–20", target:"Sóleo, diferente da panturrilha em pé de quarta", alts:["Panturrilha em pé","Panturrilha no Smith","Panturrilha unilateral com halteres"] },
          ]},
        ]
      },
    }
  },

  vtap: {
    label: "🔻 V-Taper Extremo (5 Dias)",
    desc: "5 dias — Especialização máxima em costas largas e ombros 3D, com peito e braços de suporte.", category:"ALT", tags:["V-TAPER","COSTAS & OMBROS","SILHUETA EM V"],
    meta: { foco:"Costas (largura + espessura) + deltoides", frequencia:"Costas 2x / ombros 3x / pernas 1x", estilo:"Especialização estética com peito e braços de suporte", fase:"Foco em Silhueta V-Taper" },
    days: {
      seg:{label:"Segunda",color:"seg",title:"V-Taper A — Costas + Ombros + Bíceps",note:"Abertura da semana com prioridade em costas e ombros. O objetivo é testar uma distribuição com bastante atenção à largura do tronco sem abandonar braços.",groups:[
        {name:"Costas",total:"9 séries",exercises:[
          {name:"Puxada alta neutra",scheme:"3×6–10",target:"Dorsais / puxada vertical",alts:["Puxada alta aberta","Puxada unilateral na máquina","Puxada supinada (pegada inversa)"]},
          {name:"Remada unilateral com halter (serrote)",scheme:"3×8–12",target:"Dorsal + espessura, unilateral",alts:["Remada baixa unilateral","Remada na máquina articulada","Remada cavalinho"]},
          {name:"Pulldown unilateral na polia",scheme:"2×10–15",target:"Dorsal / controle",alts:["Pullover na polia","Puxada unilateral na máquina","Pulldown com barra reta"]},
          {name:"Remada baixa com triângulo",scheme:"2×10–15",target:"Região média das costas",alts:["Remada baixa com barra reta","Remada articulada","Remada unilateral"]}
        ]},
        {name:"Ombros",total:"5 séries diretas",exercises:[
          {name:"Desenvolvimento com halteres",scheme:"2×6–10",target:"Deltoide anterior",alts:["Desenvolvimento na máquina","Desenvolvimento Arnold","Desenvolvimento militar com barra"]},
          {name:"Elevação lateral na polia",scheme:"2×12–20",target:"Deltoide lateral",advanced: "🔥 Drop-set na última",alts:["Elevação lateral com halteres","Elevação lateral na máquina","Elevação lateral sentado"]},
          {name:"Crucifixo inverso na máquina",scheme:"2×12–20",target:"Deltoide posterior",advanced: "🔥 Rest-pause",alts:["Face pull na polia","Crucifixo inverso no banco inclinado","Crucifixo inverso na polia"]}
        ]},
        {name:"Bíceps",total:"4 séries",exercises:[
          {name:"Rosca inclinada",scheme:"2×8–12",target:"Bíceps em posição alongada",alts:["Rosca alternada inclinada","Rosca direta W","Rosca Scott"]},
          {name:"Rosca martelo",scheme:"2×10–15",target:"Braquial / braquiorradial",alts:["Rosca martelo na polia com corda","Rosca martelo alternada","Rosca Zottman"]}
        ]}
      ]},
      ter:{label:"Terça",color:"ter",title:"Peito + Tríceps",note:"Peito entra com volume suficiente para evolução enquanto o plano mantém a prioridade estratégica em costas e ombros.",groups:[
        {name:"Peito",total:"7 séries",exercises:[
          {name:"Supino inclinado com halteres",scheme:"3×6–10",target:"Peitoral superior",alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"]},
          {name:"Supino reto com barra",scheme:"2×6–10",target:"Peitoral geral / empurrada horizontal",alts:["Supino reto com halteres","Supino reto no Smith","Flexão tradicional"]},
          {name:"Pec Deck",scheme:"2×10–15",target:"Peitoral / isolamento",advanced: "🔥 Rest-pause na última",alts:["Crucifixo com halteres","Crossover na polia média","Crossover na polia alta"]}
        ]},
        {name:"Tríceps",total:"4 séries",exercises:[
          {name:"Tríceps testa",scheme:"2×8–12",target:"Tríceps, posição alongada",alts:["Tríceps testa com halteres","Tríceps testa na polia","Tríceps francês"]},
          {name:"Tríceps corda",scheme:"2×10–15",target:"Extensão na polia",alts:["Tríceps pulley com barra","Tríceps unilateral na polia","Tríceps corda unilateral"]}
        ]}
      ]},
      qua:{label:"Quarta",color:"qua",title:"Pernas completas",note:"Único dia de pernas desta estratégia. Mantém o restante da semana dedicado ao superior.",groups:[
        {name:"Quadríceps",total:"8 séries",exercises:[
          {name:"Agachamento livre",scheme:"3×6–10",target:"Quadríceps / padrão de agachamento",alts:["Agachamento no Smith","Hack machine","Leg press 45°"]},
          {name:"Leg press 45°",scheme:"3×8–12",target:"Quadríceps geral",alts:["Hack machine","Agachamento no Smith","Leg press unilateral"]},
          {name:"Cadeira extensora",scheme:"2×10–15",target:"Quadríceps",alts:["Agachamento búlgaro","Leg press unilateral","Passada (afundo)"]}
        ]},
        {name:"Posterior + glúteos",total:"6 séries",exercises:[
          {name:"Stiff",scheme:"3×8–12",target:"Posterior de coxa + glúteos",alts:["Stiff com halteres","Levantamento terra romeno com barra","Good morning"]},
          {name:"Mesa flexora",scheme:"3×8–12",target:"Posterior de coxa",alts:["Cadeira flexora","Flexora em pé (unilateral)","Mesa flexora unilateral"]}
        ]},
        {name:"Panturrilhas",total:"4 séries",exercises:[{name:"Panturrilha em pé",scheme:"4×10–15",target:"Gastrocnêmio",alts:["Panturrilha no leg press","Panturrilha no Smith","Panturrilha unilateral com halteres"]}]}
      ]},
      qui:{label:"Quinta",color:"qui",title:"Costas + Peito superior + Ombros",note:"Segundo toque do superior: costas e deltoides voltam com exercícios diferentes; peito recebe uma ênfase maior na região superior.",groups:[
        {name:"Costas",total:"7 séries",exercises:[
          {name:"Puxada alta aberta",scheme:"2×8–12",target:"Dorsais / puxada vertical",alts:["Puxada alta neutra","Puxada na máquina articulada","Puxada supinada"]},
          {name:"Remada cavalinho",scheme:"3×6–10",target:"Espessura das costas",alts:["Remada curvada com barra","Remada na máquina articulada","Remada baixa com triângulo"]},
          {name:"Pullover na polia",scheme:"2×10–15",target:"Dorsal / extensão de ombro",alts:["Pulldown unilateral na polia","Pullover na máquina","Puxada com braços retos"]}
        ]},
        {name:"Peito superior",total:"4 séries",exercises:[
          {name:"Supino inclinado na máquina",scheme:"2×8–12",target:"Peitoral superior",alts:["Supino inclinado com halteres","Supino inclinado no Smith","Flexão inclinada"]},
          {name:"Crossover na polia baixa",scheme:"2×10–15",target:"Peitoral / trajetória de baixo para cima",alts:["Crucifixo inclinado com halteres","Supino inclinado na máquina","Crossover na polia média"]}
        ]},
        {name:"Ombros",total:"4 séries diretas",exercises:[
          {name:"Elevação lateral na máquina",scheme:"2×12–20",target:"Deltoide lateral",alts:["Elevação lateral na polia","Elevação lateral com halteres","Elevação lateral sentado"]},
          {name:"Face pull na polia",scheme:"2×12–20",target:"Deltoide posterior / cintura escapular",alts:["Crucifixo inverso na máquina","Crucifixo inverso no banco inclinado","Crucifixo inverso na polia"]}
        ]}
      ]},
      sex:{label:"Sexta",color:"sex",title:"Braços + Ombros",note:"Fechamento com foco no superior sem repetir exatamente os exercícios dos primeiros dias.",groups:[
        {name:"Bíceps",total:"4 séries",exercises:[
          {name:"Rosca Scott",scheme:"2×8–12",target:"Bíceps / estabilidade",alts:["Rosca Scott na polia","Rosca Scott com halteres","Rosca direta W"]},
          {name:"Rosca martelo cross-body",scheme:"2×10–15",target:"Braquial / braquiorradial",alts:["Rosca martelo","Rosca martelo na polia","Rosca Zottman"]}
        ]},
        {name:"Tríceps",total:"4 séries",exercises:[
          {name:"Tríceps francês",scheme:"2×8–12",target:"Tríceps / posição acima da cabeça",alts:["Tríceps francês com halteres","Tríceps francês na polia","Tríceps testa"]},
          {name:"Tríceps unilateral na polia",scheme:"2×10–15",target:"Extensão unilateral",alts:["Tríceps corda unilateral","Tríceps pulley com barra","Tríceps corda"]}
        ]},
        {name:"Ombros",total:"6 séries diretas",exercises:[
          {name:"Elevação lateral com halteres",scheme:"2×12–20",target:"Deltoide lateral",alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"]},
          {name:"Crucifixo inverso no banco inclinado",scheme:"2×12–20",target:"Deltoide posterior",alts:["Face pull na polia","Crucifixo inverso na máquina","Crucifixo inverso na polia"]}
        ]}
      ]}
    }
  },
  chestsup: {
    label:"⬆️ Peito Superior", desc:"Especialização de peitoral superior, pernas 1x", category:"C", tags:["PEITO","ESPECIALIZACAO","PERNAS 1X"], meta:{foco:"Peitoral superior",frequencia:"Peito 2x / superior 2x / pernas 1x",estilo:"Inclinações + cabos + estabilidade",fase:"Especialização"},
    days:{
      seg:{label:"Segunda",color:"seg",title:"Peito superior + Ombros + Tríceps",note:"O peitoral superior é colocado primeiro, quando a fadiga é menor.",groups:[
        {name:"Peito superior",total:"10 séries",exercises:[{name:"Supino inclinado com halteres",scheme:"4×6–10",target:"Peitoral superior",alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"]},{name:"Supino inclinado na máquina",scheme:"3×8–12",target:"Peitoral superior / estabilidade",alts:["Supino inclinado com halteres","Supino inclinado no Smith","Crossover na polia baixa"]},{name:"Crossover na polia baixa",scheme:"3×10–15",target:"Peitoral / trajetória ascendente",alts:["Crucifixo inclinado com halteres","Supino inclinado na máquina","Crossover na polia média"]}]},
        {name:"Ombros",total:"6 séries",exercises:[{name:"Desenvolvimento na máquina",scheme:"3×8–12",target:"Deltoide anterior",alts:["Desenvolvimento com halteres","Desenvolvimento Arnold","Desenvolvimento militar com barra"]},{name:"Elevação lateral",scheme:"3×12–20",target:"Deltoide lateral",alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"]}]},
        {name:"Tríceps",total:"6 séries",exercises:[{name:"Tríceps testa",scheme:"3×8–12",target:"Tríceps",alts:["Tríceps testa com halteres","Tríceps francês","Tríceps testa na polia"]},{name:"Tríceps corda",scheme:"3×10–15",target:"Tríceps na polia",alts:["Tríceps pulley com barra","Tríceps unilateral na polia","Tríceps corda unilateral"]}]}
      ]},
      ter:{label:"Terça",color:"ter",title:"Costas + Bíceps",note:"Costas recebem trabalho completo para manter equilíbrio enquanto o peito é priorizado.",groups:[{name:"Costas",total:"10 séries",exercises:[{name:"Puxada alta aberta",scheme:"4×6–10",target:"Dorsais",alts:["Puxada alta neutra","Puxada na máquina articulada","Puxada supinada"]},{name:"Remada curvada",scheme:"3×6–10",target:"Espessura",alts:["Remada cavalinho","Remada na máquina articulada","Remada unilateral com halter (serrote)"]},{name:"Remada baixa com triângulo",scheme:"3×10–15",target:"Região média",alts:["Remada baixa com barra reta","Remada unilateral","Remada articulada"]}]},{name:"Bíceps",total:"5 séries",exercises:[{name:"Rosca direta W",scheme:"3×6–10",target:"Bíceps",alts:["Rosca direta com barra reta","Rosca Scott","Rosca direta na polia"]},{name:"Rosca martelo",scheme:"2×10–15",target:"Braquial",alts:["Rosca martelo na polia com corda","Rosca martelo alternada","Rosca Zottman"]}]}]}
      ,qua:{label:"Quarta",color:"qua",title:"Pernas completas",note:"Um único dia de pernas na estratégia.",groups:[{name:"Quadríceps",total:"8 séries",exercises:[{name:"Agachamento livre",scheme:"3×6–10",target:"Quadríceps / agachamento",alts:["Agachamento no Smith","Hack machine","Leg press 45°"]},{name:"Leg press 45°",scheme:"3×8–12",target:"Quadríceps",alts:["Hack machine","Agachamento no Smith","Leg press unilateral"]},{name:"Cadeira extensora",scheme:"2×10–15",target:"Quadríceps",alts:["Agachamento búlgaro","Leg press unilateral","Passada (afundo)"]}]},{name:"Posterior",total:"6 séries",exercises:[{name:"Stiff",scheme:"3×8–12",target:"Posterior + glúteos",alts:["Stiff com halteres","Levantamento terra romeno com barra","Good morning"]},{name:"Mesa flexora",scheme:"3×8–12",target:"Posterior",alts:["Cadeira flexora","Flexora em pé (unilateral)","Mesa flexora unilateral"]}]},{name:"Panturrilhas",total:"4 séries",exercises:[{name:"Panturrilha sentado",scheme:"4×12–20",target:"Sóleo",alts:["Panturrilha em pé","Panturrilha no leg press","Panturrilha no Smith"]}]}]}
      ,qui:{label:"Quinta",color:"qui",title:"Peito superior + Costas",note:"Segundo estímulo do peito, com exercícios diferentes da segunda.",groups:[{name:"Peito superior",total:"8 séries",exercises:[{name:"Supino inclinado no Smith",scheme:"3×8–12",target:"Peitoral superior",alts:["Supino inclinado na máquina","Supino inclinado com halteres","Crossover na polia baixa"]},{name:"Crucifixo inclinado com halteres",scheme:"2×10–15",target:"Peitoral superior / isolamento",alts:["Crossover na polia baixa","Pec Deck","Crucifixo na máquina"]},{name:"Supino reto com halteres",scheme:"3×8–12",target:"Peitoral geral",alts:["Supino reto com barra","Supino reto no Smith","Flexão tradicional"]}]},{name:"Costas",total:"7 séries",exercises:[{name:"Pulldown unilateral na polia",scheme:"3×10–15",target:"Dorsal",alts:["Pullover na polia","Puxada unilateral na máquina","Puxada alta neutra"]},{name:"Remada cavalinho",scheme:"2×8–12",target:"Espessura",alts:["Remada curvada","Remada articulada","Remada baixa com triângulo"]},{name:"Face pull na polia",scheme:"2×12–20",target:"Posterior / cintura escapular",alts:["Crucifixo inverso na máquina","Crucifixo inverso no banco inclinado","Remada alta com barra"]}]}]}
      ,sex:{label:"Sexta",color:"sex",title:"Ombros + Braços",note:"Volume de suporte para fechar a semana sem transformar a especialização em excesso de peito.",groups:[{name:"Ombros",total:"8 séries",exercises:[{name:"Desenvolvimento Arnold",scheme:"3×8–12",target:"Deltoide anterior",alts:["Desenvolvimento com halteres","Desenvolvimento na máquina","Desenvolvimento militar com barra"]},{name:"Elevação lateral na polia",scheme:"3×12–20",target:"Deltoide lateral",alts:["Elevação lateral com halteres","Elevação lateral na máquina","Elevação lateral sentado"]},{name:"Crucifixo inverso na máquina",scheme:"2×12–20",target:"Deltoide posterior",alts:["Face pull na polia","Crucifixo inverso no banco inclinado","Crucifixo inverso na polia"]}]},{name:"Braços",total:"6 séries",exercises:[{name:"Rosca Scott",scheme:"3×8–12",target:"Bíceps",alts:["Rosca Scott na polia","Rosca inclinada","Rosca direta W"]},{name:"Tríceps francês",scheme:"3×8–12",target:"Tríceps",alts:["Tríceps francês com halteres","Tríceps na polia acima da cabeça","Tríceps testa"]}]}]}
    }
  },
  armspec:{label:"💪 Braços",desc:"Especialização de bíceps + tríceps, pernas 1x", category:"F", tags:["BRACOS","ESPECIALIZACAO","PERNAS 1X"],meta:{foco:"Bíceps + tríceps",frequencia:"Braços 2–3x / pernas 1x",estilo:"Ângulos variados + volume distribuído",fase:"Especialização"},days:{
    seg:{label:"Segunda",color:"seg",title:"Peito + Ombro + Tríceps",note:"Tríceps recebe prioridade depois do peito.",groups:[{name:"Peito",total:"7 séries",exercises:[{name:"Supino reto com barra",scheme:"3×6–10",target:"Peitoral",alts:["Supino reto com halteres","Supino reto no Smith","Flexão tradicional"]},{name:"Supino inclinado com halteres",scheme:"2×8–12",target:"Peitoral superior",alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"]},{name:"Pec Deck",scheme:"2×10–15",target:"Peitoral",alts:["Crucifixo com halteres","Crossover na polia média","Crossover na polia alta"]}]},{name:"Tríceps",total:"7 séries",exercises:[{name:"Tríceps testa",scheme:"3×8–12",target:"Tríceps",alts:["Tríceps testa com halteres","Tríceps francês","Tríceps testa na polia"]},{name:"Tríceps corda",scheme:"2×10–15",target:"Tríceps na polia",alts:["Tríceps pulley com barra","Tríceps unilateral na polia","Tríceps corda unilateral"]},{name:"Tríceps acima da cabeça na corda",scheme:"2×10–15",target:"Tríceps",alts:["Tríceps francês","Tríceps francês com halteres","Tríceps testa"]}]},{name:"Ombro lateral",total:"3 séries",exercises:[{name:"Elevação lateral",scheme:"3×12–20",target:"Deltoide lateral",alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"]}]}]}
    ,ter:{label:"Terça",color:"ter",title:"Costas + Bíceps",note:"Bíceps é prioridade depois de costas.",groups:[{name:"Costas",total:"9 séries",exercises:[{name:"Puxada alta neutra",scheme:"3×6–10",target:"Dorsais",alts:["Puxada alta aberta","Puxada supinada","Puxada na máquina articulada"]},{name:"Remada curvada",scheme:"3×6–10",target:"Espessura",alts:["Remada cavalinho","Remada articulada","Remada unilateral"]},{name:"Pulldown unilateral na polia",scheme:"3×10–15",target:"Dorsal",alts:["Pullover na polia","Puxada unilateral na máquina","Puxada alta neutra"]}]},{name:"Bíceps",total:"8 séries",exercises:[{name:"Rosca inclinada",scheme:"3×8–12",target:"Bíceps",alts:["Rosca alternada inclinada","Rosca Scott","Rosca direta W"]},{name:"Rosca Scott",scheme:"3×8–12",target:"Bíceps / estabilidade",alts:["Rosca Scott na polia","Rosca Scott com halteres","Rosca concentrada"]},{name:"Rosca martelo",scheme:"2×10–15",target:"Braquial",alts:["Rosca martelo na polia","Rosca martelo alternada","Rosca Zottman"]}]}]}
    ,qua:{label:"Quarta",color:"qua",title:"Pernas completas",note:"Único dia de pernas.",groups:[{name:"Quadríceps",total:"8 séries",exercises:[{name:"Agachamento livre",scheme:"3×6–10",target:"Quadríceps",alts:["Agachamento no Smith","Hack machine","Leg press 45°"]},{name:"Leg press 45°",scheme:"3×8–12",target:"Quadríceps",alts:["Hack machine","Agachamento no Smith","Leg press unilateral"]},{name:"Cadeira extensora",scheme:"2×10–15",target:"Quadríceps",alts:["Agachamento búlgaro","Leg press unilateral","Passada (afundo)"]}]},{name:"Posterior",total:"6 séries",exercises:[{name:"Stiff",scheme:"3×8–12",target:"Posterior + glúteos",alts:["Stiff com halteres","Levantamento terra romeno com barra","Good morning"]},{name:"Mesa flexora",scheme:"3×8–12",target:"Posterior",alts:["Cadeira flexora","Flexora em pé (unilateral)","Mesa flexora unilateral"]}]},{name:"Panturrilha",total:"4 séries",exercises:[{name:"Panturrilha em pé",scheme:"4×10–15",target:"Gastrocnêmio",alts:["Panturrilha no leg press","Panturrilha no Smith","Panturrilha sentado"]}]}]}
    ,qui:{label:"Quinta",color:"qui",title:"Ombros + Braços",note:"Segundo grande estímulo de braços da semana.",groups:[{name:"Ombros",total:"7 séries",exercises:[{name:"Desenvolvimento com halteres",scheme:"3×8–12",target:"Deltoide anterior",alts:["Desenvolvimento na máquina","Desenvolvimento Arnold","Desenvolvimento militar com barra"]},{name:"Elevação lateral na máquina",scheme:"2×12–20",target:"Deltoide lateral",alts:["Elevação lateral na polia","Elevação lateral com halteres","Elevação lateral sentado"]},{name:"Face pull na polia",scheme:"2×12–20",target:"Deltoide posterior",alts:["Crucifixo inverso na máquina","Crucifixo inverso no banco inclinado","Crucifixo inverso na polia"]}]},{name:"Bíceps",total:"5 séries",exercises:[{name:"Rosca direta W",scheme:"3×6–10",target:"Bíceps",alts:["Rosca direta com barra reta","Rosca Scott","Rosca direta na polia"]},{name:"Rosca martelo cross-body",scheme:"2×10–15",target:"Braquial",alts:["Rosca martelo","Rosca martelo na polia","Rosca Zottman"]}]},{name:"Tríceps",total:"5 séries",exercises:[{name:"Tríceps francês",scheme:"3×8–12",target:"Tríceps",alts:["Tríceps francês com halteres","Tríceps na polia acima da cabeça","Tríceps testa"]},{name:"Tríceps unilateral na polia",scheme:"2×10–15",target:"Tríceps",alts:["Tríceps corda unilateral","Tríceps corda","Tríceps pulley com barra"]}]}]}
    ,sex:{label:"Sexta",color:"sex",title:"Peito + Costas + Braços",note:"Sessão mais curta e concentrada para fechar a semana com um novo toque nos braços.",groups:[{name:"Peito + Costas",total:"8 séries",exercises:[{name:"Supino inclinado na máquina",scheme:"2×8–12",target:"Peitoral superior",alts:["Supino inclinado com halteres","Supino inclinado no Smith","Crossover na polia baixa"]},{name:"Remada baixa com triângulo",scheme:"2×8–12",target:"Costas",alts:["Remada articulada","Remada unilateral","Remada cavalinho"]},{name:"Crossover na polia alta",scheme:"2×10–15",target:"Peito",alts:["Pec Deck","Crucifixo com halteres","Crossover na polia média"]},{name:"Puxada supinada (pegada inversa)",scheme:"2×10–15",target:"Dorsal, pegada diferente",alts:["Pullover na polia","Puxada unilateral na máquina","Puxada alta neutra"]}]},{name:"Braços",total:"6 séries",exercises:[{name:"Rosca concentrada",scheme:"3×10–15",target:"Bíceps",alts:["Rosca Scott","Rosca alternada em pé","Rosca inclinada"]},{name:"Tríceps pulley com corda",scheme:"3×10–15",target:"Tríceps, lateral/medial",alts:["Tríceps barra reta na polia","Tríceps pulley com barra","Tríceps testa"]}]}]}
  }},
  backsupp:{label:"🦅 Costas",desc:"Especialização de costas + suporte de ombros, pernas 1x", category:"D", tags:["COSTAS","ESPECIALIZACAO","PERNAS 1X"],meta:{foco:"Dorsais + espessura",frequencia:"Costas 2x / pernas 1x",estilo:"Puxadas + remadas + controle",fase:"Especialização"},days:{
    seg:{label:"Segunda",color:"seg",title:"Costas — Largura + Bíceps",note:"Puxadas primeiro para priorizar movimentos verticais.",groups:[{name:"Costas",total:"11 séries",exercises:[{name:"Puxada alta aberta",scheme:"4×6–10",target:"Dorsais",alts:["Puxada alta neutra","Puxada na máquina articulada","Puxada supinada"]},{name:"Pulldown unilateral na polia",scheme:"3×10–15",target:"Dorsal / controle",alts:["Pullover na polia","Puxada unilateral na máquina","Puxada alta neutra"]},{name:"Remada baixa com triângulo",scheme:"2×8–12",target:"Região média",alts:["Remada baixa com barra reta","Remada articulada","Remada unilateral"]},{name:"Face pull na polia",scheme:"2×12–20",target:"Posterior / cintura escapular",alts:["Crucifixo inverso na máquina","Crucifixo inverso no banco inclinado","Crucifixo inverso na polia"]}]},{name:"Bíceps",total:"5 séries",exercises:[{name:"Rosca inclinada",scheme:"3×8–12",target:"Bíceps",alts:["Rosca alternada inclinada","Rosca Scott","Rosca direta W"]},{name:"Rosca martelo",scheme:"2×10–15",target:"Braquial",alts:["Rosca martelo na polia","Rosca martelo alternada","Rosca Zottman"]}]}]}
    ,ter:{label:"Terça",color:"ter",title:"Peito + Ombros + Tríceps",note:"Superior anterior recebe volume de suporte.",groups:[{name:"Peito",total:"8 séries",exercises:[{name:"Supino reto com barra",scheme:"3×6–10",target:"Peitoral",alts:["Supino reto com halteres","Supino reto no Smith","Flexão tradicional"]},{name:"Supino inclinado na máquina",scheme:"3×8–12",target:"Peitoral superior",alts:["Supino inclinado com halteres","Supino inclinado no Smith","Flexão inclinada"]},{name:"Pec Deck",scheme:"2×10–15",target:"Peitoral",alts:["Crucifixo com halteres","Crossover na polia média","Crossover na polia alta"]}]},{name:"Ombros + Tríceps",total:"7 séries",exercises:[{name:"Elevação lateral",scheme:"3×12–20",target:"Deltoide lateral",alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"]},{name:"Tríceps testa",scheme:"2×8–12",target:"Tríceps",alts:["Tríceps francês","Tríceps testa com halteres","Tríceps testa na polia"]},{name:"Tríceps corda",scheme:"2×10–15",target:"Tríceps",alts:["Tríceps pulley com barra","Tríceps unilateral","Tríceps corda unilateral"]}]}]}
    ,qua:{label:"Quarta",color:"qua",title:"Pernas completas",note:"Único dia de pernas.",groups:[{name:"Quadríceps",total:"8 séries",exercises:[{name:"Agachamento livre",scheme:"3×6–10",target:"Quadríceps",alts:["Agachamento no Smith","Hack machine","Leg press 45°"]},{name:"Leg press 45°",scheme:"3×8–12",target:"Quadríceps",alts:["Hack machine","Agachamento no Smith","Leg press unilateral"]},{name:"Cadeira extensora",scheme:"2×10–15",target:"Quadríceps",alts:["Agachamento búlgaro","Leg press unilateral","Passada (afundo)"]}]},{name:"Posterior",total:"6 séries",exercises:[{name:"Stiff",scheme:"3×8–12",target:"Posterior + glúteos",alts:["Stiff com halteres","Levantamento terra romeno com barra","Good morning"]},{name:"Mesa flexora",scheme:"3×8–12",target:"Posterior",alts:["Cadeira flexora","Flexora em pé (unilateral)","Mesa flexora unilateral"]}]},{name:"Panturrilhas",total:"4 séries",exercises:[{name:"Panturrilha em pé",scheme:"4×10–15",target:"Gastrocnêmio",alts:["Panturrilha no leg press","Panturrilha no Smith","Panturrilha sentado"]}]}]}
    ,qui:{label:"Quinta",color:"qui",title:"Peito + Braços",note:"Sessão de suporte para não deixar o restante do superior para trás.",groups:[{name:"Peito",total:"7 séries",exercises:[{name:"Supino inclinado com halteres",scheme:"3×8–12",target:"Peitoral superior",alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"]},{name:"Crossover na polia alta",scheme:"2×10–15",target:"Peitoral",alts:["Pec Deck","Crucifixo com halteres","Crossover na polia média"]},{name:"Supino reto no Smith",scheme:"2×8–12",target:"Peitoral",alts:["Supino reto com barra","Supino reto com halteres","Flexão tradicional"]}]},{name:"Braços",total:"8 séries",exercises:[{name:"Rosca Scott",scheme:"2×8–12",target:"Bíceps",alts:["Rosca Scott na polia","Rosca inclinada","Rosca direta W"]},{name:"Tríceps francês",scheme:"2×8–12",target:"Tríceps",alts:["Tríceps francês com halteres","Tríceps testa","Tríceps na polia acima da cabeça"]},{name:"Rosca concentrada",scheme:"2×10–15",target:"Bíceps, pico",alts:["Rosca Scott","Rosca alternada em pé","Rosca 21"]},{name:"Tríceps unilateral na polia",scheme:"2×10–15",target:"Tríceps, unilateral",alts:["Tríceps pulley com barra","Tríceps coice (kickback)","Tríceps corda unilateral"]}]}]}
    ,sex:{label:"Sexta",color:"sex",title:"Costas — Espessura + Dorsais",note:"Segundo toque de costas com padrões diferentes de segunda.",groups:[{name:"Costas",total:"10 séries",exercises:[{name:"Remada cavalinho",scheme:"3×6–10",target:"Espessura",alts:["Remada curvada","Remada articulada","Remada baixa com triângulo"]},{name:"Puxada alta neutra",scheme:"3×8–12",target:"Dorsais",alts:["Puxada alta aberta","Puxada unilateral na máquina","Puxada supinada"]},{name:"Remada unilateral com halter (serrote)",scheme:"2×8–12",target:"Dorsal + espessura",alts:["Remada baixa unilateral","Remada articulada","Remada cavalinho"]},{name:"Pullover na polia",scheme:"2×10–15",target:"Dorsal",alts:["Pulldown unilateral na polia","Pullover na máquina","Puxada com braços retos"]}]},{name:"Ombro posterior",total:"3 séries",exercises:[{name:"Crucifixo inverso no banco inclinado",scheme:"3×12–20",target:"Deltoide posterior",alts:["Face pull na polia","Crucifixo inverso na máquina","Crucifixo inverso na polia"]}]}]}
  }},
  legs2future:{label:"🦵🦵 Pernas 2x — Futuro",desc:"Estratégia futura: quadríceps + posterior em dias separados", category:"H", tags:["PERNAS 2X","EXPERIMENTAL"],meta:{foco:"Pernas 2x/semana",frequencia:"Legs A + Legs B",estilo:"Ênfases diferentes, não duplicação",fase:"Usar quando for apropriado e tolerado"},days:{
    seg:{label:"Segunda",color:"seg",title:"Peito + Ombros + Tríceps",note:"Superior com volume moderado para reservar recuperação para os dois dias de pernas.",groups:[{name:"Peito",total:"8 séries",exercises:[{name:"Supino reto com barra",scheme:"3×6–10",target:"Peitoral",alts:["Supino reto com halteres","Supino reto no Smith","Flexão tradicional"]},{name:"Supino inclinado com halteres",scheme:"3×8–12",target:"Peitoral superior",alts:["Supino inclinado na máquina","Supino inclinado no Smith","Flexão inclinada"]},{name:"Pec Deck",scheme:"2×10–15",target:"Peitoral",alts:["Crucifixo com halteres","Crossover na polia média","Crossover na polia alta"]}]},{name:"Ombros + Tríceps",total:"8 séries",exercises:[{name:"Desenvolvimento com halteres",scheme:"3×8–12",target:"Deltoide anterior",alts:["Desenvolvimento na máquina","Desenvolvimento Arnold","Desenvolvimento militar com barra"]},{name:"Elevação lateral",scheme:"3×12–20",target:"Deltoide lateral",alts:["Elevação lateral na polia","Elevação lateral na máquina","Elevação lateral sentado"]},{name:"Tríceps corda",scheme:"2×10–15",target:"Tríceps",alts:["Tríceps pulley com barra","Tríceps francês","Tríceps unilateral"]}]}]}
    ,ter:{label:"Terça",color:"ter",title:"Costas + Bíceps",note:"Costas e braços com volume suficiente para o restante da semana.",groups:[{name:"Costas",total:"10 séries",exercises:[{name:"Puxada alta neutra",scheme:"3×6–10",target:"Dorsais",alts:["Puxada alta aberta","Puxada supinada","Puxada na máquina articulada"]},{name:"Remada curvada",scheme:"3×6–10",target:"Espessura",alts:["Remada cavalinho","Remada articulada","Remada unilateral"]},{name:"Pulldown unilateral na polia",scheme:"2×10–15",target:"Dorsal",alts:["Pullover na polia","Puxada unilateral na máquina","Puxada alta neutra"]},{name:"Face pull na polia",scheme:"2×12–20",target:"Posterior",alts:["Crucifixo inverso na máquina","Crucifixo inverso no banco inclinado","Crucifixo inverso na polia"]}]},{name:"Bíceps",total:"5 séries",exercises:[{name:"Rosca direta W",scheme:"3×6–10",target:"Bíceps",alts:["Rosca direta com barra reta","Rosca Scott","Rosca direta na polia"]},{name:"Rosca martelo",scheme:"2×10–15",target:"Braquial",alts:["Rosca martelo na polia","Rosca martelo alternada","Rosca Zottman"]}]}]}
    ,qua:{label:"Quarta",color:"qua",title:"Legs A — Quadríceps + Panturrilha",note:"Primeiro dia de pernas da estratégia futura. Ênfase em padrão de joelho e quadríceps, com posterior apenas como complemento.",groups:[{name:"Quadríceps",total:"9 séries",exercises:[{name:"Agachamento livre",scheme:"3×6–10",target:"Quadríceps / padrão de agachamento",alts:["Agachamento no Smith","Hack machine","Leg press 45°"]},{name:"Hack machine",scheme:"3×8–12",target:"Quadríceps",alts:["Leg press 45°","Agachamento no Smith","Agachamento livre"]},{name:"Cadeira extensora",scheme:"3×10–15",target:"Quadríceps",alts:["Leg press unilateral","Agachamento búlgaro","Passada (afundo)"]}]},{name:"Posterior complementar",total:"3 séries",exercises:[{name:"Mesa flexora",scheme:"3×10–15",target:"Posterior de coxa",alts:["Cadeira flexora","Flexora em pé (unilateral)","Mesa flexora unilateral"]}]},{name:"Panturrilha",total:"4 séries",exercises:[{name:"Panturrilha em pé",scheme:"4×10–15",target:"Gastrocnêmio",alts:["Panturrilha no leg press","Panturrilha no Smith","Panturrilha sentado"]}]}]}
    ,qui:{label:"Quinta",color:"qui",title:"Peito + Costas + Braços",note:"Sessão intermediária de superior para chegar ao segundo dia de pernas sem acumular volume desnecessário.",groups:[{name:"Peito + Costas",total:"10 séries",exercises:[{name:"Supino inclinado na máquina",scheme:"3×8–12",target:"Peitoral superior",alts:["Supino inclinado com halteres","Supino inclinado no Smith","Crossover na polia baixa"]},{name:"Remada baixa com triângulo",scheme:"3×8–12",target:"Costas",alts:["Remada articulada","Remada unilateral","Remada cavalinho"]},{name:"Crossover na polia alta",scheme:"2×10–15",target:"Peito",alts:["Pec Deck","Crucifixo com halteres","Crossover na polia média"]},{name:"Puxada alta aberta",scheme:"2×8–12",target:"Dorsais",alts:["Puxada alta neutra","Puxada na máquina articulada","Puxada supinada"]}]},{name:"Braços",total:"6 séries",exercises:[{name:"Rosca Scott",scheme:"3×8–12",target:"Bíceps",alts:["Rosca Scott na polia","Rosca inclinada","Rosca direta W"]},{name:"Tríceps francês",scheme:"3×8–12",target:"Tríceps",alts:["Tríceps francês com halteres","Tríceps testa","Tríceps na polia acima da cabeça"]}]}]}
    ,sex:{label:"Sexta",color:"sex",title:"Legs B — Posterior + Glúteos + Panturrilha",note:"Segundo dia de pernas. Ênfase em extensão de quadril e flexão de joelho, com quadríceps complementar.",groups:[{name:"Posterior",total:"8 séries",exercises:[{name:"Levantamento terra romeno com barra",scheme:"3×6–10",target:"Posterior + glúteos",alts:["Stiff","Stiff com halteres","Good morning"]},{name:"Cadeira flexora",scheme:"3×8–12",target:"Posterior, ângulo diferente da quarta",alts:["Mesa flexora","Flexora em pé (unilateral)","Mesa flexora unilateral"]},{name:"Hip thrust",scheme:"2×8–12",target:"Glúteos",alts:["Elevação pélvica no chão","Cadeira abdutora","Agachamento sumô"]}]},{name:"Quadríceps complementar",total:"3 séries",exercises:[{name:"Leg press 45°",scheme:"3×10–15",target:"Quadríceps",alts:["Hack machine","Agachamento no Smith","Leg press unilateral"]}]},{name:"Panturrilha",total:"4 séries",exercises:[{name:"Panturrilha sentado",scheme:"4×12–20",target:"Sóleo",alts:["Panturrilha em pé","Panturrilha no leg press","Panturrilha no Smith"]}]}]}
  }}
};

const MUSC_LEGS = "Quadríceps + Posteriores + Glúteos + Panturrilhas";
const MUSC_LEGS_ABS = MUSC_LEGS + " + Abdômen";
// ---- Divisão dos treinos: descrição por plano + divisão e músculos por dia ----
// Dados novos, separados dos exercícios (nada aqui altera séries, reps, descansos, técnicas, links ou alternativas).
// Por dia: [nome da divisão, músculos ativos]. Os treinos híbridos herdam isso de HYBRID_DIV (acima).
// Por plano: "description" explica a divisão; "division" e "muscles" são opcionais (por padrão são derivados dos dias).
const DIVISION_INFO = {
  a:{
    description:"Divisão mista: cada dia agrupa músculos diferentes (peito + tríceps, costas + bíceps, pernas, ombros + braços e peito + costas), sem uma lógica única de agrupamento. Peito, costas, ombros e braços aparecem 2x na semana; pernas 1x.",
    days:{
      seg:["Chest + Triceps + Lateral Delts","Peito + Tríceps + Ombro lateral"],
      ter:["Back + Biceps + Rear Delts","Costas + Trapézio + Bíceps + Ombro posterior"],
      qua:["Legs",MUSC_LEGS_ABS],
      qui:["Shoulders + Arms","Ombros + Bíceps + Tríceps"],
      sex:["Chest + Back","Peito + Costas + Trapézio"]
    }
  },
  b:{
    description:"Divisão por padrão de movimento: os dias de empurrar (peito + ombros + tríceps) e de puxar (costas + bíceps + ombro posterior) se repetem 2x na semana, com um único dia de pernas no meio.",
    days:{
      seg:["Push","Peito + Ombros + Tríceps"],
      ter:["Pull","Costas + Trapézio + Bíceps + Ombro posterior"],
      qua:["Legs",MUSC_LEGS_ABS],
      qui:["Push","Peito + Ombros + Tríceps"],
      sex:["Pull","Costas + Trapézio + Bíceps + Ombro posterior"]
    }
  },
  c:{
    description:"Divisão por região do corpo: o tronco (peito + costas) e os membros superiores (ombros + bíceps + tríceps) ficam em dias separados e se repetem 2x na semana. Pernas têm um dia próprio.",
    days:{
      seg:["Torso","Peito + Costas + Trapézio"],
      ter:["Limbs","Ombros + Bíceps + Tríceps"],
      qua:["Legs",MUSC_LEGS_ABS],
      qui:["Torso","Peito + Costas + Trapézio"],
      sex:["Limbs","Ombros + Bíceps + Tríceps"]
    }
  },
  d:{
    division:"Rotating Priority — Focus + Maintenance",
    description:"Prioridade rotativa: em cada dia um grupo é o foco de volume (peito, costas, ombros e depois braços) enquanto outro entra só em manutenção. Pernas ficam em um dia próprio, sempre com volume alto.",
    days:{
      seg:["Chest Focus + Triceps/Shoulders Maintenance","Peito + Tríceps + Ombro lateral"],
      ter:["Back Focus + Biceps Maintenance","Costas + Trapézio + Bíceps"],
      qua:["Legs",MUSC_LEGS_ABS],
      qui:["Shoulders Focus + Chest Maintenance","Ombros + Peito"],
      sex:["Arms Focus + Back Maintenance","Bíceps + Tríceps + Costas + Trapézio"]
    }
  },
  em:{
    description:"Semana apertada: 3 dias com Push, Legs + Core e Pull, cobrindo o corpo todo com cada grupo 1x. Pode ser feito em quaisquer 3 dias livres da semana.",
    days:{
      seg:["Push","Peito + Ombros + Tríceps"],
      qua:["Legs + Core",MUSC_LEGS_ABS],
      ter:["Pull","Costas + Ombro posterior + Bíceps"]
    }
  },
  em4:{
    description:"Push, Pull e Legs em dias dedicados (1x cada), mais um Upper de manutenção no 4º dia que dá a segunda passada em peito, costas, ombros e braços.",
    days:{
      seg:["Push","Peito + Ombros + Tríceps"],
      ter:["Pull","Costas + Ombro posterior + Bíceps"],
      qua:["Legs",MUSC_LEGS_ABS],
      qui:["Upper (Maintenance)","Peito + Costas + Ombro lateral + Bíceps + Tríceps"]
    }
  },
  rec:{
    description:"Push / Pull / Legs com ângulos e equipamentos diferentes entre as duas sessões de cada padrão (A e B), incluindo técnicas de intensidade pontuais. Push trabalha peito + ombros + tríceps; Pull, costas + bíceps + ombro posterior; um único dia de pernas.",
    days:{
      seg:["Push","Peito + Ombros + Tríceps"],
      ter:["Pull","Costas + Trapézio + Bíceps + Ombro posterior"],
      qua:["Legs",MUSC_LEGS_ABS],
      qui:["Push","Peito + Ombros + Tríceps"],
      sex:["Pull","Costas + Trapézio + Bíceps + Ombro posterior"]
    }
  },
  fb:{
    muscles:"Corpo todo em cada dia: pernas (quadríceps ou posteriores) + peito + costas + ombros, com braços, glúteos, panturrilhas ou abdômen conforme o dia",
    description:"Full Body: toda sessão tem compostos para pernas, peito, costas e ombros, com poucas séries por músculo. O padrão principal muda entre os dias (A: agachamento, B: dobradiça de quadril, C: máquinas e unilateral) e a semana fecha repetindo A e B com exercícios diferentes.",
    days:{
      seg:["Full Body","Quadríceps + Peito + Costas + Ombros + Panturrilhas"],
      ter:["Full Body","Posteriores + Glúteos + Costas + Peito + Ombros + Bíceps + Tríceps"],
      qua:["Full Body","Quadríceps + Costas + Peito + Ombro posterior + Glúteos + Abdômen"],
      qui:["Full Body","Quadríceps + Peito + Costas + Ombros + Panturrilhas"],
      sex:["Full Body","Posteriores + Glúteos + Costas + Peito + Ombro lateral + Bíceps + Tríceps"]
    }
  },
  abc:{
    description:"ABC clássico: A = peito + tríceps, B = costas + bíceps, C = pernas + ombros. A e B se repetem 2x na semana (A2 e B2 com exercícios diferentes); C aparece 1x.",
    days:{
      seg:["Chest + Triceps","Peito + Tríceps"],
      ter:["Back + Biceps","Costas + Bíceps"],
      qua:["Legs + Shoulders","Quadríceps + Posteriores + Panturrilhas + Ombros"],
      qui:["Chest + Triceps","Peito + Tríceps"],
      sex:["Back + Biceps","Costas + Bíceps"]
    }
  },
  pplul:{
    description:"Push / Pull / Legs dedicados de segunda a quarta, seguidos de Upper e Lower na quinta e sexta, que funcionam como uma segunda passada mais leve em cada grupo.",
    days:{
      seg:["Push","Peito + Ombros + Tríceps"],
      ter:["Pull","Costas + Ombro posterior + Bíceps"],
      qua:["Legs",MUSC_LEGS],
      qui:["Upper","Peito + Costas + Ombro lateral + Bíceps + Tríceps"],
      sex:["Lower","Posteriores + Quadríceps + Glúteos + Panturrilhas"]
    }
  },
  vtap:{
    description:"V-Taper: costas e ombros são a prioridade (largura das costas e deltoides), com peito e braços como suporte e um único dia de pernas. Costas aparecem 2x e ombros 3x na semana.",
    days:{
      seg:["Back + Shoulders + Biceps","Costas + Ombros + Bíceps"],
      ter:["Chest + Triceps","Peito + Tríceps"],
      qua:["Legs",MUSC_LEGS],
      qui:["Back + Upper Chest + Shoulders","Costas + Peito superior + Ombros"],
      sex:["Arms + Shoulders","Bíceps + Tríceps + Ombros"]
    }
  },
  chestsup:{
    description:"Especialização em peito superior: o peito superior é treinado 2x (segunda e quinta), com costas, ombros e braços como suporte e um único dia de pernas.",
    days:{
      seg:["Upper Chest + Shoulders + Triceps","Peito superior + Ombros + Tríceps"],
      ter:["Back + Biceps","Costas + Bíceps"],
      qua:["Legs",MUSC_LEGS],
      qui:["Upper Chest + Back","Peito superior + Costas"],
      sex:["Shoulders + Arms","Ombros + Bíceps + Tríceps"]
    }
  },
  armspec:{
    description:"Especialização em braços: bíceps e tríceps são trabalhados em 3 dias cada, encaixados nos dias de peito e costas, com um dia dedicado a ombros + braços e um único dia de pernas.",
    days:{
      seg:["Chest + Triceps + Lateral Delts","Peito + Tríceps + Ombro lateral"],
      ter:["Back + Biceps","Costas + Bíceps"],
      qua:["Legs",MUSC_LEGS],
      qui:["Shoulders + Arms","Ombros + Bíceps + Tríceps"],
      sex:["Chest + Back + Arms","Peito + Costas + Bíceps + Tríceps"]
    }
  },
  backsupp:{
    description:"Especialização em costas: dois dias com foco em costas (largura na segunda, espessura na sexta), com peito, ombros e braços como suporte e um único dia de pernas.",
    days:{
      seg:["Back + Biceps","Costas + Bíceps"],
      ter:["Chest + Shoulders + Triceps","Peito + Ombro lateral + Tríceps"],
      qua:["Legs",MUSC_LEGS],
      qui:["Chest + Arms","Peito + Bíceps + Tríceps"],
      sex:["Back","Costas + Ombro posterior"]
    }
  },
  legs2future:{
    description:"Pernas 2x: dois dias de pernas com ênfases diferentes (Legs A com quadríceps + panturrilhas, Legs B com posteriores + glúteos + panturrilhas) e o superior distribuído nos outros três dias.",
    days:{
      seg:["Chest + Shoulders + Triceps","Peito + Ombros + Tríceps"],
      ter:["Back + Biceps","Costas + Bíceps"],
      qua:["Legs A (Quad Focus)","Quadríceps + Panturrilhas + Posteriores (complementar)"],
      qui:["Chest + Back + Arms","Peito + Costas + Bíceps + Tríceps"],
      sex:["Legs B (Hamstring + Glute Focus)","Posteriores + Glúteos + Panturrilhas + Quadríceps (complementar)"]
    }
  },

};

function applyDivisionInfo(){
  const seenNames = (arr) => { const s = new Set(); return arr.filter(d => { if(s.has(d.division)) return false; s.add(d.division); return true; }); };
  Object.keys(PLANS).forEach(planKey => {
    const p = PLANS[planKey];
    const info = DIVISION_INFO[planKey] || {};
    if(info.days){
      Object.keys(info.days).forEach(dayKey => {
        if(p.days[dayKey]){ p.days[dayKey].division = info.days[dayKey][0]; p.days[dayKey].muscles = info.days[dayKey][1]; }
      });
    }
    const days = Object.values(p.days);
    days.forEach(d => { if(!d.division || !d.muscles) console.warn("Dia sem divisão/músculos:", planKey, d.label); });
    const withDiv = days.filter(d => d.division);
    const byName = seenNames(withDiv);
    const flowSeen = new Set();
    const flow = withDiv.filter(d => { const k = d.division + "|" + d.muscles; if(flowSeen.has(k)) return false; flowSeen.add(k); return true; });
    p.division = info.division || byName.map(d => d.division).join(" / ");
    p.divisionMuscles = info.muscles || flow.map(d => d.muscles).join(" → ");
    p.divisionDescription = info.description || "";
    if(!p.divisionDescription) console.warn("Plano sem descrição da divisão:", planKey);
  });
}
applyDivisionInfo();

// Textos de busca: tudo em minúsculas, sem acento e com "+" colado ("Chest + Back" = "chest+back")
function normSearch(s){
  return String(s == null ? "" : s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s*\+\s*/g, "+").replace(/\s+/g, " ").trim();
}

const WEEK_ORDER = ["seg","ter","qua","qui","sex"];
const WEEK_NAME = { seg:"Segunda", ter:"Terça", qua:"Quarta", qui:"Quinta", sex:"Sexta" };

function renderDivisionCard(p){
  if(!p.division) return "";
  const parts = p.division.split(" / ");
  const name = parts.map((s, i) => `<span>${s}${i < parts.length - 1 ? "<i>/</i>" : ""}</span>`).join(" ");
  return `<div class="div-card">
    <div class="dc-eyebrow">🏋️ Divisão</div>
    <div class="dc-name">${name}</div>
    ${p.divisionMuscles ? `<div class="dc-block"><b>O QUE É TREINADO</b><span>${p.divisionMuscles}</span></div>` : ""}
    ${p.divisionDescription ? `<div class="dc-block"><b>DESCRIÇÃO</b><span>${p.divisionDescription}</span></div>` : ""}
  </div>`;
}

function renderWeekDistribution(planKey){
  const days = PLANS[planKey].days;
  const keys = Object.keys(days);
  if(!keys.length || !keys.every(k => days[k].division)) return "";
  const dayRow = (k) => {
    const d = days[k];
    return `<button type="button" class="week-row" data-day="${k}" style="--dc:var(--${d.color})">
      <span class="wr-day">${d.label}</span>
      <span class="wr-main"><b class="wr-div">${d.division}</b><span class="wr-mus">${d.muscles}</span></span>
      <span class="wr-go">›</span>
    </button>`;
  };
  const restRow = (name) => `<div class="week-row rest"><span class="wr-day">${name}</span><span class="wr-main"><b class="wr-div">Descanso</b><span class="wr-mus">—</span></span></div>`;
  let rows = [];
  // Se os dias são dias da semana de verdade, mostra também os dias de descanso entre o primeiro e o último treino.
  const weekdayPlan = keys.every(k => days[k].label === WEEK_NAME[k]);
  if(weekdayPlan){
    const idx = keys.map(k => WEEK_ORDER.indexOf(k));
    for(let i = Math.min(...idx); i <= Math.max(...idx); i++){
      const k = WEEK_ORDER[i];
      rows.push(days[k] ? dayRow(k) : restRow(WEEK_NAME[k]));
    }
  } else {
    rows = keys.map(dayRow);
  }
  return `<div class="week-dist"><div class="wd-title">Distribuição semanal <span>· toque num dia para abrir</span></div>${rows.join("")}</div>`;
}

const CATEGORY_LABELS = {
  all: 'Todas as Estratégias',
  REC: '⭐ Recomendado (Felipe)',
  A: '🎯 5 Dias (Foco Principal)',
  UTIL: '🚨 Pouco Tempo (3-4d)',
  ALT: '🔄 Divisões Alternativas'
};
let currentCategoryFilter = 'all';

function planMatchesFilter(planKey, filter){
  if(filter === 'all') return true;
  const p = PLANS[planKey];
  if(filter === 'REC') return planKey === 'rec';
  if(filter === 'A') return planKey === 'rec' || p.category === 'A';
  return p.category === filter;
}
