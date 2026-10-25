function countCharacter(str, target){
    let count = 0;
    for (let x of str){
        if (x == target){
            count++;
        }
    }

    return count;
}

console.log(countCharacter("Hello World", "l"));