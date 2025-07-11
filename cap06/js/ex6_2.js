const frm = document.querySelector("form")
const respErros = document.getElementById("outErros")
const respChances = document.getElementById("outChances")
const respDica = document.getElementById("outDica")

const erros = []
let chances = 6
const sorteado = Math.floor(Math.random() * 100) + 1

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    if(numero !== sorteado){
        if(!erros.includes(numero)){
            erros.push(numero)
            const numErros = erros.length
            const numChances = chances - numErros
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChances.innerText = `${numChances}`
            const dica = numero < sorteado ? `maior`: `menor`
            respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            if(numChances === 0 ){
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe btn btn-outline-danger"
                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
            }
        } else {
            alert(`Você já apostou o número ${numero}`)
        }
    } else {
        respDica.innerText = `Parabéns! Você acertou.`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe btn btn-outline-primary"
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btNovo.addEventListener("click", () =>{
    location.reload()
})