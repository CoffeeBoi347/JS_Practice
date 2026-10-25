// ============================================================
// ARRAYS PRACTICE: 18 problems, auto-graded
// Run:  node arrays-practice.js
// Rules: NO built-ins like reverse(), sort(), Set, Map, filter, map,
//        reduce, includes, indexOf, concat. Loops + if + push + length only.
// For each problem: 1) name the pattern  2) English steps  3) code
// ============================================================

// ---------- LEVEL 1: one pattern ----------

// 1. Accumulator: sum of all elements
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

// 2. Tracker: largest element (must work for all-negative arrays)
function findMax(arr) {
    let max = -Infinity;
    for (let num of arr){
        if (num > max){
            max = num;
        }
    }

    return max;
}

// 3. Counter: how many even numbers
function countEven(arr) {
    let even = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            even++;
        }
    }

    return even;
}

// 4. Flag (ANY): index of target, or -1 if not found
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }

    return -1;
}

// 5. Build new array: reverse WITHOUT reverse()
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }

    return newArr;
}

// 6. Flag (ALL): is the array sorted ascending? (equal neighbors are OK)
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr[i+1]){
            return true;
        }
    }

    return false;
}

// ---------- LEVEL 2: two patterns ----------

// 7. Accumulator + Counter: count elements strictly greater than the average
function countAboveAverage(arr) {
    let c = 0;
    let avg = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    avg = sum / arr.length;

    for (let j = 0; j < arr.length; j++){
        if (arr[j] > avg){
            c++;
        }
    }

    return c;
}

// 8. Nested loop / Flag: remove duplicates, keep first occurrence order (no Set)
function removeDuplicates(arr) {
  // your code
}

// 9. Two trackers: second largest DISTINCT number (no sort)
function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }

        else if (arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// 10. Two pointers: is the array a palindrome?
function isPalindromeArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }

    for (let k = 0; k < arr.length; k++){
        if (arr[k] != newArr[k]){
            return false;
        }
    }

    return true;
}

// 11. Build new array: move all 0s to the end, keep the order of the others
function moveZeros(arr) {
    let newArr = [];
    let c = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 0){
            newArr.push(arr[i]);
        }
        else{
            c++;
        }

    }

    for (let j = 0; j < c; j++){
        newArr.push(0);
    }

    return newArr;
}

// 12. Accumulator (running): running sum → [1,2,3,4] becomes [1,3,6,10]
function runningSum(arr) {
  // your code
}

// ---------- LEVEL 3: exam level ----------

// 13. Index math: rotate right by k (k can be bigger than the length)
function rotateRight(arr, k) {
  // your code
}

// 14. Nested loops: count pairs (i < j) whose sum equals target
function countPairsWithSum(arr, target) {
  // your code
}

// 15. Frequency object + Tracker: most frequent; on a tie, the one that appears FIRST
function mostFrequent(arr) {
  // your code
}

// 16. Merge alternately; leftovers go at the end (no concat)
function alternateMerge(first, second) {
  // your code
}

// 17. Sum trick: array has 1..n with exactly one number missing; return it
function missingNumber(arr) {
  // your code
}

// 18. Nested loop: common elements of two arrays, in order of the first, no repeats
function intersection(a, b) {
  // your code
}

// ============================================================
// TESTS: don't touch below
// ============================================================
let pass = 0, total = 0;
function test(name, fn, expected) {
  total++;
  let actual;
  try { actual = fn(); } catch (e) { actual = "ERROR: " + e.message; }
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  if (ok) pass++;
  console.log(`${ok ? "✅" : "❌"} ${name}  →  got ${JSON.stringify(actual)}${ok ? "" : `, expected ${JSON.stringify(expected)}`}`);
}

