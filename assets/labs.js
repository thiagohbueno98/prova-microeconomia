'use strict';
/* =====================================================================
   LABORATÓRIOS — um por tema
   ===================================================================== */
const LAB = {};

/* ---------- jogo de classificação genérico ---------- */
function classGame(el, id, items, choices, intro) {
  const st = {};
  const draw = () => {
    const done = Object.keys(st).length, ok = items.filter((it, i) => st[i] === it[1]).length;
    $(`#${id}Score`, el).innerHTML = `${intro ? intro + ' · ' : ''}<b>${ok}</b> certas de ${done} respondidas (${items.length} no total)`;
    $(`#${id}Game`, el).innerHTML = items.map(([txt, ans, why], i) => {
      const a = st[i];
      return `<div class="game-item"><span>${txt}</span><span class="gbtns">${choices.map(([k, l]) => {
        let c = ''; if (a !== undefined) c = k === ans ? 'right' : (k === a ? 'wrong' : '');
        return `<button data-g="${id}" data-i="${i}" data-k="${k}" class="${c}" ${a !== undefined ? 'disabled' : ''}>${l}</button>`;
      }).join('')}</span>${a !== undefined ? `<span class="gexp">${a === ans ? '✅' : '❌'} ${why}</span>` : ''}</div>`;
    }).join('');
  };
  el.addEventListener('click', e => {
    const b = e.target.closest(`[data-g="${id}"]`); if (b) { st[b.dataset.i] = b.dataset.k; draw(); }
    if (e.target.id === id + 'Reset') { for (const k in st) delete st[k]; draw(); }
  });
  draw();
}
const gameBox = (id, title, desc) => `<div class="lab"><h3>${title}</h3><p class="muted">${desc}</p><div id="${id}Score" class="note"></div><div id="${id}Game"></div><div class="btns"><button class="btn sm" id="${id}Reset">Recomeçar</button></div></div>`;

/* =====================================================================
   TEMA 1 — Demanda e oferta
   ===================================================================== */
const DO_SCEN = {
  base: { nome: 'Equilíbrio inicial', d: 0, s: 0, txt: 'Ponto 1: a quantidade demandada é igual à ofertada. Escolha um evento para ver qual curva se desloca.' },
  renda_normal: { nome: 'Renda sobe (bem normal)', d: 3, s: 0, txt: 'Bem normal: com mais renda, a <b>demanda aumenta</b> (curva D para a direita). Ao longo da oferta, há um aumento da <b>quantidade ofertada</b>. P* ▲ e Q* ▲.' },
  renda_inferior: { nome: 'Renda sobe (bem inferior)', d: -3, s: 0, txt: 'Bem inferior (produto de menor qualidade, moto para quem passa a comprar carro…): com mais renda, a <b>demanda cai</b>. P* ▼ e Q* ▼.' },
  substituto: { nome: 'Preço do substituto sobe', d: 3, s: 0, txt: 'Bens substitutos: carro novo mais caro torna o usado mais atrativo → <b>demanda por usados aumenta</b>. P* ▲ e Q* ▲.' },
  complementar: { nome: 'Preço do complementar sobe', d: -3, s: 0, txt: 'Bens complementares: gasolina mais cara reduz o interesse por carros → <b>demanda por carros cai</b>. P* ▼ e Q* ▼.' },
  custo: { nome: 'Insumo mais caro / dólar valoriza', d: 0, s: -3, txt: 'Custo maior (insumos importados mais caros) ou exportar ficou mais atrativo (carne bovina): para cada preço, ofertam menos → <b>oferta cai</b> (curva O para a esquerda). P* ▲ e Q* ▼.' },
  tecnologia: { nome: 'Tecnologia barateia a produção', d: 0, s: 3, txt: 'Custo menor: para cada preço, ofertam mais → <b>oferta aumenta</b>. P* ▼ e Q* ▲.' },
  desenrola: { nome: 'Desenrola Brasil (duráveis)', d: 3, s: 0, txt: 'O programa limpa o nome dos inadimplentes e abre caminho para novas compras a prazo → <b>aumento na demanda</b> por duráveis e <b>aumento na quantidade ofertada</b> (movimento ao longo da oferta). P* ▲ e Q* ▲.' },
  usados: { nome: 'Carro novo mais caro (mercado de usados)', d: 3, s: -3, txt: 'Dois efeitos: a <b>demanda</b> por usados <b>aumenta</b> (substituto ficou caro) e a <b>oferta</b> de usados <b>cai</b> (fica menos interessante trocar o usado por um novo). P* ▲ com certeza; Q* é <b>ambíguo</b> (depende do tamanho de cada deslocamento — aqui os dois são iguais e Q* não muda).' }
};
const DO_EQ = p => { const Q = (12 + p.d + p.s) / 2; return { Q, P: 16 + p.d - Q }; };
function doShiftChart(p) {
  const e = DO_EQ(p), e0 = DO_EQ({ d: 0, s: 0 }), curves = [], arrows = [];
  const mv = p.d !== 0 || p.s !== 0;
  if (p.d) curves.push({ g: y => 16 - y, cls: 'ghost', lab: 'D₁', labEnd: 'a', dy: -6 });
  if (p.s) curves.push({ g: y => y - 4, cls: 'ghost', lab: 'O₁' });
  curves.push({ g: y => 16 + p.d - y, cls: 'd', lab: p.d ? 'D₂' : 'D', labEnd: 'a', dy: -6 });
  curves.push({ g: y => y - 4 + p.s, cls: 's', lab: p.s ? 'O₂' : 'O' });
  if (p.d) arrows.push([16 - 14 + (p.d > 0 ? 0.4 : -0.4), 14, 16 + p.d - 14 + (p.d > 0 ? -0.4 : 0.4), 14]);
  if (p.s) arrows.push([16 - 4 + (p.s > 0 ? 0.4 : -0.4), 16, 16 - 4 + p.s + (p.s > 0 ? -0.4 : 0.4), 16]);
  const pts = mv ? [{ x: e0.Q, y: e0.P, n: 1, cls: 'old', yt: 'P₁', xt: 'Q₁' }, { x: e.Q, y: e.P, n: 2, yt: near(e.P, e0.P) ? '' : 'P₂', xt: near(e.Q, e0.Q) ? '' : 'Q₂' }] : [{ x: e.Q, y: e.P, n: 1, yt: 'P*', xt: 'Q*' }];
  return chart({ xr: [0, 14], yr: [0, 19], xl: 'Quantidade', yl: 'Preço', curves, points: pts, arrows, h: 300 });
}
const DO_PRESETS = {
  arroz: { nome: 'Arroz (Questão 1)', a: 5.6, b: 0.2, c: -1, d: 2, u: 'P em R$/kg · Q em toneladas', ctrl: 'nenhum', v: 3 },
  trabalho: { nome: 'Trabalho (Questão 4)', a: 1000, b: 50, c: 200, d: 50, u: 'w em R$/hora · L em trabalhadores', ctrl: 'piso', v: 10 },
  teto: { nome: 'Teto (slide: P*=8, teto=5)', a: 7000, b: 600, c: -1000, d: 400, u: 'unidades ilustrativas', ctrl: 'teto', v: 5 },
  piso: { nome: 'Salário mínimo (slide: w*=10, piso=12)', a: 1000, b: 50, c: -250, d: 75, u: 'unidades ilustrativas', ctrl: 'piso', v: 12 }
};
const DO_GAME = [
  ['Renda das famílias aumenta (mercado de carne, bem normal)', 'D+', 'Bem normal: renda maior → demanda maior para cada preço.'],
  ['Renda aumenta (mercado de um produto de menor qualidade, bem inferior)', 'D-', 'Bem inferior: renda maior → demanda menor.'],
  ['Preço da gasolina sobe (mercado de carros)', 'D-', 'Complementares: o preço de um sobe, a demanda do outro cai.'],
  ['Preço do carro novo sobe (mercado de carros usados — lado da demanda)', 'D+', 'Substitutos: o preço de um sobe, a demanda do outro sobe.'],
  ['Seca reduz a safra de feijão', 'O-', 'Choque de produção: menos oferta para cada preço.'],
  ['Nova máquina reduz o custo de produção', 'O+', 'Custo menor → mais oferta para cada preço.'],
  ['Dólar se valoriza (mercado interno de carne bovina)', 'O-', 'Insumos importados mais caros e exportar fica mais atrativo → oferta interna cai.'],
  ['Desenrola limpa o nome dos inadimplentes (bens duráveis)', 'D+', 'Mais gente volta a poder comprar a prazo → demanda aumenta.'],
  ['Seguro de navios no Estreito de Ormuz fica 50× mais caro (mercado de petróleo)', 'O-', 'Custo de levar o petróleo ao mercado sobe → oferta cai.'],
  ['Gastos com bets reduzem a renda disponível (varejo)', 'D-', 'Menos renda para o varejo → demanda menor para cada preço.'],
  ['O preço do próprio bem cai', 'MOV', 'Mudança no preço do próprio bem NÃO desloca curva: é movimento ao longo da curva (variação na quantidade demandada/ofertada).'],
  ['Mais empresas entram no mercado', 'O+', 'Mais vendedores → oferta de mercado maior (soma horizontal de mais curvas).']
];
LAB.oferta = el => {
  let scen = 'base', pre = 'arroz', P = Object.assign({}, DO_PRESETS.arroz);
  el.innerHTML = `
  <div class="lab"><h3>🔀 Quem se desloca? Demanda, oferta ou nenhuma?</h3>
    <p class="muted">Clique num evento. A curva que se desloca fica colorida; a antiga aparece tracejada. Tente prever P* e Q* antes de clicar.</p>
    <div class="btns" id="doSc">${Object.entries(DO_SCEN).map(([k, v]) => `<button class="btn sm ${k === scen ? 'on' : ''}" data-s="${k}">${v.nome}</button>`).join('')}</div>
    <div class="lab-grid"><div id="doCh"></div><div><div class="readout" id="doRo"></div><div class="explain" id="doEx"></div>
    <div class="extra" style="margin-top:12px"><b>Regra de ouro:</b> mudou o <b>preço do próprio bem</b> → movimento <b>ao longo</b> da curva (variação na <i>quantidade</i> demandada/ofertada). Mudou <b>qualquer outra coisa</b> (renda, preço de outro bem, custo, expectativas, nº de vendedores) → a <b>curva inteira se desloca</b> (variação na demanda/oferta).</div></div></div>
  </div>
  <div class="lab"><h3>🧮 Equilíbrio, excedentes e controle de preços</h3>
    <p class="muted">Curvas lineares <b>Qd = a − bP</b> e <b>Qs = c + dP</b>. Escolha um exemplo das aulas ou digite os seus.</p>
    <div class="btns" id="doPre">${Object.entries(DO_PRESETS).map(([k, v]) => `<button class="btn sm ${k === pre ? 'on' : ''}" data-p="${k}">${v.nome}</button>`).join('')}</div>
    <div class="fields" id="doIn"></div>
    <div class="lab-grid"><div id="doEqCh"></div><div><div class="readout" id="doEqRo"></div><div class="explain" id="doEqEx"></div></div></div>
  </div>
  ${gameBox('doG', '🎯 Desloca a demanda, a oferta ou é movimento ao longo da curva?', 'Classifique cada evento do ponto de vista do mercado indicado.')}`;
  const drawSc = () => {
    const s = DO_SCEN[scen], e = DO_EQ(s), e0 = DO_EQ({ d: 0, s: 0 });
    $('#doCh', el).innerHTML = doShiftChart(s);
    $('#doRo', el).innerHTML = `<div><small>P*</small><b>${fmt(e.P)}</b>${scen === 'base' ? '' : arrow(e.P, e0.P)}</div><div><small>Q*</small><b>${fmt(e.Q)}</b>${scen === 'base' ? '' : arrow(e.Q, e0.Q)}</div>`;
    $('#doEx', el).innerHTML = `<p>${s.txt}</p>`;
    $$('#doSc button', el).forEach(b => b.classList.toggle('on', b.dataset.s === scen));
  };
  const drawIn = () => {
    $('#doIn', el).innerHTML = [['a', 'a (Qd = a − bP)'], ['b', 'b'], ['c', 'c (Qs = c + dP)'], ['d', 'd']].map(([k, l]) => `<label class="field">${l}<input type="number" step="any" data-k="${k}" value="${P[k]}"></label>`).join('') +
      `<label class="field">Controle<select class="sel-inline" data-k="ctrl"><option value="nenhum" ${P.ctrl === 'nenhum' ? 'selected' : ''}>nenhum</option><option value="teto" ${P.ctrl === 'teto' ? 'selected' : ''}>preço-teto</option><option value="piso" ${P.ctrl === 'piso' ? 'selected' : ''}>preço-piso</option></select></label>
       <label class="field">Valor do teto/piso<input type="number" step="any" data-k="v" value="${P.v}"></label>`;
  };
  const drawEq = () => {
    const e = linEq(P.a, P.b, P.c, P.d);
    if (!(e.P > 0 && e.Q > 0)) { $('#doEqCh', el).innerHTML = ''; $('#doEqRo', el).innerHTML = ''; $('#doEqEx', el).innerHTML = '<p>Com esses números não há equilíbrio com P e Q positivos.</p>'; return; }
    const ctrl = P.ctrl !== 'nenhum' ? P.v : undefined;
    $('#doEqCh', el).innerHTML = dsChart(P.a, P.b, P.c, P.d, { ctrl, ctrlLab: P.ctrl === 'teto' ? 'teto' : 'piso', areas: ctrl === undefined });
    let ro = `<div><small>P*</small><b>${fmtA(e.P, 3)}</b></div><div><small>Q*</small><b>${fmtA(e.Q, 3)}</b></div><div><small>Exc. consumidor</small><b>${fmtA(e.EC, 2)}</b></div><div><small>Exc. produtor</small><b>${fmtA(e.EP, 2)}</b></div>`;
    let ex = `<p><b>Equilíbrio:</b> Qd = Qs ⇒ ${fmtA(P.a)} − ${fmtA(P.b)}P = ${fmtA(P.c)} + ${fmtA(P.d)}P ⇒ P* = ${fr(`${fmtA(P.a)} − (${fmtA(P.c)})`, `${fmtA(P.b)} + ${fmtA(P.d)}`)} = <b>${fmtA(e.P, 3)}</b> e Q* = <b>${fmtA(e.Q, 3)}</b>.</p>
      <p><b>EC</b> = área do triângulo abaixo da demanda e acima de P*: ${fr(`(${fmtA(e.Pmax, 3)} − ${fmtA(e.P, 3)}) × ${fmtA(e.Q, 3)}`, 2)} = <b>${fmtA(e.EC, 3)}</b>. <b>EP</b> = área acima da oferta e abaixo de P*${P.c <= 0 ? `: ${fr(`(${fmtA(e.P, 3)} − ${fmtA(e.Pmin, 3)}) × ${fmtA(e.Q, 3)}`, 2)}` : ''} = <b>${fmtA(e.EP, 3)}</b>.</p><p class="note">${DO_PRESETS[pre] ? DO_PRESETS[pre].u : ''}${pre === 'arroz' ? ' — como Q está em toneladas e P em R$/kg, multiplique as áreas por 1.000 para ter R$ (EC = R$ 62.500; EP = R$ 6.250).' : ''}</p>`;
    if (ctrl !== undefined) {
      const qd = P.a - P.b * ctrl, qs = P.c + P.d * ctrl;
      const bind = P.ctrl === 'teto' ? ctrl < e.P : ctrl > e.P;
      ro += `<div><small>Qd em P̄</small><b>${fmtA(qd, 2)}</b></div><div><small>Qs em P̄</small><b>${fmtA(qs, 2)}</b></div>`;
      ex = bind
        ? `<p><b>${P.ctrl === 'teto' ? 'Teto' : 'Piso'} de ${fmtA(ctrl)} é restritivo</b> (está ${P.ctrl === 'teto' ? 'abaixo' : 'acima'} de P* = ${fmtA(e.P, 3)}).</p><p>Qd = ${fmtA(qd, 2)} e Qs = ${fmtA(qs, 2)} ⇒ <b>${qd > qs ? 'excesso de demanda (escassez)' : 'excesso de oferta'}</b> de <b>${fmtA(Math.abs(qd - qs), 2)}</b>.${P.ctrl === 'teto' ? ' A quantidade negociada é a menor das duas (a ofertada): filas, mercado paralelo, crise de abastecimento (Plano Cruzado, 1986).' : ' No mercado de trabalho, excesso de oferta de trabalhadores = desemprego.'}</p>`
        : `<p><b>${P.ctrl === 'teto' ? 'Teto' : 'Piso'} de ${fmtA(ctrl)} não é restritivo</b>: o mercado já opera em P* = ${fmtA(e.P, 3)}, que respeita o limite. Nada muda.</p>`;
    }
    $('#doEqRo', el).innerHTML = ro; $('#doEqEx', el).innerHTML = ex;
  };
  el.addEventListener('click', e => {
    const s = e.target.closest('#doSc [data-s]'); if (s) { scen = s.dataset.s; drawSc(); }
    const p = e.target.closest('#doPre [data-p]'); if (p) { pre = p.dataset.p; P = Object.assign({}, DO_PRESETS[pre]); $$('#doPre button', el).forEach(b => b.classList.toggle('on', b.dataset.p === pre)); drawIn(); drawEq(); }
  });
  el.addEventListener('input', e => { const k = e.target.dataset.k; if (k && e.target.closest('#doIn')) { P[k] = k === 'ctrl' ? e.target.value : parseNum(e.target.value, P[k]); pre = '_'; drawEq(); } });
  el.addEventListener('change', e => { if (e.target.dataset.k === 'ctrl') { P.ctrl = e.target.value; drawEq(); } });
  drawSc(); drawIn(); drawEq();
  classGame(el, 'doG', DO_GAME, [['D+', 'D ↑'], ['D-', 'D ↓'], ['O+', 'O ↑'], ['O-', 'O ↓'], ['MOV', 'Ao longo']]);
};

