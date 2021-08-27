/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const phrase = new Phrase();
const startButton = document.getElementById("btn__reset");

game.handleInteration();
let scoreboard = document.getElementById("scoreboard").children[0].children;
let hearts = [];
