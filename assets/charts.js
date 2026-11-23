'use strict';
/* =====================================================================
   Microeconomia ITA — utilidades, motor de gráficos (SVG) e modelos
   ===================================================================== */

/* ---------- utilidades ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const fr = (n, d) => `<span class="fr"><span>${n}</span><span>${d}</span></span>`; // fração empilhada (HTML)
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmt = (n, d = 1) => Number(n).toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d });
const fmtA = (n, d = 2) => Number(n).toLocaleString('pt-BR', { maximumFractionDigits: d }); // sem zeros à direita
const pct = (a, b) => (b ? Math.round(100 * a / b) : 0);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const LS = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* armazenamento indisponível */ } }
};
const REDUCE = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const near = (a, b, t = 0.02) => Math.abs(a - b) < t;
const arrow = (v, b, inv) => near(v, b, Math.max(0.02, Math.abs(b) * 0.002)) ? '<i class="muted">=</i>' : ((v > b) !== !!inv ? '<i class="up">▲</i>' : '<i class="dn">▼</i>');
// aceita "1/12", "0,5", "3"
function parseNum(s, d = 0) {
  s = String(s).trim().replace(',', '.');
  const m = s.match(/^(-?[\d.]+)\s*\/\s*([\d.]+)$/);
  const v = m ? parseFloat(m[1]) / parseFloat(m[2]) : parseFloat(s);
  return isFinite(v) ? v : d;
}
// bisseção para f crescente
function bisect(f, lo, hi, it = 80) { for (let i = 0; i < it; i++) { const mid = (lo + hi) / 2; if (f(mid) > 0) hi = mid; else lo = mid; } return (lo + hi) / 2; }
// mínimo de função unimodal (seção áurea)
function argmin(f, a, b, it = 90) {
  const g = (Math.sqrt(5) - 1) / 2; let c = b - g * (b - a), d = a + g * (b - a);
  for (let i = 0; i < it; i++) { if (f(c) < f(d)) b = d; else a = c; c = b - g * (b - a); d = a + g * (b - a); }
  return (a + b) / 2;
}

/* =====================================================================
   GRÁFICO GENÉRICO
   curves: {g:y=>x} reta (x em função de y) · {x} vertical · {y} horizontal
           {f:x=>y, a, b} função amostrada · {pts:[[x,y],…]} poligonal
   areas:  {pts, cls: cs|ps|dwl|tax|profit|loss, lab, at:[x,y]}
   points: {x, y, lab, n (número no círculo), xt, yt, cls, guide}
   hlines: {y, lab, cls:'p'} · arrows: [x1,y1,x2,y2] · gaps: [x, y1, y2]
   ===================================================================== */
