const frm = document.querySelector("form")
const respDesconto = document.getElementById("outRespDesconto")
const respAPagar = document.getElementById("outRespAPagar")
const divConvenio = document.getElementById("convenio")

function calcularDesconto(valor, desconto){
    return valor - (valor*desconto)
}

frm.rbConvenioNao.addEventListener(("click"), () => {
    divConvenio.classList.remove("exibe")
    divConvenio.classList.add("oculta")
})

frm.rbConvenioSim.addEventListener(("click"), () => {
    divConvenio.classList.remove("oculta")
    divConvenio.classList.add("exibe")
})

frm.addEventListener(("submit"), (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    let desconto = 0
    if(rbConvenioSim.checked){
        const convenio = frm.inConvenio.value
        if(convenio === "amigoDosAnimais"){
            desconto = 0.2
        } else if(convenio === "saudeAnimal"){
            desconto = 0.5
        }
    }
    const valorComDesconto = calcularDesconto(valor,desconto)
    const valorDoDesconto = desconto*valor

    respDesconto.innerText = `${valorDoDesconto.toFixed(2)}`
    respAPagar.innerText = `${valorComDesconto.toFixed(2)}`
})