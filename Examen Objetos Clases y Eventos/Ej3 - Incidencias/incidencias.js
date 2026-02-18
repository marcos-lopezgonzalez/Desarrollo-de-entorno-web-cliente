// EJERCICIO 3 - Panel de incidencias
// Usa clases, arrays, filtros combinados y delegación de eventos.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)
// NRE: 2005052

// 1. Crea la clase Incidencia con:
//    - Constructor que reciba: descripcion, aula, tipo
//    - Propiedad estado: debe inicializarse automáticamente en "abierta"
//    - Método avanzarEstado(): debe cambiar el estado siguiendo esta lógica:
//        * si está en "abierta" → cambia a "en-curso"
//        * si está en "en-curso" → cambia a "resuelta"
//        * si está en "resuelta" → no hace nada (ya está en el estado final)
//    - Método resetEstado(): debe volver el estado a "abierta"

class Incidencia {
    constructor(descripcion, aula, tipo) {
        this.descripcion = descripcion;
        this.aula = aula;
        this.tipo = tipo;
        this.estado = "abierta";
    }

    avanzarEstado() {
        if (this.estado === "abierta") {
            this.estado = "en-curso";
        }
        else if (this.estado === "en-curso") {
            this.estado = "resuelta";
        }
    }

    resetEstado() {
        this.estado = "abierta";
    }
}

// 2. Crea un array "incidencias" que guardará todos los objetos Incidencia.
// const incidencias = [];
const incidencias = [
    new Incidencia("Prueba1", "Aula 1", "Hardware"),
    new Incidencia("Prueba2", "Aula 2", "Software"),
    new Incidencia("Prueba3", "Aula 1", "Software"),
    new Incidencia("Prueba4", "Aula 2", "Hardware"),
    new Incidencia("Prueba5", "Aula de Informática", "Red")
];

incidencias[0].estado = "abierta";
incidencias[1].estado = "en-curso";
incidencias[2].estado = "abierta";
incidencias[3].estado = "abierta";
incidencias[4].estado = "resuelta";

// 3. Captura los elementos del DOM que vas a usar:
//    - Inputs del formulario: descripcionIncidencia, aulaIncidencia, tipoIncidencia
//    - Botón: btnRegistrarIncidencia
//    - Controles de filtrado: filtroAula, filtroEstado
//    - Elementos de visualización: contenedorIncidencias, mensajeVacio, resumenIncidencias
let descripcionIncidencia = document.getElementById("descripcionIncidencia");
let aulaIncidencia = document.getElementById("aulaIncidencia");
let tipoIncidencia = document.getElementById("tipoIncidencia");

let btnRegistrarIncidencia = document.getElementById("btnRegistrarIncidencia");

let filtroAula = document.getElementById("filtroAula");
let filtroEstado = document.getElementById("filtroEstado");

let contenedorIncidencias = document.getElementById("contenedorIncidencias");
let mensajeVacio = document.getElementById("mensajeVacio");
let resumenIncidencias = document.getElementById("resumenIncidencias");

