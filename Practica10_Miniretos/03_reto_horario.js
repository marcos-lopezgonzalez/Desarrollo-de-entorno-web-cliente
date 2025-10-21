const horario = [
    { dia: "Lunes", horario: ["Despliegue", "Servidor", "Itinerario"] },
    { dia: "Martes", horario: ["Interfaces", "Servidor", "Cliente"] },
    { dia: "Miercoles", horario: ["Despliegue", "Cliente", "Servidor"] },
    { dia: "Jueves", horario: ["Sostenibilidad", "Cliente", "Interfaces"] },
    { dia: "Viernes", horario: ["Servidor", "IA", "Proyecto"] }
];

const div = document.getElementById("horario");
const boton = document.getElementById("btnMostrar");

boton.addEventListener("click", mostrarHorario);

function mostrarHorario() {
    div.innerHTML = "";

    for (let i = 0; i < horario.length; i++) {
        let p = document.createElement("p");
        p.textContent = `${horario[i].dia}: `;
        for (let j = 0; j < horario[i].horario.length; j++) {
            p.textContent += `${horario[i].horario[j]} `;
        }
        div.appendChild(p);
    }
}
