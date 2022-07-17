
// // empty array
// const myList = [];


// // array of numbers
const numberArray = [2, 4, 6, 8];

// // array of strings

// // array with mixed data types
// const newData = ['work', 'exercise', 1, true];

// const newDatas = [
//     { 'task1': 'exercise' },
//     [1, 2, 3],
//     function hello() { console.log('hello') }
// ];
// let data = newDatas[1]
// // console.log(data[2])

// // console.log(numberArray.concat(stringArray));
// // console.log(numberArray.indexOf(2))
numberArray.forEach(Element => {
    console.log(Element)
})

for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
}

for(let i of numberArray ) {
    console.log(i)
}

let string = "laksdknfasplknclsdakncpoknadskmsnfkonassssskajbncioas\
fjndfknaoskfdnoasknmdlmaslkmdoaebvgikbsdionv\
oansdvokanosncoansokanocndsadnasknodnaondlasdoka"

console.log(string)


// console.log(numberArray.includes(5));

// let numberArr = [1, 2, 1, 321, 2, 231, 1]

// let stringArray = ['eat', 'work', 'sleep', 'walk'];
// let atmCard = "29812391020183"


// let count = 0;
// if (num.includes(5)) {
//     num.forEach(Element => {
//         if (Element == 5) count++;
//     })
// }
// let slicedNum = atmCard.slice(atmCard.length-4,atmCard.length);
// let numSliceArr = stringArray.slice(3,4)
// console.log(numSliceArr);
// console.log(slicedNum);
// console.log(atmCard.replace("2","222222"))
// console.log(numberArr[3])

// 00, 01, 02
// 10, 11, 12
// 20, 21, 22


let str = "happy"; //string
let strObj = new String("happy"); //obj
let str1Obj = new String("happy"); //obj

strObj.substring(0,1)
console.log(str);
console.log(strObj)
console.log(str1Obj.toString());
