console.log(Number(prompt("Pon un número: ")) + Number(prompt("Pon otro número: ")));

let num1 = Number(prompt("Pon un número: "));
let num2 = Number(prompt("Pon otro número: "));

let resta = num1-num2;
let multiplicacion = num1*num2;
let division = num1/num2;

console.log(`La resta es: ${resta}. La multiplicacion es: ${multiplicacion}. La división es: ${division}`);


let num3 = Number(prompt("Calcular el cuadrado y resto entre 3: "));
let cuadrado = num3**2;
let resto = num3%3;
console.log(`El cuadrado de este número es ${cuadrado} y su resto entre 3 es ${resto}`)


let precio = Number(prompt("Precio: "));
let uds = Number(prompt("Unidades: "));
let total = precio * uds;
total *= 1.21;

console.log(`El precio total es: ${total}`);