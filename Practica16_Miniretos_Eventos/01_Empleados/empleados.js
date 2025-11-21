// EJERCICIO 1 - GESTOR DE EMPLEADOS
// Este archivo se debe enlazar en ej1-empleados.html al final del body.

// 1. Captura las referencias a los elementos del DOM
// const formEmpleado = document.getElementById("formEmpleado");
const formEmpleado = document.getElementById("formEmpleado");
const inputNombre = document.getElementById("nombre");
const inputPuesto = document.getElementById("puesto");
const inputSalario = document.getElementById("salario");
const errNombre = document.getElementById("errNombre");
const errPuesto = document.getElementById("errPuesto");
const errSalario = document.getElementById("errSalario");
const msgOk = document.getElementById("msgOk");


// 2. Array donde se guardarán los empleados
// Cada empleado puede ser un objeto con: nombre, puesto, salario
const empleados = [];

// 3. Función opcional para limpiar mensajes de error y OK
function limpiarMensajes() {
    // PISTA: deja los .textContent de los errores y del mensaje OK en cadena vacía
    // errNombre.textContent = "";
    // ...
    msgOk.textContent = "";
    errNombre.textContent = "";
    errPuesto.textContent = "";
    errSalario.textContent = "";
}

// 4. Manejador del envío del formulario
formEmpleado.addEventListener("submit", function (event) {
    event.preventDefault(); // evita que se recargue la página

    limpiarMensajes();

    // PISTA: crea una variable valido = true y cámbiala a false cuando haya errores
    let valido = true;

    // 4.1. Leer los valores de los inputs (usa .value y .trim())
    // const nombre = ...
    // const puesto = ...
    // const salario = ...
    const nombre = inputNombre.value.trim();
    const puesto = inputPuesto.value.trim();
    const salario = inputSalario.value.trim();
    console.log(nombre, puesto, salario);

    // 4.2. Comprobar que nombre y puesto no están vacíos
    // Si están vacíos, muestra un mensaje en el <p> de error correspondiente
    // y marca valido = false

    if (nombre === "") {
        valido = false;
        errNombre.textContent = "Nombre vacío";
    }

    if (puesto === "") {
        valido = false;
        errPuesto.textContent = "Puesto vacío";
    }

    // 4.3. Comprobar que salario tiene un número correcto (> 0)
    // PISTA: Number(salario) o parseFloat(salario)
    if (salario === "") {
        valido = false;
        errSalario.textContent = "Salario vacío";
    } else if (isNaN(salario) || salario <= 0) {
        valido = false;
        errSalario.textContent = "Salario no válido";
    }

    // 4.4. Si NO es válido, termina la función aquí (return;)
    // if (!valido) {
    //     return;
    // }
    if (!valido) {
        return;
    }

    // 4.5. Crear el objeto empleado con las propiedades necesarias
    // const empleado = {
    //     nombre: ...,
    //     puesto: ...,
    //     salario: ...
    // };
    const empleado = {
        nombre: nombre,
        puesto: puesto,
        salario: salario
    }

    // 4.6. Añadir el empleado al array empleados (método .push)
    empleados.push(empleado);

    // 4.7. Mostrar un mensaje de éxito en msgOk (por ejemplo: "Empleado agregado correctamente")
    // msgOk.textContent = "...";
    msgOk.textContent = "Empleado añadido";

    // 4.8. Limpiar el formulario (puedes usar formEmpleado.reset())
    formEmpleado.reset();
});

// 5. Función para actualizar la tabla de empleados en el DOM
function mostrarEmpleadosEnTabla() {
    // 5.1. Vaciar el cuerpo de la tabla antes de volver a rellenarlo
    // PISTA: tbodyEmpleados.innerHTML = "";
    let tablaEmpleados = document.getElementById("tablaEmpleados");
    let totalEmpleados = document.getElementById("totalEmpleados");

    tablaEmpleados.innerHTML = "";

    // 5.2. Recorrer el array empleados (for clásico o for...of)
    // por cada empleado:
    //  - crear una fila <tr>
    //  - crear tres celdas <td> (nombre, puesto, salario)
    //  - añadir las celdas a la fila
    //  - añadir la fila al tbody
    for (let i = 0; i < empleados.length; i++) {
        let row = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.textContent = empleados[i].nombre;
        let tdPuesto = document.createElement("td");
        tdPuesto.textContent = empleados[i].puesto;
        let tdSalario = document.createElement("td");
        tdSalario.textContent = empleados[i].salario;
        row.appendChild(tdNombre);
        row.appendChild(tdPuesto);
        row.appendChild(tdSalario);
        tablaEmpleados.appendChild(row);
    }

    // 5.3. Actualizar el texto de totalEmpleadosSpan
    // PISTA: "Total empleados: " + empleados.length
    totalEmpleados.textContent = "Total de empleados: " + empleados.length;
}

// 6. Evento del botón "Mostrar empleados"
btnMostrar.addEventListener("click", function () {
    // Llama a la función que se encarga de pintar la tabla
    // mostrarEmpleadosEnTabla();
    mostrarEmpleadosEnTabla();
});