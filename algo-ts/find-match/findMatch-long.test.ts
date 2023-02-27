import { convertArrayToObject, compareArrayElements } from "./findMatch-long";

test("determines if two given arrays of letters have matching elements", () => {
  const array1 = ["a", "b", "c", "d"];
  const array2 = ["g", "z", "f", "b"];
  const obj = convertArrayToObject(array1);

  expect(compareArrayElements(array2, obj)).toBe(true);
});

test("returns false when given two given arrays and compares if they have matching elements", () => {
  const array1 = ["a", "b", "c", "d"];
  const array2 = ["g", "z", "f", "s"];
  const obj = convertArrayToObject(array1);

  expect(compareArrayElements(array2, obj)).toBe(false);
});
