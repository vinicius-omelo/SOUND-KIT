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
const ativarDiv = (evento) => {
  const letra = evento.target.id;
  tocarSom(letra);
};

exibir(sons);

document.getElementById("container").addEventListener("click", ativarDiv);
