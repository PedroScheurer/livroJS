const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const candidatos = new Array()

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)
    candidatos.push({nome, acertos})

    frm.reset()
    frm.inCandidato.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if(candidatos.length === 0){
        alert("Nenhum candidato adicionado!")
        return
    }
    const lista = candidatos.reduce((acumulador, candidato) => 
    `${acumulador}${candidato.nome} - ${candidato.acertos} acerto(s)\n`,"")
    resp.innerText = lista
})

frm.btAprovados.addEventListener("click", () =>{
    const aprovacao = Number(prompt("Número Minímo de Acertos para Aprovação?"))

    let aprovados = candidatos.filter((candidato) => {
        if(candidato.acertos >= aprovacao){return true}
    })
    
    const lista = aprovados.reduce((acumulador, candidato) => 
    `${acumulador}${candidato.nome} - ${candidato.acertos} acerto(s)\n`,"")
    
    resp.innerText = lista
})