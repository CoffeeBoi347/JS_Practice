function createCounter(){
    let count = 0;

    return function() {
        count++;
        console.log(count);
    }
}

var counter = createCounter();
counter();
counter();