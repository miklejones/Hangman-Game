//Set variables for words and alphabet
var vocab = ['coffee', 'juice', 'water', 'gatorade', 'lemonade', 'tea', 'beer', 'cocktail'];

var randWord = "";
var blankWord = [];
var blankWordDisplay = "";
var userGuess = "";
var toReplace = 0;
var wordArray = [];

//Set variables for stats
var wins = 0;
var losses = 0;
var wrongGuesses = [];
var guessesLeft = 13;

function startGame() {
    guessesLeft = 13;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    blankWord = []
    blankWordDisplay = "";
    document.getElementById("play-area").innerHTML = blankWordDisplay;
    randWord = vocab[Math.floor(Math.random() * vocab.length)];
    wordArray = Array.from(randWord);
    var letterCount = wordArray.length;
    for (i = 0; i < wordArray.length; i++) {
        blankWord.push('_');
    }
    blankWordDisplay = blankWord.join(' ');

    //display said array
    document.getElementById("play-area").innerHTML = blankWordDisplay;
};

startGame();


//Logic to assign value to guess
document.onkeyup = function (event) {

    //require it is a letter
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        //Determind the guess
        userGuess = event.key.toLowerCase();
        //Logic for guessing a correct letter
        if (wordArray.indexOf(userGuess) > -1) {
            console.log('Hell yeah');
            //locate  use of the letter
            toReplace = wordArray.indexOf(userGuess);
            //replace the letter
            blankWord.splice(toReplace, 1, userGuess);
            //check for more
            for (r = 0; r < wordArray.length; r++) {

                //begin check at next interval in array
                if (wordArray.includes(userGuess, toReplace + 1) > 0) {
                    console.log('whoopee');
                    toReplace = wordArray.indexOf(userGuess, toReplace + 1);
                    //replace the letter
                    blankWord.splice(toReplace, 1, userGuess);
                } else {
                    console.log('shit');
                };
            }

            //push to HTML
            var blankWordShow = blankWord.join(' ');
            //display said array

            document.getElementById("play-area").innerHTML = blankWordShow;
        } else {
            console.log('Whoops');
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
        };


        //What to do when you win
        if (blankWord.includes('_')) {
            console.log('guess more');
        } else {
            console.log('you win');
            startGame();
        };

    } else {
        alert('Press a letter actually. hehe');
    };
};

//If there are no '_' left in blank word then you win
