import { selectSmallest } from "./select-smallest";
export const selectionSort = (arr: number[]): number[] => {
  const arrLength = arr.length;
  const sortedArr: number[] = [];

  for (let i = 0; i < arrLength; i++) {
    const smallestIndex = selectSmallest(arr);

    // Pushes the smallest number to the new array and removes that number from the provided array
    sortedArr.push(arr.splice(smallestIndex, 1)[0]);
  }

  return sortedArr;
};
