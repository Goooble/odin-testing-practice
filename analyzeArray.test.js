let analyze = require("./analyzeArray");

describe("analyze array", () => {
  test("average", () => {
    expect(analyze([1, 2, 3, 4]).average).toBeCloseTo(2.5);
  });
  test("min", () => {
    expect(analyze([1, 2, 3, 4]).min).toBe(1);
  });
  test("max", () => {
    expect(analyze([1, 2, 3, 4]).max).toBe(4);
  });
  test("length", () => {
    expect(analyze([1, 2, 3, 4]).length).toBe(4);
  });
  test("object", () => {
    expect(analyze([1,2,3,4])).toEqual({average: 2.5, min: 1, max: 4, length: 4})
  })
});
