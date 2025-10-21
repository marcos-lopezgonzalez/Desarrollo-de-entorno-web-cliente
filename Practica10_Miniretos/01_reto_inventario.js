const objetos = [{
    nombre: "Teclado",
    cantidad: 4
}, {
    nombre: "Ratones",
    cantidad: 4
}, {
    nombre: "Pizarra",
    cantidad: 1
}, {
    nombre: "Sillas",
    cantidad: 15
},];

const boton = document.getElementById("btnMostrar");
boton.addEventListener("click", mostrarObjetos);

function mostrarObjetos() {
    let div = document.getElementById("tabla");
    div.innerHTML = "";
    let ul = document.createElement("ul");
    for (let i = 0; i < objetos.length; i++) {
        let li = document.createElement("li");
        li.textContent = `Nombre: ${objetos[i].nombre} Cantidad: ${objetos[i].cantidad}`;
        ul.appendChild(li);
    }

    div.appendChild(ul);
}