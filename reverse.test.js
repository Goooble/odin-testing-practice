let reverse = require("./reverse")

describe("reverse", () => {
    test("reverse1", () => {
        expect(reverse("hello")).toBe("olleh");
    })
    test("reverse2", () => {
        expect(reverse("broski")).toBe("iksorb");
    })
    test("spaces", () => {
        expect(reverse("  broski")).toBe("iksorb  ");
    })
    test("numbers", () => {
        expect(reverse("123  broski")).toBe("iksorb  321");
    })
})