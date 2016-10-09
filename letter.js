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
			console.log("Hangman NASA Edition");
			console.log("**"+border+"***    Wins: "+wins);
			console.log("* "+spacing+"  *    Losses: "+losses);
			console.log("* "+spacing+"  *    Guesses Left: "+guesses);
			console.log("*  "+display.join(" ")+("  *"));
			console.log("* "+spacing+"  *");
			console.log("* "+spacing+"  *");
			console.log("**"+border+"***");
			console.log("Letters Guessed: "+lettersGuessed.join(" ").toUpperCase());
			if(error.length>0){
				console.log("Error... "+error);
			}
		}
	}
};