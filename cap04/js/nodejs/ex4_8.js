const prompt = require("prompt-sync")()
const total = Number(prompt("Total da compra: "))
const aux = Math.floor(total/20)
const numParcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
let pagamento = total/numParcelas
console.log(`Pode pagar em ${numParcelas}x de R$: ${pagamento.toFixed(2)}`)
