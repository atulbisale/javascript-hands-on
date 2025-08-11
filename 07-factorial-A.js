
console.log("");
function factorialOfNum(num){
    var fact = 1;
    if (typeof num == "number") {
            for (let index = num; index >= 1; index--) {
        fact = fact * index;
    }  
    console.log(`Factorial of ${num} is : ${fact}`);
    return fact; 
        
    } else 
        {
         console.log(`Invalid Value ${num} : Unhappy Scenario `);
         
        }     
}
factorialOfNum(5);
console.log("");
factorialOfNum(3);
console.log("");
factorialOfNum(null);
console.log("");
factorialOfNum(8);
console.log("");
factorialOfNum(undefined);
console.log("");
factorialOfNum(9);
console.log("");
factorialOfNum(0);

