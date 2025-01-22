let capitalize = require("./capitalize.js")

test("capitalize", () => {
    console.log(capitalize);
    expect(capitalize("hello")).toBe("Hello");
})