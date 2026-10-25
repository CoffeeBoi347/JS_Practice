const user = { name: "Aayush", age: 19 };
const older = { ...user, age: 25, city: "Bengaluru"};
console.log(older.age);
console.log(older);