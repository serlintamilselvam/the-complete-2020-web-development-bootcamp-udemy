
// Colors array
var buttonColours = ["red", "blue", "green", "yellow"];
var firstTime = false;
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function playSound(id) {
  var audio = new Audio('sounds/'+id+'.mp3');
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  firstTime = false;
}

function animateButton(id) {
  $("#"+id).fadeTo('fast', 0.5).fadeTo('fast', 1.0);
}

function animatePress(id) {
  $("#"+id).addClass('pressed');

  // remove pressed class after a timeout of 100 milliseconds
  setTimeout(() => {
    $("#"+id).removeClass('pressed');
  }, 100)
}

function levelHeading() {
  $("#level-title").text('Level '+level);
}

function checkAnswer(currentLevel) {
  console.log('currentLevel: ', currentLevel);
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
    console.log('success');
  } else {
    playSound('wrong');
    $('body').addClass('game-over');
    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 200);
    $('#level-title').text('Game Over, Press Any Key to Restart');
    startOver();
  }
}

function nextSequence() {
  var randNumber = Math.floor(Math.random()*4);
  userClickedPattern = [];
  randomChosenColour = buttonColours[randNumber];
  gamePattern.push(randomChosenColour);
  level++;

  levelHeading();
  // to select the button type of color name as id
  playSound(randomChosenColour);
  animateButton(randomChosenColour);
}

// to detect button click
$('.simson-game-button .btn').click((evt) => {
  var userChosenColour = $(evt.target).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

// to detect keyboard click
$(document).on("keydown", (evt) => {
  if(!firstTime) {
    nextSequence();
  }
  firstTime = (!firstTime) ? (!firstTime) : firstTime
})
