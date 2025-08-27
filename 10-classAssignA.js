console.log("==================Vehicle Details========================");
class vehicle{
   constructor(company, model, fuelType, color, engine){
    this.company = company;
    this.model = model;
    this.fuelType = fuelType;
    this.color = color;
    this.engine = engine;
   }
   carDetails(){
    console.log(`company: ${this.company}, model: ${this.model}, fuelType: ${this.fuelType}, color: ${this.color}, engine: ${this.engine}`);
    
   }
}

const BMW = new vehicle('BMW','M5','Petrol','Black', '4400cc' )
BMW.carDetails();
console.log(BMW);
console.log(" ");

const honda = new vehicle('Honda','Amaze','Petrol','white', '1200cc' )
honda.carDetails();
console.log(honda);
console.log(" ");

const hundai = new vehicle('Hundai','Verna','Diesel','Red', '1400cc' )
hundai.carDetails();
console.log(hundai);
console.log(" ");

const toyota = new vehicle('toyota','Innova','Petrol','Black', '1800cc' )
toyota.carDetails();
console.log(toyota);
console.log(" ");

const renault = new vehicle('Renault','Duster','Petrol','Blue', '1400cc' )
renault.carDetails();
console.log(renault);
console.log(" ");


console.log("==================College Details========================");

class College{
   constructor(collegeName, city, course, university){
    this.collegeName = collegeName;
    this.city = city;
    this.course = course;
    this.university = university;
    
   }
   display(){
   console.log(`collegeName: ${this.collegeName}, city: ${this.city},course: ${this.course}, university: ${this.university}`);
   }
}
const  coep = new College('COEP','Pune','CSC','Pune University');
coep.display();
// console.log(coep);
console.log(" ");


const  dkt = new College('DKT','Kolhapur','Mechanical','Shivaji University');
dkt.display();
// console.log(dkt);
console.log(" ");

const  rit = new College('RIT','Sangli','Electrical',' Shivaji University');
rit.display();
// console.log(rit);
console.log(" ");

const  spc = new College('SPC','Sangola','E&TC',' Solapur University');
spc.display();
// console.log(spc);
console.log(" ");

