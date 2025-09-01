console.log("1:With no args and no return value.");
let message = () => {
    console.log("Good Morning, Today is Friday"); 
};
message();
console.log("");

console.log("2:With 3 args and no return value.");
let multiply = (num1,num2,num3=1) => {
    console.log(`Multiplication of ${num1},${num2},${num3} is : ${num1*num2*num3}`);
};
multiply(5,5,2);
multiply(10,4);
console.log("");

console.log("3:With 5 args and  return value.");
let addition = (n1,n2,n3,n4,n5) => {
    console.log(`Given elements are : ${n1},${n2},${n3},${n4},${n5}`);
    
    let add = n1 + n2 + n3 + n4 + n5;
    return add;
};
let returnResult = addition(100,100,200,349,756);
console.log(`Addition is of given elements: ${returnResult}`);
console.log(" ");

let returnString = addition("I am"," learning"," ES6"," features"," in depth");
console.log(`Concatnation of given Words : ${returnString}`);





