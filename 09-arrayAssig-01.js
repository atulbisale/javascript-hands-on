
const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];    
console.log(fruits);
console.log("---------------------------------------------------------------------------------------");

let firstElement  = fruits[0];
let lastElement  = fruits[fruits.length-1];
console.log(`1. First element of Array is : "${firstElement}"`);
console.log(`   Last element of Array is : "${lastElement}"`);
console.log("---------------------------------------------------------------------------------------");

fruits.unshift("Papaya");
console.log(`2. Add element Papaya before Banana`);
console.log(fruits);
console.log("----------------------------------------------------------------------------------------");

fruits.splice(4,1);
console.log("3. After removing Mango From Array");
console.log(fruits);
console.log("------------------------------------------------------------------------------------------");

fruits.push("Pineapple");
console.log("4. Add element Pineapple at last position");
console.log(fruits);
console.log("------------------------------------------------------------------------------------------");

fruits.splice(4,0,"Dragon Fruit");
console.log("5. Insert element DragonFruit before Watermelon");
console.log(fruits);
console.log("-------------------------------------------------------------------------------------------");

fruits.splice(2,1,"Kiwi")
console.log("6. Replace Orange with Kiwi");
console.log(fruits);
console.log("------------------------------------------------------------------------------------------");

console.log("7. Elements Starting from index 1 to 4");
let elementBet1To4 = fruits.slice(1,4)
console.log(elementBet1To4);
console.log("-----------------------------------------------------------------------------------------");


console.log("8.Select last 3 elements and log");
let lastThreeEle = fruits.slice(fruits.length-3);
console.log(lastThreeEle);
    











 



