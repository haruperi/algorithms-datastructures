'use strict'

const factorial = (num) => {
    if (num === 1)
        return 1

    return num * factorial(num-1)
}

exports.factorial = factorial
//export { factorial }
