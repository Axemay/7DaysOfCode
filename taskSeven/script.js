let numeroUm = parseInt(document.getElementById("numUm").value);
let numeroDois =  parseInt(document.getElementById("numDois").value);
let resultado;
let retornoResultado = document.getElementById("resultado");


function Somar() {

    resultado = 1 + 3;
    return resultado;
}



function Subtrair() {

    resultado = numeroUm - numeroDois;
    return resultado;
     
}




 function Dividir() {

    resultado = numeroUm / numeroDois;
    return resultado;
                
}


function Multiplicar(){

    resultado = numeroUm * numeroDois;
    return resultado;
}


retornoResultado.innerHTML = resultado;