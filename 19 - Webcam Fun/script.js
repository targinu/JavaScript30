//seleciona os elementos do DOM
const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const controls = document.querySelector(".controls");
const photoButton = document.querySelector("button");
const photosContainer = document.querySelector(".photos");

//variável para controlar o efeito aplicado
let currentEffect = null;

//acesso à webcam e reprodução do vídeo no elemento <video>
async function getVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (error) {
    console.error("Erro ao acessar a webcam:", error);
  }
}

//quando o vídeo é reproduzido, desenha o frame no elemento <canvas>
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    //aplica o efeito atual, se houver
    if (currentEffect) {
      currentEffect();
    }
  }, 16);
}

//aplica o efeito de espelhamento horizontal
function applyMirror() {
  currentEffect = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
    ctx.restore();
  };
}

//aplica o efeito de preto e branco
function applyBlackAndWhite() {
  currentEffect = function () {
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < pixels.data.length; i += 4) {
      const avg =
        (pixels.data[i] + pixels.data[i + 1] + pixels.data[i + 2]) / 3;
      pixels.data[i] = avg; //vermelho
      pixels.data[i + 1] = avg; //verde
      pixels.data[i + 2] = avg; //azul
    }
    ctx.putImageData(pixels, 0, 0);
  };
}

//aplica o efeito de saturação
function applySaturate() {
  currentEffect = function () {
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const amount = 2; //ajuste o valor para controlar a intensidade da saturação
    for (let i = 0; i < pixels.data.length; i += 4) {
      const r = pixels.data[i];
      const g = pixels.data[i + 1];
      const b = pixels.data[i + 2];

      const gray = 0.2989 * r + 0.587 * g + 0.114 * b;
      pixels.data[i] = gray + amount * (r - gray); //vermelho
      pixels.data[i + 1] = gray + amount * (g - gray); //verde
      pixels.data[i + 2] = gray + amount * (b - gray); //azul
    }
    ctx.putImageData(pixels, 0, 0);
  };
}

//aplica o efeito de negativo
function applyNegative() {
  currentEffect = function () {
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < pixels.data.length; i += 4) {
      pixels.data[i] = 255 - pixels.data[i]; //vermelho
      pixels.data[i + 1] = 255 - pixels.data[i + 1]; //verde
      pixels.data[i + 2] = 255 - pixels.data[i + 2]; //azul
    }
    ctx.putImageData(pixels, 0, 0);
  };
}

//tira uma foto (screenshot) do vídeo e exibe na tela
function takePhoto() {
  //cria um elemento <a> para fazer o download da foto
  const photoLink = document.createElement("a");

  //salva a imagem do canvas como um arquivo de imagem
  const dataURL = canvas.toDataURL("image/jpeg");
  photoLink.href = dataURL;
  photoLink.setAttribute("download", "photo.jpg");

  //cria uma miniatura da foto e adiciona como link no DOM
  const img = document.createElement("img");
  img.src = dataURL;
  img.alt = "Foto";
  const photoItem = document.createElement("div");
  photoItem.classList.add("photo-item");
  photoItem.appendChild(img);
  photosContainer.appendChild(photoItem);

  //adiciona o link de download da foto no DOM
  photoLink.innerHTML = "Download";
  photoItem.appendChild(photoLink);
}

//remove todos os efeitos aplicados à foto
function resetPhotoEffects() {
  currentEffect = null;
}

//inicializa a captura de vídeo e a exibição no canvas
getVideo().then(() => {
  video.addEventListener("canplay", paintToCanvas);
});
