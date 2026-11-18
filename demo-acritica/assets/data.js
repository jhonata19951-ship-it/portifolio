// Conteúdo coletado do acritica.com em 17/11/2026 para a demonstração do novo layout.
// Os textos das matérias são resumos curtos. A matéria completa abre no portal oficial.
const U = 'https://www.acritica.com/wp-content/uploads/';

const EDITORIAS = {
  policia:        { nome: 'Polícia',        cor: '#5b2bb5' },
  manaus:         { nome: 'Manaus',         cor: '#0094d6' },
  politica:       { nome: 'Política',       cor: '#d6232f' },
  economia:       { nome: 'Economia',       cor: '#0f8a5f' },
  esportes:       { nome: 'Esportes',       cor: '#e8731a' },
  entretenimento: { nome: 'Entretenimento', cor: '#c2185b' },
  parintins:      { nome: 'Parintins',      cor: '#1f4fd1' },
  geral:          { nome: 'Geral',          cor: '#0b5aa3' },
  amazonia:       { nome: 'Amazônia',       cor: '#2e7d32' },
  saude:          { nome: 'Saúde',          cor: '#0f8a5f' },
  educacao:       { nome: 'Educação',       cor: '#7a5ea8' },
  opiniao:        { nome: 'Opinião',        cor: '#0d2340' }
};

// Ordem das abas do menu
const MENU = ['policia', 'manaus', 'politica', 'economia', 'esportes', 'entretenimento', 'parintins'];

var EM_ALTA = [
  { t: 'Recofarma', id: 'recofarma' },
  { t: 'Escala 5x2', id: 'escala-5x2' },
  { t: 'Sine Manaus', id: 'sine-manaus' },
  { t: 'Samuel Rosa na Ponta Negra', id: 'samuel-rosa' },
  { t: 'GTA 6', id: 'gta-6' },
  { t: 'Parintins 2027', ed: 'parintins' }
];

// Mais buscados (na busca do site). No portal real, vem dos dados de busca do próprio site.
var MAIS_BUSCADOS = [
  { t: 'Fies', id: 'fies' },
  { t: 'Concurso Semsa', id: 'semsa' },
  { t: 'Vini Jr.', id: 'vini-jr' },
  { t: 'Tema do Caprichoso', id: 'caprichoso-tema' },
  { t: 'Toadas do Garantido', id: 'garantido-toadas' },
  { t: 'Show do Uendel Pinheiro', id: 'uendel' }
];

