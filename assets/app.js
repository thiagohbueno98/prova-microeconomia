'use strict';
/* =====================================================================
   Microeconomia ITA — app de estudo
   Rotas (hash): #/inicio · #/aula/<n>/<resumo|lab|questoes|cards>
                 #/todas · #/erros · #/simulado · #/cards · #/formulas · #/pegadinhas · #/discursiva
   ===================================================================== */

/* ---------- dados ---------- */
const KEY_ANS = 'micro_ita_ans_v1';
let answers = LS.get(KEY_ANS, {});
let known = LS.get('micro_ita_cards', {});
const MODS = AULAS.map((a, i) => Object.assign({}, a, { idx: i, qs: QUESTOES[a.id] || [] }));
const TOTAL = MODS.reduce((s, m) => s + m.qs.length, 0);
const ui = { filter: 'all', search: '' };

function stats(only) {
  let tot = 0, ans = 0, ok = 0;
  MODS.forEach((m, i) => {
    if (only !== undefined && i !== only) return;
    m.qs.forEach((q, j) => { tot++; const a = answers[i + '-' + j]; if (a !== undefined) { ans++; if (a === q.c) ok++; } });
  });
  return { tot, ans, ok, bad: ans - ok };
}
function saveAnswers() { LS.set(KEY_ANS, answers); }

/* =====================================================================
   FIGURAS (resumos e questões)
   ===================================================================== */
const two = (a, b, ca, cb) => `<div class="two"><div>${a}${ca ? `<p class="figcap">${ca}</p>` : ''}</div><div>${b}${cb ? `<p class="figcap">${cb}</p>` : ''}</div></div>`;
const shock2 = key => { const r = shockCharts(key, 3); return two(r.firm, r.market); };
function payTable(G, star) {
  const S = solveGame(G);
  const cell = (r, c) => `<td class="cell ${star && S.ne.some(([i, j]) => i === r && j === c) ? 'ne' : ''}"><div class="pay"><span class="pA ${star && S.brA[r][c] ? 'br' : ''}">${G.A.split(' ').pop()}: ${fmtA(G.p[r][c][0])}</span><span class="pB ${star && S.brB[r][c] ? 'br' : ''}">${G.B.split(' ').pop()}: ${fmtA(G.p[r][c][1])}</span></div></td>`;
  return `<table class="mtx"><tr><th></th><th></th><th colspan="2" class="pB">${G.B}</th></tr><tr><th></th><th></th><th class="pB">${G.s[0]}</th><th class="pB">${G.s[1]}</th></tr>
    ${[0, 1].map(r => `<tr>${r === 0 ? `<th rowspan="2" class="pA">${G.A}</th>` : ''}<th class="pA rowh">${G.s[r]}</th>${cell(r, 0)}${cell(r, 1)}</tr>`).join('')}</table>`;
}
function ext4() {
  const sm = (title, curves, areas) => chart({ title, xr: [0, 32], yr: [0, 460], xl: 'Quantidade', yl: 'Preço', curves, areas, w: 300, h: 240 });
  const D = { g: y => (420 - y) / 12.5, cls: 'd', lab: 'Demanda', labEnd: 'a', dy: -6, anchor: 'end' };
  const O = { g: y => (y - 20) / 12.5, cls: 's', lab: 'Oferta', dy: 14 };
  const a = sm('(a)', [D, O, { g: y => (y - 140) / 12.5, cls: 'm', lab: 'Custo social' }], [{ pts: [[11.2, 280], [16, 220], [16, 340]], cls: 'dwl' }]);
  const b = sm('(b)', [D, { g: y => (y - 140) / 12.5, cls: 's', lab: 'Oferta' }, { g: y => (y - 20) / 12.5, cls: 'm', lab: 'Custo social', dy: 14, dx: -4, anchor: 'end' }], [{ pts: [[11.2, 280], [16, 220], [11.2, 160]], cls: 'dwl' }]);
  const c = sm('(c)', [D, O, { g: y => (540 - y) / 12.5, cls: 'm', lab: 'Custo social', labEnd: 'a', dy: -6 }], [{ pts: [[16, 220], [20.8, 280], [16, 340]], cls: 'dwl' }]);
  const d = sm('(d)', [D, O, { g: y => (300 - y) / 12.5, cls: 'm', lab: 'Custo social', labEnd: 'a', dy: 14, anchor: 'end' }], [{ pts: [[16, 220], [11.2, 160], [11.2, 280]], cls: 'dwl' }]);
  return `<div class="two">${a}${b}</div><div class="two">${c}${d}</div>`;
}
const FIGLIB = {
  do_eq: () => dsChart(5.6, 0.2, -1, 2, { xl: 'Q (t)', yl: 'P (R$/kg)', h: 270 }),
  do_teto: () => dsChart(7000, 600, -1000, 400, { ctrl: 5, ctrlLab: 'teto = 5', areas: false, h: 250 }),
  do_piso: () => dsChart(1000, 50, -250, 75, { ctrl: 12, ctrlLab: 'piso = 12', areas: false, xl: 'L', yl: 'w', h: 250 }),
  do_mov: () => {
    const base = [{ g: y => 16 - y, cls: 'd', lab: 'D', labEnd: 'a', dy: -6 }];
    const a = chart({ title: 'Variação na quantidade demandada', xr: [0, 14], yr: [0, 17], xl: 'Q', yl: 'P', curves: base, points: [{ x: 4, y: 12, n: 1, yt: 'P₁' }, { x: 9, y: 7, n: 2, yt: 'P₂' }], arrows: [[4.8, 11.2, 8.2, 7.8]], w: 300, h: 240 });
    const b = chart({ title: 'Variação na demanda', xr: [0, 14], yr: [0, 17], xl: 'Q', yl: 'P', curves: [{ g: y => 16 - y, cls: 'ghost', lab: 'D₁', labEnd: 'a', dy: -6 }, { g: y => 19 - y, cls: 'd', lab: 'D₂', labEnd: 'a', dy: -6 }], arrows: [[6.3, 10, 8.7, 10]], points: [{ x: 6, y: 10, cls: 'old', yt: 'P' }, { x: 9, y: 10, guide: false }], w: 300, h: 240 });
    return two(a, b, 'O preço do próprio bem muda: anda sobre a curva.', 'Outro fator muda (renda, preço de outro bem…): a curva se desloca.');
  },
  do_usados: () => doShiftChart(DO_SCEN.usados),
  do_desenrola: () => doShiftChart(DO_SCEN.desenrola),
  el_linear: () => chart({ xr: [0, 108], yr: [0, 22], xl: 'Q', yl: 'P', curves: [{ pts: [[0, 20], [50, 10]], cls: 'm', lab: '|ε| > 1', labAt: [12, 18], dx: 12 }, { pts: [[50, 10], [100, 0]], cls: 's', lab: '|ε| < 1', labAt: [70, 6], dx: 8 }], points: [{ x: 50, y: 10, lab: '|ε| = 1', xt: 'a/2', yt: 'a/2b' }], h: 250 }),
  cu_bolo: () => boloChart(154, { cfm: true, h: 280 }),
  co_lp: () => { const r = shockCharts('demanda_cai', 1); return two(r.firm, r.market, 'Empresa no mínimo do CTM: p = CM = CTM.', 'Oferta de LP horizontal no mínimo do CTM.'); },
  co_bets: () => shock2('demanda_cai'),
  co_custo: () => shock2('custo_sobe'),
  co_reforma: () => shock2('custo_cai'),
  co_feijao: () => shock2('feijao'),
  co_demanda_sobe: () => shock2('demanda_sobe'),
  ef_exc: () => taxChart(0, 12.5, 12.5, { h: 270 }),
  ef_tax: () => taxChart(100, 12.5, 12.5, { h: 270 }),
  mo_agua: () => monoChart(monoModel(56, 2.5, 100, 1, 0), 'livre', { profit: false, h: 280 }),
  mo_reg: () => monoChart(monoModel(56, 2.5, 100, 1, 0), 'pctm', { h: 280 }),
  ol_prec: () => `<div class="mtx-wrap">${payTable(GAMES.precos, true)}</div>`,
  fm_ext: () => extChart(120, 'neg', { h: 270 }),
  q_saude: () => monoChart(monoModel(10, 1 / 12, 0, 4, 0), 'livre', { xl: 'Q (milhões)', yl: 'p (mil R$)', h: 270 }),
  q_ext4: ext4
};
function fillFigs(el) { $$('.figslot', el).forEach(s => { const f = FIGLIB[s.dataset.fig]; if (f) s.innerHTML = f(); }); }