console.log("\n--- LEVEL 1 ---");
test("1a sumArray([1,2,3,4])", () => sumArray([1,2,3,4]), 10);
test("1b sumArray([])", () => sumArray([]), 0);
test("2a findMax([3,-1,7,2])", () => findMax([3,-1,7,2]), 7);
test("2b findMax([-5,-2,-9])", () => findMax([-5,-2,-9]), -2);
test("3a countEven([1,2,3,4,6])", () => countEven([1,2,3,4,6]), 3);
test("3b countEven([-2,-3,0])", () => countEven([-2,-3,0]), 2);
test("4a linearSearch([5,8,2],8)", () => linearSearch([5,8,2],8), 1);
test("4b linearSearch([5,8,2],9)", () => linearSearch([5,8,2],9), -1);
test("5a reverseArray([1,2,3,4])", () => reverseArray([1,2,3,4]), [4,3,2,1]);
test("5b reverseArray([10])", () => reverseArray([10]), [10]);
test("6a isSorted([1,2,2,5])", () => isSorted([1,2,2,5]), true);
test("6b isSorted([1,3,2])", () => isSorted([1,3,2]), false);
test("6c isSorted([])", () => isSorted([]), true);

console.log("\n--- LEVEL 2 ---");
test("7a countAboveAverage([1,2,3,4,5])", () => countAboveAverage([1,2,3,4,5]), 2);
test("7b countAboveAverage([5,5,5])", () => countAboveAverage([5,5,5]), 0);
test("8a removeDuplicates([1,2,1,3,2])", () => removeDuplicates([1,2,1,3,2]), [1,2,3]);
test("8b removeDuplicates([4,4,4])", () => removeDuplicates([4,4,4]), [4]);
test("9a secondLargest([10,5,20,8])", () => secondLargest([10,5,20,8]), 10);
test("9b secondLargest([4,4,3,2])", () => secondLargest([4,4,3,2]), 3);
test("9c secondLargest([1,9,7,9])", () => secondLargest([1,9,7,9]), 7);
test("10a isPalindromeArray([1,2,3,2,1])", () => isPalindromeArray([1,2,3,2,1]), true);
test("10b isPalindromeArray([1,2])", () => isPalindromeArray([1,2]), false);
test("10c isPalindromeArray([7,7])", () => isPalindromeArray([7,7]), true);
test("11a moveZeros([0,1,0,3,12])", () => moveZeros([0,1,0,3,12]), [1,3,12,0,0]);
test("11b moveZeros([0,0])", () => moveZeros([0,0]), [0,0]);
test("12a runningSum([1,2,3,4])", () => runningSum([1,2,3,4]), [1,3,6,10]);
test("12b runningSum([])", () => runningSum([]), []);

console.log("\n--- LEVEL 3 ---");
test("13a rotateRight([1,2,3,4,5],2)", () => rotateRight([1,2,3,4,5],2), [4,5,1,2,3]);
test("13b rotateRight([1,2,3,4,5],7)", () => rotateRight([1,2,3,4,5],7), [4,5,1,2,3]);
test("13c rotateRight([1,2,3],0)", () => rotateRight([1,2,3],0), [1,2,3]);
test("14a countPairsWithSum([1,2,3,4,5],6)", () => countPairsWithSum([1,2,3,4,5],6), 2);
test("14b countPairsWithSum([3,3,3],6)", () => countPairsWithSum([3,3,3],6), 3);
test("15a mostFrequent([1,2,2,3,3,3,4])", () => mostFrequent([1,2,2,3,3,3,4]), 3);
test("15b mostFrequent([5,5,2,2])", () => mostFrequent([5,5,2,2]), 5);
test("15c mostFrequent([7,1,7,2,1,1])", () => mostFrequent([7,1,7,2,1,1]), 1);
test("16a alternateMerge([1,2,3],['a','b','c'])", () => alternateMerge([1,2,3],["a","b","c"]), [1,"a",2,"b",3,"c"]);
test("16b alternateMerge([1,2],['x','y','z'])", () => alternateMerge([1,2],["x","y","z"]), [1,"x",2,"y","z"]);
test("16c alternateMerge([10,20,30],['a'])", () => alternateMerge([10,20,30],["a"]), [10,"a",20,30]);
test("17a missingNumber([1,2,4,5])", () => missingNumber([1,2,4,5]), 3);
test("17b missingNumber([2,3,1])", () => missingNumber([2,3,1]), 4);
test("17c missingNumber([2])", () => missingNumber([2]), 1);
test("18a intersection([1,2,3,4],[3,4,5])", () => intersection([1,2,3,4],[3,4,5]), [3,4]);
test("18b intersection([1,1,2],[1,1])", () => intersection([1,1,2],[1,1]), [1]);

console.log(`\nSCORE: ${pass}/${total}\n`);