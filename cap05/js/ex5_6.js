const frm = document.querySelector("form")
const outResp = document.getElementById("outResposta")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let temDivisor = 0
    for (let i = 2; i <= numero; i++){
        if(numero % i === 0){
            temDivisor = 1;
            break;
        }
    }
    if (numero > 1 && !temDivisor){
        outResp.innerText = `${numero} é primo.`
    }else {
        outResp.innerText = `${numero} não é primo.`
    }
})