// EJERCICIO 5 - CATÁLOGO INTERACTIVO
// Enlazar al final de ej5-catalogo.html

// Clase Producto: nombre, categoria, precio, stock (true/false)
class Producto {
    // Crea un constructor con esos parámetros
    // Puedes añadir métodos auxiliares si lo ves útil (por ejemplo, para texto de stock)
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}

// Array con algunos productos de ejemplo (instancias de Producto)
// Ejemplo de categorías: "periferico", "almacenamiento", "pantalla", "otro"

const productos = [
    // new Producto("Teclado mecánico", "periferico", 49.99, true),
    // ...
    new Producto("Teclado", "periferico", 49.99, true),
    new Producto("Raton", "periferico", 29.99, true),
    new Producto("Auriculares", "periferico", 69.99, false),

    new Producto("Disco Duro SSD", "almacenamiento", 149.99, false),
    new Producto("Disco Duro HDD", "almacenamiento", 99.99, true),
    new Producto("Pendrive", "almacenamiento", 5.99, false),

    new Producto("Monitor LED", "pantalla", 249.99, true),
    new Producto("Monitor QLED", "pantalla", 199.99, true),
    new Producto("Monitor roto", "pantalla", 0, false),

    new Producto("Salchichas", "otro", 2.99, false),
    new Producto("Tomates", "otro", 3.99, true),
    new Producto("Servilletas", "otro", 1.99, true),
];

// Referencias al DOM: buscador, selectCategoria, checkSoloStock, contenedorTarjetas, mensajeSinResultados
const buscador = document.getElementById("buscadorNombre");
const selectCategoria = document.getElementById("selectCategoria");
const checkSoloStock = document.getElementById("checkSoloStock");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const mensajeSinResultados = document.getElementById("mensajeSinResultados");

// Función que recibe un array de productos y los "pinta" en el contenedor
function renderizarProductos(lista) {
    // Vacía el contenedor de tarjetas
    contenedorTarjetas.innerHTML = "";

    // Si la lista está vacía:
    if (lista.length === 0) {
        mensajeSinResultados.style.display = "block";
        return;
    }
    //  - mostrar el mensajeSinResultados
    //  - y salir de la función

    // Si hay elementos:
    //  - ocultar mensajeSinResultados
    mensajeSinResultados.style.display = "none";
    //  - recorrer la lista y crear un div.tarjeta por cada producto
    for (let i = 0; i < lista.length; i++) {
        let div = document.createElement("div");
        div.className = "div.tarjeta";
        //  - dentro de la tarjeta, crear:
        //      * h3 con el nombre
        let h3 = document.createElement("h3");
        h3.textContent = lista[i].nombre;
        //      * span o p con la categoría (badge-categoria)
        let pCategoria = document.createElement("p");
        pCategoria.className = "badge-categoria";
        pCategoria.textContent = lista[i].categoria;
        //      * p con el precio
        let pPrecio = document.createElement("p");
        pPrecio.textContent = lista[i].precio;
        //      * p indicando si hay stock (stock-ok o stock-no)
        let pStock = document.createElement("p");
        pStock.textContent = lista[i].stock;

        div.appendChild(h3);
        div.appendChild(pCategoria);
        div.appendChild(pPrecio);
        div.appendChild(pStock);

        contenedorTarjetas.appendChild(div);

        //  - añadir listeners de mouseover / mouseout si se quiere cambiar ligeramente el estilo
    }
}

// Función que aplica los filtros actuales al array de productos
function obtenerProductosFiltrados() {
    // Leer el texto del buscador, la categoría seleccionada y el checkbox de stock
    let textoBuscador = buscador.value.trim().toLowerCase();
    // console.log(textoBuscador);
    let categoria = selectCategoria.value;
    let stock = checkSoloStock.checked;
    // console.log(textoBuscador, categoria, stock);

    // Crear un nuevo array filtrado a partir de productos:
    listaFiltrada = [];
    //  - por nombre: incluye si contiene el texto del buscador (toLowerCase)
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.trim().toLowerCase().includes(textoBuscador))
            listaFiltrada.push(productos[i]);
    }
    // console.log(listaFiltrada.length, listaFiltrada);
    //  - por categoría: si selectCategoria no es "todos", filtra por esa categoría
    if (categoria !== "todos") {
        indicesABorrar = [];
        for (let i = 0; i < listaFiltrada.length; i++) {
            if (listaFiltrada[i].categoria !== categoria)
                indicesABorrar.unshift(i);
            // listaFiltrada.splice(i, 1);
        }

        for (let i = 0; i < indicesABorrar.length; i++) {
            listaFiltrada.splice(indicesABorrar[i], 1);
        }
    }
    // console.log(listaFiltrada.length, listaFiltrada);
    //  - por stock: si checkSoloStock está marcado, filtra para que solo aparezcan los que tienen stock true
    listaFiltradaStock = [];
    if (stock) {
        indicesABorrar = [];
        for (let i = 0; i < listaFiltrada.length; i++) {
            if (!listaFiltrada[i].stock) {
                indicesABorrar.unshift(i);
            }
            // listaFiltrada.splice(i, 1);
        }

        for (let i = 0; i < indicesABorrar.length; i++) {
            listaFiltrada.splice(indicesABorrar[i], 1);
        }
    }

    // Devolver el array filtrado
    // console.log(listaFiltrada.length, listaFiltrada);
    return listaFiltrada;
}

// Función principal que actualiza la vista según los filtros
function actualizarVista() {
    // Llama a obtenerProductosFiltrados()
    // Llama a renderizarProductos() con el resultado
    // obtenerProductosFiltrados();
    let listaFiltrada = obtenerProductosFiltrados();
    renderizarProductos(listaFiltrada);
}

// Eventos:
// - input en el buscador (para filtrar en tiempo real)
buscador.addEventListener("input", actualizarVista);
// - change en el selectCategoria
selectCategoria.addEventListener("change", actualizarVista);
// - change en el checkSoloStock
checkSoloStock.addEventListener("change", function () {
    // if (this.checked) {
    //     console.log("checked");
    // } else {
    //     console.log("NO");
    // }
    actualizarVista();
});

actualizarVista();

// En cada evento, llamar a actualizarVista()

// Llamar a actualizarVista() una vez al cargar la página para mostrar el catálogo inicial