let CHART_N = 0;
function clipSeg(c, xr, yr) {
  const ylo = yr[0] + (yr[1] - yr[0]) * 0.0, yhi = yr[1] - (yr[1] - yr[0]) * 0.04;
  let A, B;
  if (c.x !== undefined) { A = [c.x, ylo]; B = [c.x, yhi]; }
  else { A = [c.g(ylo), ylo]; B = [c.g(yhi), yhi]; }
  const xlo = xr[0], xhi = xr[1] - (xr[1] - xr[0]) * 0.03;
  let t0 = 0, t1 = 1; const dx = B[0] - A[0];
  if (Math.abs(dx) < 1e-9) { if (A[0] < xlo || A[0] > xhi) return null; }
  else {
    let ta = (xlo - A[0]) / dx, tb = (xhi - A[0]) / dx; if (ta > tb) [ta, tb] = [tb, ta];
    t0 = Math.max(t0, ta); t1 = Math.min(t1, tb); if (t0 >= t1) return null;
  }
  const P = t => [A[0] + t * dx, A[1] + t * (B[1] - A[1])];
  return [P(t0), P(t1)];
}
function chart(o) {
  const W = o.w || 380, H = o.h || 300, m = Object.assign({ l: 40, r: 46, t: o.title ? 30 : 16, b: 30 }, o.m || {});
  const [x0, x1] = o.xr, [y0, y1] = o.yr;
  const X = x => +(m.l + (x - x0) / (x1 - x0) * (W - m.l - m.r)).toFixed(1);
  const Y = y => +(H - m.b - (y - y0) / (y1 - y0) * (H - m.t - m.b)).toFixed(1);
  const id = 'arw' + (++CHART_N);
  const yTop = y1 - (y1 - y0) * 0.02, xTop = x1 - (x1 - x0) * 0.02;
  const inR = (x, y) => x >= x0 - 1e-9 && x <= xTop + 1e-9 && y >= y0 - 1e-9 && y <= yTop + 1e-9;
  let s = `<svg viewBox="0 0 ${W} ${H}" class="chart" role="img" aria-label="${esc(o.aria || o.title || 'gráfico')}">
  <defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--warn)"/></marker></defs>`;
  if (o.title) s += `<text class="ptitle" x="${W / 2}" y="16" text-anchor="middle">${o.title}</text>`;
  // áreas primeiro (ficam por baixo)
  for (const a of (o.areas || [])) {
    if (!a.pts || a.pts.length < 3) continue;
    const pts = a.pts.map(([x, y]) => `${X(clamp(x, x0, x1))},${Y(clamp(y, y0, y1))}`).join(' ');
    s += `<polygon class="ar ${a.cls || ''}" points="${pts}"/>`;
  }
  s += `<line class="ax" x1="${X(x0)}" y1="${Y(y0)}" x2="${W - m.r + 14}" y2="${Y(y0)}"/><line class="ax" x1="${X(x0)}" y1="${Y(y0)}" x2="${X(x0)}" y2="${m.t - 8}"/>`;
  s += `<text class="axl" x="${W - m.r + 14}" y="${H - 6}" text-anchor="end">${o.xl}</text><text class="axl" x="${X(x0) + 6}" y="${m.t - 2}">${o.yl}</text>`;
  for (const h of (o.hlines || [])) {
    const xa = h.from !== undefined ? h.from : x0, xb = h.to !== undefined ? h.to : xTop;
    if (h.y < y0 || h.y > y1) continue;
    s += `<line class="hl ${h.cls || ''}" x1="${X(xa)}" y1="${Y(h.y)}" x2="${X(xb)}" y2="${Y(h.y)}"/>`;
    if (h.lab) s += `<text class="hll" x="${X(xb) + 4}" y="${Y(h.y) + 4}">${h.lab}</text>`;
  }
  for (const c of (o.curves || [])) {
    let segs = [];
    if (c.x !== undefined || c.g) { const sg = clipSeg(c, o.xr, o.yr); if (sg) segs.push(sg); }
    else if (c.y !== undefined) { const xa = Math.max(x0, c.from ?? x0), xb = Math.min(xTop, c.to ?? xTop); if (c.y >= y0 && c.y <= y1 && xb > xa) segs.push([[xa, c.y], [xb, c.y]]); }
    else {
      let raw = c.pts;
      if (c.f) { const a = Math.max(c.a ?? x0, x0), b = Math.min(c.b ?? xTop, xTop), n = c.n || 90; raw = []; for (let i = 0; i <= n; i++) { const x = a + (b - a) * i / n; raw.push([x, c.f(x)]); } }
      let cur = [];
      for (const p of raw) { if (p && isFinite(p[1]) && inR(p[0], p[1])) cur.push(p); else { if (cur.length > 1) segs.push(cur); cur = []; } }
      if (cur.length > 1) segs.push(cur);
    }
    if (!segs.length) continue;
    for (const sg of segs) s += `<polyline class="cv ${c.cls || ''}" points="${sg.map(([x, y]) => X(x) + ',' + Y(y)).join(' ')}"/>`;
    if (c.lab) {
      const last = segs[segs.length - 1], first = segs[0];
      const [lx, ly] = c.labAt || (c.labEnd === 'a' ? first[0] : last[last.length - 1]);
      s += `<text class="cvl ${c.cls || ''}" x="${X(lx) + (c.dx ?? 5)}" y="${Y(ly) + (c.dy ?? -3)}" text-anchor="${c.anchor || 'start'}">${c.lab}</text>`;
    }
  }
  for (const g of (o.gaps || [])) s += `<line class="gap" x1="${X(g[0])}" y1="${Y(g[1])}" x2="${X(g[0])}" y2="${Y(g[2])}"/>`;
  for (const a of (o.arrows || [])) s += `<line class="shift" x1="${X(a[0])}" y1="${Y(a[1])}" x2="${X(a[2])}" y2="${Y(a[3])}" marker-end="url(#${id})"/>` + (a[4] ? `<text class="hll" x="${(X(a[0]) + X(a[2])) / 2 + 4}" y="${(Y(a[1]) + Y(a[3])) / 2 - 5}">${a[4]}</text>` : '');
  for (const a of (o.areas || [])) if (a.lab && a.at) s += `<text class="arl" x="${X(a.at[0])}" y="${Y(a.at[1])}" text-anchor="middle">${a.lab}</text>`;
  for (const p of (o.points || [])) {
    if (p.x < x0 || p.x > x1 || p.y < y0 || p.y > y1) continue;
    if (p.guide !== false) s += `<path class="gd" d="M${X(p.x)} ${Y(p.y)} V${Y(y0)} M${X(p.x)} ${Y(p.y)} H${X(x0)}"/>`;
    if (p.xt) s += `<text class="tick" x="${X(p.x)}" y="${Y(y0) + 14}" text-anchor="middle">${p.xt}</text>`;
    if (p.yt) s += `<text class="tick" x="${X(x0) - 4}" y="${Y(p.y) + 4}" text-anchor="end">${p.yt}</text>`;
  }
  for (const p of (o.points || [])) {
    if (p.x < x0 || p.x > x1 || p.y < y0 || p.y > y1) continue;
    if (p.n !== undefined) s += `<circle class="pt ptc ${p.cls || ''}" cx="${X(p.x)}" cy="${Y(p.y)}" r="9"/><text class="ptn" x="${X(p.x)}" y="${Y(p.y)}">${p.n}</text>`;
    else s += `<circle class="pt ${p.cls || ''}" cx="${X(p.x)}" cy="${Y(p.y)}" r="5"/>`;
    if (p.lab) s += `<text class="ptl" x="${X(p.x) + (p.dx ?? 10)}" y="${Y(p.y) + (p.dy ?? -10)}"${p.anchor ? ` text-anchor="${p.anchor}"` : ""}>${p.lab}</text>`;
  }
  return s + '</svg>';
}

