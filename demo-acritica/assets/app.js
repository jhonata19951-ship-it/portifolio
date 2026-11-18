// Monta cabeçalho, rodapé e o conteúdo de cada página (notícias ao vivo do portal ou do data.js)
window.iniciarSite = function () {
  const $ = (s) => document.querySelector(s);
  const ed = (k) => EDITORIAS[k] || EDITORIAS.geral;
  const mat = (id) => MATERIAS.find((m) => m.id === id);
  const linkMat = (m) => 'materia.html?id=' + m.id;
  // Toda notícia abre no novo layout: procura a matéria pelo id ou pelo endereço do portal
  const rota = (i) => {
    const m = i.id ? mat(i.id) : MATERIAS.find((x) => x.url === i.url);
    return m ? `href="${linkMat(m)}"` : `href="${i.url}" target="_blank" rel="noopener"`;
  };
  const linkEd = (k) => 'editoria.html?e=' + k;
  const pagina = document.body.dataset.page;
  const edAtual = new URLSearchParams(location.search).get('e');

  // Foto com reserva: se a imagem do portal não carregar, fica o fundo azul
  // Imagens: carregam só quando chegam perto da tela; a manchete carrega primeiro
  const foto = (src, alt, extra, prioridade) => `<div class="foto"${extra || ''}>${src ? `<img src="${src}" alt="${alt}" ${prioridade ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" onerror="this.remove()">` : ''}</div>`;
  const esc = (t) => String(t || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const icon = {
    lupa: '<svg viewBox="0 0 24 24" fill="none" stroke="#0d2340" stroke-width="2.5" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M6 4l15 8-15 8z"/></svg>',
    insta: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3.1 0-4.1.1C4.7 2.2 2.2 4.6 2.1 7.9 2 8.9 2 9.3 2 12s0 3.1.1 4.1c.1 3.3 2.6 5.7 5.8 5.8 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c3.3-.1 5.7-2.5 5.8-5.8.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-3.3-2.5-5.7-5.8-5.8C15.1 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1 2.4.1 3.9 1.6 4 4 .1 1 .1 1.3.1 4s0 3-.1 4c-.1 2.4-1.6 3.9-4 4-1 .1-1.3.1-4 .1s-3 0-4-.1c-2.4-.1-3.9-1.6-4-4-.1-1-.1-1.3-.1-4s0-3 .1-4c.1-2.4 1.6-3.9 4-4 1-.1 1.3-.1 4-.1z"/></svg>',
    face: '<svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/></svg>',
    yt: '<svg viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3z"/></svg>',
    wa: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3z"/></svg>'
  };

  // ---------- Cabeçalho ----------
  const menu = MENU.map((k) => {
    const e = ed(k);
    const on = edAtual === k ? ' on' : '';
    return k === 'parintins'
      ? `<a class="pin${on}" href="${linkEd(k)}">${e.nome}</a>`
      : `<a class="${on.trim()}" href="${linkEd(k)}" style="color:${e.cor}">${e.nome}</a>`;
  }).join('');

  const alta = EM_ALTA.map((a) => `<a href="${a.id ? 'materia.html?id=' + a.id : linkEd(a.ed)}">${a.t}</a>`).join('');

  $('#topo-site').innerHTML = `
  <header class="head"><div class="wrap">
    <a class="logo" href="index.html"><img src="assets/logo-azul.png" alt="A Crítica, página inicial" width="239" height="44"></a>
    <nav class="menu" aria-label="Editorias">${menu}</nav>
    <div class="ajustes">
      <button class="ajustes-bt" id="ajustes-bt" aria-label="Opções de visual" aria-expanded="false" title="Opções de visual"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></svg></button>
      <div class="ajustes-menu" id="ajustes-menu" role="menu">
        <b>Visual do topo</b>
        <label><span>Textura listrada</span><input type="checkbox" id="op-textura"><i></i></label>
        <label><span>Barra colorida em movimento</span><input type="checkbox" id="op-movimento"><i></i></label>
        <small>Desligado: barra parada, arte original do projeto</small>
      </div>
    </div>
    <div class="direita">
      <div class="temas">
        <button class="noite-bt" id="noite-bt" aria-label="Escolher tema" aria-expanded="false" title="Tema"><svg class="ic-claro" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg><svg class="ic-azul" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 18a5 5 0 0 0-10 0"/><path d="M12 9V2M4.2 10.2l1.4 1.4M1 18h2M21 18h2M18.4 11.6l1.4-1.4M23 22H1M8 6l4-4 4 4"/></svg><svg class="ic-preto" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg></button>
        <div class="temas-menu" id="temas-menu" role="menu">
          <b>Tema</b>
          <button data-tema="claro"><i class="amostra a-claro"></i><span>Branco<small>Claro</small></span></button>
          <button data-tema="azul"><i class="amostra a-azul"></i><span>Azul<small>Pôr do sol</small></span></button>
          <button data-tema="preto"><i class="amostra a-preto"></i><span>Preto<small>Noturno</small></span></button>
        </div>
      </div>
      <span class="clima"><b>Manaus</b> <span id="temp">--</span></span>
      <button class="lupa" id="abrir-busca" aria-label="Buscar">${icon.lupa}</button>
      <a class="vivo" href="${TV.play}" target="_blank" rel="noopener"><i></i>AO VIVO</a>
    </div>
  </div></header>
  <div class="regua"></div>
  <div class="busca" id="busca"><div class="wrap">
    <div class="campo">${icon.lupa}<input type="search" id="campo-busca" placeholder="O que você procura no A Crítica?" autocomplete="off"><kbd>Enter</kbd></div>
    <div class="sugestoes" id="recentes"></div>
    <div class="sugestoes"><span>Mais buscados:</span>${MAIS_BUSCADOS.map((a, i) => `<a style="--i:${i}" href="materia.html?id=${a.id}">${a.t}</a>`).join('')}</div>
  </div></div>
  <div class="busca-fundo" id="busca-fundo"></div>
  <div class="alta"><div class="wrap"><b>EM ALTA</b>${alta}
    <span class="atalhos">
      <a class="pod" href="${TV.youtube}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z"/></svg>Podcast no YouTube</a>
      <a class="impresso" href="https://assinante.acritica.com/" target="_blank" rel="noopener" title="A Crítica Digital: edição impressa"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 5h13v14H6a2 2 0 0 1-2-2z"/><path d="M17 9h3v8a2 2 0 0 1-2 2"/><path d="M7 9h7M7 12h7M7 15h4"/></svg>Impresso</a>
      <a class="acplay" href="${TV.play}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4z" fill="#fff"/></svg>A Crítica Play</a>
    </span></div></div>`;

  // Busca: Enter leva para a busca do portal oficial
  function mostrarRecentes() {
    let r = [];
    try { r = JSON.parse(localStorage.getItem('acr-buscas') || '[]'); } catch (x) {}
    const box = $('#recentes');
    box.style.display = r.length ? '' : 'none';
    box.innerHTML = r.length ? '<span>Suas buscas recentes:</span>' + r.map((t, i) => `<a class="rec" style="--i:${i}" href="https://www.acritica.com/?s=${encodeURIComponent(t)}" target="_blank" rel="noopener">${esc(t)}</a>`).join('') : '';
  }
  mostrarRecentes();
  const lupaBt = $('#abrir-busca');
  const iconeX = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>';
  function busca(abrir) {
    document.body.classList.toggle('buscando', abrir);
    lupaBt.innerHTML = abrir ? iconeX : icon.lupa;
    lupaBt.setAttribute('aria-label', abrir ? 'Fechar busca' : 'Buscar');
    if (abrir) setTimeout(() => $('#campo-busca').focus(), 250);
  }
  lupaBt.onclick = () => busca(!document.body.classList.contains('buscando'));
  $('#busca-fundo').onclick = () => busca(false);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') busca(false); });
  $('#campo-busca').onkeydown = (e) => {
    const termo = e.target.value.trim();
    if (e.key === 'Enter' && termo) {
      // guarda as últimas buscas deste navegador
      let r = [];
      try { r = JSON.parse(localStorage.getItem('acr-buscas') || '[]'); } catch (x) {}
      r = [termo].concat(r.filter((t) => t.toLowerCase() !== termo.toLowerCase())).slice(0, 5);
      try { localStorage.setItem('acr-buscas', JSON.stringify(r)); } catch (x) {}
      mostrarRecentes();
      window.open('https://www.acritica.com/?s=' + encodeURIComponent(termo), '_blank');
    }
  };

  // Opções de visual (ficam salvas neste navegador)
  const opcoes = { textura: true, movimento: true };
  try { Object.assign(opcoes, JSON.parse(localStorage.getItem('acr-visual') || '{}')); } catch (e) {}
  function aplicarVisual() {
    document.body.classList.toggle('sem-textura', !opcoes.textura);
    document.body.classList.toggle('barra-original', !opcoes.movimento);
    $('#op-textura').checked = opcoes.textura;
    $('#op-movimento').checked = opcoes.movimento;
    try { localStorage.setItem('acr-visual', JSON.stringify(opcoes)); } catch (e) {}
  }
  aplicarVisual();
  // Temas: claro (branco), azul (pôr do sol) e preto (noturno)
  const ORDEM = ['claro', 'azul', 'preto'];
  const temaBt = $('#noite-bt'), temaMenu = $('#temas-menu');
  function aplicarTema(tema) {
    document.body.classList.toggle('noturno', tema !== 'claro');
    document.body.classList.toggle('preto', tema === 'preto');
    document.body.dataset.tema = tema;
    document.documentElement.style.colorScheme = tema === 'claro' ? 'only light' : 'only dark';
    temaMenu.querySelectorAll('button').forEach((b) => b.classList.toggle('ativo', b.dataset.tema === tema));
    document.querySelectorAll('.logo img').forEach((img) => {
      if (img.src.includes('logo-azul') || img.dataset.claro) { img.dataset.claro = '1'; img.src = tema === 'claro' ? 'assets/logo-azul.png' : 'assets/logo-branca.png'; }
    });
    try { localStorage.setItem('acr-tema', tema); } catch (e) {}
  }
  let temaAtual = 'claro';
  try { temaAtual = localStorage.getItem('acr-tema') || (localStorage.getItem('acr-noite') === '1' ? 'azul' : 'claro'); } catch (e) {}
  aplicarTema(temaAtual);
  function trocarTema(novo) {
    const atual = document.body.dataset.tema;
    if (novo === atual) return;
    const escurecendo = ORDEM.indexOf(novo) > ORDEM.indexOf(atual);
    if (document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches && !matchMedia('(pointer: coarse)').matches) {
      // mais escuro: desce (de cima para baixo); mais claro: sobe (de baixo para cima)
      const faixa = document.createElement('div');
      faixa.className = 'varredura ' + (escurecendo ? (novo === 'preto' ? 'para-escuro para-preto' : 'para-escuro') : 'para-claro');
      document.documentElement.classList.toggle('vt-sobe', !escurecendo);
      const t = document.startViewTransition(() => { aplicarTema(novo); document.body.appendChild(faixa); });
      t.finished.finally(() => { faixa.remove(); document.documentElement.classList.remove('vt-sobe'); });
      return;
    }
    // Celular: sem View Transition (alguns navegadores achatam a tela na captura).
    // A faixa em degradê passa por cima enquanto as cores mudam suavemente.
    document.body.classList.add('trocando-tema');
    let faixaCel = null;
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      faixaCel = document.createElement('div');
      faixaCel.className = 'varredura varredura-cel ' + (escurecendo ? (novo === 'preto' ? 'para-escuro para-preto' : 'para-escuro') : 'para-claro');
      document.body.appendChild(faixaCel);
    }
    aplicarTema(novo);
    setTimeout(() => { document.body.classList.remove('trocando-tema'); if (faixaCel) faixaCel.remove(); }, 2100);
  }
  temaBt.onclick = (e) => { e.stopPropagation(); const ab = temaMenu.classList.toggle('aberto'); temaBt.setAttribute('aria-expanded', ab); };
  temaMenu.onclick = (e) => {
    e.stopPropagation();
    const b = e.target.closest('button[data-tema]');
    if (!b) return;
    temaMenu.classList.remove('aberto'); temaBt.setAttribute('aria-expanded', false);
    trocarTema(b.dataset.tema);
  };
  document.addEventListener('click', () => { temaMenu.classList.remove('aberto'); temaBt.setAttribute('aria-expanded', false); });
  $('#op-textura').onchange = (e) => { opcoes.textura = e.target.checked; aplicarVisual(); };
  $('#op-movimento').onchange = (e) => { opcoes.movimento = e.target.checked; aplicarVisual(); };
  const ajBt = $('#ajustes-bt'), ajMenu = $('#ajustes-menu');
  ajBt.onclick = (e) => { e.stopPropagation(); const ab = ajMenu.classList.toggle('aberto'); ajBt.setAttribute('aria-expanded', ab); };
  ajMenu.onclick = (e) => e.stopPropagation();
  document.addEventListener('click', () => { ajMenu.classList.remove('aberto'); ajBt.setAttribute('aria-expanded', false); });

  // Clima de Manaus em tempo real (Open-Meteo, sem cadastro). Sem internet, mostra 31°C.
  fetch('https://api.open-meteo.com/v1/forecast?latitude=-3.119&longitude=-60.0217&current=temperature_2m')
    .then((r) => r.json()).then((d) => { $('#temp').textContent = Math.round(d.current.temperature_2m) + '°C'; })
    .catch(() => { $('#temp').textContent = '31°C'; });

  // ---------- Rodapé ----------
  $('#rodape-site').innerHTML = `
  <footer class="rodape">
    <div class="wrap">
      <div>
        <a class="logo" href="index.html"><img src="assets/logo-branca.png" alt="A Crítica" width="217" height="40"></a>
        <p>Há 77 anos fazendo jornalismo profissional em Manaus e no Amazonas.</p>
        <div class="redes">
          <a href="https://www.instagram.com/portalacritica" target="_blank" rel="noopener" aria-label="Instagram">${icon.insta}</a>
          <a href="https://www.facebook.com/ACriticaCom" target="_blank" rel="noopener" aria-label="Facebook">${icon.face}</a>
          <a href="https://x.com/ACritica" target="_blank" rel="noopener" aria-label="X">${icon.x}</a>
          <a href="${TV.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${icon.yt}</a>
        </div>
      </div>
      <div><h5>EDITORIAS</h5><ul>${MENU.map((k) => `<li><a href="${linkEd(k)}">${ed(k).nome}</a></li>`).join('')}</ul></div>
      <div><h5>A CRÍTICA</h5><ul>
        <li><a href="${TV.play}" target="_blank" rel="noopener">A Crítica Play</a></li>
        <li><a href="https://assinante.acritica.com/" target="_blank" rel="noopener">Edição impressa</a></li>
        <li><a href="${TV.youtube}" target="_blank" rel="noopener">Podcast no YouTube</a></li>
      </ul></div>
      <div><h5>INSTITUCIONAL</h5><ul>
        <li><a href="https://www.acritica.com/comercial/" target="_blank" rel="noopener">Anuncie</a></li>
        <li><a href="https://www.acritica.com/politica-de-privacidade/" target="_blank" rel="noopener">Política de privacidade</a></li>
        <li><a href="https://www.acritica.com/termos-de-uso/" target="_blank" rel="noopener">Termos de uso</a></li>
        <li><a href="https://digital.maven.com.br/pub/acriticaam/index5/index.jsp?edicao" target="_blank" rel="noopener">Publicidade Legal</a></li>
      </ul></div>
    </div>
    <div class="copy">© 2026 A Crítica. Todos os direitos reservados.</div>
  </footer>`;

  // ---------- Aviso de cookies (LGPD) ----------
  let escolheu = null;
  try { escolheu = localStorage.getItem('acr-cookies'); } catch (e) {}
  if (!escolheu) {
    const c = document.createElement('div');
    c.className = 'cookies';
    c.innerHTML = `<p>Usamos cookies para melhorar sua experiência e exibir publicidade. Você pode aceitar todos ou só os necessários. <a href="https://www.acritica.com/politica-de-privacidade/" target="_blank" rel="noopener" style="color:#0b5aa3;font-weight:700">Política de privacidade</a></p>
      <div><button data-v="necessarios">Só necessários</button><button class="ok" data-v="todos">Aceitar todos</button></div>`;
    c.onclick = (e) => { if (e.target.dataset.v) { try { localStorage.setItem('acr-cookies', e.target.dataset.v); } catch (x) {} c.remove(); } };
    document.body.appendChild(c);
  }

  // Anúncio fixo no rodapé da tela (aparece depois da escolha de cookies)
  function mostrarAncora() {
    if (document.querySelector('.ancora')) return;
    const a = document.createElement('div');
    a.className = 'ancora';
    a.innerHTML = `<a href="https://www.acritica.com/comercial/" target="_blank" rel="noopener"><small>PUBLICIDADE</small><b>Banner fixo 728 x 90</b><em>Anuncie no A Crítica</em></a><button aria-label="Fechar anúncio">×</button>`;
    a.querySelector('button').onclick = () => a.remove();
    document.body.appendChild(a);
  }
  if (escolheu) setTimeout(mostrarAncora, 1500);
  document.addEventListener('click', (e) => { if (e.target.dataset && e.target.dataset.v) setTimeout(mostrarAncora, 800); });

  // ---------- Peças reutilizáveis ----------
  const card = (m) => `<a class="card" href="${linkMat(m)}" style="--c:${ed(m.ed).cor}">${foto(m.img, m.alt)}<small>${ed(m.ed).nome}</small><h3>${m.titulo}</h3></a>`;
  const destaque = (m) => `<a class="dest" href="${linkMat(m)}">${foto(m.img, m.alt)}<small class="kick" style="--c:${ed(m.ed).cor}">${ed(m.ed).nome}</small><h3>${m.titulo}</h3><p>${m.linha || ''}</p></a>`;
  const lista = (itens) => `<div class="lista">${itens.map((i) => `<a ${rota(i)}>${i.t}</a>`).join('')}</div>`;
  const secTit = (k, titulo) => `<div class="sec-tit" style="--c:${ed(k).cor}"><h2>${titulo || ed(k).nome}</h2><a href="${linkEd(k)}">ver mais</a></div>`;
  // Espaços publicitários (formatos padrão de portal)
  const ad = (fmt, nome, cls) => `<a class="ad ${cls || ''}" href="https://www.acritica.com/comercial/" target="_blank" rel="noopener"><small>PUBLICIDADE</small><b>${nome}</b><span>${fmt}</span><em>Anuncie no A Crítica</em></a>`;
  const pub = `<div class="pub"><div class="wrap">${ad('970 x 90', 'Super banner', 'sb')}</div></div>`;
  const pubGrande = `<div class="pub"><div class="wrap">${ad('970 x 250', 'Billboard', 'bb')}</div></div>`;
  const oferecimento = (txt) => `<a class="ofer" href="https://www.acritica.com/comercial/" target="_blank" rel="noopener">${txt || 'Oferecimento'}<span>SUA MARCA AQUI</span></a>`;
  const tvCard = `<a class="tv" href="${TV.play}" target="_blank" rel="noopener">
      <div class="foto"><img src="https://img.youtube.com/vi/${TV.video}/hqdefault.jpg" alt="Transmissão da TV A Crítica" onerror="this.remove()"><div class="play"><span>${icon.play}</span></div></div>
      <div class="t"><h4>● TV A CRÍTICA AO VIVO</h4><p>Assista agora à programação da TV A Crítica</p><span class="bt">Assistir</span></div></a>`;
  const opiniao1 = (o) => `<a class="op1" ${rota(o)}><small>OPINIÃO</small><p>${o.t}</p><div class="autor"><i style="background:${o.cor}">${o.ini}</i>${o.autor}</div></a>`;

  const blocoParintins = `
  <section class="parin" aria-label="Parintins">
    <div class="faixa">
      <div class="lado"><h2>GARANTIDO <span>Parintins 2027</span></h2><div class="boi">
        ${PARINTINS.garantido.map((i) => `<a ${rota(i)}>${foto(i.img, i.t)}<h3>${i.t}</h3><small>${i.d}</small></a>`).join('')}
      </div></div>
      <div class="lado"><h2>CAPRICHOSO <span>Parintins 2027</span></h2><div class="boi">
        ${PARINTINS.caprichoso.map((i) => `<a ${rota(i)}>${foto(i.img, i.t)}<h3>${i.t}</h3><small>${i.d}</small></a>`).join('')}
      </div></div>
    </div>
    <div class="cidade"><div class="wrap">${oferecimento('Cobertura Parintins 2027 com patrocínio de')}<a class="ver-cob" href="${linkEd('parintins')}">Ver toda a cobertura do festival</a></div></div>
  </section>`;

  // ---------- Página inicial ----------
  if (pagina === 'home') {
    const h = mat(HOME.hero) || MATERIAS[0];
    const sub = HOME.cards.map(mat).filter(Boolean);
    const aoVivo = window.AO_VIVO ? new Date(AO_VIVO.quando) : null;
    const quando = aoVivo ? `<span class="atualizado">atualizado às ${String(aoVivo.getHours()).padStart(2, '0')}:${String(aoVivo.getMinutes()).padStart(2, '0')}</span>` : '';
    $('#conteudo').innerHTML = `
    <div class="pub topo-bb"><div class="wrap"><div class="bb-box">${ad('970 x 200', 'Billboard', 'bb')}<button class="fechar" aria-label="Fechar anúncio" onclick="this.closest('.pub').remove()">×</button></div></div></div>
    <section class="topo"><div class="wrap">
      <div>
        <a class="hero" href="${linkMat(h)}">${foto(h.img, h.alt, '', true)}
          <div class="txt"><span class="k" style="background:${ed(h.ed).cor}">${ed(h.ed).nome}</span><h1>${h.titulo}</h1>
          ${h.topicos ? `<ul>${h.topicos.map((t) => `<li>${t}</li>`).join('')}</ul>` : `<p class="hero-linha">${h.linha || ''}</p>`}</div></a>
        <div class="cards">${sub.map(card).join('')}</div>
      </div>
      <div class="agora"><h4><i></i>AGORA${quando}</h4><div class="tl">
        ${AGORA.map((a) => `<div class="ti" style="--c:${ed(a.ed).cor}"><a ${rota(a)}><b>${a.h}</b><small>${ed(a.ed).nome}</small><p>${a.t}</p></a></div>`).join('')}
      </div></div>
      <div class="col3">${tvCard}${opiniao1(OPINIAO[2])}${ad('300 x 250', 'Retângulo médio', 'mr')}</div>
    </div></section>
    ${pub}
    <section class="sec"><div class="wrap">${secTit('manaus', 'Manaus e região')}
      <div class="grid4">${HOME.manaus.map(mat).filter(Boolean).map(card).join('')}</div>
    </div></section>
    <section class="sec"><div class="wrap"><div class="grid2">
      <div>${secTit('politica')}${HOME.politica && mat(HOME.politica) ? destaque(mat(HOME.politica)) : ''}${lista(LISTAS.politica || [])}</div>
      <div>${secTit('policia')}${lista(LISTAS.policia || [])}</div>
    </div></div></section>
    <section class="sec"><div class="wrap">${secTit('esportes')}
      <div class="grid2">${HOME.esportes.map(mat).filter(Boolean).map((m, i) => `<div>${destaque(m)}${i === 1 ? lista(LISTAS.esportes || []) : ''}</div>`).join('')}</div>
    </div></section>
    <section class="video"><div class="wrap">
      <div class="video-tit"><h2>A Crítica em vídeo</h2>${oferecimento()}</div>
      <div class="video-grid">
        <a class="tv" href="https://www.youtube.com/watch?v=${TV.video}" target="_blank" rel="noopener">
          <div class="foto"><img src="https://img.youtube.com/vi/${TV.video}/hqdefault.jpg" alt="Vídeo em destaque do A Crítica" onerror="this.remove()"><div class="play"><span>${icon.play}</span></div></div>
          <div class="t"><h4>VÍDEO EM DESTAQUE</h4><p>Assista ao vídeo do dia no canal do A Crítica</p><span class="bt">Assistir no YouTube</span></div></a>
        <a class="vcard pod-card" href="${TV.youtube}" target="_blank" rel="noopener"><span class="vico"><svg viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z"/></svg></span><small>PODCAST</small><h3>Podcast A Crítica no YouTube</h3><p>Entrevistas e bastidores do jornalismo amazonense.</p><span class="bt">Ouvir agora</span></a>
        <a class="vcard play-card" href="${TV.play}" target="_blank" rel="noopener"><span class="vico"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="2"/><path d="M10 8l6 4-6 4z"/></svg></span><small>STREAMING</small><h3>A Crítica Play</h3><p>Programas da TV A Crítica para assistir quando quiser.</p><span class="bt">Abrir o Play</span></a>
      </div>
    </div></section>
    ${pubGrande}
    ${blocoParintins}
    <section class="sec"><div class="wrap">${secTit('entretenimento')}
      <div class="grid4">${HOME.entretenimento.map(mat).filter(Boolean).map(card).join('')}<div>${lista(LISTAS.entretenimento || [])}</div></div>
    </div></section>
    ${pub}
    <section class="sec"><div class="wrap">${secTit('opiniao', 'Opinião')}
      <div class="ops">${OPINIAO.map((o) => `<div class="op"><a ${rota(o)}><small class="kick" style="--c:#0d2340">COLUNA</small><p style="margin-top:8px">${o.t}</p><div class="autor"><i style="background:${o.cor}">${o.ini}</i>${o.autor}</div></a></div>`).join('')}</div>
    </div></section>`;
  }

  // ---------- Página da matéria ----------
  if (pagina === 'materia') {
    const id = new URLSearchParams(location.search).get('id');
    const m = mat(id) || MATERIAS[0];
    const e = ed(m.ed);
    document.title = 'Protótipo: ' + m.titulo + ' | A Crítica';
    const url = encodeURIComponent(m.url);
    const txt = encodeURIComponent(m.titulo);
    const relac = MATERIAS.filter((x) => x.id !== m.id && x.ed === m.ed).concat(MATERIAS.filter((x) => x.id !== m.id && x.ed !== m.ed)).slice(0, 4);
    $('#conteudo').innerHTML = `
    <article class="mat">
      <a class="kick" href="${linkEd(m.ed)}" style="--c:${e.cor}">${e.nome}</a>
      <h1>${m.titulo}</h1>
      <p class="linha">${m.linha || ''}</p>
      <div class="meta"><span>Por <b>${m.autor}</b> em ${m.data}${m.hora ? ' às ' + m.hora : ''}</span>
        <div class="share">
          <a href="https://api.whatsapp.com/send?text=${txt}%20${url}" target="_blank" rel="noopener" aria-label="Compartilhar no WhatsApp">${icon.wa}</a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener" aria-label="Compartilhar no Facebook">${icon.face}</a>
          <a href="https://x.com/intent/tweet?url=${url}&text=${txt}" target="_blank" rel="noopener" aria-label="Compartilhar no X">${icon.x}</a>
        </div></div>
      <figure>${foto(m.img, m.alt, '', true)}<figcaption>${m.alt}. Foto: ${m.credito}</figcaption></figure>
      <div class="corpo"><div id="texto-materia">${(m.texto || []).map((p) => `<p>${p}</p>`).join('') || '<p class="carregando">Carregando o texto da matéria...</p>'}</div>
        <a class="integra" href="${m.url}" target="_blank" rel="noopener">Ler a matéria completa no acritica.com</a>
      </div>
    </article>
    ${pub}
    <section class="relac"><div class="sec-tit" style="--c:#0d2340"><h2>Leia também</h2></div><div class="grid4">${relac.map(card).join('')}</div></section>`;
  }

  if (pagina === 'materia') {
    const mm = mat(new URLSearchParams(location.search).get('id'));
    if (mm && !mm.texto && window.buscarTexto) {
      buscarTexto(mm).then((ps) => {
        const alvo = $('#texto-materia');
        if (alvo) alvo.innerHTML = ps.length ? ps.map((p) => `<p>${p}</p>`).join('') : `<p>${mm.linha || ''}</p>`;
      });
    }
  }

  // ---------- Página de editoria ----------
  if (pagina === 'editoria') {
    const k = EDITORIAS[edAtual] ? edAtual : 'manaus';
    const e = ed(k);
    document.title = 'Protótipo: ' + e.nome + ' | A Crítica';
    const daEd = MATERIAS.filter((m) => m.ed === k);
    const outras = MATERIAS.filter((m) => m.ed !== k);
    const titulo = k === 'parintins' ? `<h1 class="pin">${e.nome}</h1>` : `<h1>${e.nome}</h1>`;
    let corpo;
    if (k === 'parintins') {
      corpo = blocoParintins;
    } else {
      const principais = daEd.length ? daEd : outras.slice(0, 1);
      corpo = `<section class="sec"><div class="wrap">
        <div class="grid2">${destaque(principais[0])}<div>${principais.slice(1).map(card).join('') || ''}${LISTAS[k] ? lista(LISTAS[k]) : ''}</div></div>
      </div></section>`;
    }
    $('#conteudo').innerHTML = `
    <div class="ed-topo" style="--c:${e.cor}"><div class="wrap">${titulo}<p>Notícias de ${e.nome} no A Crítica</p></div></div>
    ${corpo}
    ${pub}
    <section class="sec"><div class="wrap">${secTit('geral', 'Outras notícias')}<div class="grid4">${outras.slice(0, 4).map(card).join('')}</div></div></section>`;
  }
};

// Primeiro busca as notícias do portal; depois monta a página
(window.carregarAoVivo ? carregarAoVivo() : Promise.resolve('fixo')).then((modo) => {
  window.MODO_DADOS = modo;
  iniciarSite();
  window.SITE_PRONTO = true;
  document.body.classList.add('pronto');
});
