// smallest

let arr = [-10,-20,9,28,7,6]

let smallest = Infinity;
let secondSmallest = Infinity;

for (let num of arr){
    if (smallest > num){
        secondSmallest = smallest;
        smallest = num;
    }

    else if (num > secondSmallest && num < smallest){
        secondSmallest = num;
    }
}

console.log(secondSmallest);