// ==========================================
// GUIA DE TREINO — BANCO DE DADOS DE PLANOS
// ==========================================

const EXERCISE_KNOWLEDGE = {
  "Supino inclinado com halteres": {
    "target": "Feixe clavicular do peitoral (peitoral superior) e deltoide anterior — constrói o 'tórax cheio' e preenchimento visual próximo ao pescoço.",
    "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos.",
    "alts": [
      "Supino inclinado articulado (Máquina)",
      "Supino inclinado no Smith",
      "Crossover na polia baixa inclinado"
    ]
  },
  "Supino inclinado 30° com halteres": {
    "target": "Feixe clavicular do peitoral superior com foco na porção medial e alongamento profundo.",
    "how": "Banco exatamente a 30° para isolar a parte alta do peito. Mantenha os pés firmes no chão e glúteo apoiado. Desça sentindo o alongamento do peitoral superior, faça uma pausa de 1 segundo embaixo e empurre em trajetória ligeiramente arqueada sem encostar os halteres.",
    "alts": [
      "Supino inclinado articulado (Máquina)",
      "Supino inclinado no Smith",
      "Crucifixo inclinado com halteres"
    ]
  },
  "Supino inclinado na máquina": {
    "target": "Peitoral superior com trajetória fixa e máxima estabilidade para levar as séries até a falha com segurança.",
    "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso.",
    "alts": [
      "Supino inclinado com halteres",
      "Supino inclinado no Smith",
      "Crossover na polia baixa (de baixo pra cima)"
    ]
  },
  "Supino inclinado no Smith": {
    "target": "Peitoral superior com controle total de trajetória, permitindo foco puro na contração sem oscilação.",
    "how": "Posicione o banco a 30° centralizado sob a barra do Smith. Desça a barra até cerca de 2 dedos acima da clavícula. Mantenha os cotovelos sob os punhos e empurre com os calcanhares das mãos focando na contração da parte alta do peito.",
    "alts": [
      "Supino inclinado com halteres",
      "Supino inclinado articulado (Máquina)",
      "Crossover na polia baixa inclinado"
    ]
  },
  "Supino reto com barra": {
    "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
    "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco.",
    "alts": [
      "Supino reto com halteres",
      "Supino reto articulado (Máquina)",
      "Supino reto no Smith"
    ]
  },
  "Supino reto com halteres": {
    "target": "Peitoral geral com maior amplitude de movimento e trabalho equilibrado entre os dois lados.",
    "how": "Deite com os halteres alinhados ao peito. Desça abrindo os braços com cotovelos em 45°-60° até os halteres ficarem na altura do tórax. Suba empurrando com foco em aproximar os bíceps um do outro, gerando pico de contração no topo.",
    "alts": [
      "Supino reto com barra",
      "Supino reto articulado (Máquina)",
      "Supino reto no Smith"
    ]
  },
  "Supino reto no Smith": {
    "target": "Peitoral maior com estabilização guiada para isolar a contração sem risco de desequilíbrio.",
    "how": "Deite no centro da barra, alinhando-a à linha dos mamilos. Destrave a barra com punhos firmes. Desça em 3 segundos até 2cm do peito e suba explosivo sem hiperextender os cotovelos no final.",
    "alts": [
      "Supino reto articulado (Máquina)",
      "Supino reto com halteres",
      "Supino reto com barra"
    ]
  },
  "Crossover na polia baixa (de baixo pra cima)": {
    "target": "Feixe clavicular (peito superior) e linha medial do peitoral com tensão constante em todo o arco.",
    "how": "Posicione as polias no ponto mais baixo com pegadores em estribo. Dê um passo à frente, peito erguido. Com cotovelos levemente flexionados, puxe os cabos de baixo para cima convergindo as mãos na altura dos olhos/queixo. Segure 1s apertando o peito no topo.",
    "alts": [
      "Crucifixo inclinado com halteres",
      "Supino inclinado articulado (Máquina)",
      "Crucifixo inclinado na polia média"
    ]
  },
  "Crossover na polia baixa": {
    "target": "Peitoral superior e medial em arco ascendente.",
    "how": "Polias na base inferior. Puxe em arco de baixo para cima cruzando suavemente as mãos na linha do peito alto. Mantenha os ombros abaixados e trave a flexão de cotovelo constante durante todo o percurso.",
    "alts": [
      "Crucifixo inclinado com halteres",
      "Crucifixo inclinado na polia",
      "Supino inclinado articulado (Máquina)"
    ]
  },
  "Crossover na polia alta": {
    "target": "Feixe costal (peitoral inferior) e contorno medial externo do tórax.",
    "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico.",
    "alts": [
      "Pec Deck (Peck Deck)",
      "Mergulho nas paralelas ou máquina",
      "Crucifixo declinado com halteres"
    ]
  },
  "Crucifixo / Pec Deck": {
    "target": "Isolamento do peitoral maior sem fadiga de tríceps, alongamento e contração concentrada.",
    "how": "Ajuste o assento para que as manoplas fiquem na altura do meio do peito. Mantenha peito estufado e escápulas apoiadas no encosto. Feche os braços em arco apertando o peito no centro e retorne alongando sem deixar os pesos encostarem.",
    "alts": [
      "Crucifixo com halteres no banco reto",
      "Crossover na polia média",
      "Crucifixo na máquina articulada"
    ]
  },
  "Crucifixo com halteres": {
    "target": "Alongamento profundo das fibras esternocostais do peitoral e expansão torácica.",
    "how": "Deitado no banco reto, halteres acima do peito. Mantenha uma leve flexão constante nos cotovelos (como se estivesse abraçando uma árvore). Abra os braços até sentir o alongamento do peito e suba no mesmo arco sem dobrar os braços.",
    "alts": [
      "Pec Deck (Crucifixo máquina)",
      "Crossover na polia média",
      "Crucifixo inclinado com halteres"
    ]
  },
  "Crucifixo inclinado com halteres": {
    "target": "Alongamento e isolamento do peitoral superior com halteres.",
    "how": "Banco a 30°-45°. Com cotovelos semi-flexionados fixos, abra os braços para os lados sentindo a tração nas fibras superiores do peitoral. Retorne fechando o arco em direção ao topo da cabeça/olhos sem bater os halteres.",
    "alts": [
      "Crossover na polia baixa (de baixo pra cima)",
      "Pec Deck com assento rebaixado",
      "Crucifixo inclinado na polia"
    ]
  },
  "Pec Deck": {
    "target": "Peitoral geral com pico de contração guiado e estabilidade perfeita.",
    "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos.",
    "alts": [
      "Crossover na polia média",
      "Crucifixo com halteres",
      "Crucifixo na máquina articulada"
    ]
  },
  "Mergulho nas paralelas ou Supino declinado": {
    "target": "Corte inferior do peito e deltoide anterior — cria a separação e relevo do tórax.",
    "how": "Nas paralelas, incline o tronco 30° à frente com cotovelos levemente abertos para direcionar ao peitoral. Desça até os cotovelos formarem ~90° e suba empurrando com o peito. Se fizer no supino declinado, desça a barra até a linha inferior do peito.",
    "alts": [
      "Supino declinado articulado (Máquina)",
      "Mergulho assistido na máquina (Graviton)",
      "Crossover na polia alta"
    ]
  },
  "Supino declinado ou mergulho assistido": {
    "target": "Porção inferior do peitoral para demarcação da linha do tórax.",
    "how": "No Graviton ou declinado, mantenha os ombros deprimidos (longe das orelhas). Desça controlando o peso sem esticar demais a cápsula do ombro e suba empurrando com foco nas fibras inferiores do peito.",
    "alts": [
      "Crossover na polia alta",
      "Supino declinado com halteres",
      "Mergulho livre nas paralelas"
    ]
  },
  "Puxada alta aberta": {
    "target": "Grande dorsal e redondo maior (largura de costas) — pilar fundamental do formato V-Taper.",
    "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais.",
    "alts": [
      "Puxada na máquina articulada aberta",
      "Puxada alta com triângulo",
      "Barra fixa pronada (ou Graviton)"
    ]
  },
  "Puxada alta com triângulo": {
    "target": "Grande dorsal com pegada neutra e maior amplitude de alongamento.",
    "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar.",
    "alts": [
      "Puxada alta neutra na máquina",
      "Puxada alta aberta",
      "Remada baixa com triângulo"
    ]
  },
  "Puxada alta neutra": {
    "target": "Grande dorsal com ênfase nas fibras mediais e dorsais baixas.",
    "how": "Com pegador duplo ou barra romana, puxe guiando os cotovelos direto para baixo ao lado das costelas. Aperte as costas no final e retorne em 3 segundos sentindo o alongamento do dorsal sob carga.",
    "alts": [
      "Puxada articulada neutra (Máquina)",
      "Puxada alta aberta",
      "Pulldown na polia"
    ]
  },
  "Puxada supinada (pegada inversa)": {
    "target": "Dorsal inferior com forte auxílio do bíceps e grande amplitude de flexão.",
    "how": "Pegada na largura dos ombros com as palmas voltadas para você. Puxe a barra até a altura do peito mantendo os cotovelos fechados apontando para a frente. Sinta a contração na base da asa das costas.",
    "alts": [
      "Puxada supinada na máquina articulada",
      "Barra fixa supinada (Chin-up)",
      "Puxada alta com triângulo"
    ]
  },
  "Pulldown unilateral na polia": {
    "target": "Isolamento unilateral da grande dorsal — ativação pura sem fadiga de antebraço/bíceps.",
    "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo.",
    "alts": [
      "Pulldown unilateral na máquina articulada",
      "Pullover na polia alta com corda",
      "Remada serrote com halter"
    ]
  },
  "Pullover na polia": {
    "target": "Grande dorsal e serrátil anterior — isola a extensão do ombro em tensão contínua.",
    "how": "Em pé com afastamento da polia alta, barra reta ou corda. Tronco inclinado a 45°, braços semi-estendidos. Puxe a barra num arco amplo até encostar nas coxas sem dobrar os cotovelos. Segure 1s contraindo as asas das costas.",
    "alts": [
      "Pullover com halter no banco reto",
      "Pulldown unilateral na polia",
      "Puxada articulada na máquina"
    ]
  },
  "Remada curvada": {
    "target": "Espessura de costas: trapézio médio/inferior, romboides e dorsal geral.",
    "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar.",
    "alts": [
      "Remada articulada na máquina (peito apoiado)",
      "Remada cavalinho",
      "Remada curvada com halteres"
    ]
  },
  "Remada curvada com barra": {
    "target": "Densidade e espessura dorsal completa com recrutamento de estabilizadores paravertebrais.",
    "how": "Mesma postura rigorosa da remada curvada: coluna travada, joelhos semi-flexionados. Puxe a barra raspando pela coxa em direção ao abdômen, esmagando as costas no topo e descendo com controle excêntrico de 2 a 3 segundos.",
    "alts": [
      "Remada cavalinho",
      "Remada na máquina articulada",
      "Remada com halteres apoiado no banco"
    ]
  },
  "Remada cavalinho": {
    "target": "Espessura dorsal e romboides com maior estabilidade do que a remada livre.",
    "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo.",
    "alts": [
      "Remada curvada com barra",
      "Remada na máquina articulada (peito apoiado)",
      "Remada baixa com triângulo"
    ]
  },
  "Remada baixa com triângulo": {
    "target": "Dorsais mediais, trapézio e romboides com trajetória horizontal protegida.",
    "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás.",
    "alts": [
      "Remada articulada unilateral na máquina",
      "Remada curvada com halteres",
      "Remada baixa com barra pegada aberta"
    ]
  },
  "Remada unilateral com halter (serrote)": {
    "target": "Grande dorsal e romboides unilateralmente com grande amplitude e sem sobrecarga lombar.",
    "how": "Apoie um joelho e uma mão no banco reto. Segure o halter com o braço estendido. Puxe o peso em direção ao quadril (não para o peito) levando o cotovelo para trás e para cima. Desça alongando completamente a dorsal.",
    "alts": [
      "Remada unilateral na máquina articulada",
      "Remada unilateral na polia baixa",
      "Remada baixa com triângulo"
    ]
  },
  "Desenvolvimento militar": {
    "target": "Deltoide anterior e lateral com construção de força vertical.",
    "how": "Em pé ou sentado, barra na altura das clavículas. Segure com pegada pouco além dos ombros e cotovelos sob os punhos. Empurre a barra acima da cabeça travando o abdômen e glúteos para não hiperestender a lombar. Desça controlado até o queixo/clavícula.",
    "alts": [
      "Desenvolvimento com halteres no banco 75°",
      "Desenvolvimento na máquina articulada",
      "Desenvolvimento no Smith"
    ]
  },
  "Desenvolvimento militar com barra": {
    "target": "Deltoides completos e força de empurrar vertical.",
    "how": "Postura sólida, core contraído. Empurre a barra verticalmente até estender os braços alinhados com as orelhas. Retorne em 3 segundos controlados sem despencar o peso sobre as clavículas.",
    "alts": [
      "Desenvolvimento na máquina articulada",
      "Desenvolvimento com halteres",
      "Desenvolvimento Arnold"
    ]
  },
  "Desenvolvimento com halteres": {
    "target": "Deltoide anterior e lateral com arco natural e trabalho equilibrado entre os dois lados.",
    "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo.",
    "alts": [
      "Desenvolvimento na máquina articulada",
      "Desenvolvimento no Smith",
      "Desenvolvimento Arnold"
    ]
  },
  "Desenvolvimento na máquina": {
    "target": "Deltoides com apoio dorsal estável para treinar próximo da falha com total segurança.",
    "how": "Ajuste o banco para que as manoplas comecem na altura dos ombros. Apoie totalmente a coluna e cabeça. Empurre para cima com controle e segure a volta em 2 a 3 segundos sem deixar o bloco de peso tocar.",
    "alts": [
      "Desenvolvimento com halteres",
      "Desenvolvimento no Smith",
      "Desenvolvimento militar com barra"
    ]
  },
  "Desenvolvimento Arnold": {
    "target": "Todas as porções do deltoide com rotação dinâmica durante a subida.",
    "how": "Inicie com os halteres na frente do queixo, palmas voltadas para você. Ao empurrar para cima, gire os punhos para fora de forma que as palmas fiquem para a frente no topo. Desfaça a rotação na descida controlada.",
    "alts": [
      "Desenvolvimento com halteres",
      "Desenvolvimento na máquina",
      "Elevação lateral combinada com desenvolvimento"
    ]
  },
  "Elevação lateral com halteres": {
    "target": "Deltoide lateral (Essencial para o V-Taper) — alarga os ombros e reduz visualmente a cintura.",
    "how": "Em pé ou sentado com leve inclinação do tronco à frente (10°). Halteres ao lado das coxas, cotovelos levemente destravados. Eleve os braços liderando pelo cotovelo (como se estivesse despejando uma jarra) até a altura dos ombros. Desça em 3s sem balançar o corpo.",
    "alts": [
      "Elevação lateral na máquina articulada",
      "Elevação lateral na polia baixa (cabo)",
      "Elevação lateral inclinada no banco"
    ]
  },
  "Elevação lateral": {
    "target": "Deltoide lateral para conferir o aspecto de ombros largos e tridimensionais.",
    "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica.",
    "alts": [
      "Elevação lateral na máquina",
      "Elevação lateral na polia",
      "Elevação lateral inclinada no banco"
    ]
  },
  "Elevação lateral na polia": {
    "target": "Deltoide lateral com tensão constante desde o início do movimento até o topo.",
    "how": "Polia no ponto mais baixo ao lado ou atrás do corpo. Puxe o cabo suavemente cruzando o corpo até a linha do ombro. A polia garante tensão mecânica contínua mesmo na parte de baixo do movimento, onde o halter perde força.",
    "alts": [
      "Elevação lateral com halteres",
      "Elevação lateral na máquina",
      "Elevação lateral inclinada no banco"
    ]
  },
  "Elevação lateral na polia (por trás)": {
    "target": "Deltoide lateral com trajeto por trás das costas para manter tensão pura no feixe médio.",
    "how": "Fique de costas para a polia baixa, segurando o estribo com a mão oposta. Eleve o braço lateralmente em arco suave até a altura do ombro, focando na contração pura sem balanço do quadril. Retorne em 3 segundos.",
    "alts": [
      "Elevação lateral na polia pela frente",
      "Elevação lateral na máquina",
      "Elevação lateral com halteres"
    ]
  },
  "Elevação lateral na máquina": {
    "target": "Deltoide lateral isolado com alavanca direta sobre os cotovelos sem sobrecarga nos punhos.",
    "how": "Ajuste a altura do banco para que o eixo da máquina coincida com as articulações dos ombros. Apoie os antebraços nas almofadas e empurre para cima usando apenas os deltoides laterais. Segure 1 segundo no topo.",
    "alts": [
      "Elevação lateral com halteres",
      "Elevação lateral na polia",
      "Elevação lateral inclinada no banco"
    ]
  },
  "Elevação lateral inclinada no banco": {
    "target": "Deltoide lateral sem qualquer possibilidade de impulso ou roubo corporal.",
    "how": "Deite de lado em um banco inclinado a 45°-60°. Com o braço livre segurando o halter, eleve-o lateralmente até a altura do ombro. O apoio do banco isola o deltoide lateral completamente de compensações.",
    "alts": [
      "Elevação lateral na polia",
      "Elevação lateral na máquina",
      "Elevação lateral com halteres em pé"
    ]
  },
  "Elevação frontal com halteres": {
    "target": "Deltoide anterior e porção superior do peitoral.",
    "how": "Halteres na frente das coxas. Eleve um braço de cada vez (ou ambos) até a altura dos olhos com cotovelos levemente destravados. Desça devagar sem deixar o corpo balançar para trás.",
    "alts": [
      "Elevação frontal na polia com barra/corda",
      "Elevação frontal com anilha",
      "Desenvolvimento com halteres"
    ]
  },
  "Crucifixo inverso": {
    "target": "Deltoide posterior e romboides — cria o relevo 3D do ombro e previne rotação interna postural.",
    "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle.",
    "alts": [
      "Crucifixo inverso na máquina (Peck Deck inverso)",
      "Face pull na polia com corda",
      "Crucifixo inverso na polia cruzada"
    ]
  },
  "Crucifixo inverso na máquina": {
    "target": "Deltoide posterior com trajetória estável e máxima conexão mente-músculo.",
    "how": "Sente de frente para o Peck Deck com o peito apoiado no encosto. Segure as manoplas na altura dos ombros. Abra os braços levando os cotovelos para trás até a linha do tronco, segure 1s e controle a volta.",
    "alts": [
      "Crucifixo inverso com halteres no banco inclinado",
      "Face pull na polia com corda",
      "Crucifixo inverso na polia"
    ]
  },
  "Crucifixo inverso no banco inclinado": {
    "target": "Deltoide posterior isolado com suporte total para o peito.",
    "how": "Deite de bruços no banco a 30°-45°. Halteres pendendo. Abra os braços na linha dos ombros focando na parte traseira do deltoide. Retorne em 3 segundos sem dar tranco no início.",
    "alts": [
      "Crucifixo inverso na máquina",
      "Face pull na polia com corda",
      "Crucifixo inverso com halteres em pé"
    ]
  },
  "Face pull na polia com corda": {
    "target": "Deltoide posterior, manguito rotador (rotação externa) e trapézio inferior — postura impecável.",
    "how": "Polia na altura dos olhos com corda dupla. Puxe em direção ao rosto, abrindo as pontas da corda para os lados das têmporas e girando os punhos para fora. Termine na posição de 'duplo bíceps' segurando 1s.",
    "alts": [
      "Crucifixo inverso na máquina",
      "Crucifixo inverso com halteres",
      "Face pull com elástico (Superband)"
    ]
  },
  "Face pull na polia": {
    "target": "Deltoide posterior e saúde articular dos ombros.",
    "how": "Mesma execução: puxe a corda em direção ao nariz/olhos abrindo os cotovelos altos e girando as mãos para trás, ativando deltoide posterior e rotadores externos.",
    "alts": [
      "Crucifixo inverso na máquina",
      "Crucifixo inverso com halteres",
      "Remada alta aberta na polia"
    ]
  },
  "Encolhimento com halteres": {
    "target": "Trapézio superior — eleva e densifica a linha dos ombros.",
    "how": "Halteres ao lado do corpo com pegada neutra. Eleve os ombros reto para cima em direção às orelhas (NUNCA faça giros com os ombros para não desgastar o manguito). Segure 2 segundos no topo e desça sentindo o peso alongar o trapézio.",
    "alts": [
      "Encolhimento na máquina articulada ou Smith",
      "Encolhimento com barra pela frente",
      "Encolhimento na polia baixa com barra"
    ]
  },
  "Encolhimento com barra": {
    "target": "Trapézio superior com carga progressiva e pegada pronada.",
    "how": "Barra apoiada na frente das coxas. Pés na largura dos ombros. Suba os ombros o máximo possível para cima, congele por 2 segundos no ponto mais alto e desça em 3 segundos sem dobrar os braços.",
    "alts": [
      "Encolhimento com halteres",
      "Encolhimento no Smith",
      "Encolhimento na máquina de panturrilha"
    ]
  },
  "Rosca direta com barra/W": {
    "target": "Bíceps braquial geral (cabeça curta e longa) — construtor de volume e pico do braço.",
    "how": "A barra W alivia a pressão nos punhos. Cotovelos colados ao lado do tronco. Flexione os braços até o peito sem jogar os cotovelos para frente e sem balançar a lombar. Desça controlando o peso até estender quase totalmente.",
    "alts": [
      "Rosca direta na polia baixa com barra",
      "Rosca direta com halteres em pé",
      "Rosca direta na máquina articulada"
    ]
  },
  "Rosca direta W": {
    "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
    "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril.",
    "alts": [
      "Rosca direta na polia baixa",
      "Rosca direta com halteres",
      "Rosca Scott com barra W"
    ]
  },
  "Rosca Scott": {
    "target": "Cabeça curta do bíceps com pico de contração e isolamento estrito sem roubo corporal.",
    "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps.",
    "alts": [
      "Rosca Scott na máquina articulada",
      "Rosca concentrada com halter",
      "Rosca Scott unilateral com halter"
    ]
  },
  "Rosca inclinada": {
    "target": "Cabeça longa do bíceps (pico do bíceps) através do alongamento máximo atrás do tronco.",
    "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento.",
    "alts": [
      "Rosca alternada inclinada com halteres",
      "Rosca no cabo atrás do corpo (Bayesian curl)",
      "Rosca Scott com halteres"
    ]
  },
  "Rosca alternada inclinada": {
    "target": "Cabeça longa do bíceps unilateralmente com máxima supinação e foco individual.",
    "how": "Deitado no banco inclinado, execute uma repetição completa com um braço e em seguida com o outro. Foque em girar o mindinho para cima no topo para obter máxima contração do bíceps.",
    "alts": [
      "Rosca inclinada simultânea",
      "Rosca unilateral na polia baixa",
      "Rosca concentrada no banco"
    ]
  },
  "Rosca martelo": {
    "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
    "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar.",
    "alts": [
      "Rosca martelo na polia com corda",
      "Rosca martelo no banco Scott",
      "Rosca martelo cross-body com halteres"
    ]
  },
  "Rosca martelo cross-body": {
    "target": "Braquial e cabeça longa do bíceps em ângulo cruzado na frente do peito.",
    "how": "Com pegada neutra, puxe o halter em direção ao ombro oposto mantendo o movimento rente ao peito. Essa trajetória foca diretamente no braquial e no relevo lateral do braço.",
    "alts": [
      "Rosca martelo com halteres tradicional",
      "Rosca martelo na polia com corda",
      "Rosca inversa com barra W"
    ]
  },
  "Rosca concentrada": {
    "target": "Isolamento do bíceps e conexão mente-músculo com o pico do músculo.",
    "how": "Sentado, apoie o cotovelo na parte interna da coxa. Deixe o braço estender quase por completo e flexione o peso em direção ao ombro, esmagando o bíceps no topo por 1 segundo.",
    "alts": [
      "Rosca Scott unilateral com halter",
      "Rosca unilateral na polia alta (Hércules)",
      "Rosca direta com halteres sentado"
    ]
  },
  "Rosca 21": {
    "target": "Exaustão metabólica e pump sanguíneo extremo no bíceps.",
    "how": "Faça 7 repetições da parte de baixo até o meio do movimento (90°), 7 repetições do meio até o topo, e finalize com 7 repetições na amplitude completa, tudo sem pausa. Mantenha os cotovelos travados.",
    "alts": [
      "Rosca direta com barra W (drop-set)",
      "Rosca direta na polia com corda (rest-pause)",
      "Rosca Scott na máquina"
    ]
  },
  "Tríceps testa": {
    "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
    "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo.",
    "alts": [
      "Tríceps testa com halteres no banco",
      "Tríceps testa na polia baixa com corda",
      "Tríceps francês com halter"
    ]
  },
  "Tríceps testa com halteres": {
    "target": "Cabeça longa e lateral com trabalho independente e menor estresse nos punhos.",
    "how": "Deitado com halteres em pegada neutra. Desça os halteres nas laterais da cabeça mantendo os cotovelos apontados para o teto. Empurre até quase estender os braços.",
    "alts": [
      "Tríceps testa com barra W",
      "Tríceps testa na polia",
      "Tríceps francês unilateral"
    ]
  },
  "Tríceps francês": {
    "target": "Cabeça longa do tríceps em posição de alongamento profundo acima da cabeça.",
    "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços.",
    "alts": [
      "Tríceps acima da cabeça na corda (Polia)",
      "Tríceps francês com halteres unilateral",
      "Tríceps testa com barra W"
    ]
  },
  "Tríceps francês com halteres": {
    "target": "Cabeça longa do tríceps e expansão do braço em posição elevada.",
    "how": "Sentado com apoio lombar, segure o halter pesado com as palmas unidas em concha sob a anilha superior. Desça devagar atrás do pescoço sentindo o alongamento do tríceps e empurre para cima.",
    "alts": [
      "Tríceps corda acima da cabeça na polia",
      "Tríceps francês unilateral com halter",
      "Tríceps testa com halteres"
    ]
  },
  "Tríceps francês unilateral": {
    "target": "Isolamento da cabeça longa corrigindo assimetrias entre os braços.",
    "how": "Um braço de cada vez, desça o halter por trás da cabeça mantendo o cotovelo apontado para o teto. Pode apoiar a mão livre no cotovelo ativo para garantir estabilização.",
    "alts": [
      "Tríceps francês com duas mãos",
      "Tríceps unilateral na polia por cima da cabeça",
      "Tríceps coice na polia"
    ]
  },
  "Tríceps acima da cabeça na corda": {
    "target": "Cabeça longa com tensão constante proporcionada pelo cabo no ponto de maior alongamento.",
    "how": "De costas para a polia baixa ou média, segure a corda atrás da cabeça. Dê um passo à frente com tronco inclinado. Estenda os braços para frente e para cima abrindo as pontas da corda no final.",
    "alts": [
      "Tríceps francês com halter",
      "Tríceps testa na polia",
      "Tríceps na máquina de extensão"
    ]
  },
  "Tríceps pulley com corda": {
    "target": "Cabeça lateral do tríceps (formato de ferradura) com pico de contração no final do movimento.",
    "how": "Polia alta com corda. Cotovelos colados ao tronco. Empurre a corda para baixo e, no final do percurso, abra as pontas da corda para os lados travando o tríceps por 1 segundo. Volte até os antebraços passarem de 90°.",
    "alts": [
      "Tríceps pulley com barra reta/V",
      "Tríceps na máquina articulada",
      "Tríceps mergulho entre bancos"
    ]
  },
  "Tríceps corda": {
    "target": "Cabeça lateral e medial do tríceps com abertura final para contração máxima.",
    "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima.",
    "alts": [
      "Tríceps pulley com barra",
      "Tríceps unilateral na polia",
      "Tríceps testa com halteres"
    ]
  },
  "Tríceps pulley com barra": {
    "target": "Tríceps geral (cabeça lateral e medial) permitindo maior sobrecarga de peso.",
    "how": "Barra reta ou em V na polia alta. Pegada pronada. Cotovelos fixos ao lado das costelas. Empurre a barra para baixo até estender totalmente os cotovelos sem curvar os ombros para a frente.",
    "alts": [
      "Tríceps pulley com corda",
      "Tríceps na máquina articulada",
      "Tríceps testa com barra W"
    ]
  },
  "Tríceps unilateral na polia": {
    "target": "Isolamento de tríceps sem compensação do braço mais forte.",
    "how": "Pegador individual na polia alta. Cotovelo firme ao lado do tronco. Estenda o antebraço até travar a contração do tríceps, sinta o pico de tensão e retorne controlado.",
    "alts": [
      "Tríceps pulley com corda",
      "Tríceps francês unilateral",
      "Tríceps coice com halter"
    ]
  },
  "Leg press 45°": {
    "target": "Quadríceps geral, glúteos e adutores com segurança máxima para a coluna lombar.",
    "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo.",
    "alts": [
      "Agachamento livre com barra",
      "Hack machine",
      "Leg press horizontal (Máquina)"
    ]
  },
  "Agachamento livre": {
    "target": "Quadríceps, glúteos e estabilização de core — o exercício composto número 1 para pernas.",
    "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido.",
    "alts": [
      "Leg press 45°",
      "Hack machine",
      "Agachamento no Smith"
    ]
  },
  "Hack machine": {
    "target": "Quadríceps com foco no vasto lateral e reto femoral com apoio total nas costas.",
    "how": "Apoie as costas e ombros no encosto do Hack. Pés na largura dos ombros ligeiramente adiantados na plataforma. Desça controlado em 3 segundos até 90° e suba empurrando com as coxas sem dar tranco no joelho.",
    "alts": [
      "Leg press 45°",
      "Agachamento livre",
      "Agachamento frontal ou no Smith"
    ]
  },
  "Cadeira extensora": {
    "target": "Isolamento do reto femoral e vastos do quadríceps — definição e queimação pura.",
    "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater.",
    "alts": [
      "Leg press unilateral",
      "Agachamento búlgaro com halteres",
      "Passada (afundo) com halteres"
    ]
  },
  "Passada (afundo)": {
    "target": "Quadríceps, glúteos e equilíbrio funcional unilateral.",
    "how": "Com halteres nas mãos, dê um passo à frente. Desça flexionando ambos os joelhos até o de trás quase tocar o chão (ambos a ~90°). Empurre com o calcanhar da perna da frente para avançar ou retornar.",
    "alts": [
      "Agachamento búlgaro no banco",
      "Leg press unilateral",
      "Cadeira extensora"
    ]
  },
  "Stiff": {
    "target": "Isquiotibiais (posteriores de coxa) e glúteos na posição de alongamento profundo.",
    "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril.",
    "alts": [
      "Stiff com halteres",
      "Levantamento terra romeno no Smith",
      "Mesa flexora"
    ]
  },
  "Stiff com halteres": {
    "target": "Posteriores de coxa e glúteos com maior facilidade de manter os pesos rentes ao centro de massa.",
    "how": "Segure os halteres na frente das coxas. Coluna reta, peito estufado. Empurre o quadril para trás deixando os halteres descerem deslizando pelas pernas até a canela. Suba contraindo o glúteo.",
    "alts": [
      "Stiff com barra",
      "Levantamento terra romeno",
      "Mesa flexora"
    ]
  },
  "Stiff com halteres ou barra": {
    "target": "Posteriores de coxa e glúteo máximo com ênfase na fase excêntrica.",
    "how": "Mantenha a lordose lombar neutra o tempo todo. Desça em 3 segundos sentindo a musculatura posterior esticar sob carga. Pare antes da lombar arredondar e suba com força dos calcanhares e glúteos.",
    "alts": [
      "Levantamento terra romeno com barra",
      "Mesa flexora",
      "Cadeira flexora"
    ]
  },
  "Levantamento terra romeno com barra": {
    "target": "Cadeia posterior completa (isquiotibiais, glúteo máximo e eretores da espinha).",
    "how": "Similar ao stiff, mas com flexão de joelho um pouco mais acentuada permitindo mais sobrecarga. Inicie do topo, desça raspando a barra nas coxas até abaixo dos joelhos e suba estendendo o quadril com força.",
    "alts": [
      "Stiff com barra",
      "Stiff com halteres",
      "Mesa flexora"
    ]
  },
  "Mesa flexora": {
    "target": "Isolamento dos isquiotibiais (bíceps femoral, semitendíneo) em posição deitada.",
    "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s.",
    "alts": [
      "Cadeira flexora sentada",
      "Stiff com halteres",
      "Flexora em pé unilateral na máquina"
    ]
  },
  "Cadeira flexora": {
    "target": "Isquiotibiais em posição sentada — onde o músculo já parte de uma posição mais alongada.",
    "how": "Ajuste a almofada de cima bem firme contra as coxas para não levantar o corpo. Flexione os joelhos puxando os calcanhares para baixo e para trás. Segure 1s e controle a subida sentindo o alongamento do posterior.",
    "alts": [
      "Mesa flexora deitada",
      "Stiff com halteres",
      "Flexora unilateral na polia"
    ]
  },
  "Cadeira abdutora": {
    "target": "Glúteo médio e mínimo — estabilização da pelve e desenho lateral do quadril.",
    "how": "Sentado ereto ou levemente inclinado à frente. Afaste as pernas empurrando com a lateral dos joelhos contra as almofadas. Segure 2 segundos na abertura máxima e controle o retorno sem deixar as placas baterem.",
    "alts": [
      "Abdução na polia baixa com caneleira",
      "Elevação pélvica (Hip thrust)",
      "Passada lateral com elástico (Miniband)"
    ]
  },
  "Hip thrust": {
    "target": "Glúteo máximo com pico de tensão máxima no topo da extensão do quadril.",
    "how": "Apoie a parte superior das costas em um banco transversalmente. Barra acolchoada sobre o quadril. Pés na largura dos ombros. Empurre o quadril para cima até o tronco e coxas formarem uma linha horizontal reta, apertando o glúteo por 2 segundos.",
    "alts": [
      "Elevação pélvica na máquina articulada",
      "Glúteo na polia baixa com caneleira",
      "Stiff com barra"
    ]
  },
  "Panturrilha no leg press ou em pé": {
    "target": "Gastrocnêmio (parte alta e visível da panturrilha) — exige grande amplitude e pausa na extensão.",
    "how": "Apoie apenas a ponta dos pés na borda da plataforma. Desça os calcanhares ao máximo sentindo o tendão e o músculo alongarem (segure 1s embaixo para tirar o reflexo elástico). Suba na ponta máxima dos pés e aperte por 2 segundos no topo.",
    "alts": [
      "Panturrilha em pé na máquina",
      "Panturrilha sentado na máquina",
      "Panturrilha unilateral com halter em degrau"
    ]
  },
  "Panturrilha em pé": {
    "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
    "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar.",
    "alts": [
      "Panturrilha no Leg Press 45°",
      "Panturrilha sentado na máquina",
      "Panturrilha unilateral com halter"
    ]
  },
  "Panturrilha sentado": {
    "target": "Músculo sóleo (músculo profundo da panturrilha que dá espessura e largura à perna).",
    "how": "Sentado com joelhos a 90° e almofada sobre as coxas. Por estar com os joelhos dobrados, o gastrocnêmio fica encurtado e o sóleo assume quase todo o trabalho. Movimento lento: 2s subindo, 2s no pico e 3s descendo.",
    "alts": [
      "Panturrilha no leg press com joelhos flexionados",
      "Panturrilha em pé na máquina",
      "Panturrilha no Smith sentado com anilhas sob os pés"
    ]
  },
  "Elevação de pernas suspensa ou paralela": {
    "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
    "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
    "alts": [
      "Abdominal infra no chão / banco declinado",
      "Abdominal na polia alta com corda",
      "Prancha abdominal com contração ativa"
    ]
  },
  "Elevação de pernas": {
    "target": "Abdômen inferior e transverso abdominal.",
    "how": "Deitado no chão ou banco, mãos sob o quadril ou segurando a barra. Eleve as pernas enrolando a pelve e desça em 3 segundos sem deixar a lombar arquear descolando do chão.",
    "alts": [
      "Elevação de pernas suspensa na barra",
      "Abdominal infra no banco declinado",
      "Abdominal na polia com corda"
    ]
  },
  "Abdominal na polia": {
    "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
    "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
    "alts": [
      "Abdominal na máquina articulada de crunch",
      "Abdominal no banco declinado com anilha",
      "Elevação de pernas suspensa ou paralela"
    ]
  }
};

