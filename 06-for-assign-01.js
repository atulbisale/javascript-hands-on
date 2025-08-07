

console.log("======= number from 5 to 15 =========");
for (var index = 5; index <=15; index++) {
    console.log(index);
}

console.log("======= number from 50 to 40 =========");
for (var index = 50; index >= 40; index--) {
    console.log(index);
    }

console.log("======= find first 15 odd numbers =========");
 var count = 0;
 for (var index = 1; index <=100; index++) {
    if(index%2==1) 
        { 
        count++;
    
    if (count <= 15) 
        {
        console.log(index);
        }
    }
}


console.log("======= find first 10 even numbers =========");
 var count = 0;
 for (var index = 1; index <=100; index++) {
    if(index%2==0) 
        { 
        count++;
    
    if (count <= 10) 
        {
        console.log(index);
        }
    }
}


console.log("======= Print Table of 5  =========");
for (var index = 1; index <=10; index++) {
    console.log(index*5);
}


console.log("======= Print Table 10  =========");
for (var index = 1; index <=10; index++) {
    console.log(index*10);
}

console.log("======= Print Table of 10 in Reverse =========");
for (var index = 10; index >=1; index--) {
    console.log(index*10);
}