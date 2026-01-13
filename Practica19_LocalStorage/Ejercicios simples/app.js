// EJ1
localStorage.setItem("ej1", "Ejercicio 1");

// EJ2
let ej2 = [1, 2, 3, 4, 5];
localStorage.setItem("ej2", JSON.stringify(ej2));
console.log(JSON.parse(localStorage.getItem("ej2")) || []);

// EJ3
let tareas = ["comprar", "sacar basura"];
localStorage.setItem("tareas", JSON.stringify(tareas));
tareas = JSON.parse(localStorage.getItem("tareas")) || [];
tareas = [...tareas, "Nueva tarea"];
localStorage.setItem("tareas", JSON.stringify(tareas));
console.log("tareas", JSON.parse(localStorage.getItem("tareas")));

// EJ4
localStorage.setItem("ej4", "Ejercicio 4");
localStorage.removeItem("ej4");
