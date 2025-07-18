const prompt = require("prompt-sync")()
const formula = prompt("Fórmula matemática: ")
let abreParenteses = 0
let fechaParenteses = 0


for(const caracter of formula){
    if(caracter === "("){abreParenteses++}
    else if(caracter === ")"){fechaParenteses++}
    if(fechaParenteses > abreParenteses){break}
}

if(abreParenteses !== fechaParenteses){
    console.log(`Fórmula incorreta em relação aos parênteses`)
} else{
    console.log("Ok, fórmula correta! (EM RELAÇÃO AOS PARÊNTESES)")
}