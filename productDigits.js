function productDigits(n){
    let m = 1;

    while (n > 0){
        let digit = n%10;
        m *= digit;
        n = Math.floor(n/10);
    }

    return m;
}

console.log(productDigits(12345));