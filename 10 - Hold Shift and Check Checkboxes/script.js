const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

//função que verifica se a tecla Shift foi pressionada e se a caixa está sendo marcada
function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //percorre todas as caixas de seleção
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Começando a marcar as caixas no meio!");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach( (checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
