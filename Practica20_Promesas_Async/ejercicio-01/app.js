/* EJERCICIO 1
Objetivo (con async/await):
1) Pedir usuarios a: https://jsonplaceholder.typicode.com/users
2) Mostrar en consola:
   - total de usuarios
   - nombre del primer usuario

Pistas:
- fetch devuelve una PROMESA
- response.json() devuelve OTRA PROMESA
- Comprueba response.ok y usa throw si es false
*/

const btn = document.getElementById("btn");
const estado = document.getElementById("estado");

async function cargarUsuarios() {
  estado.textContent = "Cargando...";

  try {
    // TODO 1: haz fetch a la URL
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // TODO 2: comprueba response.ok
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    // TODO 3: convierte a JSON
    const usuarios = await response.json();
    // TODO 4: console.log con total y primer nombre
    console.log("Total usuarios: " + usuarios.length);
    for (let i = 0; i < usuarios.length; i++) {
      console.log("Nombre: " + usuarios[i].name);
    }
    // TODO 5: actualiza estado a "Listo"
    estado.textContent = "Usuarios cargados"
  } catch (error) {
    estado.textContent = "Error al cargar usuarios";
    console.error("ERROR: " + error);
  }
}

btn.addEventListener("click", function () {
  cargarUsuarios();
});