/* =====================================================================
   MODELOS
   ===================================================================== */

/* ---------- Demanda e oferta lineares: Qd = a − bP ; Qs = c + dP ---------- */
function linEq(a, b, c, d) {
  const P = (a - c) / (b + d), Q = a - b * P;
  const Pmax = a / b;                      // intercepto da demanda
  const Pmin = c < 0 ? -c / d : 0;         // preço a partir do qual há oferta
  const EC = (Pmax - P) * Q / 2;
  const EP = c <= 0 ? (P - Pmin) * Q / 2 : P * c + P * (Q - c) / 2;
  return { P, Q, Pmax, Pmin, EC, EP };
}
function dsChart(a, b, c, d, opt = {}) {
  const e = linEq(a, b, c, d);
  const xr = [0, Math.max(e.Q * 2, a * 0.75)], yr = [0, e.Pmax * 1.08];
  const areas = [];
  if (opt.areas !== false && e.Q > 0) {
    areas.push({ pts: [[0, e.P], [0, e.Pmax], [e.Q, e.P]], cls: 'cs', lab: opt.small ? '' : 'EC', at: [e.Q * 0.28, e.P + (e.Pmax - e.P) * 0.3] });
    areas.push({ pts: c <= 0 ? [[0, e.Pmin], [0, e.P], [e.Q, e.P]] : [[0, 0], [0, e.P], [e.Q, e.P], [c, 0]], cls: 'ps', lab: opt.small ? '' : 'EP', at: [e.Q * 0.28, e.P - (e.P - e.Pmin) * 0.38] });
  }
  const pts = [{ x: e.Q, y: e.P, xt: opt.qt || 'Q*', yt: opt.pt || 'P*' }];
  const hl = [], curves = [{ g: y => a - b * y, cls: 'd', lab: 'D', labEnd: 'a', dy: -6 }, { g: y => c + d * y, cls: 's', lab: 'O' }];
  if (opt.ctrl !== undefined) {
    const pc = opt.ctrl, qd = a - b * pc, qs = c + d * pc;
    hl.push({ y: pc, cls: 'p', lab: opt.ctrlLab || 'P̄' });
    pts.length = 0; pts.push({ x: e.Q, y: e.P, cls: 'old', guide: false });
    if (qd >= 0) pts.push({ x: qd, y: pc, lab: 'Qd', xt: fmtA(qd) });
    if (qs >= 0) pts.push({ x: qs, y: pc, lab: 'Qs', xt: fmtA(qs) });
  }
  return chart({ xr, yr, xl: opt.xl || 'Q', yl: opt.yl || 'P', curves, areas, points: pts, hlines: hl, title: opt.title, h: opt.h || 290, w: opt.w });
}

