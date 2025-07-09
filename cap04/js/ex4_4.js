const frm = document.querySelector("form")
const outResposta = document.querySelector("#outResposta")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const horaBrasil = Number(frm.inHoraBrasil.value)
    let horaFranca = horaBrasil + 5

    if (horaFranca >= 24){
        horaFranca -= 24
    }

    outResposta.innerText = `Hora na França: ${horaFranca.toFixed(2)}`
})