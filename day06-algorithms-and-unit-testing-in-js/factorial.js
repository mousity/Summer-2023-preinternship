function factorial(n) {
    let product = 1;
    if(product == 0) {
        return 1;
    }
    for(let i = n; i != 0; i--) {
        product *= i;
    }
    return product;
}

module.exports = factorial;