var MATERIAS = [
  {
    id: 'recofarma', ed: 'geral', destaque: true,
    titulo: 'Transição da Recofarma ameaça 1,3 mil empregos na cadeia da Coca-Cola',
    linha: 'Na segunda-feira (16), centenas de trabalhadores e familiares realizaram um ato com pedido de esclarecimentos sobre uma possível saída da empresa do município',
    topicos: ['Trabalhadores fazem ato em Presidente Figueiredo e cobram explicações', 'Recofarma fala em "transição planejada" desde 2023', 'Prefeito defende corredor verde na BR-174 como alternativa'],
    img: U + '2026/11/WhatsApp-Image-2026-11-17-at-15.32.45.jpeg',
    alt: 'Trabalhadores e familiares em ato em Presidente Figueiredo',
    credito: 'Divulgação / Prefeitura de Presidente Figueiredo',
    autor: 'Waldick Júnior', data: '17/11/2026', hora: '17h43',
    texto: [
      'Cerca de 1,3 mil empregos diretos e indiretos em Presidente Figueiredo, a 128 km de Manaus, podem ser afetados pelo possível fim das atividades da Agropecuária Jayoro, fornecedora da Recofarma, fabricante da Coca-Cola no Brasil.',
      'Trabalhadores e familiares fizeram um ato na segunda-feira (16). No domingo, o prefeito Fernando Vieira se reuniu com o governador eleito Omar Aziz e com o senador Eduardo Braga em busca de uma solução.',
      'Ao A Crítica, a Recofarma confirmou que a relação comercial passa por uma transição planejada, discutida desde 2023. A empresa informou que a safra de cana de 2027 está garantida e que o processamento do guaraná segue até dezembro de 2027.'
    ],
    url: 'https://www.acritica.com/geral/transicao-da-recofarma-ameaca-13-mil-empregos-na-cadeia-da-coca-cola/'
  },
  {
    id: 'ipaam', ed: 'amazonia',
    titulo: 'Ipaam multa em R$ 1 milhão homem com histórico de desmatamento ilegal em Guajará',
    linha: 'Responsável possuía registro de embargo ambiental, e nova autuação resultou na restrição de 216 hectares de vegetação nativa',
    img: U + '2026/11/WhatsApp-Image-2026-11-17-at-13.32.22-1024x682.jpeg',
    alt: 'Área de vegetação nativa embargada pelo Ipaam em Guajará',
    credito: 'Reprodução', autor: 'Redação', data: '17/11/2026', hora: '17h59',
    texto: [
      'O Ipaam aplicou uma multa de pouco mais de R$ 1 milhão a um homem com histórico de desmatamento ilegal em Guajará, a 1.476 km de Manaus. A autuação foi feita de forma remota.',
      'A ação embargou 216,56 hectares de vegetação nativa, o equivalente a cerca de 303 campos de futebol. A irregularidade foi identificada pelo centro de monitoramento ambiental do órgão.',
      'O autuado tem 20 dias para pagar a multa ou apresentar defesa. Denúncias de desmatamento podem ser feitas pelo WhatsApp do Ipaam.'
    ],
    url: 'https://www.acritica.com/amazonia/ipaam-multa-em-r-1-milhao-homem-com-historico-de-desmatamento-ilegal-em-guajara/'
  },
  {
    id: 'hemoam', ed: 'manaus',
    titulo: 'Desabamento no Hemoam deixa três pessoas feridas em Manaus',
    linha: 'Vítimas tiveram escoriações leves após teto de cobertura ceder no Bloco A; trecho foi isolado e passa por vistoria técnica',
    img: U + '2026/11/WhatsApp-Image-2026-11-17-at-13.04.46-1-951x630.jpeg',
    alt: 'Cobertura do Bloco A do Hemoam após o desabamento',
    credito: 'Divulgação', autor: 'Redação', data: '17/11/2026', hora: '13h59',
    texto: [
      'Três pessoas ficaram levemente feridas na manhã desta terça-feira (17) após o desabamento do teto de uma cobertura no Bloco A do Hemoam, na avenida Constantino Nery, zona Centro-Sul de Manaus.',
      'Segundo a fundação, a estrutura ligava os blocos A e B e era usada como passagem. As vítimas foram atendidas e encaminhadas para avaliação médica.',
      'O trecho foi isolado e passa por vistoria. O Hemoam informou que a coleta de sangue e os atendimentos seguem normalmente.'
    ],
    url: 'https://www.acritica.com/manaus/desabamento-no-hemoam-deixa-tres-pessoas-feridas-em-manaus/'
  },
  {
    id: 'pim', ed: 'economia',
    titulo: 'PIM fatura R$ 188 bilhões até setembro e projeta recorde anual',
    linha: 'Balanço da Suframa aponta mais de 136 mil empregos diretos e expectativa de alcançar R$ 240 bilhões no fechamento do ano',
    img: U + '2026/11/thumb-1280-426-1200x630.webp',
    alt: 'Linha de produção no Polo Industrial de Manaus',
    credito: 'Divulgação', autor: 'Redação', data: '17/11/2026', hora: '08h26',
    texto: [
      'O Polo Industrial de Manaus somou R$ 188 bilhões em faturamento até setembro, segundo balanço da Suframa.',
      'A Zona Franca emprega diretamente mais de 136 mil pessoas. A projeção é que o faturamento passe de R$ 240 bilhões no fim do ano, um novo recorde.',
      'A falta de terrenos para novas fábricas aparece como o principal desafio no curto e médio prazo.'
    ],
    url: 'https://www.acritica.com/economia/pim-fatura-r-188-bilhoes-ate-setembro-e-projeta-recorde-anual/'
  },
  {
    id: 'robo', ed: 'esportes',
    titulo: 'Robô humanoide será atração inédita na primeira corrida FPFtech Run em Manaus',
    linha: 'Unitree G1 participará da largada da corrida de 5 km, no Alphaville, e ficará no pódio para fotos com os participantes',
    img: U + '2026/11/WhatsApp-Image-2026-11-17-at-19.53.21-1066x630.jpeg',
    alt: 'Robô humanoide Unitree G1 da FPFtech',
    credito: 'Divulgação', autor: 'Redação', data: '17/11/2026', hora: '20h56',
    texto: [
      'A primeira FPFtech Run, marcada para 22 de novembro, terá a participação de um robô humanoide, algo inédito em corridas de rua em Manaus.',
      'O Unitree G1 faz parte de uma frente de pesquisa da FPFtech em robótica e inteligência artificial. Ele estará na largada e depois no pódio, para fotos com o público.',
      'A prova tem 5 km pelo Alphaville, com largada às 6h, e uma caminhada participativa de 3 km.'
    ],
    url: 'https://www.acritica.com/esportes/robo-humanoide-sera-atracao-inedita-na-primeira-corrida-pedestre-fpftech-run-em-manaus/'
  },
  {
    id: 'escala-5x2', ed: 'geral',
    titulo: 'Decreto que regulamenta escala 5x2 será assinado na quinta-feira',
    linha: 'Objetivo é balizar o entendimento de trabalhadores e empregadores',
    img: U + '2026/11/aaaaaaaaaaaaaaaa.jpg',
    alt: 'Ministro do Trabalho Luiz Marinho durante entrevista',
    credito: 'Fabio Rodrigues-Pozzebom / Agência Brasil', autor: 'Redação', data: '17/11/2026', hora: '19h37',
    texto: [
      'O presidente Lula assina na quinta-feira (19) o decreto que regulamenta a escala de trabalho 5x2. A nova escala passa a valer a partir de 16 de dezembro.',
      'A informação foi dada pelo ministro do Trabalho, Luiz Marinho. O decreto deve orientar as negociações entre trabalhadores e empregadores.',
      'O fim da escala 6x1 foi aprovado pelo Congresso no mês passado, com redução da jornada de 44 para 40 horas semanais e regra de transição.'
    ],
    url: 'https://www.acritica.com/geral/decreto-que-regulamenta-escala-5x2-sera-assinado-na-quinta-feira/'
  },
  {
    id: 'samuel-rosa', ed: 'entretenimento',
    titulo: 'Cantor Samuel Rosa faz show neste sábado (21) na Ponta Negra',
    linha: 'Ex-vocalista do Skank é atração principal da 11ª edição do NEMA, que começa às 18h',
    img: U + '2026/11/1-WhatsApp-Image-2026-11-16-at-19.12.13.webp',
    alt: 'Cantor Samuel Rosa com guitarra no palco',
    credito: 'Divulgação', autor: 'Redação', data: '17/11/2026', hora: '16h54',
    texto: [
      'Samuel Rosa, ex-vocalista do Skank, é a atração principal do NEMA neste sábado (21), na Praia da Ponta Negra.',
      'A programação começa às 18h, com DJ John Cavalcante e a banda Camelos Barbados. O show de Samuel está previsto para as 21h.',
      'A organização espera cerca de 5 mil pessoas. Os ingressos estão na reta final de vendas.'
    ],
    url: 'https://www.acritica.com/entretenimento/samuel-rosa-faz-show-neste-sabado-21-na-ponta-negra/'
  },
  {
    id: 'jalison', ed: 'esportes',
    titulo: 'Manaus anuncia zagueiro Jalison e chega a 26 reforços para 2027',
    linha: 'Aos 23 anos, defensor terá a primeira experiência no futebol amazonense',
    img: U + '2026/11/image_be934581-1200x630.jpeg',
    alt: 'Zagueiro Jalison conduzindo a bola em campo',
    credito: 'Arquivo pessoal', autor: 'Redação', data: '17/11/2026', hora: '15h14',
    texto: [
      'O Manaus anunciou o zagueiro Jalison, de 23 anos, como 26º reforço para a temporada 2027, quando disputa o Barezão, a Copa do Brasil e a Série D.',
      'Será a primeira passagem do jogador pelo futebol amazonense. Em 2026, ele atuou por clubes do Ceará, da Paraíba e do Rio Grande do Sul.',
      'A pré-temporada do Gavião Real começa em menos de duas semanas.'
    ],
    url: 'https://www.acritica.com/esportes/manaus-anuncia-zagueiro-jalison-chega-a-26-reforcos-e-amplia-opcoes-para-a-defesa-em-2027/'
  },
  {
    id: 'ajuste-fiscal', ed: 'politica',
    titulo: 'Ajuste fiscal do governo enfrenta resistência dentro da bancada do PT',
    linha: 'Parlamentares como Lindbergh Farias defendem taxação de super-ricos em vez de corte de gastos',
    img: U + '2026/11/thumb-1280-419-1200x630.webp',
    alt: 'Plenário da Câmara dos Deputados',
    credito: 'Reprodução', autor: 'Redação', data: '17/11/2026', hora: '08h56',
    texto: [
      'A proposta de ajuste fiscal do governo federal enfrenta resistência dentro da própria bancada do PT na Câmara.',
      'Parte dos deputados defende aumentar a arrecadação com tributação sobre as maiores rendas, em vez de limitar gastos e incentivos.',
      'O presidente em exercício, Geraldo Alckmin, defendeu o reequilíbrio das contas e minimizou as divergências.'
    ],
    url: 'https://www.acritica.com/politica/ajuste-fiscal-do-governo-enfrenta-resistencia-dentro-da-bancada-do-pt/'
  },
  {
    id: 'uendel', ed: 'entretenimento',
    titulo: 'Uendel Pinheiro reúne atrações para oito horas de pagode',
    linha: 'Evento será em 7 de dezembro, no Podium da Arena da Amazônia, com palco 360° e quatro atrações',
    img: U + '2026/11/1-WhatsApp-Image-2026-11-16-at-09.07.36.webp',
    alt: 'Cantor Uendel Pinheiro',
    credito: 'Divulgação', autor: 'Redação', data: '17/11/2026', hora: '16h42',
    texto: [
      'O Último Pagode do Ano reúne Uendel Pinheiro, Gustavo Lins, Thiago Soares e Bruno Diegues em oito horas de música sem intervalos.',
      'A festa será no dia 7 de dezembro, a partir das 20h, no Podium da Arena da Amazônia, com dois palcos e setores em volta de um palco 360°.'
    ],
    url: 'https://www.acritica.com/entretenimento/uendel-pinheiro-reune-atracoes-para-oito-horas-de-pagode/'
  },
  {
    id: 'sine-manaus', ed: 'manaus',
    titulo: 'Sine Manaus oferta 1.025 vagas de emprego nesta quarta-feira',
    linha: 'Atendimento das 8h às 14h nos postos da Constantino Nery e do shopping Phelippe Daou',
    img: U + '2026/10/Semtepi-Vagas-do-Sine-1024x683.jpg',
    alt: 'Candidatos no posto do Sine Manaus',
    credito: 'Divulgação', autor: 'Redação', data: '17/11/2026', hora: '18h15',
    texto: [
      'O Sine Manaus oferece vagas em várias áreas nesta quarta-feira (18), das 8h às 14h.',
      'Os candidatos devem ir a um dos postos com documentos originais, currículo e comprovante de vacinação.'
    ],
    url: 'https://www.acritica.com/manaus/sine-manaus-oferta-1-025-vagas-de-emprego-nesta-quarta-feira/'
  },
  {
    id: 'semsa', ed: 'geral',
    titulo: 'Município deve nomear aprovados em concurso da Semsa no lugar de temporários, determina Justiça',
    linha: 'Servidores com contratação precária deverão ser desligados a cada ato de posse de concursados',
    img: U + '2026/11/justica-concurso-1200x630.jpg',
    alt: 'Fachada do Tribunal de Justiça do Amazonas',
    credito: 'Divulgação', autor: 'Redação', data: '17/11/2026', hora: '15h30',
    texto: [
      'O Tribunal de Justiça do Amazonas manteve a decisão que obriga a Prefeitura de Manaus a substituir temporários da Secretaria de Saúde por aprovados em concurso.',
      'A decisão foi unânime. Segundo a relatora, a troca não aumenta a despesa com pessoal, apenas regulariza os vínculos.'
    ],
    url: 'https://www.acritica.com/geral/municipio-deve-nomear-aprovados-em-concurso-da-semsa-para-funcoes-exercidas-por-temporarios-determina-justica/'
  },
  {
    id: 'gta-6', ed: 'entretenimento',
    titulo: 'GTA 6 chega nesta quinta-feira e vendas antecipadas estão a todo vapor',
    linha: 'Jogo acumulava cerca de 12,1 milhões de pré-vendas digitais no mundo até 13 de novembro',
    img: U + '2026/11/WhatsApp-Image-2026-11-16-at-15.12.44-1200x630.jpeg',
    alt: 'Arte de divulgação do jogo GTA 6',
    credito: 'Divulgação', autor: 'Redação', data: '17/11/2026', hora: '18h32',
    texto: [
      'GTA 6 chega na quinta-feira (19) para PlayStation 5 e Xbox Series, depois de 13 anos de espera.',
      'No Amazonas, o jogo já é vendido de forma antecipada por lojas do segmento gamer.'
    ],
    url: 'https://www.acritica.com/entretenimento/lancamento-mundial-gta-6-chega-nesta-quinta-feira-e-vendas-antecipadas-estao-a-todo-vapor/'
  },
  {
    id: 'nos-bairros', ed: 'manaus',
    titulo: 'A Crítica nos Bairros terá última edição do ano no dia 5 de dezembro',
    img: U + '2026/11/Captura-de-tela-2026-11-17-131439.png',
    alt: 'Ação A Crítica nos Bairros em Manaus',
    credito: 'Divulgação', autor: 'Redação', data: '17/11/2026',
    linha: 'A última edição de 2026 acontece no dia 5 de dezembro',
    texto: ['O projeto A Crítica nos Bairros terá a última edição do ano no dia 5 de dezembro, em Manaus.'],
    url: 'https://www.acritica.com/manaus/a-critica-nos-bairros-tera-ultima-edicao-do-ano-no-dia-5-de-dezembro-em-manaus/'
  },
  { id: 'pc-am-procurado',
    ed: 'policia',
    titulo: 'PC-AM divulga imagem de homem procurado por roubo a restaurante no Japiim',
    linha: 'Denúncias podem ser feitas pelo 197 e (92) 3667-7575, da PC-AM, ou pelo 181, da SSP-AM',
    img: U + '2026/11/Amarelo-Notas-Musicais-Treinador-Vocal-Cartao-de-Visita-2026-11-17T153421.275.png',
    alt: 'Imagem divulgada pela Polícia Civil do homem procurado',
    credito: 'Divulgação / PC-AM',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '16h15',
    texto: ['A Polícia Civil do Amazonas pede ajuda da população para localizar um homem de 34 anos procurado por um roubo a um restaurante no bairro Japiim, em Manaus, no dia 8 de novembro.', 'Segundo a polícia, ele e um comparsa, que já está preso, levaram celulares e objetos pessoais de funcionários. A Justiça já expediu o mandado de prisão. A denúncia pode ser feita de forma anônima.'],
    url: 'https://www.acritica.com/policia/pc-am-divulga-imagem-de-homem-procurado-por-roubo-a-restaurante-no-bairro-japiim/' },
  { id: 'depca-inqueritos',
    ed: 'policia',
    titulo: 'Amazonas registra mais de 1,9 mil inquéritos e 283 prisões por crimes contra crianças e adolescentes',
    linha: 'Resultados refletem o trabalho investigativo da delegacia especializada e a atuação integrada na proteção de crianças e adolescentes',
    img: U + '2026/11/WhatsApp-Image-2026-11-17-at-09.57.23-1200x630.jpeg',
    alt: 'Fachada da delegacia especializada em proteção à criança e ao adolescente',
    credito: 'Divulgação',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '16h00',
    texto: ['A Delegacia Especializada em Proteção à Criança e ao Adolescente (Depca) fez 283 prisões entre janeiro e outubro de 2026 e enviou cerca de 1,9 mil inquéritos à Justiça.', 'Segundo a delegacia, a média anual de prisões passou de 59 para mais de 170. O trabalho inclui o acolhimento das vítimas durante todo o processo.'],
    url: 'https://www.acritica.com/policia/amazonas-registra-mais-de-19-inqueritos-e-283-prisoes-por-crimes-contra-criancas-e-adolescentes/' },
  { id: 'preso-invadir-casa',
    ed: 'policia',
    titulo: 'Homem é preso após invadir casa da ex e persegui-la de moto em Manaus',
    linha: 'Suspeito não aceitava o término e chegou a passar o pneu da motocicleta por cima do pé da jovem no bairro Santa Etelvina',
    img: U + '2026/11/thumb-1280-424-1200x630.webp',
    alt: 'Viatura da Polícia Civil em Manaus',
    credito: 'Reprodução',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '08h36',
    texto: ['Um homem foi preso em Manaus depois de invadir a casa da ex-companheira, ameaçá-la e persegui-la de moto, no dia 8 de novembro.', 'A vítima, de 20 anos, registrou ocorrência e pediu medida protetiva. A Justiça decretou a prisão preventiva e o suspeito foi localizado na zona Norte.'],
    url: 'https://www.acritica.com/policia/homem-e-preso-apos-invadir-casa-da-ex-e-persegui-la-de-moto-em-manaus/' },
  { id: 'mulher-presa-ameaca',
    ed: 'policia',
    titulo: 'Mulher é presa por ameaça e descumprimento de medida protetiva contra a sobrinha',
    linha: 'A vítima relatou que a suspeita tem comportamento agressivo',
    img: U + '2026/11/WhatsApp-Image-2026-11-17-at-13.27.58-1200x630.jpeg',
    alt: 'Viatura da Polícia Civil do Amazonas',
    credito: 'Divulgação / PC-AM',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '17h25',
    texto: ['A Polícia Civil prendeu uma mulher de 48 anos, por ordem judicial, por ameaça, descumprimento de medida protetiva e injúria contra a sobrinha, de 20 anos.', 'O caso começou em setembro, no bairro Coroado. Mesmo depois da medida protetiva, a suspeita voltou a agredir a vítima em novembro.'],
    url: 'https://www.acritica.com/policia/mulher-e-presa-por-ameaca-descumprimento-de-medida-protetiva-e-injuria-contra-propria-sobrinha/' },
  { id: 'pf-banco-master',
    ed: 'politica',
    titulo: 'Diretor-geral da PF nega racha interno após crise no caso Banco Master',
    linha: 'Andrei Rodrigues rechaçou divisão após afastar delegados que citaram ministros do STF em relatórios de investigação',
    img: U + '2026/11/thumb-1280-417-1200x630.webp',
    alt: 'Diretor-geral da Polícia Federal, Andrei Rodrigues',
    credito: 'Reprodução',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '08h52',
    texto: ['O diretor-geral da Polícia Federal, Andrei Rodrigues, negou divisão interna depois do afastamento de dois delegados ligados às investigações do caso Banco Master.', 'O Senado convidou o diretor e o ministro da Justiça para explicar as mudanças. O governo acompanha o caso.'],
    url: 'https://www.acritica.com/politica/diretor-geral-da-pf-nega-racha-interno-apos-crise-no-caso-banco-master/' },
  { id: 'trump-xi-putin',
    ed: 'politica',
    titulo: 'Trump, Xi e Putin se reúnem na China em encontro inédito',
    linha: 'Reunião trilateral em Shenzhen abordará controle de armas nucleares e tensões globais durante a cúpula da APEC',
    img: U + '2026/11/thumb-1280-416-1200x630.webp',
    alt: 'Donald Trump, Xi Jinping e Vladimir Putin',
    credito: 'Reprodução',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '08h50',
    texto: ['Os presidentes dos Estados Unidos, da China e da Rússia terão o primeiro encontro trilateral da história, em Shenzhen, durante a cúpula da APEC.', 'Na pauta estão o controle de armas nucleares e a trégua comercial entre Estados Unidos e China.'],
    url: 'https://www.acritica.com/politica/trump-xi-e-putin-se-reunem-na-china-em-encontro-inedito/' },
  { id: 'vitinho',
    ed: 'esportes',
    titulo: 'Manauara EC renova com o lateral-direito Vitinho para a temporada 2027',
    linha: 'Lateral é o atleta com mais jogos pelo clube, com 82 partidas, e lidera o ranking de assistências da história do time',
    img: U + '2026/11/WhatsApp-Image-2026-11-17-at-10.52.35-1200x630.jpeg',
    alt: 'Lateral Vitinho com a camisa do Manauara',
    credito: 'Divulgação',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '14h30',
    texto: ['O Manauara renovou com o lateral-direito Vitinho para 2027. Ele é o recordista de jogos do clube, com 82 partidas, além de 19 assistências e 7 gols.', 'Em 2027 o time disputa o Barezão, a Copa do Brasil e a Série D.'],
    url: 'https://www.acritica.com/esportes/manauara-ec-renova-com-o-lateral-direito-vitinho-para-a-temporada-2027/' },
  { id: 'vini-jr',
    ed: 'esportes',
    titulo: 'Vini Jr. brilha e Brasil goleia Singapura em último jogo do ano',
    linha: 'Vitória por 7 a 0 teve três gols do atacante nos primeiros 20 minutos',
    img: U + '2026/11/vini_jr_hat_trick-1170x630.jpg',
    alt: 'Vini Jr. comemorando gol pela Seleção Brasileira',
    credito: 'Reprodução',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '12h37',
    texto: ['A Seleção Brasileira goleou Singapura por 7 a 0 no último compromisso do ano. Vini Jr. marcou três gols nos primeiros 21 minutos, seu primeiro hat-trick pela Seleção.', 'Endrick, Estevão e Rayan também marcaram. Os próximos amistosos estão previstos para março de 2027.'],
    url: 'https://www.acritica.com/esportes/vini-jr-brilha-e-brasil-goleia-singapura-em-ultimo-confronto-do-ano/' },
  { id: 'mostra-cinema',
    ed: 'entretenimento',
    titulo: '16ª Mostra de Cinema e Direitos Humanos tem filmes e debates gratuitos em Manaus',
    linha: 'A mostra acontece de 23 a 26 de novembro, no Ifam, com programação gratuita e acessível',
    img: U + '2026/11/WhatsApp-Image-2026-11-17-at-16.19.15-1200x630.jpeg',
    alt: 'Cartaz da 16ª Mostra de Cinema e Direitos Humanos',
    credito: 'Divulgação',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '15h27',
    texto: ['A 16ª Mostra de Cinema e Direitos Humanos acontece em Manaus de 23 a 26 de novembro, com sessões e debates gratuitos sobre envelhecimento e ancestralidade.', 'A programação tem sessão infantil e recursos de acessibilidade. A homenageada desta edição é a escritora e atriz Elisa Lucinda.'],
    url: 'https://www.acritica.com/entretenimento/16a-mostra-de-cinema-e-direitos-humanos-realiza-exibicao-de-filmes-e-debates-gratuitos-em-manaus/' },
  { id: 'fies',
    ed: 'educacao',
    titulo: 'Fies: candidatos pré-selecionados devem validar dados da inscrição',
    linha: 'Prazo para validação vai até esta quarta-feira (18)',
    img: U + '2026/11/fnde_mca-0312203430-1170x630.webp',
    alt: 'Estudantes em sala de aula',
    credito: 'Divulgação / FNDE',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '13h47',
    texto: ['Os pré-selecionados na chamada de vagas remanescentes do Fies devem validar os dados na instituição de ensino até quarta-feira (18).', 'São 50 mil vagas neste ano. Quem não foi pré-selecionado entra automaticamente na lista de espera, com chamadas de 25 a 30 de novembro.'],
    url: 'https://www.acritica.com/educacao/fies-candidatos-pre-selecionados-devem-validar-dados-da-inscricao/' },
  { id: 'suplementos',
    ed: 'saude',
    titulo: 'Suplementos alimentares têm fabricação e venda suspensas no Brasil',
    linha: 'Anvisa determinou o recolhimento dos produtos',
    img: U + '2026/11/omjldi5ljzo7lpdvr5fyrylgmy_1-1170x630.webp',
    alt: 'Frascos de suplementos alimentares',
    credito: 'Reprodução',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '12h53',
    texto: ['A Anvisa suspendeu a fabricação e a venda de suplementos de pelo menos três empresas por irregularidades.', 'Entre os problemas apontados estão alegações de saúde sem aprovação e falhas na fabricação. A orientação é parar de usar os produtos citados.'],
    url: 'https://www.acritica.com/saude/suplementos-alimentares-tem-fabricacao-e-venda-suspensas-no-brasil/' },
  { id: 'matheus-pessanha',
    ed: 'entretenimento',
    titulo: 'Projeto de samba traz Matheus Pessanha a Manaus',
    linha: 'O cantor participa da primeira edição do Bendito Quintal, no dia 19, no Estatuto do Samba',
    img: U + '2026/11/1-WhatsApp-Image-2026-11-16-at-10.57.16.webp',
    alt: 'Cantor Matheus Pessanha',
    credito: 'Divulgação',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '16h02',
    texto: ['O cantor Matheus Pessanha é a atração da primeira edição do Bendito Quintal, no dia 19, no Quintal do Estatuto do Samba, em Manaus.', 'O repertório traz clássicos do samba, com músicos convidados da região. Novas edições estão previstas para 2027.'],
    url: 'https://www.acritica.com/entretenimento/projeto-de-samba-traz-matheus-pessanha-a-manaus/' },
  { id: 'garantido-toadas',
    ed: 'parintins',
    titulo: 'Garantido abre seleção de toadas para o Festival de Parintins 2027',
    linha: 'Compositores já podem inscrever obras para disputar vaga no álbum oficial do bumbá vermelho e branco',
    img: U + '2026/11/thumb-1280-81-1200x630.webp',
    alt: 'Arena do Bumbódromo com as cores do Boi Garantido',
    credito: 'Reprodução',
    autor: 'Redação',
    data: '04/11/2026',
    hora: '17h10',
    texto: ['O Boi Garantido abriu o edital para escolher as toadas do álbum de 2027, que vai embalar a apresentação no Bumbódromo.', 'As regras e os prazos de inscrição estão no edital publicado pela diretoria do bumbá.'],
    url: 'https://www.acritica.com/parintins/garantido-abre-selecao-de-toadas-para-o-festival-de-parintins-2027/' },
  { id: 'isabelle-alcantara',
    ed: 'parintins',
    titulo: 'Conheça Isabelle Alcântara, a nova Rainha do Folclore do Boi Garantido',
    linha: 'Nascida e criada na Baixa do Xanda, a cunhatã traz para a arena a graça e a ancestralidade do povo de Parintins',
    img: U + '2026/09/1.415447.jpg',
    alt: 'Isabelle Alcântara, Rainha do Folclore do Boi Garantido',
    credito: 'Divulgação / Boi Garantido',
    autor: 'Redação',
    data: '20/09/2026',
    hora: '00h04',
    texto: ['O Boi Garantido apresentou Isabelle Alcântara como a nova Rainha do Folclore para o Festival de 2027.', 'Estudante de enfermagem nascida em Parintins, ela já participou do Garantido Show. O bumbá destacou a força das mulheres da comunidade.'],
    url: 'https://www.acritica.com/parintins/conheca-isabelle-alcantara-a-nova-rainha-do-folclore-do-boi-garantido/' },
  { id: 'caprichoso-tema',
    ed: 'parintins',
    titulo: 'Caprichoso anuncia tema para 2027: "Criação Que Vem da Alma"',
    linha: 'Em comemoração aos 113 anos, o boi azul e branco valoriza a ancestralidade e a identidade cultural de Parintins em busca do bicampeonato',
    img: U + '2026/11/WhatsApp-Image-2026-11-01-at-15.36.37-1200x630.jpeg',
    alt: 'Apresentação do Boi Caprichoso na arena',
    credito: 'Divulgação / Boi Caprichoso',
    autor: 'Redação',
    data: '01/11/2026',
    hora: '15h48',
    texto: ['O Boi Caprichoso anunciou o tema da temporada 2027: "Caprichoso: Criação Que Vem da Alma".', 'A proposta celebra as raízes culturais e a identidade artística de Parintins, com a comunidade envolvida na preparação para o festival.'],
    url: 'https://www.acritica.com/parintins/caprichoso-anuncia-tema-para-o-festival-de-parintins-2027-criacao-que-vem-da-alma/' },
  { id: 'caprichoso-edital',
    ed: 'parintins',
    titulo: 'Caprichoso abre edital de toadas para o álbum musical de 2027',
    linha: 'Inscrições vão até 20 de novembro; cada obra selecionada recebe R$ 6 mil, com bônus para as três primeiras',
    img: U + '2026/10/1.417147-1200x630.jpg',
    alt: 'Músicos do Boi Caprichoso',
    credito: 'Divulgação / Boi Caprichoso',
    autor: 'Redação',
    data: '06/10/2026',
    hora: '22h45',
    texto: ['O Caprichoso abriu o edital de toadas para o álbum de 2027. As inscrições são gratuitas e vão até 20 de novembro.', 'Cada toada aprovada recebe R$ 6 mil, e as três melhores ganham um prêmio extra. A fase final será aberta ao público.'],
    url: 'https://www.acritica.com/parintins/caprichoso-abre-edital-de-toadas-para-o-album-musical-de-2027/' },
  { id: 'cops-challenge',
    ed: 'opiniao',
    titulo: 'COPS Challenge reúne integrantes das forças de segurança em noite de lutas',
    linha: 'Evento no Centro Cultural dos Povos da Amazônia teve 23 combates e representantes de oito instituições',
    img: U + '2026/11/ee768ad6-6560-45cd-86aa-989009e78257.jpeg',
    alt: 'Atletas das forças de segurança no COPS Challenge',
    credito: 'Divulgação',
    autor: 'Almério Augusto',
    data: '17/11/2026',
    hora: '09h00',
    texto: ['O COPS Challenge reuniu 46 atletas das forças de segurança em 23 lutas de grappling, no Centro Cultural dos Povos da Amazônia.', 'A iniciativa usa as artes marciais para integrar as instituições e valorizar os profissionais da segurança pública.'],
    url: 'https://www.acritica.com/colunas/almerio-augusto/opiniao/cops-challenge-reune-guerreiros-integrantes-das-forcas-de-seguranca-em-noite-espetacular-de-lutas-casadas/' },
  { id: 'mulheres-negras',
    ed: 'opiniao',
    titulo: 'Uma em cada três mulheres negras sofreu violência doméstica em 2025',
    linha: 'Os números mostram como a violência e a vulnerabilidade econômica se sobrepõem',
    img: U + '2018/01/1.177474.jpg',
    alt: 'Mulher em silhueta',
    credito: 'Arquivo',
    autor: 'Redação',
    data: '17/11/2026',
    hora: '08h08',
    texto: ['Pesquisa do DataSenado mostra que uma em cada três mulheres negras sofreu violência doméstica ou familiar no último ano.', 'A maioria das vítimas vive com até dois salários mínimos, e boa parte conhece pouco a Lei Maria da Penha.'],
    url: 'https://www.acritica.com/colunas/redacao/opiniao/uma-em-cada-tres-mulheres-negras-sofreu-violencia-domestica-em-2025/' },
  { id: 'secretarios-crime',
    ed: 'opiniao',
    titulo: 'Secretários defendem estrutura nacional contra o crime organizado',
    linha: 'A coluna também trata do acompanhamento do MPAM sobre os Procons na prevenção ao superendividamento',
    img: U + '2019/04/1.70106.jpg',
    alt: 'Colunista André Alves',
    credito: 'Arquivo',
    autor: 'André Alves',
    data: '17/11/2026',
    hora: '07h58',
    texto: ['Secretários de segurança defendem mais troca de informações e operações conjuntas contra o crime organizado.', 'A coluna também aborda o acompanhamento do Ministério Público sobre os Procons na prevenção ao superendividamento.'],
    url: 'https://www.acritica.com/colunas/andre-alves/opiniao/secretarios-defendem-estrutura-nacional-contra-o-crime-organizado/' }
];

