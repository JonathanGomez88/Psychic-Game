// Start by creating the letters in the array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create the variables that will be used in the game
var wins = 0;
var losses = 0;
var guessLetters = [];
var guessesLeft = 9;


var compPick = letters[Math.floor(Math.random() * letters.length)];

// User picks a letter
document.onkeyup = function (event) {
    var userPick = event.key;
    // Computer picks a letter
   
    // If statements determine what happens next
    if (userPick === compPick) {
        ++wins;
        guessesLeft = 9;
        guessLetters = [];
        compPick = letters[Math.floor(Math.random() * letters.length)];
        document.querySelector('#win').innerHTML = "Wins: " + wins;
    }
    else if (userPick !== compPick) {
        --guessesLeft;
        guessLetters.push(userPick);
        document.querySelector('#userPick').innerHTML = "You've tried: " + guessLetters;
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
    }
    if (guessesLeft === 0) {
        guessesLeft = 9;
        ++losses;
        compPick = letters[Math.floor(Math.random() * letters.length)];
        guessLetters = [];
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
    }
}




