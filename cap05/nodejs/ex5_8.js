const prompt = require("prompt-sync")()

while(true){
    let anoTentativa = Number(prompt("Digite um ano que deseja verificar (0 para sair): "))
    if (anoTentativa){
        if(anoTentativa !== 1942 && anoTentativa !== 1946){
            if(anoTentativa >= 1930){
                if((anoTentativa % 4) === 2){
                    console.log(`${anoTentativa} tem Copa do Mundo`)
                } else{
                    console.log(`${anoTentativa} não tem Copa do Mundo`)
                }
            } else{
                console.log("Copa do Mundo começou em 1930, tente um ano maior")
            }
        } else{
            console.log("Ano de Guerra Mundial, digite um novo número.")
        }
    } else {
        console.log("Saindo...");
        break
    }
}