# Protótipo do novo portal A Crítica (demo-acritica)

Leia este arquivo antes de mexer no projeto. Ele resume o que foi decidido no chat onde o site foi criado (18 e 19/11/2026).

## Quem é o usuário

- Mr. Jhon (Jhonata), trabalha na TV A Crítica, em Manaus. Vai apresentar este protótipo ao presidente da emissora.
- É iniciante em programação. Explique tudo em português simples, sem termos técnicos.
- Quando ele pedir algo visual, prefira mandar um **esboço** (página de comparação ou print) antes de aplicar de vez.
- Nunca use o ponto do meio "·" como separador em nada (site, textos, artes).
- Parintins sempre em ordem alfabética: **Caprichoso (azul) primeiro, Garantido (vermelho) depois**, em nomes, cores e blocos.

## Onde o projeto vive

- **GitHub:** repositório `jhonata19951-ship-it/portifolio`, pasta `demo-acritica/`. Publicado no GitHub Pages:
  https://jhonata19951-ship-it.github.io/portifolio/demo-acritica/
- **Notebook:** `C:\Users\Jhonata\Desktop\apresentação TV\acritica.com` (mesmos arquivos + `abrir-site.bat` e `abrir-no-celular.bat`, que sobem um servidor local na porta 8080).
- As duas cópias devem ficar iguais. Depois de cada mudança: commit + push no GitHub **e** copiar para a pasta do notebook.
- Versão estável guardada no branch `estavel-demo-acritica` (de 18/11, antes da troca de Parintins).

## Como o site funciona

- HTML/CSS/JS puro, sem build. Páginas: `index.html`, `materia.html`, `editoria.html`.
- `assets/data.js`: notícias de reserva (estáticas). `assets/aovivo.js`: busca as notícias reais na API do WordPress do acritica.com (`/wp-json/wp/v2/`), em sequência, com novas tentativas. `assets/app.js`: monta tudo (`window.iniciarSite`). `assets/style.css`: estilos (muitas regras acrescentadas no fim; as últimas valem).
- Texto vindo de fora é tratado com cuidado (sem innerHTML de HTML externo; só links `https://www.acritica.com/`).
- **Sempre que mudar CSS ou JS, troque o número `?v=` nos 3 HTMLs** (o celular guarda cópia antiga por até 10 minutos).
- **Selo obrigatório:** a faixa "Protótipo de redesign: não é o site oficial" no topo, o "Protótipo:" no título da aba e o `noindex` não podem sair. O site usa a marca e as notícias reais da empresa.

## Decisões já tomadas

- Celular (até 700 px): layout em feed (classe `body.cel`), barra fixa embaixo (Início, Editorias, AO VIVO, Buscar, tema), menu lateral (☰). A lupa do topo fica escondida no celular.
- Temas: só **Branco** e **Preto**. O Preto usa o tom **Chumbo** (`data-variante="chumbo"`, fundo #1c1c1e). No celular, o botão troca direto, com um toque.
- Topo azul do portal oficial (#07559b) com listras finas, ligado por padrão. Chave "Topo azul" no menu, junto de "Textura listrada" e "Barra colorida em movimento".
- Listras também na linha das editorias do celular.
- Fotos das páginas internas em 16:9, sem cortar o texto das artes.
- AO VIVO leva ao ao vivo do YouTube da TV A Crítica: https://www.youtube.com/channel/UCnLSKfHkgZ6ujEYCO9jq7Sw/live (`TV.aovivo` em data.js). Os links "A Crítica Play" continuam no Play.
- Troca de tema no celular em **onda** (aprovada em 19/11): a faixa passa e cada parte da tela muda de cor quando ela chega. A antiga "cortina" foi removida.
- No computador, Política, Polícia, Esportes e Entretenimento ficam **lado a lado numa linha** (aprovado em 19/11), e o botão da lua troca o tema direto, com um clique, igual ao celular.
- Páginas das editorias (aprovado em 19/11): **uma notícia por linha**, estrutura inspirada no g1, mas com os elementos do acritica.com oficial: caminho "Início › Editoria", chapéu pequeno em maiúsculas na cor da editoria, título na fonte Martel em tom escuro, resumo, "há X horas em Editoria", coluna "Mais lidas" com números verdes (#18b26b) fixa à direita, anúncio a cada 5 notícias e botão "Veja mais" que busca mais 12 notícias no portal (`buscarEditoria` em aovivo.js). A barra de editorias do topo não muda.
- Samsung Internet com modo escuro força o site a escurecer. Já existe `color-scheme: only light/only dark`, mas pode não bastar nesse navegador.

## Esboços esperando aprovação

Nenhum no momento.

## Outros arquivos relacionados

- Roteiro da apresentação (doc no claude.ai): https://claude.ai/artifact/Egf91dgVCXvGEu58Ho6Ahz
- Portfólio do Mr. Jhon: raiz do mesmo repositório (`index.html` + `midia/`), espelhado em `apresentação TV\portfolio-animado`.
