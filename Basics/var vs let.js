// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function greetLet() {
    let a = 'hello';
    if(a == 'hello'){
        let b = 'world';
        console.log(a + ' ' + b);
    }
     // variable b cannot be used here
    console.log(a + ' ' + b); // error
}
// variable a cannot be used here

greetLet();

function greetVar() {
    // variable a can be used here
    var a = 'hello';
    console.log("var",a);
}

// greetVar();