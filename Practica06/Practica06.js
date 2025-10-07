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
    let notas = [5, 7, 8, 4, 10];
    let total = 0;

    for (let i = 0; i < notas.length; i++) {
        total += notas[i];
    }

    console.log(`Media: ${total / notas.length}`);
}
