const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const fruta = frm.inFruta.value.toUpperCase()
    let resposta = ""

    for(let i = 0; i < fruta.length; i++){
        if(fruta.charAt(i) == fruta.charAt(0)){
            resposta += fruta.charAt(0)
        } else{
            resposta += "_"
        }
    }

    resp.innerText = resposta
    frm.inFruta.value = "*".repeat(fruta.length)
})