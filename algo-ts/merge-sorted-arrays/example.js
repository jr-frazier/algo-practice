// merge two arrays and sort them using quick sort
function test(arr1, arr2) {
  const tempArray = [...arr1, ...arr2];

  if (tempArray.length <= 1) {
    return tempArray;
  }

  const pivot = tempArray[0];
  const left = [];
  const right = [];

  for (let i = 1; i < tempArray.length; i++) {
    if (tempArray[i] < pivot) {
      left.push(tempArray[i]);
    } else {
      right.push(tempArray[i]);
    }
  }
  return [...test(left, []), pivot, ...test([], right)];
}

const arr1 = [2, 1, 3, 4];
const arr2 = [8, 7, 6, 5];

console.log(test(arr1, arr2));
