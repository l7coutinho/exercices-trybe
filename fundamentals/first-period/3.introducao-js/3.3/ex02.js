// Crie a função getHighestIndex
function getHighestIndex(arr) {
  let higher = 0;
  for (index = 0; index < arr.length; index += 1) {
    if (arr[higher] < arr[index]) {
      higher = arr[index];
    }
  }
  return higher;
}

console.log(getHighestIndex([2, 3, 5, 4, 99, 10]));
