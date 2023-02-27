/**
 * Given 2 arrays determine if the both arrays have an element that is the same
 *
 * Example: arr1 = [a, b, c]
 *          arr2 = [d, e, g]
 *          would = false
 *
 * Example: arr1 = [a, b, c]
 *          arr2 = [d, g, c]
 *          would = true
 */

export function convertArrayToObject(arr: string[]): {
  [key: string]: boolean;
} {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = true;
    }
  }

  return map;
}

export function compareArrayElements(
  arr: string[],
  obj: { [key: string]: boolean }
): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (!!obj[arr[i]]) {
      return true;
    }
  }

  return false;
}
