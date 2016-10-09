module.exports = function() { 

	//Get a new word constructor/object
	this.GetNewWord = function(){
		//Private word list
		var WORDLIST =['atlantis', 'columbia', 'discovery', 'endeavour', 'challenger', 'voyager', 'enterprise',
					'solid state booster', 'space shuttle', 'mission control', 'apollo', 'gemini', 'mercury',
					'hubble space telescope', ' orbiter vehicle', 'kennedy space center', 'skylab',
					'lunar rover', 'command module', 'new horizons'];
		//Return random word
		this.getWord = function(){
			return WORDLIST[Math.floor(Math.random()*WORDLIST.length+1)-1]; //equalizes chance of last value getting called
		}

	}
};