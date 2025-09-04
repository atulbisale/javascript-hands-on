
    let personAleix = `{
       "name" : "Aleix Melon",
       "id" : "E00245",
       "role" : ["Dev","DBA"],
       "age" : 23,
       "doj" : "10-10-2019",
       "married" : false,
       "address" : {
           "street" : "32, Laham St.",
           "city" : "Innsbruck", 
           "country" : "Austria"
       },
       "referred-by" : "E0012"
    }`

    let aleix = JSON.parse(personAleix);
    console.table(aleix);
    console.log("");
    
    
    console.log(`Role  is : ${aleix.role[0]}`);
    console.log("");

    let splitName = aleix.name.split(" ");
    // console.log(splitName);
    console.log(`Last Name is : ${splitName[1]}`);
    console.log("");

    let splitDoj = aleix.doj.split("-") 
    // console.log(splitDoj);
    console.log(`Joining year of employee : ${splitDoj[2]}`);
    
       
    
    
    
    
    
    