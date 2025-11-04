function ejercicio01() {
    class Contador {
        constructor(valor, paso, maximo) {
            this.valor = valor;
            this.paso = paso;
            this.maximo = maximo;
        }

        incrementar() {
            this.valor += this.paso;
        }

        decrementar() {
            this.valor -= this.paso;
        }

        reset() {
            this.valor = 0;
        }
    }

    let contador = new Contador(0, 0, 0);

    let subir = document.getElementById("subir");
    let bajar = document.getElementById("bajar");
    let reset = document.getElementById("reset");
    let numero = document.getElementById("ejercicio01");
    let paso = document.getElementById("paso");
    let maximo = document.getElementById("maximo");

    subir.addEventListener("click", function () {
        contador.valor = parseInt(numero.textContent);
        contador.paso = parseInt(paso.value);
        contador.maximo = parseInt(maximo.value);

        if (contador.valor + contador.paso < contador.maximo)
            numero.textContent = parseInt(numero.textContent) + parseInt(contador.paso);
    });

    bajar.addEventListener("click", function () {
        contador.valor = parseInt(numero.textContent);
        contador.paso = parseInt(paso.value);

        if (contador.valor - contador.paso > 0)
            numero.textContent = parseInt(numero.textContent) - parseInt(contador.paso);
    });

    reset.addEventListener("click", function () {
        numero.textContent = 0;
    })
}

function ejercicio02() {
    class Validador {
        constructor(nombre, email, mensaje) {
            this.nombre = nombre;
            this.email = email;
            this.mensaje = mensaje;
        }

        esObligatorio() {
            if (this.nombre.trim() === "")
                return false;
            if (this.email.trim() === "")
                return false;
            if (this.mensaje.trim() === "")
                return false;

            return true;
        }

        esEmail() {
            let splitEmail = this.email.split("@");
            //Comprobar que tiene @
            if (splitEmail.length === 1)
                return false;
            else {
                //Comprobar el dominio
                let splitDominio = splitEmail[1].split(".");
                //Si no tiene dominio
                if (splitDominio.length === 1)
                    return false;
                //Si tiene dominio vacio
                else if (splitDominio[1].length === 0)
                    return false;
            }
            return true;
        }

        validarContacto() {
            if (!this.esObligatorio())
                return "Completa todos los campos...";
            if (!this.esEmail())
                return "Email no válido";
            return true;
        }
    }

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");
    let enviar = document.getElementById("enviar");
    let result = document.getElementById("ejercicio02");

    enviar.addEventListener("click", function () {
        result.textContent = "";
        let validador = new Validador(nombre.value, email.value, mensaje.value);

        if (validador.validarContacto() === true)
            result.textContent = "OK";
        else {
            result.textContent += validador.validarContacto();
        }
    })
}

function ejercicio03() {
    const IVA = 21;
    class Producto {
        constructor(nombre, precioBase) {
            this.nombre = nombre;
            this.precioBase = precioBase;
        }

        precioConIVA() {
            return "Precio con IVA: " + parseFloat(this.precioBase * IVA / 100).toFixed(2);
        }

        aplicarDescuento(porcentaje) {
            return "Precio descuento: " + parseFloat(this.precioBase * porcentaje / 100).toFixed(2);
        }

        mostrar() {
            return `Nombre: ${this.nombre} || Precio base: ${this.precioBase}` + " || " + this.precioConIVA() + " || " + this.aplicarDescuento(50);
        }
    }

    const productos = [
        new Producto("Monitor", 23.99),
        new Producto("Teclado", 14.99),
        new Producto("Raton", 8.99),
        new Producto("Alfombrilla", 4.99)
    ]

    let mostrar = document.getElementById("mostrar");
    let result = document.getElementById("ejercicio03");
    mostrar.addEventListener("click", function () {
        result.textContent = "";
        for (let i = 0; i < productos.length; i++) {
            result.textContent += productos[i].mostrar();
            result.textContent += "\n";
        }
    });
}

