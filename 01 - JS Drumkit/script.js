//adicionar evento de pressionar tecla
window.addEventListener("keydown", handleKeyDown);

//função para reproduzir o som
function playSound(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}

//função para tratar o evento de pressionar uma tecla
function handleKeyDown(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

  if (key && audio) {
    key.classList.add("playing");
    key.classList.add("pressed"); //adiciona a classe "pressed"
    playSound(audio);

    //remove a classe "pressed" após a duração do áudio
    setTimeout(() => {
      key.classList.remove("pressed");
    }, audio.duration * 1000); //multiplica a duração por 1000 para obter o tempo em milissegundos
  }
}

//adiciona evento de clique para cada div do drumkit
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("click", handleMouseClick));

//função para tratar o evento de clique
function handleMouseClick(event) {
  const key = event.currentTarget;
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);

  if (audio) {
    key.classList.add("playing");
    playSound(audio);
  }
}
