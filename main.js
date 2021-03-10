// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function ageToAbilities(num){
    if (num < 16){
        return "You can't drive."
    }
   if (num >= 16 && num <= 17){
       return "You can drive but not vote.";
   } if (num >= 18 && num <= 24){
       return "You can vote but not rent a car."
   } else {
       return "You can do pretty much anything.";
   }
}

function oddIndices(arr){
    newArr = [];
    for (i = 0; i < arr.length; i++){
        if (i % 2 !== 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function numOddValues(arr){
    oddNumbers = 0;
    for (index of arr) {
        if( index % 2 !== 0){
            oddNumbers++;
        }
    }
    return oddNumbers;
}

function averageStringLength(arr) {
	 str = 0;
	if (arr.length === 0) {
		return 0;
	} else {
		for (index of arr) {
			str += index.length;
		}
		return str / arr.length;
 	}
 }

 function firstPunctuationIndex(str) {
    for (char of str) {
        if (char === "." || char === "!" || char === "?") {
            return str.indexOf(char);
        }
    }
    return -1;
}

function getPlace(score, newScore) {
    let final = 0;
    score.push(newScore);
    score.sort(function(a,b){return b-a});
    for (let i = 0; i < score.length; i++) {
        if (score[i] === newScore) {
            final = i + 1;
        }
    }
    if (final.toString().substr(-1) == "1") {
        return final + "st place";
    } else if (final.toString().substr(-1) === "2") {
        return final + "nd place";
    } else if (final.toString().substr(-1) === "3") {
        return final + "rd place";
    } else if (final.toString().substr(-1) === "4" || final.toString().substr(-1) === "5" || final.toString().substr(-1) === "6" || final.toString().substr(-1) === "7" || final.toString().substr(-1) === "8" || final.toString().substr(-1) === "9") {
        return final + "th place";
    }
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
