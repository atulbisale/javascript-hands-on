console.log("");

const array = [20,31,40,25,23,11,29,9,60,2,11];
console.log(array);
console.log("----------------------------------------------------------------------------------------");

console.log(`1. Length of array is : ${array.length}`);
console.log("----------------------------------------------------------------------------------------");

console.log(`2. First Element Of array is : ${array[0]}`);
console.log(`   Last Element Of array is : ${array [array.length-1]}`);
console.log("----------------------------------------------------------------------------------------");

console.log(`3. Third last element using length property : ${array [array.length-3]}`);
console.log("----------------------------------------------------------------------------------------");

console.log(`4. All even number using for of:`);
for (const element of array) {
    const index = array[element];
    if (element%2==0) {
        console.log(`      ${element}`); 
    }
}
console.log("----------------------------------------------------------------------------------------");

console.log(`5. All odd number using for of:`);
for (const element of array) {
    const index = array[element];
    if (element%2==1) {
        console.log(`        ${element}`); 
    }
}
console.log("----------------------------------------------------------------------------------------");
 
let sumEven = 0;
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    sumEven =  array[i] + sumEven;
  }  
}
console.log(`6. Find all even positioned number and sum of number is : ${sumEven} `);
console.log("----------------------------------------------------------------------------------------");

let sumOdd = 0;
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 1) {
    sumOdd =  array[i] + sumOdd;
  }  
}
console.log(`7. Find all odd positioned number and sum of number is : ${sumOdd} `);
console.log("----------------------------------------------------------------------------------------");

let sumOfAll = 0;
for (let i = 0; i < array.length; i++) { 
    sumOfAll =  array[i] + sumOfAll; 
}
console.log(`8. Find all  elements and sum of number is : ${sumOfAll} `);
console.log("----------------------------------------------------------------------------------------");

console.log(`9. element Multiply of 5 :`);
for (const element of array) {
    const index = array[element];
    if (element%5==0) {
        console.log(`         ${element}`); 
    }
}
console.log("----------------------------------------------------------------------------------------");


let isAvailable115 = array.includes(115);
console.log(`10. Is number 115 available : ${isAvailable115}`);
console.log("----------------------------------------------------------------------------------------");


let isAvailable23 = array.includes(23);
console.log(`11. Is number 23 available : ${isAvailable23}`);
console.log("----------------------------------------------------------------------------------------");


array.splice(3,0,55,66);
console.log("12. Insert elements 55,66 at index 3 ");
console.log(array);
console.log("----------------------------------------------------------------------------------------");


let arrayNumber = array.splice(4,3);
console.log("13. Delete 3 elements from index 4");
console.log(array);



















