
// muda a foto ao passar o mouse sobre os itens do menu
function changePhoto(photo){
  document.getElementById('icon').src = photo;
}

// função para calcular o total
function totalCalc(){

  let qtd = parseInt(document.querySelector("#qtdGG").value);

  total = qtd * 1500;

  document.querySelector("#total").value = total;

}