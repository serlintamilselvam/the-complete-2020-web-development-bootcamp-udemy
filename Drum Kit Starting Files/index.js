// Using normal function
// document.querySelectorAll(".drum").forEach(function(selectedButton) {
//   selectedButton.addEventListener("click", function () {
//     console.log(selectedButton.innerHTML + " clicked");
//   })
// });

function addAudioFiles(textDetected) {
  var audioUrl = 'sounds/';
  switch (textDetected) {
    case 'w':
      audioUrl += 'tom-1.mp3';
      break;
    case 'a':
      audioUrl += 'tom-2.mp3';
      break;
    case 's':
      audioUrl += 'tom-3.mp3';
      break;
    case 'd':
      audioUrl += 'tom-4.mp3';
      break;
    case 'j':
      audioUrl += 'snare.mp3';
      break;
    case 'k':
      audioUrl += 'crash.mp3';
      break;
    case 'l':
      audioUrl += 'kick-bass.mp3';
      break;
    default:
      console.log('Do NOTHING');
  }
  var audioObject = new Audio(audioUrl);
  audioObject.play();
}

function buttonAnimation(keyPressed) {
  var selectedElement = document.querySelector("."+keyPressed);
  selectedElement.classList.add("pressed");
  setTimeout(() => {
    selectedElement.classList.remove("pressed");
  }, 100)
}


// Using arrow function to detect click event
document.querySelectorAll(".drum").forEach((selectedButton, index) => {
  selectedButton.addEventListener("click", () => {
    var buttonText = selectedButton.innerHTML;
    addAudioFiles(buttonText);
    buttonAnimation(buttonText);
  })
})

// Using arrow function to detect key board event
document.addEventListener("keydown", (event) => {
  addAudioFiles(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
})
