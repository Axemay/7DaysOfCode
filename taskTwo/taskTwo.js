const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual é sua idade?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"`;
alert(msg);


const sair = prompt(`"Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO."`);


if (sair == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} if (sair == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
