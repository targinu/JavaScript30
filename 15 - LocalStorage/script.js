//obtem as referências para os elementos do DOM
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

//recuperando os itens do LocalStorage ou inicializando como um array vazio
const items = JSON.parse(localStorage.getItem('items')) || [];

//adiciona um novo item à lista
function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  //adicionando o novo item ao array e atualizando a lista no DOM
  items.push(item);
  populateList(items, itemsList);

  //salvando os itens atualizados no LocalStorage
  localStorage.setItem('items', JSON.stringify(items));

  //limpando o campo de input após adicionar o item
  this.reset();
}

//preenche a lista de itens no DOM
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

//marca/desmarca um item como concluído
function toggleDone(e) {
  if (!e.target.matches('input')) return; // Ignora se não for um input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;

  //salvando a alteração no LocalStorage e atualizando a lista no DOM
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

//adicionando um listener para o evento 'submit' no formulário
addItems.addEventListener('submit', addItem);

//adicionando um listener para o evento 'click' na lista de itens
itemsList.addEventListener('click', toggleDone);

//preenchendo a lista de itens no carregamento da página
populateList(items, itemsList);