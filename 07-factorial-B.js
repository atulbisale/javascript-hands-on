
console.log("");
 function factorialOfWordsCount(string){
    let fact =1;
    if (typeof string == "string") {
        if (string=="") {
            let strLen = string.length;
            for (let index = strLen; index >=1; index--) {
                fact = fact * index;
            }
            console.log(`Total number of words  in given string is "${string}" : ${strLen}  and its Factorial is : ${fact}`);
            return fact; 
            
        } else {
            strLen1 = string.split(" ").length;
            for (let index = strLen1; index >= 1; index--) {
                fact = fact*index;
            }
            console.log(`Total number of words  in given string is "${string}" : ${strLen1}  and its Factorial is : ${fact}`);
            return fact;    
        }
        
    } else {
        console.log(`Invalid Input ${string} : Unhappy Scenario`);    
    }

 }
factorialOfWordsCount("Revision is the mother of success");
console.log(""); 
factorialOfWordsCount("We never fail, we always learn, Mind it");
console.log("");
factorialOfWordsCount(null);
console.log("");
factorialOfWordsCount("");
console.log("");
factorialOfWordsCount("Atul Agatrao Bisale");