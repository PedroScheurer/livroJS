const frm = document.querySelector("form");
const outValidacaoTriangulo = document.getElementById("outValidacaoTriangulo");
const outTipoTriangulo = document.getElementById("outTipoTriangulo");

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const ladoA = Number(frm.inLadoA.value);
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    let tipoTriangulo = "";
    let validacaoTriangulo = true;
    if (ladoA >= (ladoB+ladoC) || ladoB >= (ladoA+ladoC) || ladoC >= (ladoA+ladoB)){
        validacaoTriangulo = false;
    } else {
        if (ladoA===ladoB && ladoB===ladoC){
            tipoTriangulo = "Equilátero";
        } else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)) {
            tipoTriangulo = "Isósceles";
        } else {
            tipoTriangulo = "Escaleno";
        }
    }

    if(validacaoTriangulo){
        outValidacaoTriangulo.innerText = `Lados podem formar um triângulo`;
        outTipoTriangulo.innerText = `Tipo: ${tipoTriangulo}`;
    } else{
        outValidacaoTriangulo.innerText = `Lado não podem formar um triângulo`;
        outTipoTriangulo.innerHTML = "";
    }
})