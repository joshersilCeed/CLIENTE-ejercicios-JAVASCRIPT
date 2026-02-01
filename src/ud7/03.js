// Mejora el ejemplo del chat para permitir introducir un nombre de usuario al conectar. Los
// mensajes deben de indicar el usuario que los ha realizado.
// Tendrás que modificar tanto la parte cliente como la parte servidor. Piensa de qué manera puede
// hacerle llegar cada cliente su nombre al servidor y cómo guardarlo en el mismo. No hace falta que
// compruebes que no haya nombre duplicados, pero sí que no se puedan enviar mensajes hasta que
// el servidor haya dado el OK.
// Aunque no hemos visto nada de express ni de Websockets en el servidor lo único que tienes que
// modificar es la función que se ejecuta cuando el cliente recibe una conexión nueva: es código
// JavaScript y puedes utilizar todo lo que hemos visto del lenguaje hasta el momento.

import { login, sendMessage } from "./03-server";
import { conversacionChat } from "./03-mockdata";

const formularioLogin = document.querySelector("#login-form");
const botonSubmitLogin = formularioLogin.querySelector("button[type=submit]");

const chat = document.querySelector("#chat");
const envioMensajes = document.querySelector("#envio-mensajes");
const formularioMsg = document.querySelector("#msg-form");
const botonSubmitMsg = formularioMsg.querySelector("button[type=submit]");
chat.style.display = "block";
envioMensajes.style.display = "flex";

function addMsg(data, bc = null) {
  const { autor, texto } = data;
  const msg = document.createElement("p");
  msg.textContent = `${autor}: ${texto}`;
  msg.style.padding = "1rem";
  if (bc) {
    msg.style.backgroundColor = bc;
  }
  chat.appendChild(msg);
}

function ejemploChat() {
  conversacionChat.forEach((data) => {
    if (data.autor === "Pepe") {
      addMsg(data, "lightgray");
    } else {
      addMsg(data);
    }
  });
  // chat.scrollTop = chat.scrollHeight;
  const ultimoMensaje = chat.lastElementChild;
  ultimoMensaje?.scrollIntoView({ behavior: "smooth" });
}

function handleRecepcionMsg(channel) {
  channel.onmessage = (e) => {
    // const { autor, texto } = e.data;
    // console.log(`${autor}: ${texto}`);
    addMsg(e.data);
  };
}

async function handleLogin(e) {
  e.preventDefault();
  try {
    const inputUserName = formularioLogin.querySelector("#usuario");
    const { usuario, canal, nombreCanal } = await login(inputUserName.value);
    handleRecepcionMsg(canal);
    console.log(`Usuario "${usuario}" logueado, en canal "${nombreCanal}" OK`);

    inputUserName.disabled = true;

    botonSubmitLogin.disabled = true;
    envioMensajes.style.display = "flex";
    chat.style.display = "block";

    botonSubmitMsg.disabled = false;
  } catch (error) {
    console.error(error.message);
  }
}

function handleMsg(e) {
  e.preventDefault();
  try {
    const inputMsg = formularioMsg.querySelector("#msg");
    const data = sendMessage(inputMsg.value);
    addMsg(data, "lightgray");
    formularioMsg.reset();
  } catch (error) {
    console.error(error.message);
  }
}

formularioLogin.addEventListener("submit", handleLogin);
formularioMsg.addEventListener("submit", handleMsg);

ejemploChat();
