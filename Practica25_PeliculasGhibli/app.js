// =============================================================
// 🎬 CATÁLOGO STUDIO GHIBLI - PRÁCTICA ARRAYS Y ASYNC/AWAIT
// =============================================================
// Práctica para 2º DAW - Entorno Cliente
// API REAL: Studio Ghibli API (sin API Key)
// URL: https://ghibliapi.vercel.app/films
// =============================================================

// ========================================
// VARIABLES GLOBALES
// ========================================

let peliculasCargadas = [];
let peliculasFiltradas = [];
let estadoCarga;
let listaPeliculas;
let contadorPeliculas;
let selectDirector;
let inputBuscar;
let statTotal;
let statPromedio;

const API_URL = "https://ghibliapi.vercel.app/films";

// ========================================
// FUNCIÓN ASÍNCRONA - CONSUMIR API REAL
// ========================================

// Carga las películas desde la API real de Studio Ghibli
async function cargarPeliculasAPI() {
    // TODO: Implementar función asíncrona con fetch()
    // 1. Hacer petición con fetch() a API_URL
    // 2. Verificar que response.ok sea true (si no, lanzar error)
    // 3. Convertir respuesta a JSON con response.json()
    // 4. Retornar el array de películas
    // 5. Manejar errores con try/catch
    console.log("Obteniendo películas");
    try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error("Error al cargar películas");
        }

        // peliculasCargadas = respuesta.json();
        // console.log("peliculasCargadas", peliculasCargadas);
        let respuestaPeliculas = await respuesta.json();
        console.log("Peliculas", respuestaPeliculas);
        return respuestaPeliculas;
    } catch (error) {
        console.error("Error al cargar las peliculas", error);
        throw error;
    }
}

// ========================================
// FUNCIONES CON MÉTODOS DE ARRAYS
// ========================================

// Extrae solo los títulos de las películas usando map()
function obtenerTitulos(peliculas) {
    // TODO: Usar map() para extraer la propiedad "title"
    let titulosPeliculas = peliculas.map(pelicula => pelicula.title);
    return titulosPeliculas;
}

// Filtra películas por director usando filter()
function filtrarPorDirector(peliculas, director) {
    // TODO: Usar filter() para obtener películas del director indicado
    let peliculasFiltradasPorDirector = peliculas.filter(pelicula => pelicula.director === director);
    return peliculasFiltradasPorDirector;
}

// Busca películas por título (búsqueda parcial, no sensible a mayúsculas)
function buscarPorTitulo(peliculas, titulo) {
    // TODO: Usar filter() con includes() y toLowerCase()
    let peliculasFiltradasPorTitulo = peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(titulo.toLowerCase()));
    return peliculasFiltradasPorTitulo;
}

// Calcula el promedio de puntuaciones RT Score usando reduce()
function calcularPuntuacionPromedio(peliculas) {
    // TODO: Calcular promedio de rt_score
    // 1. Verificar que el array no esté vacío (retornar 0 si lo está)
    if (peliculas.length === 0 || peliculas === null || peliculas === undefined) {
        return;
    }
    // 2. Usar reduce() para sumar todos los rt_score
    let sumaNotas = peliculas.reduce((accumulator, pelicula) => accumulator + parseFloat(pelicula.rt_score), 0,);
    // 3. IMPORTANTE: rt_score es string, convertir con parseFloat()
    // 4. Dividir la suma entre la cantidad de películas
    let media = sumaNotas / peliculas.length;
    // 5. Retornar el promedio
    return media;
}

// Busca una película específica por su ID usando find()
function buscarPorId(peliculas, id) {
    // TODO: Usar find() para buscar por id
    let peliculaId = peliculas.find(pelicula => pelicula.id === id);
    return peliculaId;
}

// Verifica si existe alguna película del director indicado usando some()
function tieneDirector(peliculas, director) {
    // TODO: Usar some() para verificar si existe al menos una película del director
    let tienePelicula = peliculas.some(pelicula => pelicula.director === director);
    return tienePelicula;
}

// Ordena películas por año (más recientes primero) usando sort()
function ordenarPorAño(peliculas) {
    // TODO: Ordenar por release_date descendente
    // 1. Usar spread operator [...peliculas] para no modificar el original
    // 2. Usar sort() con función comparadora
    let peliculasOrdenadasAnyo = [...peliculas].sort(function (a, b) {
        return parseInt(a.release_date) + parseInt(b.release_date);
    });
    // 3. IMPORTANTE: release_date es string, convertir con parseInt()
    // 4. Ordenar de mayor a menor (más reciente primero)
    console.log("Peliculas ordenadas por año");
    return peliculasOrdenadasAnyo;
}

// Ordena películas por puntuación RT (mayor a menor) usando sort()
function ordenarPorPuntuacion(peliculas) {
    // TODO: Ordenar por rt_score descendente
    // 1. Usar spread operator [...peliculas] para no modificar el original
    // 2. Usar sort() con función comparadora
    let peliculasOrdenadasPorPuntuacion = [...peliculas].sort(function (a, b) {
        return parseFloat(b.rt_score) - parseFloat(a.rt_score);
    });
    // 3. IMPORTANTE: rt_score es string, convertir con parseFloat()
    // 4. Ordenar de mayor a menor
    return peliculasOrdenadasPorPuntuacion;
}

