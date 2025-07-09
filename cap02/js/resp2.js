const frm = document.querySelector("form")
const respostaValorPagar = document.querySelector("#outValorPagar")

frm.addEventListener("submit", (e) => {
    const valorUso = Number(frm.inValorUso.value)
    const tempoUsoCliente = Number(frm.inTempoUsoCliente.value)

    const valorPagar = (Math.ceil(tempoUsoCliente/15))*valorUso
    respostaValorPagar.innerText = `Valor a Pagar R$: ${valorPagar.toFixed(2)}`

    e.preventDefault()
})