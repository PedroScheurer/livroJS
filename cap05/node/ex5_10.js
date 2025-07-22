const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor da conta: R$ "))
const numParcelas = Number(prompt("Número de parcelas: "))
let valorParcelaInt = Math.floor(valor/numParcelas)
let valorUltimaParcela = ((valor/numParcelas)-valorParcelaInt) * numParcelas + valorParcelaInt

console.log(`Valor R$: ${valor.toFixed(2)}`)
for(let i = 1; i < numParcelas; i++){
    console.log(`${i}a parcela: R$${valorParcelaInt.toFixed(2)}`)
}
console.log(`${numParcelas}a parcela: R$${valorUltimaParcela.toFixed(2)}`)