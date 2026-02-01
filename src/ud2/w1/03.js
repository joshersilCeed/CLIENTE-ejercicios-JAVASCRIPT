// Crea una página HTML con un DIV que contenga en su interior al menos tres DIV de diferentes
// colores. Al pulsar uno de los <div> el padre se podrá del color de ese elemento.
// Debes usar la misma función para manejar los eventos en los tres <div> (no vale que hagas una
// función específica para cada uno)

const padre = document.querySelector("#padre");

function cambioColor(event) {
  const elementClicked = event.target;
  if (event.target === padre) return;
  // const colorElement = elementClicked.style.color;
  // if (!!colorElement) {
  //   padre.style.color = colorElement;
  // }
  const colorElement = getComputedStyle(elementClicked).color;
  padre.style.color = colorElement;
}

padre.addEventListener("click", cambioColor);
