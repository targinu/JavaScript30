//obtem os elementos <div> na página
const divs = document.querySelectorAll("div");

//seleciona o elemento <button> na página
const botão = document.querySelector("button");

//função que será chamada quando um <div> for clicado
function registrarTexto(e) {
  //exibe as classes do elemento <div> atual no console
  console.log(this.classList.value);

  //interrompe a propagação do evento (remova os comentários das próximas linhas para ver o efeito)
  //e.stopPropagation();

  //exibe o próprio elemento <div> no console
  //console.log(this);
}

//adiciona um evento de clique com opções aos elementos <div>
divs.forEach((div) =>
  div.addEventListener("click", registrarTexto, {
    capture: false,
    once: true,
  })
);

//adiciona um evento de clique ao botão
botão.addEventListener(
  "click",
  () => {
    //exibe uma mensagem no console quando o botão é clicado
    console.log("Clique!!!");
  },
  {
    once: true, //remove o listener de evento após a primeira execução
  }
);
