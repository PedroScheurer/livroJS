const frm = document.querySelector("form")
const resp1 = document.getElementById("outResp1")
const resp2 = document.getElementById("outResp2")
const resp3 = document.getElementById("outResp3")

const classificarVeiculo = (anoCarro) => {
    const anoAtual = new Date().getFullYear()
    let classif
    if(anoCarro === anoAtual){
        classif = "Novo"
    } else if(anoAtual-anoCarro <= 2){
        classif = "Seminovo"
    } else{
        classif = "Usado"
    }
    return classif
}

const calcularEntrada = (valor, classificacaoVeiculo) => {
    if(classificacaoVeiculo === "Novo"){
        const entrada = valor * 0.5
        const parcelas = (valor-entrada)/10
        return [entrada, parcelas]
    } else {
        const entrada = valor * 0.3
        const parcelas = (valor-entrada)/10
        return [entrada, parcelas]
    }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value
    const anoCarro = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const classificacao = classificarVeiculo(anoCarro)
    const valores = calcularEntrada(preco, classificacao)
    

    resp1.innerText = `${modelo} - ${classificacao}`
    resp2.innerText = `Entrada: R$: ${valores[0].toFixed(2)}`
    resp3.innerText = `+10x de R$: ${valores[1].toFixed(2)}`
})