/* =====================================================================
   QUESTÕES
   ===================================================================== */
function qCard(mi, qi, tag) {
  const m = MODS[mi], q = m.qs[qi], key = mi + '-' + qi, a = answers[key], done = a !== undefined;
  const fig = q.fig && FIGLIB[q.fig];
  const figHtml = () => `<figure class="qfig">${fig()}</figure>`;
  const opts = q.o.map((o, k) => {
    let c = '';
    if (done) c = k === q.c ? 'right' : (k === a ? 'wrong' : 'dim');
    return `<button class="opt ${c}" data-act="ans" data-m="${mi}" data-q="${qi}" data-o="${k}" ${done ? 'disabled' : ''}>${esc(o)}</button>`;
  }).join('');
  const ok = a === q.c;
  const st = done ? (ok ? '<span class="q-st ok">✓ acertou</span>' : '<span class="q-st no">✗ errou</span>') : '';
  return `<article class="q" id="q-${key}" style="--a:${m.cor}">
    <div class="q-h"><span class="q-tag">${tag}${q.p ? `<span class="q-src">${esc(q.p)}</span>` : ''}</span>${st}</div>
    <p class="q-txt">${esc(q.q)}</p>
    ${fig && q.when === 'before' ? figHtml() : ''}
    <div class="opts">${opts}</div>
    ${done ? `<div class="fb ${ok ? 'ok' : 'no'}"><div class="fb-h"><span>${ok ? '✅ Correto!' : '❌ Incorreto — a certa é a ' + 'ABCDE'[q.c]}</span><button data-act="retry" data-m="${mi}" data-q="${qi}">Tentar de novo</button></div><p>${esc(q.e)}</p>${fig && q.when !== 'before' ? figHtml() : ''}</div>` : ''}
  </article>`;
}
function passes(mi, qi) {
  const q = MODS[mi].qs[qi], a = answers[mi + '-' + qi];
  if (ui.filter === 'unanswered' && a !== undefined) return false;
  if (ui.filter === 'wrong' && (a === undefined || a === q.c)) return false;
  if (ui.filter === 'right' && a !== q.c) return false;
  if (ui.filter === 'prova' && !(q.p && q.p.startsWith('Prova'))) return false;
  const s = ui.search.trim().toLowerCase();
  if (s && !(q.q + ' ' + q.o.join(' ') + ' ' + q.e).toLowerCase().includes(s)) return false;
  return true;
}
function toolbar(showFilter = true) {
  const f = [['all', 'Todas'], ['unanswered', 'Não respondidas'], ['wrong', 'Erradas'], ['right', 'Acertadas'], ['prova', 'Das provas 2025']];
  return `<div class="toolbar">
    ${showFilter ? `<div class="seg" role="group" aria-label="Filtro">${f.map(([k, l]) => `<button data-act="filter" data-f="${k}" class="${ui.filter === k ? 'on' : ''}">${l}</button>`).join('')}</div>` : '<span></span>'}
    <input class="search" id="search" type="search" placeholder="Buscar palavra nas questões…" value="${esc(ui.search)}">
  </div>`;
}
function renderQuestionList(list, emptyMsg) {
  const cards = list.filter(([mi, qi]) => passes(mi, qi)).map(([mi, qi]) => qCard(mi, qi, `${MODS[mi].id} · Questão ${qi + 1}`));
  return cards.length ? cards.join('') : `<div class="empty">${emptyMsg || 'Nenhuma questão para este filtro.'}</div>`;
}
function onAnswer(mi, qi, o) {
  const key = mi + '-' + qi; if (answers[key] !== undefined) return;
  answers[key] = o; saveAnswers();
  const el = $('#q-' + key);
  if (el) el.outerHTML = qCard(mi, qi, el.querySelector('.q-tag').firstChild.textContent);
  renderSide();
}
function onRetry(mi, qi) {
  const key = mi + '-' + qi; delete answers[key]; saveAnswers();
  const el = $('#q-' + key);
  if (el) el.outerHTML = qCard(mi, qi, el.querySelector('.q-tag').firstChild.textContent);
  renderSide();
}

/* =====================================================================
   FLASHCARDS
   ===================================================================== */
