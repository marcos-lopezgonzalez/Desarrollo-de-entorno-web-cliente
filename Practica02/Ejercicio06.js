let nota = Number(prompt("Escribe una nota: "));
if (nota >= 5) {
    console.log("Has aprobado.")
} else {
    console.log("Has suspendido.")
}

let num1 = Number(prompt("Escribe un numero: "));

if (num1 < 0 ) {
    console.log("El numero es negativo");
} else if (num1 > 0) {
    console.log("El numero es positivo");
} else {
    console.log("El numero es 0");
}


let letra = prompt("Escribe una nota");
if (letra == 'a' || letra == 'e' || letra == 'i'  || letra == 'o'  || letra == 'u' ) {
    console.log("La letra es vocal");
} else {
    console.log("La letra es consonante");
}


let opcion = Number(prompt("Elige una opcion:\n" +
                    "1) Suma\n" +
                    "2) Resta\n" +
                    "3) Multiplica"));
let num2 = Number(prompt("Escribe el 1er numero: "));
let num3 = Number(prompt("Escribe el 3er numero: "));

if (opcion == 1) {
    console.log(num2 + num3);
} else if (opcion == 2) {
    console.log(num2 - num3);
} else if (opcion == 3) {
    console.log(num2 * num3);
} else {
    console.log("Opcion no valida");
}