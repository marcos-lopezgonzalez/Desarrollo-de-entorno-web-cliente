// EJERCICIO 2 - Gestor de proyectos del ciclo
// Usa este archivo para completar la lógica del ejercicio.

// 1. Crea la clase Proyecto con:
//    - Constructor que reciba: titulo, grupo, modulo, notaPresentacion, notaTecnica
//    - Método media(): debe devolver la media de las dos notas
//    - Método estaAprobado(): debe devolver true si la media es >= 5, false en caso contrario
class Proyecto {
    constructor(titulo, grupo, modulo, notaPresentacion, notaTecnica) {
        this.titulo = titulo;
        this.grupo = grupo;
        this.modulo = modulo;
        this.notaPresentacion = notaPresentacion;
        this.notaTecnica = notaTecnica;
    }

    media() {
        let media = (Number(this.notaPresentacion) + Number(this.notaTecnica)) / 2;
        return media;
    }

    estaAprobado() {
        let media = this.media();
        if (media >= 5)
            return true;
        return false;
    }
}

// 2. Crea un array "proyectos" para guardar todos los proyectos
//    que se vayan creando desde el formulario.
const proyectos = [];

// 3. Captura los elementos del DOM que vas a usar:
//    - Inputs del formulario: tituloProyecto, grupoProyecto, moduloProyecto, notaPresentacion, notaTecnica
//    - Botón: btnAgregarProyecto
//    - Controles de filtrado: filtroModulo, filtroSoloAprobados
//    - Elementos de visualización: contenedorProyectos, resumenProyectos, mensajeVacio
const tituloProyecto = document.getElementById("tituloProyecto");
const grupoProyecto = document.getElementById("grupoProyecto");
const moduloProyecto = document.getElementById("moduloProyecto");
const notaPresentacion = document.getElementById("notaPresentacion");
const notaTecnica = document.getElementById("notaTecnica");

const btnAgregarProyecto = document.getElementById("btnAgregarProyecto");

const filtroModulo = document.getElementById("filtroModulo");
const filtroSoloAprobados = document.getElementById("filtroSoloAprobados");

const contenedorProyectos = document.getElementById("contenedorProyectos");
const resumenProyectos = document.getElementById("resumenProyectos");
const mensajeVacio = document.getElementById("mensajeVacio");

// 4. Crea una función "crearTarjetaProyecto(proyecto)" que:
//    - cree un elemento <article> con clase "tarjeta-proyecto"
//    - dentro, añade:
//        * un <h3> con el título del proyecto
//        * párrafos <p> con clase "proyecto-detalle" para: grupo, módulo y media
//        * un párrafo para el estado (APROBADO/SUSPENSO) con clases "estado-aprobado" o "estado-suspenso"
//    - devuelva el elemento article creado
function crearTarjetaProyecto(proyecto) {
    let article = document.createElement("article");

    let h3 = document.createElement("h3");
    h3.textContent = proyecto.titulo;

    let pGrupo = document.createElement("p");
    pGrupo.textContent = proyecto.grupo;

    let pModulo = document.createElement("p");
    pModulo.textContent = proyecto.modulo;

    let pMedia = document.createElement("p");
    pMedia.textContent = proyecto.media();

    let pAprobado = document.createElement("p");
    if (proyecto.estaAprobado()) {
        console.log("aprobado");
        pAprobado.textContent = "APROBADO";
    } else {
        console.log("suspenso");
        pAprobado.textContent = "SUSPENSO";
    }

    article.appendChild(h3);
    article.appendChild(pGrupo);
    article.appendChild(pModulo);
    article.appendChild(pMedia);
    article.appendChild(pAprobado);

    return article;
}

// 5. Crea una función "pintarProyectos(lista)" que:
//    - vacíe el contenedorProyectos
//    - si la lista está vacía, muestre el mensajeVacio
//    - si no, oculte mensajeVacio y recorra la lista creando una tarjeta por cada proyecto
function pintarProyectos(lista) {
    contenedorProyectos.innerHTML = "";

    if (lista.length === 0) {
        console.log("Lista vacía");
        mensajeVacio.textContent = "NO HAY PROYECTOS";
        return;
    } else {
        mensajeVacio.style.display = "none";
    }

    for (let i = 0; i < lista.length; i++) {
        let tarjeta = crearTarjetaProyecto(lista[i]);
        contenedorProyectos.appendChild(tarjeta);
    }
}

