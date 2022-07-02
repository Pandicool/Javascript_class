// program to find the factorial of a number
function factorial(x) {
    // base case
    if (x === 0) {
        return 1;
    }
    //recursive case
    else 
        return x * factorial(x - 1);
}

const num = 4;
let result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);

// 4 * fact(3)
// 4 * 3 * fact(2)
// 4 * 3 * 2 * fact(1)
// 4 * 3 * 2 * 1 * 1

// 1 -> fact(0)
// 1 * 1 -> fact (1) 
// 2 * 1 ->  fact (2)
// 3 * 2 * 1 -> fact (3)
// 4 * 3 * 2 * 1  -> fact(4)

// factorial(3) returns 3 * factorial(2)
// factorial(2) returns 3 * 2 * factorial(1)
// factorial(1) returns 3 * 2 * 1 * factorial(0)
// factorial(0) returns 3 * 2 * 1 * 1