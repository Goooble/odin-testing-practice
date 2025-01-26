let cipher = require("./caesarCipher")

describe("cipher testing", () =>{
    test("single char shift of 0", () => {
        expect(cipher("a", 0)).toBe("a");
    })
    test("sinlge char shift of 1", () => {
        expect(cipher("a", 1)).toBe("b");
    })
    test("multiple 3", () => {
        expect(cipher("abc", 3)).toBe("def");
    })
    test("multiple punctuation 3", () => {
        expect(cipher("abc!", 3)).toBe("def!");
    })
    test("circular shifting", () => {
        expect(cipher("xyz", 4)).toBe("bcd");
    })
    test("caps shifting", () => {
        expect(cipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    })
})