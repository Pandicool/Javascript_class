const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: {
            practical: 25,
            theory : 40
        },
        math: 75,
        english: 89
    }
}

console.log(student.marks);
console.log(student.marks.science.practical);