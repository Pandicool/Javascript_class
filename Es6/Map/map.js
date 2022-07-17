// Map with object key
let map2 = new Map();

let obj = {};
map2.set(obj, {name: 'Jack', age: "26"});

console.log(map2); // Map {{} => {name: "Jack", age: "26"}}

let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// access the elements of a Map
console.log(map1.get('info')); // {name: "Jack", age: "26"}


const set1 = new Set([1, 2, 3]);

let map3 = new Map();
map3.set('info', {name: 'Jack', age: "26"});

// check if an element is in Set
console.log(map3.has('info')); // true