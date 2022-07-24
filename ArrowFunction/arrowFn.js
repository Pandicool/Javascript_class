function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

        console.log(this.age);
        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayName();

let age = 89;

let welcome = (a,b) =>{ 
    a>18 ? "Adult" : b<18 ? "adult" :false;
}
 

function welcome(a) {
    if(a>18){
        console.log("adult")
    }
    else{
        console.log("child")
    }
}

console.log(welcome(age,12))