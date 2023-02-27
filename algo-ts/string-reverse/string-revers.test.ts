import { reverseString } from "./string-reverse";

test("When provided a string it should reverse that string", () => {
  const testString = "Hello";

  expect(reverseString(testString)).toBe("olleH");
});

test("When provided a string it should reverse that string", () => {
  const testString = "Hello World";

  expect(reverseString(testString)).toBe("dlroW olleH");
});
