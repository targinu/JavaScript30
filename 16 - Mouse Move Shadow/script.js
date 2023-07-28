//seleciona a div "efeito" e o texto dentro dela
const efeitoDiv = document.querySelector(".efeito");
const efeitoTexto = efeitoDiv.querySelector("h1");
const deslocamentoMaximo = 500; // 500px

//aplica o efeito de sombra com base no movimento do mouse ou do touch
function aplicarEfeitoSombra(e) {
  let x, y;

  //se for um movimento do mouse
  if (e.type === "mousemove") {
    const { offsetWidth: largura, offsetHeight: altura } = efeitoDiv;
    x = e.offsetX;
    y = e.offsetY;

    const deslocamentoX = Math.round(
      (x / largura) * deslocamentoMaximo - deslocamentoMaximo / 2
    );
    const deslocamentoY = Math.round(
      (y / altura) * deslocamentoMaximo - deslocamentoMaximo / 2
    );

    efeitoTexto.style.textShadow = `
        ${deslocamentoX}px ${deslocamentoY}px 0 rgba(255,0,255,0.7),
        ${deslocamentoX * -1}px ${deslocamentoY}px 0 rgba(0,255,255,0.7),
        ${deslocamentoY}px ${deslocamentoX * -1}px 0 rgba(0,255,0,0.7),
        ${deslocamentoY * -1}px ${deslocamentoX}px 0 rgba(0,0,255,0.7)
      `;

    //se for um toque na tela (touch)
  } else if (e.type === "touchmove") {
    const { width: largura, height: altura } =
      efeitoDiv.getBoundingClientRect();
    x = e.touches[0].clientX - efeitoDiv.offsetLeft;
    y = e.touches[0].clientY - efeitoDiv.offsetTop;

    //calcula o deslocamento horizontal e vertical com base nas dimensões da div "efeito"
    const deslocamentoX = Math.round(
      (x / largura) * deslocamentoMaximo - deslocamentoMaximo / 2
    );
    const deslocamentoY = Math.round(
      (y / altura) * deslocamentoMaximo - deslocamentoMaximo / 2
    );

    //aplica o efeito de sombra no texto com múltiplos text shadows
    efeitoTexto.style.textShadow = `
        ${deslocamentoX}px ${deslocamentoY}px 0 rgba(255,0,255,0.7),
        ${deslocamentoX * -1}px ${deslocamentoY}px 0 rgba(0,255,255,0.7),
        ${deslocamentoY}px ${deslocamentoX * -1}px 0 rgba(0,255,0,0.7),
        ${deslocamentoY * -1}px ${deslocamentoX}px 0 rgba(0,0,255,0.7)
      `;
  }
}

//adiciona listener para os eventos
efeitoDiv.addEventListener("mousemove", aplicarEfeitoSombra);
efeitoDiv.addEventListener("touchmove", aplicarEfeitoSombra);
