// EJERCICIO 3 - PANEL DE INCIDENCIAS TÉCNICAS
// Enlazar este archivo al final de ej3-incidencias.html

// 1. Referencias principales del DOM
// Sugerencia: const formIncidencia = document.getElementById("#formIncidencia");
const formIncidencia = document.getElementById("formIncidencia");

const tituloIncidencia = document.getElementById("tituloIncidencia");
const descIncidencia = document.getElementById("descIncidencia");

const errTituloIncidencia = document.getElementById("errTituloIncidencia");
const errDescIncidencia = document.getElementById("errDescIncidencia");
const msgOkIncidencia = document.getElementById("msgOkIncidencia");

const contadorAbiertas = document.getElementById("contadorAbiertas");
const listaIncidencias = document.getElementById("listaIncidencias");

// 2. Estructura de datos para guardar las incidencias
// Sugerencia: usa un array de objetos.
// Cada objeto puede tener al menos: id, titulo, descripcion, estado.
let incidencias = [];
let siguienteId = 1; // puedes usarlo para asignar identificadores únicos

// 3. Función para limpiar mensajes de error y de éxito
function limpiarMensajes() {
    // Deja vacíos los textos de error y el mensaje OK
    // ...
    errTituloIncidencia.textContent = "";
    errDescIncidencia.textContent = "";
    msgOkIncidencia.textContent = "";
}

// 4. Función para validar el formulario
// Devuelve true/false según si los datos son válidos
function validarFormulario(titulo, descripcion) {
    let esValido = true;
    // Borra mensajes anteriores
    limpiarMensajes();

    // Comprueba que el título no esté vacío
    if (titulo.trim() === "") {
        esValido = false;
        errTituloIncidencia.textContent = "Titulo vacío";
    }
    // Comprueba que la descripción no esté vacía
    if (descripcion.trim() === "") {
        esValido = false;
        errDescIncidencia.textContent = "Descripción vacía";
    }
    // Muestra mensajes en errTitulo y errDescripcion si hace falta
    // Si hay errores, esValido = false;

    return esValido;
}

// 5. Función para crear una incidencia (objeto) y guardarla en el array
function crearIncidencia(titulo, descripcion) {
    // Crea un objeto con las propiedades necesarias
    // Usa siguienteId para el id
    // Asigna el estado inicial "abierta"
    // Guarda la incidencia en el array incidencias
    // Incrementa siguienteId
    let incidencia = {
        id: siguienteId,
        titulo: titulo,
        descripcion: descripcion,
        estado: "abierta"
    }
    incidencias.push(incidencia);
    siguienteId++;
}

// 6. Función para actualizar el contador de incidencias abiertas
function actualizarContador() {
    // Recorre el array incidencias
    // Cuenta cuántas están con estado "abierta"
    // Actualiza el texto de contadorAbiertas
    let incAbiertas = 0;
    for (let i = 0; i < incidencias.length; i++) {
        if (incidencias[i].estado === "abierta")
            incAbiertas++;
    }

    contadorAbiertas.textContent = "Incidencias abiertas: " + incAbiertas;
}

// 7. Función para "pintar" todas las incidencias en la lista <ul>
function renderizarIncidencias() {
    // Borra el contenido actual de listaIncidencias
    listaIncidencias.innerHTML = "";

    // Recorre el array incidencias
    // Por cada incidencia:
    //  - crea un <li> con clase "item-incidencia"
    //  - dentro, crea elementos para el título, la descripción y el estado
    //  - añade dos botones:
    //      * "Marcar como resuelta" (clase btn-peque btn-resuelta)
    //      * "Eliminar" (clase btn-peque btn-eliminar)
    //  - usa data-atributos (por ejemplo data-id) para guardar el id de la incidencia
    //  - añade el <li> a la lista
    for (let i = 0; i < incidencias.length; i++) {
        let li = document.createElement("li");
        li.dataset.id = incidencias[i].id;
        let titulo = document.createElement("p");
        titulo.classList = "item-incidencia";
        titulo.textContent = incidencias[i].titulo;
        let descripcion = document.createElement("p");
        descripcion.classList = "item-incidencia";
        descripcion.textContent = incidencias[i].descripcion;
        let estado = document.createElement("p");
        estado.classList = "item-incidencia";
        estado.textContent = incidencias[i].estado;

        let resolver = document.createElement("button");
        resolver.classList = "btn-peque btn-resuelta";
        resolver.textContent = "RESOLVER";
        let eliminar = document.createElement("button");
        eliminar.classList = "btn-pque btn-eliminar";
        eliminar.textContent = "ELIMINAR";

        li.appendChild(titulo);
        li.appendChild(descripcion);
        li.appendChild(estado);
        li.appendChild(resolver);
        li.appendChild(eliminar);
        listaIncidencias.appendChild(li);

    }
}

// 8. Manejador del envío del formulario (crear incidencia)
formIncidencia.addEventListener("submit", function (event) {
    event.preventDefault();

    const titulo = tituloIncidencia.value.trim();
    const descripcion = descIncidencia.value.trim();

    // Valida los datos. Si no son válidos, termina aquí.
    // if (!validarFormulario(titulo, descripcion)) {
    //     return;
    // }

    if (!validarFormulario(titulo, descripcion)) {
        return;
    }

    // Crea la incidencia y guárdala
    // crearIncidencia(titulo, descripcion);
    crearIncidencia(titulo, descripcion);

    // Limpia el formulario y muestra un mensaje de éxito
    // formIncidencia.reset();
    // msgOkIncidencia.textContent = "Incidencia creada correctamente.";
    formIncidencia.reset();
    msgOkIncidencia.textContent = "Incidencia creada correctamente.";

    // Vuelve a pintar la lista y actualiza el contador
    // renderizarIncidencias();
    // actualizarContador();
    renderizarIncidencias();
    actualizarContador();
});

// 9. Delegación de eventos en la lista de incidencias
// Aquí se gestionan clicks en "Marcar como resuelta" y "Eliminar"
listaIncidencias.addEventListener("click", function (event) {
    const elemento = event.target;

    // Comprueba si se ha pulsado un botón de resuelta o de eliminar
    // Usa clases (classList.contains) o data-atributos para decidir qué hacer

    // 1) Obtener el id de la incidencia desde el elemento pulsado (por ejemplo, del li padre)
    // 2) Si es botón "resuelta": cambia el estado de la incidencia en el array
    // 3) Si es botón "eliminar": elimina la incidencia del array
    // 4) Llama a renderizarIncidencias() y actualizarContador() después de cambiar datos

    // Si lo que se ha pulsado NO es un botón, no hacemos nada
    if (!elemento.classList.contains("btn-resuelta") &&
        !elemento.classList.contains("btn-eliminar")) {
        return;
    }

    // 1) Obtener el id de la incidencia desde el elemento pulsado (li padre)
    const li = elemento.closest("li");
    const id = Number(li.dataset.id);

    // Buscar la incidencia dentro del array
    const i = incidencias.findIndex(incidencia => incidencia.id === id);
    // if (i === -1) return;

    // 2) Si es botón "resuelta": cambia el estado
    if (elemento.classList.contains("btn-resuelta")) {
        incidencias[i].estado = "resuelta";
    }

    // 3) Si es botón "eliminar": elimina la incidencia
    if (elemento.classList.contains("btn-eliminar")) {
        incidencias.splice(i, 1);
    }

    // 4) Volver a pintar y actualizar contador
    renderizarIncidencias();
    actualizarContador();
});