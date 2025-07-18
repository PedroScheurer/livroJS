const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const frase = frm.inFrase.value
    const fraseValidacao = frase.replace(/ /g, "").toUpperCase()
    let fraseContraria = ""
    for(let i = fraseValidacao.length-1; i >= 0; i--){
        fraseContraria += fraseValidacao[i]
    }
    if(fraseValidacao === fraseContraria){
        resp.innerText = `${frase} é um Palíndromo`
    } else{
        resp.innerText = `"${frase}" não é um Palíndromo`
    }
})