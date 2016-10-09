var Promiser = require('bluebird');
var gameJS = require('./game.js')();
var wordJS = require('./word.js')();
var letterJS = require('./letter.js')();

var terminalJS = require('./terminal.js')();

var GUESSES = 7;

var terminal = new Terminal();
var newWord = new GetNewWord();
var word = newWord.getWord();
var display = new DisplayWord(word);
var validateWord = new ValidateWord(word);

var wins = 0;
var losses = 0;
var guessesLeft = GUESSES;
var displayError=false;
var lettersGuessed =[];


function resetGame(){
	guessesLeft = GUESSES;
	lettersGuessed =[];
	word = newWord.getWord();
	display = new DisplayWord(word);
	validateWord = new ValidateWord(word);
	run();
}


function finalDisplay(){
	terminal.reset();
	display.endGame();
	display.printWord(wins,losses, guessesLeft, lettersGuessed, false);
}

function playAgain(extraText){

	terminal.ask(extraText+"Want to Play Again? (Y/N)").then(function(result){
		if(result.toLowerCase() === 'y'){
			resetGame();
		}
		else if(!(result.toLowerCase() === 'n')){
			playAgain("I'm Sorry, ");
		}
	});
}

function run(){
	terminal.reset();
	display.printWord(wins,losses, guessesLeft, lettersGuessed, displayError);
	displayError = "";
	terminal.ask("Enter Your Guess: ").then(function(result){
		if(result.length<2 && result.match(/[A-Za-z0-9]+/)){
			if(!validateWord.alreadyGuessed(lettersGuessed, result) ){

				lettersGuessed.push(result);

				var letterResults = validateWord.checkLetter(result);

				if(letterResults.length>0){

					display.updateWord(letterResults);
				}
				else{
					guessesLeft-=1;
				}
			}
			else{
				displayError = "Letter already guessed!";
			}
		}
		else{
			displayError = "Guess only 1 letter!";
		}

		if(guessesLeft>0){
			if(!validateWord.hasWon()){
				run();
			}
			else{
				wins+=1;
				finalDisplay();
				console.log("You Win!");
				playAgain("");
			}
		}
		else{
			losses+=1;
			finalDisplay();
			console.log("You Lose!");
			playAgain("");
		}
	});
}

run();




