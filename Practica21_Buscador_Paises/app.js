const inputPais = document.getElementById("inputPais");
const btnBuscar = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

btnBuscar.addEventListener("click", () => {
    consultarPais(inputPais.value);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        consultarPais(inputPais.value);
    }
});


async function consultarPais(pais) {
    resultado.textContent = "Cargando...";

    if (!validarPais(pais)) {
        resultado.textContent = "Introduce un pais";
        return;
    }

    try {
        const response = await fetch("https://restcountries.com/v3.1/name/" + pais);
        if (!response.ok) {
            throw new Error("HTTP: " + response.status);
        }
        const data = await response.json();

        mostrarPais(data);
    } catch (error) {
        console.error("ERROR: " + error);
        resultado.textContent = "Error al cargar los datos...";
    } finally {
        inputPais.value = "";
    }
}

function validarPais(pais) {
    if (pais.trim() === "")
        return false;
    return true;
}

function mostrarPais(pais) {
    resultado.textContent = "Datos cargados";
    for (let i = 0; i < pais.length; i++) {
        let nombre = document.createElement("p");
        let bandera = document.createElement("img");
        let capital = document.createElement("p");
        let poblacion = document.createElement("p");
        let idiomas = document.createElement("ul");
        let region = document.createElement("p");
        let monedas = document.createElement("ul");

        nombre.textContent = pais[i].name.common;
        bandera.src = pais[i].flags.png;
        capital.textContent = pais[i].capital[0];
        poblacion.textContent = pais[i].population;

        // idiomas.textContent = pais[0].languages;
        idiomas.textContent = "Idiomas: ";
        let arrayIdiomas = pais[i].languages;
        for (const idioma in arrayIdiomas) {
            let li = document.createElement("li");
            li.textContent = `${arrayIdiomas[idioma]}`;
            idiomas.appendChild(li);
        }

        region.textContent = pais[i].region;

        resultado.appendChild(nombre);
        resultado.appendChild(bandera);
        resultado.appendChild(capital);
        resultado.appendChild(poblacion);
        resultado.appendChild(idiomas);
        resultado.appendChild(region);
    }
}