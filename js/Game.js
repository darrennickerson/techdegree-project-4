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
    const qwerty = document.querySelectorAll(".key");
    qwerty.forEach((key) => {
      key.classList.remove("chosen");
      key.classList.remove("wrong");
      key.disabled = false;
    });
    const overlay = document.getElementById("overlay");
    this.missed = 0;
    // add something here to not get the same phrase back to back
    overlay.style.display = "none";
    this.activePhrase = null;
    this.activePhrase = this.getRandomPhrase();
    phrase.phrase = this.activePhrase;
    phrase.addPhraseToDisplay();
  }

  /*
   * handles all the button clicks
   */

  handleInteration() {
    startButton.addEventListener("click", () => {
      game.startGame();

      //creates a new array for the scoreboard images.
      for (let i = 0; i < scoreboard.length; i++) {
        scoreboard[i].lastChild.src = "images/liveHeart.png";
        hearts.push(scoreboard[i].lastChild);
      }
    });
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

  checkForWin() {
    let notFound = 0;
    const phraseSection = document.querySelector("#phrase");
    for (let i = 0; i < phraseSection.children[0].children.length; i++) {
      if (phraseSection.children[0].children[i].classList.contains("hide")) {
        notFound += 1;
      }
    }
    if (notFound === 0) {
      this.gameOver(true);
    }
  }

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
      this.gameOver(false);
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */

  gameOver(gameWon) {
    overlay.classList.remove("win");
    overlay.classList.remove("lose");
    let message = "";
    let messageStyle = "";
    if (gameWon === true) {
      message = "Congrats you won!";
      messageStyle = "win";
    } else {
      message = "Better luck next time!";
      messageStyle = "lose";
    }
    // delay the overlay .5 seconds
    setTimeout(function () {
      document.querySelector("#game-over-message").innerHTML = message;
      overlay.style.display = "block";
      overlay.classList.add(messageStyle);
    }, 500);
  }

  secondChance() {
    let awarded = Math.floor(Math.random() * 100);
    let chances = Math.floor(Math.random() * (4 - 1) + 1);
    if (awarded > 25) {
      this.missed = this.missed - chances;
      setTimeout(function () {
        overlay.style.display = "none";
        return this.missed;
      }, 1000);
    }
  }
}
