//armazena a contagem regressiva
let countdown;

//obtem os elementos
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");

//seleciona todos os botões que possuem atributo 'data-time'
const buttons = document.querySelectorAll("[data-time]");

//função para iniciar a contagem regressiva
function timer(seconds) {
  //limpa qualquer temporizador existente
  clearInterval(countdown);

  //calcula o horário atual e o horário de término
  const now = Date.now();
  const then = now + seconds * 1000;

  //atualiza a exibição do tempo restante e do horário de término
  displayTimeLeft(seconds);
  displayEndTime(then);

  //inicia um temporizador que atualiza a exibição a cada segundo
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    //verifica se a contagem regressiva deve parar
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    //atualiza a exibição do tempo restante
    displayTimeLeft(secondsLeft);
  }, 1000);
}

//exibe o tempo restante
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;

  //atualiza o título da página e o elemento de exibição do tempo restante
  document.title = display;
  timerDisplay.textContent = display;
}

//exibe o horário de término
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();

  //atualiza o elemento de exibição do horário de término
  endTime.textContent = `Volte às ${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

//inicia a contagem regressiva com base no botão clicado
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

//adiciona listenter de evento de clique para cada botão
buttons.forEach((button) => button.addEventListener("click", startTimer));

// Adiciona um ouvinte de evento de envio para o formulário personalizado
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
