let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData.push(['Peter', 24]);

console.log(studentsData); //[["Jack", 24], ["Sara", 23], ["Peter", 24]]

// using index notation
let studentsDatas = [['Jack', 24], ['Sara', 23],[]];

studentsDatas[2][0] = "hello";

console.log(studentsDatas); // [["Jack", 24], ["Sara", 23, "hello"]]

let studentsDatas1 = [['Jack', 24], ['Sara', 23],];

// adding element at 1 index
studentsDatas1.splice(0,2, ['Peter', 24]);

console.log(studentsDatas1); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]

