document.querySelector(".roll-button").addEventListener("click", rollDice);

function rollDice() {
  // Player 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImage1 = "images/Dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", randomImage1);

  // Player 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImage2 = "images/Dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randomImage2);

  // Winner Text
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").textContent = "It's a Draw!";
  }
}
