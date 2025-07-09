const frm = document.querySelector("form")
const outMedia = document.querySelector("#outMedia")
const outResultado = document.querySelector("#outResultado")

frm.addEventListener("submit", (e) => {  
  e.preventDefault()
  const nome = frm.inNome.value
  const nota1 = Number(frm.inNota1.value)
  const nota2 = Number(frm.inNota2.value)
  
  const media = (nota1+nota2)/2
  outMedia.innerText = `Média das Notas ${media.toFixed(2)}`
  
  if(media >=  7){
    outResultado.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
    outResultado.style.color = "green"
  }else if (media>=4){
    outResultado.innerText = `Atenção ${nome}! Você está em exame`
    outResultado.style.color = "yellow"
  } else {
    outResultado.innerText = `Infelizmente ${nome}! Você foi reprovado(a)`
    outResultado.style.color = "red"
  }
})