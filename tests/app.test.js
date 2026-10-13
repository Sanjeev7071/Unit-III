
const request = require("supertest");
const app = require("../src/app");

describe("GET /api/convert", () => {
    test("returns RGB values for a valid hex colour", async () => {
        const response = await request(app)
            .get("/api/convert")
            .query({ hex: "#FF5733" });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            hex: "#FF5733",
            rgb: {
                r: 255,
                g: 87,
                b: 51
            }
        });
    });

    test("returns RGB values for black", async () => {
        const response = await request(app)
            .get("/api/convert")
            .query({ hex: "#000000" });

        expect(response.status).toBe(200);
        expect(response.body.rgb).toEqual({
            r: 0,
            g: 0,
            b: 0
        });
    });

    test("returns HTTP 400 for invalid hex input", async () => {
        const response = await request(app)
            .get("/api/convert")
            .query({ hex: "GG5733" });

        expect(response.status).toBe(400);
        expect(response.body.error).toBeDefined();
    });

    test("returns HTTP 400 when hex is missing", async () => {
        const response = await request(app)
            .get("/api/convert");

        expect(response.status).toBe(400);
        expect(response.body.error).toBeDefined();
    });
});
