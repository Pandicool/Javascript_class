let arr = ['h', 'e'];
let arr1 = arr;
arr.push('l');

console.log(arr); // ["h", "e", "l"]
console.log(arr1); // ["h", "e", "l"]

let array = ['h', 'e','l','e'];
array.name = 'John';

console.log(array); // ["h", "e"]
console.log(array.name); // "John"
console.log(array['name']); // "John"
