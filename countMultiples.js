function countMultiples(start, end, k){
    let count = 0;
    for (let n = start; n < end; n++){
        if (n%k == 0){
            count++;
        }
    }

    return count;
}

console.log(countMultiples(10,30,2));