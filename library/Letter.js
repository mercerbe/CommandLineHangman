function Letter(char) {
  this.show = !/[a-z1-9]/ig.test(char);
  this.char = char;
}

Letter.prototype.toString = function() {
  if(this.show === true){
  return this.char;
} else {
  return "_";
};

}

Letter.prototype.getSolution = function() {
  return this.char;
}

Letter.prototype.guess = function(val) {
  if(val.toUpperCase() === this.char.toUpperCase()) {
    this.show = true;
    return true;
  }
    return false;

};

module.exports = Letter;
