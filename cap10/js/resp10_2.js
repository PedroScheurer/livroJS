const frm = document.querySelector("form")
const dvNomes = document.getElementById("dvNomes")

const exibirPartesNome = (nome) => {
    dvNomes.querySelectorAll("h3").forEach(h3 => dvNomes.removeChild(h3))
    cores = ["blue", "red", "yellow", "black", "green", "orange", "purple", "brown"]

    const partesNome = nome.trim().split(" ")
    for(let i = 0; i < partesNome.length; i++){
        const h3 = document.createElement("h3")
        const texto = document.createTextNode(partesNome[i])
        
        h3.style.color = cores[Math.floor(Math.random() * cores.length)]
        h3.appendChild(texto)
        dvNomes.appendChild(h3)
    }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value

    exibirPartesNome(nome)

    frm.reset()
    frm.inNome.focus()
})