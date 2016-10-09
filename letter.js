var colors = require('colors');
module.exports = function() { 

	//Get a new word constructor/object
	this.DisplayWord = function(word){
		var word = word.toUpperCase();
		var display = [];
		var border = "";
		var spacing = "";

		for(var i = 0; i<word.length; ++i){
			if(word[i] === " "){
				display.push(" ");
			}
			else{
				display.push("_");
			}
			border+="**";
			spacing+="  ";
		}

		this.updateWord = function(letters){

			for(var i=0;i<letters.length;++i){
				display[letters[i]] = word[letters[i]].toUpperCase();
			}
		}
		this.endGame = function(){
			display = word.split("");

		}
		this.printWord = function(wins,losses, guesses, lettersGuessed, error){
			console.log(colors.blue.bold("Hangman NASA Edition"));
			console.log(colors.red.bold("**"+border+"***")+"    "+colors.green.bold("Wins: "+wins));
			console.log(colors.red.bold("* "+spacing+"  *")+"    "+colors.red.bold("Losses: "+losses));
			console.log(colors.red.bold("* "+spacing+"  *")+"    Guesses Left: "+guesses);
			console.log(colors.red.bold("*  ")+colors.bold(display.join(" "))+colors.red.bold("  *"));
			console.log(colors.red.bold("* "+spacing+"  *"));
			console.log(colors.red.bold("* "+spacing+"  *"));
			console.log(colors.red.bold("**"+border+"***"));
			console.log("Letters Guessed: "+colors.rainbow(lettersGuessed.join(" ").toUpperCase()));
			if(error.length>0){
				console.log("Error... "+error);
			}
		}
	}
};