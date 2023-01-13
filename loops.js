

let student = [{
    "name" : "Siva",
    "Blood_group" : "o+ve",
    "Batch_no"    : "01"
    },
    {
    "name" : "Kumar",
    "Blood_group" : "AB+ve",
    "Batch_no"    : "01"
    },
    {
    "name" : "Ram",
    "Blood_group" : "B+ve",
    "Batch_no"    : "01"
    }];

//1) ********* for *********

for(let i=0;i<student.length;i++){
    console.log("Name :",student[i].name,",","Blood group :",student[i].Blood_group,",","Batch no :",student[i].Batch_no);
 }


//2) *********** for in *********

// for(let i in student){
//      console.log("Name :",student[i].name,",","Blood group :",student[i].Blood_group,",","Batch no :",student[i].Batch_no);
// }



//3) ************ for of *************

// for(let i of student){
//     console.log("Name :" , i.name , "," , "Blood group :", i.Blood_group, "," , "Batch no :" , i.Batch_no);
// }



//4) **************** for each ***********

//student.forEach((value) => console.log("Name :",value.name,",","Blood group :",value.Blood_group,",","Batch no :",value.Batch_no));
