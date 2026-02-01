// Realiza un programa que tenga 10 elementos <p> y al hacer clic sobre ellos desaparezcan (se
// oculten) y al hacer click con el botón derecho los elimine del DOM (no se debe mostrar el menú de
// contexto). También deberá tener un botón “Reaparecer” que hará que aparezcan todos los
// elementos desaparecidos (pero no los eliminados).

const parrafos = document.querySelectorAll("p");
const botonReaparecer = document.querySelector("button");

function habilitarBotonReaparecer() {
  if (botonReaparecer.disabled) {
    botonReaparecer.disabled = false;
  }
}

botonReaparecer.addEventListener("click", () => {
  botonReaparecer.disabled = true;
  for (const parrafo of parrafos) {
    if (parrafo.style.display === "none") {
      parrafo.style.display = "block";
    }
  }
});

for (const parrafo of parrafos) {
  parrafo.addEventListener("click", () => {
    parrafo.style.display = "none";
    habilitarBotonReaparecer();
  });
  parrafo.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    parrafo.remove();
  });
}
