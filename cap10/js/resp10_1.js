const frm = document.querySelector("form")
const dvVelas = document.getElementById("dvVelas")

const criarVela = (vela, altTexto, classe) => {
    const novaVela = document.createElement("img")

    novaVela.src = `img/${vela}.png`
    novaVela.textAlt = altTexto
    novaVela.className = classe
    dvVelas.appendChild(novaVela)
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const idade = Number(frm.inIdade.value)
    
    const listaAlgarismos = idade.toString().split("")

    listaAlgarismos.forEach(numero => {
        criarVela("vela"+numero, "Vela-"+numero, "velas")
    })
})

frm.addEventListener("reset", () => {
    window.location.reload()
})