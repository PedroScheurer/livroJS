const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const numeros = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(!numeros.includes(numero)){
    numeros.push(numero)
    } else{
        alert("Número já foi adicionado!")
        return
    }
    let lista = numeros.reduce((acumulador, numero) =>
        `${acumulador}, ${numero}`,"")
    lista = lista.slice(2)
    resp.innerText = `Números: ${lista}`
    frm.reset()
})

frm.btOrdenar.addEventListener("click", () =>{
    let copia = [...numeros]
    copia = copia.sort((a,b) => a-b)
    console.log(copia)
    const iguais = (copia, numeros) => {
            for(let i = 0; i < copia.length; i++){
                if(copia[i] !== numeros[i]){
                    return false
                }
            }
            return true 
        }
    if(!iguais(copia,numeros)){
        resp.innerText = "Atenção... Números não estão em ordem crescente"
    } else{
        resp.innerText = "Números estão em ordem crescente"
    }
})