
var square = function (num){
    var result = num *num;
    console.log(`Square of  ${num} : ${result}`);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);

console.log("----------------------------------------------------------------");
console.log(`Type of Square: ${typeof square}`);

console.log("----------------------------------------------------------------");
var areaOfRect = function(len , wid){
    var result = len * wid;
    console.log(`Area of rectangle is : ${result}`);
}
areaOfRect(499 ,917);

console.log("----------------------------------------------------------------");
var swapValues = function(num1 ,num2){
    console.log(`Values before swap : ${num1} ${num2}`);
    var temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`Values after swap : ${num1} ${num2}`);  
}
swapValues("Mahi" ,"Raina");
swapValues(55,77);

console.log("----------------------------------------------------------------");
var str = function(){
    var string  = "JS the most popular language of internet";
    console.log(`${string}`);
    var charAvail = string.length;
    console.log(`Total character available in string : ${charAvail}`);
    var charAtIndex6 = string.charAt(6);
    console.log(`Character at index 6 is : ${charAtIndex6}`);
    var charAtIndex11 = string.charAt(11);
    console.log(`Character at index 11 is : ${charAtIndex11}`);
    var lastChar = string.charAt(string.length-1);
    console.log(`Last character using length property : ${lastChar}`);
    var charAtFirst = string.charAt(0);
    console.log(`Character at first is : ${charAtFirst}`);
    var charAtThirdLast = string.charAt(string.length-3);
    console.log(`Character at third last is : ${charAtThirdLast}`);
    var splitStr = string.split(" ");
    count = splitStr.length;
    console.log(`Total number of words in string : ${count}`);
    var square1 = count*count;
    console.log(`Square of Total number of words in String is : ${square1}`);      
}
str();