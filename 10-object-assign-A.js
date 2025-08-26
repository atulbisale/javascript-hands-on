

let professor = {
    firstName : "Sergio",
    lastName : "Marquina",
    age : 48,
    gender : "Male",
    department : "Computer",
    certificates : ["Hacker Rank Participation","certificate in IFF course","Certificate in Adv programming"],
    degrees : {
        engineering : 'CSC',
        PHD : 'Adv Computing',
        bacheloers : 'B.Sc',
        masters : 'M.Sc'
    }
    
};

console.table(professor);

console.log("=======Add new property totalExperience========");
professor.totalExperience = "14 years";
console.table(professor);

console.log(" ");
console.log("====== Before Modify lastName property ========");
console.log(professor.lastName);
console.log("====== After Modify lastName property ========");
professor.lastName = "morte";
console.log(professor.lastName);
console.log(" ");

console.log("======= Before Add new certificate =========");
console.log(professor.certificates);
console.log("======= Add new certificate at 2nd index =========");
professor.certificates.splice(2,0,"Oracle Certified");
console.log(professor.certificates);
console.log(" ");

console.log("===== Last element of certificates =========");
for (const element of professor.certificates) {
    console.log(professor.certificates[professor.certificates.length-1]);    
}
console.log(" ");


console.log("===== Traverse elments of certificates =========");
for (const element of professor.certificates) {
    console.log(element);    
}








