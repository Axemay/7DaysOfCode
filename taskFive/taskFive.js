

let item = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doce: []
};

let inserirComida = prompt("Você deseja inserir um item na sua lista? Responda sim ou não.");

if (inserirComida == "sim"){
    let comida = prompt("Qual? Digite sair para finalizar.");
    while (comida != "sair"){
        
        let categoria = prompt("Indique uma categoria: frutas, laticínios, congelados ou doces.");
        
        if (categoria == "frutas"){
            item.frutas.push(comida);
        }
        else if (categoria == "laticínios" || categoria == "laticinios") {
            item.laticinios.push(comida);
        } else if (categoria == "congelados") {
            item.congelados.push(comida);
            
        }else {
            item.doce.push(comida);
        }
        comida = prompt("Qual? Digite sair para finalizar.");
    }
} else {
    prompt("Ótimo! Sua geladeira está cheia.");
}



alert(`Lista de compras:\n  Frutas: ${item.frutas}\n  Laticínios: ${item.laticinios}\n  Congelados: ${item.congelados}\n  Doces: ${item.doce}`);
    


