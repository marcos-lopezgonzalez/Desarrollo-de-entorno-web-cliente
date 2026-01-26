// EJERCICIO: Carrito de la compra con LocalStorage (versión alumno)
// ------------------------------------------------------------
// OBJETIVO REAL:
// - Mostrar una lista de productos
// - Permitir añadir productos al carrito
// - Permitir aumentar/disminuir cantidades y eliminar
// - Persistir el carrito en localStorage para que NO se pierda al recargar
//
// REGLAS:
// - No modifiques index.html
// - Usa let/const
// - localStorage solo guarda STRINGS -> usa JSON.stringify / JSON.parse
//
// CLAVE de localStorage a usar:
const CLAVE_CARRITO = "carrito";

// 1) Datos de productos (ya preparados)
const productos = [
  { id: "p1", nombre: "Ratón inalámbrico", precio: 14.99 },
  { id: "p2", nombre: "Teclado", precio: 19.99 },
  { id: "p3", nombre: "USB 64GB", precio: 9.5 },
  { id: "p4", nombre: "Auriculares", precio: 24.0 },
];

// 2) Estado: carrito (array de items)
// Estructura recomendada de cada item:
// { id: "p1", nombre: "...", precio: 14.99, cantidad: 1 }

// 4) Persistencia
// TODO: Implementa guardarCarrito() -> setItem(CLAVE_CARRITO, JSON.stringify(carrito))
const guardarCarrito = (carritoActualizado) => {
  // ...
  localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
};

const cargarCarrito = () => {
  return JSON.parse(localStorage.getItem("carrito")) ?? [];
}

// TODO: Carga el carrito desde localStorage con un valor por defecto []
let carrito = cargarCarrito();

// 3) Referencias al DOM (ya existen en index.html)
// TODO: Obtén estos elementos con getElementById:
const contenedorProductos = document.getElementById("productos"); // "productos"
const carritoLista = document.getElementById("carritoLista"); // "carritoLista"
const totalEl = document.getElementById("total"); // "total"
const contadorEl = document.getElementById("contador"); // "contador"
const carritoVacio = document.getElementById("carritoVacio"); // "carritoVacio"
const vaciarBtn = document.getElementById("vaciarBtn"); // "vaciarBtn"

// 5) Render productos
// - Debe crear un bloque por producto con botón "Añadir"
// - El botón llamará a una función: agregarAlCarrito(idProducto)
const renderProductos = () => {
  // TODO: Limpia contenedorProductos.innerHTML
  // TODO: Recorre productos y crea el HTML mínimo (nombre, precio, botón)
  // PISTA: usa document.createElement y appendChild (o innerHTML si lo prefieres, pero sin liarte)
  contenedorProductos.innerHTML = "";
  for (let i = 0; i < productos.length; i++) {
    // const productoHTML = `<div style="border:1px; border-style:solid" data-id=${productos[i].id}>
    //                         <h2>
    //                         ${productos[i].nombre}
    //                         </h2>
    //                         <h3>
    //                         ${productos[i].precio}€
    //                         </h3>
    //                       </div>`
    // contenedorProductos.innerHTML += productoHTML;
    const div = document.createElement("div");
    const nombre = document.createElement("h1");
    const precio = document.createElement("h2");
    const botonAgregar = document.createElement("button");

    nombre.textContent = productos[i].nombre;
    precio.textContent = productos[i].precio;
    botonAgregar.textContent = "Agregar producto";
    botonAgregar.addEventListener("click", function () {
      agregarAlCarrito(productos[i].id);
    });

    div.appendChild(nombre);
    div.appendChild(precio);
    div.appendChild(botonAgregar);
    contenedorProductos.appendChild(div);
  }
};

