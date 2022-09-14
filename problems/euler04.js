console.log('start')

for (let i = 999; i > 99; i--) {
    const product = (i * (i - 1)).toString()
    const revProduct = product.split('').reverse().join('')
    if (product === revProduct) {
        console.log(`i is ${i} and it's being multiplied by ${i - 1}`)
        console.log(product)
        return
    }
}

console.log('end')