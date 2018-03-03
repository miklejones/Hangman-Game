//Set variables for words and alphabet
var vocab = ['cider', 'milk', 'coffee', 'juice', 'water', 'gatorade', 'lemonade', 'tea', 'beer', 'cocktail'];

var randWord = "";
var blankWord = [];
var blankWordDisplay = "";
var userGuess = "";
var toReplace = 0;
var wordArray = [];
var audio = new Audio('assets/sounds/slurp.mp3');


//Set variables for stats
var wins = 0;
document.getElementById("wins").innerHTML = wins;
var losses = 0;
var guessedLetters = [];
var guessesLeft = 13;

function startGame() {
    guessesLeft = 13;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    guessedLetters = [];
    document.getElementById("guessed-letters").innerHTML = guessedLetters;
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

        //Push guess to letters already guessed and display them
        guessedLetters.push("  " + userGuess);
        document.getElementById("guessed-letters").innerHTML = guessedLetters;

        //Logic for guessing a correct letter
        if (wordArray.indexOf(userGuess) > -1) {
            //locate  use of the letter
            toReplace = wordArray.indexOf(userGuess);
            //replace the letter
            blankWord.splice(toReplace, 1, userGuess);
            //check for more
            for (r = 0; r < wordArray.length; r++) {

                //begin check at next interval in array
                if (wordArray.includes(userGuess, toReplace + 1) > 0) {
                    toReplace = wordArray.indexOf(userGuess, toReplace + 1);
                    //replace the letter
                    blankWord.splice(toReplace, 1, userGuess);
                } else {
                };
            }

            //push to HTML
            var blankWordShow = blankWord.join(' ');
            //display said array

            document.getElementById("play-area").innerHTML = blankWordShow;
        } else {
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
        };


        //What to do when you win
        if (blankWord.includes('_')) {
        } else {
            audio.play();
            wins++;
            //What if you beat the game
            if (wins > 9 && wins < 16) {
                document.getElementById("wins").innerHTML = wins;
                alert("Okay. We get it. You're super smart. Now get outside and eat some grass.");
            } else if (wins > 15) {
                document.getElementById("wins").innerHTML = wins;
                alert('Fine.');
                alert('Seriously.');
                alert('There was no reason to make it this far');
                alert('You happy?');
                alert('Fine. Start all over again.');
                wins = 0;
                document.getElementById("wins").innerHTML = wins;
                startGame();

            } else {
                document.getElementById("wins").innerHTML = wins;
                //remove word from vocab
                vocabRemove = vocab.indexOf(randWord);
                vocab.splice(vocabRemove, 1);

                startGame();
            };
        };

        //What to do if you lose
        if (guessesLeft < 1) {
            alert('You lose. But try again. See if you can guess ALL of the words.')
            startGame();
        };

        //What if you beat the game

    } else {
        alert('Press a letter actually. hehe');
    };
};



