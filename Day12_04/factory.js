function Personmaker(name,age){
    let person={
        name :name,
        age :age,
      print :function(){
            console.log(`Hello my name is ${name} and age is  ${age}`);
        }
    }
    return person
}
console.log(Personmaker("ruplai",21));
// 
let p1 =Personmaker("ruplai",21)
 p1.print()


//  factoy duction is help for creting the nw object