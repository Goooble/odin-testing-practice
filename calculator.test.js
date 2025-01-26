let calculator = require("./calculator");

describe("testing calculator",() => {
    test("add", () => {
        expect(calculator.add(1,2)).toBe(3);
    })
    test("sub", () => {
        expect(calculator.sub(1,2)).toBe(-1);
    })
    test("multiply", () => {
        expect(calculator.mult(1,2)).toBe(2);
    })
    test("div", () => {
        expect(calculator.div(1,2)).toBeCloseTo(0.5);
    })

})