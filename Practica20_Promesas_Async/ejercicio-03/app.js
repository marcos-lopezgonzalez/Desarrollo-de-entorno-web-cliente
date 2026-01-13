/* EJERCICIO 3
Objetivo:
1) Traer usuarios
2) Filtrar: username que empiece por "C"
3) Pintar en pantalla (nombre + username)

Pistas:
- usuario.username[0] === "C" (o startsWith)
- usa filter
*/

const btn = document.getElementById("btn");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

function pintar(usuariosFiltrados) {
  lista.innerHTML = "";
  // TODO: vacía lista y pinta li con "nombre (username)"
  for (let i = 0; i < usuariosFiltrados.length; i++) {
    let li = document.createElement("li");
    li.textContent += "Nombre: " + usuariosFiltrados[i].name;
    li.textContent += " | ";
    li.textContent += "Username: " + usuariosFiltrados[i].username;
    lista.appendChild(li);
  }
}

async function cargarYFiltrar() {
  estado.textContent = "Cargando...";
  try {
    // TODO: fetch + ok + json
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("HTTP: " + response.status);
    }
    const usuarios = await response.json();
    // TODO: filtra
    const usuariosFiltrados = usuarios.filter((usuario) => usuario.name.startsWith("C"));
    // TODO: pinta
    pintar(usuariosFiltrados);
    // TODO: estado final: "Mostrados: X"
    estado.textContent = "Mostrados: " + usuariosFiltrados.length;
  } catch (error) {
    console.error("ERROR: " + error);
    estado.textContent = "Error al cargar usuarios";
  }
}

btn.addEventListener("click", function () {
  cargarYFiltrar();
});
