const sounds = [
  "Epic Hybrid",
  "Hybrid Cinematic",
  "Short Horror",
  "Organic Hits",
  "Traimory Mega Horn",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});
