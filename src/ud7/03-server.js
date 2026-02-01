let userName = null;
let channel = null;

async function login(nombreUsuario) {
  if (!nombreUsuario.length) {
    throw new Error("Debe introducir un usuario");
  }
  if (userName) {
    throw new Error("Ya estás logueado");
  }
  userName = nombreUsuario;
  const channelName = "chat-room";
  channel = new window.BroadcastChannel(channelName);

  return {
    usuario: userName,
    canal: channel,
    nombreCanal: channelName,
  };
}

function sendMessage(msg) {
  if (!userName) {
    throw new Error("Debes loguearte antes");
  }
  if (!channel) {
    throw new Error("Sala de chat no abierta");
  }
  if (!msg.length) {
    throw new Error("Debe introducir un mensaje");
  }
  channel.postMessage({
    autor: userName,
    texto: msg,
  });
  return {
    autor: userName,
    texto: msg,
  };
}

export { login, sendMessage };