/* =====================================================================
   TEMA 2 — Elasticidade
   ===================================================================== */
const RENDA = [[2100, 1000], [1950, 1100], [1600, 1120], [2010, 1150], [1800, 1200], [1700, 1220], [1970, 1230], [1900, 1250], [2050, 1300], [1660, 1309], [2400, 1320], [2200, 1350], [2150, 1400], [2060, 1420], [1770, 1450], [1930, 1500], [2500, 1550], [2000, 1600], [2250, 1630], [2550, 1650], [1950, 1700], [2050, 1750], [2400, 1820], [2150, 1830], [2750, 1850], [2350, 1900], [2100, 1920], [2550, 1950], [2300, 1970], [2417, 2000], [2600, 2030], [2800, 2060], [2200, 2080], [3150, 2100], [2250, 2200], [2500, 2250], [2700, 2350], [2850, 2400], [2750, 2420], [2450, 2440], [2900, 2500], [2850, 2550], [2980, 2600], [2600, 2700], [2950, 2750], [3050, 2800], [2850, 3000]];
function ols(xs, ys) { const n = xs.length, mx = xs.reduce((a, b) => a + b) / n, my = ys.reduce((a, b) => a + b) / n; let sxy = 0, sxx = 0; xs.forEach((x, i) => { sxy += (x - mx) * (ys[i] - my); sxx += (x - mx) ** 2; }); const b = sxy / sxx; return { a: my - b * mx, b }; }
const EL_GAME = [
  ['ε-preço da demanda por café = −0,25 ⇒ “se o preço sobe 1%, a quantidade demandada cai 0,25 unidade”', 'F', 'Elasticidade é % sobre %: preço +1% ⇒ quantidade −0,25% (não “0,25 unidade”). Caiu na prova de 2025.'],
  ['ε-preço da demanda por tabaco = −0,5 ⇒ “aumento de 1% no preço associado a queda de cerca de 0,5% na quantidade demandada”', 'V', 'Interpretação correta: variação percentual sobre variação percentual.'],
  ['ε-renda das canetinhas emagrecedoras = 0,25 ⇒ “preço +1% reduz a quantidade em 0,25%”', 'F', 'É elasticidade-RENDA: renda +1% ⇒ quantidade demandada +0,25%. Caiu na prova de 2025 (tarde).'],
  ['ε-renda de bens de luxo = 2,5 ⇒ “renda +1% ⇒ demanda por bens de luxo +2,5%”', 'V', 'Elasticidade-renda > 1: bem de luxo (a demanda cresce mais que proporcionalmente à renda).'],
  ['|ε| = 0,3 ⇒ demanda elástica', 'F', '|ε| < 1 ⇒ demanda INELÁSTICA: a quantidade varia menos (em %) que o preço.'],
  ['A demanda por gasolina tende a ser mais elástica no longo prazo do que no curto prazo', 'V', 'No longo prazo há mais tempo para se ajustar (carro menor, mais eficiente, mudar de casa…).'],
  ['A demanda pelos morangos de UM produtor é mais elástica do que a demanda de mercado por morangos', 'V', 'Os morangos dos outros produtores são substitutos perfeitos dos dele.'],
  ['Na regressão Y = a + bX (sem log), o coeficiente b é a elasticidade de Y em relação a X', 'F', 'Só em ln(Y) = a + b·ln(X) o b é elasticidade. Em níveis, b é a inclinação (depende das unidades).'],
  ['A inclinação da curva de demanda serve para comparar a sensibilidade ao preço entre países', 'F', 'A inclinação depende das unidades (reais × dólares, litros × galões). A elasticidade é adimensional — por isso é usada.'],
  ['Elasticidade intergeracional de renda = 0,5: renda dos pais 100% maior ⇒ filhos ganham, em média, 50% mais', 'V', 'É exatamente a leitura do Atlas da Mobilidade Social usada em aula.'],
  ['Se habilidade (não observada) aumenta salário e escolaridade, o b de “salário = a + b·escolaridade” tende a superestimar o efeito da educação', 'V', 'Viés de variável omitida positivo: parte do efeito da habilidade é atribuída à escolaridade.']
];
LAB.elast = el => {
  const E = { p1: 10, q1: 100, p2: 12, q2: 94 }, L = { a: 100, b: 5, p: 6 };
  let logv = true;
  el.innerHTML = `
  <div class="lab"><h3>📏 Calculadora de elasticidade entre dois pontos</h3>
    <p class="muted">O exemplo dos slides: o preço da gasolina sobe 20% e a quantidade cai 6% ⇒ ε = −0,3.</p>
    <div class="fields">${[['p1', 'Preço inicial'], ['q1', 'Quantidade inicial'], ['p2', 'Preço final'], ['q2', 'Quantidade final']].map(([k, l]) => `<label class="field">${l}<input type="number" step="any" data-e="${k}" value="${E[k]}"></label>`).join('')}</div>
    <div class="readout" id="elRo"></div><div class="explain" id="elEx"></div>
  </div>
  <div class="lab"><h3>📉 Elasticidade ao longo de uma demanda linear <span class="tag">Complemento</span></h3>
    <p class="muted">Demanda <b>Q = a − bP</b>. A inclinação é constante, mas a elasticidade <b>muda</b> em cada ponto: ε = ${fr('dQ', 'dP')} · ${fr('P', 'Q')} = −b · ${fr('P', 'Q')}.</p>
    <div class="fields">${[['a', 'a'], ['b', 'b']].map(([k, l]) => `<label class="field">${l}<input type="number" step="any" data-l="${k}" value="${L[k]}"></label>`).join('')}<label class="field">Preço P = <span id="elPv"></span><input type="range" id="elP" min="0" max="100" value="30"></label></div>
    <div class="lab-grid"><div id="elLinCh"></div><div><div class="readout" id="elLinRo"></div><div class="explain" id="elLinEx"></div></div></div>
  </div>
  <div class="lab"><h3>📊 Regressão em log: o coeficiente vira elasticidade</h3>
    <p class="muted">Dados da planilha da aula (renda do indivíduo × renda do pai, 47 observações). Estimamos por Mínimos Quadrados Ordinários (MQO).</p>
    <div class="seg"><button data-v="1" id="elLog1" class="on">ln(y) = α + β·ln(x)</button><button data-v="0" id="elLog0">y = a + b·x</button></div>
    <div class="lab-grid"><div id="elRegCh"></div><div class="explain" id="elRegEx"></div></div>
  </div>
  ${gameBox('elG', '🎯 Interpretação certa ou errada?', 'Pegadinha clássica de prova: confundir “%” com “unidades” e confundir os tipos de elasticidade.')}`;
  const drawE = () => {
    const dq = (E.q2 - E.q1) / E.q1 * 100, dp = (E.p2 - E.p1) / E.p1 * 100, eps = dq / dp;
    const mq = (E.q2 - E.q1) / ((E.q1 + E.q2) / 2) * 100, mp = (E.p2 - E.p1) / ((E.p1 + E.p2) / 2) * 100;
    const cls = Math.abs(eps) < 1 ? 'inelástica' : Math.abs(eps) > 1 ? 'elástica' : 'unitária';
    $('#elRo', el).innerHTML = `<div><small>Δ%Q</small><b>${fmt(dq, 2)}%</b></div><div><small>Δ%P</small><b>${fmt(dp, 2)}%</b></div><div><small>ε</small><b>${isFinite(eps) ? fmt(eps, 3) : '—'}</b></div><div><small>ε (ponto médio)</small><b>${isFinite(mq / mp) ? fmt(mq / mp, 3) : '—'}</b></div>`;
    $('#elEx', el).innerHTML = isFinite(eps) ? `<p>ε = ${fr('Δ%Q', 'Δ%P')} = ${fr(fmt(dq, 2) + '%', fmt(dp, 2) + '%')} = <b>${fmt(eps, 3)}</b> ⇒ demanda <b>${cls}</b> nesse trecho (|ε| ${Math.abs(eps) < 1 ? '<' : Math.abs(eps) > 1 ? '>' : '='} 1).</p><p><b>Leitura:</b> um aumento de 1% no preço está associado a uma ${eps < 0 ? 'queda' : 'alta'} de ${fmt(Math.abs(eps), 2)}% na quantidade.</p><p class="note">Variação percentual = ${fr('final − inicial', 'inicial')} × 100%. É adimensional: trocar reais por dólares não muda nada. O “ponto médio” (divide pela média dos dois valores) dá o mesmo resultado nos dois sentidos — é um complemento do Mankiw.</p>` : '<p>Δ%P não pode ser zero.</p>';
  };
  const drawL = () => {
    const pmax = L.a / L.b, P = pmax * (+$('#elP', el).value) / 100, Q = L.a - L.b * P, eps = Q > 0 ? -L.b * P / Q : -Infinity;
    $('#elPv', el).textContent = fmt(P, 2);
    const mid = pmax / 2;
    $('#elLinCh', el).innerHTML = chart({ xr: [0, L.a * 1.08], yr: [0, pmax * 1.1], xl: 'Q', yl: 'P', curves: [{ pts: [[0, pmax], [L.a / 2, mid]], cls: 'm', lab: '|ε| > 1 (elástica)', labAt: [L.a * 0.12, pmax * 0.9], dx: 12 }, { pts: [[L.a / 2, mid], [L.a, 0]], cls: 's', lab: '|ε| < 1 (inelástica)', labAt: [L.a * 0.62, mid * 0.62], dx: 8 }], points: [{ x: Q, y: P, xt: fmtA(Q, 1), yt: fmtA(P, 2) }, { x: L.a / 2, y: mid, cls: 'old', guide: false, lab: '|ε| = 1', dx: 10, dy: 4 }], areas: [{ pts: [[0, 0], [0, P], [Q, P], [Q, 0]], cls: 'tax' }], h: 280 });
    $('#elLinRo', el).innerHTML = `<div><small>Q</small><b>${fmt(Q, 1)}</b></div><div><small>ε</small><b>${isFinite(eps) ? fmt(eps, 2) : '−∞'}</b></div><div><small>Receita P·Q</small><b>${fmt(P * Q, 1)}</b></div>`;
    $('#elLinEx', el).innerHTML = `<p>ε = −b · ${fr('P', 'Q')} = −${fmtA(L.b)} × ${fr(fmt(P, 2), fmt(Q, 1))} = <b>${isFinite(eps) ? fmt(eps, 2) : '−∞'}</b>.</p><p>Acima do ponto médio a demanda é elástica: <b>baixar</b> o preço aumenta a receita (área amarela). Abaixo, é inelástica: <b>subir</b> o preço aumenta a receita. A receita é máxima em |ε| = 1.</p>`;
  };
  const drawR = () => {
    const xs = RENDA.map(r => logv ? Math.log(r[1]) : r[1]), ys = RENDA.map(r => logv ? Math.log(r[0]) : r[0]);
    const { a, b } = ols(xs, ys), xr = logv ? [6.8, 8.1] : [800, 3200], yr = logv ? [7.2, 8.2] : [1400, 3300];
    const sc = xs.map((x, i) => `<circle cx="0" cy="0" r="3" data-x="${x}" data-y="${ys[i]}"/>`);
    let svg = chart({ xr, yr, xl: logv ? 'ln(renda do pai)' : 'renda do pai', yl: logv ? 'ln(renda)' : 'renda', curves: [{ f: x => a + b * x, a: xr[0], b: xr[1], cls: 'm', lab: 'MQO' }], h: 280, m: { l: 46 } });
    // pontos de dados: recalcula a escala do gráfico (mesma fórmula do chart)
    const W = 380, H = 280, m = { l: 46, r: 46, t: 16, b: 30 };
    const X = x => m.l + (x - xr[0]) / (xr[1] - xr[0]) * (W - m.l - m.r), Y = y => H - m.b - (y - yr[0]) / (yr[1] - yr[0]) * (H - m.t - m.b);
    svg = svg.replace('</svg>', xs.map((x, i) => `<circle cx="${X(x).toFixed(1)}" cy="${Y(ys[i]).toFixed(1)}" r="3" fill="var(--c1)" opacity=".75"/>`).join('') + '</svg>');
    $('#elRegCh', el).innerHTML = svg;
    $('#elRegEx', el).innerHTML = logv
      ? `<p>ln(y) = ${fmt(a, 2)} + <b>${fmt(b, 3)}</b>·ln(x)</p><p>Em log-log, o coeficiente é a <b>elasticidade</b>: renda do pai 1% maior ⇒ renda do filho ≈ ${fmt(b, 2)}% maior. É a “elasticidade intergeracional ≈ 0,5” do Atlas da Mobilidade Social.</p><p class="note">Prova: ln y = α + β ln x ⇒ y = e^(α+β ln x) ⇒ ${fr('dy', 'dx')} = ${fr('y·β', 'x')} ⇒ ${fr('dy', 'dx')} · ${fr('x', 'y')} = β.</p>`
      : `<p>y = ${fmt(a, 0)} + <b>${fmt(b, 3)}</b>·x</p><p>Em níveis, b é a <b>inclinação</b>: R$ 1 a mais na renda do pai ⇒ R$ ${fmt(b, 2)} a mais na do filho. Muda se mudarmos as unidades — <b>não</b> é elasticidade.</p>`;
    $('#elLog1', el).classList.toggle('on', logv); $('#elLog0', el).classList.toggle('on', !logv);
  };
  el.addEventListener('input', e => {
    if (e.target.dataset.e) { E[e.target.dataset.e] = parseNum(e.target.value, E[e.target.dataset.e]); drawE(); }
    if (e.target.dataset.l) { L[e.target.dataset.l] = Math.max(0.01, parseNum(e.target.value, L[e.target.dataset.l])); drawL(); }
    if (e.target.id === 'elP') drawL();
  });
  el.addEventListener('click', e => { if (e.target.id === 'elLog1' || e.target.id === 'elLog0') { logv = e.target.id === 'elLog1'; drawR(); } });
  drawE(); drawL(); drawR();
  classGame(el, 'elG', EL_GAME, [['V', 'V'], ['F', 'F']]);
};

