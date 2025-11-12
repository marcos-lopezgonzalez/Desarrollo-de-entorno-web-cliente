let inputNota = prompt("Introduce una nota: ");
const notas = [];
let notaMaxima = 0;
let notaMinima = 10;
let salidaNotas = document.getElementById("salidaNotas");

while (inputNota !== null && inputNota.toLowerCase() !== "fin") {
    if (inputNota.trim() !== "") {
        inputNota = Number(inputNota);
        if (isNaN(inputNota) || Number(inputNota) < 0 || 10 < Number(inputNota)) {
            alert("Nota no válida");
        } else {
            // notas.push(Number(inputNota));
            notas.push(inputNota);
            if (inputNota < notaMinima)
                notaMinima = inputNota;
            if (notaMaxima < inputNota)
                notaMaxima = inputNota;
            console.log(notas);
        }
        inputNota = prompt("Introduce una nota: ");
    } else {
        alert("Nota no válida");
        inputNota = prompt("Introduce una nota: ");
    }
}

// console.log("Notas", notas);
// console.log("Nota maxima", notaMaxima);
// console.log("Notas minima", notaMinima);
// console.log("Aprobados", contarAprobados());
// console.log("Media", calcularMedia());

salidaNotas.textContent = "";
if (notas.length === 0) {
    salidaNotas.textContent = "No se han introducido notas.";
} else {
    salidaNotas.textContent += "Notas: " + notas + " || ";
    salidaNotas.textContent += "Nota maxima: " + notaMaxima + " || ";
    salidaNotas.textContent += "Nota minima: " + notaMinima + " || ";
    salidaNotas.textContent += "Media: " + calcularMedia() + " || ";
    salidaNotas.textContent += "Nº Aprobados: " + contarAprobados();
}


function calcularMedia() {
    let sumaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    let media = (sumaNotas / notas.length).toFixed(2);
    return media;
}

function contarAprobados() {
    let aprobados = 0;
    for (let i = 0; i < notas.length; i++) {
        if (5 <= notas[i])
            aprobados++;
    }
    return aprobados;
}