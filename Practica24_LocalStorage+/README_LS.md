# 📝 Ejercicio de LocalStorage en JavaScript

## Descripción del Proyecto

Este es un ejercicio práctico diseñado para aprender los conceptos básicos de **LocalStorage** en JavaScript mediante la creación de una aplicación de lista de tareas que persiste los datos en el navegador. 

---

## 🎯 Objetivos de Aprendizaje

Al completar este ejercicio, aprenderás a:

- Utilizar `localStorage.setItem()` para guardar datos
- Utilizar `localStorage.getItem()` para recuperar datos
- Utilizar `localStorage.removeItem()` para eliminar datos
- Convertir objetos JavaScript a texto con `JSON.stringify()`
- Convertir texto a objetos JavaScript con `JSON.parse()`
- Hacer que los datos persistan entre sesiones del navegador

---

## 📁 Estructura del Proyecto

```
ejercicio-localstorage/
│
├── index.html          # Estructura HTML de la aplicación
├── styles. css          # Estilos CSS para la interfaz
├── script.js           # Archivo JavaScript para completar
└── README.md           # Este archivo con las instrucciones
```

---

## 🚀 Instrucciones

### Paso 1: Preparar el entorno

1. Crea una carpeta llamada `ejercicio-localstorage`
2. Dentro de la carpeta, crea los siguientes archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

### Paso 2: Copiar el código base

1. Copia el contenido HTML proporcionado en `index.html`
2. Copia el contenido CSS proporcionado en `styles.css`
3. Copia la estructura JavaScript (con los TODOs) en `script.js`

### Paso 3: Completar las funciones JavaScript

Abre `script.js` y completa cada función siguiendo los comentarios TODO:

#### 1️⃣ Función `cargarTareas()`
```javascript
function cargarTareas() {
    // TODO: 
    // - Obtener las tareas del localStorage con la clave 'tareas'
    // - Si no hay tareas, devolver un array vacío
    // - Recuerda usar JSON. parse() para convertir el texto a array
}
```

**Pista**: Usa `localStorage.getItem('tareas')` y verifica si es `null`

#### 2️⃣ Función `guardarTareas(tareas)`
```javascript
function guardarTareas(tareas) {
    // TODO: 
    // - Convertir el array de tareas a texto con JSON. stringify()
    // - Guardar en localStorage con la clave 'tareas'
}
```

**Pista**: Usa `localStorage.setItem('tareas', ... )`

#### 3️⃣ Función `mostrarTareas()`
```javascript
function mostrarTareas() {
    // TODO:
    // - Limpiar la lista actual (listaTareas. innerHTML = '')
    // - Cargar las tareas
    // - Recorrer cada tarea y crear un elemento <li>
    // - Agregar un botón de eliminar a cada tarea
}
```

**Pista**: Usa `forEach()` para recorrer el array y `createElement()` para crear elementos

#### 4️⃣ Función `agregarTarea()`
```javascript
function agregarTarea() {
    // TODO:
    // - Obtener el valor del input
    // - Validar que no esté vacío
    // - Cargar las tareas existentes
    // - Agregar la nueva tarea al array
    // - Guardar el array actualizado
    // - Mostrar las tareas
    // - Limpiar el input
}
```

**Pista**: Usa `.value` para obtener el texto del input y `.push()` para agregar al array

#### 5️⃣ Función `eliminarTarea(indice)`
```javascript
function eliminarTarea(indice) {
    // TODO:
    // - Cargar las tareas
    // - Eliminar la tarea en el índice dado (usar splice)
    // - Guardar las tareas actualizadas
    // - Mostrar las tareas
}
```

**Pista**: Usa `array.splice(indice, 1)` para eliminar un elemento

#### 6️⃣ Función `limpiarTodo()`
```javascript
function limpiarTodo() {
    // TODO:
    // - Usar localStorage.removeItem('tareas') o localStorage.clear()
    // - Mostrar las tareas (la lista quedará vacía)
}
```

**Pista**: Puedes agregar un `confirm()` para pedir confirmación

### Paso 4: Probar la aplicación

1. Abre `index.html` en tu navegador (doble clic en el archivo)
2. Agrega varias tareas
3. Cierra completamente el navegador
4. Vuelve a abrir `index.html`
5. **¡Las tareas deberían seguir ahí!** ✨

### Paso 5: Inspeccionar el LocalStorage

Para ver los datos guardados: 

1. Abre las **Herramientas de Desarrollo** (F12 o clic derecho → Inspeccionar)
2. Ve a la pestaña **Application** (Chrome) o **Storage** (Firefox)
3. En el menú lateral, busca **Local Storage**
4. Verás la clave `tareas` con su valor en formato JSON

