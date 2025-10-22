const boton01 = document.getElementById("ejercicio01");
boton01.addEventListener("click", ejercicio01);

const result01 = document.getElementById("result01");

function ejercicio01() {
    result01.textContent = "Notas mayores de 7:\n";
    const alumnos = [
        {
            nombre: "Marcos",
            nota: 8
        },
        {
            nombre: "Juan",
            nota: 5
        },
        {
            nombre: "Carmen",
            nota: 7
        },
        {
            nombre: "Roberto",
            nota: 6
        },
        {
            nombre: "Antonio",
            nota: 9
        },
        {
            nombre: "Maria",
            nota: 8
        }
    ]

    let media = 0;
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].nota > 7)
            result01.textContent += `${alumnos[i].nota}\n`;
        media += alumnos[i].nota;
    }

    result01.textContent += `\nLa media total es: ${media / alumnos.length}`;
}

const boton02 = document.getElementById("ejercicio02");
boton02.addEventListener("click", ejercicio02);

const result02 = document.getElementById("result02");

function ejercicio02() {
    result02.textContent = "Productos disponibles:\n";
    const productos = [
        {
            nombre: "Teclado",
            precio: 12,
            stock: 5
        },
        {
            nombre: "Raton",
            precio: 7,
            stock: 0
        },
        {
            nombre: "Monitor",
            precio: 25,
            stock: 15
        },
        {
            nombre: "Alfombrilla",
            precio: 4,
            stock: 2
        }
    ]

    let total = 0;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].stock > 0) {
            result02.textContent += `${productos[i].nombre}\n`;
            total += productos[i].precio;
        }
    }
    result02.textContent += `\nTotal: ${total}`;
}

const boton03 = document.getElementById("ejercicio03");
boton03.addEventListener("click", ejercicio03);

const result03 = document.getElementById("result03");

function ejercicio03() {
    result03.textContent = "Contactos:\n"
    const agenda = [
        {
            nombre: "Marcos",
            telefono: "12355612"
        },
        {
            nombre: "Ávalos",
            telefono: "696969"
        },
        {
            nombre: "Juan",
            telefono: "01041230"
        },
        {
            nombre: "Pepito",
            telefono: "98765654331"
        }
    ]

    agenda.mostrarContactos = function () {
        for (let i = 0; i < this.length; i++) {
            result03.textContent += `Nombre: ${this[i].nombre}\nTelefono: ${this[i].telefono}\n\n`;
        }
    }

    agenda.mostrarContactos();
}

const boton04 = document.getElementById("ejercicio04");
boton04.addEventListener("click", ejercicio04);

const result04 = document.getElementById("result04");

function ejercicio04() {
    result04.textContent = "Lista de libros:\n"

    const libros = [
        {
            titulo: "Pinocho",
            autor: "no se",
            ano: 1841
        },
        {
            titulo: "Celestina",
            autor: "ni idea",
            ano: 1531
        },
        {
            titulo: "Lazarillo de Tormes",
            autor: "alguien",
            ano: 2010
        },
        {
            titulo: "Pinocho otra vez",
            autor: "?",
            ano: 10101
        }
    ]

    libros.mostrarLibros = function () {
        for (let i = 0; i < this.length; i++) {
            result04.textContent += `Libro: ${this[i].titulo}\nAutor: ${this[i].autor}\nAño: ${this[i].ano}\n\n`;
        }
    }

    libros.mostrarLibros();
}