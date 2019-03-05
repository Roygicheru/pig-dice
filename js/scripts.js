// Business Logic.
var user1;
var user2;

function User() {
  this.score = 0;
  this.currentScore = 0;
  this.totalScore = 0;
}

function diceRoll() {
  return Math.floor(Math.random() * (4 + 2)) + 1;
}

User.prototype.newGame = function() {
  this.score = 0;
  this.currentScore = 0;
  this.totalScore = 0;
}

User.prototype.hold = function() {
  this.totalScore += this.score;
  this.currentScore = 0;
  alert("Next player's turn!")
}

User.prototype.firstRoll = function() {
  if (this.score === 1) {
    this.currentScore = 0;
    alert("Oops!You've rolled a 1...switch to the next player.");
  } else {
    this.currentScore += this.score;
  }
}

User.prototype.winner = function() {
  if (this.totalScore >= 100) {
    alert("Yaay, you've won!")
  }
}
