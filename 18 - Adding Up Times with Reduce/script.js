//obtem os elementos com o atributo "data-time" que contêm a duração dos vídeos
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

//mapeia os elementos para extrair a duração de cada vídeo e somar os segundos totais
const segundos = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [minutos, segundos] = timeCode.split(':').map(parseFloat);
    return (minutos * 60) + segundos;
  })
  .reduce((total, segundosDoVideo) => total + segundosDoVideo);

//calcula o número total de horas, minutos e segundos
let segundosRestantes = segundos;
const horas = Math.floor(segundosRestantes / 3600);
segundosRestantes = segundosRestantes % 3600;

const minutos = Math.floor(segundosRestantes / 60);
segundosRestantes = segundosRestantes % 60;

//exibe o resultado no console
console.log(horas, minutos, segundosRestantes);