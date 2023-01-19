import { selectSmallest } from "./select-smallest";
export const selectionSort = (arr: number[]) => {
  const arrLength = arr.length;
  const sortedArr: number[] = [];

  for (let i = 0; i < arrLength; i++) {
    const smallestIndex = selectSmallest(arr);
    sortedArr.push(arr.splice(smallestIndex, 1)[0]);
  }

  return sortedArr;
};
