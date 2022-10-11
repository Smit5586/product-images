

let add = (a,b) => {
 let sum = a + b;
return sum;
}

let sub = (a,b) => {
    let subs = a - b;
   return subs;
   }

   let mul = (a,b) => {
    let multi = a * b;
   return multi;
   }

   let div = (a,b) => {
    let divi = (a / b).toFixed(3);
   return divi;
   }


export {add,sub,mul,div} ;