const Letter = require('./Letter');

function Word(word){
  this.letters = word.split("").map(function(char) {
    return new Letter(char);
  })
}

Word.prototype.getSolution = function() {
  return this.letters.map(function(letter){
    return letter.getSolution();
  }).join('');
}

Word.prototype.toString = function() {
  return this.letters.join(' ');
}

Word.prototype.guessLetter = function(char) {
  var correctLetter = false;
  this.letters.forEach(function(letter) {
    if(letter.guess(char)) {
      correctLetter = true;
    }
  });
  console.log('\n' + this + '\n');
  return correctLetter;
};

Word.prototype.correctGuess = function() {
  return this.letters.every(function(letter) {
    return letter.show;
  });
};

module.exports = Word;