/* ---------- Custos da confeitaria (planilha 005.Custos.xlsx) ---------- */
const BOLO_CV = [0, 60, 96, 126, 168, 226, 302, 398, 516, 661, 837];
function boloTab(CF = 154, CV = BOLO_CV) {
  return CV.map((cv, q) => ({ q, CF, CV: cv, CT: CF + cv, CFM: q ? CF / q : null, CVM: q ? cv / q : null, CTM: q ? (CF + cv) / q : null, CM: q ? cv - CV[q - 1] : null }));
}
function boloChart(CF = 154, opt = {}) {
  const T = boloTab(CF).slice(1);
  // Como nos slides: CM desenhado em q. Ele encontra o CVM em (4, 42) e o CTM em (6, 76),
  // os dois nos mínimos (a tabela tem empates 3–4 e 5–6; o CM chega neles no 2º ponto do empate)
  const curves = [
    { pts: T.map(r => [r.q, r.CM]), cls: 'm', lab: 'CM' },
    { pts: T.map(r => [r.q, r.CTM]), cls: 'd', lab: 'CTM', labAt: [10, T[9].CTM], dy: -6 },
    { pts: T.map(r => [r.q, r.CVM]), cls: 's', lab: 'CVM', labAt: [10, T[9].CVM], dy: 14 }
  ];
  if (opt.cfm) curves.push({ pts: T.map(r => [r.q, r.CFM]), cls: 'v', lab: 'CFM' });
  const points = (opt.points || []).concat(opt.noMin ? [] : [{ x: 6, y: 76, lab: 'CM = mín CTM', xt: '6', yt: '76', dx: 8, dy: 22 }, { x: 4, y: 42, lab: 'CM = mín CVM', dy: 18, guide: false }]);
  return chart({ xr: [0, 11], yr: [0, opt.ymax || 230], xl: 'q (bolos/dia)', yl: 'R$', curves, points, hlines: opt.hlines, areas: opt.areas, title: opt.title, h: opt.h || 300, w: opt.w });
}

/* ---------- Custo suave para os gráficos "empresa × mercado" ----------
   CV(q) = 60q − 13q² + 1,6q³ (forma de U: ganhos de especialização e,
   depois, rendimentos marginais decrescentes) ; CF = 154 ; choque A = custo por unidade */
const FIRM = { F: 154 };
const cvS = q => 60 * q - 13 * q * q + 1.6 * q ** 3;
const cmS = (q, A = 0) => 60 - 26 * q + 4.8 * q * q + A;
const cvmS = (q, A = 0) => 60 - 13 * q + 1.6 * q * q + A;
const ctmS = (q, A = 0) => cvmS(q, A) + FIRM.F / q;
FIRM.q0 = argmin(q => ctmS(q), 1, 10);
FIRM.p0 = ctmS(FIRM.q0);
FIRM.qv = 13 / 3.2; FIRM.pv = cvmS(FIRM.qv);  // mínimo do CVM (ponto de fechamento)
// oferta da empresa: q tal que CM(q) = p, no ramo crescente, se p ≥ mín CVM
const qsS = (p, A = 0) => { const pp = p - A; if (pp < FIRM.pv) return 0; return (26 + Math.sqrt(Math.max(0, 676 - 19.2 * (60 - pp)))) / 9.6; };

/* ---------- Mercado competitivo: cenários de choque (2 gráficos) ----------
   Demanda de mercado: P = Dint − Q/9  ⇔  Qd = 9(Dint − P)
   Oferta CP: S(P) = K·[P ≥ cS] + n·qs(P)   (K = sequeiro, só no cenário do feijão) */
