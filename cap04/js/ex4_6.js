const frm = document.querySelector("form")
const outResposta1 = document.querySelector("#outResposta1")
const outResposta2 = document.querySelector("#outResposta2")
const outResposta3 = document.querySelector("#outResposta3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const valorSaque = Number(frm.inSaque.value)

    if((valorSaque % 10) != 0 ){
        alert("Valor inválido para as notas disponíveis (R$10, R$50, R$100)")
        frm.inSaque.focus()
        return
    }

    let notas100 = Math.floor(valorSaque/100)
    let resto = valorSaque%100
    let notas50 = Math.floor(resto/50)
    resto = resto%50
    let notas10 = Math.floor(resto/10)

    if (notas100 > 0){
        outResposta1.innerText = `Notas de R$100: ${notas100}`
    }
    if (notas50 > 0){
        outResposta2.innerText = `Notas de R$50: ${notas50}`
    }
    if (notas10 > 0){
        outResposta3.innerText = `Notas de R$10: ${notas10}`
    }

})