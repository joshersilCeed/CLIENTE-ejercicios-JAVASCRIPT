// Crea un objeto célula mediante literales de objetos. El objeto debe contener valores primitivos
// (números, booleanos y cadenas, por ejemplo) y una función mitosis() que le permita dividirse en
// dos, copiando sus propiedades a los hijos y eliminando las propiedades propias.
// El objeto debe funcionar aunque se le añadan nuevas propiedades de tipo primitivo (no hace falta
// que hagas ninguna comprobación sobre esto)
// No crees constructores, clases... la célula ha de ser un único objeto JavaScript y estar
// autocontenida.

function mitosis() {
  //   const hijas = new Array(2).fill({ ...this });
  const hijas = [{ ...this }, { ...this }];
  for (const key of Object.keys(this)) {
    delete this[key];
  }
  console.log("Celula madre", this);
  return hijas;
}

function Celula(propiedades) {
  for (const [key, valor] of Object.entries(propiedades)) {
    this[key] = valor;
  }
  this.mitosis = mitosis;
  const resultado = [...this.mitosis()];

  return resultado;
}

const [celulaHija1, celulaHija2] = new Celula({
  activa: true,
  size: 3,
  tipo: "tejido",
});
console.log(celulaHija1);
console.log(celulaHija2);
