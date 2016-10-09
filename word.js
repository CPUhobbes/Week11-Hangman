module.exports = function() { 

	//Get a new word constructor/object
	this.ValidateWord = function(word){
		var word = word;
		
		this.printWord = function(){
			console.log(word);
		}
		this.checkLetter = function(letter){
			console.log(letter, word);
			if(word.includes(letter.toLowerCase())){
				return(word.indexOf(letter));
			}
			else
				return 0;

		}

	}
}