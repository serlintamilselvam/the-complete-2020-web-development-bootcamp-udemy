function changeDie() {

  // First image change
  var randomNumber1 = Math.ceil(Math.random()*6);
  var selectedElement1 = document.querySelector('.dice .img1');
  var newImage1 = "images/dice"+randomNumber1+".png";
  selectedElement1.setAttribute('src',newImage1);

  // Second image change
  var randomNumber2 = Math.ceil(Math.random()*6);
  var selectedElement2 = document.querySelector('.dice .img2');
  var newImage2 = "images/dice"+randomNumber2+".png";
  selectedElement2.setAttribute('src',newImage2);

  // Change title depending on the winner
  var h1Selected = document.querySelector("h1");
  var titleChange;
  if(randomNumber1 === randomNumber2) {
    titleChange = "Draw!";
  } else if (randomNumber1 < randomNumber2){
    titleChange = "Player 2 Wins";
  } else {
    titleChange = "Player 1 Wins";
  }
  h1Selected.innerHTML = titleChange;
}


changeDie(); // function invoked
