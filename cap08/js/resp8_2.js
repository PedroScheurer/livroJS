const frm = document.querySelector("form")
const resp = document.querySelector("h3")

function validarNome(nome) {
    const nomesSeparados = nome.trim().split(" ")
    if(nomesSeparados === null || nomesSeparados.length <= 1){
        return false
    } else{
        return true
    } 
}

function obterSobrenome(nome) {
    const nomesSeparados = nome.trim().split(" ")
    const num = nomesSeparados.length
    return nomesSeparados[num-1].toLowerCase()
}

function contarVogais(nome) {
    const vogais = nome.match(/[aeiou]/gi)
    const numVogais = vogais.length
    return numVogais < 10 ? "0" + numVogais : numVogais
}

frm.addEventListener(("submit"), (e) => {
    e.preventDefault()

    const nomeAluno = frm.inNome.value
    const validacaoNome = validarNome(nomeAluno)
    if(validacaoNome === false){
        resp.innerText = "Nome inválido"
    } else{
        const sobrenome = obterSobrenome(nomeAluno)
        const vogaisNome = contarVogais(nomeAluno)
        resp.innerText = `Senha Inicial: ${sobrenome}${vogaisNome}`
    }
})