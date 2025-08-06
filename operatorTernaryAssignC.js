


function maleMarriageEligibility(gender , age , boyName){
    var eligible = gender== "male" && age >= 21?"eiligible":"not eligible";
    console.log(`Hey ${boyName} you are ${eligible} for marriage`);
}
maleMarriageEligibility("male",25,"Bill Gates");
console.log("");
maleMarriageEligibility("male",17,"Stew Jobs");
console.log("---------------------------------------------------------");


 function femaleMarriageEligibility(gender , age , girlName){
    var eligible = gender =="female" && age >= 18 ? "eiligible" : "not eligible";
    console.log(`Hey ${girlName} you are ${eligible} for marriage`);
 }
 femaleMarriageEligibility("female",16,"Jenifer");
 console.log("");
 femaleMarriageEligibility("female",277,"Malinda Gates");

