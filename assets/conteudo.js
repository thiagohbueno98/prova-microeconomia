// Conteúdo didático: resumos, flashcards, pegadinhas e formulário.
// Base: slides de GED-72 (Marchon, "Introdução à Microeconomia", caps. 1–9; Mankiw) e as
// provas de 2025 resolvidas. Blocos marcados "Complemento" vão além dos slides.
// <div class="figslot" data-fig="nome"></div> é preenchido por FIGLIB (app.js).

const AULAS = [
/* ============================================================ TEMA 1 */
{
  id: "Tema 1",
  cor: "#60a5fa",
  titulo: "Demanda e Oferta",
  cap: "Cap. 1 Marchon",
  tema: "Preço reserva, equilíbrio, excedentes, controle de preços e deslocamentos",
  lab: "oferta",
  resumo: `
  <div class="tldr"><b>Em uma frase:</b> cada comprador tem um <b>preço reserva</b> (o máximo que pagaria) e cada vendedor também (o mínimo que aceitaria). Empilhando esses preços obtemos as curvas de <b>demanda</b> e <b>oferta</b>; o mercado se ajusta até o <b>preço de equilíbrio</b>, onde quantidade demandada = quantidade ofertada — e ninguém precisou conhecer o preço reserva dos outros.</div>

  <section class="sec">
    <h3><span class="n">1</span> Preço reserva e as curvas</h3>
    <p>Pense em vender seu carro usado para comprar um zero: abaixo de certo valor “não compensa”. Esse valor mínimo é o seu <b>preço reserva</b> como vendedor. Para quem compra, o preço reserva é o <b>máximo</b> que está disposto a pagar.</p>
    <div class="grid2">
      <div class="box"><b class="c2">Curva de demanda</b><br>Indica a <b>quantidade demandada</b> para <b>cada preço</b>. Negativamente inclinada: quanto menor o preço, mais gente tem preço reserva acima dele.</div>
      <div class="box"><b class="c1">Curva de oferta</b><br>Indica a <b>quantidade ofertada</b> para <b>cada preço</b>. Positivamente inclinada: quanto maior o preço, mais vendedores aceitam vender.</div>
    </div>
    <div class="grid2">
      <div class="box"><b>Preço de equilíbrio (P*)</b>: preço em que a quantidade ofertada se iguala à demandada.</div>
      <div class="box"><b>Quantidade de equilíbrio (Q*)</b>: a quantidade ofertada (= demandada) ao preço de equilíbrio.</div>
    </div>
    <p>Quem de fato compra no equilíbrio? Os compradores com preço reserva ≥ P*. Quem vende? Os vendedores com preço reserva ≤ P*.</p>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Excedentes: o ganho de quem participa</h3>
    <div class="two"><div class="figslot" data-fig="do_eq"></div><div>
      <p><b class="c2">Excedente do consumidor</b> = preço reserva − preço pago. Somando todos: <b>área abaixo da demanda e acima de P*</b> (aproximadamente).</p>
      <p><b class="c1">Excedente do produtor</b> = preço recebido − preço reserva (custo). Somando: <b>área acima da oferta e abaixo de P*</b>.</p>
      <p>Excedente total = EC + EP. (No Tema 5 veremos que o equilíbrio competitivo <b>maximiza</b> esse total.)</p>
    </div></div>
    <div class="ex"><b>Questão 1 (resolvida em aula).</b> Arroz: \\(Q_d = 5{,}6 - 0{,}2P\\) e \\(Q_s = -1 + 2P\\) (P em R$/kg, Q em toneladas).
      <ol class="mini">
        <li>Equilíbrio: \\(5{,}6 - 0{,}2P = -1 + 2P \\Rightarrow 6{,}6 = 2{,}2P \\Rightarrow P^* = 3\\) reais/kg.</li>
        <li>\\(Q^* = -1 + 2(3) = 5\\) toneladas (= 5.000 kg). Confere na demanda: \\(5{,}6 - 0{,}6 = 5\\). ✔</li>
        <li>EC: a demanda zera em P = 28 ⇒ \\(EC = (28-3)\\times 5.000/2 =\\) <b>R$ 62.500</b>.</li>
        <li>EP: a oferta começa em P = 0,5 ⇒ \\(EP = (3-0{,}5)\\times 5.000/2 =\\) <b>R$ 6.250</b>.</li>
      </ol>
      <span class="muted">Cuidado com unidades: P em R$/<b>kg</b> e Q em <b>toneladas</b> ⇒ converta Q para kg antes de calcular áreas em reais.</span></div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> Controle de preços</h3>
    <div class="grid2">
      <div><div class="figslot" data-fig="do_teto"></div><p><b>Preço-teto</b> abaixo de P* (ex.: P* = 8, teto = 5): Qd = 4.000 &gt; Qs = 1.000 ⇒ <b>excesso de demanda</b> (escassez) de 3.000. É o que aconteceu no <b>tabelamento do Plano Cruzado (1986)</b>: crise de abastecimento, filas, ágio.</p></div>
      <div><div class="figslot" data-fig="do_piso"></div><p><b>Preço-piso</b> acima de P* (ex.: salário mínimo 12 com w* = 10): quantidade ofertada de trabalho 650 &gt; demandada 400 ⇒ <b>excesso de oferta</b> (desemprego) de 250. Salário mínimo 2026: R$ 1.621.</p></div>
    </div>
    <div class="trap"><b>Só é restritivo se “morder”:</b> teto <b>abaixo</b> de P* e piso <b>acima</b> de P*. Teto acima de P* ou piso abaixo de P* não mudam nada.</div>
    <div class="ex"><b>Questão 4 (V ou F).</b> \\(L_D = 1000 - 50w\\), \\(L_O = 200 + 50w\\). “Salário mínimo de R$ 10 gera excesso de demanda de 200 trabalhadores.”<br>
      Equilíbrio: \\(1000 - 50w = 200 + 50w \\Rightarrow w^* = 8\\). Como 10 &gt; 8, o piso é restritivo: \\(L_D(10) = 500\\), \\(L_O(10) = 700\\) ⇒ <b>excesso de OFERTA</b> de 200. <b class="no">Falsa.</b></div>
    <p class="muted">Contexto histórico da inflação antes do Real (IPCA de 82,39% em março de 1990): máquinas de remarcar preços, compras do mês e freezers, overnight, crédito raro, Plano Collor e o confisco da poupança.</p>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Variação na quantidade × variação na demanda</h3>
    <div class="figslot" data-fig="do_mov"></div>
    <table class="t">
      <thead><tr><th>O que mudou?</th><th>O que acontece</th><th>Nome correto</th></tr></thead>
      <tbody>
        <tr><td>O <b>preço do próprio bem</b></td><td>Movimento <b>ao longo</b> da curva</td><td>Variação na <b>quantidade</b> demandada (ou ofertada)</td></tr>
        <tr><td>Renda, preço de outros bens, gostos, expectativas, nº de compradores</td><td>A curva de demanda <b>inteira se desloca</b></td><td>Variação na <b>demanda</b></td></tr>
        <tr><td>Custo de insumos, tecnologia, nº de vendedores, clima, câmbio</td><td>A curva de oferta <b>inteira se desloca</b></td><td>Variação na <b>oferta</b></td></tr>
      </tbody>
    </table>
    <div class="grid2">
      <div class="box"><b>Substitutos</b> (carro novo × usado): o preço de um <b>sobe</b> ⇒ a demanda do outro <b>sobe</b>.</div>
      <div class="box"><b>Complementares</b> (carro × gasolina): o preço de um <b>sobe</b> ⇒ a demanda do outro <b>cai</b>.</div>
      <div class="box"><b>Bem normal</b>: renda ↑ ⇒ demanda ↑.</div>
      <div class="box"><b>Bem inferior</b>: renda ↑ ⇒ demanda ↓ (produtos de menor qualidade; motos para quem passa a comprar carro).</div>
    </div>
  </section>

  <section class="sec">
    <h3><span class="n">5</span> Casos das aulas</h3>
    <div class="two"><div class="figslot" data-fig="do_usados"></div><div>
      <p><b>Tarifas dos EUA</b> (carros europeus de 15% → 25%; 50% sobre aço e alumínio) encarecem o carro novo. No mercado de <b>usados</b>:</p>
      <ul><li><b>Demanda ↑</b>: o usado fica mais atrativo frente ao novo (substitutos).</li>
      <li><b>Oferta ↓</b>: fica menos interessante trocar o usado por um novo.</li></ul>
      <p>Resultado: <b>P* sobe</b>; <b>Q* ambíguo</b> (depende de qual deslocamento é maior).</p>
    </div></div>
    <div class="grid2">
      <div class="box"><b>Valorização do dólar → carne bovina</b> (Questão 3): encarece insumos importados e torna a exportação mais atrativa (cada dólar vira mais reais) ⇒ <b>oferta interna ↓</b> ⇒ P* ↑ e Q* ↓. Alternativa (b).</div>
      <div class="box"><b>Desenrola Brasil 2.0</b>: limpa o nome de inadimplentes, abre novas compras a prazo ⇒ <b>demanda por duráveis ↑</b> ⇒ P* ↑, Q* ↑. Há aumento na <b>demanda</b> e aumento na <b>quantidade ofertada</b>.</div>
      <div class="box"><b>Petróleo e Ormuz</b>: seguro de guerra dos navios de ~0,25% para até 12% do valor ⇒ custo maior ⇒ <b>oferta ↓</b>.</div>
      <div class="box"><b>Desemprego em 5,4%</b> (2º tri/2026, menor da série): mais renda ⇒ demanda ↑ para bens normais.</div>
    </div>
  </section>

  <section class="sec warn">
    <h3>✍️ Roteiro para questões de gráfico de demanda e oferta</h3>
    <ol>
      <li>Considere <b>apenas</b> o impacto pedido (<i>ceteris paribus</i>).</li>
      <li>Desenhe e <b>nomeie</b> eixos (Preço, Quantidade) e curvas (Demanda, Oferta).</li>
      <li>Desloque a curva afetada e use uma <b>seta</b> para mostrar a direção.</li>
      <li>Marque o ponto inicial (1) e final (2), com P₁, P₂, Q₁, Q₂ nos eixos.</li>
      <li>Diga se P* e Q* <b>sobem ou caem</b>.</li>
      <li>Diga se houve variação na <b>demanda</b> ou na <b>quantidade demandada</b> (idem para oferta).</li>
    </ol>
  </section>`,
  pegadinhas: [
    "Mudança no preço do PRÓPRIO bem não desloca a curva: é movimento ao longo dela (variação na quantidade demandada/ofertada).",
    "Salário mínimo acima do equilíbrio gera excesso de OFERTA de trabalho (desemprego), não excesso de demanda.",
    "Teto só restringe se estiver abaixo de P*; piso só se estiver acima de P*.",
    "Quando demanda e oferta se deslocam juntas, uma das variáveis (P* ou Q*) fica ambígua.",
    "Dólar valorizado reduz a oferta INTERNA de carne (exportar fica mais atrativo e insumos encarecem): curva de oferta para a esquerda.",
    "Converta unidades antes de calcular excedentes (R$/kg × toneladas)."
  ],
  cards: [
    ["Preço reserva", "Para o comprador: o máximo que está disposto a pagar. Para o vendedor: o mínimo que aceita receber."],
    ["Preço de equilíbrio", "Preço em que a quantidade ofertada é igual à quantidade demandada."],
    ["Excedente do consumidor", "Preço reserva − preço pago. No gráfico: área abaixo da demanda e acima do preço."],
    ["Excedente do produtor", "Preço recebido − preço reserva (custo). No gráfico: área acima da oferta e abaixo do preço."],
    ["Teto restritivo gera…", "Excesso de demanda (escassez). Ex.: tabelamento de 1986."],
    ["Piso restritivo gera…", "Excesso de oferta. No mercado de trabalho: desemprego."],
    ["Bens substitutos", "O preço de um sobe ⇒ a demanda pelo outro sobe (carro novo × usado)."],
    ["Bens complementares", "O preço de um sobe ⇒ a demanda pelo outro cai (carro × gasolina)."],
    ["Bem normal × inferior", "Normal: renda ↑ ⇒ demanda ↑. Inferior: renda ↑ ⇒ demanda ↓."],
    ["Demanda × quantidade demandada", "Preço do próprio bem muda ⇒ quantidade demandada (ao longo). Outro fator muda ⇒ demanda (desloca)."],
    ["Arroz: Qd = 5,6 − 0,2P; Qs = −1 + 2P", "P* = 3 R$/kg; Q* = 5 t; EC = R$ 62.500; EP = R$ 6.250."],
    ["Demanda ↑ e oferta ↓ ao mesmo tempo", "P* sobe com certeza; Q* é ambíguo."]
  ]
},
/* ============================================================ TEMA 2 */
{
  id: "Tema 2",
  cor: "#34d399",
  titulo: "Elasticidade",
  cap: "Cap. 3 Marchon",
  tema: "Elasticidade-preço, renda, cruzada e da oferta; regressão em log",
  lab: "elast",
  resumo: `
  <div class="tldr"><b>Em uma frase:</b> elasticidade mede <b>quão sensível</b> uma variável é a outra em <b>termos percentuais</b>: \\(\\varepsilon = \\dfrac{\\Delta\\%Q}{\\Delta\\%P}\\). Por ser adimensional, permite comparar países, moedas e unidades — coisa que a inclinação (derivada) não permite.</div>

  <section class="sec">
    <h3><span class="n">1</span> Por que não usar a inclinação?</h3>
    <p>“Sempre que o preço da gasolina sobe R$ 2, a quantidade cai mil litros.” Em dólares (1 real = 0,2 dólar): “sobe US$ 0,40, cai mil litros” ⇒ “sobe US$ 1, cai 2.500 litros”. <b>O número muda com as unidades</b>. Já a variação percentual não muda:</p>
    <p class="f big">\\(\\dfrac{12 - 10}{10} = \\dfrac{12\\times 0{,}2 - 10\\times 0{,}2}{10 \\times 0{,}2} = 20\\%\\)</p>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Elasticidade-preço da demanda</h3>
    <p class="f big">\\(\\varepsilon = \\dfrac{\\Delta\\%Q_d}{\\Delta\\%P} = \\dfrac{\\Delta Q / Q}{\\Delta P / P} = \\dfrac{\\Delta Q}{\\Delta P}\\cdot\\dfrac{P}{Q} \\;\\xrightarrow{\\;\\Delta \\to 0\\;}\\; \\dfrac{dQ}{dP}\\cdot\\dfrac{P}{Q}\\)</p>
    <div class="ex"><b>Gasolina (FMI, 2013):</b> preço +20% ⇒ quantidade −6% ⇒ \\(\\varepsilon = -6\\%/20\\% = -0{,}3\\).<br><b>Leitura correta:</b> “um aumento de <b>1%</b> no preço causa uma queda de <b>0,3%</b> na quantidade demandada”.</div>
    <table class="t">
      <thead><tr><th>Valor</th><th>Nome</th><th>Significado</th></tr></thead>
      <tbody>
        <tr><td>\\(|\\varepsilon| &lt; 1\\)</td><td><b>Inelástica</b></td><td>|Δ%Q| &lt; |Δ%P|: a quantidade reage pouco (gasolina no curto prazo, −0,3)</td></tr>
        <tr><td>\\(|\\varepsilon| = 1\\)</td><td>Unitária</td><td>Mesma variação percentual</td></tr>
        <tr><td>\\(|\\varepsilon| &gt; 1\\)</td><td><b>Elástica</b></td><td>|Δ%Q| &gt; |Δ%P|: a quantidade reage muito</td></tr>
      </tbody>
    </table>
    <h4>O que torna a demanda mais elástica?</h4>
    <ul>
      <li><b>Mais substitutos próximos</b> (Questão 6b). Os morangos de <b>um produtor</b> têm demanda muito mais elástica que a demanda de mercado (os dos vizinhos são substitutos perfeitos — Questão 6c).</li>
      <li><b>Mais tempo</b>: no longo prazo as pessoas se ajustam (carros menores e mais eficientes) ⇒ demanda por gasolina mais elástica no LP (Questão 6a).</li>
      <li>Bens supérfluos (de luxo) tendem a ser mais elásticos que necessidades. <span class="tag">Complemento</span></li>
    </ul>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> A família das elasticidades</h3>
    <p>De forma geral, elasticidade de Y em relação a X = \\(\\Delta\\%Y / \\Delta\\%X\\).</p>
    <div class="grid2">
      <div class="box"><b class="c1">Elasticidade-preço da oferta</b><br>\\(\\Delta\\%Q_s / \\Delta\\%P\\) (positiva).</div>
      <div class="box"><b class="c3">Elasticidade-preço cruzada</b><br>\\(\\Delta\\%Q_A / \\Delta\\%P_B\\). &gt; 0: substitutos; &lt; 0: complementares.</div>
      <div class="box"><b class="c2">Elasticidade-renda</b><br>\\(\\Delta\\%Q / \\Delta\\%\\text{Renda}\\). &gt; 0 normal (gasolina no LP: 0,88); &gt; 1 luxo (FMI: 2,5); &lt; 0 inferior.</div>
      <div class="box"><b class="c4">Elasticidade intergeracional da renda</b><br>Atlas da Mobilidade Social: 0,5 ⇒ renda dos pais 100% maior ⇒ filhos ganham, em média, 50% mais. Desigualdade de oportunidades.</div>
    </div>
    <div class="trap"><b>Pegadinha de prova (2025):</b> “elasticidade-<b>renda</b> das canetinhas emagrecedoras = 0,25 ⇒ preço +1% reduz quantidade em 0,25%” é <b>FALSA</b>: é renda +1% ⇒ quantidade +0,25%. E “ε-preço do café = −0,25 ⇒ preço +1% reduz a quantidade em 0,25 <b>unidades</b>” também é <b>FALSA</b>: são 0,25 <b>%</b>.</div>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Medindo elasticidades: regressão em log</h3>
    <p><b>Mínimos Quadrados Ordinários (MQO)</b>: a reta que melhor representa a relação entre duas variáveis, no sentido de minimizar a <b>soma dos quadrados dos erros</b> (distâncias verticais entre a reta e os pontos — elevamos ao quadrado para que erros positivos e negativos não se cancelem).</p>
    <div class="grid2">
      <div class="box"><b>y = a + b·x</b><br>b = inclinação (R$ por R$, litros por real…). <b class="no">Não é elasticidade.</b></div>
      <div class="box"><b>ln(y) = α + β·ln(x)</b><br>β = <b class="ok">elasticidade</b> de y em relação a x.</div>
    </div>
    <div class="ex"><b>Demonstração (questão de prova):</b> \\(\\ln y = \\alpha + \\beta \\ln x \\Rightarrow y = e^{\\alpha + \\beta \\ln x}\\). Pela regra da cadeia: \\(\\dfrac{dy}{dx} = e^{\\alpha + \\beta\\ln x}\\cdot \\beta \\cdot \\dfrac{1}{x} = y\\cdot\\dfrac{\\beta}{x}\\) ⇒ \\(\\dfrac{dy}{dx}\\cdot\\dfrac{x}{y} = \\beta\\). ∎</div>
    <p>Quando o enunciado fala em efeitos <b>percentuais</b> (“10% mais diversidade ⇒ 4% mais produtividade”), os pesquisadores devem aplicar o <b>logaritmo neperiano</b> nas variáveis antes da regressão.</p>
    <div class="trap"><b>Viés de variável omitida (questão de prova):</b> salário = a + b·escolaridade. A <b>habilidade</b> aumenta o salário (mais produtivo) e também a escolaridade (estudar é mais fácil para quem é hábil). Como a habilidade ficou de fora, o b estimado captura parte do efeito dela ⇒ <b>viés positivo</b> (superestima o efeito da educação). Mesmo que estudar não afetasse o salário, veríamos correlação positiva!</div>
  </section>

  <section class="sec art">
    <h3><span class="n">5</span> Elasticidade e receita <span class="tag">Complemento</span></h3>
    <div class="two"><div class="figslot" data-fig="el_linear"></div><div>
      <p>Numa demanda linear a <b>inclinação é constante, mas a elasticidade não</b>: \\(\\varepsilon = -b\\,P/Q\\) vai de 0 (no eixo Q) a −∞ (no eixo P), passando por −1 no ponto médio.</p>
      <ul><li>Demanda <b>elástica</b>: subir o preço <b>reduz</b> a receita P·Q.</li><li>Demanda <b>inelástica</b>: subir o preço <b>aumenta</b> a receita.</li></ul>
      <p class="muted">Útil no Tema 6: o monopolista nunca opera no trecho inelástico (lá, a RM é negativa).</p>
    </div></div>
  </section>`,
  pegadinhas: [
    "Elasticidade é % sobre %: −0,25 significa 0,25% (não 0,25 unidade) para cada 1% no preço.",
    "Não confunda elasticidade-renda com elasticidade-preço (canetinhas: 0,25 é renda).",
    "|ε| < 1 é INELÁSTICA (a quantidade reage menos que o preço).",
    "Em y = a + bx, b NÃO é elasticidade; só em ln y = α + β ln x.",
    "A demanda de um único produtor é MAIS elástica que a de mercado.",
    "Demanda por gasolina é mais elástica no LONGO prazo.",
    "Inclinação depende das unidades; elasticidade é adimensional."
  ],
  cards: [
    ["Elasticidade-preço da demanda", "\\(\\varepsilon = \\dfrac{\\Delta\\%Q}{\\Delta\\%P} = \\dfrac{dQ}{dP}\\cdot\\dfrac{P}{Q}\\)"],
    ["ε = −0,3 (gasolina): leitura", "Preço +1% ⇒ quantidade demandada −0,3%. Demanda inelástica."],
    ["Demanda elástica", "|ε| > 1: a quantidade varia mais (em %) do que o preço."],
    ["Por que elasticidade e não inclinação?", "A inclinação depende das unidades (R$, US$, litros); a elasticidade é adimensional."],
    ["Elasticidade-renda 2,5 (luxo)", "Renda +1% ⇒ demanda +2,5%."],
    ["Elasticidade cruzada > 0", "Bens substitutos."],
    ["Elasticidade cruzada < 0", "Bens complementares."],
    ["Regressão para obter elasticidade", "ln(y) = α + β·ln(x): β é a elasticidade."],
    ["MQO", "Escolhe a reta que minimiza a soma dos quadrados dos erros (distâncias verticais)."],
    ["Viés por habilidade omitida", "Habilidade ↑ salário e ↑ escolaridade ⇒ b de salário × escolaridade fica superestimado (viés positivo)."],
    ["Elasticidade intergeracional 0,5", "Pais com renda 100% maior ⇒ filhos com renda, em média, 50% maior."],
    ["Demanda mais elástica quando…", "Há mais substitutos próximos, mais tempo para ajuste, é o produto de um produtor individual."]
  ]
},
/* ============================================================ TEMA 3 */
{
  id: "Tema 3",
  cor: "#f472b6",
  titulo: "Produção e Custos",
  cap: "Caps. 4–5 Marchon",
  tema: "Custo de oportunidade, CF, CV, CT, médias, custo marginal e curto × longo prazo",
  lab: "custos",
  resumo: `
  <div class="tldr"><b>Em uma frase:</b> para decidir, use o <b>custo econômico</b> (todos os insumos ao seu custo de oportunidade). Com ganhos de especialização no início e <b>rendimentos marginais decrescentes</b> depois, o custo marginal (CM) tem formato de U e <b>corta o CVM e o CTM nos seus pontos de mínimo</b>.</div>

  <section class="sec">
    <h3><span class="n">1</span> Custo de oportunidade e custo econômico</h3>
    <p><b>Custo de oportunidade</b> é a <b>melhor alternativa de que se abre mão</b> ao dedicar um recurso a um empreendimento.</p>
    <div class="ex"><b>Virar motorista de aplicativo?</b> Receita: $200/dia. Combustível: $80. Depreciação, lavagens, seguro: $50. Com o mesmo tempo e esforço, ganharia $150 em outra ocupação.<br>
      Custo econômico = 80 + 50 + <b>150</b> = 280 ⇒ lucro econômico = 200 − 280 = <b class="no">−80</b>. <b>Não vale a pena</b> (mesmo com “lucro contábil” de 70).</div>
    <p>Mesmo raciocínio para o capital próprio: se suas economias rendem a <b>Selic</b> (13,75% a.a. no exemplo), esse rendimento perdido é custo do negócio.</p>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Produção: produto marginal do trabalho</h3>
    <p>Confeitaria de delivery com instalações, 1 forno e 1 veículo <b>fixos</b>:</p>
    <table class="t sm"><thead><tr><th>Funcionários (L)</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead>
      <tbody><tr><td>Bolos por dia (q)</td><td>0</td><td>1</td><td>5</td><td>7</td><td>8</td></tr>
      <tr class="hl"><td>Produto marginal (PML)</td><td>—</td><td>1</td><td><b>4</b></td><td>2</td><td>1</td></tr></tbody></table>
    <div class="grid2">
      <div class="box"><b class="ok">Ganhos de especialização</b>: no início, o PML <b>cresce</b> (o 2º funcionário rende mais que o 1º, pois cada um se especializa).</div>
      <div class="box"><b class="no">Rendimentos marginais decrescentes</b>: aumentando o trabalho com os outros insumos fixos, o PML eventualmente <b>cai</b> ⇒ para cada bolo extra é preciso cada vez mais trabalho ⇒ o custo <b>cresce cada vez mais rápido</b>.</div>
    </div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> As medidas de custo</h3>
    <div class="grid3">
      <div class="box"><b>CF — custo fixo</b><br>Insumos fixos no curto prazo; pago mesmo se q = 0 (custo afundado, <i>sunk cost</i>).</div>
      <div class="box"><b>CV — custo variável</b><br>Muda com a quantidade produzida.</div>
      <div class="box"><b>CT = CF + CV</b></div>
      <div class="box"><b>CFM = CF/q</b><br>Sempre decrescente (diluição).</div>
      <div class="box"><b>CVM = CV/q</b></div>
      <div class="box"><b>CTM = CT/q = CVM + CFM</b></div>
    </div>
    <p class="f big">\\(CM(q) = \\dfrac{\\Delta CT}{\\Delta q} \\;\\xrightarrow{\\;\\Delta q\\to 0\\;}\\; \\dfrac{dCT}{dq}\\)</p>
    <p>Como o CF não muda com q, \\(CM = dCV/dq\\): <b>o custo fixo não afeta o custo marginal</b> (nem o CVM).</p>
    <div class="two"><div class="figslot" data-fig="cu_bolo"></div><div>
      <table class="t sm"><thead><tr><th>q</th><th>CT</th><th>CVM</th><th>CTM</th><th>CM</th></tr></thead><tbody>
        <tr><td>1</td><td>214</td><td>60</td><td>214</td><td>60</td></tr><tr><td>2</td><td>250</td><td>48</td><td>125</td><td>36</td></tr>
        <tr><td>3</td><td>280</td><td>42</td><td>93,3</td><td>30</td></tr><tr class="hl"><td>4</td><td>322</td><td><b>42</b></td><td>80,5</td><td>42</td></tr>
        <tr><td>5</td><td>380</td><td>45,2</td><td>76</td><td>58</td></tr><tr class="hl"><td>6</td><td>456</td><td>50,3</td><td><b>76</b></td><td><b>76</b></td></tr>
        <tr><td>7</td><td>552</td><td>56,9</td><td>78,9</td><td>96</td></tr><tr><td>9</td><td>815</td><td>73,4</td><td>90,6</td><td>145</td></tr></tbody></table>
      <p class="note">Planilha da aula (CF = 154). Mín CVM = 42; mín CTM = 76 com CM = 76 em q = 6.</p>
    </div></div>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Por que o CM corta o CTM no mínimo?</h3>
    <p>Intuição: se o custo da próxima unidade (CM) é menor que a média, ele <b>puxa a média para baixo</b>; se é maior, <b>puxa para cima</b>. A média para de cair exatamente quando CM = CTM.</p>
    <div class="ex">\\(\\dfrac{dCTM}{dq} = \\dfrac{d}{dq}\\Big(\\dfrac{CT(q)}{q}\\Big) = \\dfrac{CM(q)\\,q - CT(q)}{q^2} = 0 \\;\\Rightarrow\\; CM(q) = \\dfrac{CT(q)}{q} = CTM(q)\\)</div>
    <div class="ex"><b>Estilo prova:</b> \\(CT(q) = 2q^2 + 800\\) ⇒ \\(CM = 4q\\), \\(CVM = 2q\\), \\(CTM = 2q + 800/q\\). Mínimo: \\(2 - 800/q^2 = 0 \\Rightarrow q = 20\\), \\(CTM(20) = 80\\). Confere: CM(20) = 80. ✔<br>
      Café (prova 2025): \\(CT = 1800q^2 + 18\\) ⇒ \\(CTM = 1800q + 18/q\\) ⇒ \\(q = 0{,}1\\) e CTM mín = <b>360</b>.</div>
  </section>

  <section class="sec">
    <h3><span class="n">5</span> Curto prazo × longo prazo</h3>
    <div class="grid2">
      <div class="box"><b>Curto prazo</b>: período em que <b>pelo menos um insumo está fixo</b> ⇒ existe custo fixo.</div>
      <div class="box"><b>Longo prazo</b>: tempo suficiente para alterar <b>todos</b> os insumos ⇒ <b>não há custo fixo</b>. Mas se decidir produzir q &gt; 0, vai precisar de um lugar (custo “quase-fixo”).</div>
    </div>
    <p>Simplificação usada nas questões: as curvas de custo de curto e longo prazo são <b>iguais para q &gt; 0</b>; só diferem em q = 0 (no LP, CT(0) = 0).</p>
  </section>`,
  pegadinhas: [
    "Lucro econômico desconta o custo de oportunidade (tempo, capital). Lucro contábil positivo pode ser prejuízo econômico.",
    "O custo fixo NÃO afeta o custo marginal nem o CVM — só o CTM e o CFM.",
    "O CM corta CVM e CTM nos seus MÍNIMOS (não nos máximos).",
    "Rendimentos marginais decrescentes: o produto marginal cai quando se aumenta um insumo mantendo os outros fixos — por isso o CM sobe.",
    "No longo prazo não existe custo fixo (todos os insumos são variáveis).",
    "CTM − CVM = CFM, que diminui com q: as curvas de CTM e CVM se aproximam."
  ],
  cards: [
    ["Custo de oportunidade", "A melhor alternativa de que se abre mão ao dedicar um recurso a um empreendimento."],
    ["Custo econômico", "Todos os insumos avaliados a preço de mercado ou custo de oportunidade (inclui seu tempo e capital)."],
    ["Uber: receita 200, gastos 80 + 50, alternativa 150", "Lucro econômico = 200 − 280 = −80 ⇒ não vale a pena."],
    ["Custo marginal", "\\(CM = dCT/dq\\): custo de produzir uma unidade a mais."],
    ["CTM", "\\(CTM = CT/q = CVM + CFM\\)"],
    ["Onde o CM corta o CTM?", "No mínimo do CTM (e também no mínimo do CVM)."],
    ["Produto marginal do trabalho", "Produção extra de um trabalhador a mais. Bolos: 1, 4, 2, 1."],
    ["Rendimentos marginais decrescentes", "Com outros insumos fixos, cada unidade extra do insumo variável acrescenta cada vez menos ⇒ custo cresce cada vez mais rápido."],
    ["Curto prazo", "Pelo menos um insumo fixo ⇒ há custo fixo."],
    ["Longo prazo", "Todos os insumos variáveis ⇒ não há custo fixo."],
    ["CT = 2q² + 800: mínimo do CTM", "q = 20, CTM = 80 (= CM)."],
    ["CT = 1800q² + 18: mínimo do CTM", "q = 0,1 e CTM = 360."]
  ]
},
/* ============================================================ TEMA 4 */
{
  id: "Tema 4",
  cor: "#fbbf24",
  titulo: "Mercados Competitivos",
  cap: "Cap. 6 Marchon",
  tema: "p = CM, suspender × sair, oferta de mercado e equilíbrio de longo prazo",
  lab: "compet",
  resumo: `
  <div class="tldr"><b>Em uma frase:</b> a empresa competitiva é <b>tomadora de preço</b> (RM = p) e produz onde <b>p = CM</b>. No curto prazo ela só para se p &lt; mín CVM; no longo prazo sai se p &lt; mín CTM. Entrada e saída levam o preço ao <b>mínimo do CTM</b>: <b>lucro econômico zero</b> e p = CM = CTM.</div>

  <section class="sec">
    <h3><span class="n">1</span> O que é um mercado (perfeitamente) competitivo</h3>
    <div class="grid3">
      <div class="box">Vários vendedores e compradores, cada um <b>pequeno</b> em relação ao mercado.</div>
      <div class="box">Produtos <b>idênticos</b>.</div>
      <div class="box"><b>Livre entrada</b> (e saída) de empresas.</div>
    </div>
    <p>Logo, um produtor sozinho não altera o preço de equilíbrio: é <b>tomador de preço</b>. Ex.: produtos agrícolas (já Sabesp e EDP são monopólios). Objetivo da empresa, em qualquer estrutura: <b>maximizar o lucro</b> = RT − CT.</p>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Quanto produzir: p = CM</h3>
    <p class="f big">\\(\\max_q\\; RT(q) - CT(q) \\;\\Rightarrow\\; \\dfrac{dRT}{dq} = \\dfrac{dCT}{dq} \\;\\Rightarrow\\; RM(q) = CM(q)\\)</p>
    <p>Na competição \\(RT = p\\cdot q\\) com p dado ⇒ \\(RM = p\\). Logo a empresa produz onde <b>p = CM(q)</b> (no ramo crescente do CM).</p>
    <div class="ex"><b>Confeitaria a p = 145:</b> produz q = 9 (CM(9) = 145). Lucro = 145×9 − 815 = <b>490</b> = (145 − 90,56)×9: o retângulo “(p − CTM) × q”.</div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> Suspender (curto prazo) × sair (longo prazo)</h3>
    <div class="grid2">
      <div class="box"><b>Curto prazo — suspende se p &lt; CVM</b><br>Se parar, perde o CF: lucro(0) = −CF. Produzindo: RT − CV − CF. Suspende se RT − CV − CF &lt; −CF ⇔ RT &lt; CV ⇔ <b>p &lt; CVM</b>. “Se o preço não cobre nem o custo variável por unidade, não vale a pena produzir.”</div>
      <div class="box"><b>Longo prazo — sai se p &lt; CTM</b><br>Sem custos fixos, sai se lucro &lt; 0 ⇔ RT &lt; CT ⇔ <b>p &lt; CTM</b>.</div>
    </div>
    <div class="grid2">
      <div class="box"><b>Oferta da empresa no CP</b>: p = CM(q) somente se p ≥ CVM<sub>CP</sub>(q) — o CM acima do mínimo do CVM.</div>
      <div class="box"><b>Oferta da empresa no LP</b>: p = CM(q) somente se p ≥ CTM<sub>LP</sub>(q) — o CM acima do mínimo do CTM.</div>
    </div>
    <table class="t sm"><thead><tr><th>Preço (planilha)</th><th>q</th><th>Lucro</th><th>Curto prazo</th><th>Longo prazo</th></tr></thead><tbody>
      <tr><td>145 (muito favorável)</td><td>9</td><td class="ok">+490</td><td>produz</td><td>fica; empresas entram</td></tr>
      <tr><td>96 (favorável)</td><td>7</td><td class="ok">+120</td><td>produz</td><td>fica; empresas entram</td></tr>
      <tr class="hl"><td>76 (= mín CTM)</td><td>6</td><td>0</td><td>produz</td><td>fica (equilíbrio de LP)</td></tr>
      <tr><td>58 (muito desfavorável)</td><td>5</td><td class="no">−90</td><td>produz (−90 &gt; −154)</td><td><b>sai</b></td></tr>
      <tr><td>42 (= mín CVM)</td><td>4</td><td class="no">−154</td><td>indiferente</td><td>sai</td></tr>
    </tbody></table>
    <div class="ex"><b>Questão de prova (Reforma Tributária).</b> \\(CT_{CP} = 2q^2 + 800\\). \\(CM = 4q\\), \\(CVM = 2q\\). Como 4q ≥ 2q para todo q ≥ 0, a oferta de CP é <b>p = 4q para qualquer q ≥ 0</b> (alternativa c). No LP: p = 4q só para p ≥ mín CTM = 80 (q ≥ 20).</div>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Oferta de mercado</h3>
    <p>Ao preço p, a quantidade ofertada no mercado é a <b>soma</b> do que cada empresa oferta: \\(Q(p) = \\sum_{j=1}^{J} q_j(p)\\) — a <b>soma horizontal</b> de segmentos das curvas de CM. Cada ponto da curva de oferta de mercado mostra o custo adicional que o setor incorre para produzir a n-ésima unidade.</p>
    <div class="trap"><b>Se cada CM sobe A, a soma horizontal sobe A.</b> Um choque de custo de A por unidade desloca a O_CP de mercado <b>verticalmente para cima em A</b>.</div>
  </section>

  <section class="sec">
    <h3><span class="n">5</span> Equilíbrio de longo prazo</h3>
    <div class="chain lbl" data-lbl="Lucro &gt; 0"><span>empresas entram</span><span>O_CP → direita</span><span>preço cai</span><span>até p = mín CTM</span></div>
    <div class="chain lbl" data-lbl="Lucro &lt; 0"><span>empresas saem</span><span>O_CP → esquerda</span><span>preço sobe</span><span>até p = mín CTM</span></div>
    <p>No equilíbrio de LP: p = CTM (lucro zero, por entrada/saída) e p = CM (maximização) ⇒ <b>p = CM = CTM</b> ⇒ cada empresa produz no <b>mínimo do CTM</b> (cada unidade ao menor custo médio possível). Com empresas iguais, a <b>oferta de longo prazo é horizontal</b> no mínimo do CTM.</p>
    <div class="figslot" data-fig="co_lp"></div>
  </section>

  <section class="sec warn">
    <h3><span class="n">6</span> A questão de 10 pontos: dois gráficos, curto e longo prazo</h3>
    <p>Caiu nas duas provas de 2025 (Reforma Tributária; feijão de sequeiro) e nos exercícios das aulas (El Niño; bets). Veja o <a href="#/discursiva">roteiro completo e as respostas-modelo</a>.</p>
    <div class="figslot" data-fig="co_bets"></div>
    <div class="model"><p><b>Resposta-modelo (bets reduzem a renda para o varejo):</b> Inicialmente o mercado está no equilíbrio de longo prazo, nos pontos 1. Com menos renda, para cada preço a demanda é menor (movimento A). No curto prazo, o novo equilíbrio é o ponto 2: <b>preço e quantidade menores</b>. No gráfico da empresa, o custo por unidade excede o preço (seta vermelha): há <b>prejuízo</b>. À medida que se livram dos custos fixos, empresas <b>saem</b>, até a O_CP cruzar a nova demanda no preço de LP (ponto 3, movimento B). Comparado ao início: <b>quantidade menor, mesmo preço, menos empresas</b>.</p></div>
    <table class="t sm"><thead><tr><th>Choque</th><th>Curto prazo</th><th>Longo prazo</th><th>Nº de empresas</th></tr></thead><tbody>
      <tr><td>Demanda ↓ (bets)</td><td>P ↓, Q ↓, prejuízo</td><td>P = inicial, Q ↓</td><td>↓</td></tr>
      <tr><td>Demanda ↑ (Desenrola)</td><td>P ↑, Q ↑, lucro</td><td>P = inicial, Q ↑</td><td>↑</td></tr>
      <tr><td>Custo ↑ em A (El Niño)</td><td>P ↑ (menos que A), Q ↓, prejuízo</td><td>P ↑ exatamente A, Q ↓</td><td>↓</td></tr>
      <tr><td>Custo ↓ em A (Reforma Tributária)</td><td>P ↓ (menos que A), Q ↑, lucro</td><td>P ↓ exatamente A, Q ↑</td><td>↑</td></tr>
      <tr><td>Menos terra de sequeiro (feijão)</td><td>P ↑, Q ↓, lucro dos irrigados</td><td>P e Q = iniciais</td><td>irrigados ↑</td></tr>
    </tbody></table>
  </section>

  <section class="sec art">
    <h3><span class="n">7</span> Questão numérica (Reforma Tributária)</h3>
    <div class="ex">\\(CT_{LP} = 2q^2 + 800\\) (q &gt; 0), demanda \\(Q_D = 1030 - 0{,}2p\\). A isenção reduz o custo em <b>30 por unidade</b>: \\(CT = 2q^2 + 800 - 30q\\).<br>
    Novo CTM = \\(2q + 800/q - 30\\) ⇒ mínimo em q = 20 (o deslocamento constante não muda o ponto de mínimo) ⇒ <b>p de LP = 80 − 30 = 50</b>.<br>
    Quantidade de LP: \\(Q_D(50) = 1030 - 10 = 1020\\). Cada empresa produz 20 ⇒ <b>1020/20 = 51 empresas</b>.<br>
    EC = (5150 − 50)·1020/2 = 2.601.000 (a demanda zera em p = 5150).</div>
  </section>`,
  pegadinhas: [
    "No CP a empresa suspende se p < mín CVM (e não CTM). Com CVM ≤ p < CTM ela produz COM prejuízo, porque perde menos que o custo fixo.",
    "No equilíbrio de LP o lucro ECONÔMICO é zero — os insumos (inclusive o capital) estão sendo remunerados ao custo de oportunidade.",
    "Choque de demanda num setor de custo constante: no LP o preço volta ao mínimo do CTM; só quantidade e nº de empresas mudam.",
    "Choque de custo de A por unidade: no LP o preço muda exatamente A; no CP, muda menos que A.",
    "Não esqueça de nomear a curva de oferta de LONGO prazo (horizontal) e de dizer o que acontece com o NÚMERO de empresas.",
    "Os dois gráficos ficam lado a lado, na mesma altura: os preços são os mesmos nos dois eixos verticais.",
    "Um deslocamento constante no CTM (−30 por unidade) não muda a quantidade que minimiza o CTM."
  ],
  cards: [
    ["Tomador de preço", "Empresa pequena demais para alterar o preço: RM = p."],
    ["Regra de maximização de lucro", "RM(q) = CM(q). Na competição: p = CM(q)."],
    ["Suspende a produção no CP se…", "p < CVM (o preço não cobre nem o custo variável por unidade)."],
    ["Sai do mercado no LP se…", "p < CTM (prejuízo)."],
    ["Oferta da empresa no CP", "Trecho da curva de CM acima do mínimo do CVM."],
    ["Oferta da empresa no LP", "Trecho da curva de CM acima do mínimo do CTM."],
    ["Oferta de mercado", "Soma horizontal das ofertas (segmentos de CM) das empresas."],
    ["Equilíbrio de LP competitivo", "p = CM = CTM mínimo; lucro econômico zero; nº de empresas estável."],
    ["Lucro > 0 no CP leva a…", "Entrada de empresas ⇒ O_CP para a direita ⇒ preço cai até o mín CTM."],
    ["Prejuízo no CP leva a…", "Saída de empresas ⇒ O_CP para a esquerda ⇒ preço sobe até o mín CTM."],
    ["Oferta de LP (empresas iguais)", "Horizontal no nível do mínimo do CTM."],
    ["Custo cai 30/unid. com CT = 2q² + 800 e Qd = 1030 − 0,2p", "p LP = 50; Q = 1020; 51 empresas."]
  ]
},
/* ============================================================ TEMA 5 */
{
  id: "Tema 5",
  cor: "#a78bfa",
  titulo: "Eficiência e Impostos",
  cap: "Cap. 7 Marchon",
  tema: "Excedente total, mão invisível, redistribuição, falhas de mercado e peso morto",
  lab: "efic",
  resumo: `
  <div class="tldr"><b>Em uma frase:</b> no equilíbrio de longo prazo competitivo, (i) o lucro econômico é zero, (ii) cada unidade é produzida ao menor custo médio possível e (iii) o <b>excedente total é máximo</b> — todos os ganhos de troca são explorados. Mas os mercados <b>não garantem</b> distribuição justa nem eficiência quando há <b>falhas de mercado</b>.</div>

  <section class="sec">
    <h3><span class="n">1</span> A quantidade eficiente</h3>
    <div class="two"><div class="figslot" data-fig="ef_exc"></div><div>
      <p><b class="c2">Excedente do consumidor</b> = valor máximo que está disposto a pagar − valor que de fato paga.</p>
      <p><b class="c1">Excedente do produtor</b> = valor que recebe − custo de produção da unidade (o <b>custo marginal</b>, o custo extra de produzir aquela unidade).</p>
      <p><b>Excedente total</b> = área entre a demanda e a oferta, até Q. É máximo em <b>Q* = 16</b>: qualquer outra quantidade gera excedente menor ⇒ <b>quantidade eficiente</b>.</p>
      <p class="note">Exemplo dos slides: P* = 220, Q* = 16 ⇒ EC = EP = 1.600, ET = 3.200.</p>
    </div></div>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> A mão invisível… e seus limites</h3>
    <p class="quote">“Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos o nosso jantar, mas da consideração que eles têm pelos seus próprios interesses.” <span>Adam Smith, A Riqueza das Nações (1776)</span></p>
    <p>Indivíduos buscando o próprio interesse, sem coordenação central, geram um resultado com muitas características positivas para a sociedade. Os mercados coordenam a produção de forma descentralizada; se algo muda, preços se ajustam e um novo equilíbrio surge.</p>
    <div class="pc">
      <div class="pro"><b>O que os mercados fazem bem</b><ul><li>Organizam a produção de milhões de pessoas de forma razoavelmente eficiente.</li><li>Livre comércio e competição geram ganhos líquidos para a sociedade (Piketty, <i>O Capital no século XXI</i>).</li></ul></div>
      <div class="con"><b>O que não garantem</b><ul><li>Que <b>cada indivíduo</b> ganhe ⇒ papel do governo de <b>redistribuir</b>.</li><li>Eficiência na presença de <b>falhas de mercado</b> (poluir um rio para produzir tecido; uma empresa sozinha não banca medidas custosas — seria engolida pela concorrência ⇒ regulação).</li></ul></div>
    </div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> Tributação e desigualdade no Brasil</h3>
    <ul>
      <li>Estudo do EU Tax Observatory (2025): a alíquota efetiva <b>cai</b> no topo da distribuição. Isenções e lacunas fiscais; arrecadação baseada fortemente em <b>impostos sobre o consumo</b>.</li>
      <li>Ipea (2024): alíquota efetiva média do 1% mais rico = 13,6%; dos 153 mil do topo = 13,2%; de quem ganha R$ 26 milhões/ano = 12,9% ⇒ tributação <b>regressiva</b> nessas faixas (V na prova de 2025).</li>
      <li>Benefícios fiscais devem superar R$ 900 bilhões em 2026, dos quais quase R$ 620 bilhões seriam “privilégios”.</li>
    </ul>
    <div class="extra"><b>Regressivo × progressivo:</b> regressivo = a alíquota efetiva <b>cai</b> quando a renda sobe; progressivo = <b>sobe</b> com a renda.</div>
  </section>

  <section class="sec art">
    <h3><span class="n">4</span> Impostos: incidência e peso morto <span class="tag">Complemento</span></h3>
    <div class="two"><div class="figslot" data-fig="ef_tax"></div><div>
      <p>Um imposto de T por unidade cria uma <b>cunha</b>: o consumidor paga Pc, o produtor recebe Ps = Pc − T, e a quantidade cai de 16 para Qt.</p>
      <ul>
        <li><b>Incidência</b>: quem paga mais é o lado <b>mais inelástico</b> — não importa quem recolhe ao governo.</li>
        <li><b>Peso morto</b>: as trocas que deixam de acontecer (triângulo vermelho). Com T = 100: Qt = 12, Pc = 270, Ps = 170, arrecadação 1.200, peso morto = 100×4/2 = <b>200</b>.</li>
        <li>Dobrar o imposto (T = 200) ⇒ Qt = 8 e peso morto = 800: <b>quadruplica</b>.</li>
      </ul>
    </div></div>
  </section>`,
  pegadinhas: [
    "Eficiente = maximiza o excedente TOTAL; não significa distribuição justa.",
    "Excedente do produtor usa o CUSTO MARGINAL de cada unidade (não o custo médio).",
    "Produzir MAIS que o equilíbrio também gera peso morto (unidades que custam mais do que valem).",
    "Alíquota efetiva que cai com a renda = tributação REGRESSIVA.",
    "Mercados competitivos não garantem eficiência com falhas de mercado (externalidades, poder de mercado, informação assimétrica).",
    "A incidência de um imposto depende das elasticidades, não de quem o recolhe legalmente."
  ],
  cards: [
    ["Três propriedades do equilíbrio de LP competitivo", "(i) lucro econômico zero; (ii) produção ao menor custo médio; (iii) excedente total máximo."],
    ["Quantidade eficiente", "A que maximiza o excedente total: todos os ganhos de troca são explorados."],
    ["Excedente total no gráfico", "Área entre a curva de demanda e a de oferta, de 0 até Q."],
    ["Mão invisível", "Cada um buscando o próprio interesse, coordenado pelos preços, promove o interesse da sociedade (Adam Smith, 1776)."],
    ["O que os mercados não garantem", "Que cada indivíduo ganhe (redistribuição) e eficiência quando há falhas de mercado."],
    ["Tributação regressiva", "Alíquota efetiva cai à medida que a renda aumenta."],
    ["Peso morto", "Perda de excedente total por trocas que deixam de acontecer (ou por trocas que destroem valor)."],
    ["Incidência de imposto", "Recai mais sobre o lado mais inelástico do mercado."],
    ["Peso morto × tamanho do imposto", "Cresce com o quadrado: dobrar o imposto ≈ quadruplica o peso morto."]
  ]
},
/* ============================================================ TEMA 6 */
{
  id: "Tema 6",
  cor: "#f87171",
  titulo: "Poder de Mercado",
  cap: "Cap. 8 Marchon",
  tema: "Monopólio, receita marginal, peso morto, monopólio natural e regulação",
  lab: "mono",
  resumo: `
  <div class="tldr"><b>Em uma frase:</b> quem tem poder de mercado enfrenta demanda <b>negativamente inclinada</b>, então para vender mais precisa baixar o preço de todas as unidades: a <b>receita marginal fica abaixo da demanda</b>. Produz onde <b>RM = CM</b>, com <b>preço maior e quantidade menor</b> que o eficiente (p = CM) ⇒ <b>peso morto</b>.</div>

  <section class="sec">
    <h3><span class="n">1</span> Monopólio e de onde vem o poder</h3>
    <div class="grid3"><div class="box">Uma <b>única</b> empresa</div><div class="box">Sem <b>substitutos próximos</b></div><div class="box"><b>Barreiras à entrada</b></div></div>
    <p>Exemplos: EDP e Sabesp, linhas de metrô, rodovias, pontes. Big Techs (Amazon, Microsoft, Meta): <b>efeitos de rede</b> — um produto vale mais quanto mais usuários tem (mais vendedores na Amazon atraem mais compradores, e vice-versa) ⇒ mercados muito concentrados (“o vencedor leva tudo”).</p>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Receita marginal e a regra RM = CM</h3>
    <p>A empresa não pode vender qualquer quantidade ao preço que quiser: está restrita aos pares (q, p) da demanda. \\(RT(q) = q \\times p(q)\\).</p>
    <p class="f big">\\(p(q) = a - bq \\;\\Rightarrow\\; RT = aq - bq^2 \\;\\Rightarrow\\; RM(q) = a - 2bq\\)</p>
    <p>Para demanda linear, a RM tem o <b>mesmo intercepto</b> e o <b>dobro da inclinação</b>.</p>
    <div class="two"><div class="figslot" data-fig="mo_agua"></div><div>
      <div class="ex"><b>Companhia de água</b>: \\(p = 56 - 2{,}5q\\), \\(CT = q + 100\\).<br>
      \\(RM = 56 - 5q\\), \\(CM = 1\\) ⇒ \\(56 - 5q = 1 \\Rightarrow q = 11\\) milhões de m³.<br>
      Preço na demanda: \\(p(11) = 56 - 27{,}5 = 28{,}5\\).<br>
      Lucro = 28,5×11 − 111 = <b>202,5</b>.<br>
      Eficiente: p = CM = 1 ⇒ q = 22. Peso morto = (28,5 − 1)(22 − 11)/2 = <b>151,25</b>.</div>
    </div></div>
    <div class="trap"><b>Erro clássico:</b> achar q por RM = CM e esquecer de levar q à <b>demanda</b> para achar o preço. O preço vem de p(q), não da RM nem do CM!</div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> Por que é ineficiente?</h3>
    <p>Na quantidade de máximo lucro há pessoas dispostas a pagar <b>mais</b> por unidades extras do que custaria produzi-las (p &gt; CM). Há espaço para aumentar o excedente total ⇒ <b>ônus do poder de mercado</b> (perda social, peso morto, <i>deadweight loss</i>).</p>
    <div class="ex"><b>Outro exemplo:</b> \\(p = 20 - q\\), \\(CT = 0{,}2q^2 + 3{,}2q + 50\\). RM = 20 − 2q; CM = 0,4q + 3,2 ⇒ q = 7, p = 13 (CM(7) = 6). Eficiente: 20 − q = 0,4q + 3,2 ⇒ q = 12, p = 8. <b>Peso morto = (13 − 6)(12 − 7)/2 = 17,5</b>.</div>
    <p>O que fazer? <b>Lei da Concorrência</b> (Sistema Brasileiro de Defesa da Concorrência): análise de fusões, aquisições, cartéis, acordos de preços. Na Europa, o <b>Digital Markets Act</b> multou o Google em US$ 1 bi por favorecer seus serviços na Google Play.</p>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Monopólio natural e regulação</h3>
    <p><b>Monopólio natural</b>: uma empresa atende todo o mercado a custo menor do que duas ou mais. Típico com custo fixo alto e CTM <b>decrescente</b> (água: CTM = 1 + 100/q). Dividir o mercado só duplicaria o custo fixo.</p>
    <div class="two"><div class="figslot" data-fig="mo_reg"></div><div>
    <table class="t sm"><thead><tr><th>Regra</th><th>Resultado</th></tr></thead><tbody>
      <tr><td><b>Sem regulação</b> (RM = CM)</td><td>Lucro máximo, peso morto grande.</td></tr>
      <tr><td><b>p = CM</b></td><td>Eficiente (peso morto zero), mas como CM &lt; CTM há <b>prejuízo</b> = CF ⇒ precisa de <b>subsídio</b>.</td></tr>
      <tr><td><b>p = CTM</b></td><td>Lucro zero, sem subsídio, peso morto <b>pequeno</b>. Mas regular pelo custo não dá incentivo a reduzir custos.</td></tr>
    </tbody></table>
    <p>Alternativas: <b>leilões de concessão</b> (rodovias, pontes, metrô), <b>agências reguladoras</b> (ANA, Aneel, ANAC) ou o governo operar o monopólio (risco: baixa capacidade de investir, gestão ineficiente, corrupção).</p></div></div>
    <div class="ex"><b>Questão de prova (pedágio, 2025).</b> \\(p = 85 - 6q\\), \\(CT = 168 + 5q + 2q^2\\).<br>
      RM = 85 − 12q, CM = 5 + 4q ⇒ q = 5, p = 55, lucro = 275 − 243 = <b>32</b> (alternativa a). Eficiente: 85 − 6q = 5 + 4q ⇒ q = 8, p = 37 ⇒ peso morto = (55 − 25)(8 − 5)/2 = 45; EC = (85 − 55)·5/2 = 75.<br>
      <b>Teto que maximiza q sem prejuízo e sem subsídio:</b> lucro = 80q − 8q² − 168 = 0 ⇒ q² − 10q + 21 = 0 ⇒ q = 3 ou 7 ⇒ escolhe <b>q = 7 ⇒ p = 43</b> (alternativa d). Com p = 37 (eficiente), o lucro seria −40.</div>
    <div class="ex"><b>App de mobilidade.</b> \\(p = 4 - 0{,}2q\\), \\(CT = 0{,}4q + 6{,}4\\): q = 9, p = 2,2, lucro = 9,8, peso morto = (2,2 − 0,4)(18 − 9)/2 = 8,1. Teto p = 0,4 ⇒ q = 18 e prejuízo = 6,4 ⇒ subsídio de 6,4.<br>
      Versão \\(q = 16 - 4p\\), \\(CT = q + 6{,}4\\): p = 4 − 0,25q, q = 6, p = 2,5, lucro 2,6. Melhor teto sem subsídio: p = CTM ⇒ 0,25q² − 3q + 6,4 = 0 ⇒ q ≈ 9,22 ⇒ <b>p ≈ 1,69</b>.</div>
  </section>

  <section class="sec">
    <h3><span class="n">5</span> Casos menos extremos</h3>
    <p><b>Competição monopolística</b>: várias empresas com produtos similares mas não idênticos (restaurantes). Cada uma pode subir o preço sem perder todos os clientes. (Tratado no livro.)</p>
  </section>`,
  pegadinhas: [
    "O preço do monopolista vem da DEMANDA no q onde RM = CM — não da RM.",
    "RM de demanda linear: mesmo intercepto, inclinação DOBRADA (p = 56 − 2,5q ⇒ RM = 56 − 5q).",
    "O excedente total é máximo onde p(q) = CM, não onde RM = CM.",
    "Peso morto: triângulo entre a demanda e o CM, da quantidade do monopólio até a eficiente.",
    "Monopólio natural com p = CM gera prejuízo (CM < CTM) ⇒ precisa de subsídio.",
    "O melhor teto sem subsídio é p = CTM na MAIOR quantidade que zera o lucro (a menor raiz dá o preço mais alto).",
    "Efeitos de rede tendem a gerar monopólios — e monopólios não são eficientes."
  ],
  cards: [
    ["Monopólio", "Uma empresa, sem substitutos próximos, com barreiras à entrada."],
    ["Efeitos de rede", "O produto vale mais quanto mais usuários tem ⇒ mercados muito concentrados."],
    ["Receita marginal (demanda p = a − bq)", "\\(RM = a - 2bq\\)"],
    ["Regra do monopolista", "RM = CM; o preço sai da demanda nesse q."],
    ["Água: p = 56 − 2,5q, CT = q + 100", "q = 11, p = 28,5, lucro = 202,5; eficiente q = 22; peso morto = 151,25."],
    ["Peso morto do monopólio", "Triângulo entre demanda e CM, de q_monopólio até q_eficiente."],
    ["Monopólio natural", "Uma empresa produz para todo o mercado a custo menor que duas ou mais (CTM decrescente)."],
    ["Regular com p = CM", "Peso morto zero, mas prejuízo (= CF se CM constante) ⇒ subsídio."],
    ["Regular com p = CTM", "Lucro zero, sem subsídio, peso morto pequeno; sem incentivo a reduzir custo."],
    ["Pedágio: p = 85 − 6q, CT = 168 + 5q + 2q²", "Monopólio: q = 5, p = 55, lucro 32. Teto sem prejuízo: p = 43."],
    ["Lei da Concorrência", "Estrutura o Sistema Brasileiro de Defesa da Concorrência (fusões, cartéis, acordos de preço)."]
  ]
},
/* ============================================================ TEMA 7 */
{
  id: "Tema 7",
  cor: "#22d3ee",
  titulo: "Oligopólio e Teoria dos Jogos",
  cap: "Cap. 9 Marchon",
  tema: "Dilema dos prisioneiros, estratégia dominante, Nash, Cournot e jogos repetidos",
  lab: "oligo",
  resumo: `
  <div class="tldr"><b>Em uma frase:</b> no oligopólio, poucas empresas têm consciência da sua <b>interdependência</b>: a melhor escolha de cada uma depende da escolha das outras. A teoria dos jogos organiza isso: <b>estratégia dominante</b>, <b>Equilíbrio de Nash</b> e o <b>dilema dos prisioneiros</b> (cooperar seria melhor para todos, mas não é individualmente racional).</div>

  <section class="sec">
    <h3><span class="n">1</span> Oligopólios por toda parte</h3>
    <div class="grid2">
      <div class="box">Remédios para perda de peso (GLP-1) nos EUA: Eli Lilly 58%, Novo Nordisk 42%. Uso por adultos subiu de 3% (2024) para 11% (2026); obesidade caiu de 39,9% para 36,4%.</div>
      <div class="box">Aviação doméstica: LATAM 41%, Gol 32%, Azul 27%. Aviões comerciais: Airbus e Boeing (e a Embraer subindo).</div>
      <div class="box">Bandeiras de cartão: Mastercard 52%, Visa 31–37%.</div>
      <div class="box">Telecom: Vivo 38%, Claro 33%, TIM 22%.</div>
    </div>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Dilema dos prisioneiros e estratégia dominante</h3>
    <div class="two"><div class="figslot" data-fig="ol_prec"></div><div>
      <p>Dois criminosos interrogados separadamente. Ninguém confessa: 4 anos cada. Um confessa e o outro não: 3 e 15 anos. Os dois confessam: 10 cada.</p>
      <p>Para A: se B confessa, confessar (10) &lt; não confessar (15); se B não confessa, confessar (3) &lt; não confessar (4). <b>Confessar é melhor em qualquer cenário</b> ⇒ <b>estratégia dominante</b>.</p>
      <p>Resultado: os dois confessam e pegam 10 anos — poderiam pegar 4 cooperando, mas cooperar é <b>individualmente irracional</b>.</p>
    </div></div>
    <p><b>Estratégia dominante</b>: a melhor estratégia para um jogador, <b>independentemente</b> das estratégias dos demais.</p>
    <p>Mesmo padrão em: corridas armamentistas, guerra fiscal, pesca predatória, <b>guerra de preços</b> (preço baixo é dominante: 75 cada, em vez de 100 com preço alto), corrida pela AGI.</p>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> Equilíbrio de Nash</h3>
    <p><b>Um par de estratégias em que, dada a escolha do oponente, cada um está escolhendo o que é melhor para si.</b> Ninguém se arrepende.</p>
    <div class="extra"><b>Método do sublinhado:</b> para cada estratégia do adversário, sublinhe seu melhor payoff. Célula com os dois payoffs sublinhados = Equilíbrio de Nash. Teste as 4 combinações!</div>
    <div class="ex"><b>Exercício Embraer (E) × ABDG</b> (milhões de US$):
      <table class="t sm"><thead><tr><th>E \\ ABDG</th><th>Jatos executivos</th><th>Corredor único</th></tr></thead><tbody>
        <tr><td><b>Jatos executivos</b></td><td>E: 2; ABDG: 7</td><td class="ok">E: 5; ABDG: 15 ★</td></tr>
        <tr><td><b>Corredor único</b></td><td class="ok">E: 6; ABDG: 11 ★</td><td>E: 4; ABDG: 9</td></tr></tbody></table>
      <b>Não há estratégias dominantes</b> (a melhor resposta de cada um muda conforme o outro). <b>Há dois Equilíbrios de Nash</b>: (E: jatos; ABDG: corredor único) e (E: corredor único; ABDG: jatos). O mesmo ocorre no jogo GLP-1 (orais × injetáveis).</div>
    <div class="trap">O Equilíbrio de Nash é um <b>par de estratégias</b>, não um par de payoffs. E jogo <b>não simétrico</b> exige analisar cada jogador separadamente.</div>
    <div class="ex"><b>Prova 2025 — IA relacional × funcional.</b> Lucro = receita − custo: (rel, rel) = 140 − 70 = 70 cada; (func, func) = 120 − 30 = 90 cada; quem faz relacional contra funcional: 200 − 70 = 130 e o outro 70 − 30 = 40. Relacional é <b>dominante</b> (130 &gt; 90 e 70 &gt; 40) ⇒ Nash = (rel, rel), mesmo (func, func) sendo melhor para ambos ⇒ dilema dos prisioneiros (não é “dilema dos recursos comuns”: não há recurso comum).</div>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Cartel × Cournot × concorrência <span class="tag">Provas 2025</span></h3>
    <p><b>Cournot</b>: empresas escolhem <b>quantidades</b> simultaneamente; cada uma maximiza seu lucro dada a expectativa sobre a produção das outras, e no equilíbrio as expectativas se confirmam.</p>
    <p class="f big">\\(\\pi_i = [a - b(q_i + Q_{-i})]\\,q_i - c\\,q_i \\;\\Rightarrow\\; q_i = \\dfrac{a - c - bQ_{-i}}{2b}\\)</p>
    <p class="f big">\\(n \\text{ empresas: } q = \\dfrac{a-c}{b(n+1)},\\quad P = \\dfrac{a + nc}{n+1},\\quad PM = \\dfrac{(a-c)^2}{2b(n+1)^2}\\)</p>
    <div class="ex"><b>Planos de saúde</b>: \\(p = 10 - Q/12\\), CM = 4, CF = 0 (p em mil R$/ano, Q em milhões de pessoas).
      <ul class="mini">
        <li><b>Cartel</b> (age como monopólio): lucro conjunto = 6Q − Q²/12 ⇒ 6 − Q/6 = 0 ⇒ Q = 36 (18 cada), p = 7, lucro de cada = (7 − 4)·18 = <b>54 bilhões</b>. Peso morto = (7 − 4)(72 − 36)/2 = <b>54 bilhões</b>.</li>
        <li><b>Teto que elimina o peso morto</b>: p = CM = <b>4</b> (Q = 72).</li>
        <li><b>Desvio</b>: se a empresa 2 produz 18, a 1 maximiza 4,5q₁ − q₁²/12 ⇒ q₁ = 27, Q = 45, p = <b>6,25</b>; lucros 60,75 e 40,5 ⇒ cartel instável.</li>
        <li><b>Cournot</b>: q₁ = 36 − 0,5q₂ e q₂ = 36 − 0,5q₁ ⇒ <b>q = 24 cada</b>, Q = 48, p = 6, lucro = 48 cada.</li>
        <li><b>Concorrência</b>: p = 4, Q = 72, lucro zero.</li>
      </ul></div>
  </section>

  <section class="sec">
    <h3><span class="n">5</span> Jogos repetidos: a cooperação pode se sustentar</h3>
    <p>Jogado uma vez, o dilema leva à não cooperação. Repetido <b>para sempre</b>, com a estratégia <b>gatilho</b> (coopera enquanto o outro cooperou; se alguém desviar, nunca mais coopera), cooperar pode ser ótimo.</p>
    <div class="ex"><b>Fragrâncias (prova 2025)</b>: cooperam: 9 cada; um desvia: 11,53 × 4,88; ninguém coopera: 6,75 cada. Juros de 10% ao mês.<br>
      Coopera sempre: \\(9 + 9/0{,}1 = 99\\). Desvia hoje: \\(11{,}53 + 6{,}75/0{,}1 = 79{,}03\\). Como 99 &gt; 79,03, seguir a estratégia é ótimo em todo mês ⇒ <b>há Equilíbrio de Nash em que as duas cooperam</b>. Jogado uma única vez, “não cooperar” é dominante e o único Nash é (não coopera, não coopera).</div>
    <p class="note">Valor presente de receber π todo mês, a partir do mês seguinte, para sempre = π/r.</p>
  </section>`,
  pegadinhas: [
    "Equilíbrio de Nash é um PAR DE ESTRATÉGIAS, não de payoffs.",
    "Estratégia dominante é a melhor qualquer que seja a escolha do outro; um jogo pode ter Nash sem ter estratégia dominante (Embraer, GLP-1).",
    "Um jogo pode ter mais de um Equilíbrio de Nash.",
    "No dilema dos prisioneiros, existe resultado melhor para os dois, mas ele não é equilíbrio.",
    "Jogo não simétrico: analise cada jogador separadamente.",
    "Cartel: maximize o lucro CONJUNTO (age como monopólio) e divida; desviar é tentador ⇒ instável.",
    "No jogo repetido infinitamente, juros baixos (futuro valioso) favorecem a cooperação."
  ],
  cards: [
    ["Oligopólio", "Poucas empresas concentram o mercado e têm consciência da interdependência."],
    ["Estratégia dominante", "A melhor estratégia para um jogador, independentemente do que os outros escolhem."],
    ["Equilíbrio de Nash", "Par de estratégias em que, dada a escolha do oponente, cada um escolhe o melhor para si (ninguém se arrepende)."],
    ["Dilema dos prisioneiros", "Cada um tem estratégia dominante de não cooperar; o resultado é pior para ambos do que cooperar."],
    ["Guerra de preços (100/100, 50/150, 75/75)", "Preço baixo é dominante ⇒ ambos cobram baixo (75 cada)."],
    ["Embraer × ABDG", "Sem estratégia dominante; dois Equilíbrios de Nash (cada uma num segmento diferente)."],
    ["Função de reação de Cournot", "\\(q_i = (a - c - bQ_{-i})/(2b)\\)"],
    ["Cournot com n empresas", "\\(q = (a-c)/[b(n+1)]\\), \\(P = (a+nc)/(n+1)\\)"],
    ["Planos de saúde: cartel", "Q = 36, p = 7, lucro 54 cada, peso morto 54."],
    ["Planos de saúde: Cournot", "q = 24 cada, Q = 48, p = 6, lucro 48 cada."],
    ["Estratégia gatilho", "Coopera enquanto o outro cooperou; se alguém desviar, nunca mais coopera."],
    ["Cooperação sustentável quando…", "π_c + π_c/r ≥ π_desvio + π_Nash/r."]
  ]
},
/* ============================================================ TEMA 8 */
{
  id: "Tema 8",
  cor: "#fb923c",
  titulo: "Falhas de Mercado",
  cap: "Provas 2025 · Mankiw",
  tema: "Externalidades, perigo moral, seleção adversa, tragédia dos comuns e carona",
  lab: "falhas",
  resumo: `
  <div class="tldr"><b>Por que este tema?</b> As duas provas de 2025 cobraram <b>falhas de mercado</b> (externalidade, perigo moral, seleção adversa) com textos de jornal. A chave é identificar <b>quem é afetado</b> e <b>qual informação está escondida</b>. <span class="tag">Complemento</span></div>

  <section class="sec">
    <h3><span class="n">1</span> Externalidades</h3>
    <p>A ação de um agente afeta o bem-estar de <b>terceiros que não tiveram poder de escolha</b>, e esse efeito <b>não é considerado</b> por quem decide.</p>
    <div class="two"><div class="figslot" data-fig="fm_ext"></div><div>
      <p><b>Negativa</b> (termelétrica e aquecimento global; ludopatia e bets; corrida pela AGI): <b>custo social = custo privado + custo externo</b> ⇒ curva de custo social <b>acima</b> da oferta. O mercado produz <b>demais</b>. Perda social = triângulo entre custo social e demanda, da Q eficiente até a Q de mercado.</p>
      <p><b>Positiva</b> (vacinação, educação, P&amp;D): o mercado produz <b>de menos</b>.</p>
      <p>Correções: imposto (ou subsídio) por unidade igual ao efeito externo, regulação.</p>
    </div></div>
    <div class="trap"><b>Prova 2025 (gráficos):</b> a alternativa certa tem o custo social <b>acima</b> da oferta e a perda à <b>direita</b> da quantidade eficiente. Custo social abaixo da oferta = “custo externo negativo” (errado); mexer na demanda só faz sentido com externalidade positiva.</div>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Informação assimétrica</h3>
    <div class="grid2">
      <div class="box"><b class="c1">Perigo moral</b> (risco moral, <i>moral hazard</i>)<br>Assimetria quanto ao <b>comportamento/ação</b> + <b>desalinhamento de interesses</b> entre agente e principal. O agente faz algo que o principal não observa perfeitamente.<br><i>Ex.:</i> assessor recomenda o CDB do Banco Master por pagar mais comissão (o cliente não vê o critério); plataforma que impulsiona conteúdo danoso; motorista com seguro total.</div>
      <div class="box"><b class="c3">Seleção adversa</b><br>Assimetria quanto ao <b>tipo/característica</b>. As condições atraem relativamente mais o “pior tipo” ⇒ <b>sobrerrepresentação</b> dele no equilíbrio.<br><i>Ex.:</i> investidores não distinguem plataformas criteriosas ⇒ as menos criteriosas ganham mercado; Disciplina Consciente <b>reduz</b> seleção adversa ao revelar quem é confiável.</div>
    </div>
    <div class="extra"><b>Teste rápido:</b> o problema é o que a pessoa <b>FAZ</b> (escondido)? → perigo moral. O problema é o que a pessoa/empresa <b>É</b> (escondido) e isso muda <b>quem fica</b> no mercado? → seleção adversa.</div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> Outras falhas</h3>
    <div class="grid3">
      <div class="box"><b>Tragédia dos comuns</b><br>Recurso <b>rival e de livre acesso</b>: cada um fazendo o melhor para si esgota o recurso (pesca predatória).</div>
      <div class="box"><b>Problema do carona</b> (<i>free rider</i>)<br>Usufruir de um bem público sem contribuir para o seu custeio.</div>
      <div class="box"><b>Poder de mercado</b><br>Tema 6: p &gt; CM ⇒ peso morto. Efeitos de rede favorecem monopólios.</div>
    </div>
    <div class="ex"><b>Redes sociais (prova 2025)</b>: algoritmos que priorizam engajamento juntam várias falhas — <b>externalidade negativa</b> (custo com saúde mental recai sobre a sociedade), <b>perigo moral</b> (a plataforma sabe mais sobre o algoritmo e lucra com conteúdo danoso), <b>seleção adversa</b> (sobrevivem as empresas do “pior tipo”) e <b>poder de mercado</b>. Por isso a competição intensa <b>não</b> gera resultado eficiente.</div>
    <div class="ex"><b>Banco Master (prova 2025)</b>: a competição entre plataformas <b>não</b> alinhou incentivos — quem retirava os títulos perdia clientes para quem continuava vendendo (afirmação FALSA). Regulações nos EUA e Europa exigem divulgar comissões.</div>
  </section>`,
  pegadinhas: [
    "Externalidade afeta TERCEIROS que não participaram da decisão. Se o prejuízo é do próprio cliente da transação, pense em informação assimétrica.",
    "Perigo moral = ação/comportamento oculto. Seleção adversa = tipo/característica oculta.",
    "Externalidade negativa: custo social ACIMA da oferta; mercado produz MAIS que o eficiente.",
    "Tragédia dos comuns exige recurso comum de livre acesso explorado pelos próprios usuários.",
    "Competição sozinha não corrige falhas de mercado (Banco Master, redes sociais)."
  ],
  cards: [
    ["Externalidade negativa", "Ação que gera custo a terceiros, não considerado por quem decide ⇒ produz-se demais."],
    ["Custo social", "Custo privado + custo externo."],
    ["Perigo moral", "Assimetria sobre o COMPORTAMENTO + desalinhamento de interesses entre agente e principal."],
    ["Seleção adversa", "Assimetria sobre o TIPO; o “pior tipo” fica sobrerrepresentado."],
    ["Tragédia dos comuns", "Recurso rival e de livre acesso é esgotado por cada um fazer o melhor para si."],
    ["Problema do carona", "Usufruir de um bem público sem contribuir para seu custeio."],
    ["Assessor e CDB do Master", "Perigo moral (ação oculta + comissão desalinhada)."],
    ["Plataformas menos criteriosas ganham mercado", "Seleção adversa."],
    ["Corrida pela AGI com risco de extinção", "Externalidade negativa."],
    ["Disciplina Consciente", "Reduz a assimetria de informação sobre o tipo ⇒ reduz seleção adversa na contratação."]
  ]
}
];

