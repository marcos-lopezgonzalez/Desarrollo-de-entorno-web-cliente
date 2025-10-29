function mostrar(texto, idSalida) {
    document.getElementById(idSalida).textContent += texto + "\n";
}

function limpiar(idSalida) {
    const salida = document.getElementById(idSalida);
    if (salida) salida.textContent = "";
}

function ejercicio1() {
    class Empleado {
        constructor(nombre, puesto, salario) {
            this.nombre = nombre;
            this.puesto = puesto;
            this.salario = salario;
        }

        mostrarDatos() {
            return mostrar((`Nombre: ${this.nombre} || Puesto: ${this.puesto} || Salario: ${this.salario}€`), "salida1");
        }
    }

    const empleados = [
        new Empleado("Marcos", "Programador", 1200),
        new Empleado("Pepito", "Profesor", 1300),
        new Empleado("Joseba Etxeberria", "Desempleado", 0)
    ]

    for (let i = 0; i < empleados.length; i++) {
        empleados[i].mostrarDatos();
    }
}

function ejercicio2() {
    class Proyecto {
        constructor(nombre, cliente, estado) {
            this.nombre = nombre;
            this.cliente = cliente;
            this.estado = estado;
        }

        actualizarEstado() {
            if (this.estado === "En progreso")
                this.estado = "Finalizado";
        }

        mostrarDatos() {
            return mostrar((`Nombre: ${this.nombre} || Cliente: ${this.cliente} || Estado: ${this.estado}`), "salida2");
        }
    }

    const proyectos = [
        new Proyecto("Proyecto 1", "BBVA", "En progreso"),
        new Proyecto("Proyecto X", "Mercadona", "Finalizado"),
        new Proyecto("Proyecto Epstein", "TOP SECRET", "En progreso"),
        new Proyecto("Proyecto 4", "Infinito", "En progreso"),
    ]

    for (let i = 0; i < proyectos.length; i++) {
        proyectos[i].mostrarDatos();
    }

    mostrar("Actualizando proyectos.....", "salida2");
    proyectos[0].actualizarEstado();
    proyectos[2].actualizarEstado();

    for (let i = 0; i < proyectos.length; i++) {
        proyectos[i].mostrarDatos();
    }
}

function ejercicio3() {
    class Producto {
        constructor(nombre, precio, stock) {
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock;
        }

        aplicarDescuento(porcentaje) {
            this.precio -= this.precio * porcentaje / 100;
        }

        mostrarDatos() {
            return mostrar((`Nombre: ${this.nombre} || Precio: ` + this.precio.toFixed(2) + `€ || Stock: ${this.stock}`), "salida3");
        }
    }

    const productos = [
        new Producto("Monitor", 50, 20),
        new Producto("Teclado", 25, 12),
        new Producto("Raton", 14.99, 23),
        new Producto("Alfombrilla", 5.99, 4),
    ]

    for (let i = 0; i < productos.length; i++) {
        productos[i].mostrarDatos();
    }

    mostrar("Actualizando descuentos.....", "salida3");
    productos[2].aplicarDescuento(50);
    productos[3].aplicarDescuento(75);

    for (let i = 0; i < productos.length; i++) {
        productos[i].mostrarDatos();
    }
}

function ejercicio4() {
    class Persona {
        constructor(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
    }

    class Empleado extends Persona {
        constructor(nombre, edad, puesto, salario) {
            super(nombre, edad);
            this.puesto = puesto;
            this.salario = salario;
        }

        presentar() {
            return mostrar((`Nombre: ${this.nombre} || Edad: ${this.edad} || Puesto: ${this.puesto} || Salario: ${this.salario}`), "salida4");
        }
    }

    const empleados = [
        new Empleado("Pepito", 45, "Programador", 1200),
        new Empleado("Juan", 61, "Operario", 1100)
    ]

    for (let i = 0; i < empleados.length; i++) {
        empleados[i].presentar();
    }
}

function ejercicio5() {
    class Venta {
        constructor(producto, cantidad, precio) {
            this.producto = producto;
            this.cantidad = cantidad;
            this.precio = precio;
            this.total = 0;
        }

        calcularTotal() {
            this.total = parseFloat((this.cantidad * this.precio).toFixed(2));
        }
    }

    const ventas = [
        new Venta("Monitor", 20, 15.99),
        new Venta("Teclado", 12, 8.99),
        new Venta("Raton", 23, 5.99),
        new Venta("Alfombrilla", 4, 3.99)
    ]
    

    let totalVentas = 0;
    for (let i = 0; i < ventas.length; i++) {
        ventas[i].calcularTotal();
        totalVentas += parseFloat(ventas[i].total);
    }

    return mostrar("Total: " + totalVentas.toFixed(2), "salida5");
}

function ejercicio6() {
    class Usuario {
        constructor(nombre, correo, rol) {
            this.nombre = nombre;
            this.correo = correo;
            this.rol = rol;
        }

        mostrarRol() {
            return mostrar(`Permisos del usuario ${this.nombre}: ${this.rol}`, "salida6");
        }
    }

    const usuarios = [
        new Usuario("Marcos", "marcos@gmail.com", "admin"),
        new Usuario("Enigma", "enigma@gmail.com", "editor"),
        new Usuario("Visitante", "visitante@gmail.com", "visitante")
    ]

    for (let i = 0; i < usuarios.length; i++) {
        usuarios[i].mostrarRol();
    }
}

function ejercicio7() {
    class Tarea {
        constructor(descripcion, estado) {
            this.descripcion = descripcion;
            this.estado = estado;
        }

        completar() {
            if (this.estado === "pendiente")
                this.estado = "completada";
        }

        mostrarEstado() {
            return mostrar(`El estado de la tarea ${this.descripcion} es: ${this.estado}`, "salida7");
        }
    }

    const tareas = [
        new Tarea("Ejercicios cliente", "completada"),
        new Tarea("Estudiar entorno servidor", "pendiente"),
        new Tarea("Estudiar despliegues", "pendiente")
    ]

    for (let i = 0; i < tareas.length; i++) {
        tareas[i].mostrarEstado();
    }

    mostrar("--------------------------", "salida7");
    mostrar("   ACTUALIZANDO TAREAS", "salida7");
    mostrar("--------------------------", "salida7");
    tareas[1].completar();

    for (let i = 0; i < tareas.length; i++) {
        tareas[i].mostrarEstado();
    }
}