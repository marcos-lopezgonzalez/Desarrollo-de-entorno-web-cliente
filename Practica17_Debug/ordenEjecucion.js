function a() {
  b();
}
function b() {
  c();
}
function c() {
  console.log('Final de la cadena');
}
a();



// Añade un breakpoint en la función c.

// Ejecuta la depuración. Cuando se detenga, mira la sección Call Stack: verás las funciones a, b y c.
// Haz clic en cada marco para ver el punto exacto donde se realizó la llamada.

// Usa los botones Step Out y Step Into para salir y entrar en funciones y observar cómo cambia la pila【199611865341723†L495-L526】.
