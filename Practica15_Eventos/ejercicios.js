function ejercicio01() {
    let boton1 = document.getElementById("ej01");
    boton1.addEventListener("click", function () {
        document.body.style.backgroundColor = "red";
    })
}

function ejercicio02() {
    let texto = document.getElementById("ej02");

    document.addEventListener("keydown", function (event) {
        texto.value = event.key;
    });
}

function ejercicio03() {
    let form = document.getElementById("ej03");

    form.addEventListener("submit", function (event) {
        let nombre = document.getElementById("ej03-nombre").value.trim();
        if (nombre === "") {
            event.preventDefault();
            alert("ERROR: Introduce un nombre");
        } else {
            event.preventDefault();
            alert("Formulario enviado con exito");
            nombre.value = "";
        }
    })
}

function ejercicio04() {
    let ul = document.getElementById("ej04");
    let boton = document.getElementById("ej04Bot");

    ul.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            alert(event.target.textContent);
        }
    });

    boton.addEventListener("click", function () {
        const li = document.createElement("li");
        li.textContent = "Holaaa " + (Math.random() * 100).toFixed(0);
        ul.appendChild(li);
    });
}

function ejercicio05() {
    let div3 = document.getElementById("ej05_3");
    let div2 = document.getElementById("ej05_2");
    let div1 = document.getElementById("ej05_1");

    div3.addEventListener("click", function () {
        alert("DIV 3");
        // Este es el div que contiene a los demas, no hace falta parar la propagación
    });

    div2.addEventListener("click", function (event) {
        alert("DIV 2");
        // Paramos la propagación
        event.stopPropagation();
    });

    div1.addEventListener("click", function (event) {
        alert("DIV 1");
        // Paramos la propagación
        event.stopPropagation();
    });
}

function ejercicio06() {
    let div = document.getElementById("ej06");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            let boton = this.document.createElement("button");
            boton.textContent = "Has bajado 300px";
            boton.addEventListener("click", function () {
                window.scrollTo(0, 0);
            })
            div.appendChild(boton);
        }
    });
}

function ejercicio07() {
    let div = document.getElementById("ej07");
    let cords = document.getElementById("ej07_cords");

    div.addEventListener("mouseenter", function () {
        div.style.backgroundColor = "blue";
    });

    div.addEventListener("mouseleave", function () {
        div.style.backgroundColor = "red";
        cords.textContent = "Has salido del area del cuadrado";
    });

    div.addEventListener("mousemove", function (event) {
        cords.textContent = `Coordenadas del ratón: X:${event.offsetX} Y:${event.offsetY}`;
    });
}

function ejercicio08() {
    let zona = document.getElementById('ej08_zona');
    let item = document.getElementById('ej08');
    item.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', 'item');
    });

    zona.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    zona.addEventListener('drop', function (e) {
        e.preventDefault();
        zona.appendChild(item);
    });
}

function ejercicio09() {
    let botAdd = document.getElementById("ej09_add");
    let form = document.getElementById("ej09");

    botAdd.addEventListener("click", function () {
        let newInput = document.createElement("input");
        form.appendChild(newInput);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let inputs = this.querySelectorAll("input");
        let campoVacio = false;
        for (let i = 0; i < inputs.length; i++) {
            // if(this.children[i].tagName === "INPUT")
            if (inputs[i].value.trim() === "") {
                campoVacio = true;
                break;
            }
        }

        if (campoVacio)
            alert("Rellena todos los campos");
        else
            alert("Formulario enviado correctamente");

    });
}

function ejercicio10() {
    let form = document.getElementById("registro");
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("correo");
    let cambiarColor = document.getElementById("btnTema");
    let addItem = document.getElementById("addItem");
    let ul = document.getElementById("lista");
    let contador = document.getElementById("contador");

    nombre.addEventListener("blur", function () {
        if (this.value.trim() === "") {
            alert("No has rellenado el campo");
        }
    });

    email.addEventListener("blur", function () {
        if (this.value.trim() === "") {
            alert("No has rellenado el campo");
        }
    });

    cambiarColor.addEventListener("click", function () {
        console.log("hola");
        document.body.style.background = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    })

    form.addEventListener("submit", function (event) {
        // event.preventDefault();
    });

    addItem.addEventListener("click", function () {
        let newItem = document.createElement("li");
        newItem.textContent = document.getElementById("nuevoTexto").value.trim();
        ul.appendChild(newItem);
    });

    ul.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.remove();
        }
    })

    document.addEventListener("keydown", function (event) {
        if (event.key == "+") {
            contador.textContent++;
        } else if (event.key == "-") {
            contador.textContent--;
        }
    });
}