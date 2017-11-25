$(document).ready(function() {
  var Random = Math.floor(Math.random() * 101 + 19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc

  var ranNum1 = Math.floor(Math.random() * 11 + 1);
  var ranNum2 = Math.floor(Math.random() * 11 + 1);
  var ranNum3 = Math.floor(Math.random() * 11 + 1);
  var ranNum4 = Math.floor(Math.random() * 11 + 1);
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12

  var playerTotal = 0;
  var wins = 0;
  var losses = 0;

$('#playerWins').text(wins);
$('#playerLosses').text(losses);

//resets the game
function reset() {
      Random = Math.floor(Math.random() * 101 + 19);
      console.log(Random)
      $('#randomNumber').text(Random);
      ranNum1 = Math.floor(Math.random() * 11 + 1);
      ranNum2 = Math.floor(Math.random() * 11 + 1);
      ranNum3 = Math.floor(Math.random() * 11 + 1);
      ranNum4 = Math.floor(Math.random() * 11 + 1);
      playerTotal = 0;
      $('#finalTotal').text(playerTotal);
      }
//adds the wins to the playerTotal
function winner() {
alert("Congrats You Won!!!");
  wins++;
  $('#playerWins').text(wins);
  reset();
}
//adds the losses to the playerTotal
function loser() {
alert ("Sorry You Lose!!!");
  losses++;
  $('#playerLosses').text(losses);
  reset()
}
//sets up click for jewels
  $('#one').on('click', function() {
    playerTotal = playerTotal + ranNum1;
    console.log("New playerTotal = " + playerTotal);
    $('#playerTotal').text(playerTotal);
          //sets win/lose conditions
        if (playerTotal == Random) {
          winner();
        }
        else if (playerTotal > Random) {
          loser();
        }
  })
  $('#two').on('click', function() {
    playerTotal = playerTotal + ranNum2;
    console.log("New playerTotal = " + playerTotal);
    $('#playerTotal').text(playerTotal);
        if (playerTotal == Random) {
          winner();
        }
        else if (playerTotal > Random) {
          loser();
        }
  })
  $('#three').on('click', function() {
    playerTotal = playerTotal + ranNum3;
    console.log("New playerTotal = " + playerTotal);
    $('#playerTotal').text(playerTotal);

    //sets win/lose conditions
          if (playerTotal == Random) {
          winner();
        }
        else if (playerTotal > Random) {
          loser();
        }
  })
  $('#four').on('click', function() {
    playerTotal = playerTotal + ranNum4;
    console.log("New playerTotal = " + playerTotal);
    $('#playerTotal').text(playerTotal);

          if (playerTotal == Random) {
          winner();
        }
        else if (playerTotal > Random) {
          loser();
        }
  });
});
