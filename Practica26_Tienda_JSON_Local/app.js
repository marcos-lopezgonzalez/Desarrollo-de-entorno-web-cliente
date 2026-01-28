"use strict";

// =====================================
// Estado (en memoria)
// =====================================
let productos = []; // productos cargados del JSON
let textoBusqueda = "";

// =====================================
// 1) Cargar datos (fetch + async/await)
// =====================================
async function cargarProductos() {
    // TODO:
    // 1) Haz fetch del archivo local
    //    PISTA: "./data/productos.json"
    // 2) Convierte la respuesta a JSON
    // 3) Devuelve el array de productos (data.productos)
    try {
        const respuesta = await fetch("./data/productos.json");

        if (!respuesta.ok) {
            throw new Error("Error al cargar películas");
        }

        const data = await respuesta.json();
        console.log("Data", data);
        return data.productos;
    } catch (error) {
        console.error("Error", error);
        throw new Error(error);
    }
}

// =====================================
// 2) Filtrar productos (filter)
// =====================================
function filtrarProductos(lista, texto) {
    // TODO:
    // - Si texto está vacío -> devuelve la lista completa
    // - Si no:
    //   devuelve solo los productos cuyo nombre incluya el texto
    //
    // PISTA CLAVE:
    // nombre.toLowerCase().includes(texto.toLowerCase())

    if (texto.trim() === "") {
        return productos;
    } else {
        let listaFiltrada = lista.filter((producto) => { return producto.nombre.toLowerCase().includes(texto.toLowerCase()); });
        return listaFiltrada;
    }
}

// =====================================
// 3) Calcular total (reduce)
// =====================================
function calcularTotal(listaFiltrada) {
    // TODO:
    // - Usa reduce para sumar los precios
    // - El acumulador debe empezar en 0
    let totalPrecio = listaFiltrada.reduce((acc, producto) => { return acc + producto.precio; }, 0);
    return totalPrecio.toFixed(2);
}

// =====================================
// 4) Pintar en pantalla
// =====================================
function pintar(listaFiltrada, total) {
    const contLista = document.querySelector("#lista");
    const contTotal = document.querySelector("#total");

    // TODO:
    // - Construir el HTML de los productos
    // - Ejemplo de estructura:
    //
    // <div class="item">
    //   <span class="name">Nombre</span>
    //   <span class="price">Precio €</span>
    // </div>
    //
    // - Pintar el total con 2 decimales
    //   PISTA: total.toFixed(2)

    let productosHTML = listaFiltrada.map((producto) => {
        return `<div class="item">
                    <span class="name">${producto.nombre}</span>
                    <span class="price">${producto.precio} €</span>
                </div>`;
    }).join("");

    contLista.innerHTML = productosHTML;
    contTotal.innerHTML = listaFiltrada.length;
}

// =====================================
// Eventos
// =====================================
function configurarEventos() {
    const input = document.querySelector("#busqueda");

    input.addEventListener("input", function (e) {
        textoBusqueda = e.target.value;

        // TODO:
        // 1) Filtrar productos usando filtrarProductos(productos, textoBusqueda)
        // 2) Calcular total con calcularTotal(listaFiltrada)
        // 3) Llamar a pintar(listaFiltrada, total)
        let listaFiltrada = filtrarProductos(productos, textoBusqueda);
        console.log("Lista a pintar", listaFiltrada);
        let total = calcularTotal(listaFiltrada);
        console.log("Total precio", total);
        pintar(listaFiltrada, total);
    });
}

// =====================================
// Inicio del programa (ARRANQUE LINEAL)
// =====================================

// 1) Cargar productos desde el JSON local
cargarProductos().then(function (lista) {
    // Guardamos los productos en memoria
    productos = lista;

    // 2) Estado inicial (sin filtro)
    const listaFiltrada = filtrarProductos(productos, "");
    const total = calcularTotal(listaFiltrada);

    // 3) Pintado inicial
    pintar(listaFiltrada, total);

    // 4) Activar eventos
    configurarEventos();
});
