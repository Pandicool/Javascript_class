const string = 'code';

// using for...in loop
for (let i in string) {
    console.log(string[i]);
}
console.log("hi i am peter","\n","happy")

const laks = 1e6;
console.log(laks)

const lakDecimal = 1e-6;
console.log(lakDecimal)

const inf = 2/0;
console.log(inf)

const bigInt  = 23284923829n;
console.log(bigInt+1n);


const preNum = 1.1+0.20
console.log(preNum.toPrecision(1))

let strNum = "2323242"
strNum = Number(strNum);
console.log(typeof(strNum))
