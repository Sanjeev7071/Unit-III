# Hex-to-RGB Converter REST API

## 1. Overview

This project implements a JavaScript library that converts a six-digit hexadecimal colour code into its RGB (Red, Green, Blue) values. An Express.js REST API provides access to the conversion function through an HTTP GET endpoint.

The project includes unit tests for the conversion library and integration tests for the REST API.

## 2. Technologies Used

- JavaScript
- Node.js
- Express.js
- Jest
- Supertest
- cURL for manual API testing

## 3. Project Structure

```text
Unit-III/
├── src/
│   ├── app.js
│   └── hexToRgb.js
├── tests/
│   ├── app.test.js
│   └── hexToRgb.test.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 4. Requirements

Install the following software before running the project:

- Node.js
- npm (included with Node.js)
- Git (optional, for cloning the repository)

## 5. Installation

Clone the repository:

```bash
git clone https://github.com/Sanjeev7071/Unit-III.git
```

Navigate to the project directory:

```bash
cd Unit-III
```

Install the dependencies:

```bash
npm install
```

## 6. Running the REST API

Start the server:

```bash
npm start
```

The API runs at:

`http://localhost:3000`

### API Endpoint

**Method:** GET

**Endpoint:** `/api/convert`

**Query parameter:** `hex`

Example request:

```text
http://localhost:3000/api/convert?hex=FF5733
```

A hexadecimal colour can be provided with or without a leading `#`.

### Successful Response

For the input `#FF5733`, the API returns HTTP `200 OK`:

```json
{
  "hex": "#FF5733",
  "rgb": {
    "r": 255,
    "g": 87,
    "b": 51
  }
}
```

### Error Responses

The API returns HTTP `400 Bad Request` when the hexadecimal input is invalid or the `hex` parameter is missing.

Example invalid input:

```json
{
  "error": "Invalid hex colour. Use six hexadecimal digits."
}
```

## 7. Testing

Run all automated tests:

```bash
npm test
```

Run only the unit tests:

```bash
npm run test:unit
```

Run only the integration tests:

```bash
npm run test:integration
```

### Automated Test Results

The completed test run passed all 12 tests:

- **8 unit tests:** Check valid hexadecimal colours, uppercase and lowercase input, black, white, and invalid input.
- **4 integration tests:** Check successful API responses, black colour conversion, invalid input, and missing input.

### Manual API Testing

The endpoint was also tested using cURL.

| Test case | Expected HTTP status | Result |
|---|---|---|
| Valid input: `#FF5733` | 200 OK | Passed |
| Invalid input: `GG5733` | 400 Bad Request | Passed |
| Missing `hex` parameter | 400 Bad Request | Passed |

## 8. Maintainer

Sanjeev Kumar Chaudhary

## 9. Repository

[GitHub Repository — Unit-III](https://github.com/Sanjeev7071/Unit-III)
