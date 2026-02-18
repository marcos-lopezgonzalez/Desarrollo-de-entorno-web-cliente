"use strict";

/*
  EXAMEN FINAL DEC – EJERCICIO 2 (5 puntos)
  Gestor de pedidos (métodos de array)
*/

// =====================================
// Estado
// =====================================
let productos = [];
let pedidos = [];

let textoBusqueda = "";
let soloGrandes = false;

// =====================================
// Selectores
// =====================================
const elBuscador = document.getElementById("buscador");
const elSoloGrandes = document.getElementById("soloGrandes");
const elLista = document.getElementById("listaPedidos");

const elKpiPedidos = document.getElementById("kpiPedidos");
const elKpiTotal = document.getElementById("kpiTotal");
const elKpiMedia = document.getElementById("kpiMedia");
const elKpiMax = document.getElementById("kpiMax");

// =====================================
// Cargar datos
// =====================================

// IMPORTANTE:
// El archivo ./data/pedidos.json tiene esta estructura:
// { "productos": [...], "pedidos": [...] }
//
// Por tanto, tras convertir la respuesta a JSON,
// debes acceder a data.productos y data.pedidos.
async function cargarDatos() {
  /*
    Esta función simula una llamada a una API real.

    Debe:
    - obtener los datos del archivo local
    - comprobar que la respuesta es correcta
    - devolver los datos necesarios para la aplicación

    Si ocurre un error, debe propagarse para que main() lo gestione.
  */

  try {
    const respuesta = await fetch("./data/pedidos.json");

    if (!respuesta.ok) {
      throw new Error("Error al cargar datos del archivo json");
    }

    const data = await respuesta.json();
    console.log("Data", data);
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}

// =====================================
// Cálculos
// =====================================

function calcularTotalPedido(pedido, listaProductos) {
  /*
    Calcula el importe total de un pedido.

    Para ello debes:
    - recorrer las líneas del pedido
    - obtener la información de cada producto
    - sumar el coste de cada línea

    Devuelve un número.
  */

  // console.log("Pedido ", pedido);
  // console.log("Productos ", listaProductos);
  let sumaPedido = 0;
  for (let i = 0; i < pedido.lineas.length; i++) {
    // console.log("Buscando producto", pedido.lineas[i].productoId);
    let productoBuscado = listaProductos.find((producto) => { return producto.id === pedido.lineas[i].productoId; });
    // console.log(productoBuscado);
    let sumaProducto = productoBuscado.precio * pedido.lineas[i].cantidad;
    sumaPedido += sumaProducto;
  }
  console.log("Pedido: " + pedido.id + " | " + "Suma total pedido: " + sumaPedido);
  return sumaPedido;
}

function prepararPedidosConTotal(listaPedidos, listaProductos) {
  /*
    Genera una nueva lista de pedidos preparada para la interfaz.

    Cada pedido debe incluir su importe total calculado.
  */
  // let sumaPedido = calcularTotalPedido(listaPedidos[0], listaProductos);
  let listaPedidosConTotal = listaPedidos;

  for (let i = 0; i < listaPedidos.length; i++) {
    let sumaPedido = calcularTotalPedido(listaPedidos[i], listaProductos);
    listaPedidosConTotal[i].total = sumaPedido;
  }

  console.log("Lista pedidos normal", listaPedidos);
  console.log("Lista pedidos con total ", listaPedidosConTotal);

  return listaPedidosConTotal;
}

function aplicarFiltros(listaPedidos) {
  let listaFiltrada = [];
  /*
    Aplica los filtros definidos por el usuario:

    - texto de búsqueda por cliente
    - opción de mostrar solo pedidos grandes

    Devuelve únicamente los pedidos que cumplan las condiciones.
  */
  console.log("Filtrando pedido con texto: " + textoBusqueda);
  listaFiltrada = listaPedidos.filter((pedido) => { return pedido.cliente.toLowerCase().includes(textoBusqueda.toLowerCase()); });

  if (soloGrandes) {
    console.log("Actualizando solo grandes");
    listaFiltrada = listaPedidos.filter((pedido) => { return pedido.total >= 50; });
  }
  return listaFiltrada;
}

function calcularResumen(listaPedidosFiltrados) {
  /*
    Calcula los datos de resumen a partir de los pedidos visibles.

    El resumen debe permitir mostrar:
    - número de pedidos
    - importe total
    - pedido de mayor importe
    - importe medio

    Devuelve un único objeto con estos valores.
  */
  console.log("Calculando resumen");
  let nPedidos = listaPedidosFiltrados.length;
  let importeTotal = listaPedidosFiltrados.reduce((acc, pedido) => { return acc + pedido.total; }, 0);
  importeTotal = importeTotal.toFixed(2);

  let productosOrdenadosPrecio = listaPedidosFiltrados.sort((a, b) => { return a.total - b.total; });
  console.log("Productos ordenados precio", productosOrdenadosPrecio);

  let pedidoMayorImporte = productosOrdenadosPrecio[listaPedidosFiltrados.length - 1].total;

  let importeMedio = importeTotal / listaPedidosFiltrados.length;
  importeMedio = importeMedio.toFixed(2);

  let resumen = {
    "nPedidos": nPedidos,
    "importeTotal": importeTotal + "€",
    "pedidoMayorImporte": pedidoMayorImporte + "€",
    "importeMedio": importeMedio + "€"
  };

  console.log("Resumen", resumen);

  return resumen;
}

// =====================================
// UI
// =====================================

function crearTarjetaPedido(pedido) {
  /*
    HTML base proporcionado.

    Rellena los campos necesarios usando la información
    contenida en el objeto pedido.

    No modifiques la estructura ni las clases Tailwind.
  */

  return `
    <article class="rounded-xl border bg-white p-4 shadow-sm">
      <p class="text-xs text-slate-500">Pedido</p>
      <h3 class="text-lg font-semibold text-slate-900">
        <!-- TODO: id del pedido -->
        ${pedido.id}
      </h3>

      <p class="mt-2 text-sm text-slate-700">
        <span class="font-medium">Cliente:</span>
        <!-- TODO: cliente -->
        ${pedido.cliente}
      </p>

      <p class="mt-1 text-sm text-slate-700">
        <span class="font-medium">Fecha:</span>
        <!-- TODO: fecha -->
        ${pedido.fecha}
      </p>

      <p class="mt-3 text-lg font-bold text-slate-800">
        <!-- TODO: total --> €
        ${pedido.total}
      </p>
    </article>
  `;
}

function pintarLista(listaPedidosFiltrados) {
  /*
    Pinta la lista de pedidos visibles.

    - Si no hay resultados, muestra un mensaje.
    - Si hay resultados, muestra tarjetas.
  */

  let listaPedidosHTML = "";
  if (listaPedidosFiltrados.length === 0) {
    listaPedidosHTML = "<p>No existen pedidos que coincidan con los parametros de búsqueda</p>";
  } else {
    listaPedidosHTML = listaPedidosFiltrados.map((pedido) => { return crearTarjetaPedido(pedido); }).join("");
  }
  elLista.innerHTML = listaPedidosHTML;
}

function pintarResumen(resumen) {
  /*
    Muestra el resumen en los cuatro KPI:

    - pedidos visibles
    - total ventas
    - ticket medio
    - pedido más caro
  */
  elKpiPedidos.textContent = resumen.nPedidos;
  elKpiTotal.textContent = resumen.importeTotal;
  elKpiMedia.textContent = resumen.pedidoMayorImporte;
  elKpiMax.textContent = resumen.importeMedio;
}

// =====================================
// Flujo principal (NO modificar)
// =====================================

// (código proporcionado)
function actualizarVista() {
  const pedidosConTotal = prepararPedidosConTotal(pedidos, productos);
  const pedidosFiltrados = aplicarFiltros(pedidosConTotal);

  pintarLista(pedidosFiltrados);

  const resumen = calcularResumen(pedidosFiltrados);
  pintarResumen(resumen);
}

// =====================================
// Eventos
// =====================================

function configurarEventos() {
  elBuscador.addEventListener("input", function () {
    textoBusqueda = elBuscador.value;
    actualizarVista();
  });

  /*
    EVENTO CHECKBOX "SOLO PEDIDOS GRANDES"

    Debes gestionar el cambio de este checkbox.

    Al cambiar su estado:
    - se debe actualizar la variable que controla este filtro
    - se debe volver a calcular y mostrar la información en pantalla

    El comportamiento debe ser similar al del buscador.
  */

  elSoloGrandes.addEventListener("change", function () {
    // TODO: completar
    soloGrandes = elSoloGrandes.checked;
    console.log("Solo grandes", soloGrandes);
    actualizarVista();
  });
}

// -----------------------------
// Función de arranque (NO modificar)
// -----------------------------
async function main() {
  try {
    const data = await cargarDatos();
    productos = data.productos;
    pedidos = data.pedidos;

    console.log("Productos", productos);
    console.log("Pedidos", pedidos);

    configurarEventos();
    actualizarVista();
  } catch (error) {
    console.error("Error al cargar los datos del ejercicio:", error);
  }
}

main();
