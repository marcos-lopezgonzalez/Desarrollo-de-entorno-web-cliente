function ejercicio01() {
    let boton = document.getElementById("ejercicio01Boton");
    boton.addEventListener("click", function () {
        document.getElementById("ejercicio01").innerText = "Texto modificado";
    })
}

function ejercicio02() {
    let boton = document.getElementById("ejercicio02Boton");
    boton.addEventListener("click", function () {
        document.getElementById("ejercicio02").style.backgroundColor = "red";
    })
}

function ejercicio03() {
    let boton = document.getElementById("ejercicio03Boton");
    boton.addEventListener("click", function () {
        console.log("Ejercicio03");
    })
}

function ejercicio04() {
    let boton = document.getElementById("ejercicio04Boton");
    boton.addEventListener("click", function () {
        let texto = prompt("Introduce un texto: ");
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = texto;

        document.getElementById("ejercicio04").append(nuevoLi);
    })
}

function ejercicio05() {
    let boton = document.getElementById("ejercicio05Boton");
    boton.addEventListener("click", function () {
        document.getElementById("ejercicio05").lastElementChild.remove();
    })
}

function ejercicio06() {
    let imagen = document.getElementById("ejercicio06Img");
    imagen.addEventListener("click", function () {
        imagen.src = "https://cdn-icons-png.flaticon.com/512/6188/6188683.png";
    })
}

function ejercicio07() {
    let boton = document.getElementById("ejercicio07Boton");
    let textoContador = document.getElementById("ejercicio07");

    let contador = 0;

    boton.addEventListener("click", function () {
        contador++;
        textoContador.innerText = `Has hecho click ${contador} veces`;
    })
}

function ejercicio08() {
    let boton = document.getElementById("ejercicio08Boton");
    boton.addEventListener("click", function () {
        let estado = document.getElementById("ejercicio08").style.display;

        //Si está oculto se muestra
        if (estado === "none")
            estado = "block";
        //Si se muestra se oculta
        else
            estado = "none";

        document.getElementById("ejercicio08").style.display = estado;
    })
}


function ejercicio09() {
    let boton = document.getElementById("ejercicio09Boton");
    boton.addEventListener("click", function () {
        let txt1 = document.getElementById("ejercicio09_1").innerHTML;
        let txt2 = document.getElementById("ejercicio09_2").innerHTML;

        document.getElementById("ejercicio09_1").innerHTML = txt2;
        document.getElementById("ejercicio09_2").innerHTML = txt1;
    })
}


function ejercicio10() {
    let botonSubir = document.getElementById("ejercicio10BotonSubir");
    let botonBajar = document.getElementById("ejercicio10BotonBajar");
    let texto = document.getElementById("ejercicio10")

    //El tamaño del texto está definido con % en el html para este caso
    botonSubir.addEventListener("click", function () {
        let size = parseFloat(texto.style.fontSize);
        size += 5;
        texto.style.fontSize = size + "%";
    });

    botonBajar.addEventListener("click", function () {
        let size = parseFloat(texto.style.fontSize);
        size -= 5;
        texto.style.fontSize = size + "%";
    });
}

function ejercicio12() {
    let boton = document.getElementById("ejercicio12Boton");
    boton.addEventListener("click", function () {
        let nuevoNombre = "";

        while (nuevoNombre.toLowerCase() !== "fin") {
            nuevoNombre = prompt("Introduce un nombre");
            if (nuevoNombre !== "fin") {
                let nuevoLi = document.createElement("li");
                nuevoLi.textContent = nuevoNombre;
                document.getElementById("ejercicio12").append(nuevoLi);
            }
        }
    })
}

function ejercicio13() {
    let boton = document.getElementById("ejercicio13Boton");
    boton.addEventListener("click", function () {
        let lista = document.getElementById("ejercicio13");
        alert(`La lista tiene un tamaño de ${lista.children.length}`);
    })
}

function ejercicio14() {
    let boton = document.getElementById("ejercicio14Boton");
    boton.addEventListener("click", function () {
        // Almacenamos todas las etiquetas <p>
        let parrafos = document.querySelectorAll("p");

        for (let i = 0; i < parrafos.length; i++) {
            //Filtramos para cambiar solo los de este ejercicio
            if (parrafos[i].innerText === "Este texto cambia si pulsas el botón")
                parrafos[i].innerText = "Texto cambiado";
        }
    })
}

