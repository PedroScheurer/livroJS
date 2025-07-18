const frm = document.querySelector("form")
const respMulta = document.getElementById("outMulta")
const respJuros = document.getElementById("outJuros")
const respTotal = document.getElementById("outTotal")

const taxaMulta = 2/100
const taxaJuros = 0.33/100

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const hoje = new Date() //Instancia do objeto
    const vencto = new Date() //Instancia do objeto
    const dataVenc = frm.inDataVencimento.value
    const valor = Number(frm.inValorConta.value)

    const partes = dataVenc.split("-") // data vem no formato aaaa-mm-dd
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) -1)
    vencto.setFullYear(Number(partes[0]))

    const atraso = hoje - vencto
    let multa = 0
    let juros = 0

    if(atraso > 0){
        const diasAtraso = atraso / 86400000 //este valor numérico é 1 dia em milissegundos
        multa = valor * taxaMulta
        juros = valor * taxaJuros * diasAtraso
        const total = valor + multa + juros
        
        frm.outMulta.value = multa.toFixed(2)
        frm.outJuros.value = juros.toFixed(2)
        frm.outTotal.value = total.toFixed(2)
    } 
})