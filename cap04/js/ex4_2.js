const frm = document.querySelector("form")
const outResposta = document.querySelector("#outResposta")

frm.addEventListener("submit", (e) =>{
  e.preventDefault()
  
  const nome = frm.inNome.value
  const masculino = frm.inMasculino.checked
  const altura = frm.inAltura.value
  
  //Operador Ternario
  let peso = masculino ? 22 * Math.pow(altura,2) : 21 * Math.pow(altura,2)
  
  
  outResposta.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`
})

frm.addEventListener("reset", () =>{
  outResposta.innerText = ""
})