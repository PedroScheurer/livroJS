const prompt = require("prompt-sync")()
const saques = []
let invalidos = 0

console.log("Informe o valor dos saques ou 0 para sair")
while(true){
    let saque = Number(prompt("Saque R$: "))
    if(saque === 0){break}
    if(saque % 10 === 0){
        saques.push(saque)
        console.log("Saque realizado com sucesso")
    } else{
        console.log("Erro... Valor Inválido (deve ser múltiplo de 10)")
        invalidos += 1
    }
}
if(saques.length !== 0){
    console.log("Saques Válidos")
    console.log("-".repeat(40))
    const listaSaques = saques.reduce((acumulador, saque) =>
        `${acumulador}R$ ${saque.toFixed(2)}\n`,"")
    console.log(listaSaques)    
    console.log("-".repeat(40))
    const soma = saques.reduce((soma, saque) => soma += saque)
    console.log(`Total dos Saques: R$ ${soma.toFixed(2)}`)
    console.log(`N. de Tentativas de Saques (saques inválidos): ${invalidos}`)
} else{
    console.log("Nenhum saque feito")
}