/* =====================================================================
   TEMA 3 — Custos
   ===================================================================== */
const CU_PRE = {
  cafe: { nome: 'Café (prova 2025)', F: 18, a: 1800, c: 0, u: 'q em milhões de sacas, custo em milhões de US$' },
  reforma: { nome: 'Reforma tributária (antes)', F: 800, a: 2, c: 0, u: 'R$' },
  reforma2: { nome: 'Reforma (custo −30/unid.)', F: 800, a: 2, c: -30, u: 'R$' },
  livre: { nome: 'Outro', F: 100, a: 1, c: 10, u: '' }
};
LAB.custos = el => {
  let CF = 154, pre = 'reforma', K = Object.assign({}, CU_PRE.reforma);
  const U = { rec: 200, comb: 80, out: 50, op: 150 };
  el.innerHTML = `
  <div class="lab"><h3>🎂 A confeitaria de delivery (planilha da aula)</h3>
    <p class="muted">CF = aluguel, forno, veículo (não muda com q). Mude o custo fixo e veja o que se mexe: o CM e o CVM <b>não</b> dependem do custo fixo!</p>
    <div class="fields"><label class="field">Custo fixo (CF) = R$ <span id="cuCFv"></span><input type="range" id="cuCF" min="0" max="400" step="2" value="154"></label></div>
    <div class="lab-grid"><div id="cuCh"></div><div id="cuTab" style="overflow-x:auto"></div></div>
    <div class="explain" id="cuEx"></div>
  </div>
  <div class="lab"><h3>🧮 Função custo quadrática (estilo prova): CT(q) = F + c·q + a·q²</h3>
    <div class="btns" id="cuPre">${Object.entries(CU_PRE).map(([k, v]) => `<button class="btn sm ${k === pre ? 'on' : ''}" data-p="${k}">${v.nome}</button>`).join('')}</div>
    <div class="fields" id="cuIn"></div>
    <div class="lab-grid"><div id="cuQCh"></div><div><div class="readout" id="cuQRo"></div><div class="explain" id="cuQEx"></div></div></div>
  </div>
  <div class="lab"><h3>🚗 Vale a pena virar motorista de aplicativo? (custo de oportunidade)</h3>
    <div class="fields">${[['rec', 'Receita/dia'], ['comb', 'Combustível/dia'], ['out', 'Depreciação, lavagem, seguro/dia'], ['op', 'Melhor alternativa (custo de oportunidade)/dia']].map(([k, l]) => `<label class="field">${l}<input type="number" step="any" data-u="${k}" value="${U[k]}"></label>`).join('')}</div>
    <div class="readout" id="cuURo"></div><div class="explain" id="cuUEx"></div>
  </div>`;
  const drawB = () => {
    const T = boloTab(CF);
    $('#cuCFv', el).textContent = CF;
    const mn = T.slice(1).reduce((a, r) => r.CTM < a.CTM ? r : a);
    $('#cuCh', el).innerHTML = boloChart(CF, { cfm: true, noMin: CF !== 154, ymax: 240 });
    $('#cuTab', el).innerHTML = `<table class="t sm"><thead><tr><th>q</th><th>CV</th><th>CT</th><th>CFM</th><th>CVM</th><th>CTM</th><th>CM</th></tr></thead><tbody>${T.map(r => `<tr class="${r.q === mn.q ? 'hl' : ''}"><td>${r.q}</td><td>${r.CV}</td><td>${r.CT}</td><td>${r.q ? fmt(r.CFM, 1) : '—'}</td><td>${r.q ? fmt(r.CVM, 1) : '—'}</td><td>${r.q ? fmt(r.CTM, 1) : '—'}</td><td>${r.q ? r.CM : '—'}</td></tr>`).join('')}</tbody></table>`;
    $('#cuEx', el).innerHTML = `<p>CTM = CVM + CFM. O CFM só cai (o custo fixo é diluído em mais bolos). O <b>CM</b> primeiro cai (ganhos de especialização: o 2º funcionário rende 4 bolos) e depois sobe (rendimentos marginais decrescentes). O CM corta o CVM e o CTM <b>nos seus pontos de mínimo</b>.</p><p>Com CF = ${CF}: CTM mínimo ≈ <b>${fmt(mn.CTM, 1)}</b> em q = ${mn.q}. ${CF === 154 ? 'Na planilha original, CTM(5) = CTM(6) = 76 e CM(6) = 76: é ali que o CM cruza o CTM.' : 'Note que mudar o CF desloca CTM e CFM, mas CM e CVM ficam no mesmo lugar.'}</p>`;
  };
  const drawIn = () => { $('#cuIn', el).innerHTML = [['F', 'F (custo fixo)'], ['c', 'c'], ['a', 'a']].map(([k, l]) => `<label class="field">${l}<input type="number" step="any" data-k="${k}" value="${K[k]}"></label>`).join(''); };
  const drawQ = () => {
    const { F, a, c } = K;
    if (!(a > 0 && F >= 0)) { $('#cuQEx', el).innerHTML = '<p>Use a > 0 e F ≥ 0.</p>'; return; }
    const qm = Math.sqrt(F / a), cm = c + 2 * Math.sqrt(a * F);
    const xmax = Math.max(qm * 2.2, 0.0001), ymax = Math.max(cm * 2.2, c + 2 * a * xmax * 0.9, 1);
    $('#cuQCh', el).innerHTML = chart({ xr: [0, xmax], yr: [Math.min(0, c), ymax], xl: 'q', yl: 'R$', curves: [{ f: q => c + 2 * a * q, a: 0, b: xmax, cls: 'm', lab: 'CM' }, { f: q => c + a * q + F / q, a: xmax * 0.02, b: xmax, cls: 'd', lab: 'CTM' }, { f: q => c + a * q, a: 0, b: xmax, cls: 's', lab: 'CVM' }], points: [{ x: qm, y: cm, xt: fmtA(qm, 3), yt: fmtA(cm, 2), lab: 'mín CTM' }], h: 280 });
    $('#cuQRo', el).innerHTML = `<div><small>q do mín CTM</small><b>${fmtA(qm, 4)}</b></div><div><small>CTM mínimo</small><b>${fmtA(cm, 3)}</b></div>`;
    $('#cuQEx', el).innerHTML = `<p>CM = ${fr('dCT', 'dq')} = ${fmtA(c)} + ${fmtA(2 * a)}q · CVM = ${fr('CV', 'q')} = ${fmtA(c)} + ${fmtA(a)}q · CTM = ${fmtA(c)} + ${fmtA(a)}q + ${fr(fmtA(F), 'q')}</p>
      <p><b>Mínimo do CTM:</b> ${fr('dCTM', 'dq')} = ${fmtA(a)} − ${fr(fmtA(F), 'q²')} = 0 ⇒ q = <span class="sq">√<span>${fr(fmtA(F), fmtA(a))}</span></span> = <b>${fmtA(qm, 4)}</b> ⇒ CTM = <b>${fmtA(cm, 3)}</b>. Confira: CM(${fmtA(qm, 4)}) = ${fmtA(c + 2 * a * qm, 3)} = CTM. ✔</p>
      <p class="note">${CU_PRE[pre] ? CU_PRE[pre].u : ''}. Esse mínimo será o <b>preço de equilíbrio de longo prazo</b> no mercado competitivo (Tema 4).</p>`;
  };
  const drawU = () => {
    const cont = U.rec - U.comb - U.out, econ = cont - U.op;
    $('#cuURo', el).innerHTML = `<div><small>Lucro “contábil”</small><b>${fmtA(cont)}</b></div><div><small>Custo econômico</small><b>${fmtA(U.comb + U.out + U.op)}</b></div><div><small>Lucro econômico</small><b class="${econ >= 0 ? 'ok' : 'no'}">${fmtA(econ)}</b></div>`;
    $('#cuUEx', el).innerHTML = `<p>Custo econômico = ${fmtA(U.comb)} + ${fmtA(U.out)} + ${fmtA(U.op)} (custo de oportunidade do tempo) = <b>${fmtA(U.comb + U.out + U.op)}</b>. Lucro econômico = ${fmtA(U.rec)} − ${fmtA(U.comb + U.out + U.op)} = <b>${fmtA(econ)}</b> ⇒ ${econ >= 0 ? 'vale a pena.' : '<b>não vale a pena</b>: a melhor alternativa paga mais.'}</p><p class="note">Para decidir, use sempre o custo <b>econômico</b> (todos os insumos ao seu custo de oportunidade — inclusive seu tempo e seu capital, que renderia a Selic).</p>`;
  };
  el.addEventListener('input', e => {
    if (e.target.id === 'cuCF') { CF = +e.target.value; drawB(); }
    if (e.target.dataset.k) { K[e.target.dataset.k] = parseNum(e.target.value, K[e.target.dataset.k]); pre = 'livre'; drawQ(); }
    if (e.target.dataset.u) { U[e.target.dataset.u] = parseNum(e.target.value, U[e.target.dataset.u]); drawU(); }
  });
  el.addEventListener('click', e => { const p = e.target.closest('#cuPre [data-p]'); if (p) { pre = p.dataset.p; K = Object.assign({}, CU_PRE[pre]); $$('#cuPre button', el).forEach(b => b.classList.toggle('on', b.dataset.p === pre)); drawIn(); drawQ(); } });
  drawB(); drawIn(); drawQ(); drawU();
};