const SHOCKS = {
  demanda_cai: { nome: 'Demanda cai (bets reduzem a renda do varejo)', dD: -25, A: 0 },
  demanda_sobe: { nome: 'Demanda sobe (renda/crédito maiores)', dD: 25, A: 0 },
  custo_sobe: { nome: 'Custo sobe (El Niño, seguro agrícola)', dD: 0, A: 18 },
  custo_cai: { nome: 'Custo cai (Reforma Tributária)', dD: 0, A: -18 },
  feijao: { nome: 'Menos terra de sequeiro (feijão — prova)', dD: 0, A: 0, K0: 300, K1: 150, cS: 22 }
};
function shockModel(key) {
  const sc = SHOCKS[key], D0 = 130, K0 = sc.K0 || 0, K1 = sc.K1 ?? K0, cS = sc.cS || 0;
  const Qd = (P, Di) => Math.max(0, 9 * (Di - P));
  const S = (P, n, A, K) => (K && P >= cS ? K : 0) + n * qsS(P, A);
  const p1 = FIRM.p0, Q1 = Qd(p1, D0), n1 = (Q1 - K0) / FIRM.q0;
  const D1 = D0 + sc.dD, A = sc.A;
  const p2 = bisect(P => S(P, n1, A, K1) - Qd(P, D1), 0, 200), Q2 = Qd(p2, D1);
  const q2 = qsS(p2, A);
  const p3 = FIRM.p0 + A, Q3 = Qd(p3, D1), n3 = (Q3 - K1) / FIRM.q0;
  const lucro2 = (p2 - ctmS(q2, A)) * q2;
  return { sc, D0, D1, A, K0, K1, cS, n1, n3, p1, Q1, p2, Q2, q2, p3, Q3, lucro2, Qd, S };
}
function supplyPts(n, A, K, cS, ymax) {
  const pts = [];
  if (K) { pts.push([0, cS], [K, cS]); }
  const pmin = FIRM.pv + A;
  if (K) pts.push([K, Math.max(cS, pmin)]);
  for (let i = 0; i <= 60; i++) { const P = pmin + (ymax - pmin) * i / 60; pts.push([(K && P >= cS ? K : 0) + n * qsS(P, A), P]); }
  return pts;
}
// step: 1 inicial, 2 curto prazo, 3 longo prazo
function shockCharts(key, step) {
  const M = shockModel(key), ymax = 140, A = M.A;
  const cost = A !== 0, dem = M.sc.dD !== 0, fei = !!M.sc.K0;
  /* ----- empresa ----- */
  const fc = [], fpts = [], fh = [], fgaps = [], fareas = [];
  if (cost && step >= 2) {
    fc.push({ f: q => cmS(q), a: 0.4, b: 10, cls: 'ghost', lab: 'CM inicial', labAt: [7.2, cmS(7.2)], anchor: 'end', dx: -6 });
    fc.push({ f: q => ctmS(q), a: 0.4, b: 10, cls: 'ghost', lab: 'CTM inicial', labAt: [10, ctmS(10)], dx: 4, dy: A < 0 ? -2 : 12 });
    fc.push({ f: q => cmS(q, A), a: 0.4, b: 10, cls: 'm', lab: 'CM final' });
    fc.push({ f: q => ctmS(q, A), a: 0.4, b: 10, cls: 'd', lab: 'CTM final', labAt: [10, ctmS(10, A)], dx: 4, dy: A < 0 ? 12 : -2 });
  } else {
    fc.push({ f: q => cmS(q), a: 0.4, b: 10, cls: 'm', lab: 'CM' });
    fc.push({ f: q => ctmS(q), a: 0.4, b: 10, cls: 'd', lab: 'CTM', labAt: [9.6, ctmS(9.6)], dy: -6, anchor: 'end' });
  }
  fpts.push({ x: FIRM.q0, y: M.p1, n: 1, yt: 'p₁', xt: 'q*', cls: step > 1 ? 'old' : '' });
  if (step >= 2) {
    fh.push({ y: M.p2, cls: 'p', lab: 'p₂' });
    fpts.push({ x: M.q2, y: M.p2, n: 2, guide: false });
    const ct2 = ctmS(M.q2, A);
    if (!near(ct2, M.p2, 0.3)) {
      fgaps.push([M.q2, M.p2, ct2]);
      fareas.push({ pts: [[0, ct2], [0, M.p2], [M.q2, M.p2], [M.q2, ct2]], cls: M.p2 > ct2 ? 'profit' : 'loss' });
    }
  }
  if (step >= 3) fpts.push({ x: FIRM.q0, y: M.p3, n: 3, yt: near(M.p3, M.p1) ? '' : 'p₃', guide: !near(M.p3, M.p1) });
  const firm = chart({ title: 'Empresa típica', xr: [0, cost && step >= 2 ? 12.6 : 10.5], yr: [0, ymax], xl: 'q', yl: 'R$', curves: fc, points: fpts, hlines: fh, gaps: fgaps, areas: fareas, w: 340, h: 300 });
  /* ----- mercado ----- */
  const mc = [], mpts = [], marr = [];
  const sLP = (y, lab, cls) => mc.push({ y, cls, lab, labAt: [1150, y], anchor: 'end', dx: -2, dy: -5 });
  if (fei) {
    sLP(M.p1, 'O_LP', 'v');
    mc.push({ pts: supplyPts(M.n1, 0, M.K0, M.cS, ymax), cls: step >= 2 ? 'ghost' : 's', lab: step >= 2 ? 'O_CP inicial' : 'O_CP', ...(step >= 3 ? { anchor: 'end', dx: -6 } : {}) });
    if (step >= 2) mc.push({ pts: supplyPts(M.n1, 0, M.K1, M.cS, ymax), cls: step >= 3 ? 'ghost' : 's', lab: step >= 3 ? '' : 'O_CP (−ΔK)' });
    if (step >= 3) mc.push({ pts: supplyPts(M.n3, 0, M.K1, M.cS, ymax), cls: 's', lab: 'O_CP final' });
    mc.push({ g: y => 9 * (M.D0 - y), cls: 'd', lab: 'D' });
    if (step >= 2) marr.push([M.K0 - 6, M.cS + 7, M.K1 + 8, M.cS + 7, 'ΔK']);
    if (step >= 3) { const yy = M.p1 + 30; marr.push([M.S(yy, M.n1, 0, M.K1) + 6, yy, M.S(yy, M.n3, 0, M.K1) - 6, yy, 'B']); }
  } else {
    if (cost && step >= 2) { sLP(M.p1, 'O_LP inicial', 'ghost'); sLP(M.p3, 'O_LP final', 'v'); }
    else sLP(M.p1, 'O_LP', 'v');
    if (dem && step >= 2) mc.push({ g: y => 9 * (M.D0 - y), cls: 'ghost', lab: 'D inicial', anchor: 'end', dx: -4 });
    mc.push({ g: y => 9 * (M.D1 - y), cls: 'd', lab: dem && step >= 2 ? 'D final' : 'D' });
    const yT = ymax * 0.9, finRight = step >= 3 && M.n3 * qsS(yT, A) > M.n1 * qsS(yT);
    mc.push({ pts: supplyPts(M.n1, 0, 0, 0, ymax), cls: (cost && step >= 2) || step >= 3 ? 'ghost' : 's', lab: (cost && step >= 2) || step >= 3 ? 'O_CP inicial' : 'O_CP', ...(finRight ? { anchor: 'end', dx: -6 } : {}) });
    if (cost && step >= 2) mc.push({ pts: supplyPts(M.n1, A, 0, 0, ymax), cls: step >= 3 ? 'ghost' : 's', lab: step >= 3 ? '' : 'O_CP (custo)' });
    if (step >= 3 && !near(M.n3, M.n1, 0.01)) mc.push({ pts: supplyPts(M.n3, A, 0, 0, ymax), cls: 's', lab: 'O_CP final', ...(finRight ? {} : { anchor: 'end', dx: -6 }) });
    if (step >= 2 && dem) { const yy = M.p1 + 34; marr.push([9 * (M.D0 - yy) + (M.sc.dD > 0 ? 8 : -8), yy, 9 * (M.D1 - yy) + (M.sc.dD > 0 ? -8 : 8), yy, 'A']); }
    if (step >= 2 && cost) { const xx = M.n1 * qsS(M.p1 + 40); marr.push([xx, M.p1 + 40 + (A > 0 ? 3 : -3), xx, M.p1 + 40 + A + (A > 0 ? -3 : 3), 'A']); }
    if (step >= 3 && !near(M.n3, M.n1, 0.01)) { const yy = M.p3 + 40; const xa = M.n1 * qsS(yy, A), xb = M.n3 * qsS(yy, A); marr.push([xa + (xb > xa ? 6 : -6), yy, xb + (xb > xa ? -6 : 6), yy, 'B']); }
  }
  mpts.push({ x: M.Q1, y: M.p1, n: 1, cls: step > 1 ? 'old' : '', yt: 'p₁' });
  if (step >= 2) mpts.push({ x: M.Q2, y: M.p2, n: 2, yt: 'p₂' });
  if (step >= 3) mpts.push({ x: M.Q3, y: M.p3, n: 3, yt: near(M.p3, M.p1) ? '' : 'p₃' });
  const market = chart({ title: 'Mercado', xr: [0, 1150], yr: [0, ymax], xl: 'Q', yl: 'P', curves: mc, points: mpts, arrows: marr, w: 340, h: 300 });
  return { firm, market, M };
}