// 6) Lógica: agregar al carrito
// Comportamiento esperado:
// - Si el producto NO está en el carrito -> se añade con cantidad 1
// - Si YA está -> aumenta cantidad en 1
const agregarAlCarrito = (idProducto) => {
  console.log("Añadiendo id ", idProducto);
  // TODO: Busca el producto en productos por id
  // TODO: Comprueba si ya existe en carrito
  // TODO: Actualiza carrito (recomendado: spread/map o una modificación controlada)
  let addProducto = productos.find((producto) => producto.id === idProducto);
  const carritoActualizado = [...carrito, addProducto];
  guardarCarrito(carritoActualizado);
  renderCarrito();
  // TODO: guardarCarrito(); renderCarrito();
};

// 7) Render carrito
// - Debe mostrar cada item: nombre, "-", cantidad, "+", precio subtotal, botón "Eliminar"
// - Debe actualizar el total y el contador
const renderCarrito = () => {
  // TODO: carritoLista.innerHTML = "";
  // TODO: Mostrar/ocultar el mensaje "El carrito está vacío"
  // TODO: Recorrer carrito y crear cada <li> con sus botones
  // TODO: Calcular total (puedes usar reduce)
  // TODO: Actualizar totalEl y contadorEl
  carritoLista.innerHTML = "";
  carrito = cargarCarrito();
  if (carrito.length === 0) {
    carritoVacio.style.visibility = "visible";
  } else {
    carritoVacio.style.visibility = "hidden";
  }


  // 👉 AQUÍ EMPIEZA LO NUEVO (reduce)
  const carritoAgrupado = carrito.reduce((acc, producto) => {
    const itemExistente = acc.find(item => item.id === producto.id);

    if (itemExistente) {
      itemExistente.cantidad += 1;
    } else {
      acc.push({ ...producto, cantidad: 1 });
    }

    return acc;
  }, []);

  let total = 0;
  let contador = 0;

  console.log("Carrito agrupado", carritoAgrupado);

  // 👉 AQUÍ YA RENDERIZAS NORMAL
  carritoAgrupado.forEach(item => {
    const li = document.createElement("li");

    const nombre = document.createElement("span");
    nombre.textContent = item.nombre;

    const menos = document.createElement("button");
    menos.textContent = "-";
    menos.addEventListener("click", () => disminuirCantidad(item.id));

    const cantidad = document.createElement("span");
    cantidad.textContent = item.cantidad;

    const mas = document.createElement("button");
    mas.textContent = "+";
    mas.addEventListener("click", () => aumentarCantidad(item.id));

    const subtotal = document.createElement("span");
    const precioSubtotal = item.precio * item.cantidad;
    subtotal.textContent = `${precioSubtotal.toFixed(2)} €`;

    li.append(nombre, menos, cantidad, mas, subtotal);
    carritoLista.appendChild(li);

    total += precioSubtotal;
    contador += item.cantidad;
  });

  totalEl.textContent = total.toFixed(2);
  contadorEl.textContent = contador;
};

// 8) Cambiar cantidades y eliminar
const aumentarCantidad = (idProducto) => {
  // TODO: Sube cantidad del item
  // TODO: guardarCarrito(); renderCarrito();
  agregarAlCarrito(idProducto);
};

const disminuirCantidad = (idProducto) => {
  // TODO: Baja cantidad del item
  // REGLA: si la cantidad llega a 0, elimina el item del carrito
  // TODO: guardarCarrito(); renderCarrito();
  const index = carrito.findIndex(p => p.id === idProducto);
  if (index !== -1) {
    carrito.splice(index, 1);
  }
  guardarCarrito(carrito);
  renderCarrito();
};

const eliminarItem = (idProducto) => {
  // TODO: Elimina el item usando filter
  // TODO: guardarCarrito(); renderCarrito();
};

// 9) Vaciar carrito
// - Deja carrito en []
// - Guarda y repinta
const vaciarCarrito = () => {
  // TODO
  localStorage.removeItem("carrito");
  renderCarrito();
};

// 10) Arranque de la app (equivalente a "al cargar la página")
// - Renderiza productos
// - Renderiza carrito con lo que haya guardado
renderProductos();
renderCarrito();

// TODO: Conecta el botón "Vaciar carrito" al evento click y llama a vaciarCarrito()
vaciarBtn.addEventListener("click", function () {
  vaciarCarrito();
});