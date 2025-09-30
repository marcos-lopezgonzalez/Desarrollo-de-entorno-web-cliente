function ejercicio01() {
    let user = prompt("Introduce el username: ");
    while (user !== "Admin") {
        if (user === null) {
            console.log("Operacion cancelada");
            return;
        }
        user = prompt("Introduce el username otra vez: ")
        console.log("No te conozco");
    }

    let password = prompt("Introduce la contraseña: ");
    while (password !== "TheMaster") {
        if (password === null) {
            console.log("Operacion cancelada");
            return;
        }
        password = prompt("Introduce la contraseña otra vez: ");
        console.log("Incorrecto");
    }

    console.log("Sesion iniciada.")
}

function ejercicio02() {
    let user = prompt("Introduce el username: ");
    let i = 1;
    while (user !== "Admin" && i < 3) {
        if (user === null) {
            console.log("Operacion cancelada");
            return;
        }
        user = prompt("Introduce el username otra vez: ")
        console.log("No te conozco");
        i++;
        console.log(`Te quedan ${3-i+1} intentos`);
        if (i == 3) {
            console.log("Te has quedado sin intentos")
            return;
        }
    }

    i = 1;
    let password = prompt("Introduce la contraseña: ");
    while (password !== "TheMaster" && i < 3) {
        if (password === null) {
            console.log("Operacion cancelada");
            return;
        }
        password = prompt("Introduce la contraseña otra vez: ");
        console.log("Incorrecto");
        i++;
        console.log(`Te quedan ${3-i+1} intentos`);
        if (i == 3) {
            console.log("Te has quedado sin intentos")
            return;
        }
    }

    console.log("Sesion iniciada.")
}

function ejercicio03() {
    let passwords = ["TheMaster", "Admin123", "Invitado"];
    let password = prompt("Introduce la contraseña: ");
    let i = 0;


    do {
        if (password === null) {
            console.log("Operacion cancelada");
            return;
        }

        if (password === passwords[i]) {
            console.log("Bienvenido");
        } else {
            i++;
        }

        if (i == passwords.length) {
            password = prompt("ERROR. Introduce la contraseña de nuevo: ");
            i = 0;
        }
        //console.log(i);
    } while (passwords[i] !== password && i < passwords.length)
}

function ejercicio04() {

}

function ejercicio05() {

}