// let arr =[3,1,2];
// let num =arr.sort();


// console.log(num);

function frequency(str){
    let arr ={};
    for(let i of str){
       
       
        if(arr[i]){
            arr[i]+=1
            
        }
        else{
            arr[i] =1
        }
    }
    console.log(arr);
}
frequency("Ruuuuuupalii")


function duplicate(str){
    let arr =[]
    for(let i=0;i<str.length;i++){
        for(let j=0;j<i;j++){
            if(str[i]===str[j]){
                if(arr.includes(str[i])){
                    continue
                }
                else{
                    arr.push(str[i])
                }
            }

              
              
        }
    }
    return null || arr
}
 console.log(duplicate("Ruppppaliii"));


function frq(str){
    let obj={};
    let obj2=[]
    for(let key of str){
        if(obj[key]){
            obj[key]+=1
        }
        else{
          obj[key]=1
        }
    }
    for(let key in obj){
        if(obj[key]!==1){
            obj2.push(key+obj[key])
        }
    }
    console.log(obj2);
    
}
frq("Ruuyyytyuuupalii")

function reverse(str){
    let mainstr =str
    let newstr ="";
    for(let i=str.length-1;i>=0;i--){
        newstr+=str[i]
    }
    // console.log(newstr);
    if(newstr===mainstr){
        console.log(`${str} is palindrome`);
    }else{
        console.log(`${str} is not palindrome`); 
    }
}

reverse("Rupali");
reverse("madam")

 function vowels(str){
    let vow ="aeiouAEIOU";
    let newstr =""
    for(let key of str){
        for(let val of vow){
            if(key==val){
                newstr+=key
            }
        }
    }
    console.log(newstr);
 }
 vowels("Rupali")

 function largest(arr){
    let max =arr[0];
    let sec =-Infinity
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            sec =arr[i-1]
            max =arr[i];
        }
        else if(arr[i]>sec && max>sec){
         sec =arr[i]
        }
    }
   console.log(max,sec);
 }
 largest([1,4,2])

 function smallest(arr){
    let small = arr[arr.length-1]
    let sec =Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]<small){
            sec =arr[i+1]
            small=arr[i]
        }
    }
    console.log(small,sec);
 }
 
 smallest([1,4,0])

 function duplicateArr(arr){
    let newarr =[];
    for(let key of arr){
        if(newarr.includes(key)){
            continue
        }
        else{
            newarr.push(key)
        }
    }
    console.log(newarr);
 }
 duplicateArr([1,2,3,2,3])
 duplicateArr([1, 2, 2, 3, 1])


 function frqChar(str){
    let newstr ={};
    for(let key of str){
        if(newstr[key]){
            newstr[key]+=1
        }
        else{
            newstr[key]=1
        }
    }
    console.log(newstr);
 }
 frqChar("Rupali")

 function factorial(num){
    let fact =1
    for(let i=1;i<=num;i++){
fact*=i
    }
    console.log(fact);
 }
 factorial(5    )

 function isAnagram(str1,str2){
    let arr1 =str1.toLowerCase().split("").sort();
    let arr2 =str2.toLowerCase().split("").sort();
    if(arr1.length!==arr2.length) return false
    for(let i of arr1){
         if(arr1[i]!==arr2[i]){
            return "Given str is not anagram"
         }

    }
    return "Given str is anagram"

 }
 console.log(isAnagram("Rrohan","nahorr"));

 function longest(str){
    let arr1 =str.split(" ");
    let max =""
     
    
    for(let i=1;i<=arr1.length-1;i++){
        if(arr1[i].length>max.length){
            max=arr1[i]
        }
        else{
            continue
        }
    }
    console.log(max);
 }
 longest("My name issssss Rupali")


 function missing(arr){
    let n = arr.length+1;
    let expected =(n*(n+1))/2
let sum =0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]

    }
    console.log(sum);
    let diff =expected-sum
    console.log(diff);

 }
 missing([1,2,3,5])


 function arrSame(arr1,arr2){
    let newarr1 =arr1.sort();
    let newarr2 =arr2.sort();
    if(newarr1.length!==newarr2.length) return false;
   for(let i in newarr1){
    console.log(newarr1[i]);
    if(newarr1[i]!==newarr2[i]){
        return false
    }
   }
   return true
 }
 console.log(arrSame([1,2,3],[1,3,3]));


function FirstNonRepeat(arr){
    let obj ={};
    for(let i of arr){
         if(obj[i]){
            obj[i]+=1
         }
         else{
            obj[i]=1
         }
    }
    for(let i in obj){
        // console.log(obj[i]);
        if(obj[i]==1){
          console.log(i,obj[i]);
        }
    }
    
    
}
FirstNonRepeat(["R","R","O"])


function map(arr){
 let newarr =arr.map(val=>val*10)
console.log(newarr);
}
map([1,2,3,4])


function filter(arr){
    let newarr =arr.filter(val=>val.length>3)
    console.log(newarr);
}
filter(["hi", "hello", "yo", "javascript", "go"])

function find( arr= [45, 99, 150, 23, 200]){
    let newarr =arr.find(val=>val>100)
    console.log(newarr);
}
find()

function reduce(arr){
    let newarr =arr.reduce((sum,val)=>{
       return sum+val
    },0)
    console.log(newarr);
}
reduce([99, 249, 399, 150])

function some(arr){
    // let newarr =arr.some((val)=>val>0);
    let newarr=arr.every(
        val=>val>0
    )
    console.log(newarr);
}
some([0,1,3,5]) 

function multiply(arr){
    let filarr =arr.filter(val=>val%2==0)
 
    let maparr =filarr.map(val=>val**2);
    console.log(maparr);
}
multiply([1,2,3,4])

let people = [
    { name: "Rupali", age: 22 },
    { name: "Amit", age: 35 },
    { name: "Priya", age: 28 }
  ];

  function filterMap(people){
    let newarr =Object.entries(people).filter(([name,age])=>{
        return age>30
     })
    console.log(newarr);
  }
  filterMap(people)

  function star(n){
    let res =""
    for(let i=0;i<n;i++){
 console.log(res+="*");
    }
    
  }

  star(3);




    function isprime(start,end){
        let primearr =[]
        for(let i=start;i<=end;i++){
            if(prime(i)){
                primearr.push(i)
            }
            else{
                continue
            }
        }
        console.log(primearr);
    }
    isprime(1,1000)
    function prime(num){
        if(num==1 || num==2){
            return false
        }
        
        for(let i=2;i<=num/2;i++){

            if(num%i===0){
                return false
            }
            
        }
        return true

    }
//    console.log( prime(4)); 
//    console.log(prime(3));