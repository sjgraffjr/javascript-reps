
//1.	
const words = ["hello", "what", "is", "up", "dude"]
const lengths = (arrayOfStrings) => {

	const numberString = arrayOfStrings

	for(let i = 0; i < arrayOfStrings.length; i++){
		numberString[i] = arrayOfStrings[i].length
	};
	return numberString
		
};

//2.
const transmogrifier = (a,b,c) => {
	const number = Math.pow((a * b), c);
	return number
};
transmogrifier(5,4,3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

//3.
// Write a function called toonify that takes two parameters, accent and sentence.

// If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".

// If the accent is "elmer", replace all "r" with "w".

// Feel free to add your own accents as well!

// If the accent is not recognized, just return the sentence as-is.

const toonify = (accent,sentence ) => {
	if(accent === "daffy"){ 
		return sentence.split("s").join("th")
	} else if( accent === "elmer"){
		return sentence.split("r").join("w")
	}
}
