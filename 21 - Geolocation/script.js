//obtem os elementos
const seta = document.querySelector(".arrow");
const velocidade = document.querySelector(".valor-velocidade");

//rastreia as mudanças de posição do dispositivo
navigator.geolocation.watchPosition(
  (data) => {
    //exibe os dados da posição no console
    console.log(data);

    //atualiza a velocidade exibida com base nos dados da posição
    velocidade.textContent = data.coords.speed;

    //define a rotação da seta da bússola com base na direção do dispositivo
    seta.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    //caso ocorra algum erro durante o rastreamento da posição, ele será exibido no console.
    console.error(err);
  }
);
