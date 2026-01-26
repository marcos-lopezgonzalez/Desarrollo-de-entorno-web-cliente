// TODO: Los alumnos deben completar este código

// 1. Obtener referencias a los elementos HTML
const tareaInput = document.getElementById('tareaInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTareas');
const limpiarBtn = document.getElementById('limpiarBtn');

// 2. Función para cargar tareas desde LocalStorage
function cargarTareas() {
    // TODO: 
    // - Obtener las tareas del localStorage con la clave 'tareas'
    // - Si no hay tareas, devolver un array vacío
    // - Recuerda usar JSON.parse() para convertir el texto a array
    return JSON.parse(localStorage.getItem("tareas")) ?? [];
}

// 3. Función para guardar tareas en LocalStorage
function guardarTareas(tareas) {
    // TODO: 
    // - Convertir el array de tareas a texto con JSON.stringify()
    // - Guardar en localStorage con la clave 'tareas'
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

// 4. Función para mostrar las tareas en la página
function mostrarTareas() {
    // TODO:
    // - Limpiar la lista actual (listaTareas. innerHTML = '')
    // - Cargar las tareas
    // - Recorrer cada tarea y crear un elemento <li>
    // - Agregar un botón de eliminar a cada tarea
    listaTareas.innerHTML = "";
    const tareas = cargarTareas();
    console.log("Tareas", tareas);

    // const tareasHTML = tareas.map(tarea => {
    //     return `
    //     <li>${tarea}</li>
    // `;
    // }).join("");
    //
    // listaTareas.innerHTML = tareasHTML;

    for (let i = 0; i < tareas.length; i++) {
        let li = document.createElement("li");
        li.textContent = tareas[i];
        li.dataset.index = i;
        listaTareas.appendChild(li);
    }
}

// 5. Función para agregar una nueva tarea
function agregarTarea() {
    // TODO:
    // - Obtener el valor del input
    const tarea = tareaInput.value;
    // - Validar que no esté vacío
    if (tarea.trim() === "") {
        alert("Nombre de tarea vacía");
        tareaInput.value = "";
        return;
    }
    // - Cargar las tareas existentes
    const tareas = cargarTareas();
    // - Agregar la nueva tarea al array
    const tareasActualizadas = [...tareas, tarea];
    // - Guardar el array actualizado
    guardarTareas(tareasActualizadas);
    // - Mostrar las tareas
    mostrarTareas();
    // - Limpiar el input
    tareaInput.value = "";
}

// 6. Función para eliminar una tarea
function eliminarTarea(indice) {
    // TODO:
    // - Cargar las tareas
    const tareas = cargarTareas();
    // - Eliminar la tarea en el índice dado (usar splice)
    tareas.splice(indice, 1);
    // - Guardar las tareas actualizadas
    guardarTareas(tareas);
    // - Mostrar las tareas
    mostrarTareas();
}

// 7. Función para limpiar todas las tareas
function limpiarTodo() {
    // TODO:
    // - Usar localStorage.removeItem('tareas') o localStorage.clear()
    // - Mostrar las tareas (la lista quedará vacía)
    localStorage.removeItem("tareas");
    mostrarTareas();
}

// 8. Event Listeners
agregarBtn.addEventListener('click', agregarTarea);
tareaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') agregarTarea();
});
limpiarBtn.addEventListener('click', limpiarTodo);
listaTareas.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        const index = e.target.dataset.index;
        eliminarTarea(index);
    }
});

// 9. Cargar tareas al iniciar la página
mostrarTareas();