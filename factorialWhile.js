// let i = 1;
// let factorial = 1;
// while (i <= 5) {
//     factorial = factorial*i;
//     i++
// }
// console.log(factorial);

function factorial(x) {
    let i = 1;
    let fact = 1;
    while (i <= x) {
        fact = fact*i;
        i++;
    }
    return fact;
}
console.log(factorial(4));