const fc = { key: null, deck: [], i: 0, flip: false, only: false };
function buildDeck(mi) {
  const out = [];
  MODS.forEach((m, i) => { if (mi !== undefined && i !== mi) return; m.cards.forEach((c, j) => out.push({ mi: i, ci: j })); });
  return out;
}
function renderCards(el, mi) {
  const key = 'd' + (mi === undefined ? 'all' : mi);
  if (fc.key !== key) { fc.key = key; fc.deck = buildDeck(mi); fc.i = 0; fc.flip = false; }
  const list = fc.only ? fc.deck.filter(c => !known[c.mi + '-' + c.ci]) : fc.deck;
  const kn = fc.deck.filter(c => known[c.mi + '-' + c.ci]).length;
  if (fc.i >= list.length) fc.i = 0;
  const c = list[fc.i];
  const m = c ? MODS[c.mi] : null, card = c ? m.cards[c.ci] : null;
  el.innerHTML = `<div class="fc-wrap">
    <div class="toolbar"><span class="note">${kn} de ${fc.deck.length} marcados como “sei” · <span class="kbd">espaço</span> vira · <span class="kbd">←</span><span class="kbd">→</span> navega</span>
      <div class="seg"><button data-act="fc-only" data-v="0" class="${!fc.only ? 'on' : ''}">Todos</button><button data-act="fc-only" data-v="1" class="${fc.only ? 'on' : ''}">Só os que não sei</button></div></div>
    <div class="pbar"><i style="width:${pct(kn, fc.deck.length)}%"></i></div>
    ${c ? `<div class="fc ${fc.flip ? 'flip' : ''}" data-act="fc-flip" style="--a:${m.cor}" role="button" tabindex="0" aria-label="Virar cartão">
      <div class="fc-in"><div class="fc-f"><small>${m.id} · ${fc.i + 1}/${list.length}</small>${esc(card[0])}<span class="hint">clique para ver a resposta</span></div>
      <div class="fc-b"><small>${m.id}</small>${esc(card[1])}</div></div></div>
    <div class="fc-ctl"><button class="btn" data-act="fc-prev">← Anterior</button>
      <div class="btns" style="margin:0"><button class="btn" data-act="fc-mark" data-v="0">🔁 Ainda não sei</button><button class="btn pri" data-act="fc-mark" data-v="1">✓ Já sei</button></div>
      <button class="btn" data-act="fc-next">Próximo →</button></div>
    <div class="btns" style="justify-content:center"><button class="btn sm" data-act="fc-shuffle">Embaralhar</button><button class="btn sm" data-act="fc-clear">Zerar marcações deste baralho</button></div>`
    : `<div class="empty">🎉 Você marcou todos os cartões como “sei”.<br><br><button class="btn" data-act="fc-only" data-v="0">Ver todos</button></div>`}
  </div>`;
}
function fcAct(act, v, el, mi) {
  const list = fc.only ? fc.deck.filter(c => !known[c.mi + '-' + c.ci]) : fc.deck;
  if (act === 'fc-flip') fc.flip = !fc.flip;
  if (act === 'fc-next') { fc.i = (fc.i + 1) % Math.max(1, list.length); fc.flip = false; }
  if (act === 'fc-prev') { fc.i = (fc.i - 1 + list.length) % Math.max(1, list.length); fc.flip = false; }
  if (act === 'fc-only') { fc.only = v === '1'; fc.i = 0; fc.flip = false; }
  if (act === 'fc-shuffle') { fc.deck = shuffle(fc.deck); fc.i = 0; fc.flip = false; }
  if (act === 'fc-clear') { fc.deck.forEach(c => delete known[c.mi + '-' + c.ci]); LS.set('micro_ita_cards', known); }
  if (act === 'fc-mark') {
    const c = list[fc.i]; if (!c) return;
    if (v === '1') known[c.mi + '-' + c.ci] = 1; else delete known[c.mi + '-' + c.ci];
    LS.set('micro_ita_cards', known); fc.flip = false;
    if (!(fc.only && v === '1')) fc.i = (fc.i + 1) % Math.max(1, list.length);
  }
  renderCards(el, mi);
}

/* =====================================================================
   SIMULADO
   ===================================================================== */
