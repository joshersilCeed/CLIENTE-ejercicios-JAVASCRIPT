// Realiza un formulario con dos elementos “select”. Al cambiar el primero, se actualizará el segundo.
// Al enviar el formulario, se comprobará que ambos han sido marcados.
// Cuando no tengan ninguna selección previa, los “select” mostrarán “Select no seleccionado”.
// Los valores del primer “select” serán “Alicante”, “Castellón”, “Valencia”. Por defecto no habrá
// ninguno seleccionado.
// Los valores del segundo “select” son:
// • Para Alicante : “Alicante Capital”, “Elche”, “Orihuela”.
// • Para Castellón : “Castellón Capital”, “Oropesa”, “Vinaroz”.
// • Para Valencia : “Valencia Capital”, “Torrent”, “Mislata”. (Aquí saldrá por defecto seleccionado
// “Mislata”).

// const localidades = {
//   alicante: [
//     {ciudad: "Alicante Capital", slug: "alicanteCap"},
//     {ciudad: "Elche", slug: "elche"},
//     {ciudad: "Orihuela", slug: "orihuela"}
//   ],
//   castellon: [
//     {ciudad: "Castellón Capital", slug: "castellonCap"},
//     {ciudad: "Oropesa", slug: "oropesa"},
//     {ciudad: "Vinaroz", slug: "vinaroz"}
//   ],
//   valencia: [
//     {ciudad: "Valencia Capital", slug: "valenciaCap"},
//     {ciudad: "Torrent", slug: "torrent"},
//     {ciudad: "Mislata", slug: "mislata"}
//   ]
// };
const localidades = {
  alicante: {
    ciudades: ["Alicante Capital", "Elche", "Orihuela"],
    slugs: ["alicante-capital", "elche", "orihuela"],
  },
  castellon: {
    ciudades: ["Castellón Capital", "Oropesa", "Vinaroz"],
    slugs: ["castellon-capital", "oropesa", "vinaroz"],
  },
  valencia: {
    ciudades: ["Valencia Capital", "Torrent", "Mislata"],
    slugs: ["valencia-capital", "torrent", "mislata"],
  },
};
const selectProvincia = document.querySelector("#provincia");
const selectLocalidad = document.querySelector("#localidad");
const formulario = document.querySelector("#formulario");
const mensajeFeedback = document.createElement("p");
mensajeFeedback.id = "mensaje-feedback";
document.body.appendChild(mensajeFeedback);

function resetLocalidad() {
  selectLocalidad.innerHTML = "";
  const option = document.createElement("option");
  option.value = "";
  option.textContent = "Select no seleccionado";
  selectLocalidad.appendChild(option);
}

function appendOptions(provinciaElegida, { ciudades, slugs }) {
  for (const i in ciudades) {
    const option = document.createElement("option");
    option.value = slugs[i];
    option.textContent = ciudades[i];
    selectLocalidad.appendChild(option);
  }
  if (provinciaElegida === "valencia") {
    selectLocalidad.value = "mislata";
  }
}

function setLocalidades(event) {
  const provinciaElegida = event.target.value;
  const provinciasPosibles = Object.keys(localidades);
  if (provinciasPosibles.includes(provinciaElegida)) {
    resetLocalidad();
    appendOptions(provinciaElegida, localidades[provinciaElegida]);
  } else {
    resetLocalidad();
  }
}

function mostrarMensaje(mensaje, tipo) {
  if (tipo === "error") {
    mensajeFeedback.style.color = "red";
    mensajeFeedback.textContent = mensaje;
  } else {
    mensajeFeedback.style.color = "green";
    mensajeFeedback.textContent = mensaje;
  }
}

function validacionFormulario(event) {
  event.preventDefault();
  // console.log(event.target.elements.provincia);
  if (selectProvincia.value === "" || selectLocalidad.value === "") {
    mostrarMensaje("Error: debes indicar un valor en los dos select", "error");
  } else {
    resetLocalidad();
    formulario.reset();
    mostrarMensaje("Envío exitoso");
  }
}

selectProvincia.addEventListener("change", setLocalidades);
formulario.addEventListener("submit", validacionFormulario);
