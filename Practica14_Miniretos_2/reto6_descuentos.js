let boton6 = document.getElementById("r6-calc");
boton6.addEventListener("click", function () {
    let inputPrecio = Number(document.getElementById("r6-precio").value);
    let inputDescuento = Number(document.getElementById("r6-dto").value);
    let msg = document.getElementById("r6-msg");

    if (inputPrecio === 0) {
        msg.style.color = "red";
        msg.textContent = "ERROR: Precio no válido";
        return;
    }

    if (inputDescuento < 0 || 100 < inputDescuento) {
        msg.style.color = "red";
        msg.textContent = "ERROR: Descuento no válido";
        return;
    }

    let descuento = (inputPrecio * (inputDescuento / 100)).toFixed(2);
    let precioFinal = (inputPrecio - descuento).toFixed(2);

    let resultDescuento = document.getElementById("r6-descuento");
    let resultPrecio = document.getElementById("r6-final");

    resultDescuento.textContent = descuento;
    resultPrecio.textContent = precioFinal;

    msg.style.color = "green";
    msg.textContent = "Descuento aplicado con éxito";
})