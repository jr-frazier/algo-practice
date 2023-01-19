import { searchList } from "./search-list";

test("find the index of 5 in an array of ordered numbers", () => {
  const list = [1, 2, 3, 4, 5, 6, 7];

  expect(searchList(list, 5)).toBe(4);
});

test("find the index of 9. Should return null", () => {
  const list = [1, 2, 3, 4, 5, 6, 7];

  expect(searchList(list, 9)).toBe(null);
});
