const prompt = require("prompt-sync")()
const parcelas = Number(prompt("Número de parcelas: "))
const hoje = new Date()


for(let i = 1; i <= parcelas; i++){
    hoje.setMonth(hoje.getMonth() + 1)
    const dia = hoje.getDate()
    const mes = hoje.getMonth() + 1
    const ano = hoje.getFullYear()
    const diaZero = dia < 10 ? "0" + dia : dia
    const mesZero = mes < 10 ? "0" + mes : mes
    console.log(`${i}a Parcela: ${diaZero}/${mesZero}/${ano}`)
}
