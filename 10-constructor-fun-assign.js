

function bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
const yesBank = new bank("YesBank","Pune",12873123,234);
console.log(`Bank details of YesBank : Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC Code: ${yesBank.ifscCode}, Branch Code: ${yesBank.branchCode}`);
console.log(" ");

const sbiBank = new bank("Sbi","Banglore",2873234323,271);
console.log(`Bank details of SBI : Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC Code: ${sbiBank.ifscCode}, Branch Code: ${sbiBank.branchCode}`);
console.log(" ");
const mahaBank = new bank("MaharatraBank","Mumbai",2435628323,127);
console.log(`Bank details of MahaBank : Bank Name: ${mahaBank.bankName}, Location: ${mahaBank.location}, IFSC Code: ${mahaBank.ifscCode}, Branch Code: ${mahaBank.branchCode}`);
console.log(" ");

const axisBank = new bank("Axis","Delhi",2878973432,231);
console.log(`Bank details of Axis Bank : Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC Code: ${axisBank.ifscCode}, Branch Code: ${axisBank.branchCode}`);
console.log(" ");

bank.prototype.openTime = "9 AM IST";
bank.prototype.closeTime = "6 PM IST";

console.log(`Open time of SBI bank is : ${sbiBank.openTime}`);
console.log(`Close time of SBI bank is : ${sbiBank.closeTime}`);
console.log(" ");

console.log(`Open time of Axis bank is : ${axisBank.openTime}`);
console.log(`Close time of Axis bank is : ${axisBank.closeTime}`);
console.log("");

console.log(`Bank Name : ${yesBank.bankName} , Branch Code : ${yesBank.branchCode}, Open Time : ${yesBank.openTime}`);