let sim = LS.get('micro_ita_sim', null);
const simCfg = { mods: MODS.map((_, i) => i), n: 20, timer: true };
let simTick = null, simConfirm = false;
function saveSim() { LS.set('micro_ita_sim', sim); }
function startSim(pool) {
  let qs = pool;
  if (!qs) {
    const all = []; simCfg.mods.forEach(mi => MODS[mi].qs.forEach((_, qi) => all.push([mi, qi])));
    qs = shuffle(all).slice(0, simCfg.n === 'all' ? all.length : simCfg.n);
  }
  if (!qs.length) return;
  sim = { qs, ans: {}, cur: 0, t0: Date.now(), done: false, timer: simCfg.timer };
  simConfirm = false; saveSim(); render();
}
const mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
function renderSim(el) {
  clearInterval(simTick);
  if (!sim) {
    const hist = LS.get('micro_ita_sim_hist', []);
    el.innerHTML = `<div class="lab"><h3>📝 Monte seu simulado</h3><p class="muted">Questões sorteadas, sem gabarito durante a prova. No fim você vê a nota, o desempenho por tema e a correção comentada. Não altera o progresso das listas.</p>
      <h4 class="h2" style="margin-top:8px">Temas</h4>
      <div class="chips">${MODS.map((m, i) => `<button class="chip ${simCfg.mods.includes(i) ? 'on' : ''}" style="--a:${m.cor}" data-act="sim-mod" data-v="${i}">${m.id} · ${m.titulo}</button>`).join('')}
        <button class="chip" data-act="sim-all">Todos</button></div>
      <h4 class="h2">Quantidade</h4>
      <div class="seg">${[10, 20, 30, 'all'].map(n => `<button data-act="sim-n" data-v="${n}" class="${simCfg.n == n ? 'on' : ''}">${n === 'all' ? 'Todas' : n}</button>`).join('')}</div>
      <h4 class="h2">Cronômetro</h4>
      <div class="seg"><button data-act="sim-timer" data-v="1" class="${simCfg.timer ? 'on' : ''}">Ligado</button><button data-act="sim-timer" data-v="0" class="${!simCfg.timer ? 'on' : ''}">Desligado</button></div>
      <div class="btns" style="margin-top:18px"><button class="btn pri" data-act="sim-start" ${simCfg.mods.length ? '' : 'disabled'}>Começar simulado →</button></div>
      <p class="note">Atalhos: <span class="kbd">A</span>–<span class="kbd">E</span> responde · <span class="kbd">←</span><span class="kbd">→</span> navega.</p>
    </div>
    ${hist.length ? `<div class="lab"><h3>Histórico</h3><table class="t sm"><thead><tr><th>Data</th><th>Nota</th><th>Acertos</th><th>Tempo</th></tr></thead><tbody>${hist.slice(-8).reverse().map(h => `<tr><td>${new Date(h.d).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })}</td><td><b>${pct(h.ok, h.n)}%</b></td><td>${h.ok}/${h.n}</td><td>${mmss(h.s)}</td></tr>`).join('')}</tbody></table></div>` : ''}`;
    return;
  }
  if (sim.done) return renderSimResult(el);
  const n = sim.qs.length, [mi, qi] = sim.qs[sim.cur], m = MODS[mi], q = m.qs[qi], sel = sim.ans[sim.cur];
  const answered = Object.keys(sim.ans).length;
  const fig = q.fig && q.when === 'before' && FIGLIB[q.fig];
  el.innerHTML = `<div class="simbar"><b>Questão ${sim.cur + 1} de ${n}</b><span class="note">${answered} respondidas</span>${sim.timer ? `<b id="simClock">⏱ ${mmss((Date.now() - sim.t0) / 1000)}</b>` : ''}
      <span><button class="btn sm" data-act="sim-quit">Abandonar</button> <button class="btn sm pri" data-act="sim-finish">${simConfirm ? `Confirmar (faltam ${n - answered})` : 'Finalizar'}</button></span></div>
    <div class="palette">${sim.qs.map((_, k) => `<button data-act="sim-go" data-v="${k}" class="${sim.ans[k] !== undefined ? 'ans' : ''} ${k === sim.cur ? 'cur' : ''}">${k + 1}</button>`).join('')}</div>
    <article class="q" style="--a:${m.cor}"><div class="q-h"><span class="q-tag">${m.id} · Questão ${qi + 1} da lista${q.p ? `<span class="q-src">${esc(q.p)}</span>` : ''}</span></div>
      <p class="q-txt">${esc(q.q)}</p>${fig ? `<figure class="qfig">${fig()}</figure>` : ''}
      <div class="opts">${q.o.map((o, k) => `<button class="opt ${sel === k ? 'sel' : ''}" data-act="sim-ans" data-v="${k}">${esc(o)}</button>`).join('')}</div></article>
    <div class="pager"><button class="btn" data-act="sim-go" data-v="${sim.cur - 1}" ${sim.cur === 0 ? 'disabled' : ''}>← Anterior</button><button class="btn" data-act="sim-go" data-v="${sim.cur + 1}" ${sim.cur === n - 1 ? 'disabled' : ''}>Próxima →</button></div>`;
  if (sim.timer) simTick = setInterval(() => { const c = $('#simClock'); if (c) c.textContent = '⏱ ' + mmss((Date.now() - sim.t0) / 1000); else clearInterval(simTick); }, 1000);
}
function finishSim() {
  sim.done = true; sim.t1 = Date.now();
  const ok = sim.qs.filter(([mi, qi], k) => sim.ans[k] === MODS[mi].qs[qi].c).length;
  const hist = LS.get('micro_ita_sim_hist', []); hist.push({ d: Date.now(), ok, n: sim.qs.length, s: Math.round((sim.t1 - sim.t0) / 1000) }); LS.set('micro_ita_sim_hist', hist.slice(-30));
  saveSim(); render();
}
function renderSimResult(el) {
  const n = sim.qs.length, res = sim.qs.map(([mi, qi], k) => ({ mi, qi, k, a: sim.ans[k], ok: sim.ans[k] === MODS[mi].qs[qi].c }));
  const ok = res.filter(r => r.ok).length, sec = Math.round(((sim.t1 || Date.now()) - sim.t0) / 1000);
  const by = {}; res.forEach(r => { by[r.mi] = by[r.mi] || { n: 0, ok: 0 }; by[r.mi].n++; if (r.ok) by[r.mi].ok++; });
  const wrong = res.filter(r => !r.ok);
  el.innerHTML = `<div class="lab"><div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap">
      <div><div class="big-score" style="color:${pct(ok, n) >= 70 ? 'var(--ok)' : pct(ok, n) >= 50 ? 'var(--warn)' : 'var(--no)'}">${pct(ok, n)}%</div><div class="note">${ok} de ${n} certas · ${mmss(sec)} (${mmss(sec / n)} por questão)</div></div>
      <div style="flex:1;min-width:240px" class="hbars">${Object.entries(by).map(([mi, v]) => `<div class="hbar" style="--a:${MODS[mi].cor}"><span>${MODS[mi].id} · ${MODS[mi].titulo}</span><span class="tr"><i style="width:${pct(v.ok, v.n)}%;background:var(--a)"></i></span><span class="v">${v.ok}/${v.n}</span></div>`).join('')}</div>
    </div>
    <div class="btns" style="margin-top:14px"><button class="btn pri" data-act="sim-new">Novo simulado</button>${wrong.length ? `<button class="btn" data-act="sim-redo">Refazer só as ${wrong.length} erradas</button>` : ''}</div></div>
    <h4 class="h2">Correção</h4>
    ${res.map(r => { const m = MODS[r.mi], q = m.qs[r.qi]; const long = q.q.length > 90; return `<details class="rev" ${r.ok ? '' : 'open'} style="--a:${m.cor}"><summary>${r.ok ? '✅' : r.a === undefined ? '⬜' : '❌'} ${r.k + 1}. <span class="q-tag">${m.id} · Q${r.qi + 1}</span> ${long ? esc(q.q.slice(0, 90)) + '…' : esc(q.q)}</summary>
      ${long ? `<p>${esc(q.q)}</p>` : ''}<p>Sua resposta: <b class="${r.ok ? 'ok' : 'no'}">${r.a === undefined ? 'em branco' : esc(q.o[r.a])}</b></p>${r.ok ? '' : `<p>Correta: <b class="ok">${esc(q.o[q.c])}</b></p>`}<p class="muted">${esc(q.e)}</p></details>`; }).join('')}`;
}
function simAct(act, v) {
  if (act === 'sim-mod') { const i = +v; simCfg.mods = simCfg.mods.includes(i) ? simCfg.mods.filter(x => x !== i) : simCfg.mods.concat(i).sort((a, b) => a - b); }
  if (act === 'sim-all') simCfg.mods = simCfg.mods.length === MODS.length ? [] : MODS.map((_, i) => i);
  if (act === 'sim-n') simCfg.n = v === 'all' ? 'all' : +v;
  if (act === 'sim-timer') simCfg.timer = v === '1';
  if (act === 'sim-start') return startSim();
  if (act === 'sim-ans') { sim.ans[sim.cur] = +v; simConfirm = false; saveSim(); }
  if (act === 'sim-go') { const k = +v; if (k >= 0 && k < sim.qs.length) sim.cur = k; saveSim(); }
  if (act === 'sim-finish') { const left = sim.qs.length - Object.keys(sim.ans).length; if (left && !simConfirm) { simConfirm = true; } else return finishSim(); }
  if (act === 'sim-quit') { sim = null; saveSim(); }
  if (act === 'sim-new') { sim = null; saveSim(); }
  if (act === 'sim-redo') { const pool = sim.qs.filter(([mi, qi], k) => sim.ans[k] !== MODS[mi].qs[qi].c); return startSim(shuffle(pool)); }
  render();
}

/* =====================================================================
   QUESTÃO DISCURSIVA (gráficos de curto e longo prazo)
   ===================================================================== */
