const prompt = require("prompt-sync")()
const nomeProduto = prompt("Nome do Produto: ")
const quantidadeEtiquetas = Number(prompt("Número de etiquetas: "))
let resposta = ""

for(let i = 0; i < quantidadeEtiquetas; i+=2){
    if(quantidadeEtiquetas - i !== 1){
            resposta = `${resposta}${nomeProduto.padEnd(30)}${nomeProduto.padEnd(30)}\n`
    } else {
        resposta = `${resposta}${nomeProduto}`
    }
}
console.log(resposta)