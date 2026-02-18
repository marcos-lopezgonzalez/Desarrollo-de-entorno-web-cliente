// EJERCICIO 4 - Gestor de pedidos del bar
// Usa varias clases relacionadas, arrays y eventos.
// ¡IMPORTANTE! Añade aquí tu NUMERO REGIONAL DE ESTUDIANTE (NRE)
// NRE: 2005052

// 1. Crea la clase ProductoBar
class ProductoBar {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// 2. Crea la clase LineaPedido con los métodos que consideres oportunos:
class LineaPedido {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

// 3. Crea la clase Pedido con:
//    - propiedades:
//        * lineas (array de LineaPedido)
//        * estado ("abierto" o "confirmado")
//    - métodos:
//        * agregarProducto(producto)
//            - si el producto ya existe en alguna línea, aumenta la cantidad
//            - si no, crea una nueva línea con cantidad 1
//        * cambiarCantidad(producto, delta)
//            - busca la línea del producto
//            - suma delta a cantidad (delta puede ser +1 o -1)
//            - si la cantidad llega a 0, elimina la línea del array
//        * total()
//            - recorre las líneas y devuelve la suma de todos los subtotales
//        * vaciar()
//            - deja el array de lineas vacío
//        * confirmar()
//            - cambia el estado a "confirmado"
class Pedido {
    constructor(lineas) {
        this.lineas = lineas;
        this.estado = "abierto";
    }

    agregarProducto(producto) {
        let existeProducto = false;
        for (let i = 0; i < this.lineas.length; i++) {
            if (this.lineas[i].producto.nombre === producto.nombre) {
                existeProducto = true;
                this.lineas[i].cantidad++;
            }
        }

        if (!existeProducto) {
            this.lineas.push(new LineaPedido(producto, 1));
        }
    }

    cambiarCantidad(producto, delta) {
        for (let i = 0; i < this.lineas.length; i++) {
            if (this.lineas[i].producto.nombre === producto.nombre) {
                this.lineas[i].cantidad += delta;

                if (this.lineas[i].cantidad <= 0)
                    this.lineas.splice(i, 1);
            }
        }
    }

    total() {
        let subtotal = 0;

        for (let i = 0; i < this.lineas.length; i++) {
            subtotal += (this.lineas[i].producto.precio * this.lineas[i].cantidad)
        }

        return subtotal;
    }

    vaciar() {
        this.lineas = [];
    }

