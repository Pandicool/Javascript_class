// remove the array element from outer array
let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData.pop();

console.log(studentsData); // [["Jack", 24]]

// remove the element from the inner array
let studentsDatas = [['Jack', 24], ['Sara', 23]];
studentsDatas[1].pop();

console.log(studentsDatas); // [["Jack", 24], ["Sara"]]

let studentsDatas1 = [['Jack', 24], ['Sara', 23],];

// removing 1 index array item
studentsDatas1.splice(1,1);
console.log(studentsDatas1); // [["Jack", 24]]