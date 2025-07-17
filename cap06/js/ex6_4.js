const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const criancas = new Array()

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.inNomeCrianca.value
    const idade = Number(frm.inIdadeCrianca.value)

    const crianca = {nome: nome, idade: idade}
    criancas.push(crianca)

    frm.reset()
    frm.inNomeCrianca.focus()
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () =>{
    if(criancas.length !== 0){
    const lista = criancas.reduce((acumulador, crianca) => 
        `${acumulador}${crianca.nome} - ${crianca.idade} anos\n`,"")
    resp.innerText = `${lista}`
    } else{
        alert("Não há crianças na lista")
        return
    }
})

frm.btResumir.addEventListener("click", () => {
    if(criancas.length !== 0){
        const copia = [...criancas]
        copia.sort((a,b) => a.idade - b.idade)
        let resumo = ""
        let aux = copia[0].idade
        let nomes = []
        for(const crianca of copia){
            const {nome, idade} = crianca
            if(crianca.idade == aux){
                nomes.push(nome)
            } else {
                resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
                resumo += ((nomes.length/copia.length) *100).toFixed(2) + "%\n"
                resumo += "(" + nomes.join(", ") + ")\n\n"
                aux = idade
                nomes = []
                nomes.push(nome)
            }
        }
    resumo += aux + " anos(s): " + nomes.length + " criança(s)"
    resumo += ((nomes.length/copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"
    resp.innerText = resumo
    } else{
        alert("Não há crianças na lista")
        return
    }
})