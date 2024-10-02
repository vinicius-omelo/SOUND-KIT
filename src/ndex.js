const sons = {
  A: "sounds_boom.wav",
  S: "sounds_clap.wav",
  D: "sounds_hihat.wav",
  F: "sounds_kick.wav",
  G: "sounds_opebhat.wav",
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