/* =====================================================================
   TEMA 4 — Mercado competitivo
   ===================================================================== */
// explicação de cada passo de cada cenário (no estilo da resposta-modelo)
function shockText(key, step, M) {
  const up = M.p2 > M.p1, n = v => fmt(v, 0);
  const T = {
    1: `<p><b>Ponto 1 (nos dois gráficos):</b> equilíbrio de longo prazo. O preço é igual ao <b>mínimo do CTM</b> (p₁ = ${fmt(M.p1, 1)}), onde o CM cruza o CTM. Lucro econômico zero ⇒ ninguém entra nem sai. Há ≈ ${n(M.n1)} empresas${M.K0 ? ' de feijão irrigado, além da produção de sequeiro (K)' : ''}.</p>`,
    2: {
      demanda_cai: `<p><b>Movimento A:</b> com menos renda para o varejo, para qualquer preço a demanda é menor (D desloca para a esquerda). <b>Curto prazo — ponto 2:</b> número de empresas fixo ⇒ andamos sobre a O_CP: <b>preço e quantidade caem</b> (p₂ = ${fmt(M.p2, 1)}).</p><p>Na empresa, p₂ &lt; CTM: a seta entre p₂ e o CTM é o <b>prejuízo por unidade</b>. Ela continua produzindo no CP supondo que p₂ ainda cobre o CVM (se p₂ &lt; mín CVM, suspenderia).</p>`,
      demanda_sobe: `<p><b>Movimento A:</b> a demanda aumenta (D para a direita). <b>Curto prazo — ponto 2:</b> com o mesmo número de empresas, <b>preço e quantidade sobem</b> (p₂ = ${fmt(M.p2, 1)}). Cada empresa aumenta q até p₂ = CM.</p><p>Na empresa, p₂ &gt; CTM: a seta entre p₂ e o CTM é o <b>lucro econômico por unidade</b> — sinal para novas empresas entrarem.</p>`,
      custo_sobe: `<p><b>Movimento A:</b> o choque aumenta o custo por unidade em A ⇒ CM e CTM sobem A. A O_CP de mercado (soma horizontal dos CM) também sobe A. <b>Curto prazo — ponto 2:</b> <b>preço sobe</b> (p₂ = ${fmt(M.p2, 1)}) e <b>quantidade cai</b>.</p><p>O preço subiu <b>menos</b> que o custo: p₂ &lt; novo CTM ⇒ <b>prejuízo</b> (seta vermelha).</p>`,
      custo_cai: `<p><b>Movimento A:</b> a reforma reduz o custo por unidade em A ⇒ CM e CTM descem A, e a O_CP desce A. <b>Curto prazo — ponto 2:</b> <b>preço cai</b> (p₂ = ${fmt(M.p2, 1)}) e <b>quantidade sobe</b>.</p><p>O preço caiu <b>menos</b> que o custo: p₂ &gt; novo CTM ⇒ <b>lucro econômico positivo</b> (seta).</p>`,
      feijao: `<p><b>Movimento ΔK:</b> a capacidade de sequeiro (K, terra com custo marginal baixo e constante) cai. No CP o número de produtores irrigados é fixo, então a oferta de mercado se desloca <b>paralelamente para a esquerda exatamente em ΔK</b>. <b>Ponto 2:</b> <b>preço sobe</b> (p₂ = ${fmt(M.p2, 1)}) e <b>quantidade cai</b>.</p><p>O produtor irrigado típico agora tem p₂ &gt; CTM ⇒ <b>lucro econômico</b> (seta).</p>`
    }[key],
    3: {
      demanda_cai: `<p><b>Movimento B:</b> com prejuízo, empresas <b>saem</b> do mercado (à medida que se livram dos custos fixos) ⇒ a O_CP se desloca para a esquerda até cruzar a nova demanda no preço de LP. <b>Ponto 3:</b> <b>preço volta</b> a p₁ (mín CTM), <b>quantidade menor</b>, e <b>menos empresas</b> (≈ ${n(M.n1)} → ${n(M.n3)}).</p>`,
      demanda_sobe: `<p><b>Movimento B:</b> o lucro atrai <b>entrada</b> ⇒ a O_CP se desloca para a direita até o preço voltar ao mínimo do CTM. <b>Ponto 3:</b> <b>mesmo preço</b> do início, <b>quantidade maior</b>, <b>mais empresas</b> (≈ ${n(M.n1)} → ${n(M.n3)}).</p>`,
      custo_sobe: `<p><b>Movimento B:</b> com prejuízo, empresas <b>saem</b> ⇒ O_CP vai para a esquerda até p = novo mín CTM. <b>Ponto 3:</b> <b>preço maior</b> (p₃ = ${fmt(M.p3, 1)}, subiu exatamente A), <b>quantidade menor</b>, <b>menos empresas</b> (≈ ${n(M.n1)} → ${n(M.n3)}). A O_LP subiu A.</p>`,
      custo_cai: `<p><b>Movimento B:</b> o lucro atrai <b>entrada</b> ⇒ O_CP vai para a direita até p = novo mín CTM. <b>Ponto 3:</b> <b>preço menor</b> (p₃ = ${fmt(M.p3, 1)}, caiu exatamente A), <b>quantidade maior</b>, <b>mais empresas</b> (≈ ${n(M.n1)} → ${n(M.n3)}). Todo o ganho de custo vai para o consumidor no LP.</p>`,
      feijao: `<p><b>Movimento B (ΔN):</b> o lucro atrai <b>novos produtores irrigados</b>; o trecho crescente da O_CP gira/desloca para a direita até cruzar a demanda no preço de LP. <b>Ponto 3:</b> <b>mesmo preço</b> e <b>mesma quantidade</b> do início, mas <b>mais produtores irrigados</b> (≈ ${n(M.n1)} → ${n(M.n3)}): toda a perda do sequeiro é compensada pelo irrigado. O preço de LP não depende do custo do sequeiro!</p>`
    }[key]
  };
  return step === 1 ? T[1] : T[step];
}
function shockSim(el, key0 = 'demanda_cai', idp = 'sh') {
  let key = key0, step = 1;
  el.innerHTML = `<div class="btns" id="${idp}Sc">${Object.entries(SHOCKS).map(([k, v]) => `<button class="btn sm ${k === key ? 'on' : ''}" data-s="${k}">${v.nome}</button>`).join('')}</div>
    <div class="steps" id="${idp}St">${['1 · Equilíbrio inicial (LP)', '2 · Curto prazo', '3 · Longo prazo'].map((l, i) => `<button data-st="${i + 1}" class="${i === 0 ? 'on' : ''}">${l}</button>`).join('')}</div>
    <div class="two" id="${idp}Ch"></div><div class="explain" id="${idp}Ex" style="margin-top:10px"></div><div id="${idp}Tb"></div>`;
  const draw = () => {
    const { firm, market, M } = shockCharts(key, step);
    $(`#${idp}Ch`, el).innerHTML = `<div>${firm}</div><div>${market}</div>`;
    $(`#${idp}Ex`, el).innerHTML = shockText(key, step, M);
    const L2 = M.lucro2, row = (l, a, b, c) => `<tr><td>${l}</td><td>${a}</td><td>${step >= 2 ? b : '—'}</td><td>${step >= 3 ? c : '—'}</td></tr>`;
    $(`#${idp}Tb`, el).innerHTML = `<table class="t sm sumt"><thead><tr><th></th><th>1 · inicial</th><th>2 · curto prazo</th><th>3 · longo prazo</th></tr></thead><tbody>
      ${row('Preço', fmt(M.p1, 1), fmt(M.p2, 1) + ' ' + arrow(M.p2, M.p1), fmt(M.p3, 1) + ' ' + arrow(M.p3, M.p1))}
      ${row('Quantidade (mercado)', fmt(M.Q1, 0), fmt(M.Q2, 0) + ' ' + arrow(M.Q2, M.Q1), fmt(M.Q3, 0) + ' ' + arrow(M.Q3, M.Q1))}
      ${row('Nº de empresas' + (M.K0 ? ' (irrigado)' : ''), fmt(M.n1, 0), fmt(M.n1, 0) + ' (fixo no CP)', fmt(M.n3, 0) + ' ' + arrow(M.n3, M.n1))}
      ${row('Lucro econômico da empresa', '0', `<b class="${L2 > 0.5 ? 'ok' : L2 < -0.5 ? 'no' : ''}">${L2 > 0.5 ? 'positivo' : L2 < -0.5 ? 'prejuízo' : 'zero'}</b>`, '0')}
    </tbody></table>`;
    $$(`#${idp}Sc button`, el).forEach(b => b.classList.toggle('on', b.dataset.s === key));
    $$(`#${idp}St button`, el).forEach(b => b.classList.toggle('on', +b.dataset.st === step));
  };
  el.addEventListener('click', e => {
    const s = e.target.closest(`#${idp}Sc [data-s]`); if (s) { key = s.dataset.s; step = 1; draw(); }
    const t = e.target.closest(`#${idp}St [data-st]`); if (t) { step = +t.dataset.st; draw(); }
  });
  draw();
}
LAB.compet = el => {
  let p = 96;
  el.innerHTML = `
  <div class="lab"><h3>🏭 Quanto a empresa produz? Suspende? Sai do mercado?</h3>
    <p class="muted">Confeitaria (CF = 154) como tomadora de preço. Ela escolhe q onde <b>p = CM</b>. Teste os preços da planilha: 145, 96, 76, 58, 42 e 30.</p>
    <div class="btns" id="cpPre">${[145, 96, 76, 58, 42, 30].map(v => `<button class="btn sm ${v === p ? 'on' : ''}" data-v="${v}">p = ${v}</button>`).join('')}</div>
    <div class="fields"><label class="field">Preço de mercado p = <span id="cpPv"></span><input type="range" id="cpP" min="20" max="200" value="${p}"></label></div>
    <div class="lab-grid"><div id="cpCh"></div><div><div class="readout" id="cpRo"></div><div class="explain" id="cpEx"></div></div></div>
  </div>
  <div class="lab"><h3>📈📉 O gráfico da prova: empresa × mercado, curto e longo prazo</h3>
    <p class="muted">A questão de 10 pontos pede exatamente isto: <b>dois gráficos lado a lado</b>, pontos numerados e setas. Escolha o choque e avance os passos.</p>
    <div id="cpShock"></div>
  </div>`;
  const draw = () => {
    const T = boloTab(154);
    const prof = T.map(r => p * r.q - r.CT);
    let best = 0; prof.forEach((v, q) => { if (v >= prof[best] - 1e-9) best = q; });
    const bestPos = prof.slice(1).reduce((b, v, i) => v >= prof[b] - 1e-9 ? i + 1 : b, 1);
    const lp = prof[bestPos], q = lp >= -154 - 1e-9 ? bestPos : 0;
    const r = T[bestPos], ind = Math.abs(lp + 154) < 1e-9;
    $('#cpPv', el).textContent = p;
    const areas = [{ pts: [[0, r.CTM], [0, p], [bestPos, p], [bestPos, r.CTM]], cls: p >= r.CTM ? 'profit' : 'loss' }];
    $('#cpCh', el).innerHTML = boloChart(154, { noMin: true, hlines: [{ y: p, cls: 'p', lab: 'p = RM' }], areas, points: [{ x: bestPos, y: p, xt: String(bestPos), lab: '' }, { x: bestPos, y: r.CTM, guide: false, cls: 'old' }], ymax: 230 });
    const sr = lp > -154 + 1e-9 ? 'Produz' : ind ? 'Indiferente' : 'Suspende (q = 0)';
    const lr = lp > 1e-9 ? 'Entram empresas' : Math.abs(lp) < 1e-9 ? 'Fica (lucro zero)' : 'Sai do mercado';
    $('#cpRo', el).innerHTML = `<div><small>q (p = CM)</small><b>${bestPos}</b></div><div><small>Lucro se produz</small><b class="${lp >= 0 ? 'ok' : 'no'}">${fmtA(lp)}</b></div><div><small>Lucro se q = 0</small><b>−154</b></div><div><small>Curto prazo</small><b style="font-size:14px">${sr}</b></div><div><small>Longo prazo</small><b style="font-size:14px">${lr}</b></div>`;
    $('#cpEx', el).innerHTML = `<p>Em q = ${bestPos}: RT = ${p} × ${bestPos} = ${p * bestPos}; CT = ${r.CT}; lucro = <b>${fmtA(lp)}</b>; CTM = ${fmt(r.CTM, 2)}; CVM = ${fmt(r.CVM, 2)}.</p>
      <p>${p > r.CTM + 1e-9 ? `p &gt; CTM ⇒ <b>lucro</b> (retângulo verde). Atrai novas empresas no LP.` : Math.abs(p - r.CTM) < 1e-9 ? `p = mín CTM ⇒ <b>lucro econômico zero</b>: é o equilíbrio de longo prazo (ponto (6, 76)).` : p >= r.CVM - 1e-9 ? `CVM ≤ p &lt; CTM ⇒ <b>prejuízo</b> (retângulo vermelho), mas menor que o CF (154). No CP vale a pena produzir: a receita paga o custo variável e ainda ajuda a pagar parte do fixo. No LP, sai.` : `p &lt; mín CVM (42) ⇒ nem o custo variável é pago: <b>suspende</b> a produção no CP (perde só o CF = 154).`}${ind ? ' Em p = 42 = mín CVM, produzir ou parar dá o mesmo prejuízo (−154): é o <b>ponto de fechamento</b>.' : ''}</p>
      <p class="note">Curto prazo: oferta = CM acima do mín CVM. Longo prazo: oferta = CM acima do mín CTM.</p>`;
    $$('#cpPre button', el).forEach(b => b.classList.toggle('on', +b.dataset.v === p));
  };
  el.addEventListener('input', e => { if (e.target.id === 'cpP') { p = +e.target.value; draw(); } });
  el.addEventListener('click', e => { const b = e.target.closest('#cpPre [data-v]'); if (b) { p = +b.dataset.v; $('#cpP', el).value = p; draw(); } });
  draw();
  shockSim($('#cpShock', el), 'demanda_cai', 'cps');
};

