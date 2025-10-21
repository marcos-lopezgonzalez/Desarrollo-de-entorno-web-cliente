const nombres = ["Marcos", "Moha", "Juanmi", "Antonio", "Alberto", "Juan"];

const boton = document.getElementById("btnBuscar");
boton.addEventListener("click", buscarNombre);

const txtBuscar = document.getElementById("txtBuscar");

const ul = document.getElementById("resultado");

function buscarNombre() {
    let buscarCadenaNombre = txtBuscar.value.toLowerCase();

    ul.innerHTML = "";
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i].toLowerCase().indexOf(buscarCadenaNombre) !== -1) {
            li = document.createElement("li");
            li.textContent = `El nombre ${nombres[i]} contiene la cadena ${buscarCadenaNombre}`;
            ul.appendChild(li);
        }
    }
}