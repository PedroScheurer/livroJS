const prompt = require("prompt-sync")()
const nPessoas = Number(prompt("Número de pessoas: "))
const nPeixes = Number(prompt("Número de peixes: "))
const peixesAMais = nPeixes-nPessoas
let pagar
if(peixesAMais > 0){
    pagar = (nPessoas *20) + (peixesAMais*12)
} else{
    pagar = (nPessoas *20)
}
console.log(`N. Pessoas: ${nPessoas}\nN. Peixes: ${nPeixes}\nValor à pagar: R$${pagar.toFixed(2)}`)