/* =====================================================================
   TEMA 5 — Eficiência e impostos
   ===================================================================== */
LAB.efic = el => {
  let Qf = 16, T = 100, bD = 12.5, bS = 12.5;
  el.innerHTML = `
  <div class="lab"><h3>⚖️ O equilíbrio maximiza o excedente total</h3>
    <p class="muted">D: P = 420 − 12,5Q · O: P = 20 + 12,5Q (o exemplo dos slides: Q* = 16, P* = 220). Force outra quantidade e veja a perda.</p>
    <div class="fields"><label class="field">Quantidade produzida e trocada Q = <span id="efQv"></span><input type="range" id="efQ" min="0" max="30" step="0.5" value="16"></label></div>
    <div class="lab-grid"><div id="efCh"></div><div><div class="readout" id="efRo"></div><div class="explain" id="efEx"></div></div></div>
  </div>
  <div class="lab"><h3>🧾 Imposto por unidade: quem paga e quanto se perde <span class="tag">Complemento</span></h3>
    <p class="muted">O imposto T cria uma “cunha” entre o preço pago pelo consumidor (Pc) e o recebido pelo produtor (Ps). Mude a inclinação das curvas: o lado <b>mais inelástico</b> (curva mais inclinada, comparando no mesmo ponto P e Q) paga a maior parte.</p>
    <div class="fields"><label class="field">Imposto T = R$ <span id="efTv"></span><input type="range" id="efT" min="0" max="380" step="10" value="100"></label>
      <label class="field">Demanda<select class="sel-inline" id="efBD"><option value="6.25">mais elástica</option><option value="12.5" selected>média</option><option value="25">mais inelástica</option></select></label>
      <label class="field">Oferta<select class="sel-inline" id="efBS"><option value="6.25">mais elástica</option><option value="12.5" selected>média</option><option value="25">mais inelástica</option></select></label></div>
    <div class="lab-grid"><div id="efTCh"></div><div><div class="readout" id="efTRo"></div><div class="explain" id="efTEx"></div></div></div>
  </div>`;
  const drawQ = () => {
    const pd = q => 420 - 12.5 * q, ps = q => 20 + 12.5 * q;
    const ET = q => q <= 16 ? 400 * q - 12.5 * q * q : 3200 - (q - 16) * (ps(q) - pd(q)) / 2;
    const areas = [];
    const qa = Math.min(Qf, 16);
    if (qa > 0) areas.push({ pts: [[0, 420], [qa, pd(qa)], [qa, ps(qa)], [0, 20]], cls: 'cs', lab: 'Excedente total', at: [qa * 0.4, 220] });
    if (Qf < 16) areas.push({ pts: [[Qf, pd(Qf)], [16, 220], [Qf, ps(Qf)]], cls: 'dwl', lab: 'perda', at: [Qf + (16 - Qf) * 0.35, 220] });
    if (Qf > 16) areas.push({ pts: [[16, 220], [Qf, ps(Qf)], [Qf, pd(Qf)]], cls: 'dwl', lab: 'perda', at: [16 + (Qf - 16) * 0.65, 220] });
    $('#efQv', el).textContent = fmt(Qf, 1);
    $('#efCh', el).innerHTML = chart({ xr: [0, 32], yr: [0, 460], xl: 'Q', yl: 'P', curves: [{ g: y => (420 - y) / 12.5, cls: 'd', lab: 'D', labEnd: 'a', dy: -6 }, { g: y => (y - 20) / 12.5, cls: 's', lab: 'O' }, { x: Qf, cls: 'ghost', lab: 'Q', anchor: 'middle', dx: 0 }], areas, points: [{ x: 16, y: 220, xt: '16', yt: '220', cls: Qf === 16 ? '' : 'old' }], h: 300 });
    const et = ET(Qf);
    $('#efRo', el).innerHTML = `<div><small>Excedente total</small><b>${fmtA(et)}</b></div><div><small>Máximo (Q = 16)</small><b>3.200</b></div><div><small>Perda</small><b class="${3200 - et > 0.01 ? 'no' : ''}">${fmtA(3200 - et)}</b></div>`;
    $('#efEx', el).innerHTML = Qf < 16 ? `<p>Produzindo menos que 16, deixamos de trocar unidades que valem para o comprador (altura da D) <b>mais</b> do que custam para produzir (altura da O). Essa oportunidade perdida é o <b>peso morto</b>.</p>` : Qf > 16 ? `<p>Produzindo mais que 16, as unidades extras custam (O) <b>mais</b> do que valem para quem compra (D): destrói valor. Também há peso morto.</p>` : `<p>Q = 16: <b>todos os possíveis ganhos de troca são explorados</b>. EC = ${fr('(420 − 220) · 16', 2)} = 1.600; EP = ${fr('(220 − 20) · 16', 2)} = 1.600; ET = 3.200. É a quantidade <b>eficiente</b> — a “mão invisível” de Adam Smith.</p>`;
  };
  const drawT = () => {
    const t = taxModel(T, bD, bS);
    $('#efTv', el).textContent = T;
    $('#efTCh', el).innerHTML = taxChart(T, bD, bS);
    $('#efTRo', el).innerHTML = `<div><small>Q com imposto</small><b>${fmt(t.Qt, 2)}</b></div><div><small>Pc (consumidor)</small><b>${fmt(t.Pc, 1)}</b></div><div><small>Ps (produtor)</small><b>${fmt(t.Ps, 1)}</b></div><div><small>Arrecadação</small><b>${fmtA(t.rev, 1)}</b></div><div><small>Peso morto</small><b class="no">${fmtA(t.dwl, 1)}</b></div>`;
    $('#efTEx', el).innerHTML = `<p>Consumidor paga ${fmt(t.Pc - 220, 1)} a mais (<b>${pct(t.Pc - 220, T || 1)}%</b> do imposto) e o produtor recebe ${fmt(220 - t.Ps, 1)} a menos (<b>${pct(220 - t.Ps, T || 1)}%</b>). Não importa quem recolhe o imposto ao governo: a divisão depende só das elasticidades.</p>
      <p>Peso morto = ${fr('T × (16 − Qt)', 2)} = ${fmtA(t.dwl, 1)}. Dobrar o imposto ≈ <b>quadruplica</b> o peso morto (base e altura do triângulo dobram).</p>`;
  };
  el.addEventListener('input', e => {
    if (e.target.id === 'efQ') { Qf = +e.target.value; drawQ(); }
    if (e.target.id === 'efT') { T = +e.target.value; drawT(); }
  });
  el.addEventListener('change', e => { if (e.target.id === 'efBD') { bD = +e.target.value; drawT(); } if (e.target.id === 'efBS') { bS = +e.target.value; drawT(); } });
  drawQ(); drawT();
};

