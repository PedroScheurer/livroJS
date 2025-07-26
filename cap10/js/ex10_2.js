const frm = document.querySelector("form")
const dvMoeda = document.getElementById("divMoedas")

const criarMoedas = (num, moeda, textoAlt, classe) => {
    for(let i = 1; i <= num; i++){
        const novaMoeda = document.createElement("img")
        novaMoeda.src = "img/" + moeda
        novaMoeda.textAlt = textoAlt
        novaMoeda.className = classe
        dvMoeda.appendChild(novaMoeda)
    }
    const br = document.createElement("br")
    dvMoeda.appendChild(br)
}

window.addEventListener("load", () => {
    const num1_00 = Math.ceil(Math.random() * 5)
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    const alt1_00 = "Moedas de um real"
    const alt0_50 = "Moedas de Cinquenta Centavos"
    const alt0_25 = "Moedas de Vinte e Cinco Centavos"
    const alt0_10 = "Moedas de Dez Centavos"

    criarMoedas(num1_00, "1_00.png", alt1_00, "moeda1-00")
    criarMoedas(num0_50, "0_50.png", alt0_50, "moeda0-50")
    criarMoedas(num0_25, "0_25.png", alt0_25, "moeda0-25")
    criarMoedas(num0_10, "0_10.png", alt0_10, "moeda0-10")
})


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const moedas = dvMoeda.querySelectorAll("img")
    const somaResposta = Number(frm.inSoma.value)
    let soma = 0

    moedas.forEach(moeda => {
        if(moeda.className === "moeda1-00"){
            soma += 1
        } else if(moeda.className === "moeda0-50"){
            soma += 0.5
        } else if(moeda.className === "moeda0-25"){
            soma += 0.25
        } else if(moeda.className === "moeda0-10"){
            soma += 0.10
        }
    })
    console.log(somaResposta, soma.toFixed(2))

    const div = document.createElement("div")
    const h3 = document.createElement("h3")

    let mensagem

    if(somaResposta == soma.toFixed(2)){
        div.className = "alert alert-success"
        mensagem = "Parabéns!! Você acertou!"
    } else {
        div.className = "alert alert-danger"
        mensagem = "Você errou."
    }

    const texto = document.createTextNode(mensagem)
    h3.appendChild(texto)
    div.appendChild(h3)
    dvMoeda.appendChild(div)

    frm.submit.disabled = true
})

frm.addEventListener("reset", (e) => {
    window.location.reload()
})