// ========================================
// FUNCIONES DE INTERFAZ Y DOM
// ========================================

// Inicializa la aplicación y configura los event listeners
function inicializarApp() {
    console.log("🎬 Aplicación Studio Ghibli iniciada");

    // TODO: Configurar event listeners para todos los botones e inputs
    // - btnCargar -> manejarCargaDatos
    // - selectDirector -> manejarFiltroDirector
    // - inputBuscar -> manejarBusqueda
    // - btnOrdenarAño -> manejarOrdenarAño
    // - btnOrdenarPuntuacion -> manejarOrdenarPuntuacion
    // - btnReset -> manejarReset

    const btnCargar = document.getElementById("btnCargar");
    btnCargar.addEventListener("click", manejarCargaDatos);

    estadoCarga = document.getElementById("estadoCarga");

    listaPeliculas = document.getElementById("listaPeliculas");

    contadorPeliculas = document.getElementById("contadorPeliculas");

    const btnOrdenarAño = document.getElementById("btnOrdenarAño");
    btnOrdenarAño.addEventListener("click", manejarOrdenarAño);

    const btnOrdenarPuntuacion = document.getElementById("btnOrdenarPuntuacion");
    btnOrdenarPuntuacion.addEventListener("click", manejarOrdenarPuntuacion);

    selectDirector = document.getElementById("selectDirector");
    selectDirector.addEventListener("change", manejarFiltroDirector);

    inputBuscar = document.getElementById("inputBuscar");
    inputBuscar.addEventListener("change", manejarBusqueda);

    const btnReset = document.getElementById("btnReset");
    btnReset.addEventListener("click", manejarReset);

    statPromedio = document.getElementById("statPromedio");

    statTotal = document.getElementById("statTotal");
}

// Maneja la carga de películas desde la API real
async function manejarCargaDatos() {
    console.log("Manejando carga...");
    peliculasCargadas = [];
    peliculasFiltradas = [];
    listaPeliculas.innerHTML = "";
    // TODO: Cargar películas de forma asíncrona
    // 1. Mostrar mensaje "Cargando..." con mostrarEstadoCarga()
    mostrarEstadoCarga("Cargando...", "cargando");
    // 2. Llamar a cargarPeliculasAPI() con await
    // 3. Guardar resultado en peliculasCargadas y peliculasFiltradas
    try {
        peliculasCargadas = await cargarPeliculasAPI();
        peliculasFiltradas = peliculasCargadas;
        console.log("Exito al cargar películas");
        mostrarEstadoCarga("¡Películas cargadas!", "exito");
    } catch {
        console.log("Error al cargar películas");
        mostrarEstadoCarga("Error al cargar películas", "error");
    }
    // 4. Llamar a mostrarPeliculas() y actualizarEstadisticas()
    mostrarPeliculas(peliculasCargadas);
    actualizarEstadisticas(peliculasCargadas);
    // 5. Mostrar mensaje de éxito
    // 6. Manejar errores con try/catch y mostrar mensaje de error
}

// Maneja el filtro por director
function manejarFiltroDirector() {
    // TODO: Filtrar películas por director seleccionado
    // 1. Obtener valor del select con id "selectDirector"
    const inputDirector = selectDirector.value;
    // 2. Si está vacío, mostrar todas las películas
    if (inputDirector.trim() === "") {
        mostrarPeliculas(peliculasCargadas);
        actualizarEstadisticas(peliculasCargadas);
        return;
    }
    // 3. Si no, usar filtrarPorDirector()
    // 4. Actualizar peliculasFiltradas
    // 5. Llamar a mostrarPeliculas() y actualizarEstadisticas()
    else {
        peliculasFiltradas = filtrarPorDirector(peliculasCargadas, inputDirector);
        mostrarPeliculas(peliculasFiltradas);
        actualizarEstadisticas(peliculasFiltradas);
    }
}

// Maneja la búsqueda por título en tiempo real
function manejarBusqueda() {
    // TODO: Buscar películas por título
    // 1. Obtener valor del input con id "inputBuscar"
    const titulo = inputBuscar.value;
    // 2. Si está vacío, mostrar todas las películas
    if (titulo.trim() === "") {
        mostrarPeliculas(peliculasCargadas);
        return;
    }
    // 3. Si no, usar buscarPorTitulo()
    // 4. Actualizar peliculasFiltradas
    else {
        peliculasFiltradas = buscarPorTitulo(peliculasCargadas, titulo);
        mostrarPeliculas(peliculasFiltradas);
        actualizarEstadisticas(peliculasFiltradas);
    }
    // 5. Llamar a mostrarPeliculas() y actualizarEstadisticas()
}

