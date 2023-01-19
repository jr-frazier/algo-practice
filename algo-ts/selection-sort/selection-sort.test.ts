import { selectionSort } from "./selection-sort";

test("sorts a given array from smallest number to largest", () => {
  const arr = [9, 3, 2, 4, 7];

  expect(selectionSort(arr)).toStrictEqual([2, 3, 4, 7, 9]);
});

test("sorts a given array from smallest number to largest", () => {
  const arr = [9, 3, 2, 7, 4];

  expect(selectionSort(arr)).toStrictEqual([2, 3, 4, 7, 9]);
});
