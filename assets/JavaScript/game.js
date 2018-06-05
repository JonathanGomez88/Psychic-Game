// Start by creating the letters in the array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create the variables that will be used in the game
var wins = 0;
var losses = 0;
var guessLetters = [];
var guessesLeft = 9;



// User picks a letter
document.onkeyup = function (event) {
    guessLetters = event.key;
    // Computer picks a letter
    var compPick = letters[Math.floor(Math.random() * letters.length)];
    // If statements determine what happens next
    if (guessLetters === compPick) {
        ++wins;
        guessesLeft = 9;
        guessLetter = [];
        document.querySelector('#win').innerHTML = "Wins: " + wins;
    }
    else if (guessLetters !== compPick) {
        --guessesLeft;
        guessLetters.push(guessLetters);
        document.querySelector('#guessLetters').innerHTML = "You've tried " + guessLetters;
        document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
    }
    if (guessesLeft === 0) {
        guessesLeft = 9;
        ++losses;
        guessLetters = [];
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
    }
}




