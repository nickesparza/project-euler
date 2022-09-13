let number = 600851475143
let i = 2

while (i * i  < number) {
    while (number % i === 0) {
        number = number / i
    }
    i = i + 1
}

console.log(number)