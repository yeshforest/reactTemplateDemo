import { expect, test } from "vitest";

test("1 is 1", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5야.", () => {
  expect(6).not.toEqual(5); // to be : matcher
});