// returns a random number between a min (inclusive) and max (exclusive) range
function randomizer(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

module.exports = randomizer;