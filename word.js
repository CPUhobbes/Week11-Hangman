module.exports = function() { 

	//Get a new word constructor/object
	this.ValidateWord = function(word){
		var word = word.toLowerCase();
		var correctLetters =0;
		word.split("").forEach(function(value,index){
			if(value === " "){
				correctLetters+=1;
			}
		});

		
		this.checkLetter = function(letter){
			var letterArr = [];
			letter = letter.toLowerCase();
			for(var i=0;i<word.length;++i){
				if(word.charAt(i) === letter){
					letterArr.push(i);
					correctLetters+=1;
				}
			}
			return letterArr;
		}

		this.alreadyGuessed = function(letterArr, letter){
			if(letterArr.indexOf(letter)>-1){
				return true;
			}
			else{
				return false;
			}
		}

		this.hasWon = function(){
			if(correctLetters === word.length){
				return true;
			}
			else{
				return false;
			}
		}

	}
};