function missingNumber(arr, n) {
  if (arr[0] !== 1) return 1;                    
  let a = arr[0]
  let b = arr[1]
  let sum = b-a;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > sum) return arr[i] + sum; 
  }
  return n;                                      
}

missingNumber([2,4,8,10], 6);