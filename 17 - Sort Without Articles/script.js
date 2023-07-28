const bandasBrasileiras = [
  "Os Mutantes",
  "Os Paralamas do Sucesso",
  "Titãs",
  "Capital Inicial",
  "A Banda Mais Bonita da Cidade",
  "Skank",
  "Engenheiros do Hawaii",
  "Nando Reis",
  "O Rappa",
  "Pitty",
  "Charlie Brown Jr.",
  "Angra",
  "Los Hermanos",
];

//remove os artigos (a, o, as, os, um, uma, uns, umas) dos nomes das bandas
function removerArtigo(nomeBanda) {
  return nomeBanda.replace(/^(a |o |as |os |um |uma |uns |umas )/i, "").trim();
}

//ordena as bandas em ordem alfabética ignorando os artigos
const bandasOrdenadas = bandasBrasileiras.sort((a, b) =>
  removerArtigo(a) > removerArtigo(b) ? 1 : -1
);

//exibe as bandas ordenadas na lista do HTML
document.querySelector("#bandas").innerHTML = bandasOrdenadas
  .map((banda) => `<li>${banda}</li>`)
  .join("");

//exibe o resultado no console
console.log(bandasOrdenadas);
