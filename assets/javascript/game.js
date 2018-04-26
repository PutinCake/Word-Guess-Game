//create words 
var wordsArray = ["simba", "thelionking", "tiger", "monkey", "goat", "dog", "timon", "pumbaa"];
var computerWords = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var wins = 0;
var winCounter = 0;
var loss = 0;
var guessesLeft = 9;
var rightLetter = [];
var wrongLetter = [];
var guessedWord = [];
var userGuesses = [];
console.log(computerWords);

//function startGame(){

    function guessedWordLine() {
        for(var i = 0; i < computerWords.length; i++) {
            guessedWord.push('_');
        }
    }

    guessedWordLine();

    function updateDisplay(){
        document.querySelector('#word-blanks').textContent = guessedWord.join(' ');
    }

    
    // function reset(){
    //     computerWords = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    //     guessedWordLine();
    // }

        //onkeyup function
        document.onkeyup = function(event){
            userGuesses = event.key;
            console.log(userGuesses);
            for(var i = 0; i < computerWords.length; i++){
                if(computerWords[i] === userGuesses){
                    guessedWord[i] = userGuesses;
                    updateDisplay();
                    winCounter++;
                    winOrLose();
                } 
            }
            if (!guessedWord.includes(userGuesses)) {
                wrongLetter.push(userGuesses);
            }
            guessesLeft--;            
            winOrLose();
        }

        function winOrLose(){
            if(winCounter === computerWords.length){
                alert('Winner!');
                wins++;
                console.log(wins);
            } else {
                if (guessesLeft === 0) {
                    alert('Loser!');
                }
            }

    }
/*
    var html = 
    "<h1>PRESS ANY KEY TO GET STRATED!!!</h1>" +
    "<p>Wins:"  + wins + "</p>"+
    "<p>Word:</p>" +
    "<p>" + computerWords + "</p>" +
    "<p>Numbers of Guesses left: " + guessesLeft + "</p>"
    "<P>Letters Already Guessed: " + guessedWord + "</P>";

    document.querySelector("#game").innerHTML = html;
*/
/*
    var html = 
	"<h1> The Psychic Game ---Start!!!</h1>" +
	"<p>Guess what letter I'm thinking of</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + numGuesses + "</p>" +
	"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;
*/


//========================================================================
//start game!!!!


