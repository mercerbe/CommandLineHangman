var inquirer = require('inquirer');
var chalk = require('chalk');
var Word = require('./Word');
var HPwords = require('./HPwords');

function Game() {
  var self = this;

  this.play = function() {
    this.guessesLeft = 10;
    this.nextWord();
  };

  this.nextWord = function() {
    var randomWord = HPwords[Math.floor(Math.random()*HPwords.length)];
    this.currentWord = new Word(randomWord);
    console.log('\n' + this.currentWord + '\n');
    this.makeGuess();
  }

  this.makeGuess = function() {
    this.promptForLetter().then(function(){
      if(self.guessesLeft = 0) {
        console.log("Out of guesses! The word was: " + self.currentWord.getSolution() + '\n');
        self.playAgain();
      } else if (self.currentWord.correctGuess()) {
        console.log("Correct! On to the next word!");
        self.nextWord();
      } else {
        self.makeGuess();
      }
    });
  };

  this.playAgain = function() {
    inquirer.prompt([
      {
      type: 'confirm',
      name: 'confirm',
      message: 'Want to play again?'
      }
    ]).then(function(val){
      if(val.confirm) {
        self.play();
      } else {
        self.quit();
      }
    });
  };

  this.promptForLetter = function() {
    return inquirer.prompt([
      {
      type: 'input',
      name: 'input',
      message: 'Guess a letter:',
      validate: function(val){
        return /[a-z1-9]/gi.test(val);
        }
      }
    ]).then(function(val){
      var guessedCorrectly = self.currentWord.guessLetter(val.choice);
      if(guessedCorrectly) {
        console.log(chalk.green("\nCorrect!\n"));
      } else {
        self.guessesLeft --;
        console.log("\nIncorrect.\n");
        console.log(self.guessesLeft + " guesses left.\n");
      }
    });
  };

  this.quit = function(){
    console.log("\nCome play again!\n");
    process.exit(0);
  };

}

module.exports = Game;
