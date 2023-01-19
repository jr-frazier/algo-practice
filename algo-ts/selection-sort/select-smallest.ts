export const selectSmallest = (arr: number[]) => {
  const arrLength = arr.length - 1;
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i <= arrLength; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};
