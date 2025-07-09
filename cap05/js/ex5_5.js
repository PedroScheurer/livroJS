const frm = document.querySelector("form")
const outResp1 = document.getElementById("outResp1")
const outResp2 = document.getElementById("outResp2")

let resposta = ""
let somaContas = 0
let somaValores = 0

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricaoConta = frm.inDescricaoConta.value
    const valorConta = Number(frm.inValorConta.value)

    somaContas += 1
    somaValores += valorConta
    resposta = `${resposta}${descricaoConta} - R$: ${valorConta.toFixed(2)}\n`

    outResp1.innerText = `${resposta}------------------------`
    outResp2.innerText = `${somaContas} Conta(s) - Total R$: ${somaValores.toFixed(2)}`

    frm.inDescricaoConta.value = ""
    frm.inValorConta.value = ""
    frm.inDescricaoConta.focus()
})