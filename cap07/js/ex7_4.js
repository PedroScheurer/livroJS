const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let nome = frm.inNome.value.trim()

    if(!nome.includes(" ")){
        alert("Por favor, informe o nome completo!")
        return
    }

    const posPrimeiroEspaco = nome.indexOf(" ")
    const posUltimoEspaco = nome.lastIndexOf(" ")

    const primeiroNome = nome.substr(0, posPrimeiroEspaco)
    const ultimoNome = nome.substr(posUltimoEspaco)

    resp.innerText = primeiroNome + ultimoNome
    frm.reset()
})