// let factorial = 1;
// for(let i =1; i <= 5; i++){
//     factorial = factorial * i;
// }

// console.log(factorial);

function factorial(n){
    
    let fact = 1;
    for(i = 1; i <= n; i++){
        fact = fact * i;
    }
    return fact;
}

let result = factorial(5);
console.log(result);