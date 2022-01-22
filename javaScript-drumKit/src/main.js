const keysNode = document.querySelectorAll(".key");

const keyToSound = {
  65: "clap",
  83: "hihat",
  68: "kick",
  70: "openhat",
  71: "boom",
  72: "ride",
  74: "snare",
  75: "tom",
  76: "tink",
};

const playSound = (key) => {
  let audio = new Audio(`sounds/${keyToSound[key]}.wav`);
  audio.play();
};

const toggleKeyHitClass = (element) => {
  element.classList.add("key-hit");
  setTimeout(() => {
    element.classList.remove("key-hit");
  }, 90);
};

keysNode.forEach((element) => {
  element.addEventListener("click", () => {
    toggleKeyHitClass(element);
    let key = element.dataset.key;
    playSound(key);
  });
});

let keys = [65, 83, 68, 70, 71, 72, 74, 75, 76];
document.addEventListener("keydown", (event) => {
  let key = event.keyCode;
  if (!keys.includes(key)) return;
  const keyElement = document.querySelector(`[data-key='${key}'`);
  toggleKeyHitClass(keyElement);
  playSound(key);
});
