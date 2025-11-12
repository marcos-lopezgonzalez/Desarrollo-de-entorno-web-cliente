let botonAddTarea = document.getElementById("btnAdd");
let botonBorrarTareas = document.getElementById("btnBorrarTodas");
let inputTarea = document.getElementById("txtTarea");
let error = document.getElementById("error");
let listaTareas = document.getElementById("listaTareas");
let contadorTareas = document.getElementById("contador");

botonAddTarea.addEventListener("click", function () {
    error.textContent = "";
    let nuevaTarea = inputTarea.value.trim();
    if (nuevaTarea === "") {
        error.textContent = "ERROR: No se puede añadir una tarea vacía.";
        return;
    } else {
        let liTarea = document.createElement("li");
        liTarea.textContent = nuevaTarea;
        liTarea.addEventListener("click", function () {
            if (liTarea.style.textDecoration !== "line-through")
                liTarea.style.textDecoration = "line-through";
            else
                liTarea.style.textDecoration = "none";
        })
        listaTareas.appendChild(liTarea);
        contadorTareas.textContent++;
    }
});

botonBorrarTareas.addEventListener("click", function () {
    let tamañoLista = listaTareas.childElementCount;
    for (let i = 0; i < tamañoLista; i++) {
        listaTareas.lastElementChild.remove();
    }
    contadorTareas.textContent = 0;
});