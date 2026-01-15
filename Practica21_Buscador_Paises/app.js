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
        resultado.classList.add("text-red-500");
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
    resultado.classList.remove("text-red-500");
    for (let i = 0; i < pais.length; i++) {
        let nombre = document.createElement("p");
        let bandera = document.createElement("img");
        let capital = document.createElement("p");
        let poblacion = document.createElement("p");
        let idiomas = document.createElement("p");
        let region = document.createElement("p");

        nombre.textContent = pais[i].name.common;
        bandera.src = pais[i].flags.png;
        capital.textContent = pais[i].capital[0];
        poblacion.textContent = pais[i].population.toLocaleString("es-ES");

        let arrayIdiomas = pais[i].languages;
        for (const idioma in arrayIdiomas) {
            // let li = document.createElement("li");
            // li.textContent = `${arrayIdiomas[idioma]}`;
            // idiomas.appendChild(li);
            idiomas.textContent += " " + arrayIdiomas[idioma];
        }

        region.textContent = pais[i].region;

        let div = document.createElement("div");
        div.classList.add("flex", "flex-col", "bg-gray-100", "mt-5", "p-5", "border", "rounded-xl");
        bandera.classList.add("w-[300px]", "h-[200px]", "self-center");
        nombre.classList.add("font-bold", "p-5");
        div.appendChild(bandera);
        div.appendChild(nombre);

        let grid = document.createElement("div");
        grid.classList.add("grid", "grid-cols-[repeat(2,minmax(100px,1fr))]", "gap-4");

        let divCapital = document.createElement("div");
        divCapital.classList.add("bg-white", "p-2", "pl-4", "text-left");
        let lblCapital = document.createElement("p");
        lblCapital.textContent = "Capital";
        lblCapital.classList.add("text-blue-500", "font-bold");
        capital.classList.add("font-bold");
        divCapital.appendChild(lblCapital);
        divCapital.appendChild(capital);

        let divPoblacion = document.createElement("div");
        divPoblacion.classList.add("bg-white", "p-2", "pl-4", "text-left");
        let lblPoblacion = document.createElement("p");
        lblPoblacion.textContent = "Poblacion";
        lblPoblacion.classList.add("text-blue-500", "font-bold");
        poblacion.classList.add("font-bold");
        divPoblacion.appendChild(lblPoblacion);
        divPoblacion.appendChild(poblacion);

        let divIdiomas = document.createElement("div");
        divIdiomas.classList.add("bg-white", "p-2", "pl-4", "text-left");
        let lblIdiomas = document.createElement("p");
        lblIdiomas.textContent = "Idiomas";
        lblIdiomas.classList.add("text-blue-500", "font-bold");
        idiomas.classList.add("font-bold");
        divIdiomas.appendChild(lblIdiomas);
        divIdiomas.appendChild(idiomas);

        let divRegion = document.createElement("div");
        divRegion.classList.add("bg-white", "p-2", "pl-4", "text-left");
        let lblRegion = document.createElement("p");
        lblRegion.textContent = "Region";
        lblRegion.classList.add("text-blue-500", "font-bold");
        region.classList.add("font-bold");
        divRegion.appendChild(lblRegion);
        divRegion.appendChild(region);

        grid.appendChild(divCapital);
        grid.appendChild(divPoblacion);
        grid.appendChild(divIdiomas);
        grid.appendChild(divRegion);
        div.appendChild(grid);

        resultado.appendChild(div);
    }
}