// 4. Crea una función "pintarIncidencias(lista)" que:
//    - vacíe el contenedorIncidencias 
//    - si lista está vacía → mostrar mensajeVacio y salir con return
//    - si no → ocultar mensajeVacio
//    - recorrer lista con un bucle for y por cada incidencia crear:
//        * un <div> con clase "tarjeta"
//        * un <h3> con el texto "Incidencia #" + número
//        * párrafos <p> con clase "detalle" para: descripción, aula y tipo
//        * un párrafo para el estado con clases condicionales:
//            - "detalle estado estado-abierta" si estado === "abierta"
//            - "detalle estado estado-en-curso" si estado === "en-curso"
//            - "detalle estado estado-resuelta" si estado === "resuelta"
//        * un <div> con clase "acciones" que contenga DOS botones:
//            - Botón "Avanzar estado" con clase "btn-mini", data-op="avanzar" y data-index con el índice
//            - Botón "Volver a abierta" con clase "btn-mini", data-op="reset" y data-index con el índice
//    - añadir cada tarjeta al contenedorIncidencias
function pintarIncidencias(lista) {
    contenedorIncidencias.innerHTML = "";

    if (lista.length !== 0) {
        mensajeVacio.style.display = "none";
    } else {
        mensajeVacio.style.display = "block";
        return;
    }

    for (let i = 0; i < lista.length; i++) {
        let div = document.createElement("div");
        div.className = "tarjeta";

        let h3 = document.createElement("h3");
        h3.textContent = "Incidencia #" + i;

        let pDescripcion = document.createElement("p");
        pDescripcion.className = "detalle";
        pDescripcion.textContent = lista[i].descripcion;

        let pAula = document.createElement("p");
        pAula.className = "detalle";
        pAula.textContent = lista[i].aula;

        let pTipo = document.createElement("p");
        pTipo.className = "detalle";
        pTipo.textContent = lista[i].tipo;

        let pEstado = document.createElement("p");
        pEstado.className = "detalle estado estado-" + lista[i].estado;
        pEstado.textContent = lista[i].estado;

        let divBotones = document.createElement("div");
        divBotones.className = "acciones";

        let btnAvanzar = document.createElement("button");
        btnAvanzar.textContent = "AVANZAR";
        btnAvanzar.className = "btn-mini";
        btnAvanzar.dataset.op = "avanzar";
        btnAvanzar.dataset.id = incidencias.indexOf(lista[i]);

        let btnReset = document.createElement("button");
        btnReset.textContent = "RESET";
        btnReset.className = "btn-mini";
        btnReset.dataset.op = "reset";
        btnReset.dataset.id = incidencias.indexOf(lista[i]);

        divBotones.appendChild(btnAvanzar);
        divBotones.appendChild(btnReset);

        div.appendChild(h3);
        div.appendChild(pDescripcion);
        div.appendChild(pAula);
        div.appendChild(pTipo);
        div.appendChild(pEstado);
        div.appendChild(divBotones);

        contenedorIncidencias.appendChild(div);
    }
}


// pintarIncidencias();
// console.log(incidencias.length);

// 5. Crea una función "actualizarResumen()" que:
//    - recorra el array original "incidencias" usando un bucle for
//    - cuente usando contadores:
//        * cuántas están en "abierta"
//        * cuántas están en "en-curso"
//        * cuántas están en "resuelta"
//    - actualice el texto de resumenIncidencias con el formato:
//      "Abiertas: X | En curso: Y | Resueltas: Z"
function actualizarResumen() {
    let nAbiertas = 0;
    let nEnCurso = 0;
    let nResueltas = 0;

    for (let i = 0; i < incidencias.length; i++) {
        if (incidencias[i].estado === "abierta") {
            nAbiertas++;
        }
        else if (incidencias[i].estado === "en-curso") {
            nEnCurso++;
        }
        else {
            nResueltas++;
        }
    }

    resumenIncidencias.textContent = `Abiertas: ${nAbiertas} | En curso: ${nEnCurso} | Resueltas: ${nResueltas}`;
}

// 6. Crea la función "aplicarFiltros()" que:
//    - cree una copia del array incidencias usando un bucle for
//    - obtenga los valores de filtroAula.value y filtroEstado.value
//    - si filtroAula no es "todas", filtra la copia para dejar solo las incidencias de esa aula
//    - si filtroEstado no es "todas", filtra la copia para dejar solo las incidencias en ese estado
//    - usa bucles for para hacer los filtros
//    - llame a pintarIncidencias(listaFiltrada) con la lista filtrada
//    - llame a actualizarResumen()
function aplicarFiltros() {
    let incidenciasFiltradas = [];
    let _filtroAula = filtroAula.value;
    let _filtroEstado = filtroEstado.value;

    for (let i = 0; i < incidencias.length; i++) {
        incidenciasFiltradas.push(incidencias[i]);
        // console.log(i);
    }

    // console.log("Pre Filtros", incidenciasFiltradas);

    if (_filtroAula !== "todas") {
        let indicesABorrar = [];
        for (let i = 0; i < incidenciasFiltradas.length; i++) {
            if (incidenciasFiltradas[i].aula !== _filtroAula) {
                console.log("No coincide aula", i);
                console.log(_filtroAula, incidenciasFiltradas[i].aula);
                indicesABorrar.unshift(i);
            }
        }

        for (let i = 0; i < incidenciasFiltradas.length; i++) {
            incidenciasFiltradas.splice(indicesABorrar[i], 1);
        }
    }

    if (_filtroEstado !== "todas") {
        let indicesABorrar = [];
        for (let i = 0; i < incidenciasFiltradas.length; i++) {
            if (incidenciasFiltradas[i].estado !== _filtroEstado)
                indicesABorrar.unshift(i);
        }

        for (let i = 0; i < incidenciasFiltradas.length; i++) {
            incidenciasFiltradas.splice(indicesABorrar[i], 1);
        }
    }

    console.log("Post filtros", incidenciasFiltradas);

    pintarIncidencias(incidenciasFiltradas);
    actualizarResumen();
}

