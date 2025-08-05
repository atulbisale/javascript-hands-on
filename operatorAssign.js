

function squareOfWordLength(string) {
    var strLen = string.length;
    console.log(`Length of String ${string} : ${strLen}`);
    
    var sqr = strLen * strLen;
    return sqr;
}
var result = squareOfWordLength("JavaScript");
console.log(`Square of string length is : ${result}`);
console.log("");


var result = squareOfWordLength("Google Chrome");
console.log(`Square of string length is : ${result}`);
console.log("");

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of string length is : ${result}`);
console.log('--------------------------------------------------------------------------------------------------------------');


function string(){
    var str = "I am MERN Stack Developer";
    var strLen = str.length;
    var splitWords = str.split(" ");
    var totalWords = splitWords.length;
    console.log(`Length of String is : ${strLen} and after divide by total number of words in string is: ${strLen/totalWords}`);
    


}
string();