// Search for a given number in an orderd list of numbers and return the index of that number
export const searchList = (list: number[], target: number): number | null => {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    // find mid point
    let mid: number = Math.floor(low + (high - low) / 2);

    if (list[mid] === target) {
      return mid;
    }

    // if mid is higher than the given target serach the left half of the list
    if (list[mid] > target) {
      high = mid - 1;
    }

    // if mid is lower than the target search right half of the list
    if (list[mid] < target) {
      low = mid + 1;
    }
  }

  return null;
};
