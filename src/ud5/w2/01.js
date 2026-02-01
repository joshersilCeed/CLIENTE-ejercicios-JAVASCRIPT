// Escribe un programa que filtre las direcciones de una lista para obtener únicamente las direcciones
// válidas. Para que una dirección sea válida debe cumplir las siguientes condiciones:
// • Debe tener informados el país, la ciudad y la dirección
// • Debe tener informado o el móvil o el fijo
// • Debe incluir una región o un código postal (cp)
// El filtrado se debe hacer en una única sentencia que ocupe una sola línea de código. Además, no
// puedes utilizar if en ninguna parte del programa.
// Por ejemplo, con la siguiente lista de direcciones debería devolver únicamente la primera:

function esValido({
  pais,
  region,
  cp,
  ciudad,
  direccion,
  complemento,
  movil,
  fijo,
}) {
  return pais && ciudad && direccion && (movil || fijo) && (region || cp);
}

const direcciones = [
  {
    // Válido
    pais: "España",
    region: "",
    cp: "46014",
    ciudad: "Valencia",
    direccion: "Carrer Misericòrdia, 34",
    complemento: "",
    movil: "",
    fijo: "961 20 69 90",
  },
  {
    // Inválido: no tiene movil o fijo
    pais: "España",
    region: "",
    cp: "46960",
    ciudad: "Aldaia",
    direccion: "C/ Montcabrer, 22",
    complemento: "Pol. Ind. La Lloma",
    movil: "",
    fijo: "",
  },
  {
    // Inválido: no tiene país
    pais: "",
    region: "Alicante",
    cp: "",
    ciudad: "Petrer",
    direccion: "Los Pinos, 7",
    complemento: "",
    movil: "",
    fijo: "965 37 08 88",
  },
];

// const direccionesFiltradas = direcciones.filter((direccion) =>
//   esValido(direccion)
// );
const direccionesFiltradas = direcciones.filter(esValido);

console.log(direccionesFiltradas);
