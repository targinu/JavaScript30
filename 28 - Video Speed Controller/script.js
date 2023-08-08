//obtem os elementos
const velocidade = document.querySelector(".speed");
const barra = velocidade.querySelector(".speed-bar");
const video = document.querySelector(".flex");

//manipulador de evento para movimento do mouse ou toque
function manipularMovimento(e) {
  //verifica se é um evento de toque
  const isTouch = e.type === "touchmove";
  //calcula a posição vertical do toque/movimento
  const y = isTouch
    ? e.touches[0].pageY - this.offsetTop
    : e.pageY - this.offsetTop;
  const percentual = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const altura = Math.round(percentual * 100) + "%";
  const taxaReproducao = percentual * (max - min) + min;
  barra.style.height = altura;
  barra.textContent = taxaReproducao.toFixed(2) + "×";
  video.playbackRate = taxaReproducao;
}

//adiciona listener de eventos para movimento do mouse ou toque
velocidade.addEventListener("mousemove", manipularMovimento);
velocidade.addEventListener("touchmove", manipularMovimento);