---

## 🔍 Conceptos Clave

### ¿Qué es LocalStorage? 

LocalStorage es una API del navegador que permite almacenar datos de forma permanente en el navegador del usuario. Los datos persisten incluso después de cerrar el navegador. 

### Características importantes:

- **Solo almacena strings (texto)**: Por eso debemos usar `JSON.stringify()` y `JSON.parse()`
- **Capacidad**:  Aproximadamente 5-10 MB por dominio
- **Sincrónico**: Las operaciones bloquean el hilo principal
- **Por dominio**: Cada sitio web tiene su propio LocalStorage separado
- **Permanente**: Los datos no se eliminan automáticamente (a diferencia de SessionStorage)

### Métodos principales:

| Método | Descripción | Ejemplo |
|--------|-------------|---------|
| `localStorage.setItem(clave, valor)` | Guarda un valor | `localStorage.setItem('nombre', 'Juan')` |
| `localStorage.getItem(clave)` | Recupera un valor | `localStorage.getItem('nombre')` |
| `localStorage.removeItem(clave)` | Elimina un valor específico | `localStorage.removeItem('nombre')` |
| `localStorage.clear()` | Elimina todos los valores | `localStorage.clear()` |

### JSON.stringify() y JSON.parse()

```javascript
// Convertir objeto/array a texto para guardar
const tareas = ['Estudiar', 'Hacer ejercicio'];
const textoTareas = JSON.stringify(tareas);
localStorage.setItem('tareas', textoTareas);

// Convertir texto a objeto/array al recuperar
const textoRecuperado = localStorage.getItem('tareas');
const tareasRecuperadas = JSON.parse(textoRecuperado);
```

---

## ✅ Criterios de Evaluación

Tu ejercicio estará completo cuando: 

- [ ] Puedas agregar nuevas tareas
- [ ] Las tareas se muestren en la lista
- [ ] Puedas eliminar tareas individuales
- [ ] Puedas limpiar todas las tareas
- [ ] Las tareas persistan al recargar la página
- [ ] Las tareas persistan al cerrar y reabrir el navegador
- [ ] El código esté limpio y bien comentado

---

## 🎨 Retos Adicionales (Opcional)

Si terminas el ejercicio básico, intenta estos desafíos:

### Nivel 1: Intermedio
- [ ] Agregar un contador de tareas completadas
- [ ] Permitir editar tareas existentes
- [ ] Agregar timestamps (fecha y hora) a cada tarea
- [ ] Implementar un límite máximo de tareas

### Nivel 2: Avanzado
- [ ] Agregar categorías o etiquetas a las tareas
- [ ] Implementar un sistema de búsqueda/filtrado
- [ ] Agregar la opción de marcar tareas como "completadas" con un checkbox
- [ ] Agregar prioridades (alta, media, baja) con colores diferentes

### Nivel 3: Experto
- [ ] Implementar drag & drop para reordenar tareas
- [ ] Agregar modo oscuro que también persista en LocalStorage
- [ ] Exportar/importar tareas en formato JSON
- [ ] Agregar notificaciones del navegador para recordatorios

---

## 🐛 Problemas Comunes y Soluciones

### Problema: "Las tareas no aparecen al recargar"
**Solución**: Verifica que estés usando `JSON.parse()` al recuperar los datos y que llames a `mostrarTareas()` al cargar la página. 

### Problema: "Error:  Unexpected token in JSON"
**Solución**: Esto ocurre cuando intentas hacer `JSON.parse()` de algo que no es JSON válido. Verifica que el valor exista antes de parsearlo:
```javascript
const datos = localStorage.getItem('tareas');
const tareas = datos ? JSON.parse(datos) : [];
```

### Problema: "No puedo eliminar tareas"
**Solución**: Asegúrate de pasar correctamente el índice a la función `eliminarTarea()` y que estés usando `splice()` correctamente.

### Problema: "Los estilos no se aplican"
**Solución**: Verifica que `styles.css` esté en la misma carpeta que `index.html` y que el `<link>` en el HTML esté correctamente escrito.

---

## 📚 Recursos Adicionales

- [MDN - Window.localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [MDN - JSON.stringify()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [MDN - JSON.parse()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [MDN - Web Storage API](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API)

---

## 📝 Licencia

Este material educativo es de uso libre para fines académicos.

---

**¡Buena suerte con el ejercicio!  🚀**

Si tienes dudas, consulta con tu profesor o revisa los recursos adicionales. 