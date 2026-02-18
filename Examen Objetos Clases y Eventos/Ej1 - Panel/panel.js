// EJERCICIO 1 - Panel de participación en clase
// Usa este archivo para completar la lógica del ejercicio.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)
// NRE: 2005052

// 1. Crea la clase Alumno con los métodos que consideres oportunos
class Alumno {
    constructor(numero, nombre) {
        this.numero = numero;
        this.nombre = nombre;
        this.participaciones = 0;
    }
}

// 2. Crea un array "alumnos" con varios objetos Alumno.
//    Los nombres deberían coincidir con las opciones del <select>
const alumnos = [
    new Alumno(0, "Ana"),
    new Alumno(1, "Luis"),
    new Alumno(2, "Marta"),
    new Alumno(3, "Pedro"),
    new Alumno(4, "Lucía")
];

console.log(alumnos);

// 3. Captura los elementos del DOM que vas a usar
const selectAlumno = document.getElementById("selectAlumno");
const btnPresente = document.getElementById("btnPresente");
const btnAusente = document.getElementById("btnAusente");
const resumenAsistencia = document.getElementById("resumenAsistencia");
const mensajeInfo = document.getElementById("mensajeInfo");
const tablaAsistencia = document.getElementById("tablaAsistencia");

// 4. Crea una función "calcularTotalParticipaciones()"
function calcularTotalParticipaciones() {

}

// 5. Crea una función "pintarTabla()" que:
//    - vacíe el contenido actual del tbody
//    - recorra el array alumnos
//    - cree una fila <tr> por cada alumno
//      (Opcional) puedes añadir clases CSS distintas para los primeros
//      del ranking y para los que tienen 0 participaciones.
function pintarTabla() {
    tablaAsistencia.innerHTML = "";

    for (let i = 0; i < alumnos.length; i++) {
        let row = document.createElement("tr");
        let tdNumero = document.createElement("td");
        tdNumero.textContent = alumnos[i].numero;
        let tdNombre = document.createElement("td");
        tdNombre.textContent = alumnos[i].nombre;
        let tdParticipaciones = document.createElement("td");
        tdParticipaciones.textContent = alumnos[i].participaciones;

        row.appendChild(tdNumero);
        row.appendChild(tdNombre);
        row.appendChild(tdParticipaciones);
        tablaAsistencia.appendChild(row);
    }
}

// 7. Crea una función "actualizarResumen()" para actualizar el contenido
function actualizarResumen() {
    pintarTabla();
}

// 8. Crea una función "actualizarMensajeInfo(texto)" que actualice el mensaje
function actualizarMensajeInfo(texto) {
    mensajeInfo.textContent = texto;
}

// 9. Crea una función "buscarAlumnoPorNombre(nombre)" que:
//    - recorra el array de alumnos
//    - compare el nombre de cada alumno con el parámetro recibido
//    - devuelva el objeto alumno si lo encuentra, o null si no lo encuentra
function buscarAlumnoPorNombre(nombre) {
    for (let i = 0; i < alumnos.length; i++) {
        if (nombre.toLowerCase() === alumnos[i].nombre.toLowerCase())
            return alumnos[i];
    }
    console.log("No encuentra nombre");
    return null;
}

// 10. Crea una función "manejarParticipacion(cantidad)" que:
//     - obtenga el nombre seleccionado del select
//     - busque el alumno correspondiente usando buscarAlumnoPorNombre()
//     - si existe, sume/reste participaciones según la cantidad
//     - actualice la tabla y el resumen
//     - muestre un mensaje informativo
function manejarParticipacion(cantidad) {
    let nombre = selectAlumno.value.toLowerCase();
    let alumno = buscarAlumnoPorNombre(nombre);

    if (alumno === null) {
        actualizarMensajeInfo("ERROR al registrar acción. Alumno no existente");
        return;
    }

    if (alumnos[alumno.numero].participaciones + cantidad >= 0)
        alumnos[alumno.numero].participaciones += cantidad;
    else {
        actualizarMensajeInfo("No se permiten participaciones inferiores a 0");
        actualizarResumen();
        return;
    }


    actualizarResumen();
    actualizarMensajeInfo("Participaciones de " + alumno.nombre + " modificadas --> " + cantidad);
}

function manejarParticipacionTeclado(numero) {
    let cantidad = 1;
    if (alumnos[numero].participaciones + cantidad >= 0)
        alumnos[numero].participaciones += cantidad;
    else {
        actualizarMensajeInfo("No se permiten participaciones inferiores a 0");
        actualizarResumen();
        return;
    }


    actualizarResumen();
    actualizarMensajeInfo("Participaciones de " + alumnos[numero].nombre + " modificadas --> " + cantidad);
}

// 11. Añade el evento click de btnPresente que llame a manejarParticipacion(1)
btnPresente.addEventListener("click", function () {
    manejarParticipacion(1);
    console.log("Manejar +1");
});

// 12. Añade el evento click de btnAusente que llame a manejarParticipacion(-1)
btnAusente.addEventListener("click", function () {
    manejarParticipacion(-1);
    console.log("Manejar -1");
});

// 13. Añade un evento "keydown" al documento para los atajos de teclado.
//     Ejemplo de funcionamiento (puedes seguir este esquema):
//     - tecla "1": sumar participación al primer alumno del array
//     - tecla "2": sumar participación al segundo alumno
//     - tecla "3": sumar participación al tercero
document.addEventListener("keydown", function (event) {
    const tecla = event.key;
    switch (tecla) {
        case "1":
            console.log("1");
            manejarParticipacionTeclado(0);
            break;
        case "2":
            console.log("1");
            manejarParticipacionTeclado(1);
            break;
        case "3":
            console.log("1");
            manejarParticipacionTeclado(2);
            break;
        case "4":
            console.log("1");
            manejarParticipacionTeclado(3);
            break;
        case "5":
            console.log("1");
            manejarParticipacionTeclado(4);
            break;
        default:
            break;
    }
});

// 14. Por último, llama a las funciones necesarias al inicio del script:
//     - pintarTabla()
//     - actualizarResumen()

// ¡IMPORTANTE! Revisa el archivo panel.html para ver los IDs y clases y no modifiques el HTML.
// ¡IMPORTANTE! Revisa el archivo panel.css para ver las clases CSS disponibles y no modifiques el CSS.

actualizarResumen();
