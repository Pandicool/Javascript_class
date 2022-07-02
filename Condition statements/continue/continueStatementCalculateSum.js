let sum = 0;
let number = 0;

while (number >= 0) {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
    if (isNaN(number)) {
        console.log('You entered a string.');
        number = 0; 
        continue;
    }
}

console.log(`The sum is ${sum}.`);