/* ---------- Eficiência: D: P = 420 − 12,5Q ; O: P = 20 + 12,5Q ---------- */
const EF = { a: 420, b: 12.5, c: 20, d: 12.5 }; // equilíbrio Q* = 16, P* = 220
function taxModel(T, bD = 12.5, bS = 12.5) {
  const Qt = Math.max(0, 16 - T / (bD + bS)), Pc = 220 + bD * (16 - Qt), Ps = Pc - T;
  const PmaxD = 220 + bD * 16, PminS = 220 - bS * 16;
  return { Qt, Pc, Ps, rev: T * Qt, dwl: T * (16 - Qt) / 2, EC: (PmaxD - Pc) * Qt / 2, EP: (Ps - PminS) * Qt / 2, PmaxD, PminS, shareC: bD / (bD + bS) };
}
function taxChart(T, bD = 12.5, bS = 12.5, opt = {}) {
  const t = taxModel(T, bD, bS);
  const curves = [{ g: y => 16 - (y - 220) / bD, cls: 'd', lab: 'D', labEnd: 'a', dy: -6 }, { g: y => 16 + (y - 220) / bS, cls: 's', lab: 'O' }];
  const areas = [], points = [];
  if (T > 0.5) {
    areas.push({ pts: [[0, t.Pc], [0, t.PmaxD], [t.Qt, t.Pc]], cls: 'cs', lab: 'EC', at: [t.Qt * 0.25, t.Pc + (t.PmaxD - t.Pc) * 0.3] });
    areas.push({ pts: [[0, t.PminS], [0, t.Ps], [t.Qt, t.Ps]], cls: 'ps', lab: 'EP', at: [t.Qt * 0.25, t.Ps - (t.Ps - t.PminS) * 0.38] });
    areas.push({ pts: [[0, t.Ps], [0, t.Pc], [t.Qt, t.Pc], [t.Qt, t.Ps]], cls: 'tax', lab: 'Arrecadação', at: [t.Qt / 2, (t.Pc + t.Ps) / 2 + 4] });
    areas.push({ pts: [[t.Qt, t.Pc], [t.Qt, t.Ps], [16, 220]], cls: 'dwl' });
    points.push({ x: t.Qt, y: t.Pc, yt: 'Pc', xt: 'Qt' }, { x: t.Qt, y: t.Ps, yt: 'Ps', guide: true }, { x: 16, y: 220, cls: 'old', guide: false, lab: 'sem imposto', dx: 8, dy: 4 });
  } else {
    areas.push({ pts: [[0, 220], [0, t.PmaxD], [16, 220]], cls: 'cs', lab: 'EC', at: [4, 220 + (t.PmaxD - 220) * 0.3] });
    areas.push({ pts: [[0, t.PminS], [0, 220], [16, 220]], cls: 'ps', lab: 'EP', at: [4, 220 - (220 - t.PminS) * 0.38] });
    points.push({ x: 16, y: 220, xt: '16', yt: '220' });
  }
  return chart({ xr: [0, 32], yr: [0, 460], xl: 'Q', yl: 'P', curves, areas, points, title: opt.title, h: opt.h || 300, w: opt.w });
}

