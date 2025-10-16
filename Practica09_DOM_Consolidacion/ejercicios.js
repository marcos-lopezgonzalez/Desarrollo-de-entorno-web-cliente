function ejercicio01() {
    let boton = document.getElementById("ejercicio01Boton");
    let div = document.getElementById("ejercicio01");

    boton.addEventListener("click", function () {
        div.style.border = "3px solid red";
    })
}

function ejercicio02() {
    let boton = document.getElementById("ejercicio02Boton");
    let textArea = document.getElementById("ejercicio02");

    boton.addEventListener("click", function () {
        let texto = prompt("Introduce el texto: ");
        textArea.textContent = texto;
    })
}

function ejercicio03() {
    let input = document.getElementById("ejercicio03Input");
    let texto = document.getElementById("ejercicio03");

    input.addEventListener("input", function () {
        texto.textContent = input.value.length;
    })
}

function ejercicio04() {
    let botonAumentar = document.getElementById("ejercicio04Aumentar");
    let botonDisminuir = document.getElementById("ejercicio04Disminuir");
    let img = document.getElementById("ejercicio04Img");
    let tamañoActual = parseFloat(img.style.width);

    botonAumentar.addEventListener("click", function () {
        let tamañoAmpliado = tamañoActual * 1.05;
        img.style.width = tamañoAmpliado + "px";
        img.style.height = tamañoAmpliado + "px";
    })

    botonDisminuir.addEventListener("click", function () {
        let tamañoReducido = tamañoActual / 1.05;
        img.style.width = tamañoReducido + "px";
        img.style.height = tamañoReducido + "px";
        alert("Podras hacer pequeño el escudo pero nunca su grandeza.");
    })
}

function ejercicio05() {
    let boton = document.getElementById("ejercicio05Boton");
    let div = document.getElementById("ejercicio05");

    boton.addEventListener("click", function () {
        let nuevoH2 = document.createElement("h2");
        nuevoH2.textContent = "Nuevo título añadido";
        div.append(nuevoH2);
    })
}

function ejercicio06() {
    let boton = document.getElementById("ejercicio06Boton");
    let div = document.getElementById("ejercicio06");
    let parrafosDiv = div.querySelectorAll("p");

    boton.addEventListener("click", function () {
        for (let i = 0; i < parrafosDiv.length; i++) {
            parrafosDiv[i].remove();
        }
    })
}

function ejercicio07() {
    let botonRojo = document.getElementById("ejercicio07Rojo");
    let botonVerde = document.getElementById("ejercicio07Verde");
    let botonAzul = document.getElementById("ejercicio07Azul");
    let div = document.getElementById("ejercicio07");

    botonRojo.addEventListener("click", function () {
        div.style.background = "red";
        div.textContent = "rojo";
    })

    botonVerde.addEventListener("click", function () {
        div.style.background = "green";
        div.textContent = "verde";
    })

    botonAzul.addEventListener("click", function () {
        div.style.background = "blue";
        div.textContent = "azul";
    })
}

function ejercicio08() {
    let botonIzq = document.getElementById("ejercicio08Izq");
    let botonCentro = document.getElementById("ejercicio08Centro");
    let botonDer = document.getElementById("ejercicio08Der");
    let texto = document.getElementById("ejercicio08");

    botonIzq.addEventListener("click", function () {
        texto.style.textAlign = "start";
    })

    botonCentro.addEventListener("click", function () {
        texto.style.textAlign = "center";
    })

    botonDer.addEventListener("click", function () {
        texto.style.textAlign = "end";
    })
}

function ejercicio09() {
    let slider = document.getElementById("ejercicio09Slider");
    let img = document.getElementById("ejercicio09");

    slider.addEventListener("input", function () {
        img.style.opacity = slider.value / 100;
    })
}

function ejercicio10() {
    let texto = document.getElementById("ejercicio10");
    let nClicks = 0;
    document.addEventListener("click", function () {
        nClicks++;
        texto.textContent = `Has hecho click ${nClicks} veces.`;
    })
}

function ejercicio11() {
    let texto = document.getElementById("ejercicio11");
    let textoOriginal = texto.textContent;

    texto.addEventListener("mouseover", function () {
        texto.textContent = "¡¡¡El texto ha cambiado!!!";
    })

    texto.addEventListener("mouseout", function () {
        texto.textContent = textoOriginal;
    })
}

function ejercicio12() {
    let boton = document.getElementById("ejercicio12Boton");
    let lista = document.getElementById("ejercicio12");
    let nLi = 0;

    boton.addEventListener("click", function () {
        nLi++;
        nuevoLi = document.createElement("li");
        for (let i = 1; i <= nLi; i++) {
            nuevoLi.textContent += i + " ";
        }
        lista.append(nuevoLi);
    })
}

function ejercicio13() {
    let boton = document.getElementById("ejercicio13Boton");
    let img = document.getElementById("ejercicio13");

    boton.addEventListener("click", function () {
        if (img.style.display === "block")
            img.style.display = "none";
        else
            img.style.display = "block";
    })
}

function ejercicio14() {
    let boton = document.getElementById("ejercicio14Boton");

    boton.addEventListener("click", function () {
        boton.textContent = "¡Gracias!";
    })
}

function ejercicio15() {
    let texto = document.getElementById("ejercicio15");

    document.addEventListener("mousemove", function (e) {
        posX = e.clientX;
        posY = e.clientY;

        texto.textContent = `Coordenadas del ratón X: ${posX} Y: ${posY}`;
    })
}