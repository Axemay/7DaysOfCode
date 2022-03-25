let nome = prompt("Qual é o seu nome?");
let linguagem = prompt(`${nome}, qual área você deseja seguir, Front-End ou Back-End?`);
let fullstack;
let area;
let tecnologias= [];
let continuar;


if (linguagem === "Front-End"){
    area = prompt("Que legal! Você deseja aprender React ou aprender Vue?");

} else if(linguagem === "Back-End") {
    area = prompt("Que legal! Você deseja aprender C# ou aprender Java?");
} else {
    linguagem = prompt("Por favor, digite exatamente como informado.Front-End ou Back-End?");
}

fullstack = prompt(`${nome} ", Você deseja continuar se desenvolvendo para se tornar um fullstack? Digite S para sim e N para não."`);

if (fullstack === "S" || fullstack === "s"){
    alert(`Que ótimo, ${nome}! Continue estudando`);

} else if(fullstack === "N" || fullstack === "n") {
    alert(`Que ótimo, ${nome}! Continue estudando`);
}

continuar = prompt(`${nome}, tem mais alguma tecnologia que você gostaria de aprender? Informe qual ou digite n para sair.`);

continuar = prompt(`${nome}, tem mais alguma tecnologia que você gostaria de aprender? Informe qual ou digite n para sair.`);

while (continuar != "n"){
tecnologias.push(tecnologias);
continuar = prompt(`${nome}, tem mais alguma tecnologia que você gostaria de aprender? Informe qual ou digite n para sair.`);

} 


for (let i = 0; i <  tecnologias.length; i++){
    console.log(tecnologias[i]);
}

