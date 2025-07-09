const prompt = require("prompt-sync")()
const tempoFuncionario = Number(prompt("Tempo de empresa (anos): "))
const salarioFuncionario = Number(prompt("Salário do funcionário: "))
const numQuadrienios = Math.floor(tempoFuncionario / 4)
const acrescimo = salarioFuncionario * (numQuadrienios/100)
const novoSalario = salarioFuncionario + acrescimo
console.log(`Com ${numQuadrienios}% de aumento, seu salário será de ${novoSalario.toFixed(2)}`)