/* =====================================================================
   TEMA 6 — Poder de mercado
   ===================================================================== */
const MO_PRE = {
  agua: { nome: 'Companhia de água (slides)', a: 56, b: 2.5, F: 100, c: 1, d: 0, u: 'q em milhões de m³ · p em R$/m³' },
  ex2: { nome: 'Outro exemplo (slides)', a: 20, b: 1, F: 50, c: 3.2, d: 0.2, u: 'R$' },
  app: { nome: 'App de mobilidade (prova)', a: 4, b: 0.2, F: 6.4, c: 0.4, d: 0, u: 'q em milhões de matches · R$' },
  app2: { nome: 'App: q = 16 − 4p (questão)', a: 4, b: 0.25, F: 6.4, c: 1, d: 0, u: 'q em milhões de matches · R$' },
  ponte: { nome: 'Ponte com pedágio (prova 2025)', a: 85, b: 6, F: 168, c: 5, d: 2, u: 'q em mil veículos/dia · R$ mil' },
  saude: { nome: 'Planos de saúde (monopólio)', a: 10, b: 1 / 12, F: 0, c: 4, d: 0, u: 'Q em milhões de pessoas · p em R$ mil/ano' }
};
LAB.mono = el => {
  let pre = 'agua', K = Object.assign({}, MO_PRE.agua), mode = 'livre';
  el.innerHTML = `
  <div class="lab"><h3>👑 Calculadora do monopolista: RM = CM, peso morto e regulação</h3>
    <p class="muted">Demanda inversa <b>p(q) = a − b·q</b> e custo <b>CT(q) = F + c·q + d·q²</b>. Escolha um exemplo das aulas/provas ou digite (b aceita frações como 1/12).</p>
    <div class="btns" id="moPre">${Object.entries(MO_PRE).map(([k, v]) => `<button class="btn sm ${k === pre ? 'on' : ''}" data-p="${k}">${v.nome}</button>`).join('')}</div>
    <div class="fields" id="moIn"></div>
    <div class="seg" id="moMode"><button data-m="livre" class="on">Sem regulação (RM = CM)</button><button data-m="pcm">Teto p = CM (eficiente)</button><button data-m="pctm">Melhor teto sem subsídio</button></div>
    <div class="lab-grid" style="margin-top:12px"><div id="moCh"></div><div><div class="readout" id="moRo"></div><div class="explain" id="moEx"></div></div></div>
  </div>`;
  const drawIn = () => { $('#moIn', el).innerHTML = [['a', 'a'], ['b', 'b'], ['F', 'F (custo fixo)'], ['c', 'c'], ['d', 'd']].map(([k, l]) => `<label class="field">${l}<input type="text" inputmode="decimal" data-k="${k}" value="${k === 'b' && pre === 'saude' ? '1/12' : fmtA(K[k], 6).replace(/\./g, '').replace(',', '.')}"></label>`).join(''); };
  const draw = () => {
    const { a, b, F, c, d } = K;
    if (!(a > c && b > 0 && d >= 0 && F >= 0)) { $('#moEx', el).innerHTML = '<p>Use a &gt; c, b &gt; 0, d ≥ 0 e F ≥ 0.</p>'; return; }
    const M = monoModel(a, b, F, c, d);
    $('#moCh', el).innerHTML = monoChart(M, mode);
    const f = (v, k = 3) => fmtA(v, k);
    let q, pr, sub = '';
    if (mode === 'pcm') { q = M.qe; pr = M.pe; }
    else if (mode === 'pctm') { if (!M.best) { $('#moEx', el).innerHTML = '<p>Nenhum preço cobre o custo médio: só com subsídio.</p>'; return; } q = M.best.q; pr = M.best.p; }
    else { q = M.qm; pr = M.pm; }
    const lucro = pr * q - M.CT(q), dwl = M.dwl(q);
    $('#moRo', el).innerHTML = `<div><small>q</small><b>${f(q)}</b></div><div><small>p</small><b>${f(pr)}</b></div><div><small>Lucro</small><b class="${lucro >= -1e-9 ? 'ok' : 'no'}">${f(lucro)}</b></div><div><small>Exc. consumidor</small><b>${f(M.EC(q))}</b></div><div><small>Peso morto</small><b class="${dwl > 1e-9 ? 'no' : 'ok'}">${f(dwl)}</b></div>`;
    const base = `<p><b>Receita:</b> RT = p(q)·q = ${f(a)}q − ${f(b, 4)}q² ⇒ <b>RM = ${f(a)} − ${f(2 * b, 4)}q</b> (mesmo intercepto, inclinação dobrada). <b>CM = ${f(c)}${d ? ' + ' + f(2 * d) + 'q' : ''}</b>.</p>`;
    let ex;
    if (mode === 'livre') ex = base + `<p><b>Máximo lucro:</b> RM = CM ⇒ q = ${f(M.qm)}; preço na demanda: p = ${f(a)} − ${f(b, 4)}×${f(M.qm)} = <b>${f(M.pm)}</b>. Lucro = ${f(M.pm)}×${f(M.qm)} − CT = <b>${f(M.lm)}</b>.</p>
      <p><b>Eficiente:</b> p(q) = CM ⇒ q = ${f(M.qe)} (p = ${f(M.pe)}). <b>Peso morto</b> = ${fr(`(${f(M.pm)} − ${f(M.CM(M.qm))}) × (${f(M.qe)} − ${f(M.qm)})`, 2)} = <b>${f(M.dwl(M.qm))}</b>. Há gente disposta a pagar mais do que custa produzir unidades extras, mas o monopolista não as produz.</p>`;
    else if (mode === 'pcm') ex = base + `<p><b>Teto p = CM:</b> q = ${f(M.qe)}, p = ${f(M.pe)} ⇒ peso morto <b>zero</b> (todos os ganhos de troca realizados). Lucro = <b>${f(M.le)}</b>${M.le < -1e-9 ? ` ⇒ <b>prejuízo</b>: para continuar no mercado no LP precisaria de <b>subsídio de ${f(-M.le)}</b> (típico de monopólio natural: CM abaixo do CTM).` : ' ⇒ sem prejuízo: esse é o melhor teto possível.'}</p>`;
    else ex = base + (M.le >= -1e-9 ? `<p>Como p = CM já não gera prejuízo, o melhor teto é o próprio <b>p = ${f(M.pe)}</b>.</p>` : `<p><b>Melhor teto sem subsídio:</b> o menor preço que ainda dá lucro ≥ 0 é onde <b>p(q) = CTM(q)</b>: ${f(a)} − ${f(b, 4)}q = ${fr(f(F), 'q')} + ${f(c)}${d ? ' + ' + f(d) + 'q' : ''} ⇒ ${f(b + d, 4)}q² − ${f(a - c)}q + ${f(F)} = 0 ⇒ maior raiz q = <b>${f(q)}</b> ⇒ teto <b>p = ${f(pr)}</b>.</p><p>Sobra um peso morto pequeno (${f(dwl)}), bem menor que sem regulação (${f(M.dwl(M.qm))}). Problema: regular pelo custo não dá incentivo para reduzir custo.</p>`);
    $('#moEx', el).innerHTML = ex + `<p class="note">${MO_PRE[pre] ? MO_PRE[pre].u : ''}</p>`;
    $$('#moMode button', el).forEach(bt => bt.classList.toggle('on', bt.dataset.m === mode));
  };
  el.addEventListener('input', e => { if (e.target.dataset.k) { K[e.target.dataset.k] = parseNum(e.target.value, K[e.target.dataset.k]); pre = '_'; draw(); } });
  el.addEventListener('click', e => {
    const p = e.target.closest('#moPre [data-p]'); if (p) { pre = p.dataset.p; K = Object.assign({}, MO_PRE[pre]); $$('#moPre button', el).forEach(b => b.classList.toggle('on', b.dataset.p === pre)); drawIn(); draw(); }
    const m = e.target.closest('#moMode [data-m]'); if (m) { mode = m.dataset.m; draw(); }
  });
  drawIn(); draw();
};

