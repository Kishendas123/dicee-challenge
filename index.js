
//Generating random number (between 1 to 6):
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Link dice to number:
var randomDiceSource1 = "./images/dice" + randomNumber1 + ".png"
var randomDiceSource2 = "./images/dice" + randomNumber2 + ".png"

//Change attributes on element:
var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelectorAll("img")[1];


// Set attribute to the src of dice 1:
dice1.setAttribute("src", randomDiceSource1);
dice2.setAttribute("src", randomDiceSource2);

// Change h1 to tell which player wins:
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🎊";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🥳";
} else {
  document.querySelector("h1").innerHTML = "You Tied! 🤝";
}
