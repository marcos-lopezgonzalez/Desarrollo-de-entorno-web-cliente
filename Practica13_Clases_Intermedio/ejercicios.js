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
            return "Precio descuento: " + parseFloat(this.precioBase * porcentaje / 100);
        }

        mostrar() {
            return `Nombre: ${this.nombre} Precio base: ${this.precioBase}` + this.precioConIVA() + this.aplicarDescuento(50);
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
        for (let i = 0; i < productos.length; i++) {
            result.textContent += productos[i].mostrar();
            result.textContent += "\n";
        }
    });
}