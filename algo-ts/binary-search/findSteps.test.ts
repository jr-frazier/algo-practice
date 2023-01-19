import { findSteps } from "./findSteps";

test("finds number of steps in binary serch when given a set of length 128", () => {
  expect(findSteps(128)).toBe(7);
});

test("finds number of steps in binary serch when given a set of length 128", () => {
  expect(findSteps(1000000000)).toBe(30);
});
