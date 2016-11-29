module.exports = {
	words:function(words){
		var split_string = words.trim().split(/[\s,]+/)
  		var results = {}
  		for(var i = 0; i< split_string.length;i++){
    		if(!results.hasOwnProperty(split_string[i])){
      			results[split_string[i]] = 1
    		}
    		else{
      			results[split_string[i]] +=1
    		}
  		}
  		return results
	}
}