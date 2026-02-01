// Realiza un formulario que tenga dos campos de email con las mismas validaciones que el ejercicio anterior. Deberá validar antes del envío si los dos emails son iguales.

const listaServidores = ["outlook.com", "hotmail.com", "gmail.com"];
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formulario = document.querySelector("#formulario");
const mensajeFeedback = document.createElement("DIV");
mensajeFeedback.id = "feedback";
mensajeFeedback.role = "alert";
formulario.after(mensajeFeedback);
// document.body.insertBefore(mensajeFeedback, formulario.nextElementSibling);
let timeOutMsgExito;

function mostrarMensaje(mensaje, tipo) {
  switch (tipo) {
    case "error":
      window.clearTimeout(timeOutMsgExito);
      mensajeFeedback.style.color = "red";
      break;
    case "exito":
      window.clearTimeout(timeOutMsgExito);
      mensajeFeedback.style.color = "green";
      timeOutMsgExito = window.setTimeout(() => {
        mensajeFeedback.textContent = "";
      }, 3000);
      break;

    default:
      console.log("Supuesto no contemplado");
      break;
  }
  mensajeFeedback.textContent = mensaje;
}

function enviarEmail(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const esEmailValido = re.test(email);
  if (!esEmailValido) {
    mostrarMensaje("El email no es valido", "error");
    return;
  }
  const servidorEnvio = email.split("@")[1];
  if (!listaServidores.includes(servidorEnvio)) {
    mostrarMensaje(
      "Servidor no válido. Debe usarse: " + listaServidores.join(", "),
      "error"
    );
    return;
  }
  const email2 = event.target.elements.email2.value;
  if (email !== email2) {
    mostrarMensaje("Los emails introducidos no coinciden", "error");
    return;
  }
  event.target.reset();
  mostrarMensaje("Validación exitosa", "exito");
}

formulario.addEventListener("submit", enviarEmail);