const PLANS = {
  "rec": {
    "label": "⭐ Felipe (Volume Otimizado)",
    "desc": "Plano principal personalizado: foco estético no V-Taper (costas/ombro lateral/peito superior), volume ótimo (10-18 séries) e técnicas de pump.",
    "category": "REC",
    "tags": [
      "RECOMENDADO",
      "HIPERTROFIA",
      "V-TAPER",
      "ESTÉTICA",
      "PUMP"
    ],
    "meta": {
      "foco": "Estética V-Taper, Peitoral Superior e Braços 3D",
      "frequencia": "5 dias (Push A/B, Pull A/B, Legs)",
      "estilo": "Volume Otimizado (10-18 séries) & Intensidade",
      "fase": "Felipe — Lapidação com Déficit Calórico"
    },
    "division": "Push / Pull / Legs",
    "divisionMuscles": "Peito + Ombros + Tríceps → Costas + Trapézio + Bíceps + Ombro posterior → Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen",
    "divisionDescription": "Push / Pull / Legs com ângulos e equipamentos diferentes entre as duas sessões de cada padrão (A e B), incluindo técnicas de intensidade pontuais. Push trabalha peito + ombros + tríceps; Pull, costas + bíceps + ombro posterior; um único dia de pernas.",
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Push A — Foco: Peito Superior + Ombro Lateral",
        "note": "O volume por sessão aqui é menor (cerca de 20 séries totais). O segredo é INTENSIDADE (chegar perto da falha) e não quantidade. Descanse 90-120s.",
        "groups": [
          {
            "name": "Peito",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Supino inclinado com halteres",
                "scheme": "4×8–12",
                "target": "Peitoral superior (ajuda na postura visual)",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Supino reto com barra",
                "scheme": "3×6–10",
                "target": "Peitoral médio/geral",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Crossover na polia baixa (de baixo pra cima)",
                "scheme": "3×10–15",
                "target": "Corte superior e miolo do peito",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Crucifixo inclinado com halteres",
                  "Supino inclinado articulado (Máquina)",
                  "Crucifixo inclinado na polia média"
                ],
                "how": "Posicione as polias no ponto mais baixo com pegadores em estribo. Dê um passo à frente, peito erguido. Com cotovelos levemente flexionados, puxe os cabos de baixo para cima convergindo as mãos na altura dos olhos/queixo. Segure 1s apertando o peito no topo."
              }
            ]
          },
          {
            "name": "Ombros",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Desenvolvimento militar",
                "scheme": "3×6–10",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento com halteres no banco 75°",
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith"
                ],
                "how": "Em pé ou sentado, barra na altura das clavículas. Segure com pegada pouco além dos ombros e cotovelos sob os punhos. Empurre a barra acima da cabeça travando o abdômen e glúteos para não hiperestender a lombar. Desça controlado até o queixo/clavícula."
              },
              {
                "name": "Elevação lateral com halteres",
                "scheme": "4×10–15",
                "target": "Deltoide lateral (Essencial para o V-Taper)",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Elevação lateral na máquina articulada",
                  "Elevação lateral na polia baixa (cabo)",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Em pé ou sentado com leve inclinação do tronco à frente (10°). Halteres ao lado das coxas, cotovelos levemente destravados. Eleve os braços liderando pelo cotovelo (como se estivesse despejando uma jarra) até a altura dos ombros. Desça em 3s sem balançar o corpo."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps pulley com corda",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Tríceps pulley com barra reta/V",
                  "Tríceps na máquina articulada",
                  "Tríceps mergulho entre bancos"
                ],
                "how": "Polia alta com corda. Cotovelos colados ao tronco. Empurre a corda para baixo e, no final do percurso, abra as pontas da corda para os lados travando o tríceps por 1 segundo. Volte até os antebraços passarem de 90°."
              }
            ]
          }
        ],
        "division": "Push",
        "muscles": "Peito + Ombros + Tríceps"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Pull A — Foco: Costas Largura + Bíceps",
        "note": "Descanse bem entre as puxadas (120s) para garantir que você consegue progredir carga. Bíceps precisa de 60-90s apenas.",
        "groups": [
          {
            "name": "Costas",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "4×8–12",
                "target": "Dorsal (Largura - Foco V-Taper)",
                "advanced": "🔥 Pico de contração",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Pulldown unilateral na polia",
                "scheme": "3×10–15",
                "target": "Dorsal (isolamento)",
                "alts": [
                  "Pulldown unilateral na máquina articulada",
                  "Pullover na polia alta com corda",
                  "Remada serrote com halter"
                ],
                "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo."
              },
              {
                "name": "Remada curvada com barra",
                "scheme": "3×8–10",
                "target": "Espessura geral",
                "alts": [
                  "Remada cavalinho",
                  "Remada na máquina articulada",
                  "Remada com halteres apoiado no banco"
                ],
                "how": "Mesma postura rigorosa da remada curvada: coluna travada, joelhos semi-flexionados. Puxe a barra raspando pela coxa em direção ao abdômen, esmagando as costas no topo e descendo com controle excêntrico de 2 a 3 segundos."
              }
            ]
          },
          {
            "name": "Ombro Posterior",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Crucifixo inverso",
                "scheme": "3×12–15",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina (Peck Deck inverso)",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia cruzada"
                ],
                "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Rosca direta com barra/W",
                "scheme": "3×8–10",
                "target": "Bíceps braquial geral (cabeça curta e longa) — construtor de volume e pico do braço.",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Rosca direta na polia baixa com barra",
                  "Rosca direta com halteres em pé",
                  "Rosca direta na máquina articulada"
                ],
                "how": "A barra W alivia a pressão nos punhos. Cotovelos colados ao lado do tronco. Flexione os braços até o peito sem jogar os cotovelos para frente e sem balançar a lombar. Desça controlando o peso até estender quase totalmente."
              },
              {
                "name": "Rosca Scott",
                "scheme": "3×10–12",
                "target": "Bíceps (Cabeça curta)",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              }
            ]
          }
        ],
        "division": "Pull",
        "muscles": "Costas + Trapézio + Bíceps + Ombro posterior"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Legs & Abdômen — Intensidade sem Exagero",
        "note": "O volume não é gigantesco, mas cada série precisa ser pesada de verdade. Descanse 2 a 3 minutos no Leg Press.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Leg press 45°",
                "scheme": "4×8–12",
                "target": "Quadríceps geral (seguro e pesado)",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "3×10–15",
                "target": "Quadríceps isolado",
                "advanced": "🔥 Drop-set nas duas últimas",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posteriores e Glúteos",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Stiff com halteres ou barra",
                "scheme": "4×8–12",
                "target": "Posterior + Glúteo",
                "alts": [
                  "Levantamento terra romeno com barra",
                  "Mesa flexora",
                  "Cadeira flexora"
                ],
                "how": "Mantenha a lordose lombar neutra o tempo todo. Desça em 3 segundos sentindo a musculatura posterior esticar sob carga. Pare antes da lombar arredondar e suba com força dos calcanhares e glúteos."
              },
              {
                "name": "Mesa flexora",
                "scheme": "3×10–15",
                "target": "Posterior isolado",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              }
            ]
          },
          {
            "name": "Panturrilhas",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha no leg press ou em pé",
                "scheme": "4×12–20",
                "target": "Gastrocnêmio (parte alta e visível da panturrilha) — exige grande amplitude e pausa na extensão.",
                "advanced": "🔥 Pico de contração de 2s",
                "alts": [
                  "Panturrilha em pé na máquina",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter em degrau"
                ],
                "how": "Apoie apenas a ponta dos pés na borda da plataforma. Desça os calcanhares ao máximo sentindo o tendão e o músculo alongarem (segure 1s embaixo para tirar o reflexo elástico). Suba na ponta máxima dos pés e aperte por 2 segundos no topo."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Abdômen infra / compactar cintura",
                "advanced": "🔥 Segurar 1s no topo",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ],
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo."
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Push B — Foco: Peito Superior 2x + Tríceps",
        "note": "Treino denso (17 séries). Foco em encher a porção superior do peito com halteres e queimar o tríceps.",
        "groups": [
          {
            "name": "Peito",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Supino inclinado 30° com halteres",
                "scheme": "4×8–10",
                "target": "Peitoral superior (2ª frequência com carga máxima)",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crucifixo inclinado com halteres"
                ],
                "how": "Banco exatamente a 30° para isolar a parte alta do peito. Mantenha os pés firmes no chão e glúteo apoiado. Desça sentindo o alongamento do peitoral superior, faça uma pausa de 1 segundo embaixo e empurre em trajetória ligeiramente arqueada sem encostar os halteres."
              },
              {
                "name": "Mergulho nas paralelas ou Supino declinado",
                "scheme": "3×8–12",
                "target": "Corte inferior do peito (a linha de baixo)",
                "alts": [
                  "Supino declinado articulado (Máquina)",
                  "Mergulho assistido na máquina (Graviton)",
                  "Crossover na polia alta"
                ],
                "how": "Nas paralelas, incline o tronco 30° à frente com cotovelos levemente abertos para direcionar ao peitoral. Desça até os cotovelos formarem ~90° e suba empurrando com o peito. Se fizer no supino declinado, desça a barra até a linha inferior do peito."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "3×10–15",
                "target": "Ênfase inferior e miolo",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              }
            ]
          },
          {
            "name": "Ombros",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Elevação lateral na polia (por trás)",
                "scheme": "4×12–20",
                "target": "Deltoide lateral (tensão constante)",
                "alts": [
                  "Elevação lateral na polia pela frente",
                  "Elevação lateral na máquina",
                  "Elevação lateral com halteres"
                ],
                "how": "Fique de costas para a polia baixa, segurando o estribo com a mão oposta. Eleve o braço lateralmente em arco suave até a altura do ombro, focando na contração pura sem balanço do quadril. Retorne em 3 segundos."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Tríceps francês com halteres",
                "scheme": "3×8–12",
                "target": "Cabeça longa do tríceps e expansão do braço em posição elevada.",
                "alts": [
                  "Tríceps corda acima da cabeça na polia",
                  "Tríceps francês unilateral com halter",
                  "Tríceps testa com halteres"
                ],
                "how": "Sentado com apoio lombar, segure o halter pesado com as palmas unidas em concha sob a anilha superior. Desça devagar atrás do pescoço sentindo o alongamento do tríceps e empurre para cima."
              },
              {
                "name": "Tríceps pulley com barra",
                "scheme": "3×10–12",
                "target": "Lateral / medial",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps na máquina articulada",
                  "Tríceps testa com barra W"
                ],
                "how": "Barra reta ou em V na polia alta. Pegada pronada. Cotovelos fixos ao lado das costelas. Empurre a barra para baixo até estender totalmente os cotovelos sem curvar os ombros para a frente."
              }
            ]
          }
        ],
        "division": "Push",
        "muscles": "Peito + Ombros + Tríceps"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Pull B — Foco: Costas Espessura + Deltoide 3D + Bíceps",
        "note": "Foco nas remadas pesadas, traseira do ombro e bíceps alongado. Treino denso e rápido.",
        "groups": [
          {
            "name": "Costas",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Remada cavalinho",
                "scheme": "4×6–10",
                "target": "Espessura dorsal e romboides com maior estabilidade do que a remada livre.",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "3×8–12",
                "target": "Romboides / Trapézio médio",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              },
              {
                "name": "Puxada supinada (pegada inversa)",
                "scheme": "3×8–12",
                "target": "Dorsal + Bíceps auxiliar",
                "alts": [
                  "Puxada supinada na máquina articulada",
                  "Barra fixa supinada (Chin-up)",
                  "Puxada alta com triângulo"
                ],
                "how": "Pegada na largura dos ombros com as palmas voltadas para você. Puxe a barra até a altura do peito mantendo os cotovelos fechados apontando para a frente. Sinta a contração na base da asa das costas."
              }
            ]
          },
          {
            "name": "Deltoide Posterior & Trapézio",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Face pull na polia com corda",
                "scheme": "3×12–15",
                "target": "Deltoide posterior e rotação externa (Ombro 3D)",
                "advanced": "🔥 Segurar 1s atrás",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Face pull com elástico (Superband)"
                ],
                "how": "Polia na altura dos olhos com corda dupla. Puxe em direção ao rosto, abrindo as pontas da corda para os lados das têmporas e girando os punhos para fora. Termine na posição de 'duplo bíceps' segurando 1s."
              },
              {
                "name": "Encolhimento com halteres",
                "scheme": "3×10–15",
                "target": "Trapézio superior",
                "advanced": "🔥 Pico de contração de 2s",
                "alts": [
                  "Encolhimento na máquina articulada ou Smith",
                  "Encolhimento com barra pela frente",
                  "Encolhimento na polia baixa com barra"
                ],
                "how": "Halteres ao lado do corpo com pegada neutra. Eleve os ombros reto para cima em direção às orelhas (NUNCA faça giros com os ombros para não desgastar o manguito). Segure 2 segundos no topo e desça sentindo o peso alongar o trapézio."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Rosca inclinada",
                "scheme": "3×8–12",
                "target": "Cabeça longa (posição alongada)",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Rosca martelo",
                "scheme": "3×10–12",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Pull",
        "muscles": "Costas + Trapézio + Bíceps + Ombro posterior"
      }
    }
  },
  "rec_pump": {
    "label": "⭐ Felipe (Super Pump & Braços 3D)",
    "desc": "Variação de choque e especialização: Puxadas puras na Terça, Peito/Ombro isolado na Quinta e Super Bloco de Bíceps + Tríceps juntos na Sexta para pump máximo.",
    "category": "REC",
    "tags": [
      "RECOMENDADO",
      "FELIPE",
      "BRAÇOS 3D",
      "PUMP",
      "ESPECIALIZAÇÃO",
      "COSTAS DIVIDIDA"
    ],
    "meta": {
      "foco": "Super Pump de Braços (Bíceps + Tríceps juntos) e Costas Dividida (Puxadas vs Remadas)",
      "frequencia": "5 dias (Push A/B, Pull A/B, Legs)",
      "estilo": "Alta Densidade & Super Séries de Braço",
      "fase": "Variação Opcional / Bloco de Choque"
    },
    "division": "Push / Pull / Legs (Pump Focus)",
    "divisionMuscles": "Peito + Ombros + Tríceps → Costas (Puxadas) + Bíceps → Pernas → Peito Superior + Ombros → Costas (Remadas) + Bíceps & Tríceps Juntos",
    "divisionDescription": "Variação do treino do Felipe com separação de puxadas (Terça) e remadas (Sexta), e bloco duplo conjugado de braços na sexta para máximo pump antes do fim de semana.",
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Push A — Foco: Peito Superior + Ombro Lateral",
        "note": "O volume por sessão aqui é menor (cerca de 20 séries totais). O segredo é INTENSIDADE (chegar perto da falha) e não quantidade. Descanse 90-120s.",
        "groups": [
          {
            "name": "Peito",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Supino inclinado com halteres",
                "scheme": "4×8–12",
                "target": "Peitoral superior (ajuda na postura visual)",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Supino reto com barra",
                "scheme": "3×6–10",
                "target": "Peitoral médio/geral",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Crossover na polia baixa (de baixo pra cima)",
                "scheme": "3×10–15",
                "target": "Corte superior e miolo do peito",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Crucifixo inclinado com halteres",
                  "Supino inclinado articulado (Máquina)",
                  "Crucifixo inclinado na polia média"
                ],
                "how": "Posicione as polias no ponto mais baixo com pegadores em estribo. Dê um passo à frente, peito erguido. Com cotovelos levemente flexionados, puxe os cabos de baixo para cima convergindo as mãos na altura dos olhos/queixo. Segure 1s apertando o peito no topo."
              }
            ]
          },
          {
            "name": "Ombros",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Desenvolvimento militar",
                "scheme": "3×6–10",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento com halteres no banco 75°",
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith"
                ],
                "how": "Em pé ou sentado, barra na altura das clavículas. Segure com pegada pouco além dos ombros e cotovelos sob os punhos. Empurre a barra acima da cabeça travando o abdômen e glúteos para não hiperestender a lombar. Desça controlado até o queixo/clavícula."
              },
              {
                "name": "Elevação lateral com halteres",
                "scheme": "4×10–15",
                "target": "Deltoide lateral (Essencial para o V-Taper)",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Elevação lateral na máquina articulada",
                  "Elevação lateral na polia baixa (cabo)",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Em pé ou sentado com leve inclinação do tronco à frente (10°). Halteres ao lado das coxas, cotovelos levemente destravados. Eleve os braços liderando pelo cotovelo (como se estivesse despejando uma jarra) até a altura dos ombros. Desça em 3s sem balançar o corpo."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps pulley com corda",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Tríceps pulley com barra reta/V",
                  "Tríceps na máquina articulada",
                  "Tríceps mergulho entre bancos"
                ],
                "how": "Polia alta com corda. Cotovelos colados ao tronco. Empurre a corda para baixo e, no final do percurso, abra as pontas da corda para os lados travando o tríceps por 1 segundo. Volte até os antebraços passarem de 90°."
              }
            ]
          }
        ],
        "division": "Push",
        "muscles": "Peito + Ombros + Tríceps"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Pull A — Foco: Costas Puxadas (Largura V-Taper) + Bíceps",
        "note": "Dia de abrir a asa das costas! Todas as puxadas verticais para maximizar a largura e desenhar o V-Taper. Descanse 90-120s nas puxadas pesadas.",
        "groups": [
          {
            "name": "Costas",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "4×8–12",
                "target": "Grande dorsal e redondo maior (largura de costas) — pilar fundamental do formato V-Taper.",
                "advanced": "🔥 Pico de contração",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Pulldown unilateral na polia",
                "scheme": "3×10–15",
                "target": "Isolamento unilateral da grande dorsal — ativação pura sem fadiga de antebraço/bíceps.",
                "alts": [
                  "Pulldown unilateral na máquina articulada",
                  "Pullover na polia alta com corda",
                  "Remada serrote com halter"
                ],
                "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo."
              },
              {
                "name": "Puxada alta com triângulo",
                "scheme": "3×8–12",
                "target": "Grande dorsal com pegada neutra e maior amplitude de alongamento.",
                "alts": [
                  "Puxada alta neutra na máquina",
                  "Puxada alta aberta",
                  "Remada baixa com triângulo"
                ],
                "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar."
              }
            ]
          },
          {
            "name": "Ombro Posterior",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Crucifixo inverso",
                "scheme": "3×12–15",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina (Peck Deck inverso)",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia cruzada"
                ],
                "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Rosca direta com barra/W",
                "scheme": "3×8–10",
                "target": "Bíceps braquial geral (cabeça curta e longa) — construtor de volume e pico do braço.",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Rosca direta na polia baixa com barra",
                  "Rosca direta com halteres em pé",
                  "Rosca direta na máquina articulada"
                ],
                "how": "A barra W alivia a pressão nos punhos. Cotovelos colados ao lado do tronco. Flexione os braços até o peito sem jogar os cotovelos para frente e sem balançar a lombar. Desça controlando o peso até estender quase totalmente."
              },
              {
                "name": "Rosca Scott",
                "scheme": "3×10–12",
                "target": "Bíceps (Cabeça curta)",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              }
            ]
          }
        ],
        "division": "Pull",
        "muscles": "Costas + Trapézio + Bíceps + Ombro posterior"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Legs & Abdômen — Intensidade sem Exagero",
        "note": "O volume não é gigantesco, mas cada série precisa ser pesada de verdade. Descanse 2 a 3 minutos no Leg Press.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Leg press 45°",
                "scheme": "4×8–12",
                "target": "Quadríceps geral (seguro e pesado)",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "3×10–15",
                "target": "Quadríceps isolado",
                "advanced": "🔥 Drop-set nas duas últimas",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posteriores e Glúteos",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Stiff com halteres ou barra",
                "scheme": "4×8–12",
                "target": "Posterior + Glúteo",
                "alts": [
                  "Levantamento terra romeno com barra",
                  "Mesa flexora",
                  "Cadeira flexora"
                ],
                "how": "Mantenha a lordose lombar neutra o tempo todo. Desça em 3 segundos sentindo a musculatura posterior esticar sob carga. Pare antes da lombar arredondar e suba com força dos calcanhares e glúteos."
              },
              {
                "name": "Mesa flexora",
                "scheme": "3×10–15",
                "target": "Posterior isolado",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              }
            ]
          },
          {
            "name": "Panturrilhas",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha no leg press ou em pé",
                "scheme": "4×12–20",
                "target": "Gastrocnêmio (parte alta e visível da panturrilha) — exige grande amplitude e pausa na extensão.",
                "advanced": "🔥 Pico de contração de 2s",
                "alts": [
                  "Panturrilha em pé na máquina",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter em degrau"
                ],
                "how": "Apoie apenas a ponta dos pés na borda da plataforma. Desça os calcanhares ao máximo sentindo o tendão e o músculo alongarem (segure 1s embaixo para tirar o reflexo elástico). Suba na ponta máxima dos pés e aperte por 2 segundos no topo."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Abdômen infra / compactar cintura",
                "advanced": "🔥 Segurar 1s no topo",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ],
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo."
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Push B — Foco: Peito Superior 2x + Ombro Lateral 3D",
        "note": "Foco total na porção clavicular do peitoral e deltoide lateral. Braços descansam hoje para chegarem 100% recuperados para o super-pump de amanhã!",
        "groups": [
          {
            "name": "Peito",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Supino inclinado 30° com halteres",
                "scheme": "4×8–10",
                "target": "Feixe clavicular do peitoral superior com foco na porção medial e alongamento profundo.",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crucifixo inclinado com halteres"
                ],
                "how": "Banco exatamente a 30° para isolar a parte alta do peito. Mantenha os pés firmes no chão e glúteo apoiado. Desça sentindo o alongamento do peitoral superior, faça uma pausa de 1 segundo embaixo e empurre em trajetória ligeiramente arqueada sem encostar os halteres."
              },
              {
                "name": "Mergulho nas paralelas ou Supino declinado",
                "scheme": "3×8–12",
                "target": "Corte inferior do peito e deltoide anterior — cria a separação e relevo do tórax.",
                "alts": [
                  "Supino declinado articulado (Máquina)",
                  "Mergulho assistido na máquina (Graviton)",
                  "Crossover na polia alta"
                ],
                "how": "Nas paralelas, incline o tronco 30° à frente com cotovelos levemente abertos para direcionar ao peitoral. Desça até os cotovelos formarem ~90° e suba empurrando com o peito. Se fizer no supino declinado, desça a barra até a linha inferior do peito."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "3×10–15",
                "target": "Feixe costal (peitoral inferior) e contorno medial externo do tórax.",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              }
            ]
          },
          {
            "name": "Ombros",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Elevação lateral na polia (por trás)",
                "scheme": "4×12–20",
                "target": "Deltoide lateral com trajeto por trás das costas para manter tensão pura no feixe médio.",
                "alts": [
                  "Elevação lateral na polia pela frente",
                  "Elevação lateral na máquina",
                  "Elevação lateral com halteres"
                ],
                "how": "Fique de costas para a polia baixa, segurando o estribo com a mão oposta. Eleve o braço lateralmente em arco suave até a altura do ombro, focando na contração pura sem balanço do quadril. Retorne em 3 segundos."
              },
              {
                "name": "Desenvolvimento na máquina",
                "scheme": "3×8–12",
                "target": "Deltoides com apoio dorsal estável para treinar próximo da falha com total segurança.",
                "alts": [
                  "Desenvolvimento com halteres",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento militar com barra"
                ],
                "how": "Ajuste o banco para que as manoplas comecem na altura dos ombros. Apoie totalmente a coluna e cabeça. Empurre para cima com controle e segure a volta em 2 a 3 segundos sem deixar o bloco de peso tocar."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ],
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado."
              }
            ]
          }
        ],
        "division": "Push",
        "muscles": "Peito + Ombros + Tríceps"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Pull B + Braços 3D — Remadas (Espessura) + Bíceps & Tríceps Juntos",
        "note": "Remadas pesadas para densidade de costas + bloco completo de braços (Bíceps e Tríceps juntos em super-série). Saia da academia com o braço explodindo de pump para o fim de semana!",
        "groups": [
          {
            "name": "Costas",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Remada curvada com barra",
                "scheme": "4×6–10",
                "target": "Densidade e espessura dorsal completa com recrutamento de estabilizadores paravertebrais.",
                "alts": [
                  "Remada cavalinho",
                  "Remada na máquina articulada",
                  "Remada com halteres apoiado no banco"
                ],
                "how": "Mesma postura rigorosa da remada curvada: coluna travada, joelhos semi-flexionados. Puxe a barra raspando pela coxa em direção ao abdômen, esmagando as costas no topo e descendo com controle excêntrico de 2 a 3 segundos."
              },
              {
                "name": "Remada cavalinho",
                "scheme": "3×8–10",
                "target": "Espessura dorsal e romboides com maior estabilidade do que a remada livre.",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "3×8–12",
                "target": "Dorsais mediais, trapézio e romboides com trajetória horizontal protegida.",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              }
            ]
          },
          {
            "name": "Deltoide Posterior & Trapézio",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Face pull na polia com corda",
                "scheme": "3×12–15",
                "target": "Deltoide posterior e rotação externa (Ombro 3D)",
                "advanced": "🔥 Segurar 1s atrás",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Face pull com elástico (Superband)"
                ],
                "how": "Polia na altura dos olhos com corda dupla. Puxe em direção ao rosto, abrindo as pontas da corda para os lados das têmporas e girando os punhos para fora. Termine na posição de 'duplo bíceps' segurando 1s."
              },
              {
                "name": "Encolhimento com halteres",
                "scheme": "3×10–15",
                "target": "Trapézio superior",
                "advanced": "🔥 Pico de contração de 2s",
                "alts": [
                  "Encolhimento na máquina articulada ou Smith",
                  "Encolhimento com barra pela frente",
                  "Encolhimento na polia baixa com barra"
                ],
                "how": "Halteres ao lado do corpo com pegada neutra. Eleve os ombros reto para cima em direção às orelhas (NUNCA faça giros com os ombros para não desgastar o manguito). Segure 2 segundos no topo e desça sentindo o peso alongar o trapézio."
              }
            ]
          },
          {
            "name": "Bíceps (Super Pump)",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Rosca inclinada",
                "scheme": "3×8–12",
                "target": "Cabeça longa do bíceps (pico do bíceps) através do alongamento máximo atrás do tronco.",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Rosca martelo",
                "scheme": "3×10–12",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          },
          {
            "name": "Tríceps (Super Pump)",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Tríceps francês com halteres",
                "scheme": "3×8–12",
                "target": "Cabeça longa do tríceps e expansão do braço em posição elevada.",
                "alts": [
                  "Tríceps corda acima da cabeça na polia",
                  "Tríceps francês unilateral com halter",
                  "Tríceps testa com halteres"
                ],
                "how": "Sentado com apoio lombar, segure o halter pesado com as palmas unidas em concha sob a anilha superior. Desça devagar atrás do pescoço sentindo o alongamento do tríceps e empurre para cima."
              },
              {
                "name": "Tríceps pulley com barra",
                "scheme": "3×10–12",
                "target": "Tríceps geral (cabeça lateral e medial) permitindo maior sobrecarga de peso.",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps na máquina articulada",
                  "Tríceps testa com barra W"
                ],
                "how": "Barra reta ou em V na polia alta. Pegada pronada. Cotovelos fixos ao lado das costelas. Empurre a barra para baixo até estender totalmente os cotovelos sem curvar os ombros para a frente."
              }
            ]
          }
        ],
        "division": "Pull",
        "muscles": "Costas + Trapézio + Bíceps + Ombro posterior"
      }
    }
  },
  "a": {
    "label": "Plano A · Misto 2x (5 Dias)",
    "desc": "5 dias — Membros superiores 2x na semana, pernas concentradas 1x. Ótimo equilíbrio para quem foca no tronco.",
    "category": "A",
    "tags": [
      "HIPERTROFIA",
      "5 DIAS",
      "TRONCO 2X",
      "PERNAS 1X"
    ],
    "meta": {
      "foco": "Peito/Costas/Ombro/Bíceps/Tríceps 2x na semana + Pernas 1x",
      "frequencia": "5 dias (Seg a Sex)",
      "estilo": "Divisão mista por grupamento",
      "fase": "Hipertrofia Geral de Tronco"
    },
    "division": "Chest + Triceps + Lateral Delts / Back + Biceps + Rear Delts / Legs / Shoulders + Arms / Chest + Back",
    "divisionMuscles": "Peito + Tríceps + Ombro lateral → Costas + Trapézio + Bíceps + Ombro posterior → Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen → Ombros + Bíceps + Tríceps → Peito + Costas + Trapézio",
    "divisionDescription": "Divisão mista: cada dia agrupa músculos diferentes (peito + tríceps, costas + bíceps, pernas, ombros + braços e peito + costas), sem uma lógica única de agrupamento. Peito, costas, ombros e braços aparecem 2x na semana; pernas 1x.",
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Peito + Tríceps + Ombro lateral",
        "groups": [
          {
            "name": "Peito",
            "total": "11 séries",
            "split": [
              [
                "Superior",
                "seg",
                40
              ],
              [
                "Médio",
                "ter",
                35
              ],
              [
                "Inferior",
                "qua",
                25
              ]
            ],
            "exercises": [
              {
                "name": "Supino inclinado com halteres",
                "scheme": "3×6–10",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Supino reto com barra",
                "scheme": "3×6–10",
                "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "3×10–15",
                "target": "Ênfase na região inferior",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              },
              {
                "name": "Crucifixo / Pec Deck",
                "scheme": "2×10–15",
                "target": "Peitoral geral, encurtamento",
                "alts": [
                  "Crucifixo com halteres no banco reto",
                  "Crossover na polia média",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Ajuste o assento para que as manoplas fiquem na altura do meio do peito. Mantenha peito estufado e escápulas apoiadas no encosto. Feche os braços em arco apertando o peito no centro e retorne alongando sem deixar os pesos encostarem."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "8 séries diretas",
            "split": [
              [
                "Cabeça longa",
                "seg",
                50
              ],
              [
                "Lateral/medial",
                "ter",
                50
              ]
            ],
            "exercises": [
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps pulley com barra",
                "scheme": "3×8–12",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps na máquina articulada",
                  "Tríceps testa com barra W"
                ],
                "how": "Barra reta ou em V na polia alta. Pegada pronada. Cotovelos fixos ao lado das costelas. Empurre a barra para baixo até estender totalmente os cotovelos sem curvar os ombros para a frente."
              },
              {
                "name": "Tríceps acima da cabeça na corda",
                "scheme": "2×10–15",
                "target": "Cabeça longa com tensão constante proporcionada pelo cabo no ponto de maior alongamento.",
                "alts": [
                  "Tríceps francês com halter",
                  "Tríceps testa na polia",
                  "Tríceps na máquina de extensão"
                ],
                "how": "De costas para a polia baixa ou média, segure a corda atrás da cabeça. Dê um passo à frente com tronco inclinado. Estenda os braços para frente e para cima abrindo as pontas da corda no final."
              }
            ]
          },
          {
            "name": "Ombro lateral",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação lateral",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              }
            ]
          },
          {
            "name": "Panturrilhas",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha sentado",
                "scheme": "4×12–20",
                "target": "Sóleo (2ª frequência da semana)",
                "alts": [
                  "Panturrilha no leg press com joelhos flexionados",
                  "Panturrilha em pé na máquina",
                  "Panturrilha no Smith sentado com anilhas sob os pés"
                ],
                "how": "Sentado com joelhos a 90° e almofada sobre as coxas. Por estar com os joelhos dobrados, o gastrocnêmio fica encurtado e o sóleo assume quase todo o trabalho. Movimento lento: 2s subindo, 2s no pico e 3s descendo."
              }
            ]
          }
        ],
        "division": "Chest + Triceps + Lateral Delts",
        "muscles": "Peito + Tríceps + Ombro lateral"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Costas + Bíceps + Ombro posterior",
        "groups": [
          {
            "name": "Costas",
            "total": "12 séries",
            "split": [
              [
                "Largura",
                "ter",
                50
              ],
              [
                "Espessura",
                "seg",
                25
              ],
              [
                "Detalhe",
                "qui",
                25
              ]
            ],
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "3×6–10",
                "target": "Largura / dorsal",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Puxada alta com triângulo",
                "scheme": "3×8–12",
                "target": "Dorsal, maior amplitude",
                "alts": [
                  "Puxada alta neutra na máquina",
                  "Puxada alta aberta",
                  "Remada baixa com triângulo"
                ],
                "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar."
              },
              {
                "name": "Remada curvada",
                "scheme": "3×6–10",
                "target": "Espessura de costas: trapézio médio/inferior, romboides e dorsal geral.",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "3×8–12",
                "target": "Romboides / trapézio médio",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              }
            ]
          },
          {
            "name": "Trapézio",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Encolhimento com halteres",
                "scheme": "3×10–15",
                "target": "Trapézio superior",
                "alts": [
                  "Encolhimento na máquina articulada ou Smith",
                  "Encolhimento com barra pela frente",
                  "Encolhimento na polia baixa com barra"
                ],
                "how": "Halteres ao lado do corpo com pegada neutra. Eleve os ombros reto para cima em direção às orelhas (NUNCA faça giros com os ombros para não desgastar o manguito). Segure 2 segundos no topo e desça sentindo o peso alongar o trapézio."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "8 séries diretas",
            "split": [
              [
                "Cabeça longa",
                "seg",
                47
              ],
              [
                "Cabeça curta",
                "ter",
                28
              ],
              [
                "Braquial",
                "qua",
                25
              ]
            ],
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "3×6–10",
                "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Rosca inclinada",
                "scheme": "3×8–12",
                "target": "Cabeça longa do bíceps (pico do bíceps) através do alongamento máximo atrás do tronco.",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Rosca martelo",
                "scheme": "2×10–15",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          },
          {
            "name": "Ombro posterior",
            "total": "",
            "exercises": [
              {
                "name": "Crucifixo inverso",
                "scheme": "2×12–20",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina (Peck Deck inverso)",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia cruzada"
                ],
                "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle."
              }
            ]
          }
        ],
        "division": "Back + Biceps + Rear Delts",
        "muscles": "Costas + Trapézio + Bíceps + Ombro posterior"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Pernas completas",
        "note": "Treino pesado e completo — não empilha série em cima de série à toa em cada região.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "3×6–10",
                "target": "Quadríceps, glúteos e estabilização de core — o exercício composto número 1 para pernas.",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Leg press 45°",
                "scheme": "3×8–12",
                "target": "Quadríceps geral, glúteos e adutores com segurança máxima para a coluna lombar.",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "3×10–15",
                "target": "Isolamento do reto femoral e vastos do quadríceps — definição e queimação pura.",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior e Glúteos",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Stiff",
                "scheme": "3×8–12",
                "target": "Isquiotibiais (posteriores de coxa) e glúteos na posição de alongamento profundo.",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              },
              {
                "name": "Mesa flexora",
                "scheme": "3×8–12",
                "target": "Isolamento dos isquiotibiais (bíceps femoral, semitendíneo) em posição deitada.",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              },
              {
                "name": "Hip thrust",
                "scheme": "2×8–12",
                "target": "Glúteo máximo com pico de tensão máxima no topo da extensão do quadril.",
                "alts": [
                  "Elevação pélvica na máquina articulada",
                  "Glúteo na polia baixa com caneleira",
                  "Stiff com barra"
                ],
                "how": "Apoie a parte superior das costas em um banco transversalmente. Barra acolchoada sobre o quadril. Pés na largura dos ombros. Empurre o quadril para cima até o tronco e coxas formarem uma linha horizontal reta, apertando o glúteo por 2 segundos."
              }
            ]
          },
          {
            "name": "Panturrilhas",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "4×10–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas",
                "scheme": "3×10–15",
                "target": "Abdômen inferior e transverso abdominal.",
                "alts": [
                  "Elevação de pernas suspensa na barra",
                  "Abdominal infra no banco declinado",
                  "Abdominal na polia com corda"
                ],
                "how": "Deitado no chão ou banco, mãos sob o quadril ou segurando a barra. Eleve as pernas enrolando a pelve e desça em 3 segundos sem deixar a lombar arquear descolando do chão."
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Ombros + Braços",
        "note": "Estímulo forte nos músculos que já trabalharam indiretamente no peito e nas costas.",
        "groups": [
          {
            "name": "Ombros",
            "total": "12 séries diretas",
            "split": [
              [
                "Lateral",
                "ter",
                50
              ],
              [
                "Posterior",
                "qua",
                33
              ],
              [
                "Anterior",
                "seg",
                17
              ]
            ],
            "exercises": [
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "3×6–10",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              },
              {
                "name": "Elevação lateral na polia",
                "scheme": "4×10–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na máquina",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Polia no ponto mais baixo ao lado ou atrás do corpo. Puxe o cabo suavemente cruzando o corpo até a linha do ombro. A polia garante tensão mecânica contínua mesmo na parte de baixo do movimento, onde o halter perde força."
              },
              {
                "name": "Elevação lateral inclinada no banco",
                "scheme": "2×12–20",
                "target": "Deltoide lateral, isolamento estrito",
                "alts": [
                  "Elevação lateral na polia",
                  "Elevação lateral na máquina",
                  "Elevação lateral com halteres em pé"
                ],
                "how": "Deite de lado em um banco inclinado a 45°-60°. Com o braço livre segurando o halter, eleve-o lateralmente até a altura do ombro. O apoio do banco isola o deltoide lateral completamente de compensações."
              },
              {
                "name": "Face pull na polia",
                "scheme": "2×12–20",
                "target": "Deltoide posterior e saúde articular dos ombros.",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Remada alta aberta na polia"
                ],
                "how": "Mesma execução: puxe a corda em direção ao nariz/olhos abrindo os cotovelos altos e girando as mãos para trás, ativando deltoide posterior e rotadores externos."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Rosca Scott",
                "scheme": "3×8–12",
                "target": "Ênfase na cabeça curta",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Rosca alternada inclinada",
                "scheme": "3×8–12",
                "target": "Cabeça longa do bíceps unilateralmente com máxima supinação e foco individual.",
                "alts": [
                  "Rosca inclinada simultânea",
                  "Rosca unilateral na polia baixa",
                  "Rosca concentrada no banco"
                ],
                "how": "Deitado no banco inclinado, execute uma repetição completa com um braço e em seguida com o outro. Foque em girar o mindinho para cima no topo para obter máxima contração do bíceps."
              },
              {
                "name": "Rosca concentrada",
                "scheme": "2×10–15",
                "target": "Pico, cabeça longa",
                "alts": [
                  "Rosca Scott unilateral com halter",
                  "Rosca unilateral na polia alta (Hércules)",
                  "Rosca direta com halteres sentado"
                ],
                "how": "Sentado, apoie o cotovelo na parte interna da coxa. Deixe o braço estender quase por completo e flexione o peso em direção ao ombro, esmagando o bíceps no topo por 1 segundo."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Tríceps corda",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              },
              {
                "name": "Tríceps francês",
                "scheme": "3×8–12",
                "target": "Cabeça longa do tríceps em posição de alongamento profundo acima da cabeça.",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              },
              {
                "name": "Tríceps unilateral na polia",
                "scheme": "2×10–15",
                "target": "Lateral / medial, controle",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps francês unilateral",
                  "Tríceps coice com halter"
                ],
                "how": "Pegador individual na polia alta. Cotovelo firme ao lado do tronco. Estenda o antebraço até travar a contração do tríceps, sinta o pico de tensão e retorne controlado."
              }
            ]
          }
        ],
        "division": "Shoulders + Arms",
        "muscles": "Ombros + Bíceps + Tríceps"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Peito + Costas",
        "note": "Dia que fecha a semana.",
        "groups": [
          {
            "name": "Peito",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Supino inclinado na máquina",
                "scheme": "3×8–12",
                "target": "Peitoral superior com trajetória fixa e máxima estabilidade para levar as séries até a falha com segurança.",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Supino declinado ou mergulho assistido",
                "scheme": "2×8–12",
                "target": "Ênfase inferior",
                "alts": [
                  "Crossover na polia alta",
                  "Supino declinado com halteres",
                  "Mergulho livre nas paralelas"
                ],
                "how": "No Graviton ou declinado, mantenha os ombros deprimidos (longe das orelhas). Desça controlando o peso sem esticar demais a cápsula do ombro e suba empurrando com foco nas fibras inferiores do peito."
              },
              {
                "name": "Pec Deck",
                "scheme": "2×10–15",
                "target": "Peitoral geral com pico de contração guiado e estabilidade perfeita.",
                "alts": [
                  "Crossover na polia média",
                  "Crucifixo com halteres",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos."
              },
              {
                "name": "Crossover na polia baixa",
                "scheme": "2×10–15",
                "target": "Ênfase superior",
                "alts": [
                  "Crucifixo inclinado com halteres",
                  "Crucifixo inclinado na polia",
                  "Supino inclinado articulado (Máquina)"
                ],
                "how": "Polias na base inferior. Puxe em arco de baixo para cima cruzando suavemente as mãos na linha do peito alto. Mantenha os ombros abaixados e trave a flexão de cotovelo constante durante todo o percurso."
              }
            ]
          },
          {
            "name": "Costas",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Remada cavalinho",
                "scheme": "3×6–10",
                "target": "Espessura, ângulo diferente da remada curvada",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Pullover na polia",
                "scheme": "2×10–15",
                "target": "Dorsal, posição alongada",
                "alts": [
                  "Pullover com halter no banco reto",
                  "Pulldown unilateral na polia",
                  "Puxada articulada na máquina"
                ],
                "how": "Em pé com afastamento da polia alta, barra reta ou corda. Tronco inclinado a 45°, braços semi-estendidos. Puxe a barra num arco amplo até encostar nas coxas sem dobrar os cotovelos. Segure 1s contraindo as asas das costas."
              }
            ]
          },
          {
            "name": "Trapézio",
            "total": "2 séries",
            "exercises": [
              {
                "name": "Encolhimento com barra",
                "scheme": "2×10–15",
                "target": "Trapézio superior, ângulo diferente da terça",
                "alts": [
                  "Encolhimento com halteres",
                  "Encolhimento no Smith",
                  "Encolhimento na máquina de panturrilha"
                ],
                "how": "Barra apoiada na frente das coxas. Pés na largura dos ombros. Suba os ombros o máximo possível para cima, congele por 2 segundos no ponto mais alto e desça em 3 segundos sem dobrar os braços."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Chest + Back",
        "muscles": "Peito + Costas + Trapézio"
      }
    }
  },
  "b": {
    "label": "Plano B · PPL (5 Dias)",
    "desc": "5 dias — Push / Pull / Legs por padrão mecânico de empurrar e puxar. Divisão consagrada da musculação.",
    "category": "ALT",
    "tags": [
      "HIPERTROFIA",
      "PUSH/PULL",
      "PADRÃO MOVIMENTO"
    ],
    "meta": {
      "foco": "Push/Pull/Legs por padrão de movimento",
      "frequencia": "5 dias, cada grupo 2x (pernas 1x)",
      "estilo": "Agrupado por padrão mecânico (empurrar/puxar)",
      "fase": "Hipertrofia Geral"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Push A — Peito + Ombro + Tríceps",
        "note": "Peito, ombro e tríceps trabalham juntos porque o ombro e o tríceps já ajudam de verdade em todo exercício de empurrar.",
        "groups": [
          {
            "name": "Peito",
            "total": "9 séries",
            "split": [
              [
                "Médio",
                "ter",
                44
              ],
              [
                "Superior",
                "seg",
                33
              ],
              [
                "Inferior",
                "qua",
                23
              ]
            ],
            "exercises": [
              {
                "name": "Supino reto com barra",
                "scheme": "4×6–10",
                "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Supino inclinado com halteres",
                "scheme": "3×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "2×10–15",
                "target": "Ênfase inferior",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              }
            ]
          },
          {
            "name": "Ombro",
            "total": "6 séries diretas",
            "exercises": [
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "3×8–12",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              },
              {
                "name": "Elevação lateral",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "8 séries",
            "split": [
              [
                "Cabeça longa",
                "seg",
                63
              ],
              [
                "Lateral/medial",
                "ter",
                37
              ]
            ],
            "exercises": [
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps pulley com corda",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com barra reta/V",
                  "Tríceps na máquina articulada",
                  "Tríceps mergulho entre bancos"
                ],
                "how": "Polia alta com corda. Cotovelos colados ao tronco. Empurre a corda para baixo e, no final do percurso, abra as pontas da corda para os lados travando o tríceps por 1 segundo. Volte até os antebraços passarem de 90°."
              },
              {
                "name": "Tríceps francês unilateral",
                "scheme": "2×10–15",
                "target": "Isolamento da cabeça longa corrigindo assimetrias entre os braços.",
                "alts": [
                  "Tríceps francês com duas mãos",
                  "Tríceps unilateral na polia por cima da cabeça",
                  "Tríceps coice na polia"
                ],
                "how": "Um braço de cada vez, desça o halter por trás da cabeça mantendo o cotovelo apontado para o teto. Pode apoiar a mão livre no cotovelo ativo para garantir estabilização."
              }
            ]
          }
        ],
        "division": "Push",
        "muscles": "Peito + Ombros + Tríceps"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Pull A — Costas + Bíceps + Ombro posterior",
        "note": "Costas e bíceps na mesma sessão porque toda puxada já recruta o bíceps como auxiliar.",
        "groups": [
          {
            "name": "Costas",
            "total": "11 séries",
            "split": [
              [
                "Largura",
                "ter",
                64
              ],
              [
                "Espessura",
                "seg",
                36
              ]
            ],
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "4×6–10",
                "target": "Largura / dorsal",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Remada curvada",
                "scheme": "4×6–10",
                "target": "Espessura de costas: trapézio médio/inferior, romboides e dorsal geral.",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              },
              {
                "name": "Puxada alta com triângulo",
                "scheme": "3×8–12",
                "target": "Largura, maior amplitude",
                "alts": [
                  "Puxada alta neutra na máquina",
                  "Puxada alta aberta",
                  "Remada baixa com triângulo"
                ],
                "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar."
              }
            ]
          },
          {
            "name": "Ombro posterior",
            "total": "",
            "exercises": [
              {
                "name": "Crucifixo inverso",
                "scheme": "3×12–20",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina (Peck Deck inverso)",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia cruzada"
                ],
                "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle."
              }
            ]
          },
          {
            "name": "Trapézio",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Encolhimento com halteres",
                "scheme": "3×10–15",
                "target": "Trapézio superior",
                "alts": [
                  "Encolhimento na máquina articulada ou Smith",
                  "Encolhimento com barra pela frente",
                  "Encolhimento na polia baixa com barra"
                ],
                "how": "Halteres ao lado do corpo com pegada neutra. Eleve os ombros reto para cima em direção às orelhas (NUNCA faça giros com os ombros para não desgastar o manguito). Segure 2 segundos no topo e desça sentindo o peso alongar o trapézio."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "8 séries",
            "split": [
              [
                "Massa geral",
                "ter",
                38
              ],
              [
                "Braquial",
                "qua",
                25
              ],
              [
                "Cabeça longa",
                "seg",
                37
              ]
            ],
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "3×6–10",
                "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Rosca martelo",
                "scheme": "2×10–15",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              },
              {
                "name": "Rosca concentrada",
                "scheme": "3×10–15",
                "target": "Cabeça longa, pico",
                "alts": [
                  "Rosca Scott unilateral com halter",
                  "Rosca unilateral na polia alta (Hércules)",
                  "Rosca direta com halteres sentado"
                ],
                "how": "Sentado, apoie o cotovelo na parte interna da coxa. Deixe o braço estender quase por completo e flexione o peso em direção ao ombro, esmagando o bíceps no topo por 1 segundo."
              }
            ]
          }
        ],
        "division": "Pull",
        "muscles": "Costas + Trapézio + Bíceps + Ombro posterior"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Pernas completas",
        "note": "Igual ao dia de pernas do Plano A — treino pesado e completo, já resolve a semana toda.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "3×6–10",
                "target": "Quadríceps, glúteos e estabilização de core — o exercício composto número 1 para pernas.",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Leg press 45°",
                "scheme": "3×8–12",
                "target": "Quadríceps geral, glúteos e adutores com segurança máxima para a coluna lombar.",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "3×10–15",
                "target": "Isolamento do reto femoral e vastos do quadríceps — definição e queimação pura.",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior e Glúteos",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Stiff",
                "scheme": "3×8–12",
                "target": "Isquiotibiais (posteriores de coxa) e glúteos na posição de alongamento profundo.",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              },
              {
                "name": "Mesa flexora",
                "scheme": "3×8–12",
                "target": "Isolamento dos isquiotibiais (bíceps femoral, semitendíneo) em posição deitada.",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              },
              {
                "name": "Hip thrust",
                "scheme": "2×8–12",
                "target": "Glúteo máximo com pico de tensão máxima no topo da extensão do quadril.",
                "alts": [
                  "Elevação pélvica na máquina articulada",
                  "Glúteo na polia baixa com caneleira",
                  "Stiff com barra"
                ],
                "how": "Apoie a parte superior das costas em um banco transversalmente. Barra acolchoada sobre o quadril. Pés na largura dos ombros. Empurre o quadril para cima até o tronco e coxas formarem uma linha horizontal reta, apertando o glúteo por 2 segundos."
              }
            ]
          },
          {
            "name": "Panturrilhas",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "4×10–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas",
                "scheme": "3×10–15",
                "target": "Abdômen inferior e transverso abdominal.",
                "alts": [
                  "Elevação de pernas suspensa na barra",
                  "Abdominal infra no banco declinado",
                  "Abdominal na polia com corda"
                ],
                "how": "Deitado no chão ou banco, mãos sob o quadril ou segurando a barra. Eleve as pernas enrolando a pelve e desça em 3 segundos sem deixar a lombar arquear descolando do chão."
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Push B — Peito + Ombro + Tríceps",
        "note": "Mesma lógica de segunda, com ângulos diferentes pra pegar o peito e o ombro de outro jeito.",
        "groups": [
          {
            "name": "Peito",
            "total": "8 séries",
            "split": [
              [
                "Superior",
                "seg",
                38
              ],
              [
                "Inferior",
                "qua",
                38
              ],
              [
                "Médio",
                "ter",
                24
              ]
            ],
            "exercises": [
              {
                "name": "Supino inclinado na máquina",
                "scheme": "3×8–12",
                "target": "Peitoral superior com trajetória fixa e máxima estabilidade para levar as séries até a falha com segurança.",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Supino declinado ou mergulho assistido",
                "scheme": "3×8–12",
                "target": "Ênfase inferior",
                "alts": [
                  "Crossover na polia alta",
                  "Supino declinado com halteres",
                  "Mergulho livre nas paralelas"
                ],
                "how": "No Graviton ou declinado, mantenha os ombros deprimidos (longe das orelhas). Desça controlando o peso sem esticar demais a cápsula do ombro e suba empurrando com foco nas fibras inferiores do peito."
              },
              {
                "name": "Pec Deck",
                "scheme": "2×10–15",
                "target": "Peitoral geral com pico de contração guiado e estabilidade perfeita.",
                "alts": [
                  "Crossover na polia média",
                  "Crucifixo com halteres",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos."
              }
            ]
          },
          {
            "name": "Ombro",
            "total": "7 séries diretas",
            "exercises": [
              {
                "name": "Desenvolvimento Arnold",
                "scheme": "3×8–12",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento com halteres",
                  "Desenvolvimento na máquina",
                  "Elevação lateral combinada com desenvolvimento"
                ],
                "how": "Inicie com os halteres na frente do queixo, palmas voltadas para você. Ao empurrar para cima, gire os punhos para fora de forma que as palmas fiquem para a frente no topo. Desfaça a rotação na descida controlada."
              },
              {
                "name": "Elevação lateral na polia",
                "scheme": "4×10–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na máquina",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Polia no ponto mais baixo ao lado ou atrás do corpo. Puxe o cabo suavemente cruzando o corpo até a linha do ombro. A polia garante tensão mecânica contínua mesmo na parte de baixo do movimento, onde o halter perde força."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "8 séries",
            "split": [
              [
                "Cabeça longa",
                "seg",
                63
              ],
              [
                "Lateral/medial",
                "ter",
                37
              ]
            ],
            "exercises": [
              {
                "name": "Tríceps francês",
                "scheme": "3×8–12",
                "target": "Cabeça longa do tríceps em posição de alongamento profundo acima da cabeça.",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              },
              {
                "name": "Tríceps corda",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              },
              {
                "name": "Tríceps testa com halteres",
                "scheme": "2×10–15",
                "target": "Cabeça longa e lateral com trabalho independente e menor estresse nos punhos.",
                "alts": [
                  "Tríceps testa com barra W",
                  "Tríceps testa na polia",
                  "Tríceps francês unilateral"
                ],
                "how": "Deitado com halteres em pegada neutra. Desça os halteres nas laterais da cabeça mantendo os cotovelos apontados para o teto. Empurre até quase estender os braços."
              }
            ]
          }
        ],
        "division": "Push",
        "muscles": "Peito + Ombros + Tríceps"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Pull B — Costas + Bíceps + Ombro posterior",
        "note": "Fecha a semana repetindo costas e bíceps com foco em espessura e detalhe.",
        "groups": [
          {
            "name": "Costas",
            "total": "8 séries",
            "split": [
              [
                "Espessura",
                "seg",
                38
              ],
              [
                "Largura",
                "ter",
                38
              ],
              [
                "Detalhe",
                "qui",
                24
              ]
            ],
            "exercises": [
              {
                "name": "Remada cavalinho",
                "scheme": "3×6–10",
                "target": "Espessura dorsal e romboides com maior estabilidade do que a remada livre.",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Puxada supinada (pegada inversa)",
                "scheme": "3×8–12",
                "target": "Largura, ângulo diferente da terça",
                "alts": [
                  "Puxada supinada na máquina articulada",
                  "Barra fixa supinada (Chin-up)",
                  "Puxada alta com triângulo"
                ],
                "how": "Pegada na largura dos ombros com as palmas voltadas para você. Puxe a barra até a altura do peito mantendo os cotovelos fechados apontando para a frente. Sinta a contração na base da asa das costas."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "2×10–15",
                "target": "Romboides / trapézio médio",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              }
            ]
          },
          {
            "name": "Ombro posterior",
            "total": "",
            "exercises": [
              {
                "name": "Face pull na polia",
                "scheme": "3×12–20",
                "target": "Deltoide posterior / rotadores",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Remada alta aberta na polia"
                ],
                "how": "Mesma execução: puxe a corda em direção ao nariz/olhos abrindo os cotovelos altos e girando as mãos para trás, ativando deltoide posterior e rotadores externos."
              }
            ]
          },
          {
            "name": "Trapézio",
            "total": "2 séries",
            "exercises": [
              {
                "name": "Encolhimento com barra",
                "scheme": "2×10–15",
                "target": "Trapézio superior, ângulo diferente da terça",
                "alts": [
                  "Encolhimento com halteres",
                  "Encolhimento no Smith",
                  "Encolhimento na máquina de panturrilha"
                ],
                "how": "Barra apoiada na frente das coxas. Pés na largura dos ombros. Suba os ombros o máximo possível para cima, congele por 2 segundos no ponto mais alto e desça em 3 segundos sem dobrar os braços."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "8 séries",
            "split": [
              [
                "Cabeça longa",
                "seg",
                63
              ],
              [
                "Cabeça curta",
                "ter",
                37
              ]
            ],
            "exercises": [
              {
                "name": "Rosca inclinada",
                "scheme": "3×8–12",
                "target": "Cabeça longa do bíceps (pico do bíceps) através do alongamento máximo atrás do tronco.",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Rosca Scott",
                "scheme": "3×8–12",
                "target": "Ênfase cabeça curta",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Rosca martelo cross-body",
                "scheme": "2×10–15",
                "target": "Braquial e cabeça longa do bíceps em ângulo cruzado na frente do peito.",
                "alts": [
                  "Rosca martelo com halteres tradicional",
                  "Rosca martelo na polia com corda",
                  "Rosca inversa com barra W"
                ],
                "how": "Com pegada neutra, puxe o halter em direção ao ombro oposto mantendo o movimento rente ao peito. Essa trajetória foca diretamente no braquial e no relevo lateral do braço."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Pull",
        "muscles": "Costas + Trapézio + Bíceps + Ombro posterior"
      }
    },
    "division": "Push / Pull / Legs",
    "divisionMuscles": "Peito + Ombros + Tríceps → Costas + Trapézio + Bíceps + Ombro posterior → Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen",
    "divisionDescription": "Divisão por padrão de movimento: os dias de empurrar (peito + ombros + tríceps) e de puxar (costas + bíceps + ombro posterior) se repetem 2x na semana, com um único dia de pernas no meio."
  },
  "c": {
    "label": "Plano C · Torso / Limbs (4-5 Dias)",
    "desc": "Tronco (Peito e Costas) e Membros (Braços e Pernas) separados. Máximo foco em braços e pernas.",
    "category": "ALT",
    "tags": [
      "BRAÇOS & PERNAS",
      "TRONCO",
      "ESPECIALIZAÇÃO"
    ],
    "meta": {
      "foco": "Especialização em braços e pernas com tronco consolidado",
      "frequencia": "5 dias, cada grupo 2x (pernas 1x)",
      "estilo": "Agrupado por região do corpo (tronco/membros)",
      "fase": "Especialização de Membros"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Torso A — Peito + Costas",
        "note": "Peito e costas na mesma sessão, antagonistas trabalhando juntos.",
        "groups": [
          {
            "name": "Peito",
            "total": "9 séries",
            "split": [
              [
                "Médio",
                "ter",
                44
              ],
              [
                "Superior",
                "seg",
                33
              ],
              [
                "Inferior",
                "qua",
                23
              ]
            ],
            "exercises": [
              {
                "name": "Supino reto com barra",
                "scheme": "4×6–10",
                "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
                "advanced": "🔥 Bi-set com Remada",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Supino inclinado com halteres",
                "scheme": "3×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "2×10–15",
                "target": "Ênfase inferior",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              }
            ]
          },
          {
            "name": "Costas",
            "total": "11 séries",
            "split": [
              [
                "Largura",
                "ter",
                64
              ],
              [
                "Espessura",
                "seg",
                36
              ]
            ],
            "exercises": [
              {
                "name": "Remada curvada",
                "scheme": "4×6–10",
                "target": "Espessura de costas: trapézio médio/inferior, romboides e dorsal geral.",
                "advanced": "🔥 Bi-set com Supino",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              },
              {
                "name": "Puxada alta aberta",
                "scheme": "4×6–10",
                "target": "Largura / dorsal",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Puxada alta com triângulo",
                "scheme": "3×8–12",
                "target": "Largura, maior amplitude",
                "alts": [
                  "Puxada alta neutra na máquina",
                  "Puxada alta aberta",
                  "Remada baixa com triângulo"
                ],
                "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar."
              }
            ]
          },
          {
            "name": "Trapézio",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Encolhimento com halteres",
                "scheme": "3×10–15",
                "target": "Trapézio superior",
                "alts": [
                  "Encolhimento na máquina articulada ou Smith",
                  "Encolhimento com barra pela frente",
                  "Encolhimento na polia baixa com barra"
                ],
                "how": "Halteres ao lado do corpo com pegada neutra. Eleve os ombros reto para cima em direção às orelhas (NUNCA faça giros com os ombros para não desgastar o manguito). Segure 2 segundos no topo e desça sentindo o peso alongar o trapézio."
              }
            ]
          }
        ],
        "division": "Torso",
        "muscles": "Peito + Costas + Trapézio"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Limbs A — Ombro + Bíceps + Tríceps",
        "note": "Todos os membros superiores numa sessão só, cada um com volume direto de verdade.",
        "groups": [
          {
            "name": "Ombro",
            "total": "9 séries diretas",
            "split": [
              [
                "Anterior",
                "seg",
                33
              ],
              [
                "Lateral",
                "ter",
                34
              ],
              [
                "Posterior",
                "qua",
                33
              ]
            ],
            "exercises": [
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "3×8–12",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              },
              {
                "name": "Elevação lateral",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              },
              {
                "name": "Crucifixo inverso",
                "scheme": "3×12–20",
                "target": "Deltoide posterior e romboides — cria o relevo 3D do ombro e previne rotação interna postural.",
                "alts": [
                  "Crucifixo inverso na máquina (Peck Deck inverso)",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia cruzada"
                ],
                "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "7 séries",
            "split": [
              [
                "Massa geral",
                "ter",
                43
              ],
              [
                "Braquial",
                "qua",
                29
              ],
              [
                "Cabeça longa",
                "seg",
                28
              ]
            ],
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "3×6–10",
                "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Rosca martelo",
                "scheme": "2×10–15",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              },
              {
                "name": "Rosca concentrada",
                "scheme": "2×10–15",
                "target": "Cabeça longa, pico",
                "alts": [
                  "Rosca Scott unilateral com halter",
                  "Rosca unilateral na polia alta (Hércules)",
                  "Rosca direta com halteres sentado"
                ],
                "how": "Sentado, apoie o cotovelo na parte interna da coxa. Deixe o braço estender quase por completo e flexione o peso em direção ao ombro, esmagando o bíceps no topo por 1 segundo."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "8 séries",
            "split": [
              [
                "Cabeça longa",
                "seg",
                50
              ],
              [
                "Lateral/medial",
                "ter",
                50
              ]
            ],
            "exercises": [
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps pulley com corda",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com barra reta/V",
                  "Tríceps na máquina articulada",
                  "Tríceps mergulho entre bancos"
                ],
                "how": "Polia alta com corda. Cotovelos colados ao tronco. Empurre a corda para baixo e, no final do percurso, abra as pontas da corda para os lados travando o tríceps por 1 segundo. Volte até os antebraços passarem de 90°."
              },
              {
                "name": "Tríceps francês unilateral",
                "scheme": "2×10–15",
                "target": "Isolamento da cabeça longa corrigindo assimetrias entre os braços.",
                "alts": [
                  "Tríceps francês com duas mãos",
                  "Tríceps unilateral na polia por cima da cabeça",
                  "Tríceps coice na polia"
                ],
                "how": "Um braço de cada vez, desça o halter por trás da cabeça mantendo o cotovelo apontado para o teto. Pode apoiar a mão livre no cotovelo ativo para garantir estabilização."
              }
            ]
          }
        ],
        "division": "Limbs",
        "muscles": "Ombros + Bíceps + Tríceps"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Pernas completas",
        "note": "Igual aos outros planos — treino pesado e completo, já resolve a semana toda.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "3×6–10",
                "target": "Quadríceps, glúteos e estabilização de core — o exercício composto número 1 para pernas.",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Leg press 45°",
                "scheme": "3×8–12",
                "target": "Quadríceps geral, glúteos e adutores com segurança máxima para a coluna lombar.",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "3×10–15",
                "target": "Isolamento do reto femoral e vastos do quadríceps — definição e queimação pura.",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior e Glúteos",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Stiff",
                "scheme": "3×8–12",
                "target": "Isquiotibiais (posteriores de coxa) e glúteos na posição de alongamento profundo.",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              },
              {
                "name": "Mesa flexora",
                "scheme": "3×8–12",
                "target": "Isolamento dos isquiotibiais (bíceps femoral, semitendíneo) em posição deitada.",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              },
              {
                "name": "Hip thrust",
                "scheme": "2×8–12",
                "target": "Glúteo máximo com pico de tensão máxima no topo da extensão do quadril.",
                "alts": [
                  "Elevação pélvica na máquina articulada",
                  "Glúteo na polia baixa com caneleira",
                  "Stiff com barra"
                ],
                "how": "Apoie a parte superior das costas em um banco transversalmente. Barra acolchoada sobre o quadril. Pés na largura dos ombros. Empurre o quadril para cima até o tronco e coxas formarem uma linha horizontal reta, apertando o glúteo por 2 segundos."
              }
            ]
          },
          {
            "name": "Panturrilhas",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "4×10–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas",
                "scheme": "3×10–15",
                "target": "Abdômen inferior e transverso abdominal.",
                "alts": [
                  "Elevação de pernas suspensa na barra",
                  "Abdominal infra no banco declinado",
                  "Abdominal na polia com corda"
                ],
                "how": "Deitado no chão ou banco, mãos sob o quadril ou segurando a barra. Eleve as pernas enrolando a pelve e desça em 3 segundos sem deixar a lombar arquear descolando do chão."
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Torso B — Peito + Costas",
        "note": "Mesma lógica de segunda, com ângulos diferentes.",
        "groups": [
          {
            "name": "Peito",
            "total": "8 séries",
            "split": [
              [
                "Superior",
                "seg",
                38
              ],
              [
                "Inferior",
                "qua",
                38
              ],
              [
                "Médio",
                "ter",
                24
              ]
            ],
            "exercises": [
              {
                "name": "Supino inclinado na máquina",
                "scheme": "3×8–12",
                "target": "Peitoral superior com trajetória fixa e máxima estabilidade para levar as séries até a falha com segurança.",
                "advanced": "🔥 Bi-set com Puxada",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Supino declinado ou mergulho assistido",
                "scheme": "3×8–12",
                "target": "Ênfase inferior",
                "alts": [
                  "Crossover na polia alta",
                  "Supino declinado com halteres",
                  "Mergulho livre nas paralelas"
                ],
                "how": "No Graviton ou declinado, mantenha os ombros deprimidos (longe das orelhas). Desça controlando o peso sem esticar demais a cápsula do ombro e suba empurrando com foco nas fibras inferiores do peito."
              },
              {
                "name": "Pec Deck",
                "scheme": "2×10–15",
                "target": "Peitoral geral com pico de contração guiado e estabilidade perfeita.",
                "alts": [
                  "Crossover na polia média",
                  "Crucifixo com halteres",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos."
              }
            ]
          },
          {
            "name": "Costas",
            "total": "9 séries",
            "split": [
              [
                "Espessura",
                "seg",
                33
              ],
              [
                "Largura",
                "ter",
                33
              ],
              [
                "Detalhe",
                "qui",
                34
              ]
            ],
            "exercises": [
              {
                "name": "Puxada supinada (pegada inversa)",
                "scheme": "3×8–12",
                "target": "Largura, ângulo diferente da segunda",
                "advanced": "🔥 Bi-set com Supino Incl.",
                "alts": [
                  "Puxada supinada na máquina articulada",
                  "Barra fixa supinada (Chin-up)",
                  "Puxada alta com triângulo"
                ],
                "how": "Pegada na largura dos ombros com as palmas voltadas para você. Puxe a barra até a altura do peito mantendo os cotovelos fechados apontando para a frente. Sinta a contração na base da asa das costas."
              },
              {
                "name": "Remada cavalinho",
                "scheme": "3×6–10",
                "target": "Espessura dorsal e romboides com maior estabilidade do que a remada livre.",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "3×8–12",
                "target": "Romboides / trapézio médio",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              }
            ]
          },
          {
            "name": "Trapézio",
            "total": "2 séries",
            "exercises": [
              {
                "name": "Encolhimento com barra",
                "scheme": "2×10–15",
                "target": "Trapézio superior, ângulo diferente da segunda",
                "alts": [
                  "Encolhimento com halteres",
                  "Encolhimento no Smith",
                  "Encolhimento na máquina de panturrilha"
                ],
                "how": "Barra apoiada na frente das coxas. Pés na largura dos ombros. Suba os ombros o máximo possível para cima, congele por 2 segundos no ponto mais alto e desça em 3 segundos sem dobrar os braços."
              }
            ]
          }
        ],
        "division": "Torso",
        "muscles": "Peito + Costas + Trapézio"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Limbs B — Ombro + Bíceps + Tríceps",
        "note": "Fecha a semana com os membros de novo, ângulos diferentes de terça.",
        "groups": [
          {
            "name": "Ombro",
            "total": "10 séries diretas",
            "split": [
              [
                "Lateral",
                "ter",
                40
              ],
              [
                "Anterior",
                "seg",
                30
              ],
              [
                "Posterior",
                "qua",
                30
              ]
            ],
            "exercises": [
              {
                "name": "Elevação lateral na polia",
                "scheme": "4×10–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na máquina",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Polia no ponto mais baixo ao lado ou atrás do corpo. Puxe o cabo suavemente cruzando o corpo até a linha do ombro. A polia garante tensão mecânica contínua mesmo na parte de baixo do movimento, onde o halter perde força."
              },
              {
                "name": "Desenvolvimento Arnold",
                "scheme": "3×8–12",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento com halteres",
                  "Desenvolvimento na máquina",
                  "Elevação lateral combinada com desenvolvimento"
                ],
                "how": "Inicie com os halteres na frente do queixo, palmas voltadas para você. Ao empurrar para cima, gire os punhos para fora de forma que as palmas fiquem para a frente no topo. Desfaça a rotação na descida controlada."
              },
              {
                "name": "Face pull na polia",
                "scheme": "3×12–20",
                "target": "Deltoide posterior e saúde articular dos ombros.",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Remada alta aberta na polia"
                ],
                "how": "Mesma execução: puxe a corda em direção ao nariz/olhos abrindo os cotovelos altos e girando as mãos para trás, ativando deltoide posterior e rotadores externos."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "7 séries",
            "split": [
              [
                "Cabeça longa",
                "seg",
                43
              ],
              [
                "Cabeça curta",
                "ter",
                28
              ],
              [
                "Braquial",
                "qua",
                29
              ]
            ],
            "exercises": [
              {
                "name": "Rosca inclinada",
                "scheme": "3×8–12",
                "target": "Cabeça longa do bíceps (pico do bíceps) através do alongamento máximo atrás do tronco.",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Rosca Scott",
                "scheme": "2×10–15",
                "target": "Ênfase cabeça curta",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Rosca martelo cross-body",
                "scheme": "2×10–15",
                "target": "Braquial e cabeça longa do bíceps em ângulo cruzado na frente do peito.",
                "alts": [
                  "Rosca martelo com halteres tradicional",
                  "Rosca martelo na polia com corda",
                  "Rosca inversa com barra W"
                ],
                "how": "Com pegada neutra, puxe o halter em direção ao ombro oposto mantendo o movimento rente ao peito. Essa trajetória foca diretamente no braquial e no relevo lateral do braço."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "8 séries",
            "split": [
              [
                "Cabeça longa",
                "seg",
                50
              ],
              [
                "Lateral/medial",
                "ter",
                50
              ]
            ],
            "exercises": [
              {
                "name": "Tríceps francês",
                "scheme": "3×8–12",
                "target": "Cabeça longa do tríceps em posição de alongamento profundo acima da cabeça.",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              },
              {
                "name": "Tríceps corda",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              },
              {
                "name": "Tríceps testa com halteres",
                "scheme": "2×10–15",
                "target": "Cabeça longa e lateral com trabalho independente e menor estresse nos punhos.",
                "alts": [
                  "Tríceps testa com barra W",
                  "Tríceps testa na polia",
                  "Tríceps francês unilateral"
                ],
                "how": "Deitado com halteres em pegada neutra. Desça os halteres nas laterais da cabeça mantendo os cotovelos apontados para o teto. Empurre até quase estender os braços."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Limbs",
        "muscles": "Ombros + Bíceps + Tríceps"
      }
    },
    "division": "Torso / Limbs / Legs",
    "divisionMuscles": "Peito + Costas + Trapézio → Ombros + Bíceps + Tríceps → Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen",
    "divisionDescription": "Divisão por região do corpo: o tronco (peito + costas) e os membros superiores (ombros + bíceps + tríceps) ficam em dias separados e se repetem 2x na semana. Pernas têm um dia próprio."
  },
  "d": {
    "label": "Plano D · Prioridade Rotativa (5 Dias)",
    "desc": "5 dias — 1 grupo prioritário pesado por dia (Peito, Costas, Pernas, Ombros, Braços). Para choque muscular e quebra de platô.",
    "category": "ALT",
    "tags": [
      "CHOQUE",
      "FORÇA",
      "QUEBRA DE PLATÔ"
    ],
    "meta": {
      "foco": "Choque muscular com 1 grupo pesado por dia",
      "frequencia": "5 dias, cada grupo 2x com volume desigual",
      "estilo": "1 grupo em foco pesado + resto em manutenção",
      "fase": "Quebra de Platô"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Peito (foco) + Tríceps e Ombro (manutenção)",
        "note": "Peito é o foco da semana — vem primeiro, com você mais descansado, e leva o volume mais alto.",
        "groups": [
          {
            "name": "Peito — foco principal",
            "total": "15 séries",
            "split": [
              [
                "Superior",
                "seg",
                27
              ],
              [
                "Médio",
                "ter",
                40
              ],
              [
                "Inferior",
                "qua",
                33
              ]
            ],
            "exercises": [
              {
                "name": "Supino reto com barra",
                "scheme": "4×6–10",
                "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Supino inclinado com halteres",
                "scheme": "4×6–10",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Supino declinado ou mergulho assistido",
                "scheme": "3×8–12",
                "target": "Ênfase inferior",
                "alts": [
                  "Crossover na polia alta",
                  "Supino declinado com halteres",
                  "Mergulho livre nas paralelas"
                ],
                "how": "No Graviton ou declinado, mantenha os ombros deprimidos (longe das orelhas). Desça controlando o peso sem esticar demais a cápsula do ombro e suba empurrando com foco nas fibras inferiores do peito."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "2×10–15",
                "target": "Ênfase inferior",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              },
              {
                "name": "Pec Deck",
                "scheme": "2×10–15",
                "target": "Peitoral geral com pico de contração guiado e estabilidade perfeita.",
                "alts": [
                  "Crossover na polia média",
                  "Crucifixo com halteres",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos."
              }
            ]
          },
          {
            "name": "Tríceps — manutenção",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps pulley com barra",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps na máquina articulada",
                  "Tríceps testa com barra W"
                ],
                "how": "Barra reta ou em V na polia alta. Pegada pronada. Cotovelos fixos ao lado das costelas. Empurre a barra para baixo até estender totalmente os cotovelos sem curvar os ombros para a frente."
              }
            ]
          },
          {
            "name": "Ombro — manutenção",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação lateral",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              }
            ]
          }
        ],
        "division": "Chest Focus + Triceps/Shoulders Maintenance",
        "muscles": "Peito + Tríceps + Ombro lateral"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Costas (foco) + Bíceps (manutenção)",
        "note": "Costas ainda pega você descansado — segundo dia da semana, foco total.",
        "groups": [
          {
            "name": "Costas — foco principal",
            "total": "16 séries",
            "split": [
              [
                "Largura",
                "ter",
                44
              ],
              [
                "Espessura",
                "seg",
                25
              ],
              [
                "Detalhe",
                "qui",
                31
              ]
            ],
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "4×6–10",
                "target": "Largura / dorsal",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Remada curvada",
                "scheme": "4×6–10",
                "target": "Espessura de costas: trapézio médio/inferior, romboides e dorsal geral.",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              },
              {
                "name": "Puxada alta com triângulo",
                "scheme": "3×8–12",
                "target": "Largura, maior amplitude",
                "alts": [
                  "Puxada alta neutra na máquina",
                  "Puxada alta aberta",
                  "Remada baixa com triângulo"
                ],
                "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "3×8–12",
                "target": "Romboides / trapézio médio",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              },
              {
                "name": "Pulldown unilateral na polia",
                "scheme": "2×10–15",
                "target": "Dorsal / controle",
                "alts": [
                  "Pulldown unilateral na máquina articulada",
                  "Pullover na polia alta com corda",
                  "Remada serrote com halter"
                ],
                "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo."
              }
            ]
          },
          {
            "name": "Trapézio",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Encolhimento com halteres",
                "scheme": "3×10–15",
                "target": "Trapézio superior",
                "alts": [
                  "Encolhimento na máquina articulada ou Smith",
                  "Encolhimento com barra pela frente",
                  "Encolhimento na polia baixa com barra"
                ],
                "how": "Halteres ao lado do corpo com pegada neutra. Eleve os ombros reto para cima em direção às orelhas (NUNCA faça giros com os ombros para não desgastar o manguito). Segure 2 segundos no topo e desça sentindo o peso alongar o trapézio."
              }
            ]
          },
          {
            "name": "Bíceps — manutenção",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "3×6–10",
                "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Rosca 21",
                "scheme": "3×10–15",
                "target": "Amplitude parcial, geral",
                "alts": [
                  "Rosca direta com barra W (drop-set)",
                  "Rosca direta na polia com corda (rest-pause)",
                  "Rosca Scott na máquina"
                ],
                "how": "Faça 7 repetições da parte de baixo até o meio do movimento (90°), 7 repetições do meio até o topo, e finalize com 7 repetições na amplitude completa, tudo sem pausa. Mantenha os cotovelos travados."
              }
            ]
          }
        ],
        "division": "Back Focus + Biceps Maintenance",
        "muscles": "Costas + Trapézio + Bíceps"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Pernas completas",
        "note": "Não entra na lógica de prioridade — sempre o mesmo volume alto, o corpo todo depende dela.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "3×6–10",
                "target": "Quadríceps, glúteos e estabilização de core — o exercício composto número 1 para pernas.",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Leg press 45°",
                "scheme": "3×8–12",
                "target": "Quadríceps geral, glúteos e adutores com segurança máxima para a coluna lombar.",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "3×10–15",
                "target": "Isolamento do reto femoral e vastos do quadríceps — definição e queimação pura.",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior e Glúteos",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Stiff",
                "scheme": "3×8–12",
                "target": "Isquiotibiais (posteriores de coxa) e glúteos na posição de alongamento profundo.",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              },
              {
                "name": "Mesa flexora",
                "scheme": "3×8–12",
                "target": "Isolamento dos isquiotibiais (bíceps femoral, semitendíneo) em posição deitada.",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              },
              {
                "name": "Hip thrust",
                "scheme": "2×8–12",
                "target": "Glúteo máximo com pico de tensão máxima no topo da extensão do quadril.",
                "alts": [
                  "Elevação pélvica na máquina articulada",
                  "Glúteo na polia baixa com caneleira",
                  "Stiff com barra"
                ],
                "how": "Apoie a parte superior das costas em um banco transversalmente. Barra acolchoada sobre o quadril. Pés na largura dos ombros. Empurre o quadril para cima até o tronco e coxas formarem uma linha horizontal reta, apertando o glúteo por 2 segundos."
              }
            ]
          },
          {
            "name": "Panturrilhas",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "4×10–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas",
                "scheme": "3×10–15",
                "target": "Abdômen inferior e transverso abdominal.",
                "alts": [
                  "Elevação de pernas suspensa na barra",
                  "Abdominal infra no banco declinado",
                  "Abdominal na polia com corda"
                ],
                "how": "Deitado no chão ou banco, mãos sob o quadril ou segurando a barra. Eleve as pernas enrolando a pelve e desça em 3 segundos sem deixar a lombar arquear descolando do chão."
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Ombro (foco) + Peito (manutenção)",
        "note": "Segunda metade da semana: ombro vira prioridade, peito passa a ser só manutenção.",
        "groups": [
          {
            "name": "Ombro — foco principal",
            "total": "20 séries",
            "split": [
              [
                "Anterior",
                "seg",
                35
              ],
              [
                "Lateral",
                "ter",
                35
              ],
              [
                "Posterior",
                "qua",
                30
              ]
            ],
            "exercises": [
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "4×6–10",
                "target": "Deltoide anterior, compound",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              },
              {
                "name": "Elevação frontal com halteres",
                "scheme": "3×8–12",
                "target": "Deltoide anterior, isolamento",
                "alts": [
                  "Elevação frontal na polia com barra/corda",
                  "Elevação frontal com anilha",
                  "Desenvolvimento com halteres"
                ],
                "how": "Halteres na frente das coxas. Eleve um braço de cada vez (ou ambos) até a altura dos olhos com cotovelos levemente destravados. Desça devagar sem deixar o corpo balançar para trás."
              },
              {
                "name": "Elevação lateral na polia",
                "scheme": "4×10–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na máquina",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Polia no ponto mais baixo ao lado ou atrás do corpo. Puxe o cabo suavemente cruzando o corpo até a linha do ombro. A polia garante tensão mecânica contínua mesmo na parte de baixo do movimento, onde o halter perde força."
              },
              {
                "name": "Elevação lateral inclinada no banco",
                "scheme": "3×12–20",
                "target": "Deltoide lateral, isolamento estrito",
                "alts": [
                  "Elevação lateral na polia",
                  "Elevação lateral na máquina",
                  "Elevação lateral com halteres em pé"
                ],
                "how": "Deite de lado em um banco inclinado a 45°-60°. Com o braço livre segurando o halter, eleve-o lateralmente até a altura do ombro. O apoio do banco isola o deltoide lateral completamente de compensações."
              },
              {
                "name": "Crucifixo inverso",
                "scheme": "4×12–20",
                "target": "Deltoide posterior e romboides — cria o relevo 3D do ombro e previne rotação interna postural.",
                "alts": [
                  "Crucifixo inverso na máquina (Peck Deck inverso)",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia cruzada"
                ],
                "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle."
              },
              {
                "name": "Face pull na polia",
                "scheme": "2×12–20",
                "target": "Deltoide posterior e saúde articular dos ombros.",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Remada alta aberta na polia"
                ],
                "how": "Mesma execução: puxe a corda em direção ao nariz/olhos abrindo os cotovelos altos e girando as mãos para trás, ativando deltoide posterior e rotadores externos."
              }
            ]
          },
          {
            "name": "Peito — manutenção",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Supino inclinado na máquina",
                "scheme": "3×8–12",
                "target": "Peitoral superior com trajetória fixa e máxima estabilidade para levar as séries até a falha com segurança.",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Crucifixo com halteres",
                "scheme": "3×10–15",
                "target": "Alongamento profundo das fibras esternocostais do peitoral e expansão torácica.",
                "alts": [
                  "Pec Deck (Crucifixo máquina)",
                  "Crossover na polia média",
                  "Crucifixo inclinado com halteres"
                ],
                "how": "Deitado no banco reto, halteres acima do peito. Mantenha uma leve flexão constante nos cotovelos (como se estivesse abraçando uma árvore). Abra os braços até sentir o alongamento do peito e suba no mesmo arco sem dobrar os braços."
              }
            ]
          }
        ],
        "division": "Shoulders Focus + Chest Maintenance",
        "muscles": "Ombros + Peito"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Braços (foco) + Costas (manutenção)",
        "note": "Fecha a semana com braços recebendo o volume mais alto, já que ficaram só na manutenção o resto da semana.",
        "groups": [
          {
            "name": "Bíceps — foco principal",
            "total": "11 séries",
            "split": [
              [
                "Cabeça longa",
                "seg",
                27
              ],
              [
                "Cabeça curta",
                "ter",
                27
              ],
              [
                "Braquial",
                "qua",
                18
              ],
              [
                "Pico",
                "qui",
                18
              ]
            ],
            "exercises": [
              {
                "name": "Rosca inclinada",
                "scheme": "3×8–12",
                "target": "Cabeça longa do bíceps (pico do bíceps) através do alongamento máximo atrás do tronco.",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Rosca Scott",
                "scheme": "3×8–12",
                "target": "Ênfase cabeça curta",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Rosca martelo",
                "scheme": "3×10–15",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              },
              {
                "name": "Rosca concentrada",
                "scheme": "2×10–15",
                "target": "Pico, cabeça longa",
                "alts": [
                  "Rosca Scott unilateral com halter",
                  "Rosca unilateral na polia alta (Hércules)",
                  "Rosca direta com halteres sentado"
                ],
                "how": "Sentado, apoie o cotovelo na parte interna da coxa. Deixe o braço estender quase por completo e flexione o peso em direção ao ombro, esmagando o bíceps no topo por 1 segundo."
              }
            ]
          },
          {
            "name": "Tríceps — foco principal",
            "total": "11 séries",
            "split": [
              [
                "Cabeça longa",
                "seg",
                55
              ],
              [
                "Lateral/medial",
                "ter",
                45
              ]
            ],
            "exercises": [
              {
                "name": "Tríceps francês",
                "scheme": "3×8–12",
                "target": "Cabeça longa do tríceps em posição de alongamento profundo acima da cabeça.",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              },
              {
                "name": "Tríceps pulley com corda",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com barra reta/V",
                  "Tríceps na máquina articulada",
                  "Tríceps mergulho entre bancos"
                ],
                "how": "Polia alta com corda. Cotovelos colados ao tronco. Empurre a corda para baixo e, no final do percurso, abra as pontas da corda para os lados travando o tríceps por 1 segundo. Volte até os antebraços passarem de 90°."
              },
              {
                "name": "Tríceps testa com halteres",
                "scheme": "3×8–12",
                "target": "Cabeça longa e lateral com trabalho independente e menor estresse nos punhos.",
                "alts": [
                  "Tríceps testa com barra W",
                  "Tríceps testa na polia",
                  "Tríceps francês unilateral"
                ],
                "how": "Deitado com halteres em pegada neutra. Desça os halteres nas laterais da cabeça mantendo os cotovelos apontados para o teto. Empurre até quase estender os braços."
              },
              {
                "name": "Tríceps corda",
                "scheme": "2×10–15",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              }
            ]
          },
          {
            "name": "Costas — manutenção",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Remada cavalinho",
                "scheme": "3×6–10",
                "target": "Espessura dorsal e romboides com maior estabilidade do que a remada livre.",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Pullover na polia",
                "scheme": "3×10–15",
                "target": "Dorsal, posição alongada",
                "alts": [
                  "Pullover com halter no banco reto",
                  "Pulldown unilateral na polia",
                  "Puxada articulada na máquina"
                ],
                "how": "Em pé com afastamento da polia alta, barra reta ou corda. Tronco inclinado a 45°, braços semi-estendidos. Puxe a barra num arco amplo até encostar nas coxas sem dobrar os cotovelos. Segure 1s contraindo as asas das costas."
              }
            ]
          },
          {
            "name": "Trapézio — manutenção",
            "total": "2 séries",
            "exercises": [
              {
                "name": "Encolhimento com barra",
                "scheme": "2×10–15",
                "target": "Trapézio superior, manutenção",
                "alts": [
                  "Encolhimento com halteres",
                  "Encolhimento no Smith",
                  "Encolhimento na máquina de panturrilha"
                ],
                "how": "Barra apoiada na frente das coxas. Pés na largura dos ombros. Suba os ombros o máximo possível para cima, congele por 2 segundos no ponto mais alto e desça em 3 segundos sem dobrar os braços."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Arms Focus + Back Maintenance",
        "muscles": "Bíceps + Tríceps + Costas + Trapézio"
      }
    },
    "division": "Rotating Priority — Focus + Maintenance",
    "divisionMuscles": "Peito + Tríceps + Ombro lateral → Costas + Trapézio + Bíceps → Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen → Ombros + Peito → Bíceps + Tríceps + Costas + Trapézio",
    "divisionDescription": "Prioridade rotativa: em cada dia um grupo é o foco de volume (peito, costas, ombros e depois braços) enquanto outro entra só em manutenção. Pernas ficam em um dia próprio, sempre com volume alto."
  },
  "em": {
    "label": "Emergência 3D (3 Dias)",
    "desc": "3 dias — Semana corrida, viagem ou imprevistos. Mantém 100% da sua massa muscular e força sem regredir.",
    "category": "UTIL",
    "tags": [
      "EMERGÊNCIA",
      "3 DIAS",
      "MANUTENÇÃO"
    ],
    "meta": {
      "foco": "Preservação total de massa muscular com menor tempo",
      "frequencia": "3 dias na semana",
      "estilo": "Push / Legs / Pull condensado",
      "fase": "Manutenção / Sobrevivência"
    },
    "days": {
      "seg": {
        "label": "Dia 1",
        "color": "seg",
        "title": "Push — Peito + Ombro + Tríceps",
        "note": "Use em qualquer um dos 3 dias que sobrarem na semana, não precisa ser segunda de verdade. Cardio opcional: 20–30 min de bike depois do treino, se quiser.",
        "groups": [
          {
            "name": "Peito",
            "total": "11 séries",
            "split": [
              [
                "Médio",
                "ter",
                36
              ],
              [
                "Superior",
                "seg",
                36
              ],
              [
                "Inferior",
                "qua",
                28
              ]
            ],
            "exercises": [
              {
                "name": "Supino reto com barra",
                "scheme": "4×8–10",
                "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Supino inclinado com halteres",
                "scheme": "4×10–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "3×12",
                "target": "Inferior / miolo",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              }
            ]
          },
          {
            "name": "Ombro",
            "total": "7 séries diretas",
            "exercises": [
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "3×10",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              },
              {
                "name": "Elevação lateral",
                "scheme": "4×12–15",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Tríceps pulley com barra",
                "scheme": "4×10",
                "target": "Tríceps geral (cabeça lateral e medial) permitindo maior sobrecarga de peso.",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps na máquina articulada",
                  "Tríceps testa com barra W"
                ],
                "how": "Barra reta ou em V na polia alta. Pegada pronada. Cotovelos fixos ao lado das costelas. Empurre a barra para baixo até estender totalmente os cotovelos sem curvar os ombros para a frente."
              },
              {
                "name": "Tríceps testa",
                "scheme": "3×12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ]
              }
            ]
          }
        ],
        "division": "Push",
        "muscles": "Peito + Ombros + Tríceps"
      },
      "qua": {
        "label": "Dia 2",
        "color": "qua",
        "title": "Legs & Core — Pernas completo + Abdômen",
        "note": "Sem cardio nesse dia — poupe as pernas pro treino em si. Adicionei o hip thrust, que faltava pro glúteo receber trabalho direto.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "4×8–10",
                "target": "Quadríceps geral",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "4×12",
                "target": "Quadríceps isolado",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Mesa flexora",
                "scheme": "4×10–12",
                "target": "Posterior de coxa",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              },
              {
                "name": "Stiff com halteres",
                "scheme": "3×10",
                "target": "Posterior, glúteo e lombar",
                "alts": [
                  "Stiff com barra",
                  "Levantamento terra romeno",
                  "Mesa flexora"
                ],
                "how": "Segure os halteres na frente das coxas. Coluna reta, peito estufado. Empurre o quadril para trás deixando os halteres descerem deslizando pelas pernas até a canela. Suba contraindo o glúteo."
              }
            ]
          },
          {
            "name": "Glúteos",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Hip thrust",
                "scheme": "3×10",
                "target": "Glúteo máximo com pico de tensão máxima no topo da extensão do quadril.",
                "alts": [
                  "Elevação pélvica na máquina articulada",
                  "Glúteo na polia baixa com caneleira",
                  "Stiff com barra"
                ],
                "how": "Apoie a parte superior das costas em um banco transversalmente. Barra acolchoada sobre o quadril. Pés na largura dos ombros. Empurre o quadril para cima até o tronco e coxas formarem uma linha horizontal reta, apertando o glúteo por 2 segundos."
              }
            ]
          },
          {
            "name": "Panturrilha",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha sentado",
                "scheme": "4×15",
                "target": "Músculo sóleo (músculo profundo da panturrilha que dá espessura e largura à perna).",
                "alts": [
                  "Panturrilha no leg press com joelhos flexionados",
                  "Panturrilha em pé na máquina",
                  "Panturrilha no Smith sentado com anilhas sob os pés"
                ],
                "how": "Sentado com joelhos a 90° e almofada sobre as coxas. Por estar com os joelhos dobrados, o gastrocnêmio fica encurtado e o sóleo assume quase todo o trabalho. Movimento lento: 2s subindo, 2s no pico e 3s descendo."
              }
            ]
          },
          {
            "name": "Abdômen",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "4×15–20",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ],
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado."
              }
            ]
          }
        ],
        "division": "Legs + Core",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      },
      "ter": {
        "label": "Dia 3",
        "color": "ter",
        "title": "Pull — Costas + Ombro posterior + Bíceps",
        "note": "Cardio opcional: 20–30 min de bike depois do treino, se quiser.",
        "groups": [
          {
            "name": "Costas",
            "total": "14 séries",
            "split": [
              [
                "Largura",
                "ter",
                50
              ],
              [
                "Espessura",
                "seg",
                50
              ]
            ],
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "4×10",
                "target": "Largura / dorsal",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Puxada alta com triângulo",
                "scheme": "3×11–12",
                "target": "Largura inferior",
                "alts": [
                  "Puxada alta neutra na máquina",
                  "Puxada alta aberta",
                  "Remada baixa com triângulo"
                ],
                "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "4×10",
                "target": "Espessura / miolo",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              },
              {
                "name": "Remada curvada",
                "scheme": "3×10",
                "target": "Densidade geral",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              }
            ]
          },
          {
            "name": "Ombro posterior",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Crucifixo inverso",
                "scheme": "4×12",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina (Peck Deck inverso)",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia cruzada"
                ],
                "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "4×10",
                "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Rosca martelo",
                "scheme": "3×12",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          }
        ],
        "division": "Pull",
        "muscles": "Costas + Ombro posterior + Bíceps"
      }
    },
    "division": "Push / Legs + Core / Pull",
    "divisionMuscles": "Peito + Ombros + Tríceps → Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen → Costas + Ombro posterior + Bíceps",
    "divisionDescription": "Semana apertada: 3 dias com Push, Legs + Core e Pull, cobrindo o corpo todo com cada grupo 1x. Pode ser feito em quaisquer 3 dias livres da semana."
  },
  "em4": {
    "label": "Emergência 4D (4 Dias)",
    "desc": "4 dias — Para semanas curtas ou feriados. Push, Pull e Legs completos + 1 dia de Upper para fechar o corpo todo.",
    "category": "UTIL",
    "tags": [
      "EMERGÊNCIA",
      "4 DIAS",
      "COMPLETO"
    ],
    "meta": {
      "foco": "Treino completo e balanceado em 4 dias",
      "frequencia": "4 dias na semana",
      "estilo": "Push/Pull/Legs + Upper de reforço",
      "fase": "Adaptação de Rotina"
    },
    "days": {
      "seg": {
        "label": "Dia 1",
        "color": "seg",
        "title": "Push — Peito + Ombro + Tríceps",
        "note": "Recebe reforço no Dia 4, então o peito fecha a semana bem perto de 2x.",
        "groups": [
          {
            "name": "Peito",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Supino reto com barra",
                "scheme": "4×8–10",
                "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Supino inclinado com halteres",
                "scheme": "3×10–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "2×12",
                "target": "Inferior / miolo",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              }
            ]
          },
          {
            "name": "Ombro",
            "total": "6 séries diretas",
            "exercises": [
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "3×10",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              },
              {
                "name": "Elevação lateral",
                "scheme": "3×12–15",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Tríceps pulley com barra",
                "scheme": "3×10",
                "target": "Tríceps geral (cabeça lateral e medial) permitindo maior sobrecarga de peso.",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps na máquina articulada",
                  "Tríceps testa com barra W"
                ],
                "how": "Barra reta ou em V na polia alta. Pegada pronada. Cotovelos fixos ao lado das costelas. Empurre a barra para baixo até estender totalmente os cotovelos sem curvar os ombros para a frente."
              },
              {
                "name": "Tríceps testa",
                "scheme": "2×12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              }
            ]
          }
        ],
        "division": "Push",
        "muscles": "Peito + Ombros + Tríceps"
      },
      "ter": {
        "label": "Dia 2",
        "color": "ter",
        "title": "Pull — Costas + Ombro posterior + Bíceps",
        "note": "Também recebe reforço no Dia 4 — costas fica perto de 2x na semana.",
        "groups": [
          {
            "name": "Costas",
            "total": "12 séries",
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "4×10",
                "target": "Largura / dorsal",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Remada curvada",
                "scheme": "3×10",
                "target": "Espessura de costas: trapézio médio/inferior, romboides e dorsal geral.",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              },
              {
                "name": "Puxada alta com triângulo",
                "scheme": "3×11–12",
                "target": "Largura inferior",
                "alts": [
                  "Puxada alta neutra na máquina",
                  "Puxada alta aberta",
                  "Remada baixa com triângulo"
                ],
                "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "2×10",
                "target": "Romboides / trapézio",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              }
            ]
          },
          {
            "name": "Ombro posterior",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Crucifixo inverso",
                "scheme": "3×12",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina (Peck Deck inverso)",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia cruzada"
                ],
                "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "3×10",
                "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Rosca martelo",
                "scheme": "2×12",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          }
        ],
        "division": "Pull",
        "muscles": "Costas + Ombro posterior + Bíceps"
      },
      "qua": {
        "label": "Dia 3",
        "color": "qua",
        "title": "Pernas completas",
        "note": "Fica 1x mesmo — é a que mais pede recuperação, não compensa espremer 2x numa semana de 4 dias.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "4×8–10",
                "target": "Quadríceps geral",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "4×12",
                "target": "Quadríceps isolado",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Mesa flexora",
                "scheme": "3×10–12",
                "target": "Posterior de coxa",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              },
              {
                "name": "Stiff com halteres",
                "scheme": "3×10",
                "target": "Posterior, glúteo e lombar",
                "alts": [
                  "Stiff com barra",
                  "Levantamento terra romeno",
                  "Mesa flexora"
                ],
                "how": "Segure os halteres na frente das coxas. Coluna reta, peito estufado. Empurre o quadril para trás deixando os halteres descerem deslizando pelas pernas até a canela. Suba contraindo o glúteo."
              }
            ]
          },
          {
            "name": "Glúteos",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Hip thrust",
                "scheme": "3×10",
                "target": "Glúteo máximo com pico de tensão máxima no topo da extensão do quadril.",
                "alts": [
                  "Elevação pélvica na máquina articulada",
                  "Glúteo na polia baixa com caneleira",
                  "Stiff com barra"
                ],
                "how": "Apoie a parte superior das costas em um banco transversalmente. Barra acolchoada sobre o quadril. Pés na largura dos ombros. Empurre o quadril para cima até o tronco e coxas formarem uma linha horizontal reta, apertando o glúteo por 2 segundos."
              }
            ]
          },
          {
            "name": "Panturrilha e abdômen",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "3×15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              },
              {
                "name": "Abdominal na polia",
                "scheme": "3×15–20",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ],
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado."
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      },
      "qui": {
        "label": "Dia 4",
        "color": "qui",
        "title": "Upper manutenção — Peito + Costas + Ombro + Braço",
        "note": "O dia que salva a semana: passa rápido por tudo de novo, com volume baixo, só pra dar a 2ª frequência e não perder o ganho.",
        "groups": [
          {
            "name": "Peito + Costas",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Supino inclinado na máquina",
                "scheme": "3×10–12",
                "target": "Peitoral, manutenção",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Remada cavalinho",
                "scheme": "3×10",
                "target": "Costas, manutenção",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              }
            ]
          },
          {
            "name": "Ombro",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação lateral na polia",
                "scheme": "3×12–15",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na máquina",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Polia no ponto mais baixo ao lado ou atrás do corpo. Puxe o cabo suavemente cruzando o corpo até a linha do ombro. A polia garante tensão mecânica contínua mesmo na parte de baixo do movimento, onde o halter perde força."
              }
            ]
          },
          {
            "name": "Bíceps + Tríceps",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Rosca inclinada",
                "scheme": "2×10–12",
                "target": "Bíceps, manutenção",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Tríceps corda",
                "scheme": "2×10–15",
                "target": "Tríceps, manutenção",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ]
              }
            ]
          }
        ],
        "division": "Upper (Maintenance)",
        "muscles": "Peito + Costas + Ombro lateral + Bíceps + Tríceps"
      }
    },
    "division": "Push / Pull / Legs / Upper (Maintenance)",
    "divisionMuscles": "Peito + Ombros + Tríceps → Costas + Ombro posterior + Bíceps → Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen → Peito + Costas + Ombro lateral + Bíceps + Tríceps",
    "divisionDescription": "Push, Pull e Legs em dias dedicados (1x cada), mais um Upper de manutenção no 4º dia que dá a segunda passada em peito, costas, ombros e braços."
  },
  "fb": {
    "label": "Full Body A/B/C (3-5 Dias)",
    "desc": "Corpo todo estimulado em cada sessão. Máximo gasto calórico e alta queima metabólica.",
    "category": "ALT",
    "tags": [
      "ALTA FREQUÊNCIA",
      "GASTO CALÓRICO",
      "CORPO TODO"
    ],
    "meta": {
      "foco": "Corpo inteiro em cada sessão com alto gasto energético",
      "frequencia": "3 a 5 dias na semana",
      "estilo": "Full Body — alta frequência e queima metabólica",
      "fase": "Secagem e Alta Frequência"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Full Body A",
        "note": "Cada composto principal aparece 1x por dia (por isso o volume por músculo é baixo), mas a frequência sobe muito na semana — o oposto da lógica de split. Reuni os 4 compostos num grupo só pra ficar claro que são o corpo inteiro na mesma sessão, não peças soltas.",
        "groups": [
          {
            "name": "Compostos — corpo todo",
            "total": "13 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "4×6–10",
                "target": "Quadríceps geral / força",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Supino reto com barra",
                "scheme": "3×6–10",
                "target": "Peitoral médio, compound",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Remada curvada",
                "scheme": "3×6–10",
                "target": "Costas, espessura",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              },
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "3×8–12",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              }
            ]
          },
          {
            "name": "Panturrilha",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "3×12–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          }
        ],
        "division": "Full Body",
        "muscles": "Quadríceps + Peito + Costas + Ombros + Panturrilhas"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Full Body B",
        "note": "Muda o padrão principal de perna pra dobradiça de quadril (hip hinge) em vez de agachamento, e é o único dia que já entra com braço direto — como o resto da semana já dá bastante trabalho indireto de bíceps/tríceps via supino e puxada, esse toque direto é suficiente.",
        "groups": [
          {
            "name": "Compostos — corpo todo",
            "total": "13 séries",
            "exercises": [
              {
                "name": "Stiff",
                "scheme": "4×6–10",
                "target": "Posterior de coxa, glúteo e lombar",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              },
              {
                "name": "Puxada alta aberta",
                "scheme": "3×8–12",
                "target": "Largura / dorsal",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Supino inclinado com halteres",
                "scheme": "3×8–12",
                "target": "Peitoral superior, posição alongada",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Elevação lateral",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              }
            ]
          },
          {
            "name": "Braço",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "3×8–12",
                "target": "Bíceps, massa geral",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Tríceps corda",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              }
            ]
          }
        ],
        "division": "Full Body",
        "muscles": "Posteriores + Glúteos + Costas + Peito + Ombros + Bíceps + Tríceps"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Full Body C",
        "note": "Mais máquina e unilateral — dia pra poupar um pouco o sistema nervoso central dos dois compostos pesados livres de segunda e terça. Glúteo e abdômen entram aqui porque é o único dia sem outro exercício de perna competindo por energia.",
        "groups": [
          {
            "name": "Compostos — corpo todo",
            "total": "13 séries",
            "exercises": [
              {
                "name": "Leg press 45°",
                "scheme": "4×8–12",
                "target": "Quadríceps geral",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Puxada alta com triângulo",
                "scheme": "3×8–12",
                "target": "Costas, largura e maior amplitude",
                "alts": [
                  "Puxada alta neutra na máquina",
                  "Puxada alta aberta",
                  "Remada baixa com triângulo"
                ],
                "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar."
              },
              {
                "name": "Pec Deck",
                "scheme": "3×10–15",
                "target": "Peitoral geral com pico de contração guiado e estabilidade perfeita.",
                "alts": [
                  "Crossover na polia média",
                  "Crucifixo com halteres",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos."
              },
              {
                "name": "Crucifixo inverso",
                "scheme": "3×12–20",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina (Peck Deck inverso)",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia cruzada"
                ],
                "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle."
              }
            ]
          },
          {
            "name": "Glúteo e core",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Hip thrust",
                "scheme": "3×8–12",
                "target": "Glúteo máximo com pico de tensão máxima no topo da extensão do quadril.",
                "alts": [
                  "Elevação pélvica na máquina articulada",
                  "Glúteo na polia baixa com caneleira",
                  "Stiff com barra"
                ],
                "how": "Apoie a parte superior das costas em um banco transversalmente. Barra acolchoada sobre o quadril. Pés na largura dos ombros. Empurre o quadril para cima até o tronco e coxas formarem uma linha horizontal reta, apertando o glúteo por 2 segundos."
              },
              {
                "name": "Abdominal na polia",
                "scheme": "3×10–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ],
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado."
              }
            ]
          }
        ],
        "division": "Full Body",
        "muscles": "Quadríceps + Costas + Peito + Ombro posterior + Glúteos + Abdômen"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Full Body A2",
        "note": "Mesma função do dia A (quadríceps + peito + costas + ombro), exercícios diferentes — fecha peito inferior e costas detalhe, que não apareciam ainda na semana.",
        "groups": [
          {
            "name": "Compostos — corpo todo",
            "total": "13 séries",
            "exercises": [
              {
                "name": "Passada (afundo)",
                "scheme": "4×8–12",
                "target": "Quadríceps, unilateral",
                "alts": [
                  "Agachamento búlgaro no banco",
                  "Leg press unilateral",
                  "Cadeira extensora"
                ],
                "how": "Com halteres nas mãos, dê um passo à frente. Desça flexionando ambos os joelhos até o de trás quase tocar o chão (ambos a ~90°). Empurre com o calcanhar da perna da frente para avançar ou retornar."
              },
              {
                "name": "Supino declinado ou mergulho assistido",
                "scheme": "3×8–12",
                "target": "Peito, ênfase inferior",
                "alts": [
                  "Crossover na polia alta",
                  "Supino declinado com halteres",
                  "Mergulho livre nas paralelas"
                ],
                "how": "No Graviton ou declinado, mantenha os ombros deprimidos (longe das orelhas). Desça controlando o peso sem esticar demais a cápsula do ombro e suba empurrando com foco nas fibras inferiores do peito."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "3×8–12",
                "target": "Costas, romboides / trapézio médio",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              },
              {
                "name": "Desenvolvimento Arnold",
                "scheme": "3×8–12",
                "target": "Deltoide anterior, ângulo diferente de segunda",
                "alts": [
                  "Desenvolvimento com halteres",
                  "Desenvolvimento na máquina",
                  "Elevação lateral combinada com desenvolvimento"
                ],
                "how": "Inicie com os halteres na frente do queixo, palmas voltadas para você. Ao empurrar para cima, gire os punhos para fora de forma que as palmas fiquem para a frente no topo. Desfaça a rotação na descida controlada."
              }
            ]
          },
          {
            "name": "Panturrilha",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Panturrilha sentado",
                "scheme": "3×12–20",
                "target": "Sóleo, diferente do gastrocnêmio de segunda",
                "alts": [
                  "Panturrilha no leg press com joelhos flexionados",
                  "Panturrilha em pé na máquina",
                  "Panturrilha no Smith sentado com anilhas sob os pés"
                ],
                "how": "Sentado com joelhos a 90° e almofada sobre as coxas. Por estar com os joelhos dobrados, o gastrocnêmio fica encurtado e o sóleo assume quase todo o trabalho. Movimento lento: 2s subindo, 2s no pico e 3s descendo."
              }
            ]
          }
        ],
        "division": "Full Body",
        "muscles": "Quadríceps + Peito + Costas + Ombros + Panturrilhas"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Full Body B2",
        "note": "Mesma função do dia B (hip hinge + costas + peito + ombro + braço), exercícios diferentes — fecha braquial e cabeça longa de tríceps, que ainda não tinham aparecido na semana.",
        "groups": [
          {
            "name": "Compostos — corpo todo",
            "total": "13 séries",
            "exercises": [
              {
                "name": "Levantamento terra romeno com barra",
                "scheme": "4×6–10",
                "target": "Posterior de coxa, glúteo, ângulo diferente do stiff",
                "alts": [
                  "Stiff com barra",
                  "Stiff com halteres",
                  "Mesa flexora"
                ],
                "how": "Similar ao stiff, mas com flexão de joelho um pouco mais acentuada permitindo mais sobrecarga. Inicie do topo, desça raspando a barra nas coxas até abaixo dos joelhos e suba estendendo o quadril com força."
              },
              {
                "name": "Pulldown unilateral na polia",
                "scheme": "3×10–15",
                "target": "Costas, dorsal / controle, unilateral",
                "alts": [
                  "Pulldown unilateral na máquina articulada",
                  "Pullover na polia alta com corda",
                  "Remada serrote com halter"
                ],
                "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo."
              },
              {
                "name": "Crossover na polia baixa",
                "scheme": "3×10–15",
                "target": "Peito, superior, ângulo diferente do supino",
                "alts": [
                  "Crucifixo inclinado com halteres",
                  "Crucifixo inclinado na polia",
                  "Supino inclinado articulado (Máquina)"
                ],
                "how": "Polias na base inferior. Puxe em arco de baixo para cima cruzando suavemente as mãos na linha do peito alto. Mantenha os ombros abaixados e trave a flexão de cotovelo constante durante todo o percurso."
              },
              {
                "name": "Elevação lateral na polia",
                "scheme": "3×12–20",
                "target": "Deltoide lateral, ângulo diferente de terça",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na máquina",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Polia no ponto mais baixo ao lado ou atrás do corpo. Puxe o cabo suavemente cruzando o corpo até a linha do ombro. A polia garante tensão mecânica contínua mesmo na parte de baixo do movimento, onde o halter perde força."
              }
            ]
          },
          {
            "name": "Braço",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Rosca martelo",
                "scheme": "3×10–15",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              },
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ]
              }
            ]
          }
        ],
        "division": "Full Body",
        "muscles": "Posteriores + Glúteos + Costas + Peito + Ombro lateral + Bíceps + Tríceps"
      }
    },
    "division": "Full Body",
    "divisionMuscles": "Corpo todo em cada dia: pernas (quadríceps ou posteriores) + peito + costas + ombros, com braços, glúteos, panturrilhas ou abdômen conforme o dia",
    "divisionDescription": "Full Body: toda sessão tem compostos para pernas, peito, costas e ombros, com poucas séries por músculo. O padrão principal muda entre os dias (A: agachamento, B: dobradiça de quadril, C: máquinas e unilateral) e a semana fecha repetindo A e B com exercícios diferentes."
  },
  "abc": {
    "label": "ABC Clássico (5 Dias)",
    "desc": "A famosa divisão clássica de academia: Peito/Tríceps (A), Costas/Bíceps (B) e Pernas/Ombros (C).",
    "category": "ALT",
    "tags": [
      "TRADICIONAL",
      "ACADEMIA",
      "CLÁSSICO"
    ],
    "meta": {
      "foco": "Peito+Tríceps / Costas+Bíceps / Perna+Ombro",
      "frequencia": "5 dias, A e B 2x / C 1x",
      "estilo": "Divisão clássica de academia, intuitiva e direta",
      "fase": "Hipertrofia Geral Tradicional"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "A — Peito + Tríceps",
        "note": "O ABC clássico: 3 dias fixos que se repetem — A e B aparecem 2x na semana, C 1x. Na semana seguinte, comece por C pra ele também pegar a frequência dupla.",
        "groups": [
          {
            "name": "Peito",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Supino reto com barra",
                "scheme": "4×6–10",
                "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Supino inclinado com halteres",
                "scheme": "3×8–12",
                "target": "Peitoral superior, posição alongada",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "2×10–15",
                "target": "Ênfase inferior",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa, alongamento",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps corda",
                "scheme": "3×10–15",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              }
            ]
          }
        ],
        "division": "Chest + Triceps",
        "muscles": "Peito + Tríceps"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "B — Costas + Bíceps",
        "note": "Puxada + remada pra largura e espessura, bíceps fechando como auxiliar natural de tudo que já foi puxado.",
        "groups": [
          {
            "name": "Costas",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "4×6–10",
                "target": "Largura / dorsal",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Remada curvada",
                "scheme": "3×6–10",
                "target": "Espessura de costas: trapézio médio/inferior, romboides e dorsal geral.",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              },
              {
                "name": "Puxada alta com triângulo",
                "scheme": "3×8–12",
                "target": "Largura, maior amplitude",
                "alts": [
                  "Puxada alta neutra na máquina",
                  "Puxada alta aberta",
                  "Remada baixa com triângulo"
                ],
                "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "3×6–10",
                "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Rosca martelo",
                "scheme": "2×10–15",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          }
        ],
        "division": "Back + Biceps",
        "muscles": "Costas + Bíceps"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "C — Pernas + Ombro",
        "note": "O dia mais pesado do ABC, junta perna completa com ombro — clássico, mas exige disposição. Só acontece 1x nessa semana; troque a ordem na próxima pra ele também repetir.",
        "groups": [
          {
            "name": "Pernas",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "4×6–10",
                "target": "Quadríceps geral / força",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Leg press 45°",
                "scheme": "3×8–12",
                "target": "Quadríceps geral",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Stiff",
                "scheme": "2×8–12",
                "target": "Posterior de coxa, glúteo e lombar",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              }
            ]
          },
          {
            "name": "Ombro",
            "total": "6 séries diretas",
            "exercises": [
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "3×8–12",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              },
              {
                "name": "Elevação lateral",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              }
            ]
          },
          {
            "name": "Panturrilha",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "3×12–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ]
              }
            ]
          }
        ],
        "division": "Legs + Shoulders",
        "muscles": "Quadríceps + Posteriores + Panturrilhas + Ombros"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "A2 — Peito + Tríceps",
        "note": "Mesmo agrupamento de segunda, exercícios e equipamentos diferentes — sem repetir movimento na semana.",
        "groups": [
          {
            "name": "Peito",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Supino inclinado na máquina",
                "scheme": "3×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Supino declinado ou mergulho assistido",
                "scheme": "3×8–12",
                "target": "Ênfase inferior",
                "alts": [
                  "Crossover na polia alta",
                  "Supino declinado com halteres",
                  "Mergulho livre nas paralelas"
                ],
                "how": "No Graviton ou declinado, mantenha os ombros deprimidos (longe das orelhas). Desça controlando o peso sem esticar demais a cápsula do ombro e suba empurrando com foco nas fibras inferiores do peito."
              },
              {
                "name": "Pec Deck",
                "scheme": "2×10–15",
                "target": "Peitoral geral com pico de contração guiado e estabilidade perfeita.",
                "alts": [
                  "Crossover na polia média",
                  "Crucifixo com halteres",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Tríceps francês",
                "scheme": "3×8–12",
                "target": "Cabeça longa, ângulo diferente da testa",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              },
              {
                "name": "Tríceps unilateral na polia",
                "scheme": "3×10–15",
                "target": "Lateral / medial, unilateral",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps francês unilateral",
                  "Tríceps coice com halter"
                ],
                "how": "Pegador individual na polia alta. Cotovelo firme ao lado do tronco. Estenda o antebraço até travar a contração do tríceps, sinta o pico de tensão e retorne controlado."
              }
            ]
          }
        ],
        "division": "Chest + Triceps",
        "muscles": "Peito + Tríceps"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "B2 — Costas + Bíceps",
        "note": "Fecha a semana com o mesmo agrupamento de terça, exercícios diferentes — peito e costas terminam a semana em 2x, perna e ombro em 1x (característica do ABC clássico).",
        "groups": [
          {
            "name": "Costas",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Remada cavalinho",
                "scheme": "3×6–10",
                "target": "Espessura, ângulo diferente da remada curvada",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Pulldown unilateral na polia",
                "scheme": "3×10–15",
                "target": "Dorsal / controle, unilateral",
                "alts": [
                  "Pulldown unilateral na máquina articulada",
                  "Pullover na polia alta com corda",
                  "Remada serrote com halter"
                ],
                "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "2×10–15",
                "target": "Romboides / trapézio médio",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Rosca Scott",
                "scheme": "3×8–12",
                "target": "Cabeça curta do bíceps com pico de contração e isolamento estrito sem roubo corporal.",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Rosca inclinada",
                "scheme": "2×10–15",
                "target": "Cabeça longa, posição alongada",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Back + Biceps",
        "muscles": "Costas + Bíceps"
      }
    },
    "division": "Chest + Triceps / Back + Biceps / Legs + Shoulders",
    "divisionMuscles": "Peito + Tríceps → Costas + Bíceps → Quadríceps + Posteriores + Panturrilhas + Ombros",
    "divisionDescription": "ABC clássico: A = peito + tríceps, B = costas + bíceps, C = pernas + ombros. A e B se repetem 2x na semana (A2 e B2 com exercícios diferentes); C aparece 1x."
  },
  "pplul": {
    "label": "PPL + UL (5 Dias)",
    "desc": "5 dias — Push/Pull/Legs nos 3 primeiros dias e Upper/Lower nos 2 últimos. Estrutura balanceada e consagrada.",
    "category": "A",
    "tags": [
      "HIPERTROFIA",
      "5 DIAS",
      "PPL+UL",
      "PADRÃO OURO"
    ],
    "meta": {
      "foco": "Push/Pull/Legs + Upper/Lower",
      "frequencia": "5 dias, cada grupo 2x",
      "estilo": "PPL dedicado + Upper/Lower como 2ª passada",
      "fase": "Hipertrofia Geral Balanceada"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Push — Peito + Ombro + Tríceps",
        "note": "Dia dedicado de verdade — peito, ombro e tríceps não dividem espaço com mais nada, então o volume aqui é alto (parecido com o Plano B). Quinta (Upper) é que vai passar de novo por tudo isso com volume mais leve.",
        "groups": [
          {
            "name": "Peito",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Supino reto com barra",
                "scheme": "4×6–10",
                "target": "Peitoral médio, compound",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Supino inclinado com halteres",
                "scheme": "3×8–12",
                "target": "Peitoral superior, posição alongada",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "2×10–15",
                "target": "Ênfase inferior",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              }
            ]
          },
          {
            "name": "Ombro",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Desenvolvimento militar com barra",
                "scheme": "3×6–10",
                "target": "Deltoide anterior, compound",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento com halteres",
                  "Desenvolvimento Arnold"
                ],
                "how": "Postura sólida, core contraído. Empurre a barra verticalmente até estender os braços alinhados com as orelhas. Retorne em 3 segundos controlados sem despencar o peso sobre as clavículas."
              },
              {
                "name": "Elevação lateral na polia",
                "scheme": "4×12–20",
                "target": "Deltoide lateral",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na máquina",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Polia no ponto mais baixo ao lado ou atrás do corpo. Puxe o cabo suavemente cruzando o corpo até a linha do ombro. A polia garante tensão mecânica contínua mesmo na parte de baixo do movimento, onde o halter perde força."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Tríceps pulley com barra",
                "scheme": "3×8–12",
                "target": "Lateral / medial",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps na máquina articulada",
                  "Tríceps testa com barra W"
                ],
                "how": "Barra reta ou em V na polia alta. Pegada pronada. Cotovelos fixos ao lado das costelas. Empurre a barra para baixo até estender totalmente os cotovelos sem curvar os ombros para a frente."
              },
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa, alongamento",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              }
            ]
          }
        ],
        "division": "Push",
        "muscles": "Peito + Ombros + Tríceps"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Pull — Costas + Bíceps",
        "note": "Também dia dedicado — costas com largura, espessura e detalhe no mesmo treino, bíceps com dois ângulos diferentes.",
        "groups": [
          {
            "name": "Costas",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "4×6–10",
                "target": "Largura / dorsal",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Remada cavalinho",
                "scheme": "3×6–10",
                "target": "Espessura dorsal e romboides com maior estabilidade do que a remada livre.",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Puxada alta com triângulo",
                "scheme": "3×8–12",
                "target": "Largura, maior amplitude",
                "alts": [
                  "Puxada alta neutra na máquina",
                  "Puxada alta aberta",
                  "Remada baixa com triângulo"
                ],
                "how": "Instale o triângulo na puxada alta. Segure na pegada neutra. Puxe levando o triângulo ao peito e jogando os cotovelos colados ao tronco. Mantenha o peito aberto e não balance a lombar para puxar."
              }
            ]
          },
          {
            "name": "Ombro posterior",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Crucifixo inverso",
                "scheme": "3×12–20",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina (Peck Deck inverso)",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia cruzada"
                ],
                "how": "Tronco inclinado a ~45° ou deitado de bruços no banco inclinado. Com cotovelos semi-flexionados, abra os braços para os lados focando em contrair a parte de trás do ombro, e não apenas espremer as escápulas. Desça com controle."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Rosca inclinada",
                "scheme": "3×8–12",
                "target": "Cabeça longa, posição alongada",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Rosca direta W",
                "scheme": "2×8–12",
                "target": "Bíceps, massa geral",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              }
            ]
          }
        ],
        "division": "Pull",
        "muscles": "Costas + Ombro posterior + Bíceps"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Legs — Pernas completas",
        "note": "Dia de perna completo, igual à lógica dos outros planos. Sexta (Lower) fecha a 2ª frequência com ênfase diferente.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "4×6–10",
                "target": "Quadríceps geral / força",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "3×10–15",
                "target": "Quadríceps, definição",
                "advanced": "🔥 Pico de contração",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Stiff",
                "scheme": "3×6–10",
                "target": "Posterior de coxa, glúteo e lombar",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              }
            ]
          },
          {
            "name": "Glúteo e panturrilha",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Hip thrust",
                "scheme": "3×8–12",
                "target": "Glúteo máximo com pico de tensão máxima no topo da extensão do quadril.",
                "alts": [
                  "Elevação pélvica na máquina articulada",
                  "Glúteo na polia baixa com caneleira",
                  "Stiff com barra"
                ],
                "how": "Apoie a parte superior das costas em um banco transversalmente. Barra acolchoada sobre o quadril. Pés na largura dos ombros. Empurre o quadril para cima até o tronco e coxas formarem uma linha horizontal reta, apertando o glúteo por 2 segundos."
              },
              {
                "name": "Panturrilha em pé",
                "scheme": "3×12–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ]
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Upper — Peito + Costas + Ombro + Braço",
        "note": "Aqui sim o volume é mais leve por músculo — essa sessão só existe pra dar a 2ª frequência da semana pra tudo que já foi trabalhado com volume alto em Push/Pull, com ângulos diferentes.",
        "groups": [
          {
            "name": "Peito",
            "total": "5 séries",
            "split": [
              [
                "Superior",
                "seg",
                60
              ],
              [
                "Inferior",
                "qua",
                40
              ]
            ],
            "exercises": [
              {
                "name": "Supino inclinado na máquina",
                "scheme": "3×8–12",
                "target": "Peitoral superior, ângulo diferente da segunda",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Supino declinado ou mergulho assistido",
                "scheme": "2×10–15",
                "target": "Ênfase inferior, ângulo diferente da segunda",
                "alts": [
                  "Crossover na polia alta",
                  "Supino declinado com halteres",
                  "Mergulho livre nas paralelas"
                ],
                "how": "No Graviton ou declinado, mantenha os ombros deprimidos (longe das orelhas). Desça controlando o peso sem esticar demais a cápsula do ombro e suba empurrando com foco nas fibras inferiores do peito."
              }
            ]
          },
          {
            "name": "Costas + Ombro + Braço",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Remada baixa com triângulo",
                "scheme": "3×8–12",
                "target": "Romboides / trapézio médio",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              },
              {
                "name": "Elevação lateral com halteres",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina articulada",
                  "Elevação lateral na polia baixa (cabo)",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Em pé ou sentado com leve inclinação do tronco à frente (10°). Halteres ao lado das coxas, cotovelos levemente destravados. Eleve os braços liderando pelo cotovelo (como se estivesse despejando uma jarra) até a altura dos ombros. Desça em 3s sem balançar o corpo."
              },
              {
                "name": "Rosca Scott",
                "scheme": "2×8–12",
                "target": "Bíceps, cabeça curta",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Tríceps francês",
                "scheme": "2×10–15",
                "target": "Tríceps, cabeça longa, alongamento",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              }
            ]
          }
        ],
        "division": "Upper",
        "muscles": "Peito + Costas + Ombro lateral + Bíceps + Tríceps"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Lower — Pernas, ênfase diferente",
        "note": "Fecha perna em 2x na semana — foco em posterior/glúteo médio e unilateral, complementando o quadríceps pesado de quarta. Volume mais leve, igual ao Upper.",
        "groups": [
          {
            "name": "Posterior e quadríceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Mesa flexora",
                "scheme": "3×8–12",
                "target": "Posterior de coxa",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              },
              {
                "name": "Leg press 45°",
                "scheme": "3×8–12",
                "target": "Quadríceps geral",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              }
            ]
          },
          {
            "name": "Glúteo e panturrilha",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Cadeira abdutora",
                "scheme": "2×12–15",
                "target": "Glúteo médio, diferente do hip thrust",
                "alts": [
                  "Abdução na polia baixa com caneleira",
                  "Elevação pélvica (Hip thrust)",
                  "Passada lateral com elástico (Miniband)"
                ],
                "how": "Sentado ereto ou levemente inclinado à frente. Afaste as pernas empurrando com a lateral dos joelhos contra as almofadas. Segure 2 segundos na abertura máxima e controle o retorno sem deixar as placas baterem."
              },
              {
                "name": "Panturrilha sentado",
                "scheme": "3×12–20",
                "target": "Sóleo, diferente da panturrilha em pé de quarta",
                "alts": [
                  "Panturrilha no leg press com joelhos flexionados",
                  "Panturrilha em pé na máquina",
                  "Panturrilha no Smith sentado com anilhas sob os pés"
                ],
                "how": "Sentado com joelhos a 90° e almofada sobre as coxas. Por estar com os joelhos dobrados, o gastrocnêmio fica encurtado e o sóleo assume quase todo o trabalho. Movimento lento: 2s subindo, 2s no pico e 3s descendo."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Lower",
        "muscles": "Posteriores + Quadríceps + Glúteos + Panturrilhas"
      }
    },
    "division": "Push / Pull / Legs / Upper / Lower",
    "divisionMuscles": "Peito + Ombros + Tríceps → Costas + Ombro posterior + Bíceps → Quadríceps + Posteriores + Glúteos + Panturrilhas → Peito + Costas + Ombro lateral + Bíceps + Tríceps → Posteriores + Quadríceps + Glúteos + Panturrilhas",
    "divisionDescription": "Push / Pull / Legs dedicados de segunda a quarta, seguidos de Upper e Lower na quinta e sexta, que funcionam como uma segunda passada mais leve em cada grupo."
  },
  "vtap": {
    "label": "🔻 V-Taper Extremo (5 Dias)",
    "desc": "5 dias — Especialização máxima em costas largas e ombros 3D, com peito e braços de suporte.",
    "category": "ALT",
    "tags": [
      "V-TAPER",
      "COSTAS & OMBROS",
      "SILHUETA EM V"
    ],
    "meta": {
      "foco": "Costas (largura + espessura) + deltoides",
      "frequencia": "Costas 2x / ombros 3x / pernas 1x",
      "estilo": "Especialização estética com peito e braços de suporte",
      "fase": "Foco em Silhueta V-Taper"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "V-Taper A — Costas + Ombros + Bíceps",
        "note": "Abertura da semana com prioridade em costas e ombros. O objetivo é testar uma distribuição com bastante atenção à largura do tronco sem abandonar braços.",
        "groups": [
          {
            "name": "Costas",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Puxada alta neutra",
                "scheme": "3×6–10",
                "target": "Dorsais / puxada vertical",
                "alts": [
                  "Puxada articulada neutra (Máquina)",
                  "Puxada alta aberta",
                  "Pulldown na polia"
                ],
                "how": "Com pegador duplo ou barra romana, puxe guiando os cotovelos direto para baixo ao lado das costelas. Aperte as costas no final e retorne em 3 segundos sentindo o alongamento do dorsal sob carga."
              },
              {
                "name": "Remada unilateral com halter (serrote)",
                "scheme": "3×8–12",
                "target": "Dorsal + espessura, unilateral",
                "alts": [
                  "Remada unilateral na máquina articulada",
                  "Remada unilateral na polia baixa",
                  "Remada baixa com triângulo"
                ],
                "how": "Apoie um joelho e uma mão no banco reto. Segure o halter com o braço estendido. Puxe o peso em direção ao quadril (não para o peito) levando o cotovelo para trás e para cima. Desça alongando completamente a dorsal."
              },
              {
                "name": "Pulldown unilateral na polia",
                "scheme": "2×10–15",
                "target": "Dorsal / controle",
                "alts": [
                  "Pulldown unilateral na máquina articulada",
                  "Pullover na polia alta com corda",
                  "Remada serrote com halter"
                ],
                "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "2×10–15",
                "target": "Região média das costas",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              }
            ]
          },
          {
            "name": "Ombros",
            "total": "5 séries diretas",
            "exercises": [
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "2×6–10",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              },
              {
                "name": "Elevação lateral na polia",
                "scheme": "2×12–20",
                "target": "Deltoide lateral",
                "advanced": "🔥 Drop-set na última",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na máquina",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Polia no ponto mais baixo ao lado ou atrás do corpo. Puxe o cabo suavemente cruzando o corpo até a linha do ombro. A polia garante tensão mecânica contínua mesmo na parte de baixo do movimento, onde o halter perde força."
              },
              {
                "name": "Crucifixo inverso na máquina",
                "scheme": "2×12–20",
                "target": "Deltoide posterior",
                "advanced": "🔥 Rest-pause",
                "alts": [
                  "Crucifixo inverso com halteres no banco inclinado",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia"
                ],
                "how": "Sente de frente para o Peck Deck com o peito apoiado no encosto. Segure as manoplas na altura dos ombros. Abra os braços levando os cotovelos para trás até a linha do tronco, segure 1s e controle a volta."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Rosca inclinada",
                "scheme": "2×8–12",
                "target": "Bíceps em posição alongada",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Rosca martelo",
                "scheme": "2×10–15",
                "target": "Braquial / braquiorradial",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          }
        ],
        "division": "Back + Shoulders + Biceps",
        "muscles": "Costas + Ombros + Bíceps"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Peito + Tríceps",
        "note": "Peito entra com volume suficiente para evolução enquanto o plano mantém a prioridade estratégica em costas e ombros.",
        "groups": [
          {
            "name": "Peito",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Supino inclinado com halteres",
                "scheme": "3×6–10",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Supino reto com barra",
                "scheme": "2×6–10",
                "target": "Peitoral geral / empurrada horizontal",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Pec Deck",
                "scheme": "2×10–15",
                "target": "Peitoral / isolamento",
                "advanced": "🔥 Rest-pause na última",
                "alts": [
                  "Crossover na polia média",
                  "Crucifixo com halteres",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Tríceps testa",
                "scheme": "2×8–12",
                "target": "Tríceps, posição alongada",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps corda",
                "scheme": "2×10–15",
                "target": "Extensão na polia",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              }
            ]
          }
        ],
        "division": "Chest + Triceps",
        "muscles": "Peito + Tríceps"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Pernas completas",
        "note": "Único dia de pernas desta estratégia. Mantém o restante da semana dedicado ao superior.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "3×6–10",
                "target": "Quadríceps / padrão de agachamento",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Leg press 45°",
                "scheme": "3×8–12",
                "target": "Quadríceps geral",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "2×10–15",
                "target": "Isolamento do reto femoral e vastos do quadríceps — definição e queimação pura.",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior + glúteos",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Stiff",
                "scheme": "3×8–12",
                "target": "Posterior de coxa + glúteos",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              },
              {
                "name": "Mesa flexora",
                "scheme": "3×8–12",
                "target": "Posterior de coxa",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              }
            ]
          },
          {
            "name": "Panturrilhas",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "4×10–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ]
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Costas + Peito superior + Ombros",
        "note": "Segundo toque do superior: costas e deltoides voltam com exercícios diferentes; peito recebe uma ênfase maior na região superior.",
        "groups": [
          {
            "name": "Costas",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "2×8–12",
                "target": "Dorsais / puxada vertical",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Remada cavalinho",
                "scheme": "3×6–10",
                "target": "Espessura das costas",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Pullover na polia",
                "scheme": "2×10–15",
                "target": "Dorsal / extensão de ombro",
                "alts": [
                  "Pullover com halter no banco reto",
                  "Pulldown unilateral na polia",
                  "Puxada articulada na máquina"
                ],
                "how": "Em pé com afastamento da polia alta, barra reta ou corda. Tronco inclinado a 45°, braços semi-estendidos. Puxe a barra num arco amplo até encostar nas coxas sem dobrar os cotovelos. Segure 1s contraindo as asas das costas."
              }
            ]
          },
          {
            "name": "Peito superior",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Supino inclinado na máquina",
                "scheme": "2×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Crossover na polia baixa",
                "scheme": "2×10–15",
                "target": "Peitoral / trajetória de baixo para cima",
                "alts": [
                  "Crucifixo inclinado com halteres",
                  "Crucifixo inclinado na polia",
                  "Supino inclinado articulado (Máquina)"
                ],
                "how": "Polias na base inferior. Puxe em arco de baixo para cima cruzando suavemente as mãos na linha do peito alto. Mantenha os ombros abaixados e trave a flexão de cotovelo constante durante todo o percurso."
              }
            ]
          },
          {
            "name": "Ombros",
            "total": "4 séries diretas",
            "exercises": [
              {
                "name": "Elevação lateral na máquina",
                "scheme": "2×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Ajuste a altura do banco para que o eixo da máquina coincida com as articulações dos ombros. Apoie os antebraços nas almofadas e empurre para cima usando apenas os deltoides laterais. Segure 1 segundo no topo."
              },
              {
                "name": "Face pull na polia",
                "scheme": "2×12–20",
                "target": "Deltoide posterior / cintura escapular",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Remada alta aberta na polia"
                ],
                "how": "Mesma execução: puxe a corda em direção ao nariz/olhos abrindo os cotovelos altos e girando as mãos para trás, ativando deltoide posterior e rotadores externos."
              }
            ]
          }
        ],
        "division": "Back + Upper Chest + Shoulders",
        "muscles": "Costas + Peito superior + Ombros"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Braços + Ombros",
        "note": "Fechamento com foco no superior sem repetir exatamente os exercícios dos primeiros dias.",
        "groups": [
          {
            "name": "Bíceps",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Rosca Scott",
                "scheme": "2×8–12",
                "target": "Bíceps / estabilidade",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Rosca martelo cross-body",
                "scheme": "2×10–15",
                "target": "Braquial / braquiorradial",
                "alts": [
                  "Rosca martelo com halteres tradicional",
                  "Rosca martelo na polia com corda",
                  "Rosca inversa com barra W"
                ],
                "how": "Com pegada neutra, puxe o halter em direção ao ombro oposto mantendo o movimento rente ao peito. Essa trajetória foca diretamente no braquial e no relevo lateral do braço."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Tríceps francês",
                "scheme": "2×8–12",
                "target": "Tríceps / posição acima da cabeça",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              },
              {
                "name": "Tríceps unilateral na polia",
                "scheme": "2×10–15",
                "target": "Extensão unilateral",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps francês unilateral",
                  "Tríceps coice com halter"
                ],
                "how": "Pegador individual na polia alta. Cotovelo firme ao lado do tronco. Estenda o antebraço até travar a contração do tríceps, sinta o pico de tensão e retorne controlado."
              }
            ]
          },
          {
            "name": "Ombros",
            "total": "6 séries diretas",
            "exercises": [
              {
                "name": "Elevação lateral com halteres",
                "scheme": "2×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina articulada",
                  "Elevação lateral na polia baixa (cabo)",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Em pé ou sentado com leve inclinação do tronco à frente (10°). Halteres ao lado das coxas, cotovelos levemente destravados. Eleve os braços liderando pelo cotovelo (como se estivesse despejando uma jarra) até a altura dos ombros. Desça em 3s sem balançar o corpo."
              },
              {
                "name": "Crucifixo inverso no banco inclinado",
                "scheme": "2×12–20",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Face pull na polia com corda",
                  "Crucifixo inverso com halteres em pé"
                ],
                "how": "Deite de bruços no banco a 30°-45°. Halteres pendendo. Abra os braços na linha dos ombros focando na parte traseira do deltoide. Retorne em 3 segundos sem dar tranco no início."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Arms + Shoulders",
        "muscles": "Bíceps + Tríceps + Ombros"
      }
    },
    "division": "Back + Shoulders + Biceps / Chest + Triceps / Legs / Back + Upper Chest + Shoulders / Arms + Shoulders",
    "divisionMuscles": "Costas + Ombros + Bíceps → Peito + Tríceps → Quadríceps + Posteriores + Glúteos + Panturrilhas → Costas + Peito superior + Ombros → Bíceps + Tríceps + Ombros",
    "divisionDescription": "V-Taper: costas e ombros são a prioridade (largura das costas e deltoides), com peito e braços como suporte e um único dia de pernas. Costas aparecem 2x e ombros 3x na semana."
  },
  "chestsup": {
    "label": "⬆️ Peito Superior",
    "desc": "Especialização de peitoral superior, pernas 1x",
    "category": "C",
    "tags": [
      "PEITO",
      "ESPECIALIZACAO",
      "PERNAS 1X"
    ],
    "meta": {
      "foco": "Peitoral superior",
      "frequencia": "Peito 2x / superior 2x / pernas 1x",
      "estilo": "Inclinações + cabos + estabilidade",
      "fase": "Especialização"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Peito superior + Ombros + Tríceps",
        "note": "O peitoral superior é colocado primeiro, quando a fadiga é menor.",
        "groups": [
          {
            "name": "Peito superior",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Supino inclinado com halteres",
                "scheme": "4×6–10",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Supino inclinado na máquina",
                "scheme": "3×8–12",
                "target": "Peitoral superior / estabilidade",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Crossover na polia baixa",
                "scheme": "3×10–15",
                "target": "Peitoral / trajetória ascendente",
                "alts": [
                  "Crucifixo inclinado com halteres",
                  "Crucifixo inclinado na polia",
                  "Supino inclinado articulado (Máquina)"
                ],
                "how": "Polias na base inferior. Puxe em arco de baixo para cima cruzando suavemente as mãos na linha do peito alto. Mantenha os ombros abaixados e trave a flexão de cotovelo constante durante todo o percurso."
              }
            ]
          },
          {
            "name": "Ombros",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Desenvolvimento na máquina",
                "scheme": "3×8–12",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento com halteres",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento militar com barra"
                ],
                "how": "Ajuste o banco para que as manoplas comecem na altura dos ombros. Apoie totalmente a coluna e cabeça. Empurre para cima com controle e segure a volta em 2 a 3 segundos sem deixar o bloco de peso tocar."
              },
              {
                "name": "Elevação lateral",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps corda",
                "scheme": "3×10–15",
                "target": "Tríceps na polia",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              }
            ]
          }
        ],
        "division": "Upper Chest + Shoulders + Triceps",
        "muscles": "Peito superior + Ombros + Tríceps"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Costas + Bíceps",
        "note": "Costas recebem trabalho completo para manter equilíbrio enquanto o peito é priorizado.",
        "groups": [
          {
            "name": "Costas",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "4×6–10",
                "target": "Grande dorsal e redondo maior (largura de costas) — pilar fundamental do formato V-Taper.",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Remada curvada",
                "scheme": "3×6–10",
                "target": "Espessura de costas: trapézio médio/inferior, romboides e dorsal geral.",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "3×10–15",
                "target": "Dorsais mediais, trapézio e romboides com trajetória horizontal protegida.",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "3×6–10",
                "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Rosca martelo",
                "scheme": "2×10–15",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          }
        ],
        "division": "Back + Biceps",
        "muscles": "Costas + Bíceps"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Pernas completas",
        "note": "Um único dia de pernas na estratégia.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "3×6–10",
                "target": "Quadríceps / agachamento",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Leg press 45°",
                "scheme": "3×8–12",
                "target": "Quadríceps geral, glúteos e adutores com segurança máxima para a coluna lombar.",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "2×10–15",
                "target": "Isolamento do reto femoral e vastos do quadríceps — definição e queimação pura.",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Stiff",
                "scheme": "3×8–12",
                "target": "Posterior + glúteos",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              },
              {
                "name": "Mesa flexora",
                "scheme": "3×8–12",
                "target": "Isolamento dos isquiotibiais (bíceps femoral, semitendíneo) em posição deitada.",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              }
            ]
          },
          {
            "name": "Panturrilhas",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha sentado",
                "scheme": "4×12–20",
                "target": "Músculo sóleo (músculo profundo da panturrilha que dá espessura e largura à perna).",
                "alts": [
                  "Panturrilha no leg press com joelhos flexionados",
                  "Panturrilha em pé na máquina",
                  "Panturrilha no Smith sentado com anilhas sob os pés"
                ],
                "how": "Sentado com joelhos a 90° e almofada sobre as coxas. Por estar com os joelhos dobrados, o gastrocnêmio fica encurtado e o sóleo assume quase todo o trabalho. Movimento lento: 2s subindo, 2s no pico e 3s descendo."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ]
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Peito superior + Costas",
        "note": "Segundo estímulo do peito, com exercícios diferentes da segunda.",
        "groups": [
          {
            "name": "Peito superior",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Supino inclinado no Smith",
                "scheme": "3×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado articulado (Máquina)",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Posicione o banco a 30° centralizado sob a barra do Smith. Desça a barra até cerca de 2 dedos acima da clavícula. Mantenha os cotovelos sob os punhos e empurre com os calcanhares das mãos focando na contração da parte alta do peito."
              },
              {
                "name": "Crucifixo inclinado com halteres",
                "scheme": "2×10–15",
                "target": "Peitoral superior / isolamento",
                "alts": [
                  "Crossover na polia baixa (de baixo pra cima)",
                  "Pec Deck com assento rebaixado",
                  "Crucifixo inclinado na polia"
                ],
                "how": "Banco a 30°-45°. Com cotovelos semi-flexionados fixos, abra os braços para os lados sentindo a tração nas fibras superiores do peitoral. Retorne fechando o arco em direção ao topo da cabeça/olhos sem bater os halteres."
              },
              {
                "name": "Supino reto com halteres",
                "scheme": "3×8–12",
                "target": "Peitoral geral com maior amplitude de movimento e trabalho equilibrado entre os dois lados.",
                "alts": [
                  "Supino reto com barra",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Deite com os halteres alinhados ao peito. Desça abrindo os braços com cotovelos em 45°-60° até os halteres ficarem na altura do tórax. Suba empurrando com foco em aproximar os bíceps um do outro, gerando pico de contração no topo."
              }
            ]
          },
          {
            "name": "Costas",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Pulldown unilateral na polia",
                "scheme": "3×10–15",
                "target": "Isolamento unilateral da grande dorsal — ativação pura sem fadiga de antebraço/bíceps.",
                "alts": [
                  "Pulldown unilateral na máquina articulada",
                  "Pullover na polia alta com corda",
                  "Remada serrote com halter"
                ],
                "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo."
              },
              {
                "name": "Remada cavalinho",
                "scheme": "2×8–12",
                "target": "Espessura dorsal e romboides com maior estabilidade do que a remada livre.",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Face pull na polia",
                "scheme": "2×12–20",
                "target": "Posterior / cintura escapular",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Remada alta aberta na polia"
                ],
                "how": "Mesma execução: puxe a corda em direção ao nariz/olhos abrindo os cotovelos altos e girando as mãos para trás, ativando deltoide posterior e rotadores externos."
              }
            ]
          }
        ],
        "division": "Upper Chest + Back",
        "muscles": "Peito superior + Costas"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Ombros + Braços",
        "note": "Volume de suporte para fechar a semana sem transformar a especialização em excesso de peito.",
        "groups": [
          {
            "name": "Ombros",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Desenvolvimento Arnold",
                "scheme": "3×8–12",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento com halteres",
                  "Desenvolvimento na máquina",
                  "Elevação lateral combinada com desenvolvimento"
                ],
                "how": "Inicie com os halteres na frente do queixo, palmas voltadas para você. Ao empurrar para cima, gire os punhos para fora de forma que as palmas fiquem para a frente no topo. Desfaça a rotação na descida controlada."
              },
              {
                "name": "Elevação lateral na polia",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na máquina",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Polia no ponto mais baixo ao lado ou atrás do corpo. Puxe o cabo suavemente cruzando o corpo até a linha do ombro. A polia garante tensão mecânica contínua mesmo na parte de baixo do movimento, onde o halter perde força."
              },
              {
                "name": "Crucifixo inverso na máquina",
                "scheme": "2×12–20",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso com halteres no banco inclinado",
                  "Face pull na polia com corda",
                  "Crucifixo inverso na polia"
                ],
                "how": "Sente de frente para o Peck Deck com o peito apoiado no encosto. Segure as manoplas na altura dos ombros. Abra os braços levando os cotovelos para trás até a linha do tronco, segure 1s e controle a volta."
              }
            ]
          },
          {
            "name": "Braços",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Rosca Scott",
                "scheme": "3×8–12",
                "target": "Cabeça curta do bíceps com pico de contração e isolamento estrito sem roubo corporal.",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Tríceps francês",
                "scheme": "3×8–12",
                "target": "Cabeça longa do tríceps em posição de alongamento profundo acima da cabeça.",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Shoulders + Arms",
        "muscles": "Ombros + Bíceps + Tríceps"
      }
    },
    "division": "Upper Chest + Shoulders + Triceps / Back + Biceps / Legs / Upper Chest + Back / Shoulders + Arms",
    "divisionMuscles": "Peito superior + Ombros + Tríceps → Costas + Bíceps → Quadríceps + Posteriores + Glúteos + Panturrilhas → Peito superior + Costas → Ombros + Bíceps + Tríceps",
    "divisionDescription": "Especialização em peito superior: o peito superior é treinado 2x (segunda e quinta), com costas, ombros e braços como suporte e um único dia de pernas."
  },
  "armspec": {
    "label": "💪 Braços",
    "desc": "Especialização de bíceps + tríceps, pernas 1x",
    "category": "F",
    "tags": [
      "BRACOS",
      "ESPECIALIZACAO",
      "PERNAS 1X"
    ],
    "meta": {
      "foco": "Bíceps + tríceps",
      "frequencia": "Braços 2–3x / pernas 1x",
      "estilo": "Ângulos variados + volume distribuído",
      "fase": "Especialização"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Peito + Ombro + Tríceps",
        "note": "Tríceps recebe prioridade depois do peito.",
        "groups": [
          {
            "name": "Peito",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Supino reto com barra",
                "scheme": "3×6–10",
                "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Supino inclinado com halteres",
                "scheme": "2×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Pec Deck",
                "scheme": "2×10–15",
                "target": "Peitoral geral com pico de contração guiado e estabilidade perfeita.",
                "alts": [
                  "Crossover na polia média",
                  "Crucifixo com halteres",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Tríceps testa",
                "scheme": "3×8–12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps corda",
                "scheme": "2×10–15",
                "target": "Tríceps na polia",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              },
              {
                "name": "Tríceps acima da cabeça na corda",
                "scheme": "2×10–15",
                "target": "Cabeça longa com tensão constante proporcionada pelo cabo no ponto de maior alongamento.",
                "alts": [
                  "Tríceps francês com halter",
                  "Tríceps testa na polia",
                  "Tríceps na máquina de extensão"
                ],
                "how": "De costas para a polia baixa ou média, segure a corda atrás da cabeça. Dê um passo à frente com tronco inclinado. Estenda os braços para frente e para cima abrindo as pontas da corda no final."
              }
            ]
          },
          {
            "name": "Ombro lateral",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação lateral",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              }
            ]
          }
        ],
        "division": "Chest + Triceps + Lateral Delts",
        "muscles": "Peito + Tríceps + Ombro lateral"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Costas + Bíceps",
        "note": "Bíceps é prioridade depois de costas.",
        "groups": [
          {
            "name": "Costas",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Puxada alta neutra",
                "scheme": "3×6–10",
                "target": "Grande dorsal com ênfase nas fibras mediais e dorsais baixas.",
                "alts": [
                  "Puxada articulada neutra (Máquina)",
                  "Puxada alta aberta",
                  "Pulldown na polia"
                ],
                "how": "Com pegador duplo ou barra romana, puxe guiando os cotovelos direto para baixo ao lado das costelas. Aperte as costas no final e retorne em 3 segundos sentindo o alongamento do dorsal sob carga."
              },
              {
                "name": "Remada curvada",
                "scheme": "3×6–10",
                "target": "Espessura de costas: trapézio médio/inferior, romboides e dorsal geral.",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              },
              {
                "name": "Pulldown unilateral na polia",
                "scheme": "3×10–15",
                "target": "Isolamento unilateral da grande dorsal — ativação pura sem fadiga de antebraço/bíceps.",
                "alts": [
                  "Pulldown unilateral na máquina articulada",
                  "Pullover na polia alta com corda",
                  "Remada serrote com halter"
                ],
                "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Rosca inclinada",
                "scheme": "3×8–12",
                "target": "Cabeça longa do bíceps (pico do bíceps) através do alongamento máximo atrás do tronco.",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Rosca Scott",
                "scheme": "3×8–12",
                "target": "Bíceps / estabilidade",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Rosca martelo",
                "scheme": "2×10–15",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          }
        ],
        "division": "Back + Biceps",
        "muscles": "Costas + Bíceps"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Pernas completas",
        "note": "Único dia de pernas.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "3×6–10",
                "target": "Quadríceps, glúteos e estabilização de core — o exercício composto número 1 para pernas.",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Leg press 45°",
                "scheme": "3×8–12",
                "target": "Quadríceps geral, glúteos e adutores com segurança máxima para a coluna lombar.",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "2×10–15",
                "target": "Isolamento do reto femoral e vastos do quadríceps — definição e queimação pura.",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Stiff",
                "scheme": "3×8–12",
                "target": "Posterior + glúteos",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              },
              {
                "name": "Mesa flexora",
                "scheme": "3×8–12",
                "target": "Isolamento dos isquiotibiais (bíceps femoral, semitendíneo) em posição deitada.",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              }
            ]
          },
          {
            "name": "Panturrilha",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "4×10–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ]
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Ombros + Braços",
        "note": "Segundo grande estímulo de braços da semana.",
        "groups": [
          {
            "name": "Ombros",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "3×8–12",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              },
              {
                "name": "Elevação lateral na máquina",
                "scheme": "2×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral com halteres",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Ajuste a altura do banco para que o eixo da máquina coincida com as articulações dos ombros. Apoie os antebraços nas almofadas e empurre para cima usando apenas os deltoides laterais. Segure 1 segundo no topo."
              },
              {
                "name": "Face pull na polia",
                "scheme": "2×12–20",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Remada alta aberta na polia"
                ],
                "how": "Mesma execução: puxe a corda em direção ao nariz/olhos abrindo os cotovelos altos e girando as mãos para trás, ativando deltoide posterior e rotadores externos."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "3×6–10",
                "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Rosca martelo cross-body",
                "scheme": "2×10–15",
                "target": "Braquial e cabeça longa do bíceps em ângulo cruzado na frente do peito.",
                "alts": [
                  "Rosca martelo com halteres tradicional",
                  "Rosca martelo na polia com corda",
                  "Rosca inversa com barra W"
                ],
                "how": "Com pegada neutra, puxe o halter em direção ao ombro oposto mantendo o movimento rente ao peito. Essa trajetória foca diretamente no braquial e no relevo lateral do braço."
              }
            ]
          },
          {
            "name": "Tríceps",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Tríceps francês",
                "scheme": "3×8–12",
                "target": "Cabeça longa do tríceps em posição de alongamento profundo acima da cabeça.",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              },
              {
                "name": "Tríceps unilateral na polia",
                "scheme": "2×10–15",
                "target": "Isolamento de tríceps sem compensação do braço mais forte.",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps francês unilateral",
                  "Tríceps coice com halter"
                ],
                "how": "Pegador individual na polia alta. Cotovelo firme ao lado do tronco. Estenda o antebraço até travar a contração do tríceps, sinta o pico de tensão e retorne controlado."
              }
            ]
          }
        ],
        "division": "Shoulders + Arms",
        "muscles": "Ombros + Bíceps + Tríceps"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Peito + Costas + Braços",
        "note": "Sessão mais curta e concentrada para fechar a semana com um novo toque nos braços.",
        "groups": [
          {
            "name": "Peito + Costas",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Supino inclinado na máquina",
                "scheme": "2×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "2×8–12",
                "target": "Dorsais mediais, trapézio e romboides com trajetória horizontal protegida.",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "2×10–15",
                "target": "Feixe costal (peitoral inferior) e contorno medial externo do tórax.",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              },
              {
                "name": "Puxada supinada (pegada inversa)",
                "scheme": "2×10–15",
                "target": "Dorsal, pegada diferente",
                "alts": [
                  "Puxada supinada na máquina articulada",
                  "Barra fixa supinada (Chin-up)",
                  "Puxada alta com triângulo"
                ],
                "how": "Pegada na largura dos ombros com as palmas voltadas para você. Puxe a barra até a altura do peito mantendo os cotovelos fechados apontando para a frente. Sinta a contração na base da asa das costas."
              }
            ]
          },
          {
            "name": "Braços",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Rosca concentrada",
                "scheme": "3×10–15",
                "target": "Isolamento do bíceps e conexão mente-músculo com o pico do músculo.",
                "alts": [
                  "Rosca Scott unilateral com halter",
                  "Rosca unilateral na polia alta (Hércules)",
                  "Rosca direta com halteres sentado"
                ],
                "how": "Sentado, apoie o cotovelo na parte interna da coxa. Deixe o braço estender quase por completo e flexione o peso em direção ao ombro, esmagando o bíceps no topo por 1 segundo."
              },
              {
                "name": "Tríceps pulley com corda",
                "scheme": "3×10–15",
                "target": "Tríceps, lateral/medial",
                "alts": [
                  "Tríceps pulley com barra reta/V",
                  "Tríceps na máquina articulada",
                  "Tríceps mergulho entre bancos"
                ],
                "how": "Polia alta com corda. Cotovelos colados ao tronco. Empurre a corda para baixo e, no final do percurso, abra as pontas da corda para os lados travando o tríceps por 1 segundo. Volte até os antebraços passarem de 90°."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Chest + Back + Arms",
        "muscles": "Peito + Costas + Bíceps + Tríceps"
      }
    },
    "division": "Chest + Triceps + Lateral Delts / Back + Biceps / Legs / Shoulders + Arms / Chest + Back + Arms",
    "divisionMuscles": "Peito + Tríceps + Ombro lateral → Costas + Bíceps → Quadríceps + Posteriores + Glúteos + Panturrilhas → Ombros + Bíceps + Tríceps → Peito + Costas + Bíceps + Tríceps",
    "divisionDescription": "Especialização em braços: bíceps e tríceps são trabalhados em 3 dias cada, encaixados nos dias de peito e costas, com um dia dedicado a ombros + braços e um único dia de pernas."
  },
  "backsupp": {
    "label": "🦅 Costas",
    "desc": "Especialização de costas + suporte de ombros, pernas 1x",
    "category": "D",
    "tags": [
      "COSTAS",
      "ESPECIALIZACAO",
      "PERNAS 1X"
    ],
    "meta": {
      "foco": "Dorsais + espessura",
      "frequencia": "Costas 2x / pernas 1x",
      "estilo": "Puxadas + remadas + controle",
      "fase": "Especialização"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Costas — Largura + Bíceps",
        "note": "Puxadas primeiro para priorizar movimentos verticais.",
        "groups": [
          {
            "name": "Costas",
            "total": "11 séries",
            "exercises": [
              {
                "name": "Puxada alta aberta",
                "scheme": "4×6–10",
                "target": "Grande dorsal e redondo maior (largura de costas) — pilar fundamental do formato V-Taper.",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              },
              {
                "name": "Pulldown unilateral na polia",
                "scheme": "3×10–15",
                "target": "Dorsal / controle",
                "alts": [
                  "Pulldown unilateral na máquina articulada",
                  "Pullover na polia alta com corda",
                  "Remada serrote com halter"
                ],
                "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "2×8–12",
                "target": "Dorsais mediais, trapézio e romboides com trajetória horizontal protegida.",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              },
              {
                "name": "Face pull na polia",
                "scheme": "2×12–20",
                "target": "Posterior / cintura escapular",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Remada alta aberta na polia"
                ],
                "how": "Mesma execução: puxe a corda em direção ao nariz/olhos abrindo os cotovelos altos e girando as mãos para trás, ativando deltoide posterior e rotadores externos."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Rosca inclinada",
                "scheme": "3×8–12",
                "target": "Cabeça longa do bíceps (pico do bíceps) através do alongamento máximo atrás do tronco.",
                "alts": [
                  "Rosca alternada inclinada com halteres",
                  "Rosca no cabo atrás do corpo (Bayesian curl)",
                  "Rosca Scott com halteres"
                ],
                "how": "Banco inclinado a 45°-60°. Deite com os braços soltos apontando para trás da linha do corpo. Flexione os cotovelos girando os punhos para cima (supinação) no terço final. O ponto de maior estímulo é o alongamento na base do movimento."
              },
              {
                "name": "Rosca martelo",
                "scheme": "2×10–15",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          }
        ],
        "division": "Back + Biceps",
        "muscles": "Costas + Bíceps"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Peito + Ombros + Tríceps",
        "note": "Superior anterior recebe volume de suporte.",
        "groups": [
          {
            "name": "Peito",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Supino reto com barra",
                "scheme": "3×6–10",
                "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Supino inclinado na máquina",
                "scheme": "3×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Pec Deck",
                "scheme": "2×10–15",
                "target": "Peitoral geral com pico de contração guiado e estabilidade perfeita.",
                "alts": [
                  "Crossover na polia média",
                  "Crucifixo com halteres",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos."
              }
            ]
          },
          {
            "name": "Ombros + Tríceps",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Elevação lateral",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              },
              {
                "name": "Tríceps testa",
                "scheme": "2×8–12",
                "target": "Cabeça longa e medial do tríceps — responsável pelo volume de braço visto de lado e de trás.",
                "alts": [
                  "Tríceps testa com halteres no banco",
                  "Tríceps testa na polia baixa com corda",
                  "Tríceps francês com halter"
                ],
                "how": "Deitado no banco reto, segure a barra W ou halteres acima do peito. Incline os braços ligeiramente para trás (em direção à cabeça). Flexione apenas os antebraços descendo a barra até a linha da testa/topo da cabeça e estenda sem mexer a posição do cotovelo."
              },
              {
                "name": "Tríceps corda",
                "scheme": "2×10–15",
                "target": "Cabeça lateral e medial do tríceps com abertura final para contração máxima.",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              }
            ]
          }
        ],
        "division": "Chest + Shoulders + Triceps",
        "muscles": "Peito + Ombro lateral + Tríceps"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Pernas completas",
        "note": "Único dia de pernas.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "3×6–10",
                "target": "Quadríceps, glúteos e estabilização de core — o exercício composto número 1 para pernas.",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Leg press 45°",
                "scheme": "3×8–12",
                "target": "Quadríceps geral, glúteos e adutores com segurança máxima para a coluna lombar.",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "2×10–15",
                "target": "Isolamento do reto femoral e vastos do quadríceps — definição e queimação pura.",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Stiff",
                "scheme": "3×8–12",
                "target": "Posterior + glúteos",
                "alts": [
                  "Stiff com halteres",
                  "Levantamento terra romeno no Smith",
                  "Mesa flexora"
                ],
                "how": "Pés na largura do quadril. Joelhos ligeiramente destravados (mas fixos durante o movimento). Projete o quadril para trás como se quisesse tocar a parede atrás de você, descendo a barra rente às pernas até sentir os posteriores esticarem. Suba empurrando com o quadril."
              },
              {
                "name": "Mesa flexora",
                "scheme": "3×8–12",
                "target": "Isolamento dos isquiotibiais (bíceps femoral, semitendíneo) em posição deitada.",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              }
            ]
          },
          {
            "name": "Panturrilhas",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "4×10–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ]
              }
            ]
          }
        ],
        "division": "Legs",
        "muscles": "Quadríceps + Posteriores + Glúteos + Panturrilhas"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Peito + Braços",
        "note": "Sessão de suporte para não deixar o restante do superior para trás.",
        "groups": [
          {
            "name": "Peito",
            "total": "7 séries",
            "exercises": [
              {
                "name": "Supino inclinado com halteres",
                "scheme": "3×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "2×10–15",
                "target": "Feixe costal (peitoral inferior) e contorno medial externo do tórax.",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              },
              {
                "name": "Supino reto no Smith",
                "scheme": "2×8–12",
                "target": "Peitoral maior com estabilização guiada para isolar a contração sem risco de desequilíbrio.",
                "alts": [
                  "Supino reto articulado (Máquina)",
                  "Supino reto com halteres",
                  "Supino reto com barra"
                ],
                "how": "Deite no centro da barra, alinhando-a à linha dos mamilos. Destrave a barra com punhos firmes. Desça em 3 segundos até 2cm do peito e suba explosivo sem hiperextender os cotovelos no final."
              }
            ]
          },
          {
            "name": "Braços",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Rosca Scott",
                "scheme": "2×8–12",
                "target": "Cabeça curta do bíceps com pico de contração e isolamento estrito sem roubo corporal.",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Tríceps francês",
                "scheme": "2×8–12",
                "target": "Cabeça longa do tríceps em posição de alongamento profundo acima da cabeça.",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              },
              {
                "name": "Rosca concentrada",
                "scheme": "2×10–15",
                "target": "Isolamento do bíceps e conexão mente-músculo com o pico do músculo.",
                "alts": [
                  "Rosca Scott unilateral com halter",
                  "Rosca unilateral na polia alta (Hércules)",
                  "Rosca direta com halteres sentado"
                ],
                "how": "Sentado, apoie o cotovelo na parte interna da coxa. Deixe o braço estender quase por completo e flexione o peso em direção ao ombro, esmagando o bíceps no topo por 1 segundo."
              },
              {
                "name": "Tríceps unilateral na polia",
                "scheme": "2×10–15",
                "target": "Tríceps, unilateral",
                "alts": [
                  "Tríceps pulley com corda",
                  "Tríceps francês unilateral",
                  "Tríceps coice com halter"
                ],
                "how": "Pegador individual na polia alta. Cotovelo firme ao lado do tronco. Estenda o antebraço até travar a contração do tríceps, sinta o pico de tensão e retorne controlado."
              }
            ]
          }
        ],
        "division": "Chest + Arms",
        "muscles": "Peito + Bíceps + Tríceps"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Costas — Espessura + Dorsais",
        "note": "Segundo toque de costas com padrões diferentes de segunda.",
        "groups": [
          {
            "name": "Costas",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Remada cavalinho",
                "scheme": "3×6–10",
                "target": "Espessura dorsal e romboides com maior estabilidade do que a remada livre.",
                "alts": [
                  "Remada curvada com barra",
                  "Remada na máquina articulada (peito apoiado)",
                  "Remada baixa com triângulo"
                ],
                "how": "Posicione-se sobre a barra T ou no aparelho de remada cavalinho. Com peito aberto e lombar firme, puxe o pegador até tocar a parte inferior do abdômen. Puxe liderando pelos cotovelos e segure o pico de contração por 1 segundo."
              },
              {
                "name": "Puxada alta neutra",
                "scheme": "3×8–12",
                "target": "Grande dorsal com ênfase nas fibras mediais e dorsais baixas.",
                "alts": [
                  "Puxada articulada neutra (Máquina)",
                  "Puxada alta aberta",
                  "Pulldown na polia"
                ],
                "how": "Com pegador duplo ou barra romana, puxe guiando os cotovelos direto para baixo ao lado das costelas. Aperte as costas no final e retorne em 3 segundos sentindo o alongamento do dorsal sob carga."
              },
              {
                "name": "Remada unilateral com halter (serrote)",
                "scheme": "2×8–12",
                "target": "Dorsal + espessura",
                "alts": [
                  "Remada unilateral na máquina articulada",
                  "Remada unilateral na polia baixa",
                  "Remada baixa com triângulo"
                ],
                "how": "Apoie um joelho e uma mão no banco reto. Segure o halter com o braço estendido. Puxe o peso em direção ao quadril (não para o peito) levando o cotovelo para trás e para cima. Desça alongando completamente a dorsal."
              },
              {
                "name": "Pullover na polia",
                "scheme": "2×10–15",
                "target": "Grande dorsal e serrátil anterior — isola a extensão do ombro em tensão contínua.",
                "alts": [
                  "Pullover com halter no banco reto",
                  "Pulldown unilateral na polia",
                  "Puxada articulada na máquina"
                ],
                "how": "Em pé com afastamento da polia alta, barra reta ou corda. Tronco inclinado a 45°, braços semi-estendidos. Puxe a barra num arco amplo até encostar nas coxas sem dobrar os cotovelos. Segure 1s contraindo as asas das costas."
              }
            ]
          },
          {
            "name": "Ombro posterior",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Crucifixo inverso no banco inclinado",
                "scheme": "3×12–20",
                "target": "Deltoide posterior",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Face pull na polia com corda",
                  "Crucifixo inverso com halteres em pé"
                ],
                "how": "Deite de bruços no banco a 30°-45°. Halteres pendendo. Abra os braços na linha dos ombros focando na parte traseira do deltoide. Retorne em 3 segundos sem dar tranco no início."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Back",
        "muscles": "Costas + Ombro posterior"
      }
    },
    "division": "Back + Biceps / Chest + Shoulders + Triceps / Legs / Chest + Arms / Back",
    "divisionMuscles": "Costas + Bíceps → Peito + Ombro lateral + Tríceps → Quadríceps + Posteriores + Glúteos + Panturrilhas → Peito + Bíceps + Tríceps → Costas + Ombro posterior",
    "divisionDescription": "Especialização em costas: dois dias com foco em costas (largura na segunda, espessura na sexta), com peito, ombros e braços como suporte e um único dia de pernas."
  },
  "legs2future": {
    "label": "🦵🦵 Pernas 2x — Futuro",
    "desc": "Estratégia futura: quadríceps + posterior em dias separados",
    "category": "H",
    "tags": [
      "PERNAS 2X",
      "EXPERIMENTAL"
    ],
    "meta": {
      "foco": "Pernas 2x/semana",
      "frequencia": "Legs A + Legs B",
      "estilo": "Ênfases diferentes, não duplicação",
      "fase": "Usar quando for apropriado e tolerado"
    },
    "days": {
      "seg": {
        "label": "Segunda",
        "color": "seg",
        "title": "Peito + Ombros + Tríceps",
        "note": "Superior com volume moderado para reservar recuperação para os dois dias de pernas.",
        "groups": [
          {
            "name": "Peito",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Supino reto com barra",
                "scheme": "3×6–10",
                "target": "Peitoral geral (feixe esternocostal), deltoide anterior e tríceps — construtor de base de força e massa muscular.",
                "alts": [
                  "Supino reto com halteres",
                  "Supino reto articulado (Máquina)",
                  "Supino reto no Smith"
                ],
                "how": "Pegada um pouco além da largura dos ombros. Apoie pés, glúteos e escápulas com leve arco lombar natural. Desça a barra controlada até encostar suavemente na linha inferior dos mamilos, com cotovelos em ~70°. Empurre em linha reta/leve arco sem tirar as escápulas do banco."
              },
              {
                "name": "Supino inclinado com halteres",
                "scheme": "3×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado articulado (Máquina)",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa inclinado"
                ],
                "how": "Ajuste o banco em 30° a 40° (inclinação maior rouba trabalho para os ombros). Escápulas retraídas e travadas no banco. Desça os halteres em 2 a 3 segundos com os cotovelos a 45°–60° do tronco (nunca abertos a 90°). Empurre convergindo levemente no topo sem bater os halteres e sem perder a tensão nos cotovelos."
              },
              {
                "name": "Pec Deck",
                "scheme": "2×10–15",
                "target": "Peitoral geral com pico de contração guiado e estabilidade perfeita.",
                "alts": [
                  "Crossover na polia média",
                  "Crucifixo com halteres",
                  "Crucifixo na máquina articulada"
                ],
                "how": "Regule a altura do banco para as mãos ficarem no centro do tórax. Mantenha as escápulas coladas no banco. Feche as alavancas controlando o movimento com a força do peito, congele 1 segundo no pico e controle a descida em 3 segundos."
              }
            ]
          },
          {
            "name": "Ombros + Tríceps",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Desenvolvimento com halteres",
                "scheme": "3×8–12",
                "target": "Deltoide anterior",
                "alts": [
                  "Desenvolvimento na máquina articulada",
                  "Desenvolvimento no Smith",
                  "Desenvolvimento Arnold"
                ],
                "how": "Sentado em banco com encosto a ~75°-80° (quase reto). Halteres na altura das orelhas com cotovelos a ~60° do tronco (não abertos a 90°). Empurre para cima até quase estender os braços, sem bater os halteres no topo. Desça até a linha do queixo."
              },
              {
                "name": "Elevação lateral",
                "scheme": "3×12–20",
                "target": "Deltoide lateral",
                "alts": [
                  "Elevação lateral na máquina",
                  "Elevação lateral na polia",
                  "Elevação lateral inclinada no banco"
                ],
                "how": "Mantenha os cotovelos semi-flexionados fixos. Suba os braços no plano escapular (ligeiramente à frente da linha do corpo) até a horizontal. Congele meio segundo no topo e controle a fase excêntrica."
              },
              {
                "name": "Tríceps corda",
                "scheme": "2×10–15",
                "target": "Cabeça lateral e medial do tríceps com abertura final para contração máxima.",
                "alts": [
                  "Tríceps pulley com barra",
                  "Tríceps unilateral na polia",
                  "Tríceps testa com halteres"
                ],
                "how": "Mantenha o peito estufado e ombros imóveis. Estenda os cotovelos empurrando o peso para baixo e abrindo a corda rente às coxas. Segure 1s na contração máxima."
              }
            ]
          }
        ],
        "division": "Chest + Shoulders + Triceps",
        "muscles": "Peito + Ombros + Tríceps"
      },
      "ter": {
        "label": "Terça",
        "color": "ter",
        "title": "Costas + Bíceps",
        "note": "Costas e braços com volume suficiente para o restante da semana.",
        "groups": [
          {
            "name": "Costas",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Puxada alta neutra",
                "scheme": "3×6–10",
                "target": "Grande dorsal com ênfase nas fibras mediais e dorsais baixas.",
                "alts": [
                  "Puxada articulada neutra (Máquina)",
                  "Puxada alta aberta",
                  "Pulldown na polia"
                ],
                "how": "Com pegador duplo ou barra romana, puxe guiando os cotovelos direto para baixo ao lado das costelas. Aperte as costas no final e retorne em 3 segundos sentindo o alongamento do dorsal sob carga."
              },
              {
                "name": "Remada curvada",
                "scheme": "3×6–10",
                "target": "Espessura de costas: trapézio médio/inferior, romboides e dorsal geral.",
                "alts": [
                  "Remada articulada na máquina (peito apoiado)",
                  "Remada cavalinho",
                  "Remada curvada com halteres"
                ],
                "how": "Pés na largura dos ombros, incline o tronco em ~45° com peito aberto e coluna neutra. Puxe a barra em direção ao umbigo rente às coxas, puxando com os cotovelos e fechando as escápulas. Controle a descida sem arredondar a lombar."
              },
              {
                "name": "Pulldown unilateral na polia",
                "scheme": "2×10–15",
                "target": "Isolamento unilateral da grande dorsal — ativação pura sem fadiga de antebraço/bíceps.",
                "alts": [
                  "Pulldown unilateral na máquina articulada",
                  "Pullover na polia alta com corda",
                  "Remada serrote com halter"
                ],
                "how": "Em pé ou de joelhos diante da polia alta com pegador individual. Puxe o cabo trazendo o cotovelo rente à cintura em trajetória de arco. No final da descida, faça uma leve inclinação lateral do tronco para encurtar o dorsal ao máximo."
              },
              {
                "name": "Face pull na polia",
                "scheme": "2×12–20",
                "target": "Deltoide posterior e saúde articular dos ombros.",
                "alts": [
                  "Crucifixo inverso na máquina",
                  "Crucifixo inverso com halteres",
                  "Remada alta aberta na polia"
                ],
                "how": "Mesma execução: puxe a corda em direção ao nariz/olhos abrindo os cotovelos altos e girando as mãos para trás, ativando deltoide posterior e rotadores externos."
              }
            ]
          },
          {
            "name": "Bíceps",
            "total": "5 séries",
            "exercises": [
              {
                "name": "Rosca direta W",
                "scheme": "3×6–10",
                "target": "Massa e densidade do bíceps com conforto articular para os punhos.",
                "alts": [
                  "Rosca direta na polia baixa",
                  "Rosca direta com halteres",
                  "Rosca Scott com barra W"
                ],
                "how": "Segure nas curvas internas da barra W. Mantenha os ombros abaixados e trave os cotovelos no mesmo lugar. Suba concentrado e desça em 3 segundos sem usar embalo do quadril."
              },
              {
                "name": "Rosca martelo",
                "scheme": "2×10–15",
                "target": "Músculo braquial e braquiorradial (antebraço) — 'empurra' o bíceps para cima deixando o braço mais largo e volumoso de frente.",
                "alts": [
                  "Rosca martelo na polia com corda",
                  "Rosca martelo no banco Scott",
                  "Rosca martelo cross-body com halteres"
                ],
                "how": "Pegada neutra (palmas viradas uma para a outra o tempo todo). Suba os halteres em direção aos ombros mantendo os cotovelos fixos. Segure 1s no topo e desça em 3 segundos sentindo a lateral do braço e antebraço queimar."
              }
            ]
          }
        ],
        "division": "Back + Biceps",
        "muscles": "Costas + Bíceps"
      },
      "qua": {
        "label": "Quarta",
        "color": "qua",
        "title": "Legs A — Quadríceps + Panturrilha",
        "note": "Primeiro dia de pernas da estratégia futura. Ênfase em padrão de joelho e quadríceps, com posterior apenas como complemento.",
        "groups": [
          {
            "name": "Quadríceps",
            "total": "9 séries",
            "exercises": [
              {
                "name": "Agachamento livre",
                "scheme": "3×6–10",
                "target": "Quadríceps / padrão de agachamento",
                "alts": [
                  "Leg press 45°",
                  "Hack machine",
                  "Agachamento no Smith"
                ],
                "how": "Barra apoiada sobre o trapézio (não no pescoço). Pés na largura dos ombros levemente apontados para fora. Desça jogando o quadril para trás e joelhos acompanhando a ponta dos pés até as coxas ficarem paralelas ao chão. Suba com peito erguido."
              },
              {
                "name": "Hack machine",
                "scheme": "3×8–12",
                "target": "Quadríceps com foco no vasto lateral e reto femoral com apoio total nas costas.",
                "alts": [
                  "Leg press 45°",
                  "Agachamento livre",
                  "Agachamento frontal ou no Smith"
                ],
                "how": "Apoie as costas e ombros no encosto do Hack. Pés na largura dos ombros ligeiramente adiantados na plataforma. Desça controlado em 3 segundos até 90° e suba empurrando com as coxas sem dar tranco no joelho."
              },
              {
                "name": "Cadeira extensora",
                "scheme": "3×10–15",
                "target": "Isolamento do reto femoral e vastos do quadríceps — definição e queimação pura.",
                "alts": [
                  "Leg press unilateral",
                  "Agachamento búlgaro com halteres",
                  "Passada (afundo) com halteres"
                ],
                "how": "Ajuste o encosto para o joelho ficar exatamente alinhado com o eixo giratório da máquina. Ajuste o rolo sobre o peito do pé. Estenda as pernas segurando 1 a 2 segundos no topo e desça em 3 segundos controlados sem deixar o peso bater."
              }
            ]
          },
          {
            "name": "Posterior complementar",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Mesa flexora",
                "scheme": "3×10–15",
                "target": "Posterior de coxa",
                "alts": [
                  "Cadeira flexora sentada",
                  "Stiff com halteres",
                  "Flexora em pé unilateral na máquina"
                ],
                "how": "Deitado de bruços, ajuste o rolo para ficar logo acima dos calcanhares. Segure as manoplas para travar o quadril contra o banco (não empine o glúteo durante a subida). Flexione os joelhos até o calcanhar aproximar do glúteo e desça em 3s."
              }
            ]
          },
          {
            "name": "Panturrilha",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha em pé",
                "scheme": "4×10–15",
                "target": "Gastrocnêmio com joelhos estendidos para máximo recrutamento de fibras rápidas.",
                "alts": [
                  "Panturrilha no Leg Press 45°",
                  "Panturrilha sentado na máquina",
                  "Panturrilha unilateral com halter"
                ],
                "how": "Apoie as almofadas nos ombros. Joelhos quase esticados (ligeiramente destravados). Desça devagar até o calcanhar descer além da plataforma e suba com força máxima na ponta dos pés sem quicar."
              }
            ]
          },
          {
            "name": "Abdômen & Linha de Cintura",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Elevação de pernas suspensa ou paralela",
                "scheme": "3×12–15",
                "target": "Reto abdominal porção inferior (infra) e iliopsoas — essencial para 'puxar' o abdômen inferior para dentro e fechar a linha de cintura.",
                "how": "Suspenso na barra ou apoiado no suporte de paralelas. Inicie o movimento fazendo uma báscula de quadril (enrolando a pelve para cima em direção ao umbigo), e não apenas levantando as pernas. Se estiver pesado, dobre os joelhos a 90°. Segure 1s no topo e desça controlando sem balançar o corpo.",
                "alts": [
                  "Abdominal infra no chão / banco declinado",
                  "Abdominal na polia alta com corda",
                  "Prancha abdominal com contração ativa"
                ]
              }
            ]
          }
        ],
        "division": "Legs A (Quad Focus)",
        "muscles": "Quadríceps + Panturrilhas + Posteriores (complementar)"
      },
      "qui": {
        "label": "Quinta",
        "color": "qui",
        "title": "Peito + Costas + Braços",
        "note": "Sessão intermediária de superior para chegar ao segundo dia de pernas sem acumular volume desnecessário.",
        "groups": [
          {
            "name": "Peito + Costas",
            "total": "10 séries",
            "exercises": [
              {
                "name": "Supino inclinado na máquina",
                "scheme": "3×8–12",
                "target": "Peitoral superior",
                "alts": [
                  "Supino inclinado com halteres",
                  "Supino inclinado no Smith",
                  "Crossover na polia baixa (de baixo pra cima)"
                ],
                "how": "Ajuste a altura do assento para que as manoplas fiquem na linha da clavícula/peito superior. Encoste a lombar e retraia as escápulas. Empurre com força controlada e segure 2 a 3 segundos na volta sem deixar as placas baterem no descanso."
              },
              {
                "name": "Remada baixa com triângulo",
                "scheme": "3×8–12",
                "target": "Dorsais mediais, trapézio e romboides com trajetória horizontal protegida.",
                "alts": [
                  "Remada articulada unilateral na máquina",
                  "Remada curvada com halteres",
                  "Remada baixa com barra pegada aberta"
                ],
                "how": "Sentado com os joelhos levemente destravados, coluna ereta e peito aberto. Puxe o triângulo até o umbigo, puxando os cotovelos para trás e aproximando as escápulas. Evite usar impulso do tronco balançando para frente e para trás."
              },
              {
                "name": "Crossover na polia alta",
                "scheme": "2×10–15",
                "target": "Feixe costal (peitoral inferior) e contorno medial externo do tórax.",
                "alts": [
                  "Pec Deck (Peck Deck)",
                  "Mergulho nas paralelas ou máquina",
                  "Crucifixo declinado com halteres"
                ],
                "how": "Polias no ponto mais alto. Incline levemente o tronco à frente mantendo a coluna ereta. Puxe os cabos para baixo e para frente em direção ao umbigo/quadril, cruzando ligeiramente as mãos. Aperte o peitoral inferior por 1 segundo no ponto de pico."
              },
              {
                "name": "Puxada alta aberta",
                "scheme": "2×8–12",
                "target": "Grande dorsal e redondo maior (largura de costas) — pilar fundamental do formato V-Taper.",
                "alts": [
                  "Puxada na máquina articulada aberta",
                  "Puxada alta com triângulo",
                  "Barra fixa pronada (ou Graviton)"
                ],
                "how": "Pegada pronada cerca de 1,5x a largura dos ombros. Trave as coxas no apoio. Inicie o movimento deprimindo as escápulas e puxe a barra em direção ao queixo/peito superior, levando os cotovelos para baixo e para os bolsos de trás. Suba alongando totalmente os dorsais."
              }
            ]
          },
          {
            "name": "Braços",
            "total": "6 séries",
            "exercises": [
              {
                "name": "Rosca Scott",
                "scheme": "3×8–12",
                "target": "Cabeça curta do bíceps com pico de contração e isolamento estrito sem roubo corporal.",
                "alts": [
                  "Rosca Scott na máquina articulada",
                  "Rosca concentrada com halter",
                  "Rosca Scott unilateral com halter"
                ],
                "how": "Ajuste o assento para que o peito fique encostado e as axilas fiquem bem acomodadas no topo da almofada Scott. Desça o peso devagar até faltar cerca de 5° para esticar o cotovelo (não hiperextenda sob carga pesada) e suba contraindo o bíceps."
              },
              {
                "name": "Tríceps francês",
                "scheme": "3×8–12",
                "target": "Cabeça longa do tríceps em posição de alongamento profundo acima da cabeça.",
                "alts": [
                  "Tríceps acima da cabeça na corda (Polia)",
                  "Tríceps francês com halteres unilateral",
                  "Tríceps testa com barra W"
                ],
                "how": "Sentado ou em pé, segure um halter com as duas mãos acima da cabeça. Desça o peso por trás da nuca flexionando os cotovelos e mantendo-os o mais fechados possível. Suba estendendo os braços."
              }
            ]
          }
        ],
        "division": "Chest + Back + Arms",
        "muscles": "Peito + Costas + Bíceps + Tríceps"
      },
      "sex": {
        "label": "Sexta",
        "color": "sex",
        "title": "Legs B — Posterior + Glúteos + Panturrilha",
        "note": "Segundo dia de pernas. Ênfase em extensão de quadril e flexão de joelho, com quadríceps complementar.",
        "groups": [
          {
            "name": "Posterior",
            "total": "8 séries",
            "exercises": [
              {
                "name": "Levantamento terra romeno com barra",
                "scheme": "3×6–10",
                "target": "Posterior + glúteos",
                "alts": [
                  "Stiff com barra",
                  "Stiff com halteres",
                  "Mesa flexora"
                ],
                "how": "Similar ao stiff, mas com flexão de joelho um pouco mais acentuada permitindo mais sobrecarga. Inicie do topo, desça raspando a barra nas coxas até abaixo dos joelhos e suba estendendo o quadril com força."
              },
              {
                "name": "Cadeira flexora",
                "scheme": "3×8–12",
                "target": "Posterior, ângulo diferente da quarta",
                "alts": [
                  "Mesa flexora deitada",
                  "Stiff com halteres",
                  "Flexora unilateral na polia"
                ],
                "how": "Ajuste a almofada de cima bem firme contra as coxas para não levantar o corpo. Flexione os joelhos puxando os calcanhares para baixo e para trás. Segure 1s e controle a subida sentindo o alongamento do posterior."
              },
              {
                "name": "Hip thrust",
                "scheme": "2×8–12",
                "target": "Glúteo máximo com pico de tensão máxima no topo da extensão do quadril.",
                "alts": [
                  "Elevação pélvica na máquina articulada",
                  "Glúteo na polia baixa com caneleira",
                  "Stiff com barra"
                ],
                "how": "Apoie a parte superior das costas em um banco transversalmente. Barra acolchoada sobre o quadril. Pés na largura dos ombros. Empurre o quadril para cima até o tronco e coxas formarem uma linha horizontal reta, apertando o glúteo por 2 segundos."
              }
            ]
          },
          {
            "name": "Quadríceps complementar",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Leg press 45°",
                "scheme": "3×10–15",
                "target": "Quadríceps geral, glúteos e adutores com segurança máxima para a coluna lombar.",
                "alts": [
                  "Agachamento livre com barra",
                  "Hack machine",
                  "Leg press horizontal (Máquina)"
                ],
                "how": "Pés na largura dos ombros no meio da plataforma. Desça a plataforma flexionando os joelhos até formar ~90° SEM descolar o quadril e a lombar do encosto. Empurre com os calcanhares sem hiperestender ou travar os joelhos no topo."
              }
            ]
          },
          {
            "name": "Panturrilha",
            "total": "4 séries",
            "exercises": [
              {
                "name": "Panturrilha sentado",
                "scheme": "4×12–20",
                "target": "Músculo sóleo (músculo profundo da panturrilha que dá espessura e largura à perna).",
                "alts": [
                  "Panturrilha no leg press com joelhos flexionados",
                  "Panturrilha em pé na máquina",
                  "Panturrilha no Smith sentado com anilhas sob os pés"
                ],
                "how": "Sentado com joelhos a 90° e almofada sobre as coxas. Por estar com os joelhos dobrados, o gastrocnêmio fica encurtado e o sóleo assume quase todo o trabalho. Movimento lento: 2s subindo, 2s no pico e 3s descendo."
              }
            ]
          },
          {
            "name": "Abdômen & Core",
            "total": "3 séries",
            "exercises": [
              {
                "name": "Abdominal na polia",
                "scheme": "3×12–15",
                "target": "Reto abdominal superior e medial sob sobrecarga progressiva com cabo.",
                "how": "Ajoelhado de frente ou de costas para a polia alta, segure a corda atrás da nuca ou ao lado das orelhas. Trave o quadril imóvel e flexione o tronco enrolando as costelas em direção ao quadril (como se fosse se dobrar ao meio). NÃO puxe com os braços nem sente nos calcanhares. Aperte por 1s no fundo e suba controlado.",
                "alts": [
                  "Abdominal na máquina articulada de crunch",
                  "Abdominal no banco declinado com anilha",
                  "Elevação de pernas suspensa ou paralela"
                ]
              }
            ]
          }
        ],
        "division": "Legs B (Hamstring + Glute Focus)",
        "muscles": "Posteriores + Glúteos + Panturrilhas + Quadríceps (complementar)"
      }
    },
    "division": "Chest + Shoulders + Triceps / Back + Biceps / Legs A (Quad Focus) / Chest + Back + Arms / Legs B (Hamstring + Glute Focus)",
    "divisionMuscles": "Peito + Ombros + Tríceps → Costas + Bíceps → Quadríceps + Panturrilhas + Posteriores (complementar) → Peito + Costas + Bíceps + Tríceps → Posteriores + Glúteos + Panturrilhas + Quadríceps (complementar)",
    "divisionDescription": "Pernas 2x: dois dias de pernas com ênfases diferentes (Legs A com quadríceps + panturrilhas, Legs B com posteriores + glúteos + panturrilhas) e o superior distribuído nos outros três dias."
  }
};

