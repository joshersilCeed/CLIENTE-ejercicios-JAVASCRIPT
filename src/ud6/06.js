// Utilizando el API de localización de la estación espacial internacional crea una página web que
// muestre su posición sobre el mapa cada diez segundos:
// http://open-notify.org/Open-Notify-API/ISS-Location-Now/
// Para los mapas puedes utilizar leafletjs. En la página inicial tienes un ejemplo de cómo mostrar un
// mapa utilizando los datos de OpenstreetMap: https://leafletjs.com/examples/quick-start/
// Extra: Añade un botón para centrar el mapa en la posición actual de la ISS.

const L = window.L;
let map;
let marcador;

async function getPosicionEEI() {
  const resp = await fetch("http://api.open-notify.org/iss-now.json");
  if (!resp.ok) {
    throw new Error("Error obteniendo datos de EEI");
  }
  const data = await resp.json();
  const {
    iss_position: { latitude, longitude },
  } = data;
  return [parseFloat(latitude), parseFloat(longitude)];
}

function inicializarMapa(coordenadas) {
  map = L.map("map").setView(coordenadas, 3);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  marcador = L.marker(coordenadas)
    .addTo(map)
    .bindPopup("Posición EEI")
    .openPopup();
}

async function renderMapa() {
  try {
    const coordenadas = await getPosicionEEI();
    if (!map) {
      inicializarMapa(coordenadas);
    } else {
      marcador.setLatLng(coordenadas);
      // map.setView(coordenadas);
      map.panTo(coordenadas);
    }
  } catch (error) {
    console.log(error.message);
  }
}
renderMapa();
setInterval(renderMapa, 10000);
