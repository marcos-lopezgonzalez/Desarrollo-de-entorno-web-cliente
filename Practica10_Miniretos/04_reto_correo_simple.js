const boton = document.getElementById("btnCorreo");
const input = document.getElementById("nombre");
const salida = document.getElementById("salida");

function comprobarCorreo() {
    let correo = input.value.replace(/\s/g, "").toLowerCase();
    let modificado = false;

    if (correo.indexOf("@") === -1) {
        correo = crearCorreo(correo);
        modificado = true;
    }
    else {
        let division = correo.split("@");
        if (!division[1].includes(".")) {
            correo = crearCorreo(division[0]);
            modificado = true;
        }
    }

    if (modificado) {
        salida.textContent = "El correo no era inválido, este si: " + correo;
        salida.style.color = "red";
    } else {
        salida.textContent = "Correo válido" + correo;
        salida.style.color = "green";
    }
}

function crearCorreo(correo) {
    return correo + "@centrofp.local";
}

boton.addEventListener("click", comprobarCorreo);