
var drumButtons = document.querySelectorAll(".drum");

var tom1Sound = new Audio("sounds/tom-1.mp3");
var tom2Sound = new Audio("sounds/tom-2.mp3");
var tom3Sound = new Audio("sounds/tom-3.mp3");
var tom4Sound = new Audio("sounds/tom-4.mp3");
var snareSound = new Audio("sounds/snare.mp3");
var crashSound = new Audio("sounds/crash.mp3");
var kickBassSound = new Audio("sounds/kick-bass.mp3");

// Detecting Button Press
for (let drumButton of drumButtons) {
  drumButton.addEventListener("click", function () {
    playDrumSound(this.textContent);
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
  playDrumSound(event.key);
});

function playDrumSound(key) {
  switch (key) {
    case "w":
      tom1Sound.play();
      break;
    case "a":
      tom2Sound.play();
      break;
    case "s":
      tom3Sound.play();
      break;
    case "d":
      tom4Sound.play();
      break;
    case "j":
      snareSound.play();
      break;
    case "k":
      crashSound.play();
      break;
    case "l":
      kickBassSound.play();
      break;

    default:
      console.log(key);
  }

}
