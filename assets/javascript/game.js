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
    
    //=======try to set reset btn but failed=====
    // function reset(){
    //     wins = 0;
    //     guessesLeft = 9;
    //     rightLetter = [];
    //     wrongLetter = [];
    //     guessedWord = [];
    //     userGuesses = []; 
    // }

    function updateDisplay(){
         document.querySelector('#word-blanks').textContent = guessedWord.join(' ');
         document.querySelector('#numWins').textContent = wins;
     }

    function wrongDisplay(){
        document.querySelector('#showedLetters').textContent = wrongLetter;
        document.querySelector('#numLeft').textContent = guessesLeft;
    }

    // function reset(){
    //     computerWords = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    //     guessedWordLine();
    // }
  //onkeyup function
    document.onkeyup = function(event){
        userGuesses = event.key;


        //console.log(userGuesses);
        for(var i = 0; i < computerWords.length; i++){
            if(computerWords[i] === userGuesses){
                guessedWord[i] = userGuesses;
                updateDisplay();
                //winCounter++;
                winOrLose();
            } 
        }
        if (!guessedWord.includes(userGuesses)) {
            wrongLetter.push(userGuesses);
            wrongDisplay()
        }
        guessesLeft--;            
        winOrLose();
    }

    //judge win or lose
    function winOrLose(){
        if((!guessedWord.includes("_")) && guessesLeft > 0){
            wins++;
            alert('Winner!');
        } else {
            if (guessesLeft === 0) {
                alert('Loser!');
            }
        }
    }

    //guessedWordLine();
//========================================================================
//start game!!!!




