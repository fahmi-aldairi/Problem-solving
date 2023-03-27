//Q-2 The sum of Array Elements:


let s = 0;
function sum(arr, i) {
  if (i < arr.length) {
    s = s + arr[i];
    sum(arr, i + 1);
    return s;
  }
  return;
}

console.log(sum([1, 2, 3, 4, 5, 6], 0));
