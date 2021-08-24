/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = this.phrase;
  }

  phrase = game.getRandomPhrase();

  /**
   * Display phrase on game board
   */

  addPhraseToDisplay() {
    const phraseSection = document.querySelector("#phrase");
    let html = `<div id="phrase" class="section">
      <ul>`;
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
  checkLetter() {}

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter() {}
}
