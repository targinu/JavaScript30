//obtem os elementos
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

//ao pressionar o botão do mouse no slider
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

//quando o mouse sai da área do slider
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

//ao soltar o botão do mouse
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

//durante o movimento do mouse sobre o slider
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;  // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});