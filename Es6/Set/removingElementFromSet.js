const set = new Set([1, 2, 3]);
console.log(set.values()); // Set Iterator [1, 2, 3]

// removing a particular element
set.delete(2);
console.log(set.values()); // Set Iterator [1, 3]

/************************************************* */


const set1 = new Set([1, 2, 3]);
console.log(set1.values()); // Set Iterator [1, 2, 3]

// remove all elements of Set
set1.clear();
console.log(set1.values()); // Set Iterator []