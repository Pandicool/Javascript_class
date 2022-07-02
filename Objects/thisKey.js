// const person = {
//     name: 'John',
//     age: 30,

//     greet: function() { console.log('The name is ' + this.name); }
// };

// person.greet();
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is ' +    this.name + ' ' + surname); 
    }
};

person.greet();