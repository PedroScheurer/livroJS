const frm = document.querySelector("form")
const outResposta = document.querySelector("#outResposta")

frm.addEventListener("submit",(e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resultado = numero%2 == 0 ? "Par" : "Ímpar"

    outResposta.innerText = `${numero} é ${resultado}`
})