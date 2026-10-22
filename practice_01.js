// let arr = [10,20,30,40,50];

// console.log(arr.length);
// console.log(arr);
// console.log(typeof(arr));

// arr[2] = 66;

// console.log(arr);

// for (let idx = 0; idx  < arr.length; idx++){
//     console.log(arr[idx]);
// }

// second largest

let arr1 = [10,34,67,58,24]

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr1){
    if (num > largest){
        secondLargest = largest;
        largest = num;
    }
    else if (largest > num && num > secondLargest){
        secondLargest = num;
    }
}

console.log(secondLargest);