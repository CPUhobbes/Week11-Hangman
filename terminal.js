var Promise = require('bluebird');
var readline = require('readline');

module.exports = function() {

	this.Terminal= function(){
		var returnLine="";

		this.reset = function() {
		    return new Promise(function(resolve, reject) {
		        resolve(process.stdout.write('\033c'));
		    });
		}

		this.ask = function(message) {

		    return new Promise(function(resolve, reject) {	
			    var line="";	
				var rl = readline.createInterface(process.stdin, process.stdout);
				rl.setPrompt(message);
				rl.prompt();
				rl.on('line', function(line) {
			     	returnLine = line;
			     	rl.close();
			     	resolve(line);
				});
			}); 
		}
		
		this.getLine = function() {
		    return new Promise(function(resolve, reject) {
		        resolve("returnLine");
		    });
		}

	}
}

		