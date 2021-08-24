/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);

const startButton = document.getElementById("btn__reset");

startButton.addEventListener("click", () => {
  game.startGame();
});
