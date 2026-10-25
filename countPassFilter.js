const students = [
    { n: "A", marks: 75 },
    { n: "B", marks: 32 },
    { n: "C", marks: 66 }
]

const passed = students => students.filter(s => s.marks >= 40).length;
console.log(passed(students));