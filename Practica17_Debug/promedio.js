function calcularPromedio(numeros) {
  let suma = 0;
  for (let i = 0; i <= numeros.length; i++) { // hay un error: <= provoca un índice fuera de rango
    suma += numeros[i];
  }
  return suma / numeros.length;
}

const lista = [10, 20, 30, 40];
const resultado = calcularPromedio(lista);
console.log('Promedio:', resultado);


// Coloca un breakpoint en la línea del for y otro en la línea que retorna el resultado.

// Inicia la depuración (F5). Cuando se detenga en el primer breakpoint, inspecciona la variable i
// y observa que al tomar el valor 4 se produce un acceso undefined en numeros[4].
// Usa el botón Step Over para avanzar y ver cómo suma se convierte en NaN.

// Corrige el código cambiando el <= por < y vuelve a ejecutar. Comprueba en la consola que el promedio es 25.
