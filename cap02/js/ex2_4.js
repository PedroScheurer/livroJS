const frm = document.querySelector("form")
const respValorPagar = document.querySelector("#outValorPagar")

frm.addEventListener("submit", (e) =>{
    const valorQuilo = Number(frm.inValorQuilo.value)
    const consumoCliente = Number(frm.inConsumoCliente.value)

    const consumoClienteKg = consumoCliente/1000
    const valorPagar = valorQuilo*consumoClienteKg
    
    respValorPagar.innerText = `Valor a pagar R$: ${valorPagar.toFixed(2)}`

    e.preventDefault()
})