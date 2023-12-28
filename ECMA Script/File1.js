export function testing(a, b) {
    console.log("a :" + a)
    console.log("b :" + b)
    let c = a + b;
    return c;

}

export const add=(a,b,c,d)=>{return a+b+c+d}
console.log("normal add: "+add(2,3,4,5))

export const spreadAdd=(...a)=>{
    let c=0;
     for(val of a){
         c=c+val;
     }
 // or
 // a.forEach(val => { c = c + val })

     return c;
 }
 console.log("spread add: " + spreadAdd(2, 5, 6, 7, 2, 2, 2));