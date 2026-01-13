// EJERCICIO: Notas rápidas con LocalStorage (versión alumno)
//
// OBJETIVO:
// - Guardar una nota escrita por el usuario
// - Recuperarla al cargar la página
// - Comprobar la persistencia con LocalStorage
//
// REGLAS:
// - No modificar el HTML
// - Trabajar solo en este archivo
// - localStorage solo guarda strings
//
// CLAVE a usar en localStorage:
const CLAVE_NOTA = "notaUsuario";

// 1) Leer la nota al cargar la página
// TODO: Lee la nota desde localStorage y colócala en el textarea
let nota = JSON.parse(localStorage.getItem("nota"));

// 2) Referencias al DOM
// TODO: Obtén el textarea, el botón y el párrafo de estado
const textAreaNota = document.getElementById("nota");
const guardarBtn = document.getElementById("guardarBtn");
const pEstado = document.getElementById("estado");

// 3) Guardar la nota
// - Al pulsar el botón:
//   - Lee el contenido del textarea
//   - Guárdalo en localStorage
//   - Muestra un mensaje de confirmación
// TODO: Implementa la lógica
guardarBtn.addEventListener("click", function () {
  let nuevaNota = textAreaNota.value;

  let notas = JSON.parse(localStorage.getItem("notas")) ?? [];
  notas = [...notas, nuevaNota];
  localStorage.setItem("notas", JSON.stringify(notas));
  mostrarNotas();
});

function mostrarNotas() {
  pEstado.textContent = "";
  let notas = JSON.parse(localStorage.getItem("notas")) ?? [];

  console.log(notas);

  if (notas.length === 0) {
    pEstado.textContent = "No hay notas";
    return;
  }

  for (let i = 0; i < notas.length; i++) {
    pEstado.textContent += ` ${notas[i]}`;
  }
}

// 4) Pista para comprobar
// - Recarga la página
// - Abre Application → Local Storage
// - Comprueba la clave "notaUsuario"
mostrarNotas();