const DIVISION_INFO = {
  "a": {
    "description": "Divisão mista: cada dia agrupa músculos diferentes (peito + tríceps, costas + bíceps, pernas, ombros + braços e peito + costas), sem uma lógica única de agrupamento. Peito, costas, ombros e braços aparecem 2x na semana; pernas 1x.",
    "days": {
      "seg": [
        "Chest + Triceps + Lateral Delts",
        "Peito + Tríceps + Ombro lateral"
      ],
      "ter": [
        "Back + Biceps + Rear Delts",
        "Costas + Trapézio + Bíceps + Ombro posterior"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      ],
      "qui": [
        "Shoulders + Arms",
        "Ombros + Bíceps + Tríceps"
      ],
      "sex": [
        "Chest + Back",
        "Peito + Costas + Trapézio"
      ]
    }
  },
  "b": {
    "description": "Divisão por padrão de movimento: os dias de empurrar (peito + ombros + tríceps) e de puxar (costas + bíceps + ombro posterior) se repetem 2x na semana, com um único dia de pernas no meio.",
    "days": {
      "seg": [
        "Push",
        "Peito + Ombros + Tríceps"
      ],
      "ter": [
        "Pull",
        "Costas + Trapézio + Bíceps + Ombro posterior"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      ],
      "qui": [
        "Push",
        "Peito + Ombros + Tríceps"
      ],
      "sex": [
        "Pull",
        "Costas + Trapézio + Bíceps + Ombro posterior"
      ]
    }
  },
  "c": {
    "description": "Divisão por região do corpo: o tronco (peito + costas) e os membros superiores (ombros + bíceps + tríceps) ficam em dias separados e se repetem 2x na semana. Pernas têm um dia próprio.",
    "days": {
      "seg": [
        "Torso",
        "Peito + Costas + Trapézio"
      ],
      "ter": [
        "Limbs",
        "Ombros + Bíceps + Tríceps"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      ],
      "qui": [
        "Torso",
        "Peito + Costas + Trapézio"
      ],
      "sex": [
        "Limbs",
        "Ombros + Bíceps + Tríceps"
      ]
    }
  },
  "d": {
    "division": "Rotating Priority — Focus + Maintenance",
    "description": "Prioridade rotativa: em cada dia um grupo é o foco de volume (peito, costas, ombros e depois braços) enquanto outro entra só em manutenção. Pernas ficam em um dia próprio, sempre com volume alto.",
    "days": {
      "seg": [
        "Chest Focus + Triceps/Shoulders Maintenance",
        "Peito + Tríceps + Ombro lateral"
      ],
      "ter": [
        "Back Focus + Biceps Maintenance",
        "Costas + Trapézio + Bíceps"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      ],
      "qui": [
        "Shoulders Focus + Chest Maintenance",
        "Ombros + Peito"
      ],
      "sex": [
        "Arms Focus + Back Maintenance",
        "Bíceps + Tríceps + Costas + Trapézio"
      ]
    }
  },
  "em": {
    "description": "Semana apertada: 3 dias com Push, Legs + Core e Pull, cobrindo o corpo todo com cada grupo 1x. Pode ser feito em quaisquer 3 dias livres da semana.",
    "days": {
      "seg": [
        "Push",
        "Peito + Ombros + Tríceps"
      ],
      "qua": [
        "Legs + Core",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      ],
      "ter": [
        "Pull",
        "Costas + Ombro posterior + Bíceps"
      ]
    }
  },
  "em4": {
    "description": "Push, Pull e Legs em dias dedicados (1x cada), mais um Upper de manutenção no 4º dia que dá a segunda passada em peito, costas, ombros e braços.",
    "days": {
      "seg": [
        "Push",
        "Peito + Ombros + Tríceps"
      ],
      "ter": [
        "Pull",
        "Costas + Ombro posterior + Bíceps"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      ],
      "qui": [
        "Upper (Maintenance)",
        "Peito + Costas + Ombro lateral + Bíceps + Tríceps"
      ]
    }
  },
  "rec_pump": {
    "description": "Variação de choque com Costas divididas por vetor (Puxadas na Terça / Remadas na Sexta) e treino conjugado de Bíceps e Tríceps juntos na Sexta-feira para máximo pump vascular antes do final de semana.",
    "days": {
      "seg": [
        "Push A",
        "Peito + Ombro lateral + Tríceps"
      ],
      "ter": [
        "Pull A (Puxadas)",
        "Costas (Largura / Puxadas) + Bíceps + Ombro posterior"
      ],
      "qua": [
        "Legs & Core",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen Infra"
      ],
      "qui": [
        "Push B",
        "Peito Superior 2x + Ombro Lateral 3D + Abdômen"
      ],
      "sex": [
        "Pull B & Arms Pump",
        "Costas (Espessura / Remadas) + Bíceps & Tríceps Juntos"
      ]
    }
  },
  "rec": {
    "description": "Push / Pull / Legs com ângulos e equipamentos diferentes entre as duas sessões de cada padrão (A e B), incluindo técnicas de intensidade pontuais. Push trabalha peito + ombros + tríceps; Pull, costas + bíceps + ombro posterior; um único dia de pernas.",
    "days": {
      "seg": [
        "Push",
        "Peito + Ombros + Tríceps"
      ],
      "ter": [
        "Pull",
        "Costas + Trapézio + Bíceps + Ombro posterior"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas + Abdômen"
      ],
      "qui": [
        "Push",
        "Peito + Ombros + Tríceps"
      ],
      "sex": [
        "Pull",
        "Costas + Trapézio + Bíceps + Ombro posterior"
      ]
    }
  },
  "fb": {
    "muscles": "Corpo todo em cada dia: pernas (quadríceps ou posteriores) + peito + costas + ombros, com braços, glúteos, panturrilhas ou abdômen conforme o dia",
    "description": "Full Body: toda sessão tem compostos para pernas, peito, costas e ombros, com poucas séries por músculo. O padrão principal muda entre os dias (A: agachamento, B: dobradiça de quadril, C: máquinas e unilateral) e a semana fecha repetindo A e B com exercícios diferentes.",
    "days": {
      "seg": [
        "Full Body",
        "Quadríceps + Peito + Costas + Ombros + Panturrilhas"
      ],
      "ter": [
        "Full Body",
        "Posteriores + Glúteos + Costas + Peito + Ombros + Bíceps + Tríceps"
      ],
      "qua": [
        "Full Body",
        "Quadríceps + Costas + Peito + Ombro posterior + Glúteos + Abdômen"
      ],
      "qui": [
        "Full Body",
        "Quadríceps + Peito + Costas + Ombros + Panturrilhas"
      ],
      "sex": [
        "Full Body",
        "Posteriores + Glúteos + Costas + Peito + Ombro lateral + Bíceps + Tríceps"
      ]
    }
  },
  "abc": {
    "description": "ABC clássico: A = peito + tríceps, B = costas + bíceps, C = pernas + ombros. A e B se repetem 2x na semana (A2 e B2 com exercícios diferentes); C aparece 1x.",
    "days": {
      "seg": [
        "Chest + Triceps",
        "Peito + Tríceps"
      ],
      "ter": [
        "Back + Biceps",
        "Costas + Bíceps"
      ],
      "qua": [
        "Legs + Shoulders",
        "Quadríceps + Posteriores + Panturrilhas + Ombros"
      ],
      "qui": [
        "Chest + Triceps",
        "Peito + Tríceps"
      ],
      "sex": [
        "Back + Biceps",
        "Costas + Bíceps"
      ]
    }
  },
  "pplul": {
    "description": "Push / Pull / Legs dedicados de segunda a quarta, seguidos de Upper e Lower na quinta e sexta, que funcionam como uma segunda passada mais leve em cada grupo.",
    "days": {
      "seg": [
        "Push",
        "Peito + Ombros + Tríceps"
      ],
      "ter": [
        "Pull",
        "Costas + Ombro posterior + Bíceps"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas"
      ],
      "qui": [
        "Upper",
        "Peito + Costas + Ombro lateral + Bíceps + Tríceps"
      ],
      "sex": [
        "Lower",
        "Posteriores + Quadríceps + Glúteos + Panturrilhas"
      ]
    }
  },
  "vtap": {
    "description": "V-Taper: costas e ombros são a prioridade (largura das costas e deltoides), com peito e braços como suporte e um único dia de pernas. Costas aparecem 2x e ombros 3x na semana.",
    "days": {
      "seg": [
        "Back + Shoulders + Biceps",
        "Costas + Ombros + Bíceps"
      ],
      "ter": [
        "Chest + Triceps",
        "Peito + Tríceps"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas"
      ],
      "qui": [
        "Back + Upper Chest + Shoulders",
        "Costas + Peito superior + Ombros"
      ],
      "sex": [
        "Arms + Shoulders",
        "Bíceps + Tríceps + Ombros"
      ]
    }
  },
  "chestsup": {
    "description": "Especialização em peito superior: o peito superior é treinado 2x (segunda e quinta), com costas, ombros e braços como suporte e um único dia de pernas.",
    "days": {
      "seg": [
        "Upper Chest + Shoulders + Triceps",
        "Peito superior + Ombros + Tríceps"
      ],
      "ter": [
        "Back + Biceps",
        "Costas + Bíceps"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas"
      ],
      "qui": [
        "Upper Chest + Back",
        "Peito superior + Costas"
      ],
      "sex": [
        "Shoulders + Arms",
        "Ombros + Bíceps + Tríceps"
      ]
    }
  },
  "armspec": {
    "description": "Especialização em braços: bíceps e tríceps são trabalhados em 3 dias cada, encaixados nos dias de peito e costas, com um dia dedicado a ombros + braços e um único dia de pernas.",
    "days": {
      "seg": [
        "Chest + Triceps + Lateral Delts",
        "Peito + Tríceps + Ombro lateral"
      ],
      "ter": [
        "Back + Biceps",
        "Costas + Bíceps"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas"
      ],
      "qui": [
        "Shoulders + Arms",
        "Ombros + Bíceps + Tríceps"
      ],
      "sex": [
        "Chest + Back + Arms",
        "Peito + Costas + Bíceps + Tríceps"
      ]
    }
  },
  "backsupp": {
    "description": "Especialização em costas: dois dias com foco em costas (largura na segunda, espessura na sexta), com peito, ombros e braços como suporte e um único dia de pernas.",
    "days": {
      "seg": [
        "Back + Biceps",
        "Costas + Bíceps"
      ],
      "ter": [
        "Chest + Shoulders + Triceps",
        "Peito + Ombro lateral + Tríceps"
      ],
      "qua": [
        "Legs",
        "Quadríceps + Posteriores + Glúteos + Panturrilhas"
      ],
      "qui": [
        "Chest + Arms",
        "Peito + Bíceps + Tríceps"
      ],
      "sex": [
        "Back",
        "Costas + Ombro posterior"
      ]
    }
  },
  "legs2future": {
    "description": "Pernas 2x: dois dias de pernas com ênfases diferentes (Legs A com quadríceps + panturrilhas, Legs B com posteriores + glúteos + panturrilhas) e o superior distribuído nos outros três dias.",
    "days": {
      "seg": [
        "Chest + Shoulders + Triceps",
        "Peito + Ombros + Tríceps"
      ],
      "ter": [
        "Back + Biceps",
        "Costas + Bíceps"
      ],
      "qua": [
        "Legs A (Quad Focus)",
        "Quadríceps + Panturrilhas + Posteriores (complementar)"
      ],
      "qui": [
        "Chest + Back + Arms",
        "Peito + Costas + Bíceps + Tríceps"
      ],
      "sex": [
        "Legs B (Hamstring + Glute Focus)",
        "Posteriores + Glúteos + Panturrilhas + Quadríceps (complementar)"
      ]
    }
  }
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
  if(filter === 'REC') return planKey === 'rec' || planKey === 'rec_pump';
  if(filter === 'A') return planKey === 'rec' || planKey === 'rec_pump' || p.category === 'A';
  return p.category === filter;
}
