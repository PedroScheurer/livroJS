const prompt = require ("prompt-sync")()
const altura = Number(prompt("Altura da árvore: "))
let qntdAsteriscos = 2

for(let i = 1; i <= altura; i++){
    qntdAsteriscos = i*2
    console.log("*".repeat(qntdAsteriscos).padStart(30+(qntdAsteriscos/2)))
}