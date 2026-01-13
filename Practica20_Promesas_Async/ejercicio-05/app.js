/* EJERCICIO 5
Objetivo:
1) Pedir usuario 1: https://jsonplaceholder.typicode.com/users/1
2) Pedir posts del usuario: https://jsonplaceholder.typicode.com/posts?userId=1
3) Mostrar:
   - Nombre del usuario en #nombre
   - 5 títulos de posts en #posts

Pistas:
- Usa await en dos fetch distintos (uno después del otro)
- Reutiliza una función comprobarOk(response)
*/

const btn = document.getElementById("btn");
const estado = document.getElementById("estado");
const nombre = document.getElementById("nombre");
const posts = document.getElementById("posts");

function comprobarOk(response) {
  // TODO: si !response.ok -> throw new Error("HTTP ...")
  if (!response.ok) {
    throw new Error("HTPP " + response.status);
  }
}

function pintarPosts(listaPosts) {
  posts.innerHTML = "";
  for (let i = 0; i < listaPosts.length; i++) {
    const li = document.createElement("li");
    li.textContent = listaPosts[i].title;
    posts.appendChild(li);
  }
}

async function cargar() {
  estado.textContent = "Cargando...";
  nombre.textContent = "";
  posts.innerHTML = "";

  try {
    // TODO: try/catch
    // TODO: fetch usuario, comprobarOk, json
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    comprobarOk(response);
    const usuario = await response.json();
    // TODO: fetch posts, comprobarOk, json
    const response2 = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    comprobarOk(response2);
    const posts = await response2.json();
    // TODO: quedarte con 5 (slice)
    const listaPosts = posts.slice(0,5);
    // TODO: pintar y estado final
    pintarPosts(listaPosts);
    estado.textContent = "Posts mostrados";
  } catch (error) {
    console.error("ERROR: " + error);
    estado.textContent = "Error al cargar los datos";
  }
}

btn.addEventListener("click", function () {
  cargar();
});
