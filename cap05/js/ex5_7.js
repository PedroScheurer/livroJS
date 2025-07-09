const frm = document.querySelector("form")
const outResp = document.getElementById("outResposta")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resposta = ""
    for(let i = 1; i <= numero; i++){
        if(i % 2 === 1){
            resposta = `${resposta}*`
        }else {
            resposta = `${resposta}-`
        }
    }
    outResp.innerText = resposta    
})