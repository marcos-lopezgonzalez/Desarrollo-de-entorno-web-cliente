/*
Nombre: Marcos López González
Fecha: 25/09/2025
Asignatura: Desarrollo web en entorno cliente
*/
function ejercicio01() {
  let edad = prompt("Introduce tu edad: ");
  alert(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad");
}

function ejercicio02() {
  let numero = prompt("Introduce un número: ");
  alert(numero > 0 ? "El número es positivo" : "El número es negativo o cero");
}

function ejercicio03() {
  let password = prompt("Introduce una contraseña: ");
  alert(password == "abc123" ? "Acceso permitido" : "Acceso denegado");
}

function ejercicio04() {
  let parImpar = prompt("Introduce un número: ");
  alert(parImpar % 2 == 0 ? "El número es par" : "El número es impar");
}

function ejercicio05() {
  let num1 = prompt("Introduce el primer número: ");
  let num2 = prompt("Introduce el segundo número: ");
  alert(
    num1 > num2
      ? `${num1} es mayor`
      : num1 < num2
        ? `${num2} es mayor`
        : "Los números son iguales"
  );
}

function ejercicio06() {
  let nota = prompt("Escribe tu nota");
  alert(nota < 5 ? "Has supendido" : "Has aprobado");
}

function ejercicio07() {
  let nota = prompt("Escribe tu nota");

  if (nota < 5) {
    alert("Estás suspenso");
  } else if (nota < 7) {
    alert("Has aprobado con un Bien");
  } else if (nota < 9) {
    alert("Has aprobado con un Notable");
  } else if (nota <= 10) {
    alert("Has aprobado con un Sobresaliente");
  } else {
    alert("Nota no válida");
  }
}

function ejercicio08() {
  let dia = prompt("Escribe un número dle 1 al 7");
  switch (dia) {
    case "1":
      alert(`${dia}: Lunes`);
      break;
    case "2":
      alert(`${dia}: Martes`);
      break;
    case "3":
      alert(`${dia}: Miércoles`);
      break;
    case "4":
      alert(`${dia}: Jueves`);
      break;
    case "5":
      alert(`${dia}: Viernes`);
      break;
    case "6":
      alert(`${dia}: Sábado`);
      break;
    case "7":
      alert(`${dia}: Domingo`);
      break;
    default:
      alert("Día no válido");
      break;
  }
}

function ejercicio09() {
  let num1 = prompt("Escribe el 1er número: ");
  let num2 = prompt("Escribe el 2do número: ");
  let num3 = prompt("Escribe el 3er número: ");

  if (num1 > num2 && num1 > num3) {
    alert(`${num1} es el mayor`);
  } else if (num2 > num1 && num2 > num3) {
    alert(`${num2} es el mayor`);
  } else if (num3 > num1 && num3 > num2) {
    alert(`${num3} es el mayor`);
  } else if (num1 === num2 && num1 > num3) {
    alert(`${num1} y ${num2} son los mayores`);
  } else if (num1 === num3 && num1 > num2) {
    alert(`${num1} y ${num3} son los mayores`);
  } else if (num2 === num3 && num2 > num1) {
    alert(`${num2} y ${num3} son los mayores`);
  } else if (num1 === num2 && num2 === num3) {
    alert(`Los tres números son iguales`);
  }
}

function ejercicio10() {
  let edad = prompt("Introduce tu edad:");
  alert(edad >= 18 ? "Mayor de edad" : "Menor de edad");
}

function ejercicio11() {
  let num = prompt("Escribe un numero");
  alert(num % 2 == 0 ? "Par" : "Impar");
}

function ejercicio12() {
  let precio = Number(prompt("Introduce el precio"));
  alert(precio > 100 ? "Precio con 10% descuento: " + (precio - precio * 0.1) : `Precio se queda igual: ${precio}`);
}

function ejercicio13() {
  let cadena1 = prompt("Escribe una cadena: ");
  let cadena2 = prompt("Escribe otra cadena: ");
  alert(cadena1 === cadena2 ? "Son iguales" : "Son distintas");
}

function ejercicio14() {
  let hora = prompt("Escribe una hora (0-23)");
  if (0 <= hora && hora < 12) {
    alert("Buenos días");
  } else if (12 <= hora && hora < 19) {
    alert("Buenas tardes");
  } else if (19 <= hora && hora < 24) {
    alert("Buenas noches");
  } else {
    alert("Hora no válida");
  }
}

function ejercicio15() {
  let edad = prompt("Introduce tu edad:");
  let login = prompt("Introduce tu login:");

  if (edad >= 18 && login == "admin") {
    alert("Acceso especial");
  } else if (edad >= 18) {
    alert("Acceso normal");
  } else {
    alert("Acceso denegado");
  }
}

function ejercicio16() {
  let num = prompt("Introduce un número");
  alert(1 <= num && num <= 10 ? "Dentro de rango" : "Fuera de rango");
}

function ejercicio17() {
  let edad = prompt("Introduce tu edad:");
  alert(edad < 12 ? "Entrada gratuita" : edad <= 64 ? "Entrada normal" : "Entrada reducida");
}

function ejercicio18() {
  let clima = prompt("Escribe sol o lluvia");
  alert(clima == "sol" ? "Puedes salir a pasear" : clima == "lluvia" ? "Mejor lleva paraguas" : "No entiendo la respuesta");
}

function ejercicio19() {
  let nombre = prompt("Escribe tu nombre:");
  let apellidos = prompt("Escribe tus apellidos:");
  let salario = Number(prompt("Escribe tu salario:"));
  let edad = Number(prompt("Escribe tu edad:"));

  if (1000 < salario && salario < 2000) {
    if (edad > 45) {
      salario += salario*0.03
    } else {
      salario += salario*0.1
    }
  } else if (salario < 1000) {
    if (edad < 30) {
      salario = 1100;
    } else if (30 < edad && edad < 45) {
      salario += salario*0.03;
    }  else {
      salario += salario*0.15;
    }
  }
}