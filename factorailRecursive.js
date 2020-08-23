// 3! = 3*2*1
// 4! = 4*3*2*1
// 5! = 5*4!
// n! = n*(n-1)!;

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return factorial(n-1)*n;
    }
}
let result = factorial(10);
console.log(result);