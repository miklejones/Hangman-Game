//Set variables for stats
var wins = 0;
var losses = 0;
var guessesLeft = 0;

//Set variables for words and alphabet
var vocab = ['coffee', 'juice', 'water'];
var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randWord = vocab[Math.floor(Math.random() * vocab.length)];
var blankWord = [];

//Var for correct guess
var hit = false;

//Display random word
//Create array of the random word
//Count number of items within the array and add them to the blank array as underscores
//display said array


//Logic to assign value to guess
document.onkeyup = function (event) {

    console.log(event);
    //Determind the guess
    var userGuess = epigs.key.toLowerCase();

    //Logic for guessing a correct letter
    if (randWord.indexOf(userGuess) > -1) {
        console.log('Hell yeah');
    } else {
        console.log('Whoops');
    };



};

document.onkeydown = function (event) {
    console.log(event);
};