//evita execuções excessivas de uma função durante um intervalo de tempo
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//seleciona todos os elementos com a classe 'slide-in' e armazena em "sliderImages"
const sliderImages = document.querySelectorAll(".slide-in");

//aplica a classe 'active' aos elementos quando metade superior é visível
function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

//adiciona um listener de evento para o evento de rolagem na janela, usando a função "debounce(checkSlide)"
window.addEventListener("scroll", debounce(checkSlide));
