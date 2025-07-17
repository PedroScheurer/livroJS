const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    let clube = frm.inClube.value
    if(!clubes.includes(clube)){
        clubes.push(clube)
    } else{
        alert("Time já adicionado, tente outro!")
        return
    }
    frm.reset()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () =>{
    const lista = clubes.reduce((acumulador, clube) =>
    `${acumulador}${clubes.indexOf(clube)+1}. ${clube}\n`,"")
    resp.innerText = lista
})

frm.btTabelar.addEventListener("click", () =>{
    if(clubes.length % 2 === 0){
        const copia = [...clubes]
        let tabela = ""
        for(let i = 0; i <= copia.length; i++){
            tabela += `${copia[0]} x ${copia[copia.length-1]}\n`
            copia.pop()   
            copia.shift()
            console.log(copia) 
        }
        resp.innerText = tabela
    } else{
        alert("Número de clubes ímpar!!")
    }
})