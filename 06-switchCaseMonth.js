

function monthOfYear(month){
switch (month) {
    case 1:
        console.log(`${month}- January`);
        break;
    case 2:
        console.log(`${month}- February`);
        break;
    case 3:
        console.log(`${month}- March`);
        break;    
    case 4:
        console.log(`${month}- April`);
        break;
    case 5:
        console.log(`${month}- May`);
        break;
    case 6:
        console.log(`${month}- Jun`);
        break;
    case 7:
        console.log(`${month}- July`);
        break;
    case 8:
        console.log(`${month}- August`);
        break; 
    case 9:
        console.log(`${month}- September`);
        break; 
    case 10:
        console.log(`${month}- Octomber`);
        break;    
    case 11:
        console.log(`${month}- November`);
        break;
    case 12:
        console.log(`${month}- December`);
        break;                      
    default:
        console.log(`${month}- Invalid Input`); 
        break;
}
}
monthOfYear(0);
console.log("");
monthOfYear(2);
console.log("");
monthOfYear(5);
console.log("");
monthOfYear(12);
console.log("");
monthOfYear(15);
console.log("");
monthOfYear(100);
console.log("");
monthOfYear(null);
console.log("");
monthOfYear(undefined);