const CHECK = [
  'Considerei SÓ o impacto pedido (ceteris paribus).',
  'Desenhei DOIS gráficos lado a lado, na mesma altura: empresa típica (custos) e mercado.',
  'Empresa: eixos R$ × q; curvas CM e CTM em formato de U, com o CM cortando o CTM no mínimo.',
  'Mercado: eixos P × Q; Demanda, Oferta de Curto Prazo (O_CP) e Oferta de Longo Prazo (O_LP, horizontal no mín CTM).',
  'Nomeei TODOS os eixos e curvas (ao menos com as siglas usuais), inclusive a O_LP e as curvas “inicial” e “final”.',
  'Numerei os pontos: 1 (equilíbrio inicial de LP), 2 (curto prazo), 3 (novo LP) — nos dois gráficos.',
  'Usei setas para os deslocamentos (A = choque; B = entrada/saída de empresas).',
  'Mostrei no gráfico da empresa o lucro ou o prejuízo por unidade no ponto 2 (diferença entre p e CTM).',
  'No texto: o que acontece com o PREÇO e a QUANTIDADE de equilíbrio no CURTO e no LONGO prazo.',
  'No texto: o que acontece com o NÚMERO DE EMPRESAS (e por quê: lucro atrai entrada; prejuízo leva à saída).'
];
const MODELOS = [
  { t: 'Prova 2025 (manhã) — Reforma Tributária reduz o custo de produção', k: 'custo_cai', r: 'Inicialmente, o mercado se encontra no seu equilíbrio de longo prazo no ponto 1 de cada gráfico. Assumindo que a Reforma Tributária reduzirá o custo de produção das empresas, a curva de custo total médio de um produtor típico se desloca para baixo. O gráfico à esquerda ilustra uma redução de R$A no custo por unidade produzida, o que também implica um deslocamento para baixo do custo marginal em R$A. Consequentemente, a curva de oferta de curto prazo no mercado (gráfico à direita) se desloca para baixo em R$A. O equilíbrio de curto prazo se dá no ponto 2, onde o preço é menor e a quantidade é maior. No entanto, neste preço, um produtor típico obtém um lucro econômico positivo. Neste caso, empresas entram neste mercado até que o preço de equilíbrio seja igual ao novo custo médio mínimo (movimento B). O novo equilíbrio de longo prazo ocorre no ponto 3: o preço é menor, a quantidade é maior e há mais empresas.' },
  { t: 'Prova 2025 (tarde) — Aquecimento global reduz as terras de feijão de sequeiro', k: 'feijao', r: 'No curto prazo, a oferta de mercado é a soma horizontal de segmentos das curvas de custo marginal. Como o CM do sequeiro é sempre inferior ao de qualquer unidade irrigada, a capacidade de sequeiro é usada primeiro; a partir dela, a oferta corresponde à dos produtores irrigados (positivamente inclinada). Inicialmente, o mercado está no equilíbrio de LP no ponto 1. No curto prazo, como o número de produtores irrigados é fixo, a redução da capacidade de sequeiro desloca a oferta de mercado paralelamente para a esquerda, exatamente no montante da redução (ΔK, a capacidade de sequeiro perdida). No ponto 2, a quantidade é menor e o preço é maior. Nesse preço, o produtor irrigado típico tem lucro econômico positivo (p > CTM), o que atrai novos produtores irrigados. Com a entrada (ΔN), o trecho ascendente da O_CP gira para a direita até cruzar a demanda ao preço de LP (ponto 3). Comparado ao início: mesmo preço e mesma quantidade, mas mais produtores irrigados — toda a redução do sequeiro é compensada pelo irrigado. O preço de equilíbrio não depende do custo marginal do sequeiro.' },
  { t: 'Exercício da aula — Bets reduzem a renda das famílias para o varejo', k: 'demanda_cai', r: 'Inicialmente, o mercado se encontra no seu equilíbrio de longo prazo nos pontos 1 de cada gráfico. Com a redução da renda para gastos no varejo, para qualquer dado preço a demanda será menor (movimento A). No curto prazo, o novo equilíbrio se dá no ponto 2: quantidade e preço menores. Conforme o gráfico à esquerda, o custo por unidade excede o preço (seta entre p e CTM): a empresa típica tem prejuízo. Conforme algumas empresas se desvencilham de seus custos fixos, elas saem do mercado, até que a O_CP intercepte a nova demanda no preço de LP (ponto 3, movimento B). Comparado ao equilíbrio inicial: quantidade menor, mesmo preço e menos empresas.' },
  { t: 'Exercício da aula — Eventos climáticos (El Niño) elevam os custos', k: 'custo_sobe', r: 'Inicialmente, o mercado está no equilíbrio de LP (pontos 1). Eventos climáticos mais intensos (seguro agrícola mais caro, perdas, frete) elevam o custo por unidade em A: CTM = CTM₀ + A e CM = CM₀ + A. Se a oferta de cada empresa sobe A, a soma horizontal também sobe A: a O_CP de mercado se desloca para cima em A (movimento A). No ponto 2, o preço sobe (menos que A) e a quantidade cai; como p < novo CTM, há prejuízo. Empresas saem (movimento B) até o preço igualar o novo mínimo do CTM (ponto 3). Supondo que o choque é permanente (os investidores acreditam que os eventos se estabilizam nesse patamar), no LP: preço maior (exatamente A acima do inicial), quantidade menor e menos empresas. A O_LP sobe A.' },
  { t: 'Exercício extra — Mais crédito (Desenrola Brasil) aumenta a demanda por bens duráveis', k: 'demanda_sobe', r: 'Inicialmente, o mercado se encontra no seu equilíbrio de longo prazo nos pontos 1 de cada gráfico. Com o Desenrola, famílias antes inadimplentes voltam a ter acesso ao crédito: para qualquer dado preço, a demanda por bens duráveis é maior (movimento A, a demanda se desloca para a direita). No curto prazo, o número de empresas é fixo, e o novo equilíbrio se dá no ponto 2, ao longo da O_CP: preço e quantidade maiores. No gráfico da empresa, as curvas de custo não se alteram; com o preço mais alto, a empresa típica aumenta a produção até p₂ = CM e, como p₂ é maior que o CTM, obtém lucro econômico positivo (diferença entre p₂ e o CTM). O lucro atrai novas empresas, cuja entrada desloca a O_CP para a direita (movimento B) até que o preço volte ao mínimo do CTM, no ponto 3, onde cada empresa volta a produzir q*. Comparado ao equilíbrio inicial: mesmo preço, quantidade maior e mais empresas. A O_LP não se altera, pois os custos não mudaram.' },
  { t: 'Exercício extra — Nova tecnologia reduz o custo (versão genérica de “custo cai”)', k: 'custo_cai', r: 'Inicialmente, o mercado se encontra no seu equilíbrio de longo prazo nos pontos 1 de cada gráfico. Uma nova tecnologia reduz em R$A o custo de cada unidade produzida, para todas as empresas: no gráfico da esquerda, o CTM e o CM da empresa típica se deslocam para baixo em A. Como a oferta de curto prazo do mercado é a soma horizontal dos custos marginais, a O_CP também desce A (movimento A). No ponto 2, o preço cai, mas menos que A, porque a demanda é decrescente: parte do ajuste ocorre pelo aumento da quantidade. Como o CTM caiu A inteiro e o preço caiu menos, p₂ fica acima do novo CTM: há lucro econômico positivo. O lucro atrai novas empresas (movimento B), deslocando a O_CP para a direita até o preço igualar o novo mínimo do CTM (ponto 3). Comparado ao equilíbrio inicial: preço menor em exatamente A, quantidade maior e mais empresas. A O_LP desce A.' }
];
function viewDiscursiva(el) {
  const ck = LS.get('micro_ita_check', {});
  el.innerHTML = `<div class="tldr"><b>Vale 10 pontos</b> nas duas provas de 2025: um choque num mercado (perfeitamente) competitivo, analisado com <b>dois gráficos</b> (empresa típica e mercado), no <b>curto e no longo prazo</b>. Hipóteses padrão: ganhos de especialização iniciais e rendimentos marginais decrescentes (curvas em U); custos de CP e LP iguais para q &gt; 0; empresas iguais.</div>
    <section class="sec warn"><h3>✅ Checklist da correção</h3><p class="muted">Marque enquanto treina no papel. (Fica salvo neste navegador.)</p>
      <ul class="check" id="ck">${CHECK.map((c, i) => `<li class="${ck[i] ? 'done' : ''}"><input type="checkbox" data-ck="${i}" ${ck[i] ? 'checked' : ''} id="ck${i}"><label for="ck${i}">${c}</label></li>`).join('')}</ul>
      <div class="btns"><button class="btn sm" id="ckClear">Desmarcar tudo</button></div></section>
    <section class="sec"><h3>🧪 Monte o gráfico passo a passo</h3><p class="muted">Escolha o choque e avance de 1 → 2 → 3. Depois tente reproduzir no papel sem olhar.</p><div id="dsSim"></div></section>
    <section class="sec"><h3>🧠 A lógica em resumo</h3>
      <div class="chain lbl" data-lbl="Demanda"><span>D desloca</span><span>CP: P e Q no mesmo sentido</span><span>lucro/prejuízo</span><span>entrada/saída</span><span>LP: P volta ao mín CTM</span></div>
      <div class="chain lbl" data-lbl="Custo"><span>CM e CTM movem A</span><span>O_CP move A</span><span>CP: P muda menos que A</span><span>entrada/saída</span><span>LP: P muda exatamente A</span></div>
      <p>Por que o preço de LP é o mínimo do CTM? Com lucro positivo entram empresas (O_CP → direita, P cai); com prejuízo saem (O_CP → esquerda, P sobe). Só para quando lucro = 0, ou seja, p = CTM; e como p = CM (maximização), p = CM = CTM ⇒ mínimo do CTM.</p></section>
    <h3 class="h2">📄 Respostas-modelo</h3>
    ${MODELOS.map((m, i) => `<details class="rev" ${i === 0 ? 'open' : ''}><summary>${m.t}</summary><div class="figslot" data-fig="${{ custo_cai: 'co_reforma', feijao: 'co_feijao', demanda_cai: 'co_bets', custo_sobe: 'co_custo', demanda_sobe: 'co_demanda_sobe' }[m.k]}"></div><div class="model"><p>${m.r}</p></div></details>`).join('')}`;
  fillFigs(el);
  shockSim($('#dsSim', el), 'custo_cai', 'ds');
  el.addEventListener('change', e => { const i = e.target.dataset.ck; if (i !== undefined) { const c = LS.get('micro_ita_check', {}); if (e.target.checked) c[i] = 1; else delete c[i]; LS.set('micro_ita_check', c); e.target.closest('li').classList.toggle('done', e.target.checked); } });
  $('#ckClear', el).addEventListener('click', () => { LS.set('micro_ita_check', {}); $$('#ck input', el).forEach(i => { i.checked = false; i.closest('li').classList.remove('done'); }); });
}

