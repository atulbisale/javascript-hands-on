// Function with no argument and no return type
console.log("--------------Function with no argument and no return type--------------");
console.log("======== 1. Function display  =======");
function display(){
    console.log("Good morning! Sometimes the most beautiful days are the ones we enter with simple gratitude.");
}
// console.log("Calling display()");
display();

console.log("  ");
console.log("======== 2. Function message =======");

function message(){
    console.log("Best of luck to you! I wish you to achieve all your goals and I hope your future shines brighter than the sun.");
}
// console.log("Calling message()");
message();
console.log("=========================================================================");
console.log(" ------------Function for Personal Details-------------------");
console.log("");

function personalDetails(firstName ,lastName ,collegeName){
    console.log("First Name : " ,firstName);
    console.log("Last Name : " ,lastName);
    console.log("College Name : " ,collegeName);
}
personalDetails("Atul", "Bisale", "Sangola college,Sangola");
console.log("=====================================================================");
console.log("-----------Function with argument and return-------------");
console.log("");
function addThreeValues(n1, n2, n3){
    console.log("Values are : ", n1, n2 ,n3);
    var result = n1+n2+n3;
    console.log("Output is : ",result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello","Good","Moning");