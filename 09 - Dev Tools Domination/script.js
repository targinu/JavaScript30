const cachorros = [
  { nome: "Snickers", idade: 2 },
  { nome: "Hugo", idade: 8 },
];

function tornarVerde() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

//regular
console.log("olá");

//interpolado
console.log("Olá, eu sou uma string %s!", "💩");

//estilizado
console.log(
  "%c Eu sou um ótimo texto",
  "font-size:50px; background:red; text-shadow: 10px 10px 0 blue"
);

//aviso
console.warn("OH NÃO!");

//erro :|
console.error("Erro!");

//informação
console.info("Crocodilos comem 3-4 pessoas por ano");

//testando
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "Isso está errado!");

//limpando
console.clear();

//visualizando elementos do DOM
console.log(p);
console.dir(p);

console.clear();

//agrupando informações
cachorros.forEach((cachorro) => {
  console.groupCollapsed(`${cachorro.nome}`);
  console.log(`Este é ${cachorro.nome}`);
  console.log(`${cachorro.nome} tem ${cachorro.idade} anos`);
  console.log(
    `${cachorro.nome} tem ${cachorro.idade * 7} anos em anos de cachorro`
  );
  console.groupEnd(`${cachorro.nome}`);
});

//contagem
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");
console.count("Steve");

//timing
console.time("buscando dados");
fetch("https://api.github.com/users/targinu")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("buscando dados");
    console.log(data);
  });

console.table(cachorros);