// Linha do tempo "Agora"
// Página inicial: quais matérias aparecem em cada bloco (as notícias ao vivo substituem isto)
var HOME = {
  hero: 'recofarma',
  cards: ['ipaam', 'hemoam', 'pim'],
  manaus: ['sine-manaus', 'escala-5x2', 'semsa', 'nos-bairros'],
  politica: 'ajuste-fiscal',
  esportes: ['robo', 'jalison'],
  entretenimento: ['samuel-rosa', 'uendel', 'gta-6']
};

var AGORA = [
  { h: '20:56', ed: 'esportes', t: 'Robô humanoide será atração na FPFtech Run', id: 'robo' },
  { h: '19:37', ed: 'geral', t: 'Decreto da escala 5x2 será assinado na quinta-feira', id: 'escala-5x2' },
  { h: '18:32', ed: 'entretenimento', t: 'GTA 6 chega nesta quinta e pré-venda está a todo vapor', id: 'gta-6' },
  { h: '18:15', ed: 'manaus', t: 'Sine Manaus oferta 1.025 vagas nesta quarta', id: 'sine-manaus' },
  { h: '15:27', ed: 'entretenimento', t: 'Mostra de Cinema e Direitos Humanos tem sessões gratuitas', url: 'https://www.acritica.com/entretenimento/16a-mostra-de-cinema-e-direitos-humanos-realiza-exibicao-de-filmes-e-debates-gratuitos-em-manaus/' },
  { h: '13:47', ed: 'educacao', t: 'Fies: pré-selecionados devem validar dados da inscrição', url: 'https://www.acritica.com/educacao/fies-candidatos-pre-selecionados-devem-validar-dados-da-inscricao/' },
  { h: '12:53', ed: 'saude', t: 'Suplementos alimentares têm venda suspensa no Brasil', url: 'https://www.acritica.com/saude/suplementos-alimentares-tem-fabricacao-e-venda-suspensas-no-brasil/' }
];

