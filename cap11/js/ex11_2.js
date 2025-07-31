const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240;
const reservadas = [];

window.addEventListener("load", () => {
    const ocupadas = localStorage.getItem("cinemaOcupadas") ? localStorage.getItem("cinemaOcupadas").split(";") : [];

    for (let i = 1; i <= POLTRONAS; i++) {
        const figure = document.createElement("figure");
        const imgStatus = document.createElement("img");


        imgStatus.src = ocupadas.includes(i.toString()) ? "img/ocupada.jpg" : "img/disponivel.jpg";
        imgStatus.className = `poltrona`;
        const figureCap = document.createElement("figcaption");

        const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

        const num = document.createTextNode(`${zeros}${i}`);

        figureCap.appendChild(num);
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap);

        if (i % 24 === 12) {
            figure.style.marginRight = "60px";
        }

        dvPalco.appendChild(figure);

        (i % 24 === 0) && dvPalco.appendChild(document.createElement("br"));
    }
})

dvPalco.addEventListener("click", (e) => {
    let poltrona
    if (e.target.classList.contains("poltrona")) {
        poltrona = Number(e.target.parentElement.innerText)
    }

    const ocupadas = localStorage.getItem("cinemaOcupadas") ? localStorage.getItem("cinemaOcupadas").split(";") : [];

    if (ocupadas.includes(poltrona.toString())) {
        alert(`Poltrona ${poltrona.toString()} ocupada`)
        return
    }

    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1]

    imgPoltrona.src = "img/reservada.jpg"

    if (reservadas.includes(poltrona)) {
        imgPoltrona.src = "img/disponivel.jpg"
        reservadas = reservadas.splice(reservadas.indexOf(poltrona), 1)
    }

    reservadas.push(poltrona)
})

frm.btConfirmar.addEventListener("click", () => {
    if (reservadas.length === 0) {
        alert("Não há cadeiras reservadas")
        return
    }

    if (localStorage.getItem("cinemaOcupadas")) {
        const ocupadas = localStorage.getItem("cinemaOcupadas").split(";")
        localStorage.setItem("cinemaOcupadas", [...ocupadas, ...reservadas].join(";"))
    } else {
        localStorage.setItem("cinemaOcupadas", [...reservadas].join(";"))
    }

    for(let i = reservadas.length - 1; i >= 0; i--){
        console.log(i)
        const imgPoltrona = dvPalco.querySelectorAll("img")[reservadas[i] - 1]

        imgPoltrona.src = "img/ocupada.jpg"

        reservadas.pop()
    }
})