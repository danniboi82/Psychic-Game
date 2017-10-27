
//creates an array of alphabets
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//variables to hold correct incorrect and lives
var correct = 0;
var incorrect = 0;
var lives = 9;

document.onkeyup = function (event) {
    var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    var userGuess = event.key;


    if (userGuess == letter) {
        alert("You are correct!")
        correct++;
    } else if (userGuess !== letter) {
        alert("You are WRONG!!!")
        incorrect++;
        lives--;
    }// else if(lives = 0) {
    //     alert("You are OUT OF LIVE Press F5 to restart");
    //     document.location.reload();
    // }  ***ENDING GAME WHEN LIVES ARE UP ISN"T WORKING***

    $("#userGuess").html("<p>You chose: " + userGuess + "</p>");
    $("#computerGuess").html("<p>Computer chose: " + letter + "</p>");
    $("#correct").html("<p>Correct: " + correct + "</p>");
    $("#incorrect").html("<p>Incorrect: " + incorrect + "</p>");
    $("#lives").html("<p> lives: " + lives + "</p>");
}
