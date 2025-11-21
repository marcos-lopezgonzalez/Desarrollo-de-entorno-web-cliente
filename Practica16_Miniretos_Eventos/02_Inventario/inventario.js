// EJERCICIO 2 - GESTOR DE PRODUCTOS / INVENTARIO
// Este archivo se debe enlazar en ej2-productos.html al final del body.

// 1. Clase Producto
// Cada producto tendrá: nombre, precio, cantidad
// PISTA: usar constructor(nombre, precio, cantidad)
class Producto {
    // constructor(...) {
    //     this.nombre = ...;
    //     this.precio = ...;
    //     this.cantidad = ...;
    // }
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    // Método opcional para obtener el total del producto (precio * cantidad)
    // obtenerTotal() {
    //     ...
    // }
    obtenerTotal() {
        return (this.precio * this.cantidad).toFixed(2);
    }
}

// 2. Referencias a los elementos del DOM
const formProducto = document.getElementById("formProducto");

const inputNombreProducto = document.getElementById("nombreProducto");
const inputPrecioProducto = document.getElementById("precioProducto");
const inputCantidadProducto = document.getElementById("cantidadProducto");

const errNombreProducto = document.getElementById("errNombreProducto");
const errPrecioProducto = document.getElementById("errPrecioProducto");
const errCantidadProducto = document.getElementById("errCantidadProducto");

const msgOkProducto = document.getElementById("msgOkProducto");

const btnMostrarProductos = document.getElementById("btnMostrarProductos");
const btnCalcularTotal = document.getElementById("btnCalcularTotal");

const tbodyProductos = document.getElementById("tablaProductos");
const valorTotalSpan = document.getElementById("valorTotal");

// 3. Array donde se guardarán los productos
const productos = [];

// 4. Función para limpiar mensajes
function limpiarMensajesProductos() {
    // PISTA: poner todos los .textContent de errores y msgOkProducto a ""
    // errNombreProducto.textContent = "";
    // ...
    errNombreProducto.textContent = "";
    errPrecioProducto.textContent = "";
    errCantidadProducto.textContent = "";

    msgOkProducto.textContent = "";
}

// 5. Manejador del formulario de productos
formProducto.addEventListener("submit", function (event) {
    event.preventDefault();

    limpiarMensajesProductos();

    let valido = true;

    // 5.1. Leer valores del formulario (usa .value y .trim() donde tenga sentido)
    // const nombre = ...
    // const precio = ...
    // const cantidad = ...
    const nombre = inputNombreProducto.value.trim();
    const precio = inputPrecioProducto.value.trim();
    const cantidad = inputCantidadProducto.value.trim();

    // 5.2. Validar que nombre no esté vacío.
    // Si está vacío, mostrar mensaje en errNombreProducto y poner valido = false.
    if (nombre === "") {
        valido = false;
        errNombreProducto.textContent = "Nombre vacío";
    }

    if (precio === "") {
        valido = false;
        errPrecioProducto.textContent = "Precio vacío";
    } else if (isNaN(Number(precio)) || Number(precio) <= 0) {
        valido = false;
        errPrecioProducto.textContent = "Precio no válido"
    }

    if (cantidad === "") {
        valido = false;
        errCantidadProducto.textContent = "Cantidad vacía";
    } else if (isNaN(Number(cantidad)) || Number(cantidad) <= 0) {
        valido = false;
        errCantidadProducto.textContent = "Cantidad no válida";
    }

    // 5.3. Validar precio: debe ser un número > 0
    // PISTA: Number(precio) o parseFloat(precio)

    // 5.4. Validar cantidad: debe ser un número entero >= 1
    // PISTA: parseInt(cantidad)

    // if (!valido) {
    //     return; // salir sin crear el producto
    // }
    if (!valido) {
        return;
    }

    // 5.5. Crear una instancia de Producto con los datos del formulario
    // const producto = new Producto(...);
    const producto = new Producto(nombre, Number(precio), parseInt(cantidad));

    // 5.6. Añadir el producto al array productos
    productos.push(producto);

    // 5.7. Mostrar mensaje de éxito en msgOkProducto
    msgOkProducto.textContent = "Producto añadido";

    // 5.8. Limpiar el formulario (formProducto.reset())
    formProducto.reset();
});

// 6. Función para mostrar los productos en la tabla
function mostrarProductosEnTabla() {
    // 6.1. Vaciar el tbody antes de rellenarlo
    // tbodyProductos.innerHTML = "";
    tbodyProductos.innerHTML = "";

    // 6.2. Recorrer el array productos
    // for (let i = 0; i < productos.length; i++) {
    //     const prod = productos[i];
    //
    //     // Crear fila <tr> y celdas <td>
    //     // nombre, precio, cantidad, totalProducto
    //
    //     // PISTA: el total del producto es precio * cantidad.
    //
    //     // Añadir celdas a la fila
    //     // Añadir fila al tbody
    // }

    for (let i = 0; i < productos.length; i++) {
        let row = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.textContent = productos[i].nombre;
        let tdPrecio = document.createElement("td");
        tdPrecio.textContent = productos[i].precio.toFixed(2);
        let tdCantidad = document.createElement("td");
        tdCantidad.textContent = productos[i].cantidad.toFixed(2);
        let tdTotal = document.createElement("td");
        tdTotal.textContent = productos[i].obtenerTotal();

        row.appendChild(tdNombre);
        row.appendChild(tdPrecio);
        row.appendChild(tdCantidad);
        row.appendChild(tdTotal);
        tbodyProductos.appendChild(row);
    }
}

// 7. Función para calcular el valor total del inventario
function calcularValorTotal() {
    let total = 0;

    // 7.1. Recorrer el array productos y acumular en total
    // PISTA: total += (precio * cantidad) de cada producto
    for (let i = 0; i < productos.length; i++) {
        total += productos[i].obtenerTotal();
    }

    // 7.2. Actualizar el texto de valorTotalSpan
    // Ejemplo: "Valor total: " + total + " €"
    valorTotalSpan.textContent = "Valor total: " + parseFloat(total) + "€";
}

// 8. Eventos para los botones "Mostrar productos" y "Calcular valor total"
btnMostrarProductos.addEventListener("click", function () {
    // Llamar a mostrarProductosEnTabla();
    mostrarProductosEnTabla();
});

btnCalcularTotal.addEventListener("click", function () {
    // Llamar a calcularValorTotal();
    calcularValorTotal();
});