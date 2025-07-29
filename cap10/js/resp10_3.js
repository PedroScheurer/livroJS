const frm = document.querySelector("form")
const dvClubes = document.getElementById("dvClubes")

const clubes = []



frm.addEventListener("submit", (e) => {
    e.preventDefault()

    dvClubes.querySelectorAll("table").forEach(table => dvClubes.removeChild(table))
    dvClubes.querySelectorAll("h3").forEach(h3 => dvClubes.removeChild(h3))
    const clube = frm.inClube.value
    clubes.push(clube)

    const h5 = document.createElement("h5")
    let texto = document.createTextNode(clube)
    
    h5.appendChild(texto)
    h5.classList.add("lista-times")
    dvClubes.appendChild(h5)

    frm.inClube.value = ""    
    frm.inClube.focus()
})

 frm.btMontar.addEventListener("click", () => {
    if(clubes.length % 2 === 1){
        alert("Lista de clubes ímpar, não é possível montar tabela!")
        return
    }
    dvClubes.querySelectorAll("table").forEach(table => dvClubes.removeChild(table))
    dvClubes.querySelectorAll("h3").forEach(h3 => dvClubes.removeChild(h3))
    const clubes2 = [...clubes]
    const table = document.createElement("table")
    table.className = "table table-striped"
    for(let i = 0; i < clubes.length/2; i++){
            const linha = table.insertRow(-1)
            const col0 = linha.insertCell(0)
            const col1 = linha.insertCell(1)
            col0.innerText = clubes2[0]
            col1.innerText = clubes2[1]
            clubes2.shift()
            clubes2.shift()
    }
    
    const h3 = document.createElement("h3")
    h3.appendChild(document.createTextNode("Tabela de Jogos"))
    dvClubes.appendChild(h3)
    dvClubes.appendChild(table)
    frm.querySelector('input[type="submit"]').disabled = true
    frm.btMontar.disabled = true
})

frm.addEventListener("reset", () => {
    window.location.reload()
})