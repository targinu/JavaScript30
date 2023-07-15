const filmes = [
    { título: 'O Poderoso Chefão', ano: 1972, diretor: 'Francis Ford Coppola' },
    { título: 'Pulp Fiction', ano: 1994, diretor: 'Quentin Tarantino' },
    { título: 'Cidade de Deus', ano: 2002, diretor: 'Fernando Meirelles' },
    { título: 'Matrix', ano: 1999, diretor: 'Lana Wachowski' },
    { título: 'O Senhor dos Anéis: A Sociedade do Anel', ano: 2001, diretor: 'Peter Jackson' },
    { título: 'O Labirinto do Fauno', ano: 2006, diretor: 'Guillermo del Toro' },
    { título: 'Vingadores: Ultimato', ano: 2019, diretor: 'Anthony Russo' },
    { título: 'Clube da Luta', ano: 1999, diretor: 'David Fincher' },
    { título: 'O Pianista', ano: 2002, diretor: 'Roman Polanski' },
    { título: 'Coração Valente', ano: 1995, diretor: 'Mel Gibson' },
    { título: 'Era uma Vez em... Hollywood', ano: 2019, diretor: 'Quentin Tarantino' },
    { título: 'O Auto da Compadecida', ano: 2000, diretor: 'Guel Arraes' }
  ];

  const cidades = [
    'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Fortaleza', 'Recife', 'Curitiba', 'Manaus', 'Porto Alegre', 'Belém', 'Goiânia', 'Mauá'
  ];

  //array.prototype.filter()
  //1. filtrar a lista de filmes lançados antes dos anos 2000
  const antigos = filmes.filter(filme => filme.ano < 2000);

  console.table(antigos);

  //array.prototype.map()
  //2. criar um array com os títulos dos filmes
  const títulos = filmes.map(filme => filme.título);
  console.log(títulos);

  //array.prototype.sort()
  //3. ordenar os filmes por ano de lançamento, do mais antigo ao mais recente
  const ordenados = filmes.sort((a, b) => a.ano - b.ano);
  console.table(ordenados);

  //array.prototype.reduce()
  //4. somar a duração de todos os filmes em minutos
  const totalMinutos = filmes.reduce((total, filme) => total + filme.duração, 0);
  console.log(totalMinutos);

  //5. ordenar os filmes por ordem alfabética do título
  const alfabética = filmes.sort((a, b) => a.título.localeCompare(b.título));
  console.table(alfabética);

  //6. criar uma lista de cidades que começam com a letra 'S'
  const cidadesComS = cidades.filter(cidade => cidade.charAt(0) === 'S');
  console.log(cidadesComS);

    //6. criar uma lista de cidades que começam com a letra 'M'
    const cidadesComM = cidades.filter(cidade => cidade.charAt(0) === 'M');
    console.log(cidadesComM);

  //7. ordenar as cidades em ordem alfabética reversa
  const ordemReversa = cidades.sort((a, b) => b.localeCompare(a));
  console.log(ordemReversa);

  //8. contar o número de ocorrências de cada letra no array de cidades
  const contagemLetras = cidades.reduce((contagem, cidade) => {
    for (let letra of cidade) {
      if (!contagem[letra]) {
        contagem[letra] = 0;
      }
      contagem[letra]++;
    }
    return contagem;
  }, {});

  console.log(contagemLetras);