// 7. Evento click en btnRegistrarIncidencia:
//    - valida que:
//        * descripcion no esté vacía
//        * aula no esté vacía
//    - si hay errores, muestra un alert() con mensaje apropiado y detén con return
//    - si todo es válido:
//        * crea un nuevo objeto Incidencia con los datos
//        * añádelo al array incidencias
//        * limpia los campos del formulario (ponlos en "")
//        * resetea tipoIncidencia a "Hardware"
//        * llama a aplicarFiltros() para actualizar la visualización
btnRegistrarIncidencia.addEventListener("click", function () {
    let descripcion = descripcionIncidencia.value.trim();
    let aula = aulaIncidencia.value.trim();
    let tipo = tipoIncidencia.value;

    if (descripcion === "") {
        alert("Descripcion vacía");
        return;
    }

    if (aula === "") {
        alert("Aula vacía");
        return;
    }

    let incidencia = new Incidencia(descripcion, aula, tipo);
    incidencias.push(incidencia);

    descripcionIncidencia.value = "";
    aulaIncidencia.value = "";
    //Como no hay campo vacío pongo el primero que es Hardware...
    tipoIncidencia.value = "Hardware";

    aplicarFiltros();
});

// 8. Delegación de eventos en contenedorIncidencias:
//    - Añade UN SOLO addEventListener("click", ...) al contenedorIncidencias
//    - Dentro de la función del evento:
//        * usa event.target apropiado para saber qué operación ejecutar
//        * usa event.target apropiado para saber qué incidencia modificar
//        * convierte el index a Number()
//        * si data-op es "avanzar" → llama a incidencias[index].avanzarEstado()
//        * si data-op es "reset" → llama a incidencias[index].resetEstado()
//        * después de cualquier cambio, llama a aplicarFiltros() para actualizar
contenedorIncidencias.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        let index = Number(event.target.dataset.id);
        if (event.target.dataset.op === "avanzar") {
            // console.log(event.target.dataset.id, event.target.dataset.op);
            console.log("Avanzando " + index);
            incidencias[index].avanzarEstado();
            aplicarFiltros();
        }
        if (event.target.dataset.op === "reset") {
            // console.log(event.target.dataset.id, event.target.dataset.op);
            console.log("Reseteando " + index);
            incidencias[index].resetEstado();
            aplicarFiltros();
        }
    }

    // pintarIncidencias();
});

// 9. Eventos de filtros:
//    - filtroAula.addEventListener("change", aplicarFiltros)
//    - filtroEstado.addEventListener("change", aplicarFiltros)
filtroAula.addEventListener("change", aplicarFiltros);
filtroEstado.addEventListener("change", aplicarFiltros);

// 10. Al cargar la página puedes dejar todo vacío o crear
//     1–2 incidencias de ejemplo.
//     Luego llama a aplicarFiltros() y a actualizarResumen().
aplicarFiltros();
actualizarResumen();
// pintarIncidencias();
// actualizarResumen();
// aplicarFiltros();
// pintarIncidencias(incidencias);
// console.log(incidencias);