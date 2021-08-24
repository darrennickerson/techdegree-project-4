/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */

  createPhrases() {
    const phrases = [
      "A Dime a Dozen",
      "Back To Square One",
      "Barking up the wrong tree",
      "right off the bat",
      "Bigger Fish to fry",
    ];
    return phrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const phrase =
      this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return phrase;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */

  startGame() {
    const game = new Game();
    const overlay = document.getElementById("overlay");
    const phrase = new Phrase(randomPhrase.phrase);
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    phrase.addPhraseToDisplay();
  }

  handleInteration() {
    const querty = document.getElementById("qwerty");
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {}

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {}

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver() {}
}
