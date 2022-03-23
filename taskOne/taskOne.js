let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'


function Verificar() {
var resultado = document.getElementById("resultado");
var comparaUm;
var comparaTrinta;
var comparaDez;

if (numeroUm == parseInt(stringUm)) {
  comparaUm = "As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes";
} else {
  comparaUm = "As variáveis numeroUm e stringUm não tem o mesmo valor";
}

if (numeroTrinta == parseInt(stringTrinta)) {
  comparaTrinta = "As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo";
} else {
  comparaTrinta = "As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo";
}

if (numeroDez == parseInt(stringDez)) {
  comparaDez = "As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes";
} else {
  comparaDez = "As variáveis numeroDez e stringDez não tem o mesmo valor";
}

resultado.innerHTML = comparaUm + "<br>" + comparaTrinta + "<br>" + comparaDez;

}

