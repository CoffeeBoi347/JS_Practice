// No side effect: takes input, returns output, touches nothing else
function add(a, b) {
  return a + b;
}

// Side effect: changes something OUTSIDE itself
let total = 0;
function addToTotal(x) {
  total = total + x;    // ← modifies a variable that lives outside
}

console.log(add(2,3));
console.log(total);
addToTotal(6);
addToTotal(3);
console.log(total);