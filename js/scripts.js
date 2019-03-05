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


//user interface portion.
$(document).ready(function() {
 $("button#start").click(function(event) {
   user1 = new User(true);
   user2 = new User(false);
 });

  $("#start").click(function(event) {
    $("#total-score-user1").empty();
    $("#roll-user1").empty();
    $("#current-score-user1").empty();
    $("#total-score-user2").empty();
    $("#roll-user2").empty();
    $("current-score-user2").empty();
  });

  $("button#rollA").click(function() {
      user1.score = diceRoll();
      $("#roll-user1").html(user1.score);
      user1.firstRoll();
      $("#current-score-user1").html(user1.roundScore);
    });

    $("button#rollB").click(function() {
      user2.score = diceRoll();
      $("#roll-user2").html(user1.score);
      user2.firstRoll();
      $("#current-score-user2").html(user1.roundScore);
    });

    $("button#rollA").click(function() {
      user1.hold();
      $("#total-score-user1").html(user1.totalScore);
      $("#current-score-user1").val("");
      $("#roll-user1").val("");
      user1.winner();
    });

    $("button#rollB").click(function() {
      user2.hold();
      $("#total-score-user2").html(user1.totalScore)
      $("#current-score-user2").val("");
      $("#roll-user2").val("");
      user2.winner();
    });
  });
