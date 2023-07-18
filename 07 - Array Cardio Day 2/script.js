const pessoas = [
  { nome: "João", ano: 1988 },
  { nome: "Maria", ano: 1986 },
  { nome: "Antonio", ano: 1970 },
  { nome: "Julia", ano: 2015 },
];

const comentarios = [
  { texto: "Adorei!", id: 523423 },
  { texto: "Muito bom", id: 823423 },
  { texto: "Você é o melhor", id: 2039842 },
  { texto: "Ramen é minha comida favorita", id: 123523 },
  { texto: "Muito legal!", id: 542328 },
];

//verificações com Some e Every
//array.prototype.some() // há pelo menos uma pessoa com 19 anos ou mais?
const ehAdulto = pessoas.some(
  (pessoa) => new Date().getFullYear() - pessoa.ano >= 19
);

console.log({ ehAdulto });
//array.prototype.every() // todas as pessoas têm 19 anos ou mais?

const todosAdultos = pessoas.every(
  (pessoa) => new Date().getFullYear() - pessoa.ano >= 19
);
console.log({ todosAdultos });

//array.prototype.find()
//o find é como o filter, mas retorna apenas o primeiro elemento que corresponde à condição
//encontre o comentário com o ID 823423
const comentario = comentarios.find((comentario) => comentario.id === 823423);

console.log(comentario);

//array.prototype.findIndex()
//encontre o comentário com esse ID
//delete o comentário com o ID 823423
const indice = comentarios.findIndex((comentario) => comentario.id === 823423);
console.log(indice);

//comentarios.splice(indice, 1);
const novosComentarios = [
  ...comentarios.slice(0, indice),
  ...comentarios.slice(indice + 1),
];
