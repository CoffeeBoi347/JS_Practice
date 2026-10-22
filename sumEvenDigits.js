function sumEventDigits(num){
    let sum = 0;

    while (num > 0){
        let digit = num % 10;
        if (digit % 2 == 0){
            sum += digit;
        }

        num = Math.floor(num/10);
    }

    return sum;
}

console.log(sumEventDigits(123456));