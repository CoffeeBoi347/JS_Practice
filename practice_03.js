// let arr = [250,645,300,900,50]

// for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * (1-0.1);
//     console.log(arr[i]);
// }

// let foodItems = ["apple", "strawberry"]
// let items = [1,2,3]

// console.log(foodItems.slice(0,2));

let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
var remove = arr.pop()
var ola = arr.splice(2, 1, "OLA");
arr.push("Amazon");

console.log(remove);
console.log(arr);