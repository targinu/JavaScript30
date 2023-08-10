//obtem os elementos
const buracos = document.querySelectorAll(".buraco");
const painelPontuacao = document.querySelector(".pontuacao");
const toupeiras = document.querySelectorAll(".toupeira");
let ultimoBuraco;
let tempoAcabou = false;
let pontuacao = 0;

//gera um tempo aleatório entre min e max
function tempoAleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//seleciona um buraco aleatório
function buracoAleatorio(buracos) {
  const idx = Math.floor(Math.random() * buracos.length);
  const buraco = buracos[idx];
  if (buraco === ultimoBuraco) {
    console.log("Ah não, é o mesmo buraco!");
    return buracoAleatorio(buracos);
  }
  ultimoBuraco = buraco;
  return buraco;
}

//faz a toupeira aparecer e desaparecer
function aparecer() {
  const tempo = tempoAleatorio(200, 1000);
  const buraco = buracoAleatorio(buracos);
  buraco.classList.add("emergir");
  setTimeout(() => {
    buraco.classList.remove("emergir");
    if (!tempoAcabou) aparecer();
  }, tempo);
}

//inicia o jogo
function iniciarJogo() {
  painelPontuacao.textContent = 0;
  tempoAcabou = false;
  pontuacao = 0;
  aparecer();
  setTimeout(() => (tempoAcabou = true), 10000);
}

//acerta a toupeira
function acertar(e) {
  if (!e.isTrusted) return; // Evita trapaças!
  pontuacao++;
  this.parentNode.classList.remove("emergir");
  painelPontuacao.textContent = pontuacao;
}

//adiciona um listener de clique a cada toupeira
toupeiras.forEach((toupeira) => toupeira.addEventListener("click", acertar));
