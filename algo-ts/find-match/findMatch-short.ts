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

interface Params {
  arr1: string[];
  arr2: string[];
}

export function findMatch(params: Params) {
  const { arr1, arr2 } = params;
  return arr1.some((item) => arr2.includes(item));
}
