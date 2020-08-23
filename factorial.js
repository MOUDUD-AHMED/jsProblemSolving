// let factorial = 1;
// for(let i =1; i <= 5; i++){
//     factorial = factorial * i;
// }

// console.log(factorial);

function factorial(n){
    
    let factorial = 1;
    for(i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let result = factorial(5);
console.log(result);