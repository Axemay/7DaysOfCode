

let item = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
};
let remover;
let inserirComida;

inserirComida = prompt("Você deseja inserir um item na sua lista? Responda sim ou não.");

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
            
        }else if (categoria == "doces"){
            item.doces.push(comida);
        } 
        else {
            alert("Essa categoria não foi pré-definida.")
        }
        comida = prompt("Qual? Digite sair para finalizar.");
    }
} else {
    prompt("Ótimo! Sua lista está finalizada.");
}

alert(`Lista de compras:\n  Frutas: ${item.frutas}\n  Laticínios: ${item.laticinios}\n  Congelados: ${item.congelados}\n  Doces: ${item.doces}`);
    
remover = prompt("Você deseja remover algum item da lista? Digite s ou n.");

while (remover != "n"){
 
    if(item.frutas.length === 0 && item.laticinios.length === 0 && item.congelados.length === 0 && item.doces.length  === 0){  
		alert(`A lista está vazia!`);
	} else {  
		remover = prompt(`Lista de compras:\n  Frutas: ${item.frutas}\n  Laticínios: ${item.laticinios}\n  Congelados: ${item.congelados}\n Doces: ${item.doces}\n Qual item você deseja remover? Digite n para encerrar.`);
		if(item.frutas.indexOf(remover) != -1){
			item.frutas.splice(item.frutas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`);
		} else if(item.laticinios.indexOf(remover) != -1){
			item.laticinios.splice(item.laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`);
		} else if (item.congelados.indexOf(remover) != -1){
			item.congelados.splice(item.congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
        } else if (item.doces.indexOf(remover) != -1){
			item.doces.splice(item.doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`);
		} else if (remover == "n"){
			alert(`Certo! Você acabou de remover os itens indesejados.`);
        } else {
            alert(`Não foi possível encontrar o item dentro da lista!`);
        }
    }
}
