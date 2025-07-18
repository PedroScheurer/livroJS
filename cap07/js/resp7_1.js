const frm = document.querySelector("form")
const resp = document.querySelector("h3")
let mensagem = ""

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    mensagem = frm.inMensagem.value
    let criptoPares = ""
    let criptoImpares = ""
    for(let i = 0; i < mensagem.length; i++){
        if(i % 2 === 0){
            criptoPares += mensagem.charAt(i)
        } else if(i % 2 === 1){
            criptoImpares += mensagem.charAt(i)
        }
    }
    resp.innerText = criptoPares + criptoImpares
    frm.reset()
})

frm.btDescriptografar.addEventListener("click", () =>{
    resp.innerText = mensagem
})