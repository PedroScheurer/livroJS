const frm = document.querySelector("form")
const respMedicamento = document.querySelector("#outMedicamento")
const respValorPromocao = document.querySelector("#outValorPromocao")

frm.addEventListener("submit", (e) =>{
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const valorPromocao = Math.floor(preco*2)
    
    respMedicamento.innerText = `Promoção de ${medicamento}`
    respValorPromocao.innerText = `Leve 2 por apenas R$: ${valorPromocao.toFixed(2)}`

    e.preventDefault()
})