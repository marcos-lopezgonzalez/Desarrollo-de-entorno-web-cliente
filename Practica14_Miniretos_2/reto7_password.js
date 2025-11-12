let boton7 = document.getElementById("r7-check");
boton7.addEventListener("click", function () {
    let inputPassword = document.getElementById("r7-pwd").value.trim();
    let msg = document.getElementById("r7-resultado");

    if (inputPassword.length < 6) {
        msg.style.color = "red";
        msg.textContent = "ERROR: La contraseña no contiene 6 caracteres o más";
        return;
    }

    let contieneNumero = false;
    let i = 0;
    do {
        if (inputPassword.indexOf(i) !== -1)
            contieneNumero = true;
        i++;
    } while (i < 9 && !contieneNumero);

    if (!contieneNumero) {
        msg.style.color = "red";
        msg.textContent = "ERROR: La contraseña no contiene un número al menos";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "La contraseña es válida.";
})