

function reverseString(reverse){
    console.log(`Given String is : ${reverse}`);
    var stringReverse =" ";
    for (var index = reverse.length-1; index >= 0 ; index--) 
    {
       if (reverse[index] === " ") {
        continue;
       }
       var stringReverse = stringReverse + reverse.charAt(index);    
    }
       return stringReverse;

}
 var result = reverseString("Hard work always pays back");
 console.log(`After reverse and ignore spaces : ${result}`);
 console.log("");
 
 var result = reverseString("Soon I will be Angular IT Champ");
 console.log(`After reverse and ignore spaces : ${result}`);