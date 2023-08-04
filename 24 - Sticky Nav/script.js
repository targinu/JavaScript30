//obtem a barra de navegação principal
const nav = document.querySelector("#main");

//obtem a posição vertical inicial da barra de navegação
let topOfNav = nav.offsetTop;

//fixa a barra de navegação quando a página é rolada
function fixNav() {
  //verifica se o scroll vertical atingiu ou passou a posição da barra de navegação
  if (window.scrollY >= topOfNav) {
    //define o espaço de preenchimento superior do corpo para manter o layout
    document.body.style.paddingTop = nav.offsetHeight + "px";
    //adiciona a classe 'fixed-nav' ao corpo para estilos de navegação fixa
    document.body.classList.add("fixed-nav");
  } else {
    //remove a classe 'fixed-nav' e redefine o espaço de preenchimento superior
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
}

//adiciona um listener de evento de rolagem à janela para chamar a função fixNav
window.addEventListener("scroll", fixNav);
