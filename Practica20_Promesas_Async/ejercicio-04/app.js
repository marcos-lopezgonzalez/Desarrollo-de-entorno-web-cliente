/* EJERCICIO 4
Objetivo:
- Manejar errores con try/catch
- Mostrar mensaje amigable en pantalla
- Mostrar mensaje técnico en consola

Pistas:
- response.ok puede ser false (404/500) y fetch NO entra en catch por eso.
- Si !response.ok: throw new Error("HTTP ...")
*/

const btn = document.getElementById("btn");
const romper = document.getElementById("romper");
const estado = document.getElementById("estado");
const lista = document.getElementById("lista");

function pintar(usuarios) {
  lista.innerHTML = "";
  for (let i = 0; i < usuarios.length; i++) {
    const li = document.createElement("li");
    li.textContent = usuarios[i].name;
    lista.appendChild(li);
  }
}

async function probarCarga() {
  estado.textContent = "Cargando...";
  lista.innerHTML = "";

  const urlBuena = "https://jsonplaceholder.typicode.com/users";
  const urlMala = "https://jsonplaceholder.typicode.com/usuarios"; // 404
  const url = romper.checked ? urlMala : urlBuena;

  try {
    // TODO: envuelve en try/catch
    // TODO: fetch(url)
    const response = await fetch(url);
    // TODO: if (!response.ok) throw new Error(...)
    if (!response.ok) {
      throw new Error("HTTP: " + response.status);
    }
    // TODO: json, pintar, estado final
    const usuarios = await response.json();
    // TODO (catch): estado "Error al cargar" y console.error con error.message
    estado.textContent = "Usuarios cargados";
  } catch (error) {
    console.error("ERROR: " + error);
    estado.textContent = "Error al cargar usuarios";
  }
}

btn.addEventListener("click", function () {
  probarCarga();
});
