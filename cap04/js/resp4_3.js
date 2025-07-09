const frm = document.querySelector("form")
const outTempo = document.getElementById("outTempo")
const outTroco = document.getElementById("outTroco")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    let valor = Number(frm.inValor.value)
    let tempo = 0
    let troco = 0

    if(valor >= 1 && valor < 1.75){
        tempo = 30
        troco = valor %  1
    } else if(valor >= 1.75 && valor < 3){
        tempo = 60
        troco = valor % 1.75
    } else if (valor >= 3){
        tempo = 120
        troco = valor % 3
    }

    outTempo.innerText = `Tempo: ${tempo}min`
    if(!(troco == 0)){
    outTroco.innerText = `Troco R$: ${troco.toFixed(2)}`
    }
})