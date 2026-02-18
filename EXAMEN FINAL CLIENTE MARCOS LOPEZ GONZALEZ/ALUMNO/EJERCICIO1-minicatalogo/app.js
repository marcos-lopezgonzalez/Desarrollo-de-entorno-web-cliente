"use strict";

/*
  EXAMEN FINAL DEC – EJERCICIO 1 (5 puntos)
  MiniCatálogo Fitness
*/

// =====================================
// Estado
// =====================================
let productos = [];
let textoBusqueda = "";

const LS_FAVORITOS = "dec_favoritos";

// =====================================
// Selectores
// =====================================
const elBuscador = document.getElementById("buscador");
const elLista = document.getElementById("listaProductos");

// =====================================
// Cargar datos
// =====================================
// IMPORTANTE:
// El archivo ./data/productos.json NO contiene un array directamente.
// La estructura es:
// {
//   "productos": [ ... ]
// }
//
// Por tanto, tras convertir la respuesta a JSON,
// debes acceder al array usando: data.productos
async function cargarProductos() {
  /*
    IMPORTANTE (simulación de llamada a API real):

    - Debes comprobar si la respuesta del fetch es correcta (response.ok)
    - Si ocurre algún error, debes lanzar una excepción
      para que el try/catch de main() pueda gestionarlo
    - Piensa esta función como si llamaras a una API externa
  */
  // TODO:
  // - realizar el fetch al archivo ./data/productos.json
  // - comprobar que la respuesta es correcta
  // - convertir la respuesta a JSON
  // - devolver el array de productos (data.productos)

  try {
    const respuesta = await fetch("./data/productos.json");

    if (!respuesta.ok) {
      throw new Error("Error al cargar el archivo json");
    }

    const data = await respuesta.json();

    const dataProductos = data.productos;
    console.log("Productos cargados", dataProductos);
    return dataProductos;
  } catch (error) {
    console.error("Error: " + error);
  }
}
// =====================================
// LocalStorage
// =====================================
function obtenerFavoritos() {
  // TODO:
  // - devolver el array de favoritos desde LocalStorage
  return JSON.parse(localStorage.getItem("favoritos")) ?? [];
}

function guardarFavoritos(favoritosIds) {
  // TODO:
  // - guardar el array de favoritos en LocalStorage
  localStorage.setItem("favoritos", JSON.stringify(favoritosIds));
}

function alternarFavorito(idProducto) {
  // TODO:
  // - añadir o quitar el id del array de favoritos
  // - guardar el resultado
  let listaFavoritos = obtenerFavoritos();
  const esFavorito = listaFavoritos.some((idFavorito) => { return idFavorito === idProducto; });

  let listaFavoritosActualizada = [];
  if (esFavorito) {
    listaFavoritosActualizada = listaFavoritos.filter((idFavorito) => { return idFavorito !== idProducto; });
    console.log("QUITANDO de favoritos id: " + idProducto);
  } else {
    listaFavoritosActualizada = [...listaFavoritos, idProducto];
    console.log("AÑADIENDO a favoritos id: " + idProducto);
  }

  guardarFavoritos(listaFavoritosActualizada);
  actualizarVista();
}

// =====================================
// Búsqueda
// =====================================
function aplicarBusqueda(lista) {
  // TODO:
  // - devolver la lista filtrada según el texto de búsqueda
  return lista.filter((producto) => { return producto.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()); });
}

// =====================================
// UI
// =====================================
function crearTarjetaProducto(producto, favoritosIds) {
  /*
    HTML base proporcionado.

    TODO (OBLIGATORIO):
    - Rellena los datos del producto usando el objeto "producto"
    - Debes mostrar:
      * nombre
      * precio
      * id del producto en el botón
    - Usa el código JavaScript que corresponda
    - NO modificar la estructura ni las clases Tailwind
  */

  // TODO:
  // - comprobar si el producto es favorito
  // - decidir el texto del botón

  // const textoBoton = "☆ Añadir a favoritos"; // TODO: cambiar si procede
  const esFavorito = favoritosIds.some((idFavorito) => { return idFavorito === producto.id; });
  let textoBoton = "";
  if (esFavorito) {
    textoBoton = "Es favorito";
  } else {
    textoBoton = "No es favorito";
  }

  return `
    <article class="rounded-xl border bg-white p-4 shadow-sm">
      <h3 class="text-lg font-semibold text-slate-900">
        <!-- TODO: nombre del producto -->
        ${producto.nombre}
      </h3>

      <p class="mt-2 text-lg font-bold text-slate-800">
        <!-- TODO: precio del producto --> €
        ${producto.precio}
      </p>

      <button
        class="js-fav mt-3 rounded-lg border px-3 py-1 text-sm hover:bg-slate-100"
        value='${producto.id}'
      >
        ${textoBoton}
      </button>
    </article>
  `;
}

function pintarLista(listaVisible, favoritosIds) {
  // TODO:
  // - pintar en pantalla los productos recibidos
  // - tener en cuenta el caso en el que no haya resultados (Mostrar un mensaje de no hay resultados)
  let listaHTML = "";
  if (listaVisible.length === 0) {
    listaHTML = "<p>No se encuentran productos que coincidan con los parámetros de búsqueda</p>";
  } else {
    listaHTML = listaVisible.map((producto) => { return crearTarjetaProducto(producto, favoritosIds); }).join("");
  }
  elLista.innerHTML = listaHTML;
}

// =====================================
// Eventos
// =====================================
function configurarEventos() {
  elBuscador.addEventListener("input", function () {
    textoBusqueda = elBuscador.value;
    actualizarVista();
  });

  // Delegación de eventos para el botón de favoritos
  elLista.addEventListener("click", function (event) {
    // TODO:
    // - comprobar que el click se ha hecho sobre un botón
    // - comprobar que ese botón corresponde a favoritos
    // - obtener el id desde el value
    // - alternar favorito
    // - actualizar vista
    if (event.target.classList.contains("js-fav")) {
      console.log("cambiando favorito id " + event.target.value);
      alternarFavorito(event.target.value);
    }
  });
}

// =====================================
// Flujo principal
// (código proporcionado - NO modificar)
// =====================================
function actualizarVista() {
  const favoritos = obtenerFavoritos();
  const listaVisible = aplicarBusqueda(productos);
  console.log("Texto búsqueda", textoBusqueda);
  console.log("Lista filtrada", listaVisible);

  pintarLista(listaVisible, favoritos);
}

// -----------------------------
// Función de arranque
// (código proporcionado - NO modificar)
// -----------------------------
async function main() {
  try {
    productos = await cargarProductos();
    console.log("Variable productos", productos);
    configurarEventos();
    actualizarVista();
  } catch (error) {
    console.log("Error al cargar productos: " + error);
  }
}

main();