/* =====================================================================
   VIEWS
   ===================================================================== */
function viewHome(el) {
  const s = stats();
  const weak = MODS.map((m, i) => ({ m, i, st: stats(i) })).filter(x => x.st.ans >= 5).sort((a, b) => a.st.ok / a.st.ans - b.st.ok / b.st.ans)[0];
  const next = MODS.map((m, i) => ({ m, i, st: stats(i) })).find(x => x.st.ans < x.st.tot);
  el.innerHTML = `<div class="hero"><h2>Estudo de Microeconomia — Prova 1</h2><p>GED-72 (Princípios de Economia, ITA). Demanda e oferta, elasticidade, custos, mercados competitivos, eficiência, poder de mercado, oligopólio e falhas de mercado. Resumos, laboratórios interativos, flashcards, ${TOTAL} questões comentadas (muitas tiradas das provas de 2025) e um treino guiado da questão de gráficos.</p>
    <div class="stats"><div class="stat"><small>Respondidas</small><b>${s.ans}/${s.tot}</b></div><div class="stat"><small>Acerto</small><b>${pct(s.ok, s.ans)}%</b></div><div class="stat"><small>Erros para revisar</small><b>${s.bad}</b></div><div class="stat"><small>Flashcards “sei”</small><b>${Object.keys(known).length}/${MODS.reduce((a, m) => a + m.cards.length, 0)}</b></div></div>
    <div class="btns" style="margin-top:16px">${next ? `<a class="btn pri" href="#/aula/${next.i}/${next.st.ans ? 'questoes' : 'resumo'}">${next.st.ans ? 'Continuar' : 'Começar'}: ${next.m.id} →</a>` : '<a class="btn pri" href="#/simulado">Fazer um simulado →</a>'}<a class="btn" href="#/discursiva">✍️ Treinar a questão de gráficos (10 pts)</a>${s.bad ? `<a class="btn" href="#/erros">Revisar ${s.bad} erro(s)</a>` : ''}${weak ? `<a class="btn" href="#/aula/${weak.i}/resumo">Ponto fraco: ${weak.m.id} (${pct(weak.st.ok, weak.st.ans)}%)</a>` : ''}</div></div>
  <div class="trap"><b>O que mais cai (provas de 2025):</b> (1) a questão de <b>dois gráficos</b> empresa × mercado no curto e longo prazo (10 pts); (2) contas de <b>monopólio/regulação</b> e de <b>cartel/Cournot</b>; (3) <b>jogos 2×2</b> (estratégia dominante, Nash, jogo repetido); (4) <b>V/F de elasticidade</b> (% × unidades, renda × preço); (5) identificar a <b>falha de mercado</b> num texto de jornal.</div>
  <h3 class="h2">Roteiro sugerido para cada tema</h3>
  <ol class="how"><li><b>Resumo</b>: leia o “Em uma frase” e as pegadinhas.</li><li><b>Laboratório</b>: mexa nos gráficos até prever o resultado antes de clicar.</li><li><b>Flashcards</b>: definições e fórmulas na ponta da língua.</li><li><b>Questões</b>: resolva no papel e leia o comentário de cada erro.</li><li><b>Simulado</b>: misture temas, com cronômetro.</li></ol>
  <h3 class="h2">Temas</h3>
  <div class="acards">${MODS.map((m, i) => { const st = stats(i); return `<div class="acard" style="--a:${m.cor}"><b class="id">${m.id} · ${m.cap}</b><h4>${m.titulo}</h4><p>${m.tema}</p>
    <div class="pbar"><i style="width:${pct(st.ok, st.tot)}%"></i><i class="bad" style="width:${pct(st.bad, st.tot)}%"></i></div><span class="note">${st.ok} certas · ${st.bad} erradas · ${st.tot - st.ans} por fazer</span>
    <div class="links"><a class="btn sm" href="#/aula/${i}/resumo">📖 Resumo</a><a class="btn sm" href="#/aula/${i}/lab">🧪 Lab</a><a class="btn sm" href="#/aula/${i}/questoes">🎯 ${st.tot}</a></div></div>`; }).join('')}</div>
  <p class="note" style="margin-top:20px">Fontes: slides de GED-72 (Marchon, <i>Introdução à Microeconomia</i>, 2021; Mankiw, <i>Introdução à Economia</i>, 10ª ed.), planilhas das aulas e provas de 2025 resolvidas. Blocos marcados “Complemento” vão além dos slides.</p>`;
}
function viewFormulas(el) {
  el.innerHTML = `<p class="muted">Todas as fórmulas dos temas. Clique no tema para ver o resumo completo.</p><div class="fgrid">${FORMULAS.map(([a, n, f, nt]) => { const m = MODS.find(x => x.id === a); return `<div class="fitem" style="--a:${m.cor}"><small><a href="#/aula/${m.idx}/resumo" style="color:inherit">${a} · ${m.titulo}</a></small><b>${n}</b><span class="f">${esc(f)}</span>${nt ? `<span>${esc(nt)}</span>` : ''}</div>`; }).join('')}</div>`;
}
function viewTraps(el) {
  el.innerHTML = MODS.map(m => `<section class="sec" style="--a:${m.cor}"><h3><span class="n">${m.id.replace('Tema ', '')}</span> ${m.titulo}</h3><ul class="traps">${m.pegadinhas.map(p => `<li>${esc(p)}</li>`).join('')}</ul></section>`).join('');
}
function viewAula(el, mi, tab) {
  const m = MODS[mi];
  if (tab === 'resumo') {
    el.innerHTML = m.resumo + `<section class="sec"><h3>⚠️ Pegadinhas deste tema</h3><ul class="traps">${m.pegadinhas.map(p => `<li>${esc(p)}</li>`).join('')}</ul></section>
      <div class="pager"><a class="btn" href="#/aula/${mi}/lab">🧪 Ir para o laboratório</a><a class="btn pri" href="#/aula/${mi}/questoes">🎯 Resolver as ${m.qs.length} questões →</a></div>`;
    fillFigs(el);
  } else if (tab === 'lab') {
    el.innerHTML = '<div id="labRoot"></div>' + `<div class="pager"><a class="btn" href="#/aula/${mi}/resumo">← Resumo</a><a class="btn pri" href="#/aula/${mi}/questoes">🎯 Questões →</a></div>`;
    LAB[m.lab]($('#labRoot', el));
  } else if (tab === 'cards') {
    renderCards(el, mi);
  } else {
    const list = m.qs.map((_, qi) => [mi, qi]);
    const nxt = MODS[mi + 1];
    el.innerHTML = toolbar() + `<div id="qlist">${renderQuestionList(list)}</div>
      <div class="pager"><a class="btn" href="#/aula/${mi}/resumo">← Resumo</a>${nxt ? `<a class="btn pri" href="#/aula/${mi + 1}/resumo">Próximo: ${nxt.id} →</a>` : '<a class="btn pri" href="#/simulado">Fazer um simulado →</a>'}</div>`;
  }
}
function allList() { const l = []; MODS.forEach((m, mi) => m.qs.forEach((_, qi) => l.push([mi, qi]))); return l; }

