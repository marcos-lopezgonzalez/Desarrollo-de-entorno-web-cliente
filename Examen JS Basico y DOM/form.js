let form = document.getElementById("formContacto");
let inputNombre = document.getElementById("nombre");
let errNombre = document.getElementById("errNombre");
let inputEmail = document.getElementById("email")
let errEmail = document.getElementById("errEmail");
let inputMensaje = document.getElementById("mensaje");
let errMensaje = document.getElementById("errMensaje");


form.addEventListener("submit", function (event) {
    errNombre.textContent = "";
    errEmail.textContent = "";
    errMensaje.textContent = "";

    event.preventDefault();
    if (!comprobarNombre())
        errNombre.textContent = "Introduce un nombre...";
    if (!comprobarMensaje())
        errMensaje.textContent = "Minimo 10 caracteres...";
    if(!comprobarEmail())
        errEmail.textContent = "Email no válido...";
})

function comprobarNombre() {
    let nombre = inputNombre.value.trim();
    if (nombre === "")
        return false;
    return true;
}

function comprobarEmail() {
    let email = inputEmail.value;
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const esValido = regexEmail.test(email.trim());
    // console.log("Es valido", esValido);
    
    if(!esValido)
        return false;
    return true;
}

function comprobarMensaje() {
    let mensaje = inputMensaje.value.trim();
    if(mensaje.length < 10)
        return false;
    return true;
}