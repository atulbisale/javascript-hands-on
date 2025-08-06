
function greaterNumber(n1 , n2){
    var greater = n1>n2?n1:n2;
    console.log(`Greatest number is : ${greater}`);      
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log("-----------------------------------------------------------");

function isEvenOrOddNum(num){
    var result = num%2==0?"Even":"Odd";
    console.log(`Given number is ${num} & it is ${ result}`);
}
isEvenOrOddNum(10);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log("-----------------------------------------------------------");

function wordLength(str){
    console.log(`String is ${str}`);
    var strLen = str.length;
    console.log(`Length of String is : ${strLen}`);
    var result = strLen%2==0?"Even":"Odd";
    return result;
}
var res = wordLength("JavaScript");
console.log(`Length of string is ${ res}`);
console.log("");
var res = wordLength("developer");
console.log(`Length of string is ${ res}`);
console.log("");
var res = wordLength("Google");
console.log(`Length of string is ${ res}`);
