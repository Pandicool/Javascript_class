const name = 'ram';
console.log(typeof(name)); // returns "string"

const number = 4;
console.log(typeof(number)); //returns "number"

const valueChecked = true;
console.log(typeof(valueChecked)); //returns "boolean"

const a = null;
console.log(typeof(a)); // returns "object"

const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};
console.log(typeof(student)); // returns Object

let firstName;
console.log(typeof(firstName)); // returns undefined
 
const symbol = Symbol('hello');
console.log(typeof(symbol)); // return symbol

var ab;
console.log(ab); // returns undefined