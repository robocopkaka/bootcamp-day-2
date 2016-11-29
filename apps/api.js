
require('dotenv').config();
var readlineSync = require('readline-sync');
var Client = require('node-rest-client').Client;
var client = new Client();
var search = readlineSync.question("Enter what you want to search for: ");
var open = require('open');
// arguments to be passed with the url
var args = {
    headers:{'api-key': process.env.API_KEY}
};
/*
*The get calls
**/
client.get("http://content.guardianapis.com/search?q=" + search, args, function(data, response){
	
	var results = data.response
	//Getting each result and numbering them
	for(var i = 0;i <results.results.length;i++){
		console.log("\n")
		console.log(i + 1 + ")");
		
		console.log(results.results[i])		
	}
	/*
	* This if block ask the user a yes or no question. If they press 'y',
	* it asks them to enter the number attached link they want to open, 
	* and opens it on their default browser. If they say no, the program ends
	*/
	if (readlineSync.keyInYN('Do you want to open any of the links?')) {
       var number = readlineSync.question("Enter the number you want to open: ");
	   url = results.results[number - 1].webUrl
	   open(url, function (err) {
    	 if (err) throw err;
  		 console.log('The user closed the browser');
	   });
   
	} else {
  		// Another key was pressed. 
  		console.log('Thanks for visiting, bye');
  		// Do something... 
	}
	//console.log(results)
})
