// console.log([1, 5, 9, 12].filter(x => x > 6));
// console.log([2,4,10,11].filter(x => x%2 == 0));
// console.log(["elephant", "panda", "tiger"].filter(x => x.length > 6));

const students = [
  { name: "Aman", marks: 75 },
  { name: "Riya", marks: 32 },
];

console.log(students.map(s => s.name));
console.log(students.map(s => s.marks >= 40 ? "Pass" : "Fail"));
console.log(students.map(s => ({ student: s.name })));