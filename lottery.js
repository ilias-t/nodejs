'use strict'

const randomNumber = require("./randomizer");

const winningNumbers = [];
for(let i = 0; i < 10; i++) {
  winningNumbers.push(randomNumber(0,100));
}

console.log("tonights winning numbers are", winningNumbers, "!");