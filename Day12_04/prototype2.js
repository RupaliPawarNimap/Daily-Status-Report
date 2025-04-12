function Employee(name){
    this.name =name
}
Employee.prototype.LogIn =function(){
    console.log(`${this.name} is loggined`);
}
Employee.prototype.LogOut =function(){
    console.log(`${this.name} is  Logout`);
}

function Manager(approve){
    this.approve =approve
    Employee.call(this,"Rupali")
}
Manager.prototype =Object.create(Employee.prototype);
Manager.prototype.ApprovLeave =function(){
     
    
    console.log(`${this.name} is Leave ${this.approve}`);
}
let employee =new Employee("Rupali")
employee.LogIn()
let manager =new Manager("Rupali","Approved")
manager.ApprovLeave();
manager.LogIn();
manager.LogOut()