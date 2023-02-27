// merge and sort using the quick sort algorithm
export function mergeAndSort(arr1: number[], arr2: number[]) {
  const tempArray = [...arr1, ...arr2];

  const pivot = tempArray[0];
  const right = [];
  const left = [];

  if (tempArray.length <= 1) {
    return tempArray;
  }

  for (let i = 1; i < tempArray.length; i++) {
    if (tempArray[i] > pivot) {
      right.push(tempArray[i]);
    } else {
      left.push(tempArray[i]);
    }
  }

  return [...mergeAndSort(left, []), pivot, ...mergeAndSort([], right)];
}
