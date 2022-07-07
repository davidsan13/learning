let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binary (target, array, start, end) {
  if(start > end) return false;
  let mid = Math.ceil(start + (end - start)/2);
  if(array[mid] == target) {
    return mid
  }

  if(array[mid] > target) {
    
    return binary(target, array, start, mid - 1)
  } 
  if(array[mid] < target) {
    
    return binary(target, array, mid+1, end)
  }
};

let start = 0;
let end = primes.length-1;

function clearbit(x, position) {
  mask = 1<<position
  return x | 1<<position;
}

let x = 00000110;
let pos = 00000010;

console.log(x)
console.log(clearbit(x, pos));

