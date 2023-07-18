//endpoint para o arquivo JSON contendo os estados e cidades brasileiras
const endpoint =
  "https://gist.githubusercontent.com/letanure/3012978/raw/6938daa8ba69bcafa89a8c719690225641e39586/estados-cidades.json";

//array que irá armazenar os estados obtidos do arquivo JSON
const estados = [];

//obtém os dados do arquivo JSON e adiciona os estados ao array 'estados'
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => estados.push(...data.estados));

//função que encontra as cidades correspondentes a um estado específico
function encontrarCidadesDoEstado(siglaEstado) {
  const estado = estados.find((estado) => estado.sigla === siglaEstado);
  if (estado) {
    return estado.cidades;
  } else {
    return [];
  }
}

//função que encontra as correspondências (cidades) com a palavra pesquisada
function encontrarCorrespondencias(palavraPesquisada) {
  if (palavraPesquisada.length === 2) {
    return encontrarCidadesDoEstado(palavraPesquisada.toUpperCase());
  } else {
    return estados.reduce((acc, estado) => {
      const regex = new RegExp(palavraPesquisada, "gi");
      const cidadesFiltradas = estado.cidades.filter((cidade) =>
        cidade.match(regex)
      );
      return [...acc, ...cidadesFiltradas];
    }, []);
  }
}

//função auxiliar para formatar números com separador de milhar
function formatarNumeroComSeparadorMilhar(numero) {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

//função que exibe as correspondências encontradas na lista de sugestões
function exibirCorrespondencias() {
  const correspondencias = encontrarCorrespondencias(this.value);
  const html = correspondencias
    .map((correspondencia) => {
      const regex = new RegExp(this.value, "gi");
      const nomeCorrespondencia = correspondencia.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${nomeCorrespondencia}</span>
      </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

//obtém as referências dos elementos de input de busca e da lista de sugestões
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

//adiciona um event listener para capturar eventos de entrada de texto
searchInput.addEventListener("input", exibirCorrespondencias);
