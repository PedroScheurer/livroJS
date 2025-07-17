const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const senha = frm.inSenha.value
    
    if(senha.length < 8 || senha.length > 15){
        resp.innerText = "A senha deve conter entre 8 a 15 caracteres!"
        return
    }
    if(!senha.match(/[0-9]/g)){
        resp.innerText = "A senha deve possuir, no mínimo, 1 número"
        return
    }
    if(senha.match(/[a-z]/g) === null){
        resp.innerText = "A senha deve possuir, no mínimo, 1 letra minúscula"
        return
    }
    if(senha.match(/[A-Z]/g) === null || senha.match(/[A-Z]/g).length < 2){
        resp.innerText = "A senha deve possuir, no mínimo, 2 letras maiúsculas"
        return
    }
    if(senha.match(/\W|_/g) === null){
        resp.innerText = "A senha deve possuir, no mínimo, 1 símbolo"
        return
    }
    resp.innerText = "Ok, senha válida!"
})