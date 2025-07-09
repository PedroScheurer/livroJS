const prompt = require("prompt-sync")()
const centena = Number(prompt("Número centena: "))
let centenaInvertida = 0
let ultimo = 0
let primeiro = 0
if (centena/100 < 1 || centena/100 >=10){
    console.log("Numero não é uma centena")
    return
}else {
    ultimo = centena%10
    segundo = (centena%100) - ultimo
    primeiro = Math.floor(centena/100)
    centenaInvertida = (ultimo*100) + segundo + primeiro
    console.log(`Centena invertida: ${centenaInvertida}`)
}