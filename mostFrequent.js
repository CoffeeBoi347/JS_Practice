function mostFrequent(arr){
    let best = arr[0];
    let bestCount = 0;

    for (let i = 0; i < arr.length; i++){
        let count = 0;
        for (let j = 0; j < arr.length; j++){
            if (arr[i] == arr[j]) count++;
        }

        if (count > bestCount){
            bestCount = count;
            best = arr[i];
        }
    }

    return best;
}

console.log(mostFrequent([10,59,72,88,66,35,21,8,9,10,3,8,5,43,82]));