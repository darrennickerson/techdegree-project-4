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
    let lowerPhrases = [];
    phrases.forEach((phrase) => {
      lowerPhrases.push(phrase.toLowerCase());
    });
    return lowerPhrases;
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
    //Reset the Missed letters

    //Reset the chosen letters
    let qwerty = document.querySelectorAll(".key");
    qwerty.forEach((key) => {
      key.classList.remove("chosen");
      key.classList.remove("wrong");
      key.disabled = false;
    });
    const overlay = document.getElementById("overlay");
    this.missed = 0;

    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    phrase.phrase = this.activePhrase;
    phrase.addPhraseToDisplay();
  }

  handleInteration() {
    qwerty.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        phrase.checkLetter(e.target);
        e.target.disabled = true;
      }
    });
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

  removeLife() {
    let lastItem = hearts.pop();
    lastItem.src = "images/lostHeart.png";

    this.missed += 1;
    if (this.missed >= 5) {
      this.gameOver();
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver() {
    setTimeout(function () {
      document.querySelector("#game-over-message").innerHTML =
        "Better Luck Next Time!";

      overlay.style.display = "block";
      overlay.classList.remove("start");
      overlay.classList.add("wrong");
    }, 1000);
  }
}
