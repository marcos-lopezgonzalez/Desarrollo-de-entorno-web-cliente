function cambiarTexto() {
    document.getElementById("titulo").innerText = "TITULO CAMBIADO";
}

function cambiarColor() {
    document.getElementById("parrafo").style.color = "#FF0000";
}

function ocultar() {
    document.getElementById("mensaje").style.display = "none";
}

function mostrar() {
    document.getElementById("mensaje").style.display = "block";
}

function cambiarImagen() {
    document.getElementById("foto").src = "boton2.png";
}

function crearParrafo() {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo párrafo";
    document.body.appendChild(nuevoParrafo);
}
