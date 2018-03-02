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


//Function to restart after win or loss
function showBlanks() {

    //Create array of the random word
    var wordArray = Array.from(randWord);

    //Count number of items within the array and add them to the blank array as underscores
    var letterCount = wordArray.length;
    for (i = 0; i < wordArray.length; i++) {
        blankWord.push('_');
    }
    blankWord = blankWord.join(' ');

    //display said array
    document.getElementById("play-area").innerHTML = blankWord;
}




//Create array of the random word
var wordArray = Array.from(randWord);
//Count number of items within the array and add them to the blank array as underscores
var letterCount = wordArray.length;
for (i = 0; i < wordArray.length; i++) {
    blankWord.push('_');
}
blankWord = blankWord.join(' ');
//display said array
document.getElementById("play-area").innerHTML = blankWord;

//Logic to assign value to guess
document.onkeyup = function (event) {

    //Determind the guess
    var userGuess = event.key.toLowerCase();

    //Logic for guessing a correct letter
    if (randWord.indexOf(userGuess) > -1) {
        console.log('Hell yeah');
    } else {
        console.log('Whoops');
    };

};
