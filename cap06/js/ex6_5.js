//No terminal: npm i prompt-sync
const prompt = require("prompt-sync")()
const alunos = []
const nome = prompt("Digite seu nome: ")
const nota = Number(prompt("Digite sua nota: "))
alunos.push({nome, nota})
console.log("Ok! Aluno(a) cadastrado(a)")
let maior = nota

while(true){
    for(const aluno of alunos){
        if(aluno.nota > maior){
            maior = aluno.nota
        }
    }
    const nome = prompt("Digite seu nome: ")
    if(nome === "Fim"){
        break
    }
    const nota = Number(prompt("Digite sua nota: "))
    alunos.push({nome, nota})
    console.log("Ok! Aluno(a) cadastrado(a)")
}

console.log(`${"-".repeat(40)}`)
console.log(`A maior nota é ${maior}`)

if (maior >= 7){
    const destaques = alunos.filter(aluno =>{
        if(aluno.nota === maior){return aluno}
    })
    const resposta = destaques.reduce((acumulador, aluno) => 
    `${acumulador}-${aluno.nome}\n`,"")
    console.log(resposta)
} else{
    console.log("Não há alunos em destaque na turma")
}