//verifica se o navegador suporta o reconhecimento de fala nativo ou usa uma versão anterior do Webkit
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

//cria uma instância do objeto de reconhecimento de fala
const recognition = new SpeechRecognition();

//configurações do reconhecimento de fala
recognition.interimResults = true; //resultados intermediários são retornados à medida que o usuário fala
recognition.lang = "pt-BR"; //define o idioma do reconhecimento como português do Brasil

//cria um parágrafo vazio para exibir o texto transcriado pela fala
let p = document.createElement("p");
const palavras = document.querySelector(".palavras");
palavras.appendChild(p);

//evento que é acionado quando o reconhecimento obtém resultados
recognition.addEventListener("result", (e) => {
  //obtem a transcrição do resultado do reconhecimento
  const transcrição = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  //substitui palavras ofensivas (cocô, bosta, merda) pelo emoji de cocô (💩)
  const scriptCensurado = transcrição.replace(/cocô|bosta|merda/gi, "💩");
  p.textContent = scriptCensurado;

  //se o resultado é final, cria um novo parágrafo para a próxima transcrição
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    palavras.appendChild(p);
  }
});

//evento que é acionado quando o reconhecimento termina (reinicia o reconhecimento)
recognition.addEventListener("end", recognition.start);

//inicia o reconhecimento de fala
recognition.start();
