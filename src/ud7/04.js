// Crea un proyecto con tres páginas:
// 1. Un índice index.html que tenga dos enlaces: uno a la página nieve.html y otro a
// confetti.html
// 2. Una página nieve.html en la que utilices el paquete npm pure-snow
// (https://www.npmjs.com/package/pure-snow.js) para mostrar nieve en la página. Debe
// tener un botón en el centro de la página para volver al índice.
// 3. Una página confetti.html en la que utilices el paquete npm js-confetti
// (https://www.npmjs.com/package/js-confetti) para mostrar confeti cada vez que se pulse un
// botón situado en el centro de la página.
// No se podrá lanzar más confeti hasta que el confeti haya desaparecido.
// Se debe poder volver a la página anterior (que será el índice si has accedido desde allí)
// pulsando el botón atrás del navegador.

import "../styles/main7.css";

async function dispararConfetti(jsConfetti, btnConfetti) {
  btnConfetti.disabled = true;
  await jsConfetti.addConfetti();
  btnConfetti.disabled = false;
}

let paginaActiva = document.querySelector("#pagina-activa");
if (paginaActiva) {
  paginaActiva = paginaActiva.getAttribute("data-pagina-activa");
}
switch (paginaActiva) {
  case "nieve":
    const { createSnow, showSnow } = await import("pure-snow.js");
    createSnow("snow");
    showSnow(true);
    break;
  case "confetti":
    const btnConfetti = document.querySelector("#btn-confetti");
    const { default: JSConfetti } = await import("js-confetti");
    const jsConfetti = new JSConfetti();
    btnConfetti.addEventListener("click", () =>
      dispararConfetti(jsConfetti, btnConfetti),
    );
    break;
  default:
    break;
}
