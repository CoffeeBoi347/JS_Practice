function reverseArray(arr){
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }

    return newArr;
}

arr = [13,18,22,34,8];
console.log(reverseArray(arr));