const FORMULAS = [
  ["Tema 1", "Equilíbrio", "\\(Q_d(P^*) = Q_s(P^*)\\)", "arroz: 5,6 − 0,2P = −1 + 2P ⇒ P* = 3"],
  ["Tema 1", "Excedente do consumidor (linear)", "\\(EC = \\tfrac{1}{2}(P_{\\max} - P^*)\\,Q^*\\)", "P_max: onde a demanda zera"],
  ["Tema 1", "Excedente do produtor (linear)", "\\(EP = \\tfrac{1}{2}(P^* - P_{\\min})\\,Q^*\\)", "P_min: onde a oferta começa"],
  ["Tema 2", "Elasticidade-preço da demanda", "\\(\\varepsilon = \\dfrac{\\Delta\\%Q}{\\Delta\\%P} = \\dfrac{dQ}{dP}\\cdot\\dfrac{P}{Q}\\)", "|ε| < 1 inelástica; > 1 elástica"],
  ["Tema 2", "Variação percentual", "\\(\\Delta\\% = \\dfrac{\\text{final} - \\text{inicial}}{\\text{inicial}}\\times 100\\%\\)", ""],
  ["Tema 2", "Elasticidade-renda", "\\(\\varepsilon_R = \\dfrac{\\Delta\\%Q}{\\Delta\\%R}\\)", "> 0 normal; > 1 luxo; < 0 inferior"],
  ["Tema 2", "Elasticidade cruzada", "\\(\\varepsilon_{AB} = \\dfrac{\\Delta\\%Q_A}{\\Delta\\%P_B}\\)", "> 0 substitutos; < 0 complementares"],
  ["Tema 2", "Regressão log-log", "\\(\\ln y = \\alpha + \\beta \\ln x\\)", "β = elasticidade"],
  ["Tema 3", "Custo total", "\\(CT = CF + CV\\)", ""],
  ["Tema 3", "Custos médios", "\\(CTM = \\dfrac{CT}{q} = CVM + CFM\\)", ""],
  ["Tema 3", "Custo marginal", "\\(CM = \\dfrac{dCT}{dq} = \\dfrac{dCV}{dq}\\)", "não depende do CF"],
  ["Tema 3", "Mínimo do CTM", "\\(CM(q) = CTM(q)\\)", "CT = aq² + F ⇒ q = √(F/a), CTM = 2√(aF)"],
  ["Tema 4", "Maximização de lucro", "\\(RM(q) = CM(q)\\)", "competição: p = CM"],
  ["Tema 4", "Suspender no curto prazo", "\\(p < \\min CVM\\)", ""],
  ["Tema 4", "Sair no longo prazo", "\\(p < \\min CTM\\)", ""],
  ["Tema 4", "Equilíbrio de LP", "\\(p = CM = \\min CTM\\)", "lucro econômico zero"],
  ["Tema 4", "Nº de empresas no LP", "\\(n = Q_D(p_{LP}) / q_{\\min CTM}\\)", "1020/20 = 51"],
  ["Tema 4", "Oferta de mercado", "\\(Q(p) = \\sum_j q_j(p)\\)", "soma horizontal"],
  ["Tema 5", "Excedente total", "\\(ET = EC + EP\\)", "máximo no equilíbrio competitivo"],
  ["Tema 5", "Peso morto de imposto (linear)", "\\(PM = \\tfrac{1}{2}\\,T\\,(Q^* - Q_T)\\)", "Complemento"],
  ["Tema 6", "Receita marginal (linear)", "\\(p = a - bq \\Rightarrow RM = a - 2bq\\)", ""],
  ["Tema 6", "Peso morto do monopólio", "\\(PM = \\tfrac{1}{2}\\,[p_m - CM(q_m)]\\,(q_e - q_m)\\)", "q_e: p(q) = CM"],
  ["Tema 6", "Teto sem subsídio", "\\(p(q) = CTM(q)\\)", "maior raiz"],
  ["Tema 7", "Função de reação (Cournot)", "\\(q_i = \\dfrac{a - c - bQ_{-i}}{2b}\\)", ""],
  ["Tema 7", "Cournot com n empresas", "\\(q = \\dfrac{a-c}{b(n+1)},\\; P = \\dfrac{a+nc}{n+1}\\)", ""],
  ["Tema 7", "Peso morto de Cournot", "\\(\\dfrac{(a-c)^2}{2b(n+1)^2}\\)", "n = 1: monopólio"],
  ["Tema 7", "Jogo repetido (gatilho)", "\\(\\pi_c + \\dfrac{\\pi_c}{r} \\ge \\pi_d + \\dfrac{\\pi_N}{r}\\)", "99 ≥ 79,03 nas fragrâncias"],
  ["Tema 8", "Custo social", "\\(CS = \\text{custo privado} + \\text{custo externo}\\)", ""]
];
