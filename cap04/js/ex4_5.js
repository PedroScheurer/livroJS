const frm = document.querySelector("form")
const outResposta = document.querySelector("#outResposta")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let raiz = Math.sqrt(numero)

    if(!Number.isInteger(raiz)){
        outResposta.innerText = `Não há raiz exata para ${numero}`
    }else {
        outResposta.innerText = `Raiz: ${raiz}`
    }
})