function ejercicio01() {
    let edad = Number(prompt("Introduce tu edad (ej: 23): "));
    let dia = prompt("Introduce el día (ej: Martes): ")

    let precio = 0;
    if (edad < 14)
        precio = 5;
    else if (14 < edad && edad < 65)
        precio = 8;
    else
        precio = 6;


    if (dia.toLowerCase() === "martes")
        precio -= 1;


    console.log(`Precio final: ${precio}`);
}

function ejercicio02() {
    let precioCarrito = Number(prompt("Introduzca el precio de su compra: "));

    if (50 <= precioCarrito)
        precioCarrito += 3.99;

    console.log(`Precio final: ${precioCarrito}`);
}

function ejercicio03() {
    let usuario = prompt("Introduce el username: ");
    let password = prompt("Introduce la contraseña: ");

    if (usuario === "alumno" && password === "1234")
        console.log("Acceso concecido");
    else
        console.log("Acceso denegado");
}

function ejercicio04() {
    let opcion = prompt("Elige una opción: " +
        "\n1. Café" +
        "\n2. Tostada" +
        "\n3. Zumo");

    switch (opcion) {
        case "1":
            console.log("1.20€");
            break;
        case "2":
            console.log("1.80€");
            break;
        case "3":
            console.log("2€");
            break;
        default:
            console.log("Opción no válida");
            break;
    }
}

function ejercicio05() {
    let dia = prompt("Escribe un día (lun, mar, mié, jue, vie, sáb, dom): ");

    switch (dia) {
        case "lun":
        case "mar":
        case "mié":
        case "jue":
        case "vie":
            console.log("Hay clase");
            break;
        case "sáb":
        case "dom":
            console.log("No hay clase");
            break;
        default:
            console.log("Día no válido");
    }
}

function ejercicio06() {
    let mes = prompt("Escribe el numero del més (1-12): ");

    switch (mes) {
        case "12":
        case "1":
        case "2":
            console.log("Invierno");
            break;
        case "3":
        case "4":
        case "5":
            console.log("Primavera");
            break;
        case "6":
        case "7":
        case "8":
            console.log("Verano:");
            break;
        case "9":
        case "10":
        case "11":
            console.log("Otoño");
            break;
        default:
            console.log("Opcion no válida");
            break;
    }
}

function ejercicio07() {
    let total = 0;
    let ingreso = prompt("Introduzca los ingresos. Para parar escriba FIN");

    while (total < 100 && ingreso.toLowerCase() !== "fin") {
        let numero = Number(ingreso);
        if (!isNaN(numero))
            total += numero;
        else
            console.log("No válido");


        if (total < 100)
            ingreso = prompt("Introduzca los ingresos. Para parar escriba FIN");
        else
            console.log("Limite alcanzado");

    }

    console.log(`Ingresos totales: ${total}`);
}

function ejercicio08() {
    let intentos = 3;
    let pin = prompt("Escribe tu PIN: ");

    while (0 < intentos && pin !== "1234") {
        intentos--;
        if (0 < intentos) {
            console.log(`PIN incorrecto. Te quedan ${intentos} intentos.`);
            pin = prompt("Escribe tu PIN: ");
        }
    }

    if (pin === "1234")
        console.log("Bienvenido");
    else
        console.log("Te has quedado sin intentos");
}

function ejercicio09() {
    let respuesta = "";

    do {
        respuesta = prompt("¿Te gusta programar?").toLowerCase();
    } while (respuesta !== "si" && respuesta !== "no")

    console.log("Gracias por responder");
}

function ejercicio10() {
    let precio = Number(prompt("Escribe el PvP"));

    for (let i = 0; i < 10; i++) {
        console.log(`Cantidad: ${i + 1}: Total: ${precio * (i + 1)}`);
    }
}

function ejercicio11() {
    let objetivoPasos = Number(prompt("Escribe un objetivo de pasos: "));

    for (let i = 1; i <= objetivoPasos; i++) {
        if (i % 1000 == 0) {
            console.log(`${i} es múltiplo de 1000`);
        }
    }
}

function ejercicio12() {
    const notas = [5, 7, 8, 4, 10];
    let total = 0;

    for (let i = 0; i < notas.length; i++) {
        total += notas[i];
    }

    console.log(`Media: ${total / notas.length}`);
}

function ejercicio13() {
    let precios = [12, 25, 40, 18, 9, 30];

    for (let i = 0; i < precios.length; i++) {
        if (precios[i] <= 15) {
            console.log(`Precio ${precios[i]} <= 15`);
            break;
        }

        if (i == precios.length - 1)
            console.log("No se ha encontrado");
    }
}

function ejercicio14() {
    let mensajes = [];

    for (let i = 0; i < 5; i++) {
        mensajes.push(prompt("Introduce un mensaje"));
        if (mensajes[i] === null || mensajes[i] === "")
            continue;
        else
            console.log(mensajes[i]);
    }
}

function ejercicio15() {
    let listaProductos = ["Pepino", "Tomate", "Cereales", "Leche", "Helado"];

    for (let i = 0; i < listaProductos.length; i++) {
        console.log(`Producto ${i + 1}: ${listaProductos[i]}`);
    }
}

function ejercicio16() {
    const precios = [10, 20, 15, 30, 25];
    let total = 0;

    for (let i = 0; i < precios.length; i++) {
        total += precios[i];
    }

    console.log(`Suma total: ${total}`);
}

function ejercicio17() {
    const productos = ['pan', 'leche', 'huevos', 'arroz', 'manzanas'];
    let buscarProducto = prompt("Introduce un alimento para buscar: ");

    if (productos.includes(buscarProducto))
        console.log(`El alimento ${buscarProducto} está en la lista`);
    else
        console.log("El alimento no está en la lista");
}

function ejercicio18() {
    const stock = [12, 3, 7, 0, 9, 5];

    for (let i = 0; i < stock.length; i++) {
        if (stock[i] < 5)
            console.log(stock[i]);
    }
}

function ejercicio19() {
    let tareas = [];

    let nuevaTarea = prompt("Introduce una nueva tarea: ");

    while (nuevaTarea.toLowerCase() !== "fin") {
        tareas.push(nuevaTarea);
        nuevaTarea = prompt("Introduce una nueva tarea: ");
    }

    console.log("Lista de tareas:");
    for (let i = 0; i < tareas.length; i++)
        console.log(`Tarea ${i + 1}: ${tareas[i]}`);
}

function ejercicio20() {
    const notas = [3, 7, 9, 4, 5, 10, 6];
    let suspensos = 0, aprobados = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < 5)
            suspensos++;
        else
            aprobados++;
    }

    console.log(`Aprobados: ${aprobados}`);
    console.log(`Suspensos: ${suspensos}`);
}