/* ---------- barra lateral ---------- */
function renderSide() {
  const s = stats();
  $('#score').innerHTML = `<div class="row"><span>Acertos</span><b>${s.ok} / ${s.tot}</b></div>
    <div class="pbar"><i style="width:${pct(s.ok, s.tot)}%"></i><i class="bad" style="width:${pct(s.bad, s.tot)}%"></i></div>
    <div class="row"><span>${s.ans} respondidas · ${pct(s.ok, s.ans)}% de acerto</span></div>`;
  const r = parse();
  const on = (cond) => cond ? 'on' : '';
  $('#nav').innerHTML = `<a href="#/inicio" class="${on(r.v === 'inicio')}"><span class="ic">🏠</span><span class="lbl"><span>Início</span></span></a>
    <h6>Temas</h6>
    ${MODS.map((m, i) => { const st = stats(i); return `<a href="#/aula/${i}/${r.v === 'aula' ? r.tab : 'resumo'}" class="${on(r.v === 'aula' && r.m === i)}" style="--a:${m.cor}"><span class="dot"></span><span class="lbl"><b>${m.id}</b><span>${m.titulo}</span></span><span class="cnt ${st.ans === st.tot ? 'full' : ''}">${st.ok}/${st.tot}</span></a>`; }).join('')}
    <h6>Praticar</h6>
    <a href="#/discursiva" class="${on(r.v === 'discursiva')}"><span class="ic">✍️</span><span class="lbl"><span>Questão de gráficos (10 pts)</span></span></a>
    <a href="#/simulado" class="${on(r.v === 'simulado')}"><span class="ic">📝</span><span class="lbl"><span>Simulado</span></span>${sim && !sim.done ? '<span class="cnt">em andamento</span>' : ''}</a>
    <a href="#/todas" class="${on(r.v === 'todas')}"><span class="ic">🔥</span><span class="lbl"><span>Todas as ${TOTAL} questões</span></span></a>
    <a href="#/erros" class="${on(r.v === 'erros')}"><span class="ic">🔁</span><span class="lbl"><span>Revisar erros</span></span>${s.bad ? `<span class="badge">${s.bad}</span>` : ''}</a>
    <a href="#/cards" class="${on(r.v === 'cards')}"><span class="ic">🃏</span><span class="lbl"><span>Flashcards (todos)</span></span></a>
    <h6>Consulta</h6>
    <a href="#/formulas" class="${on(r.v === 'formulas')}"><span class="ic">📐</span><span class="lbl"><span>Formulário</span></span></a>
    <a href="#/pegadinhas" class="${on(r.v === 'pegadinhas')}"><span class="ic">⚠️</span><span class="lbl"><span>Pegadinhas</span></span></a>
    <h6>Dados</h6>
    <a href="#" data-act="reset-all"><span class="ic">🗑️</span><span class="lbl"><span id="resetLbl">Zerar respostas das questões</span></span></a>`;
}

