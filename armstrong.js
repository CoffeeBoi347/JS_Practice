function isArmstrong(n)
{
    let original = n;
    const length = String(n).length;
    let sum = 0;

    while (n > 0){
        let d = n%10;
        sum += d**length;
        n = Math.floor(n/10);
    }

    return sum === original;
}

console.log(isArmstrong(9474));