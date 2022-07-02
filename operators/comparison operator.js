// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

let a = 5, b = 2, c = 'hello';

// equal to operator
console.log(a == 5);     // true
console.log(b == '2');   // true
console.log(c == 'Hello');  // false

a = 2, b = 'hello';

// strict not equal operator
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(b !== 'Hello'); // true

a = 3;

// greater than operator
console.log(a > 2); // true

a = 3;

// greater than or equal operator
console.log(a >= 3); //true

a = 3, b = 2;

// less than operator
console.log(a < 2); // false
console.log(b < 3); // true

