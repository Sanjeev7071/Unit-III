
const express = require("express");
const hexToRgb = require("./hexToRGB");

const app = express();

// Convert a hexadecimal colour into RGB values.
app.get("/api/convert", (req, res) => {
    const { hex } = req.query;

    // Return an error if the hex parameter is missing.
    if (typeof hex !== "string" || hex.length === 0) {
        return res.status(400).json({
            error: "Please provide a hex query parameter."
        });
    }

    try {
        // Use the conversion library.
        const rgb = hexToRgb(hex);

        return res.status(200).json({
            hex,
            rgb
        });
    } catch (error) {
        // Return a client error for invalid hexadecimal values.
        return res.status(400).json({
            error: error.message
        });
    }
});

// Start the server only when this file is run directly.
if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running at http://localhost:3000");
    });
}

// Export the app for automated integration tests.
module.exports = app;
