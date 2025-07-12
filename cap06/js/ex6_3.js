const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const carros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const modeloCarro = frm.inModelo.value
    const precoCarro = Number(frm.inPreco.value)

    const carro = {modelo:modeloCarro, preco: precoCarro}
    carros.push(carro)

    frm.inModelo.value = ""
    frm.inModelo.focus()
    frm.inPreco.value = ""
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () =>{
    if(carros.length !== 0){
        const lista = carros.reduce((acumulador,carro) =>
           acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n","")
            resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
        } else{
            alert("Não há carros na lista")
            return
    }
})

frm.btFiltrar.addEventListener("click", () => {
    const valorMaximo = Number(prompt("Qual o valor máximo que deseja buscar?"));
    if(valorMaximo === 0 || isNaN(valorMaximo)){return};
    const carrosFiltrados = carros.filter(carro => carro.preco <= valorMaximo);
    if(carrosFiltrados.length === 0){
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }

    const lista = carrosFiltrados.reduce((acumulador, carro) =>
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n","");
    resp.innerText = `Carros até R$: ${valorMaximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;
})

frm.btSimular.addEventListener("click", () =>{
    const desconto = Number(prompt("Qual o percentual de desconto?(%)"));
    if(desconto == 0 || isNaN(desconto)){return};

    const carrosPromocao = carros.map(aux => ({modelo: aux.modelo, preco: aux.preco - (aux.preco * desconto/100)}))
    const lista = carrosPromocao.reduce((acumulador, carro) => 
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n","")
    resp.innerText = `Lista de Carros com Desconto de ${desconto}%\n${"-".repeat(40)}\n${lista}`
})