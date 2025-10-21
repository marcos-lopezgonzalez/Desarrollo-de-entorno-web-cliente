const cpu = document.getElementById("cpu");
const placa = document.getElementById("placa");
const boton = document.getElementById("btnComprobar");
const result = document.getElementById("resultado");

function comprobarCompatibilidad() {
    if (cpu.value === placa.value) {
        result.textContent = "Son compatibles";
        result.style.color = "green";
    }
    else {
        result.textContent = "No son compatibles";
        result.style.color = "red";
    }
}

boton.addEventListener("click", comprobarCompatibilidad);