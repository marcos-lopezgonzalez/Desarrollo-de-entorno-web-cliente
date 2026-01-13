/* EJERCICIO 2
Objetivo:
- Cargar usuarios desde la API y pintarlos en <ul>.
- Mientras carga: estado "Cargando..."
- Al terminar: estado "Usuarios cargados: X"

API:
https://jsonplaceholder.typicode.com/users
*/

const btn = document.getElementById("btn");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

function pintarUsuarios(usuarios) {
  // TODO: vacía la lista
  // TODO: crea <li> por cada usuario con su nombre
}

async function cargarUsuarios() {
  lista.innerHTML = "";
  estado.textContent = "Cargando...";
  // TODO 1: fetch
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // TODO 2: response.ok + throw
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    // TODO 3: json
    const usuarios = await response.json();
    // TODO 4: pintarUsuarios
    for (let i = 0; i < usuarios.length; i++) {
      let li = document.createElement("li");
      li.textContent = usuarios[i].name;
      lista.appendChild(li);
    }
    estado.textContent = "Usuarios cargados";
    // TODO 5: estado final con total
  }
  catch (error) {
    console.error("ERROR: " + error);
    estado.textContent = "Error al cargar usuarios";
  }
}

btn.addEventListener("click", function () {
  cargarUsuarios();
});
