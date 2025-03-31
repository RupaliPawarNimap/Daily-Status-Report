let a =(1>2) &&(3>2)
console.log(a);


let age =18
if(age>=18 && age<=25){
    console.log("Student level");
}
else if(age>=26 && age<=50) {
    console.log(" Working person");
}
else{
    console.log("Retired");
}


let isSchoolStu =(age>=5) && (age<=18)
let isClgStu =(age>=19) && (age<=25)
let result =isClgStu || isSchoolStu
console.log(result);

let