/* =====================================================================
   TEMA 7 — Oligopólio e teoria dos jogos
   ===================================================================== */
const GAMES = {
  prisioneiros: { nome: 'Dilema dos prisioneiros', A: 'Criminoso A', B: 'Criminoso B', s: ['Confessa', 'Não confessa'], p: [[[-10, -10], [-3, -15]], [[-15, -3], [-4, -4]]], nota: 'Payoff = −anos de prisão (quanto maior, melhor).' },
  precos: { nome: 'Guerra de preços', A: 'Empresa A', B: 'Empresa B', s: ['Preço alto', 'Preço baixo'], p: [[[100, 100], [50, 150]], [[150, 50], [75, 75]]] },
  glp1: { nome: 'GLP-1: orais × injetáveis', A: 'Empresa E', B: 'Empresa L', s: ['Orais', 'Injetáveis'], p: [[[8, 7], [14, 10]], [[10, 14], [7, 8]]], nota: 'Bilhões de US$.' },
  jatos: { nome: 'Embraer × ABDG (exercício)', A: 'Empresa E', B: 'Empresa ABDG', s: ['Jatos executivos', 'Corredor único'], p: [[[2, 7], [5, 15]], [[6, 11], [4, 9]]], nota: 'Milhões de US$. Jogo NÃO simétrico.' },
  ia: { nome: 'IA relacional × funcional (prova 2025)', A: 'Empresa X', B: 'Empresa Y', s: ['IA relacional', 'IA funcional'], p: [[[70, 70], [130, 40]], [[40, 130], [90, 90]]], nota: 'Lucro = receita − custo (relacional custa 70; funcional, 30).' },
  fragrancia: { nome: 'Fragrâncias (prova 2025)', A: 'Empresa A', B: 'Empresa B', s: ['Coopera', 'Não coopera'], p: [[[9, 9], [4.88, 11.53]], [[11.53, 4.88], [6.75, 6.75]]] }
};
function solveGame(g) {
  const P = g.p, brA = [[0, 0], [0, 0]], brB = [[0, 0], [0, 0]];
  for (let c = 0; c < 2; c++) { const m = Math.max(P[0][c][0], P[1][c][0]); for (let r = 0; r < 2; r++) brA[r][c] = P[r][c][0] === m ? 1 : 0; }
  for (let r = 0; r < 2; r++) { const m = Math.max(P[r][0][1], P[r][1][1]); for (let c = 0; c < 2; c++) brB[r][c] = P[r][c][1] === m ? 1 : 0; }
  const ne = []; for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) if (brA[r][c] && brB[r][c]) ne.push([r, c]);
  const domA = [0, 1].find(r => P[r][0][0] > P[1 - r][0][0] && P[r][1][0] > P[1 - r][1][0]);
  const domB = [0, 1].find(c => P[0][c][1] > P[0][1 - c][1] && P[1][c][1] > P[1][1 - c][1]);
  let dilema = false;
  if (ne.length === 1) { const [r, c] = ne[0]; for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) if (P[i][j][0] > P[r][c][0] && P[i][j][1] > P[r][c][1]) dilema = true; }
  return { brA, brB, ne, domA, domB, dilema };
}
LAB.oligo = el => {
  let gk = 'precos', G = JSON.parse(JSON.stringify(GAMES.precos));
  const C = { a: '10', b: '1/12', c: '4', n: 2 };
  const R = { pc: 9, pd: 11.53, pn: 6.75, r: 10 };
  el.innerHTML = `
  <div class="lab"><h3>🎲 Resolvedor de jogos 2×2: estratégia dominante e Equilíbrio de Nash</h3>
    <p class="muted">Edite os payoffs. As <b>melhores respostas</b> ficam sublinhadas em verde; a célula com contorno verde é <b>Equilíbrio de Nash</b> (as duas melhores respostas ao mesmo tempo).</p>
    <div class="btns" id="gmPre">${Object.entries(GAMES).map(([k, v]) => `<button class="btn sm ${k === gk ? 'on' : ''}" data-g="${k}">${v.nome}</button>`).join('')}</div>
    <div id="gmT" style="overflow-x:auto"></div><div class="explain" id="gmEx"></div>
  </div>
  <div class="lab"><h3>🏭🏭 Cournot × cartel × concorrência</h3>
    <p class="muted">Demanda <b>p = a − b·Q</b>, custo marginal constante <b>c</b>, <b>n</b> empresas idênticas que escolhem quantidades simultaneamente. Padrão: planos de saúde da prova (p = 10 − ${fr('Q', 12)}, CM = 4).</p>
    <div class="fields">${[['a', 'a'], ['b', 'b'], ['c', 'c (CM)']].map(([k, l]) => `<label class="field">${l}<input type="text" inputmode="decimal" data-c="${k}" value="${C[k]}"></label>`).join('')}<label class="field">n empresas = <span id="coNv">2</span><input type="range" id="coN" min="1" max="12" value="2"></label></div>
    <div id="coT" style="overflow-x:auto"></div>
    <div class="lab-grid"><div id="coCh"></div><div class="explain" id="coEx"></div></div>
  </div>
  <div class="lab"><h3>🔁 Jogo repetido infinitamente: a cooperação se sustenta?</h3>
    <p class="muted">Estratégia “gatilho”: coopera enquanto o outro cooperou; se alguém desviar, nunca mais coopera. Padrão: fragrâncias (prova 2025).</p>
    <div class="fields">${[['pc', 'Lucro se ambos cooperam'], ['pd', 'Lucro de quem desvia'], ['pn', 'Lucro se ninguém coopera']].map(([k, l]) => `<label class="field">${l}<input type="number" step="any" data-r="${k}" value="${R[k]}"></label>`).join('')}<label class="field">Taxa de juros r = <span id="rpRv"></span>%<input type="range" id="rpR" min="1" max="150" value="10"></label></div>
    <div class="readout" id="rpRo"></div><div class="explain" id="rpEx"></div>
  </div>`;
  const drawG = () => {
    const S = solveGame(G), s = G.s;
    const cell = (r, c) => `<td class="cell ${S.ne.some(([i, j]) => i === r && j === c) ? 'ne' : ''}"><div class="pay"><span class="pA ${S.brA[r][c] ? 'br' : ''}">${esc(G.A.split(' ').pop())}: ${fmtA(G.p[r][c][0])}</span><span class="pB ${S.brB[r][c] ? 'br' : ''}">${esc(G.B.split(' ').pop())}: ${fmtA(G.p[r][c][1])}</span></div></td>`;
    $('#gmT', el).innerHTML = `<table class="mtx"><tr><th></th><th></th><th colspan="2" class="pB">${esc(G.B)}</th></tr><tr><th></th><th></th><th class="pB">${esc(s[0])}</th><th class="pB">${esc(s[1])}</th></tr>
      ${[0, 1].map(r => `<tr>${r === 0 ? `<th rowspan="2" class="pA">${esc(G.A)}</th>` : ''}<th class="pA rowh">${esc(s[r])}</th>${cell(r, 0)}${cell(r, 1)}</tr>`).join('')}</table>
      <details class="rev" style="max-width:560px;margin:8px auto"><summary>✏️ Editar payoffs</summary><table class="mtx">${[0, 1].map(r => `<tr><th class="pA">${esc(s[r])}</th>${[0, 1].map(c => `<td style="padding:4px 8px">A <input data-pr="${r}${c}0" value="${G.p[r][c][0]}"> B <input data-pr="${r}${c}1" value="${G.p[r][c][1]}"></td>`).join('')}</tr>`).join('')}</table></details>`;
    const nm = (who, i) => esc(G.s[i]);
    const ne = S.ne.length ? S.ne.map(([r, c]) => `<b>(${esc(G.A)}: ${nm('A', r)}; ${esc(G.B)}: ${nm('B', c)})</b>`).join(' e ') : 'nenhum em estratégias puras';
    $('#gmEx', el).innerHTML = `${G.nota ? `<p class="note">${G.nota}</p>` : ''}
      <p><b>Estratégia dominante</b> (melhor <i>qualquer</i> que seja a escolha do outro): ${esc(G.A)} → ${S.domA !== undefined ? `<b>${nm('A', S.domA)}</b>` : 'não tem'}; ${esc(G.B)} → ${S.domB !== undefined ? `<b>${nm('B', S.domB)}</b>` : 'não tem'}.</p>
      <p><b>Equilíbrio(s) de Nash</b> (ninguém se arrepende, dada a escolha do outro): ${ne}.</p>
      ${S.dilema ? '<p>⚠️ <b>Dilema dos prisioneiros:</b> existe outro resultado melhor para os <i>dois</i>, mas não é individualmente racional chegar nele.</p>' : ''}
      <p class="note">Lembre: o Equilíbrio de Nash é um <b>par de estratégias</b>, não um par de payoffs. Método: para cada coluna, sublinhe o melhor payoff de A; para cada linha, o melhor de B. Célula com os dois sublinhados = Nash.</p>`;
    $$('#gmPre button', el).forEach(b => b.classList.toggle('on', b.dataset.g === gk));
  };
  const drawC = () => {
    const a = parseNum(C.a, 10), b = parseNum(C.b, 1 / 12), c = parseNum(C.c, 4), n = C.n;
    if (!(a > c && b > 0)) { $('#coEx', el).innerHTML = '<p>Use a &gt; c e b &gt; 0.</p>'; return; }
    const Qc = (a - c) / b, Qm = (a - c) / (2 * b), qn = (a - c) / (b * (n + 1)), Qn = n * qn, Pn = (a + n * c) / (n + 1);
    const row = (nm, q, Q, P) => { const pi = (P - c) * q, dwl = (P - c) * (Qc - Q) / 2, ec = (a - P) * Q / 2; return `<tr><td>${nm}</td><td>${fmtA(q, 3)}</td><td>${fmtA(Q, 3)}</td><td>${fmtA(P, 3)}</td><td>${fmtA(pi, 3)}</td><td>${fmtA(ec, 3)}</td><td>${fmtA(dwl, 3)}</td></tr>`; };
    const dev = n === 2 ? (() => { const q2 = Qm / 2, q1 = (a - c - b * q2) / (2 * b), P = a - b * (q1 + q2); return { q1, q2, P, pi1: (P - c) * q1, pi2: (P - c) * q2 }; })() : null;
    $('#coNv', el).textContent = n;
    $('#coT', el).innerHTML = `<table class="t sm"><thead><tr><th>Resultado</th><th>q por empresa</th><th>Q total</th><th>Preço</th><th>Lucro por empresa</th><th>Exc. consumidor</th><th>Peso morto</th></tr></thead><tbody>
      ${row('Cartel / monopólio (RM = CM)', Qm / n, Qm, a - b * Qm)}${row(`Cournot-Nash (n = ${n})`, qn, Qn, Pn)}${row('Concorrência perfeita (p = CM)', Qc / n, Qc, c)}</tbody></table>
      ${dev ? `<p class="note">Desvio do cartel: se a empresa 2 produz ${fmtA(dev.q2, 3)} (sua parte) e a 1 maximiza o próprio lucro: q₁ = ${fmtA(dev.q1, 3)}, Q = ${fmtA(dev.q1 + dev.q2, 3)}, p = ${fmtA(dev.P, 4)}, lucro₁ = <b>${fmtA(dev.pi1, 3)}</b> (contra ${fmtA((a - b * Qm - c) * Qm / 2, 3)} cooperando) e lucro₂ = ${fmtA(dev.pi2, 3)}. Por isso cartéis são instáveis.</p>` : ''}`;
    // funções de reação (n = 2)
    const r = q => (a - c) / (2 * b) - q / 2, lim = (a - c) / b * 1.08;
    $('#coCh', el).innerHTML = n === 2 ? chart({ xr: [0, lim], yr: [0, lim], xl: 'q₁', yl: 'q₂', curves: [{ f: x => (a - c) / b - 2 * x, a: 0, b: (a - c) / (2 * b), n: 120, cls: 's', lab: 'R₁(q₂)', labAt: [(a - c) / (12 * b), (a - c) / b * 5 / 6], dx: 8 }, { f: x => r(x), a: 0, b: (a - c) / b, n: 120, cls: 'm', lab: 'R₂(q₁)', labAt: [(a - c) / (1.6 * b), (a - c) / (5.3 * b)], dy: -8 }, { f: x => Qm - x, a: 0, b: Qm, n: 60, cls: 'ghost' }], points: [{ x: qn, y: qn, lab: 'Nash', xt: fmtA(qn, 2), yt: fmtA(qn, 2) }, { x: Qm / 2, y: Qm / 2, cls: 'old', lab: 'cartel', anchor: 'end', dx: -8, dy: 16, guide: false }, { x: dev.q1, y: dev.q2, cls: 'old', lab: 'desvio', guide: false, dy: 16 }], h: 300 }) : '<p class="note">Com n ≠ 2 o gráfico de funções de reação não se aplica — veja a tabela.</p>';
    $('#coEx', el).innerHTML = `<p><b>Empresa i:</b> lucro = [a − b(qᵢ + Q₋ᵢ)]qᵢ − c·qᵢ. CPO: a − 2bqᵢ − bQ₋ᵢ − c = 0 ⇒ <b>qᵢ = ${fr('a − c − bQ₋ᵢ', '2b')}</b> (função de reação).</p>
      <p>Simétrico (qᵢ = q): <b>q = ${fr('a − c', 'b(n + 1)')}</b> = ${fmtA(qn, 3)}, <b>P = ${fr('a + n·c', 'n + 1')}</b> = ${fmtA(Pn, 3)}.</p>
      <p>Peso morto de Cournot = ${fr('(a − c)²', '2b(n + 1)²')} = ${fmtA((a - c) ** 2 / (2 * b * (n + 1) ** 2), 3)}. Quanto mais empresas, mais perto da concorrência (P → c).</p>`;
  };
  const drawR = () => {
    const r = R.r / 100, vc = R.pc + R.pc / r, vd = R.pd + R.pn / r, rs = (R.pc - R.pn) / (R.pd - R.pc);
    $('#rpRv', el).textContent = R.r;
    $('#rpRo', el).innerHTML = `<div><small>VP se coopera</small><b>${fmt(vc, 2)}</b></div><div><small>VP se desvia</small><b>${fmt(vd, 2)}</b></div><div><small>r crítico</small><b>${isFinite(rs) && rs > 0 ? fmt(100 * rs, 1) + '%' : '—'}</b></div>`;
    $('#rpEx', el).innerHTML = `<p><b>Coopera sempre:</b> ${fmtA(R.pc)} + ${fr(fmtA(R.pc), fmtA(r, 3))} = <b>${fmt(vc, 2)}</b>. <b>Desvia hoje:</b> ganha ${fmtA(R.pd)} agora e depois ${fmtA(R.pn)} para sempre: ${fmtA(R.pd)} + ${fr(fmtA(R.pn), fmtA(r, 3))} = <b>${fmt(vd, 2)}</b>.</p>
      <p>${vc >= vd ? '✅ Cooperar vale mais ⇒ seguir a estratégia gatilho é a melhor resposta à estratégia gatilho do outro ⇒ <b>há Equilíbrio de Nash em que ambos cooperam</b> (todo mês).' : '❌ Desviar vale mais: a cooperação não se sustenta com juros tão altos (o futuro pesa pouco).'}</p>
      <p class="note">Valor presente de uma perpetuidade que começa no mês seguinte = ${fr('π', 'r')}. Coopera-se enquanto r ≤ ${fr('π_coop − π_Nash', 'π_desvio − π_coop')}.</p>`;
  };
  el.addEventListener('click', e => { const b = e.target.closest('#gmPre [data-g]'); if (b) { gk = b.dataset.g; G = JSON.parse(JSON.stringify(GAMES[gk])); drawG(); } });
  el.addEventListener('change', e => { const k = e.target.dataset.pr; if (k) { G.p[+k[0]][+k[1]][+k[2]] = parseNum(e.target.value, 0); drawG(); } });
  el.addEventListener('input', e => {
    if (e.target.dataset.c) { C[e.target.dataset.c] = e.target.value; drawC(); }
    if (e.target.id === 'coN') { C.n = +e.target.value; drawC(); }
    if (e.target.dataset.r) { R[e.target.dataset.r] = parseNum(e.target.value, R[e.target.dataset.r]); drawR(); }
    if (e.target.id === 'rpR') { R.r = +e.target.value; drawR(); }
  });
  drawG(); drawC(); drawR();
};

