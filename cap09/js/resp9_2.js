const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const mostrarItens = () => {
    if(!localStorage.getItem("produtos")){
        return resp.innerText = ""
    }
    const listaProdutos = localStorage.getItem("produtos").split(";")
    const listaProdutosOrdenados = listaProdutos.sort()

    const listaResposta = listaProdutosOrdenados.reduce((acumulador, item) => 
    acumulador + item + "\n", "")
    return resp.innerText = `Produtos Adicionados\n${"-".repeat(30)}\n${listaResposta}`
}

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const produto = frm.inProduto.value

    if(localStorage.getItem("produtos")){
        const produtos = localStorage.getItem("produtos") + ";" + produto
        localStorage.setItem("produtos", produtos)
    } else{
        localStorage.setItem("produtos", produto)
    }

    mostrarItens()
    
    frm.inProduto.value = ""
    frm.inProduto.focus()
})

frm.btLimpar.addEventListener("click", () => {
    if(!localStorage.getItem("produtos")){
        alert("Não há itens na lista")
        return
    }

    if(confirm("Confirma a exclusão da lista?")){
        localStorage.removeItem("produtos")
        mostrarItens()
    }
})

window.addEventListener("load", mostrarItens)