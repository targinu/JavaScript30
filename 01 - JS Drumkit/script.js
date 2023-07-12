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
    playSound(audio);
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


