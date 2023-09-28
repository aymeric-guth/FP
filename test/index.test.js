//example.test.js
const [map, reduce, filter] = require("../index");

describe("map", () => {
  test("", () => {
    expect(map([1, 2, 3], (x) => x + 1)).toStrictEqual([2, 3, 4]);
  });

  test("", () => {
    expect(reduce([1, 2, 3], (x) => x + 1, 0)).toStrictEqual(9);
  });

  test("", () => {
    expect(filter([1, 2, 3], (x) => x % 2 === 0, 0)).toStrictEqual([2]);
  });

  // test("returns false if number is odd", () => {
  //   expect(isEven(3)).toBe(false);
  // });
  //
  // test("throws an error if number is negative", () => {
  //   expect(() => isEven(-1)).toThrow();
  // });
  //
  // test("throws an error if number is not a number", () => {
  //   expect(() => isEven("1")).toThrow();
  // });
});