// Ordena las películas mostradas por año
function manejarOrdenarAño() {
    // TODO: Ordenar peliculasFiltradas por año y mostrar resultado
    console.log("Ordenando por año");
    peliculasFiltradas = ordenarPorAño(peliculasCargadas);
    mostrarPeliculas(peliculasFiltradas);
}

// Ordena las películas mostradas por puntuación RT
function manejarOrdenarPuntuacion() {
    // TODO: Ordenar peliculasFiltradas por puntuación y mostrar resultado
    console.log("Ordenando por puntuacion");
    peliculasFiltradas = ordenarPorPuntuacion(peliculasCargadas);
    mostrarPeliculas(peliculasFiltradas);
}

// Resetea todos los filtros y ordenamientos
function manejarReset() {
    // TODO: Resetear filtros
    // 1. Limpiar valor de selectDirector
    selectDirector.value = "";
    // 2. Limpiar valor de inputBuscar
    inputBuscar.value = "";
    // 3. Restaurar peliculasFiltradas = peliculasCargadas
    peliculasFiltradas = peliculasCargadas;
    // 4. Llamar a mostrarPeliculas() y actualizarEstadisticas()
    mostrarPeliculas(peliculasFiltradas);
    actualizarEstadisticas(peliculasFiltradas);
}

// Renderiza las películas en el DOM usando forEach()
function mostrarPeliculas(peliculas) {
    // TODO: Renderizar películas en el contenedor
    // 1. Obtener elemento con id "listaPeliculas"
    // 2. Limpiar su contenido (innerHTML = "")
    listaPeliculas.innerHTML = "";
    // 3. Si no hay películas, mostrar mensaje "No se encontraron películas"
    if (peliculas.length === 0 || peliculas === null || peliculas === undefined) {
        listaPeliculas.textContent = "No se encontraron películas";
    }
    // 4. Si hay películas, usar forEach() para crear cada tarjeta
    // 5. Dentro del forEach, llamar a crearTarjetaPelicula() y añadir al contenedor
    peliculas.forEach(pelicula => {
        listaPeliculas.innerHTML += crearTarjetaPelicula(pelicula);
    });
    // 6. Actualizar el contador de películas (elemento con id "contadorPeliculas")
    contadorPeliculas.textContent = peliculas.length + " peliculas";
    console.log("Contador peliculas", contadorPeliculas.textContent);
}

// Crea el HTML de una tarjeta de película con datos reales de la API
function crearTarjetaPelicula(pelicula) {
    return `
    <div class="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition transform duration-300">
      <img src="${pelicula.image}" alt="${pelicula.title}" class="w-full h-80 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-bold text-white mb-2 line-clamp-1">${pelicula.title}</h3>
        <p class="text-gray-300 text-sm mb-1">🎬 ${pelicula.director}</p>
        <p class="text-gray-300 text-sm mb-1">📅 ${pelicula.release_date}</p>
        <p class="text-gray-300 text-sm mb-2">⏱️ ${pelicula.running_time} min</p>
        <div class="flex justify-between items-center mt-3 mb-3">
          <span class="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
            ⭐ ${pelicula.rt_score}/100
          </span>
        </div>
        <p class="text-gray-400 text-xs line-clamp-3">${pelicula.description}</p>
      </div>
    </div>
  `;
}

// Actualiza el panel de estadísticas
function actualizarEstadisticas(peliculas) {
    // TODO: Actualizar estadísticas en el DOM
    // 1. Actualizar "statTotal" con peliculas.length
    statTotal.textContent = peliculas.length;
    // 2. Calcular promedio con calcularPuntuacionPromedio()
    let promedio = calcularPuntuacionPromedio(peliculasFiltradas);
    // 3. Actualizar "statPromedio" con el promedio (usar .toFixed(1))
    statPromedio.textContent = promedio.toFixed(1);
}

// Muestra mensajes de estado de carga
function mostrarEstadoCarga(mensaje, tipo) {
    // TODO: Mostrar mensajes de estado
    // 1. Obtener elemento con id "estadoCarga"
    // 2. Establecer el texto con el mensaje
    // 3. Limpiar las clases y añadir clases base
    // 4. Según el tipo ("cargando", "exito", "error"), añadir clases de color:
    //    - cargando: bg-yellow-100 text-yellow-800
    //    - exito: bg-green-100 text-green-800
    //    - error: bg-red-100 text-red-800
    // 5. Quitar la clase "hidden" para mostrar el mensaje
    estadoCarga.textContent = mensaje;
    estadoCarga.className = "";

    if (tipo === "cargando") {
        estadoCarga.classList.add("bg-yellow-100", "text-yellow-800");
    } else if (tipo === "exito") {
        estadoCarga.classList.add("bg-green-100", "text-green-800");
    } else if (tipo === "error") {
        estadoCarga.classList.add("bg-red-100", "text-red-800");
    }

    estadoCarga.classList.remove("hidden");
}

// ========================================
// INICIAR APLICACIÓN
// ========================================

document.addEventListener("DOMContentLoaded", inicializarApp);