//obtem os elemtentos dos controles
const spacingInput = document.getElementById('spacing');
const blurInput = document.getElementById('blur');
const baseColorInput = document.getElementById('base-color');
const image = document.getElementById('image');

//função para atualizar as propriedades CSS
function updateCSSVariables() {
  const spacingValue = spacingInput.value;
  const blurValue = blurInput.value;
  const baseColorValue = baseColorInput.value;

  //atualiza o espaçamento da imagem (left + top)
  image.style.padding = `${spacingValue}px 0 0 ${spacingValue}px`;

  //atualiza o efeito de desfoque da imagem
  image.style.filter = `blur(${blurValue}px)`;

  //atualiza a cor de fundo do espaçamento da imagem
  image.style.backgroundColor = baseColorValue;
}

//atualiza as propriedades CSS quando os controles são alterados
spacingInput.addEventListener('input', updateCSSVariables);
blurInput.addEventListener('input', updateCSSVariables);
baseColorInput.addEventListener('input', updateCSSVariables);
