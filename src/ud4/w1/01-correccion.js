// Crea un objeto célula mediante literales de objetos. El objeto debe contener valores primitivos
// (números, booleanos y cadenas, por ejemplo) y una función mitosis() que le permita dividirse en
// dos, copiando sus propiedades a los hijos y eliminando las propiedades propias.
// El objeto debe funcionar aunque se le añadan nuevas propiedades de tipo primitivo (no hace falta
// que hagas ninguna comprobación sobre esto)
// No crees constructores, clases... la célula ha de ser un único objeto JavaScript y estar
// autocontenida.

// ✅ SOLUCIÓN CORRECTA: Objeto literal único y autocontenido
const celula = {
  // Propiedades primitivas iniciales
  activa: true,
  size: 3,
  tipo: "tejido",
  energia: 100,
  edad: 0,
  viva: true,

  // Método mitosis autocontenido
  mitosis() {
    console.log("Iniciando mitosis...");

    // Crear dos células hijas copiando TODAS las propiedades actuales
    // (funciona con propiedades añadidas dinámicamente)
    const propiedades = {};
    for (const key of Object.keys(this)) {
      if (key !== "mitosis") {
        // No copiar el método
        propiedades[key] = this[key];
      }
    }

    // Crear las dos células hijas
    const hijas = [
      { ...propiedades, mitosis: this.mitosis }, // Hija 1
      { ...propiedades, mitosis: this.mitosis }, // Hija 2
    ];

    // Eliminar las propiedades de la célula madre (excepto mitosis)
    for (const key of Object.keys(this)) {
      if (key !== "mitosis") {
        delete this[key];
      }
    }

    console.log("Célula madre después de mitosis:", this);
    console.log("Células hijas creadas:", hijas.length);

    return hijas;
  },
};

// ✅ PRUEBAS: Funcionamiento básico
console.log("=== CÉLULA ORIGINAL ===");
console.log(celula);

// ✅ PRUEBA: Añadir propiedades dinámicamente (requisito del enunciado)
celula.temperatura = 37;
celula.ph = 7.4;
celula.diferenciada = false;

console.log("\n=== DESPUÉS DE AÑADIR PROPIEDADES ===");
console.log(celula);

// ✅ PRUEBA: Ejecutar mitosis
console.log("\n=== EJECUTANDO MITOSIS ===");
const [hija1, hija2] = celula.mitosis();

console.log("\n=== RESULTADOS ===");
console.log("Hija 1:", hija1);
console.log("Hija 2:", hija2);
console.log("Célula madre:", celula);

// ✅ PRUEBA: Las hijas también pueden hacer mitosis
console.log("\n=== MITOSIS DE LAS HIJAS ===");
hija1.nuevaPropiedad = "test"; // Añadir propiedad dinámica
const [nieta1, nieta2] = hija1.mitosis();
console.log("Nietas de hija1:", nieta1, nieta2);
