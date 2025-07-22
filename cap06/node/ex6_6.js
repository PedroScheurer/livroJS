const prompt = require("prompt-sync")();
const preferencial = [];
const normal = [];
let nome = prompt("Nome: ");
let idade = Number(prompt("Idade: "));

while(true){
    if(idade < 60){
        normal.push({nome,idade})
    } else{
        preferencial.push({nome,idade})
    };
    console.log("Ok! Cliente cadastrado(a)")
    nome = prompt("Nome: ");
    if(nome === "Fim"){break};
    idade = Number(prompt("Idade: "));
}
console.log("\nFila Preferencial")
console.log("-".repeat(40))
let listaPreferencial = preferencial.reduce((acumulador, cliente) => 
    `${acumulador}${preferencial.indexOf(cliente)+1}. ${cliente.nome}`,""
)
console.log(listaPreferencial)
console.log("\n\nFila Normal")
console.log("-".repeat(40))
let listaNormal = normal.reduce((acumulador, cliente) => 
    `${acumulador}${normal.indexOf(cliente)+1}. ${cliente.nome}\n`,""
)
console.log(listaNormal)