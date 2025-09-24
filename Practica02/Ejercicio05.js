let num1 = prompt("Numero 1: ");
let num2 = prompt("Numero 2: ");

if (num1 == num2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}

if (num1 === num2) {
    console.log("Son iguales");
} else {
    console.log("No son iguales");
}


let edad = Number(prompt("Edad"));
console.log(edad>=18);



let num3 = Number(prompt("Numero 1: "));
let num4 = Number(prompt("Numero 2: "));
if (num3 > num4) {
    console.log(`${num3} es mayor que ${num4}`);
} else if (num4 > num3) {
    console.log(`${num4} es mayor que ${num3}`);
} else {
    console.log("Los números son iguales");
}
