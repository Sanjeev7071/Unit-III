
const hexToRgb = require("../src/hexToRGB");

describe("hexToRgb", () => {
    test("converts #FF5733 to RGB", () => {
        expect(hexToRgb("#FF5733")).toEqual({
            r: 255,
            g: 87,
            b: 51
        });
    });

    test("accepts hex without #", () => {
        expect(hexToRgb("FF5733")).toEqual({
            r: 255,
            g: 87,
            b: 51
        });
    });

    test("converts black to RGB", () => {
        expect(hexToRgb("#000000")).toEqual({
            r: 0,
            g: 0,
            b: 0
        });
    });

    test("converts white to RGB", () => {
        expect(hexToRgb("#FFFFFF")).toEqual({
            r: 255,
            g: 255,
            b: 255
        });
    });

    test("accepts lowercase hexadecimal digits", () => {
        expect(hexToRgb("#ff5733")).toEqual({
            r: 255,
            g: 87,
            b: 51
        });
    });

    test("rejects invalid hexadecimal characters", () => {
        expect(() => hexToRgb("#GG5733"))
            .toThrow("Invalid hex colour");
    });

    test("rejects short hexadecimal values", () => {
        expect(() => hexToRgb("#FFF"))
            .toThrow("Invalid hex colour");
    });

    test("rejects non-string input", () => {
        expect(() => hexToRgb(123456)).toThrow(TypeError);
    });
});
