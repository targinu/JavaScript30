  //configuração inicial
  const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  msg.text = document.querySelector('[name="text"]').value;

  //preenche a lista de vozes disponíveis
  function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('pt'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }

  //define a voz selecionada
  function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
  }

  //interrompe ou reinicia a fala
  function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }

  //ajusta as opções (velocidade e tom)
  function setOption() {
    msg[this.name] = this.value;
    toggle();
  }

  //adiciona listener de eventos
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', toggle);
  stopButton.addEventListener('click', () => toggle(false));