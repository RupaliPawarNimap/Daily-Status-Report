function greet(name){
    console.log(`Hello ${name}`);
}
greet("Rupali")


function add(a){
    return function(b){
        return function(c){
            return a +b+c
        }
    }
}console.log(add(1)(2)(3));


(function selfInvoke(){
    console.log("This is the function which is executed instaltly");
})();