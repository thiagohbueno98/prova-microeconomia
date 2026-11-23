# Microeconomia ITA — Estudo (GED-72, Prova 1)

Site estático de estudo para a Prova 1 de Microeconomia (GED-72, ITA), no mesmo formato do
[site de Macroeconomia](https://github.com/thiagohbueno98/prova-macroeconomia).

**Acesse:** https://thiagohbueno98.github.io/prova-microeconomia/

## O que tem

- **7 temas** (só o conteúdo dos slides de 2026) com resumo didático, gráficos, exemplos resolvidos e pegadinhas:
  1. Demanda e Oferta
  2. Elasticidade
  3. Produção e Custos
  4. Mercados Competitivos
  5. Eficiência e Impostos
  6. Poder de Mercado
  7. Oligopólio e Teoria dos Jogos
- **Laboratórios interativos**: deslocamentos de curvas, controle de preços, elasticidade e regressão log-log,
  custos da confeitaria, simulador empresa × mercado (curto e longo prazo), excedente total e peso morto,
  monopólio e regulação e resolvedor de jogos 2×2.
- **102 questões comentadas**, muitas tiradas das provas de 2025 (filtro “Das provas 2025”).
- **Questão de gráficos (10 pts)**: checklist da correção, simulador passo a passo e respostas-modelo.
- **Flashcards**, **simulado** cronometrado, **formulário** e **pegadinhas**.

O progresso fica salvo no navegador (localStorage).

## Rodar localmente

Abra `index.html` no navegador. Não há build nem dependências (KaTeX vem por CDN).

## Estrutura

```
index.html          layout e estilos
assets/charts.js    utilidades, motor de gráficos SVG e modelos econômicos
assets/labs.js      laboratórios interativos
assets/conteudo.js  resumos, flashcards, pegadinhas e formulário
assets/questoes.js  banco de questões
assets/app.js       rotas, questões, flashcards, simulado e questão discursiva
```

Fontes: slides de GED-72 (Marchon, *Introdução à Microeconomia*; Mankiw, *Introdução à Economia*),
planilhas das aulas e provas de 2025. Blocos marcados “Complemento” vão além dos slides.
