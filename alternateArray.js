function alternateArray(a1, a2){
    let result = [];
    let i = 0;

    while (i < a1.length || i < a2.length){
        if (i < a1.length) result.push(a1[i]);
        if (i < a2.length) result.push(a2[i]);
        i++
    }

    return result;
}

console.log(alternateArray([10,50,83], ["abc", "okbro", "sad"]))