function ejercicio04() {
    class Alumno {
        constructor(nombre, notas) {
            this.nombre = nombre;
            this.notas = notas;
        }

        agregarNota(nota) {
            if (nota < 0 || 10 < nota) {
                alert("Nota no válida");
                return;
            }
            this.notas.push(nota);
        }

        media() {
            let media = 0;
            for (let i = 0; i < this.notas.length; i++) {
                media += this.notas[i];
                console.log(i + " " + media);
            }
            media /= this.notas.length;
            return media.toFixed(2);
        }

        aprobado() {
            if (this.media() < 5)
                return false;
            return true;
        }
    }

    const alumnos = [
        new Alumno("Marcos", [8, 7, 9, 6]),
        new Alumno("Pepe", [5, 10, 8, 9]),
        new Alumno("Maria", [5, 4, 6, 5]),
        new Alumno("Julian", [5, 7, 9, 9])
    ]

    let result = document.getElementById("ejercicio04");
    mostrarDatos();

    function mostrarDatos() {
        result.textContent = "";
        for (let i = 0; i < alumnos.length; i++) {
            result.textContent += alumnos[i].nombre + " || ";
            result.textContent += "Notas: ";
            for (let j = 0; j < alumnos[i].notas.length; j++) {
                result.textContent += alumnos[i].notas[j] + " ";
            }
            result.textContent += " || ";
            result.textContent += "Media: " + alumnos[i].media();
            result.textContent += " || ";
            result.textContent += "Aprobado: " + (alumnos[i].aprobado() ? "Si" : "No");
            result.textContent += "\n";
        }
    }

    let boton = document.getElementById("añadirNota");
    boton.addEventListener("click", function () {
        let nuevaNota = parseFloat(document.getElementById("nuevaNota").value);
        let alumno = document.getElementById("nombres").value;
        alumnos[alumno].agregarNota(nuevaNota);
        mostrarDatos();
    })
}

function ejercicio05() {
    class Tarea {
        constructor(descripcion, estado) {
            this.descripcion = descripcion;
            this.estado = estado;
        }

        cambiarEstado() {
            if (this.estado)
                this.estado = false;
            else
                this.estado = true;
        }
    }

    class GestorTareas {
        constructor(tareas) {
            this.tareas = tareas;
        }

        agregar(tarea) {
            this.tareas.push(tarea);
        }

        eliminar() {
            this.tareas.pop();
        }

        listarPendientes() {
            let tareasPendientes = "";
            for (let i = 0; i < this.tareas.length; i++) {
                if (!this.tareas[i].estado)
                    tareasPendientes += this.tareas[i].descripcion + "\n";
            }

            if (tareasPendientes === "")
                return "No hay tareas pendientes...";
            else
                return tareasPendientes;
        }

        listarCompletadas() {
            let tareasCompletadas = "";
            for (let i = 0; i < this.tareas.length; i++) {
                if (this.tareas[i].estado)
                    tareasCompletadas += this.tareas[i].descripcion + "\n";
            }

            if (tareasCompletadas === "")
                return "No hay tareas completadas...";
            else
                return tareasCompletadas;
        }
    }

    const tareas = [
        new Tarea("Estudiar cliente (pff que pereza)", false),
        new Tarea("Estudiar despliegue (pff esto si que no)", false),
        new Tarea("Sacar la basura", false),
        new Tarea("Hacer la compra", true)
    ]

    const gestorTareas = new GestorTareas(tareas);

    let result = document.getElementById("ejercicio05");
    mostrarDatos();

    function mostrarDatos() {
        result.textContent = "";
        for (let i = 0; i < gestorTareas.tareas.length; i++) {
            result.textContent += "Tarea: " + gestorTareas.tareas[i].descripcion;
            result.textContent += " || ";
            result.textContent += "Estado: " + (gestorTareas.tareas[i].estado ? "Completada" : "No completada");
            result.textContent += "\n";
        }
    }

    let boton = document.getElementById("cambiarEstado");
    boton.addEventListener("click", function () {
        let tarea = document.getElementById("tareas").value;
        gestorTareas.tareas[tarea].cambiarEstado();
        mostrarDatos();
    })
}