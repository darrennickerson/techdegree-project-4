/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const phrase = new Phrase();
//const randomPhrase = game.getRandomPhrase();
//const phrase = new Phrase(randomPhrase.phrase);

const startButton = document.getElementById("btn__reset");

startButton.addEventListener("click", () => {
  game.startGame();

  //creates a new array for the scoreboard images.

  for (let i = 0; i < scoreboard.length; i++) {
    scoreboard[i].lastChild.src = "images/liveHeart.png";
    hearts.push(scoreboard[i].lastChild);
  }
});

game.handleInteration();
let scoreboard = document.getElementById("scoreboard").children[0].children;
let hearts = [];
