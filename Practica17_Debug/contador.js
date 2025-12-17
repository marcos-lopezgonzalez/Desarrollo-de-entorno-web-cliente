function cuentaRegresiva(inicio) {
  let contador = inicio;
  while (contador >= 0) {
    console.log('Contador:', contador);
    contador--;
  }
}

cuentaRegresiva(5);

// Añade un breakpoint condicional en la línea donde se imprime contador.
// En el cuadro de condición escribe contador === 2. La ejecución se detendrá únicamente cuando la variable valga 2