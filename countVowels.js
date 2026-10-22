function countVowels(str){
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (const chr of str){
        if (vowels.includes(chr)){
            count++;
        }
    }

    return count;
}

console.log(countVowels("Salman Khan"));