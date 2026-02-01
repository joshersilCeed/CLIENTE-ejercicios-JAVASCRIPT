// Construye un programa que imprima los alumnos que están matriculados a la vez en asignaturas de primer y segundo curso.
// Con los datos visibles en el ejemplo anterior debería imprimir: 'Perico' y 'Don Pepito'
// const modulos = [
//   {
//     nombre: "Sistemas informáticos",
//     curso: 1,
//     alumnos: ["Don Pepito", "Perico", "Don José"],
//   },
//   {
//     nombre: "Desarrollo Web en entorno cliente",
//     curso: 2,
//     asignatura: "",
//     alumnos: ["Juan", "Perico", "Andrés", "Don Pepito"],
//   },
// ];
const modulos = [
  {
    nombre: "Sistemas informáticos",
    curso: 1,
    alumnos: ["Perico", "Don Pepito", "Don José", "Pedro"],
  },
  {
    nombre: "Lenguaje de marcas",
    curso: 1,
    alumnos: ["Gonzalo", "Luis", "Perico"],
  },
  {
    nombre: "Desarrollo Web en entorno cliente",
    curso: 2,
    asignatura: "",
    alumnos: ["Juan", "Perico", "Andrés", "Don Pepito", "Pedro"],
  },
  {
    nombre: "Despliegue de aplicaciones web",
    curso: 2,
    alumnos: ["Don Pepito", "Pedro", "Bernardo"],
  },
  {
    nombre: "Diseño de interfaces web",
    curso: 2,
    alumnos: ["Pedro", "Don Pepito", "Bernardo"],
  },
  {
    nombre: "Desarrollo web en entorno servidor",
    curso: 2,
    alumnos: ["Andrés", "Pedro", "Juan"],
  },
];
let alumnosPrimero = new Set();
let alumnosSegundo = new Set();
let alumnosPrimeroYSegundo = [];

modulos.forEach((modulo) => {
  if (modulo.curso === 1) {
    for (const alumno of modulo.alumnos) {
      alumnosPrimero.add(alumno);
    }
  }
  if (modulo.curso === 2) {
    for (const alumno of modulo.alumnos) {
      alumnosSegundo.add(alumno);
    }
  }
});

alumnosPrimero = [...alumnosPrimero];
// console.log(alumnosPrimero);
// alumnosSegundo = [...alumnosSegundo];
// console.log(alumnosSegundo);

// for (const alumnoPrimero of alumnosPrimero) {
//   // if (alumnosSegundo.includes(alumnoPrimero)) {
//   if (alumnosSegundo.has(alumnoPrimero)) {
//     console.log(alumnoPrimero);
//     alumnosPrimeroYSegundo.push(alumnoPrimero);
//   }
// }
alumnosPrimeroYSegundo = alumnosPrimero.filter((alumno) =>
  alumnosSegundo.has(alumno)
);
console.log(
  "Los alumnos de primero y segundo son: " + alumnosPrimeroYSegundo.join(", ")
);
