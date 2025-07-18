const frm = document.querySelector("form")
const resp1 = document.getElementById("outDataLimite")
const resp2 = document.getElementById("outValorComDesconto")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const dataInfracao = frm.inDataInfracao.value
    const valorMulta = Number(frm.inValorMulta.value)
    const partes = dataInfracao.split("-")

    const data = new Date()
    data.setDate(Number(partes[2]))
    data.setMonth(Number(partes[1] -1))
    data.setFullYear(Number(partes[0]))

    const dia = data.getDate()
    data.setMonth(data.getMonth() + 3)
    const mes = data.getMonth() + 1
    const ano = data.getFullYear()

    const diaZero = dia < 10 ? "0" + dia : dia
    const mesZero = mes < 10 ? "0" + mes : mes
    resp1.innerText = `Data Limite para Pagto com Desconto: ${diaZero}/${mesZero}/${ano}`

    let valorDesconto = valorMulta*0.8
    resp2.innerText = `Valor com Desconto R$: ${valorDesconto.toFixed(2)}`
})