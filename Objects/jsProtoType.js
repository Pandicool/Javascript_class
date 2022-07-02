function Person () {
    this.name = 'John',
    this.age = 23
}

const person = new Person();

// checking the prototype value
console.log(Person.prototype); // { ... }

//Since the prototype property has no value at the moment, it shows an empty object { ... }.