const prompt = require("prompt-sync")()
const pesoRacao = Number(prompt("Peso da ração (kg): "))
const consumoDiaGr = Number(prompt("Consumo por dia (gr): "))
const consumoDiaKg = consumoDiaGr/1000
const dias = Math.floor(pesoRacao/consumoDiaKg)
const sobra = (pesoRacao%consumoDiaKg)*1000
console.log(`Duração: ${dias.toFixed(0)} dias\nSobra: ${sobra.toFixed(2)}gr`)