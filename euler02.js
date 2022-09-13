const fib = (n) => {
    if (n <= 1) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

let sum = 0
for (let i = 2; fib(i) < 4000000; i++) {
    if (fib(i) % 2 === 0) {
        sum += fib(i)
    }
}
console.log(sum)