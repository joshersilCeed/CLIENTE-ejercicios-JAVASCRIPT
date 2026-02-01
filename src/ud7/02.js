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

function deleteNoTareas() {
  const msgNoTareas = listadoTareasDOM.firstChild;
  listadoTareasDOM.removeChild(msgNoTareas);
}

function inicializarTareas() {
  let tareas = window.localStorage.getItem("tareas");
  if (!tareas) {
    window.localStorage.setItem("tareas", "[]");
    tareas = "[]";
  }
  tareasState = JSON.parse(tareas);

  if (!tareasState.length) {
    renderTarea();
    return;
  }
  tareasState.forEach((tarea) => {
    renderTarea(tarea);
  });
}

function addTarea(tarea) {
  if (!tareasState.length) deleteNoTareas();
  tareasState.push(tarea);
  window.localStorage.setItem("tareas", JSON.stringify(tareasState));
  renderTarea(tarea);
}

function enviarTarea(e) {
  e.preventDefault();
  const nombreTarea = e.target.querySelector("#input-tarea").value;
  addTarea(nombreTarea);
}

inicializarTareas();
formulario.addEventListener("submit", enviarTarea);
