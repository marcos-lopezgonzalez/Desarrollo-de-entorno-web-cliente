// EJERCICIO: Preferencias de usuario con LocalStorage
// Trabaja únicamente {en este archivo.
//
// OBJETIVO:
// - Leer una preferencia desde localStorage al cargar la página
// - Guardar cambios cuando el usuario interactúa
// - Comprobar que la preferencia se mantiene al recargar

// PISTA GENERAL:
// localStorage guarda STRINGS, no booleanos reales.

const modoBtn = document.getElementById("modoBtn");
const pEstado = document.getElementById("estado");

let modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"));

if (modoOscuro === null) {
  modoOscuro = false; // modo claro por defecto
}

function aplicarModo() {
  if (modoOscuro) {
    document.body.classList.add("oscuro");
    pEstado.textContent = "Modo Oscuro";
  } else {
    document.body.classList.remove("oscuro");
    pEstado.textContent = "Modo Normal";
  }
  localStorage.setItem("modoOscuro", JSON.stringify(modoOscuro));
}

function alternarModo() {
  modoOscuro = !modoOscuro;
  aplicarModo();
}

modoBtn.addEventListener("click", alternarModo);

aplicarModo();
