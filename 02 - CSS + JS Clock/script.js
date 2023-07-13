function rotacionaPonteiros() {
  //obtem a hora atual
  var currentTime = new Date();

  //obtem os elementos dos ponteiros
  var ponteiroHora = document.querySelector('.ponteiro-horas');
  var ponteiroMinuto = document.querySelector('.ponteiro-minutos');
  var ponteiroSegundos = document.querySelector('.ponteiro-segundos');

  //calcula os ângulos de rotação para os ponteiros
  var horas = currentTime.getHours();
  var minutos = currentTime.getMinutes();
  var segundos = currentTime.getSeconds();

  var rotacaoHora = (horas * 30) + (minutos / 2);
  var rotacaoMinuto = (minutos * 6) + (segundos / 10);
  var rotacaoSegundos = segundos * 6;

  //aplica os ângulos de rotação aos ponteiros
  ponteiroHora.style.transform = `rotate(${rotacaoHora}deg)`;
  ponteiroMinuto.style.transform = `rotate(${rotacaoMinuto}deg)`;
  ponteiroSegundos.style.transform = `rotate(${rotacaoSegundos}deg)`;
}

//atualiza os ponteiros a cada segundo
setInterval(rotacionaPonteiros, 1000);
