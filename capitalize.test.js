let capitalize = require("./capitalize.js")

test("capitalize", () => {
    expect(capitalize("hello")).toBe("Hello");
})
test("capitalize 2", () => {
    expect(capitalize("wassup")).toBe("Wassup");
})
test("capitalize numbers", () => {
    expect(capitalize("123ssup")).toBe("123ssup");
})
test("space", () => {
    expect(capitalize(" 123ssup")).toBe(" 123ssup");
})
test("sentence", () => {
    expect(capitalize("quick lazy fox jumps over brown turtle")).toBe("Quick lazy fox jumps over brown turtle");
})