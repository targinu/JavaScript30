const cachorros = [{ nome: 'Snickers', idade: 2 }, { nome: 'Hugo', idade: 8 }];

    function tornarVerde() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    //regular
    console.log('olá');

    //interpolado
    console.log('Olá, eu sou uma string %s!', '💩');

    //estilizado
    console.log('%c Eu sou um ótimo texto', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

    //aviso
    console.warn('OH NÃO!');

    //erro :|
    console.error('Erro!');

    //informação
    console.info('Crocodilos comem 3-4 pessoas por ano');

    //testando
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'Isso está errado!');
