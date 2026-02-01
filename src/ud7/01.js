// Crea un formulario con un PIN donde se puedan introducir hasta cinco caracteres. Al escribir el
// quinto carácter debe enviar el PIN a https:validate-pin.fly.dev/validate en formato formurlencoded con el método POST y mostrar si el PIN es o no correcto

const inputPin = document.querySelector("#input-pin");
const formulario = document.querySelector("form");
const feedback = document.querySelector("#feedback");

function mostrarMensaje(mensaje, tipo) {
  switch (tipo) {
    case "error":
      feedback.style.color = "red";

      break;
    case "success":
      feedback.style.color = "green";
      break;
    default:
      break;
  }
  feedback.textContent = mensaje;
}

// function comprobarLength(e) {
//   const valor = e.target.value;
//   if (valor.length === 5) {
//     window
//       .fetch("http://localhost:8080/validate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: "PIN=" + valor,
//       })
//       .then((res) => {
//         const tipo = res.ok ? "success" : "error";
//         // res.text().then((data) => mostrarMensaje(data, tipo));
//         return res.text().then((data) => ({
//           data,
//           tipo,
//         }));
//       })
//       .then(({ data, tipo }) => mostrarMensaje(data, tipo))
//       .catch((error) => mostrarMensaje(error.message, "error"));
//   }
// }

async function comprobarLength(valor) {
  console.log(valor);
  if (valor.length === 5) {
    try {
      const res = await window.fetch("http://localhost:8080/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "PIN=" + valor,
      });
      const tipo = res.ok ? "success" : "error";
      const data = await res.text();
      mostrarMensaje(data, tipo);
    } catch (error) {
      mostrarMensaje(error.message, "error");
    }
  }
}

inputPin.addEventListener("input", (e) => {
  comprobarLength(e.target.value);
});
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  comprobarLength(inputPin.value);
});
