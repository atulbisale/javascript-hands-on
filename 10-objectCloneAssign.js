const bankSbi = {
    fullName : 'John Wright',
    accountNo : 20381742059,
    mobileNo : 9876543210,
    branchName : 'Pune'
};

const bankLocation = {
    street : 'M.G Road',
    city : 'Pune',
    pin : 4133057,    
};


const bankSbiCloned = Object.assign({},bankSbi);
console.log(bankSbiCloned);
console.log(" ");

const bankLocationCloned = Object.assign({},bankLocation);
console.log(bankLocationCloned);
console.log(" ");

const rateOfInterest = {
    homeLoanInterest : '7.5%',
    personalLoanInterest : '11%',
    dueInterest : '13%',
};

console.log("Merge object bankSbi, bankLocation & rateOfInterest");
const sbiDetails = Object.assign({},bankSbiCloned,bankLocationCloned,rateOfInterest);
console.table(sbiDetails);
console.log(" ");


console.log("==========Traverse object using for in loop==========");
for (const key in sbiDetails) {
              
        console.log(`${key}:${sbiDetails[key]}`);  
}

    
    







