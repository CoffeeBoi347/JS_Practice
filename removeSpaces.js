function removeSpaces(msg){
    let result = "";
    for (let i = 0; i < msg.length; i++){
        if (msg[i] != " "){
            result += msg[i];
        }
    }

    return result;
}

console.log(removeSpaces("Hello World"));