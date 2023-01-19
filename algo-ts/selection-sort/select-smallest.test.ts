import { selectSmallest } from "./select-smallest";

test("returns index of smallest number in the provided array", () => {
  const arr = [3, 5, 9, 1, 7];

  expect(selectSmallest(arr)).toBe(3);
});
