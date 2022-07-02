// constructor function
function Person() {
    this.name = 'Pandi'
}

// add a property
Person.prototype.age = 20;

// creating an object
const pandi = new Person();

console.log(pandi.age);//20

// changing the property value of prototype
Person.prototype = { age: 50 }

// creating new object
const cool = new Person();

console.log(cool.age); // 50
console.log(pandi.age); // 22