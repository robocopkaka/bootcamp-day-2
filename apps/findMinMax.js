module.exports = {
	findMinMax:function(array){
		if(typeof(array) !== 'object'){
			return "Pass an array"
		}
		else{
			var min = array[0]
			var max = array[0]

			for(var i  =1;i < array.length; i++){
				if(array[i] < min){
					min = array[i]
				}
				if(array[i] > max){
					max = array[i]
				}
			}
			var results = [min, max]
			if(min === max){
				return [min]
			}
			return results
		}
	}
}