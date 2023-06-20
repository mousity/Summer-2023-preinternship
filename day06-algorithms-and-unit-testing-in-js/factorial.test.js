const factorial = require("./factorial");

describe(("Will return factorials of all cases"), () => {
    test(("factorial(1) => 1"), () => {
        expect(factorial(1)).toBe(1);
    })

    test(("factorial(3) => 6"), () => {
        expect(factorial(3)).toBe(6);
    })

    test(("factorial(2) => 2"), () => {
        expect(factorial(2)).toBe(2);
    })


})
