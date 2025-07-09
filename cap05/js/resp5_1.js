const frm = document.querySelector("form")
const outResposta = document.getElementById("outResposta")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    const fruta = frm.inFruta.value
    let resposta = ""

    for(let i = 1; i <= num; i++){
        if(i !== num){
            resposta = `${resposta} ${fruta} *`
        } else{
            resposta = `${resposta} ${fruta}`
        }
    }
    outResposta.innerText = resposta
})