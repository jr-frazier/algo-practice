import { twoSum } from "./two-sum";

test("returns the indices of the two numbers that equal the target number when added", () => {
  const nums = [3, 2, 3];
  const target = 6;

  expect(twoSum(nums, target).sort()).toEqual([0, 2]);
});

test("returns the indices of the two numbers that equal the target number when added", () => {
  const nums = [2, 7, 5, 3, 3];
  const target = 6;

  expect(twoSum(nums, target).sort()).toEqual([3, 4]);
});

test("returns the indices of the two numbers that equal the target number when added", () => {
  const nums = [3, 7, 5, 2, 3];
  const target = 6;

  expect(twoSum(nums, target).sort()).toEqual([0, 4]);
});