// Listas só com título (sem foto)
var LISTAS = {
  entretenimento: [
    { t: 'Mostra de Cinema e Direitos Humanos tem sessões gratuitas em Manaus', id: 'mostra-cinema' },
    { t: 'Projeto de samba traz Matheus Pessanha a Manaus', id: 'matheus-pessanha' }
  ],
  policia: [
    { t: 'PC-AM divulga imagem de homem procurado por roubo a restaurante no Japiim', url: 'https://www.acritica.com/policia/pc-am-divulga-imagem-de-homem-procurado-por-roubo-a-restaurante-no-bairro-japiim/' },
    { t: 'Amazonas registra mais de 1,9 mil inquéritos e 283 prisões por crimes contra crianças e adolescentes', url: 'https://www.acritica.com/policia/amazonas-registra-mais-de-19-inqueritos-e-283-prisoes-por-crimes-contra-criancas-e-adolescentes/' },
    { t: 'Homem é preso após invadir casa da ex e persegui-la de moto em Manaus', url: 'https://www.acritica.com/policia/homem-e-preso-apos-invadir-casa-da-ex-e-persegui-la-de-moto-em-manaus/' },
    { t: 'Mulher é presa por ameaça e descumprimento de medida protetiva', url: 'https://www.acritica.com/policia/mulher-e-presa-por-ameaca-descumprimento-de-medida-protetiva-e-injuria-contra-propria-sobrinha/' }
  ],
  politica: [
    { t: 'Diretor-geral da PF nega racha interno após crise no caso Banco Master', url: 'https://www.acritica.com/politica/diretor-geral-da-pf-nega-racha-interno-apos-crise-no-caso-banco-master/' },
    { t: 'Trump, Xi e Putin se reúnem na China em encontro inédito', url: 'https://www.acritica.com/politica/trump-xi-e-putin-se-reunem-na-china-em-encontro-inedito/' }
  ],
  esportes: [
    { t: 'Manauara EC renova com o lateral-direito Vitinho para 2027', url: 'https://www.acritica.com/esportes/manauara-ec-renova-com-o-lateral-direito-vitinho-para-a-temporada-2027/' },
    { t: 'Vini Jr. brilha e Brasil goleia Singapura em último jogo do ano', url: 'https://www.acritica.com/esportes/vini-jr-brilha-e-brasil-goleia-singapura-em-ultimo-confronto-do-ano/' }
  ]
};

