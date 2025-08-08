
function countCharA(string){
    var count = 0;
    for (let index = 0; index <= string.length-1; index++) 
    {
        var char = string.charAt(index).toLowerCase();

        if (char === "a") {
            count = count+1;   
        }    
    }
      return count;

}
var result = countCharA("I Am Learning JavaScript, The Language of internet");
console.log(`Total number of char "a" or "A" in String : ${result}`);
console.log("");

var result = countCharA("My favorite movie is LaggAn");
console.log(`Total number of char "a" or "A" in String : ${result}`);
