function outer(){
    let b=12
     function f(){
        
        let a =21
       function add(){
        return a+b
       }
       return add()
       

    }
    return f()
}
console.log(outer());