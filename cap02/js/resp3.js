const frm = document.querySelector("form")
const respostaValorPromocao = document.querySelector("#outValorPromocao")
const respostaValorDesconto = document.querySelector("#outValorDesconto")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const valorDesconto = preco-(preco*0.5);
    const valorProdutoDesconto = preco-valorDesconto
    const valorPromocao = (preco*3)-valorDesconto;

    respostaValorPromocao.innerText = `${produto} - Promoção: Leve 3 por R$${valorPromocao.toFixed(2)}`
    respostaValorDesconto.innerText = `O 3o. produto custa apenas R$: ${valorProdutoDesconto.toFixed(2)}`

    e.preventDefault()
})