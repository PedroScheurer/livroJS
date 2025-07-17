const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const funcionario = frm.inFuncionario.value.trim()
    const nomesFuncionario = funcionario.split(" ")
    let email = ""
    for(let i = 0; i < nomesFuncionario.length-1; i++){
        email += nomesFuncionario[i].charAt(0).toLowerCase()
    }
    email += nomesFuncionario[nomesFuncionario.length-1].toLowerCase() + "@empresa.com.br"
    
    resp.innerText = email
    frm.reset()
})