/* ---------- roteamento ---------- */
function parse() {
  const h = location.hash.replace(/^#\/?/, '').split('/');
  if (h[0] === 'aula') {
    const m = Math.min(MODS.length - 1, Math.max(0, parseInt(h[1], 10) || 0));
    const tab = ['resumo', 'lab', 'questoes', 'cards'].includes(h[2]) ? h[2] : 'resumo';
    return { v: 'aula', m, tab };
  }
  return { v: ['inicio', 'todas', 'erros', 'simulado', 'cards', 'formulas', 'pegadinhas', 'discursiva'].includes(h[0]) ? h[0] : 'inicio' };
}
let lastHash = null, resetArmed = false;
function render() {
  const r = parse(), oldView = $('#view'), tabs = $('#tabs');
  // troca o elemento da view para descartar ouvintes de laboratórios anteriores
  const view = oldView.cloneNode(false); oldView.replaceWith(view); mathObs.observe(view, { childList: true, subtree: true });
  closeMenu();
  if (location.hash !== lastHash) { ui.filter = r.v === 'erros' ? 'wrong' : 'all'; ui.search = ''; }
  renderSide();
  const set = (t, s) => { $('#title').textContent = t; $('#subtitle').innerHTML = s || ''; document.title = t + ' · Microeconomia ITA'; };
  document.documentElement.style.setProperty('--a', r.v === 'aula' ? MODS[r.m].cor : '#60a5fa');
  tabs.hidden = r.v !== 'aula';
  if (r.v === 'aula') {
    const m = MODS[r.m];
    set(`${m.id}: ${m.titulo}`, `${m.cap} · ${m.tema}`);
    tabs.innerHTML = [['resumo', '📖 Resumo'], ['lab', '🧪 Laboratório'], ['cards', '🃏 Flashcards'], ['questoes', `🎯 Questões (${m.qs.length})`]]
      .map(([k, l]) => `<a href="#/aula/${r.m}/${k}" class="${r.tab === k ? 'on' : ''}">${l}</a>`).join('');
    viewAula(view, r.m, r.tab);
  } else if (r.v === 'todas' || r.v === 'erros') {
    set(r.v === 'erros' ? '🔁 Revisar erros' : `🔥 Todas as ${TOTAL} questões`, r.v === 'erros' ? 'Refaça as questões que você errou. Ao acertar, ela sai desta lista na próxima visita.' : 'Questões dos slides, do livro e das provas de 2025');
    view.innerHTML = toolbar(r.v !== 'erros') + `<div id="qlist">${renderQuestionList(allList(), r.v === 'erros' ? '🎉 Nenhum erro para revisar.' : undefined)}</div>`;
  } else if (r.v === 'simulado') {
    set('📝 Simulado', 'Questões sorteadas, correção no final'); renderSim(view);
  } else if (r.v === 'cards') {
    set('🃏 Flashcards', 'Todos os cartões de todos os temas'); renderCards(view);
  } else if (r.v === 'formulas') {
    set('📐 Formulário', 'Todas as fórmulas em um lugar'); viewFormulas(view);
  } else if (r.v === 'pegadinhas') {
    set('⚠️ Pegadinhas', 'Os erros mais comuns, tema por tema'); viewTraps(view);
  } else if (r.v === 'discursiva') {
    set('✍️ Questão de gráficos (10 pontos)', 'Empresa × mercado, curto e longo prazo — roteiro, simulador e respostas-modelo'); viewDiscursiva(view);
  } else {
    set('Início', 'Microeconomia · GED-72 · ITA'); viewHome(view);
  }
  if (location.hash !== lastHash) { window.scrollTo(0, 0); lastHash = location.hash; }
}

/* ---------- eventos globais ---------- */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]'); if (!t) return;
  const a = t.dataset.act, r = parse();
  if (a === 'ans') return onAnswer(+t.dataset.m, +t.dataset.q, +t.dataset.o);
  if (a === 'retry') return onRetry(+t.dataset.m, +t.dataset.q);
  if (a === 'filter') { ui.filter = t.dataset.f; return render(); }
  if (a.startsWith('fc-')) return fcAct(a, t.dataset.v, $('#view'), r.v === 'aula' ? r.m : undefined);
  if (a.startsWith('sim-')) return simAct(a, t.dataset.v);
  if (a === 'reset-all') {
    e.preventDefault();
    if (!resetArmed) { resetArmed = true; $('#resetLbl').textContent = 'Clique de novo para confirmar'; setTimeout(() => { resetArmed = false; const l = $('#resetLbl'); if (l) l.textContent = 'Zerar respostas das questões'; }, 3500); return; }
    resetArmed = false; answers = {}; saveAnswers(); render();
  }
});
document.addEventListener('input', e => {
  if (e.target.id === 'search') {
    ui.search = e.target.value;
    const r = parse(), list = r.v === 'aula' ? MODS[r.m].qs.map((_, qi) => [r.m, qi]) : allList();
    $('#qlist').innerHTML = renderQuestionList(list);
  }
});
document.addEventListener('keydown', e => {
  if (e.target.matches('input, textarea, select')) return;
  const r = parse();
  const inCards = r.v === 'cards' || (r.v === 'aula' && r.tab === 'cards');
  if (inCards && $('.fc')) {
    const mi = r.v === 'aula' ? r.m : undefined;
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); fcAct('fc-flip', null, $('#view'), mi); }
    if (e.key === 'ArrowRight') fcAct('fc-next', null, $('#view'), mi);
    if (e.key === 'ArrowLeft') fcAct('fc-prev', null, $('#view'), mi);
  }
  if (r.v === 'simulado' && sim && !sim.done) {
    const k = 'abcde'.indexOf(e.key.toLowerCase());
    if (k >= 0 && k < MODS[sim.qs[sim.cur][0]].qs[sim.qs[sim.cur][1]].o.length) simAct('sim-ans', k);
    if (e.key === 'ArrowRight') simAct('sim-go', sim.cur + 1);
    if (e.key === 'ArrowLeft') simAct('sim-go', sim.cur - 1);
  }
  if (e.key === 'Escape') closeMenu();
});
function closeMenu() { $('#side').classList.remove('open'); $('#scrim').classList.remove('open'); }
$('#menuBtn').addEventListener('click', () => { $('#side').classList.add('open'); $('#scrim').classList.add('open'); });
$('#scrim').addEventListener('click', closeMenu);
$('#themeBtn').addEventListener('click', () => {
  const t = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', t); LS.set('micro_ita_theme', t);
});
window.addEventListener('hashchange', render);

/* ---------- fórmulas matemáticas (KaTeX) ---------- */
const MATH_OPTS = { delimiters: [{ left: '\\(', right: '\\)', display: false }, { left: '\\[', right: '\\]', display: true }], throwOnError: false, strict: false };
function typeset(el) { if (window.renderMathInElement && el) renderMathInElement(el, MATH_OPTS); }
const mathQueue = new Set(); let mathPending = false;
const mathObs = new MutationObserver(recs => {
  for (const r of recs) for (const n of r.addedNodes) {
    const el = n.nodeType === 1 ? n : n.parentElement;
    if (el && !el.closest('.katex') && !el.closest('svg')) mathQueue.add(el);
  }
  if (mathQueue.size && !mathPending) {
    mathPending = true;
    requestAnimationFrame(() => { mathPending = false; const els = [...mathQueue]; mathQueue.clear(); els.forEach(e => e.isConnected && typeset(e)); });
  }
});

render();
typeset($('#view'));
