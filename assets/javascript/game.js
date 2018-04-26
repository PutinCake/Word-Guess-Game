//create words 
var wordsArray = ["simba", "thelionking", "tiger", "monkey", "goat", "dog", "timon", "pumbaa"];
var computerWords = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var wins = 0;
var loss
var guessesLeft = 9;
var guessedRightWord = [];
var guessedWrongWord = [];
var guessedWord = [];
console.log(computerWords);


function guessedWordLine() {
    for(var i = 0; i < computerWords.length; i++) {
        guessedWord.push('_');
    }
    return guessedWord;
}

console.log(guessedWordLine());
//get users guess
document.addEventListener('keypress', (event)=> {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
    //console.log(keyword);

    if(computerWords.indexOf(keycode) > -1){
        //console.log(true);
        computerWords.push(keyword);

        console.log(guessedWord);
        guessedWordLine[computerWords.indexOf(keyword)] = keyword;


    }
});




var wins = 0;
var guessesLeft = 9;


