
var drumButtons = document.querySelectorAll(".drum");

// Detecting Button Press
for (let drumButton of drumButtons) {
  drumButton.addEventListener("click", function () {
    playDrumSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (event) {
  playDrumSound(event.key);
  buttonAnimation(event.key);
});

function playDrumSound(key) {
  switch (key) {
    case "w":
      var tom1Sound = new Audio("sounds/tom-1.mp3");
      tom1Sound.play();
      break;
    case "a":
      var tom2Sound = new Audio("sounds/tom-2.mp3");
      tom2Sound.play();
      break;
    case "s":
      var tom3Sound = new Audio("sounds/tom-3.mp3");
      tom3Sound.play();
      break;
    case "d":
      var tom4Sound = new Audio("sounds/tom-4.mp3");
      tom4Sound.play();
      break;
    case "j":
      var snareSound = new Audio("sounds/snare.mp3");
      snareSound.play();
      break;
    case "k":
      var crashSound = new Audio("sounds/crash.mp3");
      crashSound.play();
      break;
    case "l":
      var kickBassSound = new Audio("sounds/kick-bass.mp3");
      kickBassSound.play();
      break;

    default:
      console.log(key);
  }

}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
