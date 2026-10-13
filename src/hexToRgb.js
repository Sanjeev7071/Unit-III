
/**
 * Converts a six-digit hexadecimal colour into RGB components.
 *
 * @param {string} hex - Hex colour, with or without a leading #.
 * @returns {{r: number, g: number, b: number}} RGB components (0-255).
 * @throws {TypeError} If the input is not a string.
 * @throws {Error} If the hexadecimal colour is invalid.
 */
function hexToRgb(hex) {
    // Ensure that the input is a string.
    if (typeof hex !== "string") {
        throw new TypeError("Hex colour must be a string");
    }

    // Remove an optional leading #.
    const normalizedHex = hex.startsWith("#") ? hex.slice(1) : hex;

    // Accept exactly six hexadecimal digits.
    if (!/^[0-9A-Fa-f]{6}$/.test(normalizedHex)) {
        throw new Error("Invalid hex colour. Use six hexadecimal digits.");
    }

    // Convert each pair of hexadecimal digits into a decimal number.
    const r = parseInt(normalizedHex.slice(0, 2), 16);
    const g = parseInt(normalizedHex.slice(2, 4), 16);
    const b = parseInt(normalizedHex.slice(4, 6), 16);

    return { r, g, b };
}

// Export the function so other files can use it.
module.exports = hexToRgb;
