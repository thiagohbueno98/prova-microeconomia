// Conteúdo didático: resumos, flashcards, pegadinhas e formulário.
// Base: slides de GED-72 (Marchon, "Introdução à Microeconomia", caps. 1–9; Mankiw), o livro
// "Introdução à Microeconomia" (Marchon) e as provas de 2025 resolvidas.
// Blocos marcados "Complemento" vão além dos slides; blocos marcados "Livro" vêm do livro-texto.
// <div class="figslot" data-fig="nome"></div> é preenchido por FIGLIB (app.js).
// Caixas: .sig = siglas do tema · .ler = como ler o gráfico · dl.sym = significado de cada símbolo.

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
  <div class="tldr"><b>A ideia central:</b> cada comprador tem um <b>preço reserva</b> (o máximo que aceitaria pagar) e cada vendedor também (o mínimo que aceitaria receber). Se colocarmos esses preços em ordem, obtemos as curvas de <b>demanda</b> e de <b>oferta</b>. O mercado se ajusta sozinho até o <b>preço de equilíbrio</b>, onde a quantidade que as pessoas querem comprar é igual à quantidade que querem vender — e ninguém precisou saber o preço reserva de ninguém.</div>

  <section class="sec sig">
    <h3>🔤 Siglas e símbolos deste tema</h3>
    <dl class="sym">
      <dt>P</dt><dd>Preço do bem (sempre no eixo <b>vertical</b> do gráfico).</dd>
      <dt>Q</dt><dd>Quantidade (sempre no eixo <b>horizontal</b>).</dd>
      <dt>D / Q<sub>d</sub></dt><dd>Demanda / quantidade demandada (quanto os compradores querem comprar a cada preço).</dd>
      <dt>O (ou S) / Q<sub>s</sub></dt><dd>Oferta / quantidade ofertada (quanto os vendedores querem vender). “s” vem de <i>supply</i>, oferta em inglês.</dd>
      <dt>P* e Q*</dt><dd>Preço e quantidade de <b>equilíbrio</b> (o asterisco indica “de equilíbrio”).</dd>
      <dt>EC</dt><dd>Excedente do consumidor (o “lucro” de quem compra).</dd>
      <dt>EP</dt><dd>Excedente do produtor (o “lucro” de quem vende).</dd>
      <dt>ET</dt><dd>Excedente total = EC + EP.</dd>
      <dt>L e w</dt><dd>No mercado de trabalho: L = quantidade de trabalho (<i>labor</i>) e w = salário (<i>wage</i>). L<sub>D</sub> = demanda das empresas; L<sub>O</sub> = oferta dos trabalhadores.</dd>
      <dt>⇒, ↑, ↓</dt><dd>“Implica”, “sobe”, “cai”.</dd>
    </dl>
  </section>

  <section class="sec">
    <h3><span class="n">1</span> Preço reserva: de onde vêm as curvas</h3>
    <p>Pense em vender seu carro usado para comprar um zero: abaixo de certo valor “não compensa” vender. Esse valor mínimo é o seu <b>preço reserva como vendedor</b>. Para quem compra, o preço reserva é o <b>máximo</b> que está disposto a pagar — acima disso, prefere ficar sem o bem.</p>
    <div class="ex"><b>Exemplo do livro: livros usados de Cálculo I.</b> Numa turma, cada aluno que quer comprar tem um preço máximo e cada aluno que quer vender tem um preço mínimo:
      <table class="t sm"><thead><tr><th>Quantidade (nº do livro)</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th class="hl">7</th><th>8</th><th>9</th><th>10</th></tr></thead><tbody>
        <tr><td><b class="c2">Preço reserva dos compradores</b> (demanda)</td><td>120</td><td>105</td><td>90</td><td>78</td><td>66</td><td>55</td><td><b>45</b></td><td>36</td><td>27</td><td>20</td></tr>
        <tr><td><b class="c1">Preço reserva dos vendedores</b> (oferta)</td><td>15</td><td>20</td><td>25</td><td>30</td><td>35</td><td>40</td><td><b>45</b></td><td>51</td><td>58</td><td>70</td></tr></tbody></table>
      <ul class="mini">
        <li>Ordenamos os <b>compradores do que paga mais para o que paga menos</b>: isso é a curva de demanda (descendo).</li>
        <li>Ordenamos os <b>vendedores do que aceita menos para o que aceita mais</b>: isso é a curva de oferta (subindo).</li>
        <li>Se o preço estivesse em R$ 20, haveria 10 interessados em comprar e só 2 em vender: compradores disputariam os livros e o preço subiria. Se estivesse alto demais, sobrariam livros e o preço cairia.</li>
        <li>O preço para de mudar em <b>R$ 45</b>, onde 7 querem comprar e 7 querem vender: <b>P* = 45 e Q* = 7</b>.</li>
      </ul></div>
    <div class="grid2">
      <div class="box"><b class="c2">Curva de demanda</b><br>Mostra a <b>quantidade demandada</b> para <b>cada preço</b>. É <b>negativamente inclinada</b> (desce da esquerda para a direita): quanto menor o preço, mais gente tem preço reserva acima dele e entra no mercado.</div>
      <div class="box"><b class="c1">Curva de oferta</b><br>Mostra a <b>quantidade ofertada</b> para <b>cada preço</b>. É <b>positivamente inclinada</b> (sobe): quanto maior o preço, mais vendedores acham que vale a pena vender.</div>
    </div>
    <div class="grid2">
      <div class="box"><b>Preço de equilíbrio (P*)</b>: o preço em que <b>quantidade ofertada = quantidade demandada</b>.</div>
      <div class="box"><b>Quantidade de equilíbrio (Q*)</b>: a quantidade comprada e vendida ao preço de equilíbrio.</div>
    </div>
    <p><b>Quem compra no equilíbrio?</b> Só quem tem preço reserva ≥ P* (não faz sentido quem valoriza o livro em R$ 10 pagar R$ 45). <b>Quem vende?</b> Só quem tem preço reserva ≤ P* (quem valoriza seu livro em R$ 90 não o vende por R$ 45).</p>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Como achar o equilíbrio com equações</h3>
    <p>Nas provas, demanda e oferta vêm como retas. O método é sempre o mesmo:</p>
    <ol>
      <li><b>Iguale</b> a quantidade demandada à ofertada: \\(Q_d(P) = Q_s(P)\\).</li>
      <li><b>Resolva</b> para P ⇒ encontra P*.</li>
      <li><b>Substitua</b> P* em qualquer uma das duas equações ⇒ encontra Q*. (Substitua na outra para conferir.)</li>
    </ol>
    <div class="extra"><b>Para desenhar uma reta de demanda ou oferta</b>, ache onde ela toca os eixos. Em \\(Q_d = 5{,}6 - 0{,}2P\\): com P = 0, Q = 5,6 (toca o eixo horizontal); com Q = 0, \\(P = \\dfrac{5{,}6}{0{,}2} = 28\\) (toca o eixo vertical). Esse ponto em que a demanda toca o eixo P é o <b>maior preço que alguém pagaria</b> (P<sub>máx</sub>). Na oferta \\(Q_s = -1 + 2P\\), Q = 0 quando P = 0,5: abaixo de R$ 0,50 ninguém vende (P<sub>mín</sub>).</div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> Excedentes: o ganho de quem participa</h3>
    <p><b class="c2">Excedente do consumidor</b> de uma pessoa = <b>preço reserva − preço pago</b>. No exemplo dos livros, quem pagaria até R$ 120 e pagou R$ 45 ganhou R$ 75 “de presente”.</p>
    <p><b class="c1">Excedente do produtor</b> de uma pessoa = <b>preço recebido − preço reserva</b> (o custo dela). Quem aceitaria vender por R$ 15 e recebeu R$ 45 ganhou R$ 30.</p>
    <p>Somando os ganhos de todos os participantes, os excedentes viram <b>áreas no gráfico</b>:</p>
    <div class="two"><div class="figslot" data-fig="do_eq"></div><div>
      <div class="ler"><b>📊 Como ler este gráfico (arroz)</b>
        <ul>
          <li>Eixo vertical: <b>P</b> (R$/kg). Eixo horizontal: <b>Q</b> (toneladas).</li>
          <li>A reta <b class="c2">verde D</b> (demanda) desce; a reta <b class="c1">azul O</b> (oferta) sobe. Elas se cruzam no equilíbrio (Q*, P*).</li>
          <li><b class="c2">Triângulo verde (EC)</b>: fica <b>abaixo da demanda e acima da linha de P*</b>. Cada “fatia” vertical é o ganho de um comprador (o quanto aceitaria pagar menos o que pagou).</li>
          <li><b class="c1">Área azul (EP)</b>: fica <b>acima da oferta e abaixo da linha de P*</b>. Cada fatia é o ganho de um vendedor (o que recebeu menos seu custo).</li>
          <li>Excedente total = EC + EP = toda a área entre as duas retas, de 0 até Q*.</li>
        </ul></div>
    </div></div>
    <div class="ex"><b>Questão 1 do livro (resolvida em aula).</b>
      <div class="qfull"><div class="qfull-h">📝 Questão na íntegra<span class="q-src">Livro, cap. 1</span></div>
        <p class="q-txt">Suponha que as curvas de oferta e demanda por arroz em uma certa localidade, em um determinado intervalo de tempo, podem ser representadas pelas equações \\(Q_d = 5{,}6 - 0{,}2P\\) e \\(Q_s = -1 + 2P\\), onde P representa o preço do quilo do arroz em reais, Q representa a quantidade em toneladas e os subscritos d e s representam demanda e oferta, respectivamente. (Note que preços e quantidades não podem assumir valores negativos.)<br>(i) Qual o preço de equilíbrio neste mercado? (ii) Qual a quantidade de equilíbrio? (iii) No equilíbrio, qual o excedente do consumidor? (iv) No equilíbrio, qual o excedente do produtor?</p></div>
      <b>Resolução:</b>
      <ol class="mini">
        <li><b>Equilíbrio:</b> \\(5{,}6 - 0{,}2P = -1 + 2P \\Rightarrow 6{,}6 = 2{,}2P \\Rightarrow P^* = 3\\) reais/kg.</li>
        <li><b>Quantidade:</b> \\(Q^* = -1 + 2(3) = 5\\) toneladas (= 5.000 kg). Conferindo na demanda: \\(5{,}6 - 0{,}6 = 5\\). ✔</li>
        <li><b>EC:</b> é um triângulo com base Q* e altura (P<sub>máx</sub> − P*). A demanda zera em P = 28 ⇒ \\(EC = \\dfrac{(28-3)\\times 5.000}{2} =\\) <b>R$ 62.500</b>.</li>
        <li><b>EP:</b> triângulo com base Q* e altura (P* − P<sub>mín</sub>). A oferta começa em P = 0,5 ⇒ \\(EP = \\dfrac{(3-0{,}5)\\times 5.000}{2} =\\) <b>R$ 6.250</b>.</li>
      </ol>
      <p class="f big">\\(EC = \\dfrac{(P_{\\max} - P^*)\\times Q^*}{2}\\)&emsp;&emsp; \\(EP = \\dfrac{(P^* - P_{\\min})\\times Q^*}{2}\\)</p>
      <span class="muted">Por que dividir por 2? Porque é a área de um <b>triângulo</b>: base × altura ÷ 2.<br><b>Cuidado com unidades:</b> P está em R$/<b>kg</b> e Q em <b>toneladas</b> ⇒ converta Q para kg antes, senão a resposta sai 1.000 vezes menor.</span></div>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Controle de preços: teto e piso</h3>
    <p>Às vezes o governo proíbe que o preço fique no equilíbrio. Há dois tipos de controle:</p>
    <div class="grid2">
      <div><div class="figslot" data-fig="do_teto"></div>
        <div class="ler"><b>📊 Preço-teto (preço máximo)</b><br>A linha laranja horizontal é o teto (5), <b>abaixo</b> de P* = 8. Nesse preço, olhe onde a linha corta cada curva: a demanda pede <b>Qd = 4.000</b>, mas a oferta só entrega <b>Qs = 1.000</b>. A distância entre os dois pontos é o <b>excesso de demanda</b> (escassez) = 4.000 − 1.000 = 3.000. Foi o que aconteceu no <b>tabelamento do Plano Cruzado (1986)</b>: prateleiras vazias, filas e ágio (cobrança “por fora”).</div></div>
      <div><div class="figslot" data-fig="do_piso"></div>
        <div class="ler"><b>📊 Preço-piso (preço mínimo)</b><br>Aqui o eixo vertical é o salário w e o horizontal é o trabalho L. O piso (salário mínimo 12) fica <b>acima</b> do salário de equilíbrio w* = 10. Nesse salário, os trabalhadores oferecem <b>650</b>, mas as empresas só querem contratar <b>400</b> ⇒ <b>excesso de oferta</b> de 250 = <b>desemprego</b>. (Salário mínimo 2026: R$ 1.621.)</div></div>
    </div>
    <div class="trap"><b>Só “morde” se estiver do lado certo:</b> teto só tem efeito se estiver <b>abaixo</b> de P*; piso só tem efeito se estiver <b>acima</b> de P*. Um teto acima de P* (ou piso abaixo) não muda nada: o mercado continua no equilíbrio, que já respeita a regra.</div>
    <div class="extra"><b>Truque para não errar o nome:</b> “excesso de X” = tem <b>X sobrando</b>. Excesso de demanda: sobra gente querendo comprar (falta produto). Excesso de oferta: sobra produto (ou trabalhador) sem comprador.</div>
    <div class="ex"><b>Questão 4 do livro (V ou F).</b>
      <div class="qfull"><div class="qfull-h">📝 Questão na íntegra<span class="q-src">Livro, cap. 1</span></div>
        <p class="q-txt">Suponha que as curvas de demanda e oferta de um tipo de trabalho em uma localidade, em um determinado intervalo de tempo, podem ser representadas pelas equações \\(L_D = 1000 - 50w\\) e \\(L_O = 200 + 50w\\), onde w representa o salário por hora, L<sub>D</sub> a quantidade demandada de trabalhadores e L<sub>O</sub> a quantidade ofertada de trabalhadores. Indique se a afirmação é verdadeira ou falsa: “Se o governo estabelece um salário-mínimo igual a 10 reais por hora, haverá um excesso de demanda de 200 trabalhadores.”</p></div>
      <b>Resolução:</b><br>
      <b>Passo 1 — equilíbrio:</b> \\(1000 - 50w = 200 + 50w \\Rightarrow 800 = 100w \\Rightarrow w^* = 8\\).<br>
      <b>Passo 2 — o piso morde?</b> 10 &gt; 8, então sim.<br>
      <b>Passo 3 — quantidades no piso:</b> \\(L_D(10) = 500\\) (vagas), \\(L_O(10) = 700\\) (candidatos) ⇒ sobram 200 trabalhadores ⇒ <b>excesso de OFERTA</b> de 200. <b class="no">Falsa.</b><br><span class="muted">No mercado de trabalho, quem <b>oferta</b> são os trabalhadores e quem <b>demanda</b> são as empresas. É o contrário do que a intuição costuma sugerir!</span></div>
    <p class="muted">Contexto histórico da inflação antes do Real (IPCA de 82,39% em março de 1990): máquinas de remarcar preços, compras do mês e freezers, overnight, crédito raro, Plano Collor e o confisco da poupança.</p>
  </section>

  <section class="sec">
    <h3><span class="n">5</span> Variação na quantidade × variação na demanda</h3>
    <p>Esta distinção cai em toda prova. O gráfico só tem dois eixos: <b>o preço do próprio bem</b> e a <b>quantidade</b>. Então:</p>
    <ul>
      <li>Se muda o <b>preço do próprio bem</b>, você apenas <b>anda sobre a curva</b> (a curva continua no lugar).</li>
      <li>Se muda <b>qualquer outra coisa</b> (renda, preço de outro bem, gosto…), não há eixo para mostrar isso: a única forma de representar é <b>deslocar a curva inteira</b>.</li>
    </ul>
    <div class="figslot" data-fig="do_mov"></div>
    <div class="ler"><b>📊 Como ler os dois gráficos</b><br><b>Esquerda:</b> uma só curva D; o ponto passa de 1 (preço P₁, alto) para 2 (preço P₂, mais baixo). A curva não se mexeu ⇒ <b>variação na quantidade demandada</b>.<br><b>Direita:</b> a curva tracejada D₁ é a antiga; a curva D₂ está mais à direita. <b>Ao mesmo preço P</b>, as pessoas agora querem comprar mais (seta horizontal) ⇒ <b>variação na demanda</b> (aumento da demanda).</div>
    <table class="t">
      <thead><tr><th>O que mudou?</th><th>O que acontece no gráfico</th><th>Nome correto</th></tr></thead>
      <tbody>
        <tr><td>O <b>preço do próprio bem</b></td><td>Movimento <b>ao longo</b> da curva</td><td>Variação na <b>quantidade</b> demandada (ou ofertada)</td></tr>
        <tr><td>Renda, preço de outros bens, gostos, expectativas, nº de compradores</td><td>A curva de demanda <b>inteira se desloca</b> (direita = aumenta; esquerda = diminui)</td><td>Variação na <b>demanda</b></td></tr>
        <tr><td>Custo de insumos, tecnologia, nº de vendedores, clima, câmbio</td><td>A curva de oferta <b>inteira se desloca</b> (direita = aumenta; esquerda = diminui)</td><td>Variação na <b>oferta</b></td></tr>
      </tbody>
    </table>
    <div class="trap"><b>Cuidado com “oferta para cima”:</b> um custo maior desloca a oferta para <b>cima/esquerda</b> — isso é <b>redução</b> da oferta (a cada preço, vende-se menos; ou, para vender a mesma quantidade, exige-se preço maior).</div>
    <div class="grid2">
      <div class="box"><b>Substitutos</b> (carro novo × usado; café × chá): um substitui o outro. O preço de um <b>sobe</b> ⇒ a demanda pelo outro <b>sobe</b>.</div>
      <div class="box"><b>Complementares</b> (carro × gasolina; impressora × tinta): usados juntos. O preço de um <b>sobe</b> ⇒ a demanda pelo outro <b>cai</b>.</div>
      <div class="box"><b>Bem normal</b>: renda ↑ ⇒ demanda ↑ (a maioria dos bens).</div>
      <div class="box"><b>Bem inferior</b>: renda ↑ ⇒ demanda ↓ (produtos de menor qualidade; motos para quem passa a poder comprar carro).</div>
    </div>
  </section>

  <section class="sec">
    <h3><span class="n">6</span> Casos das aulas: quando as duas curvas se mexem</h3>
    <div class="two"><div class="figslot" data-fig="do_usados"></div><div>
      <p><b>Tarifas dos EUA</b> (carros europeus de 15% → 25%; 50% sobre aço e alumínio) encarecem o carro novo. No mercado de carros <b>usados</b>:</p>
      <ul><li><b>Demanda ↑</b> (curva para a direita): o usado fica mais atrativo frente ao novo, que encareceu (são substitutos).</li>
      <li><b>Oferta ↓</b> (curva para a esquerda): menos gente troca o usado por um novo, então menos usados chegam à venda.</li></ul>
      <p>Resultado: as duas mudanças empurram o <b>preço para cima</b> ⇒ <b>P* sobe com certeza</b>. Já a quantidade: a demanda maior puxa Q para cima e a oferta menor puxa para baixo ⇒ <b>Q* é ambíguo</b> (depende de qual deslocamento é maior).</p>
    </div></div>
    <div class="extra"><b>Regra prática para dois deslocamentos:</b> analise cada um sozinho e anote o efeito em P e em Q. A variável em que os dois efeitos <b>concordam</b> tem resposta certa; aquela em que <b>discordam</b> é ambígua.</div>
    <div class="grid2">
      <div class="box"><b>Desenrola Brasil 2.0</b>: limpa o nome de inadimplentes, abre novas compras a prazo ⇒ <b>demanda por duráveis ↑</b> ⇒ P* ↑, Q* ↑. Há aumento na <b>demanda</b> e aumento na <b>quantidade ofertada</b> (a oferta não se mexeu: os vendedores só andaram sobre ela).</div>
      <div class="box"><b>Petróleo e Ormuz</b>: seguro de guerra dos navios de ~0,25% para até 12% do valor ⇒ custo maior ⇒ <b>oferta ↓</b>.</div>
      <div class="box"><b>Desemprego em 5,4%</b> (2º tri/2026, menor da série): mais renda ⇒ demanda ↑ para bens normais.</div>
    </div>
    <div class="ex"><b>Questão 3 do livro — valorização do dólar e carne bovina</b>
      <div class="qslot" data-q="Tema 1#8"></div>
      <b>Resolução:</b> o dólar mais caro (i) encarece os insumos importados da pecuária e (ii) torna a exportação mais atrativa (cada dólar recebido lá fora vira mais reais). Pelas duas razões, a cada preço sobra menos carne para o mercado interno ⇒ <b>oferta interna ↓</b> (curva para a esquerda) ⇒ P* ↑ e Q* ↓ (E). A demanda não se mexe: o consumidor brasileiro não mudou. <span class="muted">(No livro, que tem 4 alternativas, esta é a letra b.)</span></div>
  </section>

  <section class="sec warn">
    <h3>✍️ Roteiro para questões de gráfico de demanda e oferta</h3>
    <ol>
      <li>Considere <b>apenas</b> o impacto pedido (<i>ceteris paribus</i> = expressão latina para “todo o resto constante”).</li>
      <li>Pergunte: o fator mexe com <b>compradores</b> (demanda) ou com <b>vendedores/custos</b> (oferta)?</li>
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
    "Converta unidades antes de calcular excedentes (R$/kg × toneladas).",
    "Custo maior desloca a oferta para CIMA/ESQUERDA: é uma REDUÇÃO da oferta, mesmo a curva “subindo”."
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
    ["Demanda ↑ e oferta ↓ ao mesmo tempo", "P* sobe com certeza; Q* é ambíguo."],
    ["Ceteris paribus", "“Todo o resto constante”: analisa-se só o efeito do fator pedido."],
    ["Livros de Cálculo (livro)", "P* = 45 e Q* = 7: só compra quem tem preço reserva ≥ 45 e só vende quem tem preço reserva ≤ 45."]
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
  <div class="tldr"><b>A ideia central:</b> elasticidade mede <b>o quanto uma variável reage quando outra muda</b>, sempre em <b>porcentagem</b>. A pergunta que ela responde é: “se o preço subir <b>1%</b>, a quantidade cai <b>quantos %</b>?”. Por ser uma razão entre porcentagens, ela <b>não tem unidade</b> — por isso dá para comparar gasolina no Brasil (litros, reais) com gasolina nos EUA (galões, dólares).</div>

  <section class="sec sig">
    <h3>🔤 Siglas e símbolos deste tema</h3>
    <dl class="sym">
      <dt>ε (épsilon)</dt><dd>Letra grega usada para a elasticidade. Às vezes aparece com índice: ε<sub>d</sub> (demanda), ε<sub>R</sub> (renda), ε<sub>AB</sub> (cruzada).</dd>
      <dt>Δ (delta)</dt><dd>“Variação de”: ΔQ = Q<sub>final</sub> − Q<sub>inicial</sub>.</dd>
      <dt>Δ%Q</dt><dd>Variação <b>percentual</b> de Q: \\(\\dfrac{\\Delta Q}{Q_{\\text{inicial}}}\\times 100\\%\\).</dd>
      <dt>|ε|</dt><dd>Valor absoluto (o número sem o sinal). |−0,3| = 0,3. Usamos para classificar elástica/inelástica.</dd>
      <dt>dQ/dP</dt><dd>Derivada de Q em relação a P (a inclinação da curva num ponto, quando a variação é muito pequena).</dd>
      <dt>ln</dt><dd>Logaritmo natural (neperiano), na base e ≈ 2,718.</dd>
      <dt>MQO</dt><dd>Mínimos Quadrados Ordinários: o método estatístico que encontra a “melhor reta” por um conjunto de pontos (regressão).</dd>
      <dt>α, β (alfa, beta)</dt><dd>Coeficientes estimados numa regressão: α é o intercepto, β é a inclinação.</dd>
      <dt>CP / LP</dt><dd>Curto prazo / longo prazo.</dd>
    </dl>
  </section>

  <section class="sec">
    <h3><span class="n">1</span> Por que não usar simplesmente a inclinação?</h3>
    <p>“Sempre que o preço da gasolina sobe R$ 2, a quantidade cai mil litros” ⇒ \\(\\dfrac{\\Delta Q}{\\Delta P} = \\dfrac{1.000 \\text{ litros}}{2 \\text{ reais}} = 500\\) litros por real.</p>
    <p>Agora meça em dólares (1 real = 0,2 dólar): R$ 1 = US$ 0,20, então “sobe US$ 0,20, cai 500 litros” ⇒ “sobe US$ 1, cai <b>2.500</b> litros”. <b>O número mudou só porque trocamos a moeda!</b> A inclinação depende das unidades.</p>
    <p>A variação <b>percentual</b> não tem esse problema, porque a unidade aparece em cima e embaixo e se cancela:</p>
    <p class="f big">\\(\\dfrac{12 - 10}{10} = \\dfrac{12\\times 0{,}2 - 10\\times 0{,}2}{10 \\times 0{,}2} = 20\\%\\)</p>
    <p class="muted">Preço de R$ 10 para R$ 12 é +20% — e de US$ 2,00 para US$ 2,40 também é +20%.</p>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Elasticidade-preço da demanda: a fórmula, peça por peça</h3>
    <p class="f big">\\(\\varepsilon = \\dfrac{\\Delta\\%Q_d}{\\Delta\\%P} = \\dfrac{\\tfrac{\\Delta Q}{Q}}{\\tfrac{\\Delta P}{P}} = \\dfrac{\\Delta Q}{\\Delta P}\\cdot\\dfrac{P}{Q} \\;\\xrightarrow{\\;\\Delta \\to 0\\;}\\; \\dfrac{dQ}{dP}\\cdot\\dfrac{P}{Q}\\)</p>
    <dl class="sym">
      <dt>1ª forma</dt><dd>\\(\\dfrac{\\Delta\\%Q_d}{\\Delta\\%P}\\): a definição. Use quando o enunciado já dá as porcentagens.</dd>
      <dt>2ª/3ª forma</dt><dd>Mesma coisa reorganizada (dividir por uma fração = multiplicar pelo inverso). Use quando o enunciado dá preços e quantidades antes e depois.</dd>
      <dt>4ª forma</dt><dd>\\(\\dfrac{dQ}{dP}\\cdot\\dfrac{P}{Q}\\): elasticidade <b>num ponto</b>. Use quando há a <b>equação</b> da demanda: derive Q em relação a P e multiplique por P/Q naquele ponto.</dd>
    </dl>
    <p><b>Convenção do curso:</b> variação % = \\(\\dfrac{\\text{final} - \\text{inicial}}{\\text{inicial}}\\) (a base é o valor <b>inicial</b>).</p>
    <p><b>Por que ε é negativa?</b> Porque preço e quantidade demandada andam em sentidos opostos: se Δ%P é positivo, Δ%Q é negativo.</p>
    <div class="ex"><b>Exemplo do livro (gasolina):</b> \\(Q_D = 9 - 0{,}5p\\) (mil litros). O preço sobe de R$ 8 para R$ 10.
      <ol class="mini">
        <li>Quantidades: Q(8) = 9 − 4 = 5 e Q(10) = 9 − 5 = 4.</li>
        <li>\\(\\Delta\\%Q = \\dfrac{4-5}{5} = -20\\%\\) e \\(\\Delta\\%P = \\dfrac{10-8}{8} = +25\\%\\).</li>
        <li>\\(\\varepsilon = \\dfrac{-20\\%}{25\\%} = -0{,}8\\).</li>
        <li>Pela fórmula do ponto, em P = 8: \\(\\dfrac{dQ}{dP} = -0{,}5\\) ⇒ \\(\\varepsilon = -0{,}5\\times\\dfrac{8}{5} = -0{,}8\\). ✔ Mesmo resultado.</li>
      </ol>
      <b>Leitura:</b> “cada 1% de aumento no preço reduz a quantidade demandada em 0,8%”.</div>
    <div class="ex"><b>Gasolina (FMI, 2013):</b> preço +20% ⇒ quantidade −6% ⇒ \\(\\varepsilon = \\dfrac{-6\\%}{20\\%} = -0{,}3\\).<br><b>Leitura correta:</b> “um aumento de <b>1%</b> no preço causa uma queda de <b>0,3%</b> na quantidade demandada”.<br><span class="no">Errado:</span> “queda de 0,3 litro” ou “queda de 0,3 por real”.</div>
    <h4>Classificação (sempre pelo valor absoluto)</h4>
    <table class="t">
      <thead><tr><th>Valor</th><th>Nome</th><th>Significado</th><th>Exemplo</th></tr></thead>
      <tbody>
        <tr><td>\\(|\\varepsilon| = 0\\)</td><td>Perfeitamente inelástica</td><td>A quantidade não reage ao preço. Curva <b>vertical</b>.</td><td>Remédio de pressão para um hipertenso (até certo ponto)</td></tr>
        <tr><td>\\(|\\varepsilon| &lt; 1\\)</td><td><b>Inelástica</b></td><td>|Δ%Q| &lt; |Δ%P|: a quantidade reage <b>pouco</b>.</td><td>Gasolina no CP (−0,3), refrigerantes, tabaco (−0,5)</td></tr>
        <tr><td>\\(|\\varepsilon| = 1\\)</td><td>Unitária</td><td>Mesma variação percentual.</td><td>—</td></tr>
        <tr><td>\\(|\\varepsilon| &gt; 1\\)</td><td><b>Elástica</b></td><td>|Δ%Q| &gt; |Δ%P|: a quantidade reage <b>muito</b>.</td><td>Passagens aéreas internacionais (EUA: −4)</td></tr>
        <tr><td>\\(|\\varepsilon| \\to \\infty\\)</td><td>Perfeitamente elástica</td><td>Qualquer aumento de preço zera as vendas. Curva <b>horizontal</b>.</td><td>Batatas de <b>um</b> pequeno produtor entre milhares</td></tr>
      </tbody>
    </table>
    <div class="extra"><b>Memorize assim:</b> compare a variação % da <b>quantidade</b> com a variação % do <b>preço</b> (sem olhar o sinal).<br>
      <b>Elástica</b> (|ε| &gt; 1): a quantidade muda <b>mais</b> que o preço. Ex.: preço +10% ⇒ quantidade −25% (ε = −2,5).<br>
      <b>Inelástica</b> (|ε| &lt; 1): a quantidade muda <b>menos</b> que o preço. Ex.: preço +10% ⇒ quantidade −3% (gasolina, ε = −0,3).<br>
      Imagem mental: um <b>elástico</b> estica bastante com pouca força; o prefixo “<b>in</b>” quer dizer “não” ⇒ <b>in</b>elástica = quase não estica.</div>
    <h4>O que torna a demanda mais elástica?</h4>
    <ul>
      <li><b>Mais substitutos próximos</b>: se há alternativas, o consumidor foge quando o preço sobe. Os morangos de <b>um produtor</b> têm demanda muito mais elástica que a demanda de mercado: os dos vizinhos são idênticos — substitutos perfeitos.</li>
      <li><b>Mais tempo</b>: no longo prazo as pessoas se ajustam (compram carros menores e mais econômicos) ⇒ demanda por gasolina mais elástica no LP.</li>
      <li>Bens supérfluos (de luxo) tendem a ser mais elásticos que necessidades. <span class="tag">Complemento</span></li>
    </ul>
    <div class="ex"><b>Questão 6 do livro (versão do banco, com 5 alternativas)</b>
      <div class="qslot" data-q="Tema 2#4"></div>
      <b>Resolução:</b> A, B e C são exatamente os três fatores acima (tempo, substitutos, produtor individual) — todas corretas.<br>E também é correta: elasticidade é % ÷ %, sem unidade.<br><span class="no">A errada é a D:</span> em Y = a + bX, b é uma <b>inclinação</b> (depende das unidades); para obter elasticidade é preciso estimar ln Y = α + β ln X (seção 4).</div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> A família das elasticidades</h3>
    <p>A ideia vale para quaisquer duas variáveis: elasticidade de Y em relação a X = \\(\\dfrac{\\Delta\\%Y}{\\Delta\\%X}\\) = “quantos % Y muda quando X muda 1%”. O <b>sinal</b> é o que mais cai em prova:</p>
    <div class="grid2">
      <div class="box"><b class="c1">Elasticidade-preço da oferta</b>
        <span class="f">\\(\\dfrac{\\Delta\\%Q_s}{\\Delta\\%P}\\)</span>Positiva: preço maior ⇒ vendedores ofertam mais.</div>
      <div class="box"><b class="c3">Elasticidade-preço cruzada</b>
        <span class="f">\\(\\varepsilon_{AB} = \\dfrac{\\Delta\\%Q_A}{\\Delta\\%P_B}\\)</span>Quanto a demanda por A muda quando o <b>preço de B</b> muda.<br>&gt; 0: <b>substitutos</b> (P do café ↑ ⇒ compram mais chá).<br>&lt; 0: <b>complementares</b> (P da gasolina ↑ ⇒ compram menos carros).</div>
      <div class="box"><b class="c2">Elasticidade-renda</b>
        <span class="f">\\(\\varepsilon_R = \\dfrac{\\Delta\\%Q}{\\Delta\\%\\text{Renda}}\\)</span>&gt; 0: bem <b>normal</b> (gasolina no LP: 0,88).<br>&gt; 1: bem de <b>luxo</b> (a demanda cresce mais que a renda; FMI: 2,5).<br>&lt; 0: bem <b>inferior</b>.</div>
      <div class="box"><b class="c4">Elasticidade intergeracional da renda</b>
        <span class="f">\\(\\dfrac{\\Delta\\%\\text{renda do filho}}{\\Delta\\%\\text{renda do pai}}\\)</span>Atlas da Mobilidade Social: 0,5 ⇒ pais com renda 100% maior ⇒ filhos ganham, em média, ~50% mais (leitura do slide, pela aproximação 100% × 0,5). No livro, a estimativa para o Brasil é 0,85 (EUA 0,52; Reino Unido 0,31). <b>Quanto maior, menor a mobilidade social</b> (mais a origem determina o destino).</div>
    </div>
    <div class="trap"><b>Pegadinhas das provas de 2025:</b> as duas questões abaixo testam a <b>leitura</b> da elasticidade — qual variável mudou (preço ou renda?) e em que unidade (% ou unidades?).</div>
    <div class="ex"><b>Prova 2025 (tarde) — canetinhas emagrecedoras</b>
      <div class="qslot" data-q="Tema 2#2"></div>
      <b>Resolução:</b> a palavra-chave é <b>renda</b>: \\(\\varepsilon_R = \\dfrac{\\Delta\\%Q}{\\Delta\\%\\text{Renda}} = 0{,}25\\) ⇒ renda +1% ⇒ quantidade +0,25% (A).<br><span class="no">B está errada:</span> troca renda por preço (foi a afirmação FALSA da prova).<br>Como 0 &lt; 0,25 &lt; 1, é bem <b>normal</b>, não inferior (precisaria ser &lt; 0) nem de luxo (precisaria ser &gt; 1).</div>
    <div class="ex"><b>Prova 2025 (manhã) — café</b>
      <div class="qslot" data-q="Tema 2#0"></div>
      <b>Resolução:</b> elasticidade é <b>% sobre %</b>: preço +1% ⇒ quantidade −0,25% (E).<br><span class="no">A e B estão erradas:</span> “0,25 unidade” e “US$ 1” misturam unidades com porcentagens.<br><span class="no">C está errada:</span> como |−0,25| &lt; 1, a demanda é <b>inelástica</b>.</div>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Medindo elasticidades na prática: regressão em log</h3>
    <p><b>Regressão por MQO</b> (Mínimos Quadrados Ordinários): dado um monte de pontos (x, y) — por exemplo, renda do pai e renda do filho de várias pessoas —, MQO encontra a reta que passa “o mais perto possível” de todos. “Mais perto” quer dizer: <b>minimiza a soma dos quadrados dos erros</b>, onde erro = distância vertical entre cada ponto e a reta. Elevamos ao quadrado para que erros positivos (ponto acima da reta) e negativos (abaixo) não se cancelem.</p>
    <div class="grid2">
      <div class="box"><b>y = a + b·x</b><br>b = inclinação = “quantas <b>unidades</b> y muda quando x muda <b>1 unidade</b>” (reais por real, litros por real…). <b class="no">Não é elasticidade.</b></div>
      <div class="box"><b>ln(y) = α + β·ln(x)</b><br>Aplica-se o logaritmo nas duas variáveis antes de rodar a regressão. Aí β = “quantos <b>%</b> y muda quando x muda <b>1%</b>” = <b class="ok">elasticidade</b>.</div>
    </div>
    <div class="ex"><b>Demonstração — por que β é a elasticidade</b> (cobrada em prova como justificativa):
      <ol class="mini">
        <li>Comece de \\(\\ln y = \\alpha + \\beta \\ln x\\). Aplique a exponencial dos dois lados (e<sup>ln y</sup> = y): \\(y = e^{\\alpha + \\beta \\ln x}\\).</li>
        <li>Derive y em relação a x pela <b>regra da cadeia</b> (derivada de fora × derivada de dentro): \\(\\dfrac{dy}{dx} = \\underbrace{e^{\\alpha + \\beta\\ln x}}_{=\\,y}\\cdot \\beta \\cdot \\dfrac{1}{x} = y\\cdot\\dfrac{\\beta}{x}\\).</li>
        <li>Multiplique os dois lados por \\(\\dfrac{x}{y}\\): \\(\\dfrac{dy}{dx}\\cdot\\dfrac{x}{y} = \\beta\\).</li>
        <li>O lado esquerdo é exatamente a fórmula da elasticidade (derivada × variável/variável). ∎</li>
      </ol></div>
    <div class="ex"><b>Questão de prova — diversidade e produtividade</b>
      <div class="qslot" data-q="Tema 2#11"></div>
      <b>Resolução:</b> o resultado está em <b>porcentagens</b> (10% ⇒ 4%), ou seja, é uma elasticidade (≈ 0,4). Pela demonstração acima, para o coeficiente sair como elasticidade é preciso aplicar o <b>logaritmo neperiano</b> nas variáveis antes da regressão (A).<br><span class="no">E está errada:</span> MQO em nível dá a inclinação, em unidades.</div>
    <div class="trap"><b>Viés de variável omitida:</b> salário = a + b·escolaridade. A <b>habilidade</b> aumenta o salário (pessoa mais produtiva) e também a escolaridade (estudar é mais fácil para quem é hábil). Como a habilidade ficou fora da regressão, o b estimado “pega carona” no efeito dela ⇒ <b>viés positivo</b> (superestima o efeito da educação). Mesmo que estudar não afetasse em nada o salário, veríamos correlação positiva entre os dois!</div>
    <div class="ex"><b>Questão de prova — viés de variável omitida</b>
      <div class="qslot" data-q="Tema 2#12"></div>
      <b>Resolução:</b> a variável omitida (habilidade) tem correlação <b>positiva</b> com a escolaridade e efeito <b>positivo</b> no salário ⇒ + × + = viés <b>positivo</b>: b superestima o efeito da escolaridade (D).<br><span class="no">E está errada:</span> não é elasticidade, porque a regressão está em nível, não em log.</div>
  </section>`,
  pegadinhas: [
    "Elasticidade é % sobre %: −0,25 significa 0,25% (não 0,25 unidade) para cada 1% no preço.",
    "Não confunda elasticidade-renda com elasticidade-preço (canetinhas: 0,25 é renda).",
    "|ε| < 1 é INELÁSTICA (a quantidade reage menos que o preço).",
    "Em y = a + bx, b NÃO é elasticidade; só em ln y = α + β ln x.",
    "A demanda de um único produtor é MAIS elástica que a de mercado.",
    "Demanda por gasolina é mais elástica no LONGO prazo.",
    "Inclinação depende das unidades; elasticidade é adimensional.",
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
    ["Elasticidade intergeracional 0,5", "Pais com renda 100% maior ⇒ filhos com renda, em média, ~50% maior (aproximação usada no slide)."],
    ["Demanda mais elástica quando…", "Há mais substitutos próximos, mais tempo para ajuste, é o produto de um produtor individual."],
    ["Perfeitamente inelástica × perfeitamente elástica", "Vertical (Q não reage: remédio essencial) × horizontal (um produtor pequeno de batatas)."],
    ["Q = 9 − 0,5P, preço de 8 para 10", "Δ%Q = −20%, Δ%P = 25% ⇒ ε = −0,8."]
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
  <div class="tldr"><b>A ideia central:</b> para decidir se algo vale a pena, conte <b>todos</b> os custos, inclusive o que você deixa de ganhar na melhor alternativa (<b>custo de oportunidade</b>). Depois, entenda como o custo cresce com a produção: no começo cresce devagar (especialização) e depois cada vez mais rápido (<b>rendimentos marginais decrescentes</b>). Por isso o custo marginal (CM) tem formato de U e <b>corta o CVM e o CTM exatamente nos seus pontos mais baixos</b>.</div>

  <section class="sec sig">
    <h3>🔤 Siglas e símbolos deste tema</h3>
    <dl class="sym">
      <dt>q</dt><dd>Quantidade produzida <b>por uma empresa</b> (minúsculo). Q maiúsculo costuma ser o mercado todo.</dd>
      <dt>L</dt><dd>Trabalho (<i>labor</i>): nº de funcionários ou horas.</dd>
      <dt>PML</dt><dd>Produto Marginal do Trabalho: produção extra obtida com <b>um</b> trabalhador a mais.</dd>
      <dt>CF</dt><dd>Custo Fixo: não muda com q (aluguel, contrato). Pago mesmo se q = 0.</dd>
      <dt>CV</dt><dd>Custo Variável: cresce com q (matéria-prima, horas extras). CV(0) = 0.</dd>
      <dt>CT</dt><dd>Custo Total = CF + CV.</dd>
      <dt>CFM</dt><dd>Custo Fixo <b>Médio</b> = CF ÷ q (custo fixo por unidade).</dd>
      <dt>CVM</dt><dd>Custo Variável <b>Médio</b> = CV ÷ q (custo variável por unidade).</dd>
      <dt>CTM</dt><dd>Custo Total <b>Médio</b> = CT ÷ q (custo por unidade). Também chamado de “custo médio”.</dd>
      <dt>CM</dt><dd>Custo <b>Marginal</b>: quanto o custo total aumenta ao produzir <b>uma unidade a mais</b>.</dd>
      <dt>CP / LP</dt><dd>Curto prazo (há insumo fixo) / longo prazo (tudo pode variar).</dd>
      <dt>Selic</dt><dd>Taxa básica de juros da economia; usada como custo de oportunidade do dinheiro próprio.</dd>
    </dl>
    <p class="note"><b>Dica de leitura das siglas:</b> “M” no final = <b>Médio</b> (dividido por q). “CM” sozinho = <b>Marginal</b> (a próxima unidade). Não confunda CM com CTM!</p>
  </section>

  <section class="sec">
    <h3><span class="n">1</span> Custo de oportunidade e custo econômico</h3>
    <p><b>Custo de oportunidade</b> é a <b>melhor alternativa de que se abre mão</b> ao dedicar um recurso (tempo, dinheiro, um imóvel) a um empreendimento. Não sai do bolso, mas é custo de verdade: é o que você <b>deixa de ganhar</b>.</p>
    <div class="grid2">
      <div class="box"><b>Lucro contábil</b> = receita − gastos <b>explícitos</b> (o que sai do bolso).</div>
      <div class="box"><b>Lucro econômico</b> = receita − <b>custo econômico</b> = receita − (gastos explícitos + custos de oportunidade). <b>É o que se usa para decidir.</b></div>
    </div>
    <div class="ex"><b>Virar motorista de aplicativo?</b> Receita: $200/dia. Combustível: $80. Depreciação, lavagens, seguro: $50. Com o mesmo tempo e esforço, ganharia $150 em outra ocupação.
      <ul class="mini">
        <li>Lucro contábil = 200 − 80 − 50 = <b>+70</b> (parece bom…).</li>
        <li>Custo econômico = 80 + 50 + <b>150</b> (o salário que deixou de ganhar) = 280.</li>
        <li>Lucro econômico = 200 − 280 = <b class="no">−80</b> ⇒ <b>não vale a pena</b>: na outra ocupação ganharia mais.</li>
      </ul></div>
    <div class="ex"><b>Exemplo do livro — revender carros usados:</b> compra por R$ 25.000 e vende por R$ 25.020, um carro por dia, trabalhando 8 horas. Lucro contábil: R$ 20/dia. Mas, com o mesmo esforço, ganharia R$ 200/dia em outro trabalho ⇒ custo econômico = 25.000 + 200 = 25.200 ⇒ lucro econômico = <b class="no">−R$ 180</b>/dia.</div>
    <p>Mesmo raciocínio para o <b>capital próprio</b>: se suas economias rendem a <b>Selic</b> (13,75% a.a. no exemplo da aula), esse rendimento que você deixa de receber ao investir no negócio é custo do negócio.</p>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Produção: o produto marginal do trabalho</h3>
    <p>Confeitaria de delivery com instalações, 1 forno e 1 veículo <b>fixos</b>. Só o número de funcionários pode mudar:</p>
    <table class="t sm"><thead><tr><th>Funcionários (L)</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead>
      <tbody><tr><td>Bolos por dia (q)</td><td>0</td><td>1</td><td>5</td><td>7</td><td>8</td></tr>
      <tr class="hl"><td>Produto marginal (PML = Δq/ΔL)</td><td>—</td><td>1 (=1−0)</td><td><b>4</b> (=5−1)</td><td>2 (=7−5)</td><td>1 (=8−7)</td></tr></tbody></table>
    <div class="grid2">
      <div class="box"><b class="ok">Ganhos de especialização</b> (PML sobe de 1 para 4): com 2 pessoas, uma faz a massa e outra entrega; cada uma fica melhor na sua tarefa.</div>
      <div class="box"><b class="no">Rendimentos marginais decrescentes</b> (PML cai de 4 para 2 e 1): com o forno e o veículo fixos, cada funcionário extra tem menos equipamento para usar e acaba esperando a vez. <b>Consequência:</b> cada bolo extra exige cada vez mais trabalho ⇒ o custo cresce <b>cada vez mais rápido</b>.</div>
    </div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> As medidas de custo, uma a uma</h3>
    <div class="grid3">
      <div class="box"><b>CF — custo fixo</b><br>Não varia com q; no curto prazo é pago mesmo se q = 0 (ex.: aluguel de R$ 154/dia). Quando não dá para recuperá-lo (“leite derramado”), é custo <b>afundado</b> (<i>sunk cost</i>).</div>
      <div class="box"><b>CV — custo variável</b><br>Muda com a quantidade produzida (farinha, ovos, entregas). Se q = 0, CV = 0.</div>
      <div class="box"><b>CT = CF + CV</b><br>No gráfico, a curva de CT é a curva de CV <b>empurrada para cima</b> pelo valor do CF.</div>
      <div class="box"><b>CFM = \\(\\dfrac{CF}{q}\\)</b><br>Sempre decrescente: o mesmo aluguel é <b>diluído</b> em mais bolos (154, 77, 51,3…).</div>
      <div class="box"><b>CVM = \\(\\dfrac{CV}{q}\\)</b><br>Custo variável por bolo. Formato de U.</div>
      <div class="box"><b>CTM = \\(\\dfrac{CT}{q}\\) = CVM + CFM</b><br>Custo total por bolo. Formato de U. A distância entre CTM e CVM é o CFM, que encolhe ⇒ as duas curvas se aproximam.</div>
    </div>
    <h4>Custo marginal: a peça mais importante</h4>
    <p class="f big">\\(CM(q) = \\dfrac{\\Delta CT}{\\Delta q} \\;\\xrightarrow{\\;\\Delta q\\to 0\\;}\\; \\dfrac{dCT}{dq}\\)</p>
    <p><b>Em palavras:</b> “quanto a mais eu gasto para fazer mais uma unidade”. Na tabela: CM(q) = CT(q) − CT(q − 1). Com fórmula: derive o CT.</p>
    <p><b>O custo fixo não afeta o custo marginal:</b> como CT = CF + CV e o CF não muda, toda variação do custo vem do CV ⇒ \\(CM = \\dfrac{dCV}{dq}\\). (O CF também não afeta o CVM; só afeta CT, CTM e CFM.)</p>
    <div class="two"><div class="figslot" data-fig="cu_bolo"></div><div>
      <table class="t sm"><thead><tr><th>q</th><th>CT</th><th>CFM</th><th>CVM</th><th>CTM</th><th>CM</th></tr></thead><tbody>
        <tr><td>1</td><td>214</td><td>154</td><td>60</td><td>214</td><td>60</td></tr><tr><td>2</td><td>250</td><td>77</td><td>48</td><td>125</td><td>36</td></tr>
        <tr><td>3</td><td>280</td><td>51,3</td><td>42</td><td>93,3</td><td>30</td></tr><tr class="hl"><td>4</td><td>322</td><td>38,5</td><td><b>42</b></td><td>80,5</td><td>42</td></tr>
        <tr><td>5</td><td>380</td><td>30,8</td><td>45,2</td><td>76</td><td>58</td></tr><tr class="hl"><td>6</td><td>456</td><td>25,7</td><td>50,3</td><td><b>76</b></td><td><b>76</b></td></tr>
        <tr><td>7</td><td>552</td><td>22</td><td>56,9</td><td>78,9</td><td>96</td></tr><tr><td>8</td><td>670</td><td>19,3</td><td>64,5</td><td>83,8</td><td>118</td></tr><tr><td>9</td><td>815</td><td>17,1</td><td>73,4</td><td>90,6</td><td>145</td></tr></tbody></table>
      <p class="note">Planilha da aula (CF = 154). Exemplo de cálculo em q = 4: CV = 322 − 154 = 168 ⇒ CVM = 168/4 = 42; CTM = 322/4 = 80,5; CM = 322 − 280 = 42. Mín CVM = 42 (empate em q = 3 e 4); mín CTM = 76 (empate em q = 5 e 6); em q = 6, CM = CTM = 76.</p>
    </div></div>
    <div class="ler"><b>📊 Como ler o gráfico de custos</b>
      <ul>
        <li>Eixo horizontal: q (bolos por dia). Eixo vertical: R$ <b>por bolo</b> (são custos médios e marginais, não totais).</li>
        <li><b class="no">CM (vermelha)</b>: cai um pouco no início (especialização) e depois sobe forte (rendimentos decrescentes).</li>
        <li><b class="c2">CTM (verde)</b> e <b class="c1">CVM (azul)</b>: dois “U”. O CTM fica sempre <b>acima</b> do CVM; a distância entre eles é o CFM.</li>
        <li><b class="c3">CFM (roxa)</b>: sempre descendo (diluição do aluguel).</li>
        <li>Repare onde a <b>vermelha cruza</b> as outras: passa pelo <b>fundo do CVM</b> (ponto “CM = mín CVM”, em q = 4 e R$ 42) e depois pelo <b>fundo do CTM</b> (ponto “CM = mín CTM”, em q = 6 e R$ 76 — o ponto (6, 76) dos slides).</li>
        <li>Na tabela os mínimos aparecem como <b>empates</b> (CVM = 42 em q = 3 e 4; CTM = 76 em q = 5 e 6): o fundo do U fica entre os dois pontos, e o CM chega nele no segundo.</li>
      </ul></div>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Por que o CM corta o CTM no ponto mínimo?</h3>
    <p><b>Intuição com notas:</b> sua média na disciplina é 7. Se a próxima prova (a “nota marginal”) for 5, a média <b>cai</b>; se for 9, a média <b>sobe</b>. A média só fica parada quando a nova nota é igual à média. Com custos é igual: enquanto CM &lt; CTM, o CTM está caindo; quando CM &gt; CTM, o CTM está subindo. Logo, o fundo do U (nem caindo nem subindo) é onde <b>CM = CTM</b>.</p>
    <div class="ex"><b>Demonstração (derivada de um quociente):</b> no mínimo, a derivada do CTM é zero.
      \\[\\begin{aligned} \\dfrac{dCTM}{dq} &= \\dfrac{d}{dq}\\Big(\\dfrac{CT(q)}{q}\\Big) \\\\ &= \\dfrac{CM(q)\\cdot q - CT(q)\\cdot 1}{q^2} = 0 \\\\ &\\Rightarrow\\; CM(q)\\,q = CT(q) \\\\ &\\Rightarrow\\; CM(q) = \\dfrac{CT(q)}{q} \\\\ &= CTM(q) \\end{aligned}\\]
      O mesmo vale para o CVM (troque CT por CV).</div>
    <div class="extra"><b>Leitura geométrica (livro):</b> o <b>CTM</b> num ponto do gráfico de CT é a <b>inclinação da reta que liga a origem</b> a esse ponto (CT/q = “altura ÷ base”). O <b>CM</b> é a <b>inclinação da reta tangente</b> à curva de CT. No ponto em que a reta da origem fica tangente à curva, as duas inclinações coincidem: é o mínimo do CTM.</div>
    <div class="ex"><b>Questão de prova — CT = 2q² + 800</b>
      <div class="qslot" data-q="Tema 3#11"></div>
      <b>Resolução (e um passo a mais: o mínimo do CTM):</b>
      <ol class="mini">
        <li>Identifique: CF = 800 (o termo sem q) e CV = 2q².</li>
        <li>\\(CM = \\dfrac{dCT}{dq} = 4q\\) &nbsp;·&nbsp; \\(CVM = \\dfrac{2q^2}{q} = 2q\\) &nbsp;·&nbsp; \\(CTM = 2q + \\dfrac{800}{q}\\).</li>
        <li>Mínimo do CTM: derive e iguale a zero: \\(2 - \\dfrac{800}{q^2} = 0 \\Rightarrow q^2 = 400 \\Rightarrow q = 20\\) ⇒ \\(CTM(20) = 40 + 40 = 80\\).</li>
        <li>Confira com a regra CM = CTM: CM(20) = 80. ✔</li>
      </ol>
      Alternativa correta: <b>B</b> (CVM = 2q; CM = 4q).<br><span class="no">A está errada:</span> é o <b>CTM</b>, não o CVM — o 800 é custo fixo e não entra no CVM.<br>
      <b>Atalho:</b> para \\(CT = aq^2 + F\\), o mínimo do CTM está em \\(q = \\sqrt{F/a}\\) e vale \\(2\\sqrt{aF}\\).</div>
    <div class="ex"><b>Prova 2025 (manhã) — custo do café</b>
      <div class="qslot" data-q="Tema 3#8"></div>
      <b>Resolução:</b> \\(CTM = \\dfrac{1800q^2 + 18}{q} = 1800q + \\dfrac{18}{q}\\). Mínimo: \\(1800 - \\dfrac{18}{q^2} = 0 \\Rightarrow q^2 = 0{,}01 \\Rightarrow q = 0{,}1\\) ⇒ CTM = 180 + 180 = <b>360</b> (B). Pelo atalho: \\(q = \\sqrt{18/1800} = 0{,}1\\) e \\(2\\sqrt{1800\\times 18} = 2 \\times 180 = 360\\). Confere com CM = CTM: CM = 3600q = 360. ✔</div>
  </section>

  <section class="sec">
    <h3><span class="n">5</span> Curto prazo × longo prazo</h3>
    <div class="grid2">
      <div class="box"><b>Curto prazo</b>: período em que <b>pelo menos um insumo está fixo</b> ⇒ existe custo fixo. Ex. do livro: uma creche contrata professoras em dias, mas leva 7 meses para construir novas salas; durante esses 7 meses, está no curto prazo.</div>
      <div class="box"><b>Longo prazo</b>: tempo suficiente para alterar <b>todos</b> os insumos ⇒ <b>não há custo fixo</b>. Pode haver custos que só existem se q &gt; 0 (custos <b>quase-fixos</b>, ex.: licença de software), mas eles somem se a empresa fechar — por isso não são custo fixo no LP.</div>
    </div>
    <p>Hipótese simplificadora do curso (não vale em geral): as curvas de custo de curto e longo prazo são <b>iguais para q &gt; 0</b>; só diferem em q = 0 (no LP, CT(0) = 0).</p>
    <div class="ex"><b>Livro — o transporte de Jorge</b> (São José dos Campos → São Paulo) <span class="tag">Livro</span>: ele pode comprar um carro (4 lugares, $200/viagem), uma van (10 lugares, $400) ou um minibus (20 lugares, $800). Cada veículo tem sua curva de CTM de curto prazo (cai até lotar). Até 4 passageiros, o carro é mais barato por pessoa; de 5 a 10, a van; de 11 a 20, o minibus. A curva de <b>CTM de longo prazo</b> é o <b>“contorno de baixo”</b> (envoltória inferior) das curvas de curto prazo: no LP, Jorge escolhe o veículo mais barato para cada quantidade.</div>
    <div class="grid3">
      <div class="box"><b>Economias de escala</b><br>Produzir mais <b>reduz</b> o CTM de LP (ex.: especializar fábricas).</div>
      <div class="box"><b>Retornos constantes</b><br>Produzir mais <b>não muda</b> o CTM de LP.</div>
      <div class="box"><b>Deseconomias de escala</b><br>Produzir mais <b>aumenta</b> o CTM de LP (dificuldade de coordenação).</div>
    </div>
  </section>`,
  pegadinhas: [
    "Lucro econômico desconta o custo de oportunidade (tempo, capital). Lucro contábil positivo pode ser prejuízo econômico.",
    "O custo fixo NÃO afeta o custo marginal nem o CVM — só o CTM e o CFM.",
    "O CM corta CVM e CTM nos seus MÍNIMOS (não nos máximos).",
    "Rendimentos marginais decrescentes: o produto marginal cai quando se aumenta um insumo mantendo os outros fixos — por isso o CM sobe.",
    "No longo prazo não existe custo fixo (todos os insumos são variáveis).",
    "CTM − CVM = CFM, que diminui com q: as curvas de CTM e CVM se aproximam.",
    "CM (marginal) ≠ CTM (médio): o “M” do final das siglas quer dizer MÉDIO."
  ],
  cards: [
    ["Custo de oportunidade", "A melhor alternativa de que se abre mão ao dedicar um recurso a um empreendimento."],
    ["Custo econômico", "Todos os insumos avaliados a preço de mercado ou custo de oportunidade (inclui seu tempo e capital)."],
    ["Uber: receita 200, gastos 80 + 50, alternativa 150", "Lucro econômico = 200 − 280 = −80 ⇒ não vale a pena."],
    ["Custo marginal", "\\(CM = \\dfrac{dCT}{dq}\\): custo de produzir uma unidade a mais."],
    ["CTM", "\\(CTM = \\dfrac{CT}{q} = CVM + CFM\\)"],
    ["Onde o CM corta o CTM?", "No mínimo do CTM (e também no mínimo do CVM)."],
    ["Produto marginal do trabalho", "Produção extra de um trabalhador a mais. Bolos: 1, 4, 2, 1."],
    ["Rendimentos marginais decrescentes", "Com outros insumos fixos, cada unidade extra do insumo variável acrescenta cada vez menos ⇒ custo cresce cada vez mais rápido."],
    ["Curto prazo", "Pelo menos um insumo fixo ⇒ há custo fixo."],
    ["Longo prazo", "Todos os insumos variáveis ⇒ não há custo fixo."],
    ["CT = 2q² + 800: mínimo do CTM", "q = 20, CTM = 80 (= CM)."],
    ["CT = 1800q² + 18: mínimo do CTM", "q = 0,1 e CTM = 360."],
    ["Atalho: CT = aq² + F", "Mínimo do CTM em q = √(F/a), com CTM = 2√(aF)."],
    ["CTM de longo prazo", "Envoltória inferior das curvas de CTM de curto prazo (Jorge: carro, van ou minibus)."],
    ["Economias de escala", "Produzir mais reduz o custo médio de longo prazo."]
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
  <div class="tldr"><b>A ideia central:</b> numa competição perfeita a empresa é pequena demais para mexer no preço — ela é <b>tomadora de preço</b>. Então só decide <b>quanto</b> produzir, e a regra é produzir até o ponto em que <b>preço = custo marginal</b>.<br><b>Curto prazo:</b> só para se o preço não cobrir nem o custo variável médio.<br><b>Longo prazo:</b> sai se não cobrir o custo total médio.<br>Como empresas entram quando há lucro e saem quando há prejuízo, o preço acaba no <b>mínimo do CTM</b>: <b>lucro econômico zero</b> e p = CM = CTM.</div>

  <section class="sec sig">
    <h3>🔤 Siglas e símbolos deste tema</h3>
    <dl class="sym">
      <dt>p</dt><dd>Preço de mercado (dado para a empresa).</dd>
      <dt>q / Q</dt><dd>q = produção de <b>uma</b> empresa; Q = produção do <b>mercado</b> (soma de todas).</dd>
      <dt>RT</dt><dd>Receita Total = p × q (faturamento).</dd>
      <dt>RM</dt><dd>Receita <b>Marginal</b>: quanto a receita aumenta vendendo uma unidade a mais. Na competição, RM = p.</dd>
      <dt>π (pi)</dt><dd>Lucro = RT − CT.</dd>
      <dt>CM, CVM, CTM, CF</dt><dd>Custo marginal, variável médio, total médio e fixo (Tema 3).</dd>
      <dt>O_CP</dt><dd>Curva de Oferta de <b>Curto Prazo</b> do mercado (número de empresas fixo).</dd>
      <dt>O_LP</dt><dd>Curva de Oferta de <b>Longo Prazo</b> do mercado (empresas podem entrar e sair). Com empresas iguais, é <b>horizontal</b>.</dd>
      <dt>D</dt><dd>Demanda de mercado.</dd>
      <dt>J ou n</dt><dd>Número de empresas no mercado.</dd>
      <dt>Σ (sigma)</dt><dd>“Soma de”: \\(\\sum_{j=1}^{J} q_j\\) = q₁ + q₂ + … + q<sub>J</sub>.</dd>
      <dt>A e B</dt><dd>Nos gráficos de 2 painéis: A = o choque (desloca D ou O_CP); B = entrada/saída de empresas.</dd>
      <dt>EC / EP</dt><dd>Excedente do consumidor / produtor.</dd>
    </dl>
  </section>

  <section class="sec">
    <h3><span class="n">1</span> O que é um mercado (perfeitamente) competitivo</h3>
    <div class="grid3">
      <div class="box">Vários vendedores e compradores, cada um <b>pequeno</b> em relação ao mercado.</div>
      <div class="box">Produtos <b>idênticos</b> (o consumidor não vê diferença entre vendedores).</div>
      <div class="box"><b>Livre entrada</b> (e saída) de empresas.</div>
    </div>
    <p>Consequência: se uma empresa cobrar um centavo a mais que as outras, <b>ninguém compra dela</b> (o produto é igual); e ao preço de mercado, consegue vender <b>tudo o que quiser</b> (é pequena). Por isso a demanda que <b>uma empresa</b> enxerga é uma <b>reta horizontal</b> na altura do preço — mesmo que a demanda do mercado seja inclinada. Ex.: produtos agrícolas. Contraexemplo: Sabesp e EDP, que são monopólios.</p>
    <p>Objetivo da empresa, em qualquer estrutura de mercado: <b>maximizar o lucro</b> \\(\\pi = RT - CT\\).</p>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Quanto produzir: a regra p = CM</h3>
    <p class="f big">\\(\\max_q\\; RT(q) - CT(q) \\;\\Rightarrow\\; \\dfrac{dRT}{dq} = \\dfrac{dCT}{dq} \\;\\Rightarrow\\; RM(q) = CM(q)\\)</p>
    <p><b>Em palavras:</b> para achar o máximo do lucro, derive e iguale a zero. A derivada da receita é a receita marginal; a do custo é o custo marginal. Então no ponto ótimo <b>o que entra com a última unidade (RM) = o que custa a última unidade (CM)</b>.</p>
    <p>Na competição, \\(RT = p\\cdot q\\) com p fixo ⇒ cada unidade extra traz exatamente p de receita ⇒ \\(RM = p\\). Logo a empresa produz onde <b>p = CM(q)</b> (no ramo <b>crescente</b> do CM: onde o CM ainda está caindo, p = CM é ponto de lucro mínimo, não máximo).</p>
    <div class="ex"><b>Intuição com a confeitaria (livro), preço p = 145:</b>
      <ul class="mini">
        <li>Se produz 7, vale fazer o 8º bolo? Custa CM(8) = 118 e vende por 145 ⇒ lucro <b>+27</b>. Sim, produza mais.</li>
        <li>Se produz 10, vale cortar o 10º? Economiza CM(10) = 176 e perde 145 de receita ⇒ lucro <b>+31</b>. Sim, produza menos.</li>
        <li>O 9º bolo custa CM(9) = 145 = p: tanto faz; pela convenção, em caso de empate escolhe-se a maior quantidade ⇒ <b>q = 9</b>.</li>
      </ul>
      Lucro = 145×9 − 815 = <b>490</b>. Outra forma de ver: lucro = (p − CTM) × q = (145 − 90,56) × 9 = 490 ⇒ o <b>retângulo</b> de altura “lucro por unidade” e base q.</div>
    <div class="extra"><b>Por que a curva de CM é a curva de oferta da empresa?</b> Para cada preço, a empresa escolhe q onde p = CM(q). A curva que diz “a este preço, ofereço esta quantidade” é, por definição, uma curva de oferta. Na confeitaria: p = 96 ⇒ q = 7; p = 76 ⇒ q = 6; p = 145 ⇒ q = 9.</div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> Suspender (curto prazo) × sair (longo prazo)</h3>
    <p>A empresa sempre pode produzir zero. Quando isso é melhor? Depende do prazo, porque no curto prazo o <b>custo fixo é pago de qualquer jeito</b>.</p>
    <div class="grid2">
      <div class="box"><b>Curto prazo — suspende se p &lt; CVM</b><br>
        <ul>
          <li>Se parar: lucro = −CF (paga o aluguel, não vende nada).</li>
          <li>Se produzir: lucro = RT − CV − CF.</li>
          <li>Para se −CF &gt; RT − CV − CF ⇔ <b>RT &lt; CV</b> ⇔ (÷ q) <b>p &lt; CVM</b>.</li>
        </ul>
        “Se o preço não cobre nem o custo variável de cada unidade, cada bolo vendido aumenta o prejuízo.”</div>
      <div class="box"><b>Longo prazo — sai se p &lt; CTM</b><br>
        <ul>
          <li>No LP todo custo é evitável: quem sai tem CT = 0 e lucro = 0.</li>
          <li>Sai se lucro &lt; 0 ⇔ RT &lt; CT ⇔ (÷ q) <b>p &lt; CTM</b>.</li>
        </ul>
        “Se o preço não cobre o custo por unidade, é melhor mudar de ramo.” (Em CT = 2q² + 800, o 800 só é pago por quem produz: CT(0) = 0 no LP.)</div>
    </div>
    <div class="grid2">
      <div class="box"><b>Oferta da empresa no CP</b>: p = CM(q) somente se p ≥ CVM<sub>CP</sub>(q) ⇒ é o pedaço da curva de CM <b>acima do mínimo do CVM</b>.</div>
      <div class="box"><b>Oferta da empresa no LP</b>: p = CM(q) somente se p ≥ CTM<sub>LP</sub>(q) ⇒ é o pedaço da curva de CM <b>acima do mínimo do CTM</b>.</div>
    </div>
    <table class="t sm"><thead><tr><th>Preço (planilha)</th><th>q (p = CM)</th><th>Lucro</th><th>Curto prazo</th><th>Longo prazo</th></tr></thead><tbody>
      <tr><td>145 (muito favorável)</td><td>9</td><td class="ok">+490</td><td>produz</td><td>fica; empresas entram</td></tr>
      <tr><td>96 (favorável)</td><td>7</td><td class="ok">+120</td><td>produz</td><td>fica; empresas entram</td></tr>
      <tr class="hl"><td>76 (= mín CTM)</td><td>6</td><td>0</td><td>produz</td><td>fica (equilíbrio de LP)</td></tr>
      <tr><td>58 (muito desfavorável)</td><td>5</td><td class="no">−90</td><td>produz (perder 90 é melhor que perder 154)</td><td><b>sai</b></td></tr>
      <tr><td>42 (= mín CVM)</td><td>4</td><td class="no">−154</td><td>indiferente</td><td>sai</td></tr>
    </tbody></table>
    <p class="note">Como ler a linha do preço 58: p = 58 está acima do CVM (45,2) mas abaixo do CTM (76) ⇒ no CP a empresa cobre todo o custo variável e ainda “sobra” um pouco para abater do aluguel; por isso produz com prejuízo. No LP, sai.</p>
    <div class="ex"><b>Questão de prova (Reforma Tributária) — oferta de curto prazo</b>
      <div class="qslot" data-q="Tema 4#7"></div>
      <b>Resolução:</b> oferta de CP = p = CM, desde que CM ≥ CVM. \\(CM = 4q\\) e \\(CVM = 2q\\). Como 4q ≥ 2q para todo q ≥ 0, o CM está sempre acima do CVM ⇒ <b>p = 4q para qualquer q ≥ 0</b> (C).<br><span class="no">E está errada:</span> “só para q ≥ 20” seria a oferta de <b>longo</b> prazo, que usa o CTM — veja a próxima.</div>
    <div class="ex"><b>Questão de prova — a mesma empresa no longo prazo</b>
      <div class="qslot" data-q="Tema 4#8"></div>
      <b>Resolução:</b> no LP a empresa só produz se p ≥ CTM. Mínimo do CTM = 2q + 800/q: q = 20, CTM = 80 ⇒ p = 4q somente para p ≥ 80 (q ≥ 20); abaixo disso, sai (q = 0) (B).</div>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Oferta de mercado</h3>
    <p>A cada preço, a quantidade ofertada no mercado é a <b>soma</b> do que cada empresa oferta a esse preço:</p>
    <p class="f big">\\(Q(p) = \\sum_{j=1}^{J} q_j(p)\\)</p>
    <p>Isso é uma <b>soma horizontal</b>: fixe um preço (uma altura no gráfico) e some as quantidades (as distâncias horizontais). Ex.: 120 empresas, cada uma oferecendo q = p/8 ⇒ \\(Q = 120\\cdot\\dfrac{p}{8} = 15p\\).</p>
    <p>Cada ponto da oferta de mercado mostra o <b>custo marginal</b> de produzir aquela unidade — o custo adicional que o setor tem para produzir a N-ésima unidade.</p>
    <div class="trap"><b>Se cada CM sobe A, a soma horizontal sobe A.</b> Um choque de custo de A por unidade desloca a O_CP de mercado <b>verticalmente para cima em A</b>.</div>
  </section>

  <section class="sec">
    <h3><span class="n">5</span> Equilíbrio de longo prazo: entrada e saída</h3>
    <div class="chain lbl" data-lbl="Lucro &gt; 0"><span>empresas entram</span><span>O_CP → direita</span><span>preço cai</span><span>até p = mín CTM</span></div>
    <div class="chain lbl" data-lbl="Lucro &lt; 0"><span>empresas saem</span><span>O_CP → esquerda</span><span>preço sobe</span><span>até p = mín CTM</span></div>
    <p>O processo só para quando o lucro é zero. No equilíbrio de LP valem <b>duas condições ao mesmo tempo</b>:</p>
    <ul>
      <li>p = CTM (lucro zero — senão haveria entrada ou saída);</li>
      <li>p = CM (cada empresa maximiza lucro).</li>
    </ul>
    <p>Logo <b>CM = CTM</b>, o que só acontece no <b>mínimo do CTM</b> (seção 4 do Tema 3). Resultado: <b>p = CM = mín CTM</b> — cada unidade é produzida ao menor custo médio possível. Com empresas iguais, a <b>oferta de longo prazo é horizontal</b> na altura do mínimo do CTM: o mercado oferece qualquer quantidade a esse preço (basta ter o número certo de empresas).</p>
    <div class="extra"><b>Lucro zero não é ruim!</b> É lucro <b>econômico</b> zero: todos os insumos, incluindo o tempo e o capital do dono, estão sendo pagos pelo que ganhariam na melhor alternativa. O dono não está “trabalhando de graça”.</div>
    <div class="figslot" data-fig="co_lp"></div>
    <div class="ler"><b>📊 Como ler os dois gráficos lado a lado</b>
      <ul>
        <li><b>Esquerda — empresa típica:</b> eixo horizontal q (pequeno), curvas <b class="no">CM (vermelha)</b> e <b class="c2">CTM (verde)</b>. O ponto 1 é o fundo do CTM, por onde passa o CM.</li>
        <li><b>Direita — mercado:</b> eixo horizontal Q (grande), <b class="c2">demanda D</b>, <b class="c1">oferta de curto prazo O_CP</b> e <b class="c3">oferta de longo prazo O_LP (horizontal, roxa)</b>. As três passam pelo ponto 1.</li>
        <li>Os <b>eixos verticais têm a mesma escala</b>: o preço p₁ do mercado é a mesma altura do fundo do CTM da empresa.</li>
      </ul></div>
    <div class="ex"><b>Exemplo numérico do livro — transporte de carga (greve dos caminhoneiros de 2018)</b> <span class="tag">Livro</span><br>
      Cada empresa: \\(CT = 100 + 4q^2\\). Demanda de mercado: \\(Q_D = 1000 - 10p\\).
      <ol class="mini">
        <li><b>LP inicial:</b> \\(CTM = \\dfrac{100}{q} + 4q\\), mínimo em \\(q = \\sqrt{100/4} = 5\\), CTM = 40 ⇒ <b>p = 40</b>. Demanda: Q = 1000 − 400 = 600 ⇒ <b>600/5 = 120 empresas</b>.</li>
        <li><b>Oferta de CP:</b> CM = 8q ≥ CVM = 4q sempre ⇒ cada empresa oferta q = p/8 ⇒ mercado: Q<sub>s</sub> = 120·p/8 = 15p.</li>
        <li><b>Choque — demanda cai</b> para \\(Q_D = 800 - 10p\\). Curto prazo: 800 − 10p = 15p ⇒ <b>p = 32</b>, Q = 480. Cada empresa: q = 32/8 = 4, lucro = 4·32 − (100 + 4·16) = <b class="no">−36</b> (prejuízo).</li>
        <li><b>Longo prazo:</b> empresas saem até o preço voltar a 40. Q = 800 − 400 = 400 ⇒ <b>400/5 = 80 empresas</b> (40 saíram).</li>
      </ol></div>
  </section>

  <section class="sec warn">
    <h3><span class="n">6</span> A questão de 10 pontos: dois gráficos, curto e longo prazo</h3>
    <p>Caiu nas duas provas de 2025 (Reforma Tributária; feijão de sequeiro) e nos exercícios das aulas (El Niño; bets). As versões de múltipla escolha dessas duas questões aparecem na íntegra logo abaixo da tabela; o <a href="#/discursiva">roteiro completo e as respostas-modelo</a> da versão discursiva estão na página da questão de gráficos.</p>
    <div class="extra"><b>Convenções:</b> pontos <b>1</b> (LP inicial), <b>2</b> (curto prazo) e <b>3</b> (LP final); movimento <b>A</b> = o choque (desloca D ou a O_CP); movimento <b>B</b> = entrada/saída de empresas (desloca a O_CP).<br><b>Gráfico da empresa, choque de demanda:</b> CM e CTM ficam parados, só a linha de preço muda.<br><b>Gráfico da empresa, choque de custo:</b> CM e CTM sobem/descem A.<br><b>Por que no CP o preço muda menos que A?</b> A O_CP se desloca A na vertical, mas a demanda é decrescente: o novo cruzamento ajusta parte pelo preço e parte pela quantidade. Como o CTM mudou A inteiro e o preço menos, surge prejuízo (custo ↑) ou lucro (custo ↓).<br><b>Feijão:</b> a terra de sequeiro é limitada (ninguém “entra” no sequeiro), então ele segue lucrando no LP; quem define o preço é o produtor irrigado, que entra e sai livremente.</div>
    <div class="figslot" data-fig="co_bets"></div>
    <div class="ler"><b>📊 Como ler este par de gráficos (bets reduzem a renda)</b>
      <ul>
        <li><b>Mercado (direita):</b> a demanda tracejada (“D inicial”) vai para a esquerda até “D final” — <b>seta A</b>. O novo cruzamento com a O_CP antiga é o <b>ponto 2</b> (preço p₂ menor). Depois, a O_CP se desloca para a esquerda (empresas saindo) — <b>seta B</b> — até cruzar a nova demanda na altura do preço original: <b>ponto 3</b>, sobre a O_LP.</li>
        <li><b>Empresa (esquerda):</b> as curvas de custo não se mexem (o choque foi de demanda). A linha laranja p₂ fica <b>abaixo</b> do CTM: o retângulo vermelho é o <b>prejuízo</b> = (CTM − p₂) × q₂. No ponto 3 a empresa volta ao fundo do CTM.</li>
      </ul></div>
    <div class="model"><p><b>Resposta-modelo (bets reduzem a renda para o varejo):</b> Inicialmente o mercado está no equilíbrio de longo prazo, nos pontos 1. Com menos renda, para cada preço a demanda é menor (movimento A). No curto prazo, o novo equilíbrio é o ponto 2: <b>preço e quantidade menores</b>. No gráfico da empresa, o custo por unidade excede o preço (seta vermelha): há <b>prejuízo</b>. À medida que se livram dos custos fixos, empresas <b>saem</b>, até a O_CP cruzar a nova demanda no preço de LP (ponto 3, movimento B). Comparado ao início: <b>quantidade menor, mesmo preço, menos empresas</b>.</p></div>
    <table class="t sm"><thead><tr><th>Choque</th><th>Curto prazo</th><th>Longo prazo</th><th>Nº de empresas</th></tr></thead><tbody>
      <tr><td>Demanda ↓ (bets)</td><td>P ↓, Q ↓, prejuízo</td><td>P = inicial, Q ↓</td><td>↓</td></tr>
      <tr><td>Demanda ↑ (Desenrola)</td><td>P ↑, Q ↑, lucro</td><td>P = inicial, Q ↑</td><td>↑</td></tr>
      <tr><td>Custo ↑ em A (El Niño)</td><td>P ↑ (menos que A), Q ↓, prejuízo</td><td>P ↑ exatamente A, Q ↓</td><td>↓</td></tr>
      <tr><td>Custo ↓ em A (Reforma Tributária)</td><td>P ↓ (menos que A), Q ↑, lucro</td><td>P ↓ exatamente A, Q ↑</td><td>↑</td></tr>
      <tr><td>Menos terra de sequeiro (feijão)</td><td>P ↑, Q ↓, lucro dos irrigados</td><td>P e Q = iniciais</td><td>irrigados ↑</td></tr>
    </tbody></table>
    <div class="ex"><b>Prova 2025 (manhã) — Reforma Tributária reduz o custo</b>
      <div class="qslot" data-q="Tema 4#14"></div>
      <b>Resolução:</b> é a linha “Custo ↓ em A” da tabela. CM e CTM descem ⇒ a O_CP desce (movimento A).<br><b>Curto prazo (ponto 2):</b> preço cai menos que A e quantidade sobe ⇒ p &gt; novo CTM ⇒ <b>lucro</b>.<br><b>Longo prazo:</b> o lucro atrai empresas (movimento B), até p = novo mín CTM (ponto 3): preço ainda menor, quantidade maior, mais empresas (D).</div>
    <div class="ex"><b>Prova 2025 (tarde) — feijão de sequeiro</b>
      <div class="qslot" data-q="Tema 4#15"></div>
      <b>Resolução:</b><br><b>Curto prazo:</b> a capacidade de sequeiro (a mais barata) diminui ⇒ oferta para a esquerda ⇒ P ↑ e Q ↓, com lucro para os irrigados.<br><b>Longo prazo:</b> como qualquer um pode entrar no feijão irrigado, entram irrigados até o preço voltar ao mínimo do CTM do irrigado ⇒ <b>mesmo preço, mesma quantidade e mais produtores irrigados</b> (E).<br>O preço de LP é definido por quem pode entrar livremente (o irrigado), não pelo sequeiro.</div>
  </section>

  <section class="sec art">
    <h3><span class="n">7</span> Questão numérica (Reforma Tributária)</h3>
    <div class="qslot" data-q="Tema 4#9"></div>
    <div class="qslot" data-q="Tema 4#10"></div>
    <div class="ex"><b>Resolução das duas:</b> \\(CT_{LP} = 2q^2 + 800\\) (q &gt; 0), demanda \\(Q_D = 1030 - 0{,}2p\\). A isenção reduz o custo em <b>30 por unidade</b>: \\(CT = 2q^2 + 800 - 30q\\).
    <ol class="mini">
      <li>Novo CTM = \\(2q + \\dfrac{800}{q} - 30\\). Subtrair uma constante abaixa a curva inteira, mas <b>não muda onde fica o fundo</b> ⇒ mínimo continua em q = 20.</li>
      <li>Preço de LP = mín CTM = 80 − 30 = <b>50</b> (1ª questão: B).</li>
      <li>Quantidade de LP: \\(Q_D(50) = 1030 - 10 = 1020\\).</li>
      <li>Nº de empresas = Q total ÷ q de cada = \\(\\dfrac{1020}{20}\\) = <b>51 empresas</b> (2ª questão: C).</li>
      <li>EC: a demanda zera em p = 1030/0,2 = 5150 ⇒ EC = \\(\\dfrac{(5150 - 50)\\cdot 1020}{2}\\) = 2.601.000.</li>
    </ol></div>
  </section>`,
  pegadinhas: [
    "No CP a empresa suspende se p < mín CVM (e não CTM). Com CVM ≤ p < CTM ela produz COM prejuízo, porque perde menos que o custo fixo.",
    "No equilíbrio de LP o lucro ECONÔMICO é zero — os insumos (inclusive o capital) estão sendo remunerados ao custo de oportunidade.",
    "Choque de demanda num setor de custo constante: no LP o preço volta ao mínimo do CTM; só quantidade e nº de empresas mudam.",
    "Choque de custo de A por unidade: no LP o preço muda exatamente A; no CP, muda menos que A.",
    "Não esqueça de nomear a curva de oferta de LONGO prazo (horizontal) e de dizer o que acontece com o NÚMERO de empresas.",
    "Os dois gráficos ficam lado a lado, na mesma altura: os preços são os mesmos nos dois eixos verticais.",
    "Um deslocamento constante no CTM (−30 por unidade) não muda a quantidade que minimiza o CTM.",
    "A demanda que UMA empresa competitiva enxerga é horizontal (no preço de mercado), mesmo com a demanda de mercado inclinada."
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
    ["Custo cai 30/unid. com CT = 2q² + 800 e Qd = 1030 − 0,2p", "p LP = 50; Q = 1020; 51 empresas."],
    ["Caminhoneiros: CT = 100 + 4q², Qd = 1000 − 10p", "LP: q = 5, p = 40, 120 empresas. Demanda cai para 800 − 10p: CP p = 32 (prejuízo 36); LP 80 empresas."]
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
  <div class="tldr"><b>A ideia central:</b> o equilíbrio de um mercado competitivo tem três propriedades boas: (i) lucro econômico zero, (ii) cada unidade produzida ao menor custo médio possível e (iii) <b>excedente total máximo</b> — todas as trocas que geram ganho acontecem e nenhuma troca que destrói valor acontece. Mas o mercado <b>não garante</b> uma distribuição justa, nem um resultado eficiente quando há <b>falhas de mercado</b>, como externalidades e poder de mercado.</div>

  <section class="sec sig">
    <h3>🔤 Siglas e símbolos deste tema</h3>
    <dl class="sym">
      <dt>EC / EP / ET</dt><dd>Excedente do consumidor / do produtor / total (= EC + EP).</dd>
      <dt>PM</dt><dd><b>Peso morto</b> (<i>deadweight loss</i>): excedente que <b>ninguém</b> recebe — perda líquida da sociedade.</dd>
      <dt>Alíquota efetiva</dt><dd>Imposto pago ÷ renda. Mostra o peso real do imposto para cada pessoa.</dd>
    </dl>
  </section>

  <section class="sec">
    <h3><span class="n">1</span> A quantidade eficiente</h3>
    <p>Relembrando os excedentes, agora com o olhar de “ganho para a sociedade”:</p>
    <ul>
      <li><b class="c2">Excedente do consumidor</b> = valor máximo que está disposto a pagar − valor que de fato paga.</li>
      <li><b class="c1">Excedente do produtor</b> = valor que recebe − custo de produzir aquela unidade. Esse custo é o <b>custo marginal</b>: cada ponto da curva de oferta diz quanto custa produzir aquela unidade específica (Tema 4).</li>
      <li><b>Excedente total</b> = EC + EP = (valor para quem compra) − (custo de quem produz), somado em todas as unidades trocadas.</li>
    </ul>
    <div class="two"><div class="figslot" data-fig="ef_exc"></div><div>
      <div class="ler"><b>📊 Como ler este gráfico (planta decorativa, slides)</b>
        <ul>
          <li><b class="c2">D (verde)</b>: \\(P = 420 - 12{,}5Q\\) — altura = quanto o consumidor daquela unidade valoriza o bem.</li>
          <li><b class="c1">O (azul)</b>: \\(P = 20 + 12{,}5Q\\) — altura = quanto custa produzir aquela unidade.</li>
          <li>Equilíbrio: <b>Q* = 16, P* = 220</b>.</li>
          <li>Triângulo verde EC = \\(\\dfrac{(420-220)\\times 16}{2}\\) = 1.600; triângulo azul EP = \\(\\dfrac{(220-20)\\times 16}{2}\\) = 1.600 ⇒ <b>ET = 3.200</b>.</li>
        </ul></div>
    </div></div>
    <h4>Por que Q* maximiza o excedente total?</h4>
    <div class="grid2">
      <div class="box"><b>Produzir menos (Q &lt; Q*)</b><br>Para as unidades entre Q e Q*, alguém <b>valoriza mais</b> do que custa produzir (demanda acima da oferta). Deixar de produzi-las é jogar ganho fora ⇒ perde-se o triângulo entre D e O, de Q até Q*.</div>
      <div class="box"><b>Produzir mais (Q &gt; Q*)</b><br>As unidades além de Q* <b>custam mais do que valem</b> para quem compra (oferta acima da demanda). Ex. do livro: a 15ª unidade custou R$ 320 e valia só R$ 120 ⇒ destruiu R$ 200. Também gera peso morto.</div>
    </div>
    <p>Logo, a quantidade de equilíbrio é a <b>quantidade eficiente</b>: não dá para aumentar o ganho de alguém sem reduzir o de outro.</p>
    <p class="note">A oferta aqui é inclinada (produtores com custos diferentes, ou curto prazo), por isso há EP. Com empresas iguais no LP a oferta é horizontal e o EP é zero — e o excedente total continua máximo.</p>
    <div class="extra"><b>Peso morto (regra geral):</b> é um triângulo com <b>base</b> = unidades que deixaram de ser trocadas (ou trocadas a mais) e <b>altura</b> = diferença entre valor (demanda) e custo (oferta) na quantidade que de fato foi negociada. Área = base × altura ÷ 2.</div>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> A mão invisível… e seus limites</h3>
    <p class="quote">“Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos o nosso jantar, mas da consideração que eles têm pelos seus próprios interesses.” <span>Adam Smith, A Riqueza das Nações (1776)</span></p>
    <p><b>O que isso significa:</b> cada pessoa busca o próprio interesse, sem coordenação central, e mesmo assim o resultado tem muitas características boas para a sociedade. Os preços fazem o papel de coordenador: se algo muda, preços se ajustam e um novo equilíbrio surge. É “como se” uma mão invisível organizasse tudo.</p>
    <div class="pc">
      <div class="pro"><b>O que os mercados fazem bem</b><ul><li>Organizam a produção de milhões de pessoas de forma razoavelmente eficiente (“maximizam o tamanho do bolo”).</li><li>Livre comércio e competição geram ganhos líquidos para a sociedade (Piketty, <i>O Capital no século XXI</i>, citado nos slides).</li></ul></div>
      <div class="con"><b>O que não garantem</b><ul><li>Que <b>cada indivíduo</b> ganhe, nem que não haja miséria (“como dividir o bolo”) ⇒ papel do governo de <b>redistribuir</b> (via impostos e gastos, sem precisar mexer no funcionamento dos mercados).</li><li>Eficiência na presença de <b>falhas de mercado</b>:
        <ul><li><b>Externalidade</b>: efeito sobre terceiros que quem decide não considera (poluir um rio para produzir tecido).</li>
        <li><b>Poder de mercado</b>: p &gt; CM (Tema 6).</li>
        Numa competição, uma empresa sozinha não banca medidas custosas (seria engolida pela concorrência) ⇒ é preciso <b>regulação</b>.</li></ul></div>
    </div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> Tributação e desigualdade no Brasil</h3>
    <div class="extra"><b>Regressivo × progressivo:</b> <b>regressivo</b> = a alíquota efetiva <b>cai</b> quando a renda sobe (pesa mais nos pobres); <b>progressivo</b> = a alíquota efetiva <b>sobe</b> com a renda (pesa mais nos ricos).</div>
    <div class="ex"><b>Por que o imposto sobre consumo é regressivo (livro):</b> alíquota de 10% sobre o consumo.
      <table class="t sm"><thead><tr><th></th><th>Renda</th><th>Consumo</th><th>Imposto (10% do consumo)</th><th>Alíquota efetiva (imposto ÷ renda)</th></tr></thead><tbody>
        <tr><td>Maria</td><td>R$ 1.000</td><td>R$ 900 (90%)</td><td>R$ 90</td><td class="no">9%</td></tr>
        <tr><td>José</td><td>R$ 20.000</td><td>R$ 10.000 (50%)</td><td>R$ 1.000</td><td class="ok">5%</td></tr></tbody></table>
      Quem é mais pobre gasta uma parte maior da renda em consumo ⇒ paga proporcionalmente mais. No Brasil, cerca de 42% da arrecadação vem de impostos sobre bens e serviços.</div>
    <ul>
      <li>Estudo do EU Tax Observatory (2025): a alíquota efetiva <b>cai</b> no topo da distribuição. Isenções e lacunas fiscais; arrecadação baseada fortemente em <b>impostos sobre o consumo</b>.</li>
      <li>Benefícios fiscais devem superar R$ 900 bilhões em 2026, dos quais quase R$ 620 bilhões seriam “privilégios”.</li>
    </ul>
    <div class="ex"><b>Prova 2025 (manhã) — dados do Ipea</b>
      <div class="qslot" data-q="Tema 5#6"></div>
      <b>Resolução:</b> compare as alíquotas efetivas à medida que a renda <b>sobe</b>: 1% mais rico → 13,6%; os 153 mil do topo (mais ricos ainda) → 13,2%; renda de R$ 26 milhões → 12,9%. Renda maior, alíquota menor ⇒ <b>regressiva</b> nessas faixas (A). Foi item verdadeiro na prova.</div>
  </section>`,
  pegadinhas: [
    "Eficiente = maximiza o excedente TOTAL; não significa distribuição justa.",
    "Excedente do produtor usa o CUSTO MARGINAL de cada unidade (não o custo médio).",
    "Produzir MAIS que o equilíbrio também gera peso morto (unidades que custam mais do que valem).",
    "Alíquota efetiva que cai com a renda = tributação REGRESSIVA.",
    "Mercados competitivos não garantem eficiência com falhas de mercado (externalidades, poder de mercado).",
  ],
  cards: [
    ["Três propriedades do equilíbrio de LP competitivo", "(i) lucro econômico zero; (ii) produção ao menor custo médio; (iii) excedente total máximo."],
    ["Quantidade eficiente", "A que maximiza o excedente total: todos os ganhos de troca são explorados."],
    ["Excedente total no gráfico", "Área entre a curva de demanda e a de oferta, de 0 até Q."],
    ["Mão invisível", "Cada um buscando o próprio interesse, coordenado pelos preços, promove o interesse da sociedade (Adam Smith, 1776)."],
    ["O que os mercados não garantem", "Que cada indivíduo ganhe (redistribuição) e eficiência quando há falhas de mercado."],
    ["Tributação regressiva", "Alíquota efetiva cai à medida que a renda aumenta."],
    ["Peso morto", "Perda de excedente total por trocas que deixam de acontecer (ou por trocas que destroem valor)."],
    ["Maria × José (imposto de 10% sobre consumo)", "Maria paga 9% da renda; José, 5% ⇒ imposto sobre consumo é regressivo."],
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
  <div class="tldr"><b>A ideia central:</b> quem tem poder de mercado enfrenta uma demanda <b>inclinada</b>: para vender mais, precisa <b>baixar o preço de todas as unidades</b>, não só da última. Por isso a <b>receita marginal fica abaixo da demanda</b>. A empresa produz onde <b>RM = CM</b> e cobra o preço que a demanda aceita nessa quantidade. Resultado: <b>preço maior e quantidade menor</b> que o eficiente (onde p = CM) ⇒ <b>peso morto</b>.</div>

  <section class="sec sig">
    <h3>🔤 Siglas e símbolos deste tema</h3>
    <dl class="sym">
      <dt>p(q)</dt><dd><b>Demanda inversa</b>: o preço máximo que se consegue cobrar vendendo q unidades. Ex.: p = 56 − 2,5q.</dd>
      <dt>a, b</dt><dd>Em p = a − bq: a = intercepto (preço em que ninguém compra), b = inclinação.</dd>
      <dt>RT</dt><dd>Receita total = q × p(q).</dd>
      <dt>RM</dt><dd>Receita marginal = dRT/dq: quanto a receita aumenta vendendo uma unidade a mais.</dd>
      <dt>CM, CTM, CF</dt><dd>Custo marginal, custo total médio, custo fixo.</dd>
      <dt>q<sub>m</sub>, p<sub>m</sub></dt><dd>Quantidade e preço do monopólio (RM = CM).</dd>
      <dt>q<sub>e</sub>, p<sub>e</sub></dt><dd>Quantidade e preço eficientes (p(q) = CM).</dd>
      <dt>PM</dt><dd>Peso morto (perda social, <i>deadweight loss</i>).</dd>
      <dt>π</dt><dd>Lucro = RT − CT.</dd>
      <dt>ANA, Aneel, ANAC</dt><dd>Agências reguladoras de Águas, Energia Elétrica e Aviação Civil.</dd>
      <dt>SBDC / CADE</dt><dd>Sistema Brasileiro de Defesa da Concorrência; o CADE é o órgão que julga fusões e cartéis.</dd>
    </dl>
  </section>

  <section class="sec">
    <h3><span class="n">1</span> Monopólio e de onde vem o poder</h3>
    <div class="grid3"><div class="box">Uma <b>única</b> empresa</div><div class="box">Sem <b>substitutos próximos</b></div><div class="box"><b>Barreiras à entrada</b> (algo impede outras de entrar)</div></div>
    <p><b>Fontes de barreiras:</b> custo de infraestrutura que não compensa duplicar (EDP e Sabesp, linhas de metrô, rodovias, pontes); controle de um recurso escasso (De Beers e os diamantes); <b>patentes</b> e direitos autorais (proteção legal que incentiva a pesquisa); <b>efeitos de rede</b>.</p>
    <p><b>Efeitos de rede</b> (Big Techs como Amazon, Microsoft, Meta): um produto vale mais quanto mais usuários tem — mais vendedores na Amazon atraem mais compradores, e vice-versa. “Todos querem estar onde todos estão” ⇒ mercados muito concentrados (“o vencedor leva tudo”).</p>
    <p><b>Poder de mercado</b> não exige monopólio: basta que a empresa possa subir o preço <b>sem perder todos os clientes</b> (seu salão de beleza preferido, por exemplo).</p>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Receita marginal: por que fica abaixo da demanda</h3>
    <p>A empresa não escolhe preço e quantidade livremente: está presa aos pares (q, p) da demanda. Então \\(RT(q) = q \\times p(q)\\). Derivando pela regra do produto:</p>
    <p class="f big">\\(RM(q) = \\dfrac{dRT}{dq} = \\underbrace{p(q)}_{\\text{ganha o preço da nova unidade}} + \\underbrace{q\\cdot\\dfrac{dp}{dq}}_{\\text{perde nas unidades anteriores } (&lt;0)}\\)</p>
    <div class="ex"><b>Com números</b> (livro: \\(p = 20 - q\\)): vendendo 7, o preço é 13 e RT = 91. Para vender 8, o preço tem de cair para 12 ⇒ RT = 96.
      <ul class="mini"><li>Ganha 12 com a 8ª unidade…</li><li>…mas perde R$ 1 em cada uma das 7 que já vendia (−7).</li><li>Receita marginal ≈ 12 − 7 = <b>5</b>, bem abaixo do preço 12.</li></ul></div>
    <p>Para demanda <b>linear</b> há um atalho:</p>
    <p class="f big">\\(p(q) = a - bq \\;\\Rightarrow\\; RT = aq - bq^2 \\;\\Rightarrow\\; RM(q) = a - 2bq\\)</p>
    <p><b>Em palavras:</b> a RM tem o <b>mesmo intercepto</b> que a demanda e o <b>dobro da inclinação</b> (no gráfico, corta o eixo horizontal na metade da distância da demanda).</p>
    <div class="trap"><b>Se a demanda vier como q(p)</b> (ex.: q = 16 − 4p), primeiro <b>isole p</b> (p = 4 − 0,25q) e só depois dobre a inclinação: RM = 4 − 0,5q.</div>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> A receita do monopolista: RM = CM, depois preço na demanda</h3>
    <ol>
      <li>Calcule a RM (dobre a inclinação da demanda inversa).</li>
      <li>Calcule o CM (derive o CT).</li>
      <li>Iguale <b>RM = CM</b> ⇒ encontra q<sub>m</sub>.</li>
      <li>Leve q<sub>m</sub> à <b>demanda</b> ⇒ encontra p<sub>m</sub>.</li>
      <li>Lucro = p<sub>m</sub>·q<sub>m</sub> − CT(q<sub>m</sub>).</li>
      <li>Para o peso morto: ache o eficiente (p(q) = CM ⇒ q<sub>e</sub>) e calcule o triângulo.</li>
    </ol>
    <div class="two"><div class="figslot" data-fig="mo_agua"></div><div>
      <div class="ex"><b>Companhia de água</b>: \\(p = 56 - 2{,}5q\\), \\(CT = q + 100\\).<br>
      1–2. \\(RM = 56 - 5q\\), \\(CM = 1\\).<br>
      3. \\(56 - 5q = 1 \\Rightarrow q = 11\\) milhões de m³.<br>
      4. Preço na demanda: \\(p(11) = 56 - 27{,}5 = 28{,}5\\).<br>
      5. Lucro = 28,5×11 − (11 + 100) = <b>202,5</b>.<br>
      6. Eficiente: p = CM ⇒ 56 − 2,5q = 1 ⇒ q = 22. Peso morto = \\(\\dfrac{(28{,}5 - 1)(22 - 11)}{2}\\) = <b>151,25</b>.</div>
    </div></div>
    <div class="ler"><b>📊 Como ler o gráfico do monopólio</b>
      <ul>
        <li><b class="c2">D (verde)</b>: demanda.</li>
        <li><b class="c4">RM (amarela)</b>: começa no mesmo ponto do eixo vertical e cai duas vezes mais rápido.</li>
        <li><b class="no">CM (vermelha)</b>: aqui horizontal em 1.</li>
        <li><b class="c3">CTM (roxa)</b>: decrescente (custo fixo alto).</li>
        <li>Para achar o monopólio: vá até onde <b>RM cruza CM</b> (q = 11), depois <b>suba até a demanda</b> para ler o preço (28,5) — ponto “Máx. lucro”.</li>
        <li>Ponto “Eficiente”: onde a <b>demanda cruza o CM</b> (q = 22, p = 1).</li>
        <li><b class="no">Triângulo vermelho (PM)</b>: entre q = 11 e q = 22, abaixo da demanda e acima do CM — unidades que valiam mais do que custavam, mas não foram produzidas.</li>
        <li><b class="c2">Triângulo verde (EC)</b>: abaixo da demanda e acima do preço 28,5.</li>
      </ul></div>
    <div class="trap"><b>Erro clássico:</b> achar q por RM = CM e esquecer de levar q à <b>demanda</b> para achar o preço. O preço vem de p(q), não da RM nem do CM!</div>
  </section>

  <section class="sec">
    <h3><span class="n">4</span> Por que é ineficiente?</h3>
    <p>Na quantidade de máximo lucro, <b>p &gt; CM</b>: há consumidores dispostos a pagar <b>mais</b> por uma unidade extra do que custaria produzi-la. Produzir essa unidade geraria ganho para a sociedade, mas o monopolista não produz porque, para vendê-la, teria de baixar o preço de todas as outras. Esse ganho perdido é o <b>ônus do poder de mercado</b> (perda social, peso morto, <i>deadweight loss</i>).</p>
    <p class="f big">\\(PM = \\dfrac{[\\,p_m - CM(q_m)\\,]\\times(q_e - q_m)}{2}\\)</p>
    <p class="note">Altura do triângulo = distância entre a demanda e o CM em q<sub>m</sub>; base = quanto falta para chegar ao eficiente. (Fórmula de triângulo: vale quando demanda e CM são retas.)</p>
    <div class="ex"><b>Exemplo do livro:</b> \\(p = 20 - q\\), \\(CT = 0{,}2q^2 + 3{,}2q + 50\\). RM = 20 − 2q; CM = 0,4q + 3,2 ⇒ 20 − 2q = 0,4q + 3,2 ⇒ <b>q = 7, p = 13</b> (CM(7) = 6). Lucro = 91 − 82,2 = 8,8. Eficiente: 20 − q = 0,4q + 3,2 ⇒ q = 12, p = 8. <b>Peso morto = \\(\\dfrac{(13 - 6)(12 - 7)}{2}\\) = 17,5</b>.</div>
    <p>O que fazer? <b>Lei da Concorrência</b> (Sistema Brasileiro de Defesa da Concorrência): análise de fusões, aquisições, cartéis, acordos de preços. Na Europa, o <b>Digital Markets Act</b> multou o Google em US$ 1 bi por favorecer seus serviços na Google Play.</p>
  </section>

  <section class="sec">
    <h3><span class="n">5</span> Monopólio natural e regulação</h3>
    <p><b>Monopólio natural</b>: uma única empresa atende todo o mercado a um custo menor do que duas ou mais. Típico com <b>custo fixo alto</b> e CTM <b>sempre decrescente</b> (água: CTM = 1 + \\(\\dfrac{100}{q}\\)). Dividir o mercado só duplicaria o custo fixo (imagine duas redes de canos em cada rua).</p>
    <div class="two"><div class="figslot" data-fig="mo_reg"></div><div>
    <table class="t sm"><thead><tr><th>Regra</th><th>Resultado (água)</th></tr></thead><tbody>
      <tr><td><b>Sem regulação</b> (RM = CM)</td><td>q = 11, p = 28,5: lucro máximo (202,5), peso morto grande (151,25).</td></tr>
      <tr><td><b>p = CM</b></td><td>q = 22, p = 1: eficiente (PM = 0), mas como CM &lt; CTM há <b>prejuízo</b> = CF = 100 ⇒ precisa de <b>subsídio</b>.</td></tr>
      <tr><td><b>p = CTM</b></td><td>q = 20, p = 6: lucro zero, sem subsídio, peso morto <b>pequeno</b> (5). Mas regular pelo custo não dá incentivo a reduzir custos.</td></tr>
    </tbody></table>
    <div class="ler"><b>📊 Gráfico ao lado</b>: mostra a regra <b>p = CTM</b>. O ponto “regulado” fica onde a <b>demanda cruza o CTM roxo</b> (q = 20, p = 6). Sobra só um triangulinho vermelho de peso morto até q = 22.</div>
    </div></div>
    <p>Alternativas: <b>leilões de concessão</b> (rodovias, pontes, metrô), <b>agências reguladoras</b> (ANA — águas, Aneel — energia, ANAC — aviação) ou o governo operar o monopólio (risco: baixa capacidade de investir, gestão ineficiente, corrupção).</p>
    <div class="extra"><b>Como achar o “melhor teto sem subsídio”:</b> queremos a maior quantidade possível (mais perto do eficiente) sem prejuízo ⇒ lucro = 0 ⇔ p(q) = CTM(q). Isso dá uma equação do 2º grau com duas raízes; escolha a <b>maior raiz</b> (maior q ⇒ menor preço). Mas primeiro teste p = CM: se não der prejuízo, é ele o melhor teto.</div>
    <div class="ex"><b>Prova 2025 (tarde) — pedágio da ponte</b>
      <div class="qslot" data-q="Tema 6#11"></div>
      <b>Resolução:</b>
      <ul class="mini">
        <li><b>Monopólio:</b> RM = 85 − 12q, CM = 5 + 4q ⇒ 80 = 16q ⇒ q = 5 (mil veículos), p = 85 − 30 = 55, lucro = 55·5 − (168 + 25 + 50) = 275 − 243 = <b>32</b> mil/dia ⇒ <b>C</b>.</li>
        <li><span class="no">B e E estão erradas:</span> descrevem o <b>eficiente</b> (p(q) = CM ⇒ 85 − 6q = 5 + 4q ⇒ q = 8, p = 37), não o monopólio.</li>
        <li><span class="no">A está errada:</span> peso morto = \(\dfrac{(55 - 25)(8 - 5)}{2}\) = 45, não 30.</li>
        <li><span class="no">D está errada:</span> EC do monopólio = \(\dfrac{(85 - 55)\cdot 5}{2}\) = 75, não 45.</li>
      </ul></div>
    <div class="ex"><b>Prova 2025 (tarde) — teto do pedágio</b>
      <div class="qslot" data-q="Tema 6#12"></div>
      <b>Resolução:</b> primeiro teste o eficiente: com p = 37 (q = 8), lucro = 296 − (168 + 40 + 128) = −40 ⇒ precisaria de subsídio, não serve. Então procure o maior q com lucro zero: lucro = (85 − 6q)q − 168 − 5q − 2q² = 80q − 8q² − 168 = 0 ⇒ (÷8) q² − 10q + 21 = 0 ⇒ q = 3 ou 7. Fica com a <b>maior raiz</b> (mais veículos, menor preço): <b>q = 7 ⇒ p = 85 − 42 = 43</b> (D).</div>
    <div class="ex"><b>Questões de prova — app de mobilidade</b>
      <div class="qslot" data-q="Tema 6#7"></div>
      <b>Resolução:</b> RM = 4 − 0,4q (dobro da inclinação) e CM = 0,4 ⇒ 4 − 0,4q = 0,4 ⇒ q = 9; p(9) = 4 − 1,8 = 2,2; lucro = 2,2·9 − (0,4·9 + 6,4) = 19,8 − 10 = 9,8 (A).
      <div class="qslot" data-q="Tema 6#8"></div>
      <b>Resolução:</b> eficiente: p = CM ⇒ 4 − 0,2q = 0,4 ⇒ q = 18 ⇒ peso morto sem regulação = \(\dfrac{(2{,}2 - 0{,}4)(18 - 9)}{2}\) = 8,1 ⇒ A é correta.<br>Com p = 0,4: q = 18 e PM = 0 ⇒ B é correta.<br>Com p = 0,4: lucro = 0,4·18 − (0,4·18 + 6,4) = −6,4 ⇒ subsídio de 6,4 ⇒ C é correta.<br>Lucro do monopolista = 9,8 ⇒ E também é correta.<br><span class="no">A INCORRETA é a D:</span> com p = 0,8 &gt; CM ainda sobra peso morto; o máximo de excedente é em p = 0,4.
      <div class="qslot" data-q="Tema 6#9"></div>
      <b>Resolução:</b> a demanda veio como q(p): <b>isole p</b> primeiro ⇒ p = 4 − 0,25q ⇒ RM = 4 − 0,5q = CM = 1 ⇒ q = 6 ⇒ p = 2,5 (C); lucro = 15 − 6 − 6,4 = 2,6.
      <div class="qslot" data-q="Tema 6#10"></div>
      <b>Resolução:</b> p = CM = 1 daria prejuízo (= CF = 6,4), então usa-se p = CTM: 4 − 0,25q = 1 + \(\dfrac{6{,}4}{q}\) ⇒ 0,25q² − 3q + 6,4 = 0 (×4: q² − 12q + 25,6 = 0 ⇒ q = \(\dfrac{12 \pm \sqrt{41{,}6}}{2}\) ≈ 2,78 ou 9,22) ⇒ maior raiz q ≈ 9,22 ⇒ <b>p = 4 − 0,25·9,22 ≈ 1,69</b> (B).</div>
  </section>

  <section class="sec">
    <h3><span class="n">6</span> Casos menos extremos</h3>
    <p><b>Competição monopolística</b>: várias empresas com produtos <b>parecidos, mas não idênticos</b> (restaurantes, salões de beleza). Cada uma pode subir um pouco o preço sem perder todos os clientes (tem algum poder de mercado), mas há livre entrada. (Tratado no livro.)</p>
  </section>`,
  pegadinhas: [
    "O preço do monopolista vem da DEMANDA no q onde RM = CM — não da RM.",
    "RM de demanda linear: mesmo intercepto, inclinação DOBRADA (p = 56 − 2,5q ⇒ RM = 56 − 5q).",
    "O excedente total é máximo onde p(q) = CM, não onde RM = CM.",
    "Peso morto: triângulo entre a demanda e o CM, da quantidade do monopólio até a eficiente.",
    "Monopólio natural com p = CM gera prejuízo (CM < CTM) ⇒ precisa de subsídio.",
    "O melhor teto sem subsídio é p = CTM na MAIOR quantidade que zera o lucro (a menor raiz dá o preço mais alto).",
    "Efeitos de rede tendem a gerar monopólios — e monopólios não são eficientes.",
    "Se a demanda vier como q = f(p), isole p ANTES de dobrar a inclinação para achar a RM."
  ],
  cards: [
    ["Monopólio", "Uma empresa, sem substitutos próximos, com barreiras à entrada."],
    ["Efeitos de rede", "O produto vale mais quanto mais usuários tem ⇒ mercados muito concentrados."],
    ["Receita marginal (demanda p = a − bq)", "\\(RM = a - 2bq\\)"],
    ["Por que RM < p?", "Para vender mais uma unidade, o monopolista baixa o preço de TODAS as unidades: ganha p na nova, perde nas anteriores."],
    ["Regra do monopolista", "RM = CM; o preço sai da demanda nesse q."],
    ["Água: p = 56 − 2,5q, CT = q + 100", "q = 11, p = 28,5, lucro = 202,5; eficiente q = 22; peso morto = 151,25."],
    ["Peso morto do monopólio", "Triângulo entre demanda e CM, de q_monopólio até q_eficiente."],
    ["Monopólio natural", "Uma empresa produz para todo o mercado a custo menor que duas ou mais (CTM decrescente)."],
    ["Regular com p = CM", "Peso morto zero, mas prejuízo (= CF se CM constante) ⇒ subsídio."],
    ["Regular com p = CTM", "Lucro zero, sem subsídio, peso morto pequeno; sem incentivo a reduzir custo."],
    ["Pedágio: p = 85 − 6q, CT = 168 + 5q + 2q²", "Monopólio: q = 5, p = 55, lucro 32. Teto sem prejuízo e sem subsídio: p = 43."],
    ["Lei da Concorrência", "Estrutura o Sistema Brasileiro de Defesa da Concorrência (fusões, cartéis, acordos de preço)."],
    ["p = 20 − q, CT = 0,2q² + 3,2q + 50 (livro)", "q = 7, p = 13, lucro 8,8; eficiente q = 12; peso morto 17,5."]
  ]
},
/* ============================================================ TEMA 7 */
{
  id: "Tema 7",
  cor: "#22d3ee",
  titulo: "Oligopólio e Teoria dos Jogos",
  cap: "Cap. 9 Marchon",
  tema: "Dilema dos prisioneiros, estratégia dominante e equilíbrio de Nash",
  lab: "oligo",
  resumo: `
  <div class="tldr"><b>A ideia central:</b> no oligopólio há <b>poucas</b> empresas, e cada uma sabe que sua melhor escolha <b>depende do que as outras fizerem</b> (interdependência). A teoria dos jogos organiza esse raciocínio com três ferramentas: <b>estratégia dominante</b> (a melhor jogada não importa o que o outro faça), <b>Equilíbrio de Nash</b> (ninguém se arrepende da própria escolha, dada a do outro) e o <b>dilema dos prisioneiros</b> (cooperar seria melhor para todos, mas cada um, sozinho, tem incentivo a trair).</div>

  <section class="sec sig">
    <h3>🔤 Siglas e símbolos deste tema</h3>
    <dl class="sym">
      <dt>Jogador</dt><dd>Quem decide (empresa, país, prisioneiro).</dd>
      <dt>Estratégia</dt><dd>Uma opção de ação (preço alto/baixo, confessar/não confessar).</dd>
      <dt>Payoff</dt><dd>O resultado que cada jogador obtém (lucro, anos de prisão). Na matriz, cada célula traz o payoff dos dois.</dd>
      <dt>EN</dt><dd>Equilíbrio de Nash.</dd>
      <dt>AGI</dt><dd>Inteligência Artificial Geral (<i>Artificial General Intelligence</i>).</dd>
    </dl>
  </section>

  <section class="sec">
    <h3><span class="n">1</span> Oligopólios por toda parte</h3>
    <div class="grid2">
      <div class="box">Remédios para perda de peso da classe GLP-1 (como Ozempic e Mounjaro; orais ou injetáveis) nos EUA: Eli Lilly 58%, Novo Nordisk 42%. Uso por adultos subiu de 3% (2024) para 11% (2026); obesidade caiu de 39,9% para 36,4%.</div>
      <div class="box">Aviação doméstica: LATAM 41%, Gol 32%, Azul 27%. Aviões comerciais: Airbus e Boeing (e a Embraer subindo).</div>
      <div class="box">Bandeiras de cartão: Mastercard 52%, Visa 31–37%.</div>
      <div class="box">Telecom: Vivo 38%, Claro 33%, TIM 22%.</div>
    </div>
  </section>

  <section class="sec">
    <h3><span class="n">2</span> Dilema dos prisioneiros e estratégia dominante</h3>
    <p>Dois parceiros de crime são interrogados em salas separadas. Penas: ninguém confessa ⇒ 4 anos cada; um confessa e o outro não ⇒ quem confessou pega 3 e o outro 15; os dois confessam ⇒ 10 cada.</p>
    <table class="t sm"><thead><tr><th>A \\ B</th><th>B confessa</th><th>B não confessa</th></tr></thead><tbody>
      <tr><td><b>A confessa</b></td><td class="ok">A: 10; B: 10 ★</td><td>A: 3; B: 15</td></tr>
      <tr><td><b>A não confessa</b></td><td>A: 15; B: 3</td><td>A: 4; B: 4</td></tr></tbody></table>
    <p class="note">Como ler a matriz: as <b>linhas</b> são as opções de A; as <b>colunas</b>, as de B. Cada célula mostra o que acontece com cada um se aquelas duas escolhas forem feitas. Aqui o payoff é <b>anos de prisão</b>: quanto menor, melhor.</p>
    <p><b>Raciocínio de A:</b><br>“Se B confessar, eu pego 10 confessando ou 15 calado ⇒ confesso.”<br>“Se B não confessar, pego 3 confessando ou 4 calado ⇒ confesso.”<br>Em <b>qualquer</b> cenário, confessar dá menos anos ⇒ confessar é <b>estratégia dominante</b>. B raciocina igual.</p>
    <p><b>Resultado:</b> os dois confessam e pegam 10 anos — quando poderiam pegar 4 se ambos ficassem calados. Cooperar é melhor <b>para os dois juntos</b>, mas é <b>individualmente irracional</b>: cada um, sozinho, ganha traindo. Esse é o “dilema”.</p>
    <p><b>Estratégia dominante</b>: a melhor estratégia para um jogador, <b>independentemente</b> das estratégias dos demais.</p>
    <div class="two"><div class="figslot" data-fig="ol_prec"></div><div>
      <div class="ler"><b>📊 Como ler a matriz da guerra de preços</b> (payoff = lucro: quanto maior, melhor)
        <ul>
          <li>Os payoffs <b>sublinhados e destacados em verde</b> são as <b>melhores respostas</b>: dado o que o outro fez, é o melhor que se pode obter.</li>
          <li>A célula com <b>contorno verde</b> é o Equilíbrio de Nash: os dois payoffs são melhores respostas.</li>
          <li>Se B cobra alto, A prefere baixo (150 &gt; 100).<br>Se B cobra baixo, A prefere baixo (75 &gt; 50).<br>⇒ <b>preço baixo é dominante</b>.<br>Resultado: 75 cada, em vez de 100 com os dois cobrando alto.</li>
        </ul></div>
    </div></div>
    <p>Mesmo padrão em: corridas armamentistas, guerra fiscal entre estados, pesca predatória, <b>guerra de preços</b>, corrida pela AGI.</p>
  </section>

  <section class="sec">
    <h3><span class="n">3</span> Equilíbrio de Nash</h3>
    <p><b>Um par de estratégias em que, dada a escolha do oponente, cada um está escolhendo o que é melhor para si.</b> Teste: depois de ver o que o outro fez, alguém se arrependeria e mudaria sozinho? Se ninguém mudaria, é Nash.</p>
    <div class="extra"><b>Método do sublinhado (passo a passo):</b>
      <ol class="mini">
        <li>Fixe uma coluna (uma escolha de B). Olhando só os payoffs de <b>A</b> nessa coluna, sublinhe o maior.</li>
        <li>Repita para a outra coluna.</li>
        <li>Fixe uma linha (uma escolha de A). Olhando só os payoffs de <b>B</b> nessa linha, sublinhe o maior. Repita para a outra linha.</li>
        <li>Célula com <b>os dois payoffs sublinhados</b> = Equilíbrio de Nash. Pode haver zero, um ou mais.</li>
        <li>Se um jogador sublinhou a <b>mesma linha (ou coluna) nas duas vezes</b>, essa é a estratégia dominante dele.</li>
      </ol></div>
    <div class="ex"><b>Exercício da aula — Embraer (E) × ABDG</b> (ABDG é a concorrente do exercício; cada uma escolhe entre jatos executivos e aviões comerciais de <b>corredor único</b>, os de fuselagem estreita; lucros em milhões de US$)
      <div class="qslot" data-q="Tema 7#4"></div>
      <b>Resolução</b> — monte a matriz:
      <table class="t sm"><thead><tr><th>E \ ABDG</th><th>Jatos executivos</th><th>Corredor único</th></tr></thead><tbody>
        <tr><td><b>Jatos executivos</b></td><td>E: 2; ABDG: 7</td><td class="ok">E: 5; ABDG: 15 ★</td></tr>
        <tr><td><b>Corredor único</b></td><td class="ok">E: 6; ABDG: 11 ★</td><td>E: 4; ABDG: 9</td></tr></tbody></table>
      <ul class="mini">
        <li><b>Embraer:</b><br>se ABDG faz jatos, melhor corredor único (6 &gt; 2);<br>se ABDG faz corredor único, melhor jatos (5 &gt; 4).<br>A melhor resposta <b>muda</b> ⇒ sem dominante (A errada).</li>
        <li><b>ABDG:</b><br>se E faz jatos, melhor corredor único (15 &gt; 7);<br>se E faz corredor único, melhor jatos (11 &gt; 9).<br>Também sem dominante.</li>
        <li>Células com as duas melhores respostas: <b>dois Equilíbrios de Nash</b> — (E: jatos; ABDG: corredor único) e (E: corredor único; ABDG: jatos) (C). Cada uma prefere ficar num segmento diferente da outra.<br><span class="no">E está errada:</span> Nash é par de <b>estratégias</b>, não de payoffs.</li>
      </ul></div>
    <div class="ex"><b>Slides — GLP-1 (empresas E e L, orais × injetáveis)</b>, mesmo padrão da Embraer:
      <div class="qslot" data-q="Tema 7#5"></div>
      <b>Resolução:</b><br><b>E</b> prefere orais se L faz injetáveis (14 &gt; 7) e injetáveis se L faz orais (10 &gt; 8).<br><b>L</b> prefere injetáveis se E faz orais (10 &gt; 7) e orais se E faz injetáveis (14 &gt; 8).<br>Nash: (E orais, L injetáveis) e (E injetáveis, L orais) (B) — cada uma num segmento.</div>
    <div class="trap">O Equilíbrio de Nash é um <b>par de estratégias</b> (ex.: “E faz jatos, ABDG faz corredor único”), não um par de payoffs (“5 e 15”). Em jogo <b>não simétrico</b>, analise cada jogador separadamente.</div>
    <div class="ex"><b>Prova 2025 (tarde) — IA relacional × funcional</b>
      <div class="qslot" data-q="Tema 7#6"></div>
      <b>Resolução:</b> payoff = receita − custo:
      <table class="t sm"><thead><tr><th>A \ B</th><th>Relacional</th><th>Funcional</th></tr></thead><tbody>
        <tr><td><b>Relacional</b></td><td class="ok">140 − 70 = 70; 70 ★</td><td>200 − 70 = 130; 70 − 30 = 40</td></tr>
        <tr><td><b>Funcional</b></td><td>40; 130</td><td>120 − 30 = 90; 90</td></tr></tbody></table>
      Se a outra faz relacional: 70 &gt; 40.<br>Se a outra faz funcional: 130 &gt; 90.<br>⇒ relacional é <b>dominante</b> para ambas (A).<br>Nash = (rel, rel), mesmo (func, func) sendo melhor para as duas ⇒ dilema dos prisioneiros.<br><span class="no">D está errada:</span> não há recurso comum sendo esgotado.</div>
    <div class="ex"><b>Prova 2025 (manhã) — fragrâncias, jogado uma vez</b>
      <div class="qslot" data-q="Tema 7#7"></div>
      <b>Resolução:</b> para cada empresa, “não cooperar” rende mais em qualquer caso: se a outra coopera, 11,53 &gt; 9; se a outra não coopera, 6,75 &gt; 4,88 ⇒ não cooperar é <b>dominante</b> ⇒ o único Nash é (não coopera, não coopera) (C) — embora (9, 9) fosse melhor para as duas: dilema dos prisioneiros.</div>
  </section>`,
  pegadinhas: [
    "Equilíbrio de Nash é um PAR DE ESTRATÉGIAS, não de payoffs.",
    "Estratégia dominante é a melhor qualquer que seja a escolha do outro; um jogo pode ter Nash sem ter estratégia dominante (Embraer, GLP-1).",
    "Um jogo pode ter mais de um Equilíbrio de Nash.",
    "No dilema dos prisioneiros, existe resultado melhor para os dois, mas ele não é equilíbrio.",
    "Jogo não simétrico: analise cada jogador separadamente.",
    "Se o payoff for anos de prisão (ou custo), o MENOR é o melhor — leia o enunciado antes de sublinhar."
  ],
  cards: [
    ["Oligopólio", "Poucas empresas concentram o mercado e têm consciência da interdependência."],
    ["Estratégia dominante", "A melhor estratégia para um jogador, independentemente do que os outros escolhem."],
    ["Equilíbrio de Nash", "Par de estratégias em que, dada a escolha do oponente, cada um escolhe o melhor para si (ninguém se arrepende)."],
    ["Dilema dos prisioneiros", "Cada um tem estratégia dominante de não cooperar; o resultado é pior para ambos do que cooperar."],
    ["Guerra de preços (100/100, 50/150, 75/75)", "Preço baixo é dominante ⇒ ambos cobram baixo (75 cada)."],
    ["Embraer × ABDG", "Sem estratégia dominante; dois Equilíbrios de Nash (cada uma num segmento diferente)."],
  ]
}
];

const FORMULAS = [
  ["Tema 1", "Equilíbrio", "\\(Q_d(P^*) = Q_s(P^*)\\)", "arroz: 5,6 − 0,2P = −1 + 2P ⇒ P* = 3"],
  ["Tema 1", "Excedente do consumidor (linear)", "\\(EC = \\tfrac{1}{2}(P_{\\max} - P^*)\\,Q^*\\)", "P_max: onde a demanda zera"],
  ["Tema 1", "Excedente do produtor (linear)", "\\(EP = \\tfrac{1}{2}(P^* - P_{\\min})\\,Q^*\\)", "P_min: onde a oferta começa"],
  ["Tema 1", "Excesso de demanda (teto)", "\\(Q_d(\\bar P) - Q_s(\\bar P)\\)", "piso: Q_s − Q_d = excesso de oferta"],
  ["Tema 2", "Elasticidade-preço da demanda", "\\(\\varepsilon = \\dfrac{\\Delta\\%Q}{\\Delta\\%P} = \\dfrac{dQ}{dP}\\cdot\\dfrac{P}{Q}\\)", "|ε| < 1 inelástica; > 1 elástica"],
  ["Tema 2", "Variação percentual", "\\(\\Delta\\% = \\dfrac{\\text{final} - \\text{inicial}}{\\text{inicial}}\\times 100\\%\\)", ""],
  ["Tema 2", "Elasticidade-renda", "\\(\\varepsilon_R = \\dfrac{\\Delta\\%Q}{\\Delta\\%R}\\)", "> 0 normal; > 1 luxo; < 0 inferior"],
  ["Tema 2", "Elasticidade cruzada", "\\(\\varepsilon_{AB} = \\dfrac{\\Delta\\%Q_A}{\\Delta\\%P_B}\\)", "> 0 substitutos; < 0 complementares"],
  ["Tema 2", "Regressão log-log", "\\(\\ln y = \\alpha + \\beta \\ln x\\)", "β = elasticidade"],
  ["Tema 3", "Custo total", "\\(CT = CF + CV\\)", ""],
  ["Tema 3", "Custos médios", "\\(CTM = \\dfrac{CT}{q} = CVM + CFM\\)", ""],
  ["Tema 3", "Custo marginal", "\\(CM = \\dfrac{dCT}{dq} = \\dfrac{dCV}{dq}\\)", "não depende do CF"],
  ["Tema 3", "Mínimo do CTM", "\\(CM(q) = CTM(q)\\)", "CT = aq² + F ⇒ q = \\(\\sqrt{\\tfrac{F}{a}}\\), CTM = 2√(aF)"],
  ["Tema 4", "Maximização de lucro", "\\(RM(q) = CM(q)\\)", "competição: p = CM"],
  ["Tema 4", "Lucro (retângulo)", "\\(\\pi = (p - CTM)\\times q\\)", "p = 145, q = 9: (145 − 90,56)·9 = 490"],
  ["Tema 4", "Suspender no curto prazo", "\\(p < \\min CVM\\)", ""],
  ["Tema 4", "Sair no longo prazo", "\\(p < \\min CTM\\)", ""],
  ["Tema 4", "Equilíbrio de LP", "\\(p = CM = \\min CTM\\)", "lucro econômico zero"],
  ["Tema 4", "Nº de empresas no LP", "\\(n = \\dfrac{Q_D(p_{LP})}{q_{\\min CTM}}\\)", "\\(\\dfrac{1020}{20}\\) = 51"],
  ["Tema 4", "Oferta de mercado", "\\(Q(p) = \\sum_j q_j(p)\\)", "soma horizontal"],
  ["Tema 5", "Excedente total", "\\(ET = EC + EP\\)", "máximo no equilíbrio competitivo"],
  ["Tema 6", "Receita marginal (geral)", "\\(RM = p(q) + q\\,\\dfrac{dp}{dq}\\)", "RM < p quando a demanda é inclinada"],
  ["Tema 6", "Receita marginal (linear)", "\\(p = a - bq \\Rightarrow RM = a - 2bq\\)", ""],
  ["Tema 6", "Lucro", "\\(\\pi = RT - CT = p(q)\\,q - CT(q)\\)", ""],
  ["Tema 6", "Excedente do consumidor (demanda linear)", "\\(EC = \\tfrac{1}{2}\\,(a - p_m)\\,q_m\\)", "a: intercepto da demanda"],
  ["Tema 6", "Peso morto do monopólio", "\\(PM = \\tfrac{1}{2}\\,[p_m - CM(q_m)]\\,(q_e - q_m)\\)", "curvas lineares; q_e: p(q) = CM"],
  ["Tema 6", "Teto sem subsídio", "\\(p(q) = CTM(q)\\)", "resolva em q e use a maior raiz (menor preço)"],
];
