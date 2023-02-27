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

const array1 = ["a", "b", "c", "d"];
const array2 = ["g", "z", "f", "b"];

function convertArrayToObj(arr1) {
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  return map;
}

function compareArrayToObject(arr2) {
  const objToCompare = convertArrayToObj(array1);

  for (let i = 0; i < arr2.length; i++) {
    if (!!objToCompare[arr2[i]]) {
      return true;
    }
  }
  return false;
}

console.log(compareArrayToObject(array2));
