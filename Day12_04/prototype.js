function Vehical(type,speed){
    this.type =type;
    this.speed =speed
}
Vehical.prototype.start=function(){
    console.log(`${this.type} is starting`)
}
Vehical.prototype.stop=function(){
    console.log(`${this.type} is stoping`)
}


function Car(brand){
    Vehical.call(this,"Car",100);
    this.brand=brand

    
}
Car.prototype =Object.create(Vehical.prototype) //To inherit the properies of the js
Car.prototype.color=function(){
    console.log(`The brand of the ${this.type} is ${this.brand}`);
}

let car =new Car("Toyoto");
car.start();
car.color();