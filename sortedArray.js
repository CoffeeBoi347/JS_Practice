function sortedArray(arr){
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr[i + 1]){
            return false;
        }
    }

    return true;
}

console.log(sortedArray([10,20,30]));
console.log(sortedArray([-10,-20,-30]));
console.log(sortedArray([5,9,1,3]));