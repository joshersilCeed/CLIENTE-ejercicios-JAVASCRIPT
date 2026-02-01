// Implementar una clase Polígono que se componga de n puntos. Implementa las clase Cuadrado,
// Rectángulo y Triángulo que tengan una función perimetro() que calcule el perímetro de los
// mismos.
// El perímetro de un polígono se calcula sumando la longitud de sus lados.

class Poligono {
  constructor(puntos = []) {
    this.puntos = puntos;
  }
  validarPoligono() {
    if (this.puntos.length < 3) {
      throw new Error("ERROR: el poligono debe tener al menos tres puntos");
    }
    //TODO: si hay algún punto repetido eliminarlo del array de puntos
  }
  calcularLados() {
    const longitudes = [];
    for (let i = 0; i < this.puntos.length; i++) {
      const punto = this.puntos[i];
      let siguientePunto;
      if (i === this.puntos.length - 1) {
        siguientePunto = this.puntos[0];
      } else {
        siguientePunto = this.puntos[i + 1];
      }
      longitudes[i] = Math.sqrt(
        Math.pow(siguientePunto[0] - punto[0], 2) +
          Math.pow(siguientePunto[1] - punto[1], 2)
      );
    }
    return longitudes;
  }
  perimetro() {
    try {
      this.validarPoligono();
    } catch (error) {
      return error.message;
    }
    const longitudes = this.calcularLados();
    let perimetro = 0;
    for (const longitud of longitudes) {
      perimetro += longitud;
    }
    return perimetro;
  }
}

class Triangulo extends Poligono {
  //   constructor(puntos = []) {
  //     super(puntos);
  //   }
  validarPoligono() {
    if (this.puntos.length !== 3) {
      throw new Error("ERROR: el triangulo debe tener 3 puntos");
    }
  }
}

class Cuadrado extends Poligono {
  //   constructor(puntos = []) {
  //     super(puntos);
  //   }
  validarPoligono() {
    if (this.puntos.length !== 4) {
      throw new Error("ERROR: el cuadrado debe tener 4 puntos");
    }
  }
}

class Rectangulo extends Poligono {
  //   constructor(puntos = []) {
  //     super(puntos);
  //   }
  validarPoligono() {
    if (this.puntos.length !== 4) {
      throw new Error("ERROR: el rectángulo debe tener 4 puntos");
    }
  }
}

const poligono1 = new Poligono([
  [0, 0],
  [2, 2],
  [4, 0],
]);
console.log(poligono1.perimetro());
const poligono2 = new Poligono([
  [0, 0],
  [3, 0],
]);
console.log(poligono2.perimetro());
const triangulo1 = new Triangulo([
  [0, 0],
  [3, 3],
  [6, 0],
]);
console.log(triangulo1.perimetro());
const cuadrado1 = new Cuadrado([
  [0, 0],
  [0, 3],
  [3, 3],
  [3, 0],
]);
console.log(cuadrado1.perimetro());
const rectangulo1 = new Rectangulo([
  [0, 0],
  [0, 3],
  [6, 3],
  [6, 0],
]);
console.log(rectangulo1.perimetro());
