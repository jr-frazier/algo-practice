import { findMatch } from "./findMatch-short";

test("determines if two given arrays of letters have matching elements", () => {
  const array1 = ["a", "b", "c", "d"];
  const array2 = ["g", "z", "f", "b"];
  const obj = { arr1: array1, arr2: array2 };

  expect(findMatch(obj)).toBe(true);
});

test("should return false when given two arrays with no matching values", () => {
  const array1 = ["a", "b", "c", "d"];
  const array2 = ["g", "z", "f", "g"];
  const obj = { arr1: array1, arr2: array2 };

  expect(findMatch(obj)).toBe(false);
});
