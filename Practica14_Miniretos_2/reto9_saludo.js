let boton9 = document.getElementById("r9-saludar");
boton9.addEventListener("click", function () {
    let inputHora = Number(document.getElementById("r9-hora").value);
    let msg = document.getElementById("r9-saludo");

    if (inputHora < 0 || 23 < inputHora) {
        msg.style.color = "red";
        msg.textContent = "ERROR: Hora no válida";
        return;
    }

    msg.style.color = "green";
    if (6 < inputHora && inputHora < 12)
        msg.textContent = "Buenos días";
    else if (12 <= inputHora && inputHora <= 20) {
        msg.textContent = "Buenas tardes";
    } else {
        msg.textContent = "Buenas noches";
    }
})