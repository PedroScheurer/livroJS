const frm = document.querySelector("form")
const outResposta = document.getElementById("outResposta")
const tabuadaContainer = document.getElementById("tabuadaContainer")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resposta = ""
    for(let i = 1; i <= 10; i++){
        resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }

    outResposta.innerText = resposta

    if(resposta.trim() !== ""){
        tabuadaContainer.classList.add("border","border-dark")
    }
})