/* =====================================================================
   TEMA 8 — Falhas de mercado
   ===================================================================== */
const FM_GAME = [
  ['Termelétrica emite gases de efeito estufa sem considerar o custo do aquecimento global para a sociedade', 'EXN', 'Custo recai sobre terceiros que não escolheram: externalidade negativa.'],
  ['Laboratórios de IA aceleram rumo à AGI; o risco de extinção recai sobre toda a humanidade (prova 2025)', 'EXN', 'Ação de alguns gera custo para terceiros não considerado pelas empresas. Não há assimetria de informação descrita.'],
  ['Ludopatia por bets gera custos para famílias e para o SUS (prova 2025)', 'EXN', 'Parte do custo recai sobre terceiros e não entra na decisão privada.'],
  ['Assessor recomenda o CDB que paga mais comissão a ele; o cliente não observa o critério usado (Banco Master)', 'PM', 'Assimetria quanto ao COMPORTAMENTO (ação oculta) + desalinhamento de interesses agente-principal: perigo moral.'],
  ['Investidores não distinguem plataformas criteriosas das menos criteriosas; as menos criteriosas ganham mercado', 'SA', 'Assimetria quanto ao TIPO; a composição do mercado piora (sobrerrepresentação do “pior tipo”): seleção adversa.'],
  ['A Disciplina Consciente revela quem é confiável, ajudando na hora de contratar/indicar (prova 2025)', 'SA', 'Reduz a assimetria de informação quanto ao tipo da pessoa ⇒ reduz seleção adversa.'],
  ['Algoritmo da rede social prioriza engajamento danoso; a plataforma sabe como ele funciona, o usuário não', 'PM', 'Assimetria quanto às ações da plataforma e incentivos desalinhados.'],
  ['Pescadores, cada um pensando em si, esgotam um cardume de livre acesso', 'TC', 'Recurso comum (rival e de livre acesso) sobre-explorado: tragédia dos comuns.'],
  ['Moradores usam a iluminação pública sem contribuir para seu custeio', 'CAR', 'Bem público não excludente: problema do carona (free rider).'],
  ['Vacinação protege também quem não se vacinou', 'EXP', 'Benefício para terceiros não considerado na decisão: externalidade positiva (produz-se menos que o eficiente).'],
  ['Com efeitos de rede, uma única plataforma domina o mercado (“o vencedor leva tudo”)', 'POD', 'Tendência a monopólio ⇒ poder de mercado ⇒ ineficiência (preço acima do CM).'],
  ['Depois de contratar seguro total, o motorista passa a dirigir com menos cuidado', 'PM', 'Ação oculta depois do contrato: perigo moral (risco moral, moral hazard).'],
  ['Só quem sabe que tem saúde frágil procura o plano de saúde mais completo', 'SA', 'Característica oculta antes do contrato: seleção adversa.']
];
LAB.falhas = el => {
  let E = 120, tipo = 'neg';
  el.innerHTML = `
  <div class="lab"><h3>🏭💨 Externalidades: custo social × custo privado</h3>
    <p class="muted">D: P = 420 − 12,5Q · Oferta (custo privado): P = 20 + 12,5Q. O mercado só olha o custo privado.</p>
    <div class="seg" id="exT"><button data-t="neg" class="on">Externalidade negativa</button><button data-t="pos">Externalidade positiva</button></div>
    <div class="fields"><label class="field">Efeito externo por unidade = R$ <span id="exEv"></span><input type="range" id="exE" min="0" max="300" step="10" value="120"></label></div>
    <div class="lab-grid"><div id="exCh"></div><div><div class="readout" id="exRo"></div><div class="explain" id="exEx"></div></div></div>
  </div>
  ${gameBox('fmG', '🎯 Qual é a falha de mercado?', 'Questões das provas de 2025 e exemplos clássicos. EXT− = externalidade negativa · EXT+ = positiva · PM = perigo moral · SA = seleção adversa · TC = tragédia dos comuns · Carona = free rider · Poder = poder de mercado.')}`;
  const draw = () => {
    $('#exEv', el).textContent = E;
    $('#exCh', el).innerHTML = extChart(E, tipo);
    const Qe = tipo === 'neg' ? (400 - E) / 25 : (400 + E) / 25, dwl = E * Math.abs(16 - Qe) / 2;
    $('#exRo', el).innerHTML = `<div><small>Q de mercado</small><b>16</b></div><div><small>Q eficiente</small><b>${fmt(Qe, 1)}</b></div><div><small>Perda social</small><b class="no">${fmtA(dwl, 1)}</b></div><div><small>${tipo === 'neg' ? 'Imposto' : 'Subsídio'} corretivo</small><b>R$ ${E}</b></div>`;
    $('#exEx', el).innerHTML = tipo === 'neg'
      ? `<p><b>Custo social = custo privado + custo externo</b> ⇒ a curva de custo social fica <b>acima</b> da oferta. O mercado produz 16, mais que o eficiente (${fmt(Qe, 1)}), onde custo social = demanda.</p><p>Nas unidades entre ${fmt(Qe, 1)} e 16, o custo social supera o benefício: é a <b>perda social (peso morto)</b>, o triângulo à <b>direita</b> da quantidade eficiente, entre o custo social e a demanda. Um imposto por unidade igual ao custo externo (pigouviano) corrige.</p>`
      : `<p><b>Benefício social = benefício privado (demanda) + benefício externo</b> ⇒ curva acima da demanda. O mercado produz 16, <b>menos</b> que o eficiente (${fmt(Qe, 1)}). Um subsídio igual ao benefício externo corrige.</p>`;
    $$('#exT button', el).forEach(b => b.classList.toggle('on', b.dataset.t === tipo));
  };
  el.addEventListener('input', e => { if (e.target.id === 'exE') { E = +e.target.value; draw(); } });
  el.addEventListener('click', e => { const b = e.target.closest('#exT [data-t]'); if (b) { tipo = b.dataset.t; draw(); } });
  draw();
  classGame(el, 'fmG', FM_GAME, [['EXN', 'EXT−'], ['EXP', 'EXT+'], ['PM', 'PM'], ['SA', 'SA'], ['TC', 'TC'], ['CAR', 'Carona'], ['POD', 'Poder']]);
};