    confirmar() {
        this.estado = "confirmado";
    }
}

// 4. Crea un array "productosBar" con varios objetos ProductoBar,
//    por ejemplo: agua, café, bocadillo, refresco, etc.
//    Cada uno con su nombre y precio.

const prod1 = new ProductoBar("Agua", 2.5);
const prod2 = new ProductoBar("Café", 3);
const prod3 = new ProductoBar("Bocadillo", 5);
const prod4 = new ProductoBar("Refresco", 3.5);

const lineaPedido1 = new LineaPedido(prod1, 5);
const lineaPedido2 = new LineaPedido(prod2, 2);
const lineaPedido3 = new LineaPedido(prod3, 1);
const lineaPedido4 = new LineaPedido(prod4, 10);

const productosBar = [
    prod1,
    prod2,
    prod3,
    prod4
];

// 5. Crea una instancia de Pedido, por ejemplo llamada "pedidoActual".
const pedidoActual = new Pedido([lineaPedido1, lineaPedido2, lineaPedido3, lineaPedido4], "abierto");

// 6. Captura los elementos del DOM que vas a usar.
// ¡IMPORTANTE! Revisa el archivo pedidos.html para ver los IDs y clases.
// ¡IMPORTANTE! No modifiques el HTML ni el CSS.
// ¡IMPORTANTE! Ningún elemento del DOM debe quedar sin capturar ni sin usar.

const listaProductos = document.getElementById("listaProductos");
const estadoPedido = document.getElementById("estadoPedido");
const listaCarrito = document.getElementById("listaCarrito");
const totalPedido = document.getElementById("totalPedido");
const btnVaciarPedido = document.getElementById("btnVaciarPedido");
const btnConfirmarPedido = document.getElementById("btnConfirmarPedido");
const mensajeInfo = document.getElementById("mensajeInfo");

// 7. Crea una función "pintarProductosBar()" que:
//    - recorra el array productosBar
//    - para cada producto cree una tarjeta con:
//        * nombre
//        * precio
//        * botón "Añadir"
//      El botón puede tener un atributo data-nombre o data-index
//      para saber qué producto se ha pulsado.
//    - añada todas las tarjetas a listaProductos

function pintarProductosBar() {
    for (let i = 0; i < productosBar.length; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-producto";

        let pNombre = document.createElement("p");
        pNombre.textContent = productosBar[i].nombre;

        let pPrecio = document.createElement("p");
        pPrecio.textContent = productosBar[i].precio;

        let btnAnadir = document.createElement("button");
        btnAnadir.textContent = "AÑADIR";
        btnAnadir.dataset.nombre = productosBar[i].nombre;

        tarjeta.appendChild(pNombre);
        tarjeta.appendChild(pPrecio);
        tarjeta.appendChild(btnAnadir);


        listaProductos.appendChild(tarjeta);
    }
}

// 8. Crea una función "pintarCarrito()" que:
//    - vacíe listaCarrito
//    - recorra pedidoActual.lineas
//    - para cada línea cree un <li> con:
//        * nombre del producto
//        * cantidad
//        * subtotal
//        * botones "+" y "-" para cambiar cantidad
//      Los botones pueden tener data-nombre o data-index
//      para saber a qué producto pertenecen.
//    - actualice el total mostrando pedidoActual.total()
//      en el elemento totalPedido
function pintarCarrito() {
    listaCarrito.innerHTML = "";
    for (let i = 0; i < pedidoActual.lineas.length; i++) {
        const linea = pedidoActual.lineas[i];

        const li = document.createElement("li");
        li.className = "linea-carrito";

        const divInfo = document.createElement("div");
        divInfo.className = "linea-info";

        const nombre = document.createElement("div");
        nombre.className = "linea-nombre";
        nombre.textContent = linea.producto.nombre;

        const detalle = document.createElement("div");
        detalle.className = "linea-detalle";
        detalle.textContent = `Precio: ${linea.producto.precio.toFixed(2)} €, Subtotal: ${(linea.producto.precio * linea.cantidad).toFixed(2)} €`;

        divInfo.appendChild(nombre);
        divInfo.appendChild(detalle);

        const controles = document.createElement("div");
        controles.className = "linea-controles";

        const btnMenos = document.createElement("button");
        btnMenos.className = "btn-cantidad";
        btnMenos.dataset.action = "restar";
        btnMenos.dataset.nombre = linea.producto.nombre;
        btnMenos.textContent = "-";

        const cantidad = document.createElement("p");
        cantidad.className = "cantidad";
        cantidad.textContent = linea.cantidad;

        const btnMas = document.createElement("button");
        btnMas.className = "btn-cantidad";
        btnMas.dataset.action = "sumar";
        btnMas.dataset.nombre = linea.producto.nombre;
        btnMas.textContent = "+";

        controles.appendChild(btnMenos);
        controles.appendChild(cantidad);
        controles.appendChild(btnMas);

        li.appendChild(divInfo);
        li.appendChild(controles);

        listaCarrito.appendChild(li);
    }

    // actualizar el total
    totalPedido.textContent = `Total: ${pedidoActual.total().toFixed(2)} €`;
}
pintarCarrito();

// 9. Crea una función "actualizarEstadoPedido()" que:
//    - lea pedidoActual.estado
//    - actualice el texto de textoEstado
//    - cambie la clase CSS (pedido-abierto / pedido-confirmado)
//    - si el estado es "confirmado":
//        * muestra un mensaje en mensajeInfo indicando que
//          el pedido ya no se puede modificar
//      si es "abierto":
//        * mensaje indicando que se pueden añadir productos
function actualizarEstadoPedido() {
    let estado = pedidoActual.estado;

    if (estado === "abierto") {
        pedidoActual.className = "pedido-abierto";
        pedidoActual.textContent = "Se pueden añadir productos";
    } else if (estado === "confirmado") {
        pedidoActual.className = "pedido-confirmado";
        pedidoActual.textContent = "YA NO SE PUEDE MODIFICAR";
    }

}

// 10. Añade un listener de "click" a listaProductos (delegación de eventos):
//     - si el botón pulsado tiene la clase "btn-add":
//         * comprobar si el pedido está "abierto"
//         * buscar el producto correspondiente en productosBar
//         * llamar a pedidoActual.agregarProducto(producto)
//         * llamar a pintarCarrito()
//         * actualizar el mensajeInfo
//     - si el pedido está "confirmado", no debe permitir añadir productos.
listaProductos.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON" && event.target.className === "btn-add") {
        
    }
});

// 11. Gestiona las interacciones en listaCarrito:
//     - Implementa delegación de eventos en el contenedor del carrito
//     - Identifica qué tipo de acción quiere realizar el usuario
//     - Localiza el producto correspondiente a la acción
//     - Modifica la cantidad según la acción realizada
//     - Verifica que el pedido pueda ser modificado antes de hacer cambios
//     - Actualiza la visualización después de cada modificación

// 12. Evento en btnVaciarPedido:
//     - Verifica el estado del pedido antes de realizar acciones
//     - Limpia el contenido del pedido si es posible
//     - Actualiza la interfaz para reflejar los cambios
//     - Proporciona feedback al usuario sobre la acción realizada

// 13. Evento en btnConfirmarPedido:
//     - llamar a pedidoActual.confirmar()
//     - actualizarEstadoPedido()
//     - actualizar mensajeInfo

// 14. Al cargar la página:
//     - llama a pintarProductosBar()
//     - llama a pintarCarrito() (estará vacío al principio)
//     - llama a actualizarEstadoPedido()
//     - escribe un mensaje inicial en mensajeInfo