// Parintins: metade Garantido, metade Caprichoso
var PARINTINS = {
  garantido: [
    { t: 'Garantido abre seleção de toadas para o Festival de Parintins 2027', d: '04/11/2026', img: U + '2026/11/thumb-1280-81-300x169.webp', url: 'https://www.acritica.com/parintins/garantido-abre-selecao-de-toadas-para-o-festival-de-parintins-2027/' },
    { t: 'Conheça Isabelle Alcântara, a nova Rainha do Folclore do Boi Garantido', d: '20/09/2026', img: U + '2026/09/1.415447-300x268.jpg', url: 'https://www.acritica.com/parintins/conheca-isabelle-alcantara-a-nova-rainha-do-folclore-do-boi-garantido/' }
  ],
  caprichoso: [
    { t: 'Caprichoso anuncia tema para 2027: "Criação Que Vem da Alma"', d: '01/11/2026', img: U + '2026/11/WhatsApp-Image-2026-11-01-at-15.36.37-300x200.jpeg', url: 'https://www.acritica.com/parintins/caprichoso-anuncia-tema-para-o-festival-de-parintins-2027-criacao-que-vem-da-alma/' },
    { t: 'Caprichoso abre edital de toadas para o álbum musical de 2027', d: '06/10/2026', img: U + '2026/10/1.417147-300x191.jpg', url: 'https://www.acritica.com/parintins/caprichoso-abre-edital-de-toadas-para-o-album-musical-de-2027/' }
  ],
  cidade: [
    { t: 'Parintins cria comitê para combater queimadas e fumaça no município', d: '13/11/2026', url: 'https://www.acritica.com/parintins/parintins-cria-comite-para-combater-queimadas-e-fumaca-no-municipio/' },
    { t: 'MPAM apura falta de vagas para hemodiálise em hospital de Parintins', d: '11/11/2026', url: 'https://www.acritica.com/parintins/mpam-apura-falta-de-vagas-para-hemodialise-em-hospital-de-parintins/' }
  ]
};