// 6. Crea una función "actualizarResumen()" que:
//    - calcule usando bucles:
//        * total de proyectos
//        * cuántos están aprobados
//        * cuántos están suspensos
//    - actualice el texto de resumenProyectos con esa información.
function actualizarResumen() {
    let totalProyectos = proyectos.length;
    let nAprobados = 0;
    let nSuspensos = 0;

    for (let i = 0; i < proyectos.length; i++) {
        if (proyectos[i].estaAprobado())
            nAprobados++;
        else
            nSuspensos++;
    }

    let texto = `Proyectos totales: ${totalProyectos} | Aprobados: ${nAprobados} | Suspensos: ${nSuspensos}`;
    resumenProyectos.textContent = texto;
}

// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)
// NRE: 2005052

// 7. Crea una función "aplicarFiltros()" que:
//    - cree una copia del array proyectos usando un bucle for
//    - aplique el filtro de módulo si no está en "todos" (usando bucle for)
//    - aplique el filtro de aprobados si el checkbox está marcado (usando bucle for)
//    - llame a pintarProyectos() con la lista filtrada
//    - llame a actualizarResumen()
function aplicarFiltros() {
    // let proyectosFiltrados = proyectos;
    let proyectosFiltrados = [];
    for (let i = 0; i < proyectos.length; i++) {
        proyectosFiltrados.push(proyectos[i]);
    }

    if (filtroModulo.value !== "todos") {
        let indicesABorrar = [];
        for (let i = 0; i < proyectosFiltrados.length; i++) {
            if (proyectosFiltrados[i].modulo !== filtroModulo.value)
                indicesABorrar.unshift(i);
        }

        for (let i = 0; i < indicesABorrar.length; i++) {
            proyectosFiltrados.splice(indicesABorrar[i], 1);
        }
    }

    if (filtroSoloAprobados.checked) {
        let indicesABorrar = [];
        for (let i = 0; i < proyectosFiltrados.length; i++) {
            if (!proyectosFiltrados[i].estaAprobado())
                indicesABorrar.unshift(i);
        }

        for (let i = 0; i < indicesABorrar.length; i++) {
            proyectosFiltrados.splice(indicesABorrar[i], 1);
        }
    }

    return proyectosFiltrados;
}

// 8. En el evento click de btnAgregarProyecto:
//    - valida que:
//        * título, grupo y módulo no estén vacíos
//        * las notas sean números válidos entre 0 y 10 (usa isNaN para comprobar)
//    - si hay errores, muestra un alert() y detén la ejecución con return
//    - si todo es correcto:
//        * crea un nuevo objeto Proyecto y añádelo al array proyectos
//        * limpia los campos del formulario (ponlos en "")
//        * llama a aplicarFiltros() para actualizar la visualización
btnAgregarProyecto.addEventListener("click", function () {
    let titulo = tituloProyecto.value.trim();
    let grupo = grupoProyecto.value.trim();
    let modulo = moduloProyecto.value.trim();
    let notaPre = notaPresentacion.value;
    let notaTec = notaTecnica.value;

    if (titulo === "") {
        alert("Titulo vacío");
        return;
    }

    if (grupo === "") {
        alert("Grupo vacío");
        return;
    }

    if (modulo === "") {
        alert("Modulo vacío");
        return;
    }

    if (isNaN(Number(notaPre)) || notaPre.trim() === "" || Number(notaPre) < 0 || 10 < Number(notaPre)) {
        alert("Nota pre no válida");
        return;
    }

    if (isNaN(Number(notaTec)) || notaTec.trim() === "" || Number(notaTec) < 0 || 10 < Number(notaTec)) {
        alert("Nota tec no válida");
        return;
    }

    let proyecto = new Proyecto(titulo, grupo, modulo, notaPre, notaTec);
    proyectos.push(proyecto);

    //BORRAR CAMPOS
    //BORRAR CAMPOS
    //BORRAR CAMPOS
    tituloProyecto.value = "";
    grupoProyecto.value = "";
    moduloProyecto.value = "";
    notaPresentacion.value = 0;
    notaTecnica.value = 0;

    // pintarProyectos(proyectos);
    // actualizarResumen();

    let listaFiltrada = aplicarFiltros();
    pintarProyectos(listaFiltrada);
    actualizarResumen();
});

// 9. Añade eventos change a filtroModulo y filtroSoloAprobados:
//    - El evento "change" se dispara cuando el usuario modifica el valor de un select o checkbox
//    - En este caso, queremos que cada vez que el usuario cambie el filtro, se actualice la lista
//    - cada vez que cambien, llama a aplicarFiltros()
//    Estructura: elemento.addEventListener("change", function() { ... });
filtroModulo.addEventListener("change", function () {
    let listaFiltrada = aplicarFiltros();
    pintarProyectos(listaFiltrada);
    actualizarResumen();
});

filtroSoloAprobados.addEventListener("change", function () {
    let listaFiltrada = aplicarFiltros();
    pintarProyectos(listaFiltrada);
    actualizarResumen();
});