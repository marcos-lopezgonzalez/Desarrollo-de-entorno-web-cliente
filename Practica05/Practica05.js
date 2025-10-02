function ejercicio01_1() {
    let animales = ["perro", "gato", "pez"];
    animales.push("vaca");
    animales.unshift("armadillo");
    animales.pop();
    animales.shift();

    animales.forEach(function (animal) {
        console.log(animal);
    });
    console.log("Total de animales: " + animales.length);
}

function ejercicio02_1() {
    let colores = ["rojo", "verde", "azul", "amarillo"];
    console.log(colores[0] + " " + colores[colores.length - 1]);
    colores.push("negro");
    console.log(colores[colores.length - 1]);

    colores.forEach(function (color) {
        console.log(color);
    });
}

function ejercicio03_1() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    numeros.push(6, 7);

    numeros.forEach(function (numero) {
        if (numero % 2 == 0)
            console.log(numero);
    });
    console.log("Total: " + numeros.length);
}

function ejercicio04_1() {
    let nombres = ["Antonio", "Moha", "Alejandra"];
    nombres.unshift("Marcos");

    nombres.forEach(function (nombre) {
        console.log(`Hola ${nombre}`);
    });

    nombres.pop();
    console.log("Nombres: ", nombres);
}

// Plantilla base
/*
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
    }
    //console.log("Array inicial:", numeros);
*/

function ejercicio01_2() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
        console.log(`${i}: ${numeros[i]}`);
    }
    //console.log("Array inicial:", numeros);

    console.log("Total: " + numeros.length);
}

function ejercicio02_2() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
    }
    //console.log("Array inicial:", numeros);

    numeros.unshift(-100);
    numeros.push(100);

    numeros.forEach(function (numero) {
        console.log(numero);
    });
}

function ejercicio03_2() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
    }
    //console.log("Array inicial:", numeros);

    console.log("Eliminando: " + numeros.pop());
    console.log("Eliminando: " + numeros.shift());

    console.log("Numeros: ", numeros);
    console.log("Longitud: " + numeros.length);
}

function ejercicio04_2() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
    }
    //console.log("Array inicial:", numeros);

    let index = Number(prompt("Introduce un indice: "));
    let inputNumber = Number(prompt("Introduce un valor: "));

    console.log("Antes del cambio: ", numeros);
    numeros[index] = inputNumber;
    console.log("Después del cambio: ", numeros)
}

function ejercicio05() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
    }
    //console.log("Array inicial:", numeros);

    let sumaTotal = 0;

    numeros.forEach(function (numero) {
        sumaTotal += numero;
    })

    let media = sumaTotal / numeros.length;
    console.log(`Suma Total: ${sumaTotal} Media: ${media}`);
}

function ejercicio06() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
    }
    //console.log("Array inicial:", numeros);

    let pares = impares = 0;

    numeros.forEach(function (numero) {
        if (numero % 2 == 0)
            pares++;
        else
            impares++;
    });

    console.log(`Pares: ${pares} Impares: ${impares}`);
}

function ejercicio07() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
    }
    //console.log("Array inicial:", numeros);

    let menor = mayor = 0;

    numeros.forEach(function (numero) {
        if (numero < menor)
            menor = numero;
        else if (mayor < numero)
            mayor = numero;
    });

    console.log(`Mínimo: ${menor} Máximo: ${mayor}`);
}

function ejercicio08() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
    }
    //console.log("Array inicial:", numeros);

    let buscarNumero = Number(prompt("Introduce un número a buscar"));
    let i = 0, numeroEncontrado = false;

    while (i < numeros.length && !numeroEncontrado) {
        if (buscarNumero == numeros[i]) {
            numeroEncontrado = true;
            console.log(`Número encontrado en el índice: ${i}`);
        }
        i++;
    }

    if (!numeroEncontrado)
        console.log("No se ha encontrado");
}

function ejercicio09() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
    }
    //console.log("Array inicial:", numeros);

    let dobles = [];
    for (let i = 0; i < numeros.length; i++) {
        dobles[i] = numeros[i] * 2;
    }

    console.log("Original: ", numeros);
    console.log("Dobles: ", dobles);
}

function ejercicio10() {
    const n = Number(prompt("¿Cuántos números vas a introducir?"));
    const numeros = [];
    for (let i = 0; i < n; i++) {
        const valor = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(valor);
    }
    //console.log("Array inicial:", numeros);

    let mayoresQue10 = [];
    for (let i = 0; i < numeros.length; i++) {
        if(10 < numeros[i])
            mayoresQue10.push(numeros[i]);
    }

    console.log("Array inicial:", numeros);
    console.log("Array Mayores que 10: ", mayoresQue10);
}