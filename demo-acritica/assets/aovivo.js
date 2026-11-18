// Notícias ao vivo: busca as matérias mais recentes direto do portal acritica.com
// (API pública do WordPress do próprio portal). Se não houver internet, usa a última
// atualização guardada neste navegador e, por último, as notícias fixas do data.js.
(function () {
  const API = 'https://www.acritica.com/wp-json/wp/v2/';
  const CACHE = 'acr-ao-vivo-v2';
  const EMB = '_embed=wp:featuredmedia,wp:term&_fields=id,date,slug,link,title,excerpt,categories,_links,_embedded';
  const CAT = { 15: 'geral', 12: 'economia', 14: 'educacao', 4: 'entretenimento', 5: 'esportes', 16: 'entretenimento', 7: 'geral', 3: 'manaus', 11: 'amazonia', 8: 'opiniao', 13: 'parintins', 6: 'policia', 10: 'politica', 9: 'saude' };

  // HTML do portal é lido num documento separado e inerte (nada dele roda nesta página)
  const ler = (html) => new DOMParser().parseFromString(html || '', 'text/html');
  const texto = (html) => (ler(html).body.textContent || '').replace(/\s+/g, ' ').trim();
  const doisDig = (n) => String(n).padStart(2, '0');
  // Segurança: todo texto do portal é escapado antes de ir para a página
  const esc = (t) => String(t || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const doPortal = (u) => (/^https:\/\/www\.acritica\.com\//.test(u || '') ? u : '');

  function umaVez(url, ms) {
    const c = new AbortController();
    const t = setTimeout(() => c.abort(), ms);
    return fetch(url, { signal: c.signal }).then((r) => { clearTimeout(t); if (!r.ok) throw new Error(r.status); return r.json(); });
  }
  // tenta até 3 vezes (o portal às vezes recusa um pedido isolado)
  async function comTempo(url, ms) {
    for (let i = 0; i < 3; i++) {
      try { return await umaVez(url, ms); } catch (e) { if (i === 2) throw e; await new Promise((r) => setTimeout(r, 700)); }
    }
  }

  // Converte um post do WordPress no formato usado pelo site
  function converter(p) {
    const emb = p._embedded || {};
    const media = (emb['wp:featuredmedia'] || [])[0] || {};
    const tam = (media.media_details && media.media_details.sizes) || {};
    const img = (tam.medium_large || tam.large || tam.full || {}).source_url || media.source_url || '';
    const termos = [].concat(...(emb['wp:term'] || []));
    const autor = termos.find((t) => t.taxonomy === '42wp_author');
    const tags = termos.filter((t) => t.taxonomy === 'post_tag').map((t) => t.name);
    const d = new Date(p.date);
    const titulo = esc(texto(p.title && p.title.rendered));
    return {
      id: String(p.slug || '').replace(/[^a-z0-9-]/gi, ''),
      ed: CAT[(p.categories || [])[0]] || 'geral',
      titulo,
      linha: esc(texto(p.excerpt && p.excerpt.rendered)),
      img: doPortal(img),
      alt: media.alt_text ? esc(media.alt_text) : titulo,
      credito: esc(texto(media.caption && media.caption.rendered)) || 'Divulgação',
      autor: autor ? esc(autor.name) : 'Redação',
      data: doisDig(d.getDate()) + '/' + doisDig(d.getMonth() + 1) + '/' + d.getFullYear(),
      hora: doisDig(d.getHours()) + 'h' + doisDig(d.getMinutes()),
      h: doisDig(d.getHours()) + ':' + doisDig(d.getMinutes()),
      ts: d.getTime(),
      tags: tags.map(esc),
      url: doPortal(p.link),
      tipo: p.link.includes('/colunas/') ? '42wp_column' : 'posts'
    };
  }

  // Monta todas as seções da página inicial a partir das matérias ao vivo
  function montar(dados) {
    const lista = dados.posts;
    const usados = new Set();
    const pega = (filtro, qtd, comFoto) => {
      const r = [];
      for (const m of lista) {
        if (r.length >= qtd) break;
        if (usados.has(m.id) || !filtro(m) || (comFoto && !m.img)) continue;
        usados.add(m.id); r.push(m);
      }
      return r;
    };
    const ed = (e) => (m) => m.ed === e;

    // manchete e destaques escolhidos pela redação na capa do portal
    const capa = (dados.capa || []).map((u) => lista.find((m) => m.url === u)).filter(Boolean);
    let hero = capa.find((m) => m.img) || pega(() => true, 1, true)[0];
    usados.add(hero.id);
    const cards = capa.filter((m) => m !== hero && m.img).slice(0, 3);
    cards.forEach((m) => usados.add(m.id));
    if (cards.length < 3) cards.push(...pega(() => true, 3 - cards.length, true));

    const HOME = {
      hero: hero.id,
      cards: cards.map((m) => m.id),
      manaus: pega(ed('manaus'), 4, true).map((m) => m.id),
      politica: (pega(ed('politica'), 1, true)[0] || {}).id,
      esportes: pega(ed('esportes'), 2, true).map((m) => m.id),
      entretenimento: pega(ed('entretenimento'), 3, true).map((m) => m.id)
    };
    if (HOME.manaus.length < 4) HOME.manaus.push(...pega(ed('geral'), 4 - HOME.manaus.length, true).map((m) => m.id));
    const LISTAS2 = {
      politica: pega(ed('politica'), 2).map((m) => ({ t: m.titulo, id: m.id })),
      policia: pega(ed('policia'), 4).map((m) => ({ t: m.titulo, id: m.id })),
      esportes: pega(ed('esportes'), 2).map((m) => ({ t: m.titulo, id: m.id })),
      entretenimento: pega(ed('entretenimento'), 2).map((m) => ({ t: m.titulo, id: m.id }))
    };

    // Agora: as 7 mais recentes de todas as editorias
    const AGORA2 = lista.slice().sort((a, b) => b.ts - a.ts).slice(0, 7).map((m) => ({ h: m.h, ed: m.ed, t: m.titulo, id: m.id }));

    // Em alta: assuntos (tags) que mais aparecem nas notícias recentes
    // (ignora tags genéricas, que repetem o nome das editorias)
    const generica = /^(manaus|amazonas|brasil|pol[ií]cia|pol[ií]tica|economia|esportes?|futebol|sa[uú]de|educa[cç][aã]o|cultura|show|m[uú]sica.*|entretenimento|geral|opini[aã]o|parintins|interior|mundo|tecnologia|games|jogos online)$/i;
    const conta = {}, ordem = [];
    lista.forEach((m) => m.tags.forEach((t) => {
      if (generica.test(t)) return;
      if (!conta[t]) { conta[t] = 0; ordem.push(t); }
      conta[t]++;
    }));
    const EM_ALTA2 = ordem.slice().sort((a, b) => conta[b] - conta[a] || ordem.indexOf(a) - ordem.indexOf(b)).slice(0, 6)
      .map((t) => ({ t, id: lista.find((m) => m.tags.includes(t)).id }));

    // Parintins: metade Garantido, metade Caprichoso
    const par = dados.parintins;
    const boi = (nome) => par.filter((m) => new RegExp(nome, 'i').test(m.titulo) && m.img).slice(0, 2)
      .map((m) => ({ t: m.titulo, d: m.data, img: m.img, id: m.id }));

    // Opinião: últimas colunas
    const OPINIAO2 = dados.colunas.slice(0, 3).map((m, i) => ({
      autor: m.autor, ini: m.autor.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase(),
      cor: ['#0b5aa3', '#0f8a5f', '#a03a6b'][i], t: m.titulo, id: m.id
    }));

    return { HOME, LISTAS: LISTAS2, AGORA: AGORA2, EM_ALTA: EM_ALTA2, garantido: boi('garantido'), caprichoso: boi('caprichoso'), OPINIAO: OPINIAO2 };
  }

  function aplicar(dados) {
    const todas = dados.posts.concat(dados.parintins, dados.colunas);
    const vistos = new Set();
    const novas = todas.filter((m) => !vistos.has(m.id) && vistos.add(m.id));
    const urls = new Set(novas.map((m) => m.url));
    // as fixas continuam valendo para links antigos, mas as novas vêm primeiro
    window.MATERIAS = novas.concat(MATERIAS.filter((m) => !urls.has(m.url)));
    const s = montar(dados);
    window.HOME = s.HOME;
    window.LISTAS = s.LISTAS;
    window.AGORA = s.AGORA;
    if (s.EM_ALTA.length >= 4) window.EM_ALTA = s.EM_ALTA;
    if (s.garantido.length === 2 && s.caprichoso.length === 2) PARINTINS.garantido = s.garantido, PARINTINS.caprichoso = s.caprichoso;
    if (s.OPINIAO.length === 3) window.OPINIAO = s.OPINIAO;
    window.AO_VIVO = { quando: dados.quando };
  }

  window.carregarAoVivo = function () {
    // Fluidez: se a última atualização tem menos de 15 minutos, a página abre na hora
    // com ela e as notícias novas são baixadas em segundo plano para a próxima visita.
    try {
      const salvo = JSON.parse(localStorage.getItem(CACHE) || 'null');
      if (salvo && salvo.posts && salvo.posts.length && Date.now() - salvo.quando < 15 * 60 * 1000) {
        aplicar(salvo);
        setTimeout(() => baixar().catch(() => {}), 1500);
        return Promise.resolve('guardado-recente');
      }
    } catch (e) {}
    return baixar().then(() => 'ao-vivo').catch(() => {
      try {
        const salvo = JSON.parse(localStorage.getItem(CACHE) || 'null');
        if (salvo && salvo.posts && salvo.posts.length) { aplicar(salvo); return 'guardado'; }
      } catch (e) {}
      return 'fixo';
    });
  };

  function baixar() {
    // um pedido de cada vez: o portal recusa pedidos em paralelo
    const pedidos = (async () => {
      const posts = await comTempo(API + 'posts?per_page=50&' + EMB, 10000);
      const capa = await comTempo(API + '42wp_homepage?per_page=1&_fields=content', 8000).catch(() => []);
      const par = await comTempo(API + 'posts?categories=13&per_page=12&' + EMB, 8000).catch(() => []);
      const col = await comTempo(API + '42wp_column?per_page=3&' + EMB, 8000).catch(() => []);
      return [posts, capa, par, col];
    })();
    return pedidos.then(([posts, capa, par, col]) => {
      // links da manchete e dos destaques da capa do portal
      let linksCapa = [];
      if (capa[0] && capa[0].content) {
        const bloco = ler(capa[0].content.rendered).querySelector('.wp-block-acritica-hero');
        if (bloco) linksCapa = [...new Set([...bloco.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')))];
      }
      const dados = { quando: Date.now(), capa: linksCapa, posts: posts.map(converter).filter((m) => m.url), parintins: par.map(converter).filter((m) => m.url), colunas: col.map(converter).filter((m) => m.url) };
      try { localStorage.setItem(CACHE, JSON.stringify(dados)); } catch (e) {}
      if (!window.SITE_PRONTO) aplicar(dados);
      return dados;
    });
  }

  // Texto da matéria (só os primeiros parágrafos, o resto fica no portal)
  window.buscarTexto = function (m) {
    const tipo = m.tipo || 'posts';
    return comTempo(API + tipo + '?slug=' + encodeURIComponent(m.id) + '&_fields=content', 7000).then((r) => {
      if (!r[0]) return [];
      const d = ler(r[0].content.rendered);
      return [...d.querySelectorAll('p')].map((p) => esc(p.textContent.trim())).filter((t) => t.length > 40).slice(0, 3);
    }).catch(() => []);
  };
})();
