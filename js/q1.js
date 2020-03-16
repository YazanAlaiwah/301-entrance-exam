function greaterThan(arr, num) {
  var count = 0;
  for (let i in arr) {
    if (arr[i] > num) {
      count++;
    }
  }
  return count;
}

////// with build function
// function greaterThan(arr,num){
//   return arr.filter(a=>a>num).length
// }
console.log(greaterThan([1, 2, 3, 4], 2));
console.log(greaterThan([2, 4, 8], 8));