var OPINIAO = [
  { autor: 'Almério Augusto', ini: 'AA', cor: '#0b5aa3', t: 'COPS Challenge reúne integrantes das forças de segurança em noite de lutas', url: 'https://www.acritica.com/colunas/almerio-augusto/opiniao/cops-challenge-reune-guerreiros-integrantes-das-forcas-de-seguranca-em-noite-espetacular-de-lutas-casadas/' },
  { autor: 'Redação', ini: 'R', cor: '#0f8a5f', t: 'Uma em cada três mulheres negras sofreu violência doméstica em 2025', url: 'https://www.acritica.com/colunas/redacao/opiniao/uma-em-cada-tres-mulheres-negras-sofreu-violencia-domestica-em-2025/' },
  { autor: 'André Alves', ini: 'AA', cor: '#a03a6b', t: 'Secretários defendem estrutura nacional contra o crime organizado', url: 'https://www.acritica.com/colunas/andre-alves/opiniao/secretarios-defendem-estrutura-nacional-contra-o-crime-organizado/' }
];

// TV A Crítica: vídeo indicado pelo próprio portal (og:video da página inicial)
const TV = { video: 'jXAzzbXXKJw', aovivo: 'https://www.youtube.com/channel/UCnLSKfHkgZ6ujEYCO9jq7Sw/live', play: 'https://play.acritica.com/', youtube: 'https://www.youtube.com/@portalacriticaam' };
