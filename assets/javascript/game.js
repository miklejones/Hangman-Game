//Set variables for stats
var wins = 0;
var losses = 0;
var guessesLeft = 0;

//Set variables for words and alphabet
var vocab = ['cheeseesese', 'qwerqwertyuityuiopopasdfasdfgjkhjkllzxcvzxcvvbmnvmnasgfkljgasdjgqweuiyweiqtkcvb'];
var randWord = vocab[Math.floor(Math.random() * vocab.length)];
var blankWord = [];
var blankWordDisplay = "";
var userGuess = "";
var toReplace = 0;

//Create array of the random word
var wordArray = Array.from(randWord);

//Var for correct guess
var hit = false;



//Function to restart blanks after win or loss
function showBlanks() {



    //Count number of items within the array and add them to the blank array as underscores
    var letterCount = wordArray.length;
    for (i = 0; i < wordArray.length; i++) {
        blankWord.push('_');
    }
    blankWordDisplay = blankWord.join(' ');

    //display said array
    document.getElementById("play-area").innerHTML = blankWordDisplay;
};

//Call function
showBlanks();


//Logic to assign value to guess
document.onkeyup = function (event) {

    //Determind the guess
    userGuess = event.key.toLowerCase();

    //Logic for guessing a correct letter
    if (wordArray.indexOf(userGuess) > -1) {
        console.log('Hell yeah');
        hit = true;

        //locate  use of the letter
        toReplace = wordArray.indexOf(userGuess);
        //replace the letter
        blankWord.splice(toReplace, 1, userGuess);

        //check for more
        for (r = 0; r < wordArray.length; r++) {
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
        hit = false;
    };

};

//If there are no '_' left in blank word then you win
