const frm = document.querySelector("form")
const resp = document.querySelector("h3")

function retornarTracos (nome) {
    let tracos = ""
    for(const caractere of nome){
        if(caractere !== " "){
            tracos += "-"
        } else{
            tracos += " "
        }
    }
    return tracos
}

function categorizarAluno(idade){
    let categoria = ""
    if(idade <= 12){
        categoria = "Infantil"
    } else if(idade <= 18){
        categoria = "Juvenil"
    } else {
        categoria = "Adulto"
    }
    return categoria
}

frm.addEventListener(("submit"), (e) => {
    e.preventDefault()

    const nomeAtleta = frm.inNome.value
    const idadeAtleta = Number(frm.inIdade.value)

    const tracos = retornarTracos(nomeAtleta)
    const categoriaAtleta = categorizarAluno(idadeAtleta)

    resp.innerText = `${nomeAtleta}\n${tracos}\nCategoria: ${categoriaAtleta}`
})