// Realiza un formulario que pida una dirección de email y la valide antes de enviarla:
// • Debe validar si el email sigue el formato texto@servidor.loquesea
// • Además de validar el formato anterior, debe comprobar que servidor.loquesea este como
// servidor admitido en un array de servidores llamado “listaServidores”.
// Dicho array debe ser definido a mano en el código. Por ejemplo
// let listaServidores=[ "terra.es" , "myspace.com", "arrakis.es", "tuenti.es"];

/*global alert*/

const listaServidores = ["outlook.com", "hotmail.com", "gmail.com"];
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function enviarEmail(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const esEmailValido = re.test(email);
  if (!esEmailValido) {
    console.log("El email no es valido");
    return;
  }
  const servidorEnvio = email.split("@")[1];
  if (!listaServidores.includes(servidorEnvio)) {
    console.log(
      "Servidor no válido. Debe usarse: " + listaServidores.join(", ")
    );
    return;
  }
  event.target.reset();
  alert("Validación exitosa");
}

window.enviarEmail = enviarEmail;
