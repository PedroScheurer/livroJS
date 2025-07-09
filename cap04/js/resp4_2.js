const frm = document.querySelector("form")
const outResposta = document.getElementById("outResposta")

frm.addEventListener("submit",(e) =>{
    e.preventDefault()

    const velocidadePermitida = Number(frm.inVelocidadePermitida.value)
    const velocidadeCondutor = Number(frm.inVelocidadeCondutor.value)
    let multa = ""
    if(velocidadeCondutor <= velocidadePermitida){
        multa = "Sem Multa"
    } else if(velocidadeCondutor <= velocidadePermitida*1.2){
        multa = "Multa Leve"
    } else if(velocidadeCondutor > velocidadePermitida*1.2){
        multa = "Multa Grave"
    }

    outResposta.innerText = `Status do radar de velocidade: ${multa}`
})