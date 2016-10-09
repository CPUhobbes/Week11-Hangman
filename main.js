
var inquirer = require('inquirer');
var gameJS = require('./game.js')();
var wordJS = require('./word.js')();

var newWord = new GetNewWord();
var printWord = new ValidateWord(newWord.getWord());
printWord.printWord();
console.log(printWord.checkLetter('e'));





// function go(){
// 	inquirer.prompt([
// 			{
// 				type: "input",
// 				message: "What is the name of a song you want to know about?",
// 				name: "song"
// 			}
// 			]).then(function (song) {
// 				//Function to get song information
// 				text = song.song;
// 				go();
// 			});

// }
// go();
