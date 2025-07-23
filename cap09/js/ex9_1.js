const frm = document.querySelector("form")
const imClube = document.getElementById("imgClube")
const dvTitulo = document.getElementById("divTitulo")
const inRadios = document.querySelectorAll("input")

const trocarClube = () => {
    const clubes = [
        "Internacional", "Gremio", "Brasil", "Pelotas","Farroupilha"
    ]
    
    let selecao
    
    for(let i = 0; i < inRadios.length; i++){
        if(inRadios[i].checked){
            selecao = i
            break
        }
    }

    if(selecao <= 4){
       dvTitulo.className = `row cores-${clubes[selecao]}` 
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`
        imClube.className = "img-fluid"
        imClube.alt = `Símbolo do ${clubes[selecao]}`

        localStorage.setItem("clube", clubes[selecao])
    } else {
        dvTitulo.className = `row`
        imClube.className = "d-none"
        imClube.alt = ""
        localStorage.removeItem("clube")
    }
}

const verificarClube = () => {
    if (localStorage.getItem("clube")){
        const clube = localStorage.getItem("clube")
        if(clube === "Internacional"){
            inRadios[0].checked = true
        } else if(clube === "Gremio") {
            inRadios[1].checked = true
        } else if(clube === "Brasil") {
            inRadios[2].checked = true
        } else if(clube === "Pelotas") {
            inRadios[3].checked = true
        } else if(clube === "Farroupilha") {
            inRadios[4].checked = true
        }
        trocarClube()
    }
}

window.addEventListener("load", verificarClube)
for(const inRadio of inRadios){
    inRadio.addEventListener("change", trocarClube)
}