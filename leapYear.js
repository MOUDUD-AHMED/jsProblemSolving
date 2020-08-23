function isLeap(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}

console.log(isLeap(2020));
console.log(isLeap(2025));