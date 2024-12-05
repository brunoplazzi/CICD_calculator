import { add, subtract, multiply, divide } from "../src/calculator";

test("addition works correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtraction works correctly", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiplication works correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("division throws error when dividing by zero", () => {
  expect(() => divide(5, 0)).toThrow("Division by zero");
});
