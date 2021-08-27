/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  /**
   * Display phrase on game board
   */

  addPhraseToDisplay() {
    const phraseSection = document.querySelector("#phrase");
    let html = `<ul>`;
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] !== " ") {
        html += ` <li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      } else {
        html += `<li class="space"> </li>`;
      }
    }
    html += ` </ul> </div>`;
    phraseSection.innerHTML = html;
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    if (this.phrase.includes(letter.textContent)) {
      this.showMatchedLetter(letter.textContent);
      letter.classList.add("chosen");
      game.checkForWin();
    } else {
      letter.classList.add("wrong");
      game.removeLife();
    }
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const ul = document.querySelector("#phrase").children[0].children;

    for (let i = 0; i < ul.length; i++) {
      if (ul[i].textContent === letter) {
        ul[i].classList.add("show");
        ul[i].classList.remove("hide");
      }
    }
  }
}
