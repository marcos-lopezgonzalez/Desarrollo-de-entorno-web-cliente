const productos = [
    ["Teclado", 14.99, 12],
    ["Monitor", 20.99, 5],
    ["Raton", 7.99, 2],
    ["Salchicha", 1.99, 99],
    ["Hamburguesa", 10.99, 50],
    ["Piscina", 4000, 0],
    ["Oro", 10000, 1],
]

let inputBuscar = document.getElementById("buscar");
let sugerencias = document.getElementById("sugerencias");
let catalogo = document.getElementById("catalogo");

for (let i = 0; i < productos.length; i++) {
    let p = document.createElement("p");
    p.textContent = `Nombre: ${productos[i][0]} || Precio: ${productos[i][1]} || Stock: ${productos[i][2]}`;
    catalogo.appendChild(p);
}

inputBuscar.addEventListener("input", function () {
    borrarSugerencias();
    // borrarListaSugerencias();
    let q = inputBuscar.value.toLowerCase().trim();

    if (q.length >= 2) {
        for (let i = 0; i < productos.length; i++) {
            let nombreProducto = productos[i][0].toLowerCase();
            let stock = productos[i][2];
            if (nombreProducto.indexOf(q) !== -1 && stock > 0 /*&& sugerencias.lastElementChild === null*/) {
                console.log("añadiedo");
                let sugerencia = document.createElement("li");
                sugerencia.textContent = nombreProducto;
                sugerencia.addEventListener("click", function () {
                    inputBuscar.value = productos[i][0];
                    borrarSugerencias();
                })
                sugerencias.appendChild(sugerencia);
                console.log("añado sug", sugerencias.childElementCount);
            }
        }

        //Sin sugerencias
        if (sugerencias.childElementCount === 0) {
            error = document.createElement("li");
            error.textContent = "Producto no disponible...";
            sugerencias.appendChild(error);
        }
    }

    console.log("final", sugerencias.childElementCount);
})

function borrarSugerencias() {
    let tamañoSugerencias = sugerencias.childElementCount;
    // console.log("tamaño", tamañoSugerencias);
    for (let i = 0; i < tamañoSugerencias; i++) {
        // console.log("Borrando", i);
        // console.log("tamaño2", tamañoSugerencias.childElementCount);
        sugerencias.lastElementChild.remove();
    }
}