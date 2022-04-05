var numeroUm = parseInt(document.getElementById("numUm").value);
var numeroDois = parseInt(document.getElementById("numDois").value);
var resultado = "";


function exibeResultdo (resultado){
    var retornoResultado = document.getElementById("resultado");
    retornoResultado.innerHTML = resultado;
}


function Somar() {
    console.log(numeroUm);
    resultado = numeroUm + numeroDois;
    exibeResultdo(resultado);
}



function Subtrair() {

    resultado = numeroUm - numeroDois;
    exibeResultdo(resultado);
     
}




 function Dividir() {

    resultado = numeroUm / numeroDois;
    exibeResultdo(resultado);
                
}


function Multiplicar(){

    resultado = numeroUm * numeroDois;
    exibeResultdo(resultado);
}

