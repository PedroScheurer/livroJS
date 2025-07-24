const frm = document.querySelector("form")
const imClube = document.getElementById("imgClube")
const dvTitulo = document.getElementById("divTitulo")
const inRadios = dvTitulo.querySelectorAll("input")
const respVisita = document.getElementById("visitas")

const clubes = [
    "Internacional", "Gremio", "Brasil", "Pelotas","Farroupilha"
]

const trocarClube = () => {
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
        for(let i = 0; i < clubes.length; i++){
            if(clube === clubes[i]){
                inRadios[i].checked = true
            }
        }    
        trocarClube()
    }
}

const visitas = () => {
    if(!localStorage.getItem("numVisitas")){
        respVisita.innerText = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site."
        localStorage.setItem("numVisitas", 1)
        return
    }
    let numVisitas = Number(localStorage.getItem("numVisitas"))
    localStorage.setItem("numVisitas", numVisitas+1)
    respVisita.innerText = `Que bom que você voltou! Esta é a sua visita de número ${localStorage.getItem("numVisitas")} ao nosso site.`
}

window.addEventListener("load", visitas)
window.addEventListener("load", verificarClube)
for(const inRadio of inRadios){
    inRadio.addEventListener("change", trocarClube)
}