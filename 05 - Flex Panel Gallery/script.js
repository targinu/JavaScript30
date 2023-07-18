//seleciona todos os painéis da página
const panels = document.querySelectorAll('.painel');

//função para alternar a classe 'open' ao clicar em um painel
function toggleOpen() {
  this.classList.toggle('open');
}

//função para alternar a classe 'open-active' após a transição do flex
function toggleActive(e) {
  //verifica se a propriedade que sofreu transição é 'flex'
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

//adiciona o evento de clique a todos os painéis
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

//adiciona o evento de transição a todos os painéis
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
