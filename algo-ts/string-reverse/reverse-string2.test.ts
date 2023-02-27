import { reverseString2 } from "./reverse-string2";

test("When provided a string it should reverse that string", () => {
  const testString = "Hello";

  expect(reverseString2(testString)).toBe("olleH");
});

test("When provided a string it should reverse that string", () => {
  const testString = "Hello World";

  expect(reverseString2(testString)).toBe("dlroW olleH");
});
