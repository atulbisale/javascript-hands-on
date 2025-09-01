
const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(arrayNumbers);
console.log(" ");

console.log("1:log the array elements using foreach loop");
arrayNumbers.forEach((currentValue , index , arrayNumbers)  => {
   console.log(currentValue , index , arrayNumbers);   
});
console.log("");


console.log("2:Log positive numbers from array");
arrayNumbers.forEach((currentValue , index , arrayNumbers) => {
    if (currentValue >= 0) { 
        console.log(currentValue);
    }
});
console.log(" ");

console.log("3:Negative elements add into new array");
let arrayNegative = [] ;
arrayNumbers.forEach((currentValue) => {
    if (currentValue < 0) {
    arrayNegative.push(currentValue);
    }         
});
console.log(arrayNegative);
console.log(" ");

console.log("4:Log Even numbers from array");
arrayNumbers.forEach((currentValue , index , arrayNumbers) => {
    if (currentValue % 2 == 0) { 
        console.log(currentValue);
    }
});
console.log(" ");

console.log("5:sum of all numbers from array");
sum = 0;
arrayNumbers.forEach((currentValue , index , arrayNumbers) => {
        sum = sum + currentValue;    
});
console.log(sum);
console.log("");


console.log("6:Log Even indexed numbers from array");
arrayNumbers.forEach((currentValue , index , arrayNumbers) => {
    if (index % 2 == 0) { 
        console.log(currentValue);
    }
});
console.log(" ");
  


