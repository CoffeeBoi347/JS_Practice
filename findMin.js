function findMin(arr){
    let min = arr[0];

    for (let num of arr){
        if (num < min){
            min = num;
        }
    }

    return min;
}

console.log(findMin([10,4,2,1,24]))