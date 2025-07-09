const frm = document.querySelector("form")
const respH3 = document.querySelector("h3")
const respH4 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value;
    let duracaoMinutos = Number(frm.inDuracao.value);
    
    const horasFilme = Math.floor(duracaoMinutos/60);
    const minutosFilme = duracaoMinutos%60

    respH3.innerText = titulo
    respH4.innerText = `${horasFilme} hora(s) e ${minutosFilme} minuto(s)`

    e.preventDefault()
})