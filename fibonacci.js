// fibo[3] = fibo[3-1] + fibo[3-2]
// fibo[4] = fibo[4-1] + fibo[4-2]
// fibo[5] = fibo[5-1] + fibo[5-2]
// fibo[6] = fibo[6-1] + fibo[6-2]
// fibo[n] = fibo[n-1] + fibo[n-2]

// fibonacci by for loop

// let fibo = [0, 1];
// for (let n = 2; n <= 12; n++) {
//     fibo[n] = fibo[n-1] + fibo[n-2];
//     //console.log(fibo[n], fibo[n-1], fibo[n-2]);
// }
// console.log(fibo);

// fibonacci by using function

let fibo = [0, 1];

function fibonacci(n) {
    for (let n = 2; n <= 10; n++) {
        fibo[n] = fibo[n-1] + fibo[n-2];
    }
}

console.log(fibonacci(10))