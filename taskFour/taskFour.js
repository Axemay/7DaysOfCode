let numero;
let numeroSorteado = Math.floor(10* Math.random() + 1);
let chances = 3;

while (chances > 0){
    numero = parseInt(prompt("Digite um número de 0 a 10:"));
    chances--;
    if (numero == numeroSorteado){
        alert("Parabéns, você acertou! O número é: " + numero);
        chances = 0;
    } else {
        alert("Que pena, você errou! Você ainda tem " + chances + " chances");        
    }  

    
}

alert("Você não tem mais chances!");