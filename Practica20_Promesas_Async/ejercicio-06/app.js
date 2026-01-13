/* EJERCICIO 6
Objetivo (caso real):
- Botón "Cargar datos"
- Mientras carga: desactivar botón + estado "Cargando..."
- Al terminar: mostrar nombre y email de cada usuario
- Si falla: mensaje amigable en pantalla y detalle en consola

Extra opcional:
- volver a activar el botón al final (tanto si va bien como si va mal)
*/

const btn = document.getElementById("btn");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

function pintar(usuarios) {
  lista.innerHTML = "";
  for (let i = 0; i < usuarios.length; i++) {
    const li = document.createElement("li");
    li.textContent = usuarios[i].name + " — " + usuarios[i].email;
    lista.appendChild(li);
  }
}

async function cargarDatos() {
  // TODO: btn.disabled = true
  btn.disabled = true;
  // TODO: estado = "Cargando..."
  estado.textContent = "Cargando...";
  // TODO: try/catch/finally (pista: finally se ejecuta siempre)
  // TODO: fetch + ok + json + pintar
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    const usuarios = await response.json();
    pintar(usuarios);
    estado.textContent = "Datos cargados";
  } catch (error) {
    console.error("ERROR: ") + error;
    estado.textContent = "Error al cargar los datos";
  } finally {
    btn.disabled = false;
  }
}

btn.addEventListener("click", function () {
  cargarDatos();
});
