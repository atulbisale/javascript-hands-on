
function stringHandsOn(){
    var str = "   Hey you are doing good, keep it up  ";
    console.log(`${str}`);
    var strLength = str.length;
    console.log(`Length of string is : ${strLength}`);
    var strTrim = str.trim();
    console.log(`${strTrim}`);
    console.log(`Final Length after Trim : ${strTrim.length}`);
    
    var strFirstChar = strTrim.charAt(0);
    var strLastChar = strTrim.charAt(strTrim.length-1);
    console.log(`Char at first : ${strFirstChar} and Char at last : ${strLastChar}`);
    var count = strTrim.split(" ");
    console.log(`Count of total words : ${count.length}`);
    var indexOfWord = strTrim.indexOf("good");
    console.log(`Index of word good is : ${indexOfWord}`);
    var subString = strTrim.slice(22);
    console.log(`Substring started from index 22 : ${subString}`);
    var stringEnds = strTrim.includes("up");
    console.log(`String ends with "Up" : ${stringEnds}`);
    var stringStarts  = strTrim.includes("Hey");
    console.log(`String starts with "Hey" : ${stringStarts}`);
    
    

    
}
stringHandsOn();