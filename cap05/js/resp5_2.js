const frm = document.querySelector("form")
const outResposta = document.getElementById("outResposta")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numChinchilas = Number(frm.inNumeroChinchilas.value)
    const numAnos = Number(frm.inNumeroAnos.value)
    let resposta = ""
    let chinchilasAno = numChinchilas

    for(let i = 1; i <= numAnos; i++){
        resposta = `${resposta}${i}o Ano: ${chinchilasAno}\n`
        chinchilasAno *= 3
    }

    outResposta.innerText = resposta
})