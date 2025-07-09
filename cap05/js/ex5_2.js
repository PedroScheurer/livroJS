const frm = document.querySelector("form")
const outResposta = document.getElementById("outResposta")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resposta = ""

    // for(let i = numero; i >= 1; i--){
    // LAÇO FOR COM CONDIÇÃO, RUIM POIS SE FOR NUMERO ALTO, FAZ MUITOS IFS
    //     if(i !== 1){
    //         resposta = `${resposta}${i}, `
    //     } else {
    //         resposta = `${resposta}${i}.`
    //     }
    // LAÇO FOR SEM CONDIÇÃO, POIS EXCLUIR O NUMERO 1 NO FOR i >=2. E DEPOIS DO FOR COLOCA O 1.
    //     resposta = `${resposta}${i},`
    // }
    // resposta = `${resposta} 1.`
    
    // LAÇO WHILE
    let i = numero
    while(i > 0){
        resposta = `${resposta}${i},`
        i--
    }

    outResposta.innerText = `Entre 1 e ${numero}: ${resposta}`
})