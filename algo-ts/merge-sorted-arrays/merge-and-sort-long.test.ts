import { mergeAndSort } from "./merge-and-sort-long";

test("When given 2 sorted arrays it should output one sorted array made from both arrays combined", () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [5, 6, 7, 8];
  expect(mergeAndSort(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});

test("When given 2 sorted arrays it should output one sorted array made from both arrays combined", () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [8, 7, 6, 5];
  expect(mergeAndSort(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
