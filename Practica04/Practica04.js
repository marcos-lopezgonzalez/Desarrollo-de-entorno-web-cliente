function ejercicio01() {
    let user = prompt("Introduce el username: ");

    while (user !== "Admin") {
        if (user === null) return console.log("Operacion cancelada");

        user = prompt("Introduce el username otra vez: ")
        console.log("No te conozco");
    }

    let password = prompt("Introduce la contraseña: ");

    while (password !== "TheMaster") {
        if (password === null) return console.log("Operacion cancelada");

        password = prompt("Introduce la contraseña otra vez: ");
        console.log("Incorrecto");
    }

    return console.log("Sesion iniciada.");
}

function ejercicio02() {
    let user, password;

    for (let i = 1; i <= 3; i++) {
        user = prompt("Introduce el username:");
        if (user === "Admin") break;
        if (user === null) return console.log("Operación cancelada");
        if (i === 3) return console.log("Te has quedado sin intentos.");
        console.log(`No te conozco. Te quedan ${3 - i} intentos`);
    }

    for (let i = 1; i <= 3; i++) {
        password = prompt("Introduce la contraseña:");
        if (password === "TheMaster") return console.log("Bienvenido");
        if (password === null) return console.log("Operación cancelada");
        if (i === 3) return console.log("Te has quedado sin intentos.");
        console.log(`Incorrecto. Te quedan ${3 - i} intentos`);
    }
}


function ejercicio03() {
    let passwords = ["TheMaster", "Admin123", "Invitado"];
    let password = prompt("Introduce la contraseña: ");

    while (password !== null && !passwords.includes(password))
        password = prompt("ERROR. Introduce la contraseña de nuevo: ");

    if (password === null)
        return console.log("Operacion cancelada");
    else
        return console.log("Bienvenido");
}


function ejercicio04() {
    let users = ["Admin", "Profesor", "Alumno"];
    let passwords = ["TheMaster", "Admin123", "Invitado"];

    let inputUser = prompt("Introduce el username: ");

    while (inputUser !== null && !users.includes(inputUser))
        inputUser = prompt("Incorrecto. Introduce otro username: ");

    if (inputUser === null) return console.log("Operación cancelada.");

    let password = prompt("Introduce la contraseña:");

    while (password !== null && !passwords.includes(password))
        password = prompt("Incorrecto. Introduce la contraseña otra vez:");

    if (password === null) return console.log("Operación cancelada");

    return console.log("Sesión iniciada.");
}


function ejercicio05() {
    let users = ["Admin", "Profesor", "Alumno"];
    let passwords = ["TheMaster", "Admin123", "Invitado"];

    let inputUser = prompt("Introduce el username: ");

    while (inputUser !== null && !users.includes(inputUser))
        inputUser = prompt("Usuario no válido. Introduce otro username: ");

    if (inputUser === null) return console.log("Operación cancelada");

    let intentos = 1;
    let password = prompt("Introduce la contraseña:");

    while (password !== null && !passwords.includes(password)) {
        console.log(`Intento ${intentos}: ${password}`);
        intentos++;
        password = prompt("Incorrecto. Introduce la contraseña otra vez:");
    }

    if (password === null) return console.log("Operación cancelada");

    return console.log(`Bienvenido, ${inputUser}!`);
}

function ejercicio06() {
    let user = "admin", password = "admin";
    let sesionIniciada = false;
    let opcion = prompt("Elige una opción: " +
        "\n1. Iniciar sesión" +
        "\n2. Cambiar contraseña" +
        "\n3. Salir");

    do {
        switch (opcion) {
            case "1":
                let inputUser = prompt("Introduce el username: ");
                let inputPassword = prompt("Introduce la contraseña: ");

                if (user === inputUser && password === inputPassword) {
                    sesionIniciada = true;
                    console.log("Sesión iniciada");
                } else
                    console.log("Error en las credenciales...");

                break;
            case "2":
                if (!sesionIniciada)
                    console.log("Inicia sesión primero...");
                else {
                    password = prompt("Introduce la NUEVA contraseña: ");
                    console.log("Contraseña cambiada con éxito. Vuelve a iniciar sesión.");
                    sesionIniciada = false;
                }

                break;
            case "3":
                console.log("Hasta luego");
                break;

            default:
                console.log("Opción no válida.");
                break;
        }

        if (opcion !== "3" && opcion !== null)
            opcion = prompt("Elige una opción: " +
                "\n1. Iniciar sesión" +
                "\n2. Cambiar contraseña" +
                "\n3. Salir");
    } while (opcion !== "3" && opcion !== null)

    return;
}