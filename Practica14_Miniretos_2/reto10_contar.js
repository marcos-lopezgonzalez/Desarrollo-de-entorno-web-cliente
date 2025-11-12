let boton10 = document.getElementById("r10-contar");
boton10.addEventListener("click", function () {
    let texto = document.getElementById("r10-texto").value.trim();
    let result = document.getElementById("r10-total");

    texto = texto.split(" ");
    let totalPalabras = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].trim() !== "")
            totalPalabras++;
    }

    if (totalPalabras === 0) {
        result.style.color = "red";
        result.textContent = `El texto no tiene palabras`;
    } else {
        result.style.color = "green";
        result.textContent = `El texto tiene ${totalPalabras} palabras.`;
    }

})