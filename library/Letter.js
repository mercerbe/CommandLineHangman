function Letter(char) {
  this.char = char;
  this.show = false;
}

Letter.prototype.toString = function() {
  if(this.show === false){
  return "_";
} else {
  return this.char;
}

}

Letter.prototype.getSolution = function() {
  return this.char;
}

Letter.prototype.guess = function(charGuess) {
  if(charGuess.toUpperCase() === this.char.toUpperCase()) {
    this.show = true;
    return true;
  } else {
    return false;
  }
}

module.exports = Letter;
