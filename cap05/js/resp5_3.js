const frm = document.querySelector("form")
const outResp1 = document.getElementById("outResposta1")
const outResp2 = document.getElementById("outResposta2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let somaDivisores = 0
    let resposta1 = ""
    let resposta2 = ""

    for(let i = num/2; i >= 1; i--){
        if(num % i === 0){
            somaDivisores += i
            resposta1 = `${resposta1}, ${i}`
        }
    }
    resposta1 = resposta1.slice(1)
    resposta1 = `Divisores de ${num}: ${resposta1}. (Soma ${somaDivisores})`
    if(somaDivisores === num){
        resposta2 = `${num} é um número perfeito`
    } else{
        resposta2 = `${num} não é um número perfeito`
    }
    outResp1.innerText = resposta1
    outResp2.innerText = resposta2
})