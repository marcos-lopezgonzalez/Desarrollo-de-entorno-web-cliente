let boton8 = document.getElementById("r8-comparar");
boton8.addEventListener("click", function () {
    let palabra1 = document.getElementById("r8-p1").value.trim().toLowerCase();
    let palabra2 = document.getElementById("r8-p2").value.trim().toLowerCase();
    let msg = document.getElementById("r8-msg");

    console.log(palabra1, palabra2);

    if (palabra1 === "" || palabra1 === null || palabra2 === "" || palabra2 === null) {
        msg.style.color = "red";
        msg.textContent = "ERROR: Introduce ambas palabras";
        return;
    }

    if (palabra1 === palabra2) {
        msg.style.color = "green";
        msg.textContent = "Las palabras son iguales";
    } else {
        msg.style.color = "red";
        msg.textContent = "ERROR: Las palabras NO son iguales";
    }
})