
var evenOdd = function(num) {
    if (num%2==0) {
        console.log(`${num} is even number `);   
        
    } else {
        console.log(`${num} is even number `);       
    }
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);

console.log("-------------------------------------------------");


var isEligible = function(age) {
    if (age>=18) {
        console.log(`The age ${age} is eligible for vote `);   
        
    } else {
        console.log(`The age ${age} is not eligible for vote `);      
    }
}
isEligible(18);
isEligible(20);
isEligible(17);
isEligible(40);
console.log("-------------------------------------------------");


var string =function(str){
    var strLen = str.length;
    if(strLen>10){
        console.log("More than 10 characters at string");    
    }
    else{
        console.log("less than 10 characters at string");
    }

}
string("JavaScript-ES6");
console.log("-------------------------------------------------");


var string =function(str){
    var strStartsWith = str.substring(0,4);
    if(strStartsWith=="Java"){
        console.log("String Starts with Java");    
    }
    else{
        console.log("String not starts with Java");
    }

}
string("JavaScript Language");
string("Programming Language");