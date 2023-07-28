//começamos com strings, números e booleanos
//let age = 100;
//let age2 = age;
//console.log(age, age2);
//age = 200;
//console.log(age, age2);

//let name = 'Wes';
//let name2 = name;
//console.log(name, name2);
//name = 'wesley';
//console.log(name, name2);

//digamos que temos um array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

//e queremos fazer uma cópia dele
const team = players;

console.log(players, team);
//você pode pensar que podemos fazer algo assim:
//team[3] = 'Lux';

//no entanto, o que acontece quando atualizamos esse array?

//aqui está o problema!

//oh não - nós editamos o array original também!

//por quê? É porque isso é uma referência de array, não uma cópia do array. Ambos apontam para o mesmo array!

//então, como consertamos isso? Fazemos uma cópia em vez disso!
const team2 = players.slice();

//uma maneira

//ou criamos um novo array e concatenamos o antigo nele
const team3 = [].concat(players);

//ou usamos o novo Spread do ES6
const team4 = [...players];
team4[3] = "heeee hawww";
console.log(team4);

const team5 = Array.from(players);

//agora, quando atualizamos o novo array, o original não é alterado

//a mesma coisa acontece com objetos, digamos que temos um objeto pessoa

//com objetos
const person = {
  name: "targinu",
  age: 24,
};

//e pensamos em fazer uma cópia:
//const captain = person;
//captain.number = 99;

//como fazemos uma cópia em vez disso?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

//esperamos em breve ver o spread para objetos
//const cap3 = {...person};

//coisas a serem observadas - isso é apenas 1 nível de profundidade - tanto para Arrays quanto para Objetos. 
//o lodash tem um método cloneDeep, mas você deve pensar duas vezes antes de usá-lo.

const targinu = {
  name: "targinu",
  age: 24,
  social: {
    twitter: "@targinu",
    //facebook: "giovani.targino",
  },
};

console.clear();
console.log(targinu);

const dev = Object.assign({}, targinu);

const dev2 = JSON.parse(JSON.stringify(targinu));