/* ---------- Monopólio: p = a − bq ; CT = F + cq + dq² ---------- */
function monoModel(a, b, F, c, d) {
  const CM = q => c + 2 * d * q, CT = q => F + c * q + d * q * q, p = q => a - b * q;
  const qm = Math.max(0, (a - c) / (2 * b + 2 * d)), pm = p(qm), lm = pm * qm - CT(qm);
  const qe = Math.max(0, (a - c) / (b + 2 * d)), pe = p(qe), le = pe * qe - CT(qe);
  const disc = (a - c) ** 2 - 4 * (b + d) * F;
  const qz = disc >= 0 ? ((a - c) + Math.sqrt(disc)) / (2 * (b + d)) : null;
  const dwl = q => q >= qe ? 0 : (p(q) - CM(q)) * (qe - q) / 2;
  const EC = q => (a - p(q)) * q / 2;
  // melhor teto sem subsídio: se p = CM não dá prejuízo, é ele; senão, p = CTM no maior q com lucro zero
  const best = le >= -1e-9 ? { q: qe, p: pe } : (qz !== null ? { q: qz, p: p(qz) } : null);
  return { a, b, F, c, d, CM, CT, p, qm, pm, lm, qe, pe, le, qz, dwl, EC, best };
}
function monoChart(M, mode = 'livre', opt = {}) {
  const { a, b, F, c, d } = M;
  const xmax = a / b * 1.08, ymax = a * 1.1;
  const curves = [
    { g: y => (a - y) / b, cls: 'd', lab: 'D', labAt: [0.72 * a / b, 0.28 * a], dx: 7, dy: -2 },
    { g: y => (a - y) / (2 * b), cls: 'o', lab: 'RM', labAt: [0.36 * a / b, 0.28 * a], dx: -7, dy: -2, anchor: 'end' },
    { f: q => c + 2 * d * q, a: 0, b: xmax, cls: 'm', lab: 'CM' }
  ];
  if (F > 0 && opt.ctm !== false) {
    const ctmF = q => F / q + c + d * q;
    let ql = xmax * 0.16; while (ctmF(ql) > ymax * 0.75 && ql < xmax * 0.6) ql += xmax * 0.02;
    curves.push({ f: ctmF, a: 0.01, b: xmax, cls: 'v', lab: 'CTM', labAt: [ql, ctmF(ql)], dx: 6, dy: -6 });
  }
  let q, pr;
  if (mode === 'pcm') { q = M.qe; pr = M.pe; }
  else if (mode === 'pctm' && M.best) { q = M.best.q; pr = M.best.p; }
  else { q = M.qm; pr = M.pm; }
  const areas = [{ pts: [[0, pr], [0, a], [q, pr]], cls: 'cs', lab: 'EC', at: [q * 0.25, pr + (a - pr) * 0.3] }];
  if (q < M.qe - 1e-6) areas.push({ pts: [[q, pr], [q, M.CM(q)], [M.qe, M.pe]], cls: 'dwl', lab: opt.noLab ? '' : 'PM', at: [q + (M.qe - q) * 0.35, (pr + M.CM(q) + M.pe) / 3] });
  const ctm = F / q + c + d * q;
  if (opt.profit !== false && q > 0 && F > 0) areas.push({ pts: [[0, ctm], [0, pr], [q, pr], [q, ctm]], cls: pr >= ctm ? 'profit' : 'loss' });
  const points = [{ x: q, y: pr, yt: fmtA(pr), xt: fmtA(q), lab: mode === 'livre' ? 'Máx. lucro' : 'regulado' }];
  if (mode === 'livre') points.push({ x: q, y: M.CM(q), guide: false }, { x: M.qe, y: M.pe, cls: 'old', xt: fmtA(M.qe), lab: 'Eficiente', ...(M.pe < ymax * 0.15 ? { anchor: 'end', dx: -8, dy: -8 } : { anchor: 'middle', dx: 0, dy: 22 }) });
  return chart({ xr: [0, xmax], yr: [0, ymax], xl: opt.xl || 'q', yl: opt.yl || 'R$', curves, areas, points, title: opt.title, h: opt.h || 300, w: opt.w });
}

