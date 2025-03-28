function outer() { 
    var b = 2
     function inner() { 
        b++; 
        console.log(b)
         var b = 3;
         }
 return inner
     }
      outer();