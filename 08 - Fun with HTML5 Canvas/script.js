//obtem os elementos
const canvas = document.querySelector("#desenho");
const ctx = canvas.getContext("2d");

//define o tamanho do canvas como o tamanho total da janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//configura as propriedades do desenho
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

//variaveis de controle do desenho
let estaDesenhando = false;
let ultimoX = 0;
let ultimoY = 0;
let matiz = 0;
let direcao = true;

//função para desenhar no canvas
function desenhar(e) {
  if (!estaDesenhando) return;
  console.log(e);

  //configura a cor da linha com base na matiz
  ctx.strokeStyle = `hsl(${matiz}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(ultimoX, ultimoY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  //atualiza as coordenadas do último ponto desenhado
  ultimoX = e.offsetX;
  ultimoY = e.offsetY;

  //atualiza o valor da matiz
  matiz++;
  if (matiz >= 360) {
    matiz = 0;
  }

  //inverte a direção quando a largura atingir os limites
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direcao = !direcao;
  }

  //aumenta ou diminui a largura da linha com base na direção
  if (direcao) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

//eventos do mouse para iniciar e parar o desenho
canvas.addEventListener("mousedown", (e) => {
  estaDesenhando = true;
  ultimoX = e.offsetX;
  ultimoY = e.offsetY;
});

canvas.addEventListener("mousemove", desenhar);
canvas.addEventListener("mouseup", () => (estaDesenhando = false));
canvas.addEventListener("mouseout", () => (estaDesenhando = false));
