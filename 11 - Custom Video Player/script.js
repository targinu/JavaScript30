//obtem os elementos
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player_slider");
const volumeSlider = player.querySelector(".player_slider[name='volume']");
const volumeIcon = player.querySelector(".volume-icon");
const playbackRateButton = player.querySelector(
  ".player_slider[name='playbackRate']"
);
const speedIcon = player.querySelector(".speed-icon");

//alterna entre pausar e reproduzir o vídeo
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

//atualiza o botão de play
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon);
  toggle.textContent = icon;
}

//atualiza o ícone de volume com base no nível de volume
function atualizarIconeVolume() {
  const volume = video.volume;
  if (volume === 0) {
    volumeIcon.textContent = "🔇";
  } else if (volume < 0.5) {
    volumeIcon.textContent = "🔉";
  } else {
    volumeIcon.textContent = "🔊";
  }
}

//atualiza o ícone de velocidade com base no valor do botão de velocidade
function atualizarIconeVelocidade() {
  const playbackRate = playbackRateButton.value;
  speedIcon.textContent = `${playbackRate}x`;
}

//pula uma quantidade de tempo quando os botões de avanço/retrocesso são clicados
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

//atualiza as configurações do vídeo com base nos sliders
function handleRangeUpdate() {
  video[this.name] = this.value;
}

//atualiza a barra de progresso do vídeo com base no progresso atual da reprodução
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

//ajusta a posição de reprodução do vídeo quando a barra é clicada
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//adicionar listener de eventos
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

video.addEventListener("volumechange", atualizarIconeVolume);
volumeSlider.addEventListener("change", handleRangeUpdate);
volumeSlider.addEventListener("mousemove", handleRangeUpdate);

playbackRateButton.addEventListener("change", handleRangeUpdate);
playbackRateButton.addEventListener("mousemove", handleRangeUpdate);
playbackRateButton.addEventListener("change", atualizarIconeVelocidade);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
