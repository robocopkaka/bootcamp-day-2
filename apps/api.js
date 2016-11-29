var readlineSync = require('readline-sync');
var Client = require('node-rest-client').Client;
var client = new Client();
var name = readlineSync.question("Please enter your name: ");

client.get("http://www.anapioficeandfire.com/api/characters", function(data, response){
	//console.log(response);
	console.log(data);
})