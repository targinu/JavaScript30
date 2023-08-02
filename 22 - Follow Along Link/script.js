  //obtem os elementos de link
  const links = document.querySelectorAll('a');

  //cria um elemento <span> para realçar os links
  const highlight = document.createElement('span');
  highlight.classList.add('highlight'); //adiciona a classe CSS "highlight" ao elemento
  document.body.appendChild(highlight); //adiciona o elemento <span> ao corpo da página

  //realça o link quando o mouse passa sobre ele
  function realcarLink() {
    //obtem informações de posição e tamanho do link
    const coordenadasLink = this.getBoundingClientRect();
    console.log(coordenadasLink); //exibe informações no console

    //armazena as informações de posição e tamanho do link em um objeto
    const coordenadas = {
      largura: coordenadasLink.width,
      altura: coordenadasLink.height,
      topo: coordenadasLink.top + window.scrollY,
      esquerda: coordenadasLink.left + window.scrollX
    };

    //aplica as informações de realce ao elemento 
    highlight.style.width = `${coordenadas.largura}px`;
    highlight.style.height = `${coordenadas.altura}px`;
    highlight.style.transform = `translate(${coordenadas.esquerda}px, ${coordenadas.topo}px)`;
  }

  //adiciona o listener de passagem do mouse a cada link
  links.forEach(a => a.addEventListener('mouseenter', realcarLink));
  a.addEventListener('touchstart', realcarLink); //compativel com mobile
