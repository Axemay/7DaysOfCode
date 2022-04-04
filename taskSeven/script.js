
let numero1 = parseInt(document.getElementById('primeiroNumero').value);
let numero2 =  parseInt(document.getElementById('segundoNumero').value);
let resultado="";
let retornoResultado = document.getElementById("resultado");


function Somar(numero1, numero2) {

    resultado = numero1 + numero2;
    exibeResultado (resultado);
}



function Subtrair(numero1, numero2) {

    resultado = numero1 - numero2;
    exibeResultado (resultado);

     
}




 function Dividir(numero1, numero2) {

    resultado = numero1 / numero2;
    exibeResultado (resultado);

                
}


function Multiplicar(numero1, numero2){

    resultado = numero1 * numero2;
    exibeResultado (resultado);
}

function exibeResultado (){

retornoResultado.innerHTML = resultado;
}