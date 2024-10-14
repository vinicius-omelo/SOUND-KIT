const sons = {
  A: "sounds_boom.wav",
  S: "sounds_clap.wav",
  D: "sounds_hihat.wav",
  F: "sounds_kick.wav",
  G: "sounds_openhat.wav",
  H: "sounds_ride.wav",
  J: "sounds_snare.wav",
  K: "sounds_tink.wav",
  L: "sounds_tom.wav",
};

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(`./src/sounds/${sons[letra]}`);
  audio.play();
};

const adicionarEfeito = (letra) =>
  document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (evento) => {
  let letra = "";
  if (evento.type == "click") {
    letra = evento.target.id;
  } else {
    letra = evento.key.toUpperCase();
  }
  const letraPermitida = sons.hasOwnProperty(letra);
  if (letraPermitida) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  }
};

exibir(sons);

document.getElementById("container").addEventListener("click", ativarDiv);

window.addEventListener("keydown", ativarDiv);
