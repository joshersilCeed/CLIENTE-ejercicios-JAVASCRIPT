// Crear una lista de tareas en el navegador. Debe tener un campo para escribir el texto de la tarea y
// un botón añadir. Al pulsar el botón se añadirá la tarea a una lista.
// No se pueden eliminar ni modificar las tareas, sólo añadir. Si se cierra el navegador y se vuelve a
// abrir debe conservar la lista de tareas al acceder a la misma página.

const formulario = document.querySelector("form");
const listadoTareasDOM = document.querySelector("#listado-tareas");

let tareasState = [];

function renderTarea(tarea = "No hay tareas") {
  const tareaDOM = document.createElement("P");
  tareaDOM.textContent = tarea;
  listadoTareasDOM.appendChild(tareaDOM);
}

function renderTareas() {
  // listadoTareasDOM.innerHTML = "";
  listadoTareasDOM.replaceChildren();
  !tareasState.length && renderTarea();
  tareasState.forEach((tarea) => {
    renderTarea(tarea);
  });
}

function inicializarTareas() {
  let tareas = window.localStorage.getItem("tareas");
  if (!tareas) {
    tareas = "[]";
    window.localStorage.setItem("tareas", tareas);
  }
  tareasState = JSON.parse(tareas);

  renderTareas();
}

function addTarea(e) {
  e.preventDefault();
  const tarea = e.target.querySelector("#input-tarea").value;
  tareasState.push(tarea);
  window.localStorage.setItem("tareas", JSON.stringify(tareasState));
  renderTareas();
}

// EJECUCIÓN DEL PROGRAMA
inicializarTareas();
formulario.addEventListener("submit", addTarea);
