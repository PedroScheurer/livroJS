const frm = document.querySelector("form")
const respQntd = document.getElementById("outQntdServicos")
const respServico = document.getElementById("outServico")
const pServico = document.getElementById("pServico")

const mostrarQuantidade = () => {
    if(localStorage.getItem("servicos")){
        const listaServicos = localStorage.getItem("servicos").split(";")
        respQntd.innerText = "Serviços Pendentes: " + listaServicos.length
    } else{
        respQntd.innerText = "Nenhum serviço pendente"
    }
}

const mostrarServico = () => {
    if(localStorage.getItem("servicos")){
        pServico.classList.add("exibe")
        const listaServicos = localStorage.getItem("servicos").split(";")
        respServico.innerText = listaServicos[0]
    } else {
        pServico.classList.remove("exibe") 
        respServico.innerText = ""
    }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const servico = frm.inServico.value

    if(localStorage.getItem("servicos")){
        const servicos = localStorage.getItem("servicos") + ";" + servico
        localStorage.setItem("servicos", servicos)
    } else {
        localStorage.setItem("servicos", servico)
    }
    mostrarQuantidade()
    mostrarServico()

    frm.inServico.value = ""
    frm.inServico.focus()
})

frm.btExecutar.addEventListener("click", () => {
    if(localStorage.getItem("servicos")){
        const listaServicos = localStorage.getItem("servicos").split(";")
        listaServicos.shift()
        const servicos = listaServicos.join(";")
        localStorage.setItem("servicos", servicos)
    }

    mostrarQuantidade()
    mostrarServico()
})

window.addEventListener("load", mostrarServico)
window.addEventListener("load", mostrarQuantidade)