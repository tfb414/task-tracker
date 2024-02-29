module.exports = {
  // ... other existing Jest configuration

  // Key part to target .spec.ts files
  testMatch: [
    "**/__tests__/**/*.spec.ts?(x)",  // Run tests within __tests__ folders
    "**/?(*.)+(spec).ts?(x)" // Also include tests at project root
  ],

  // TypeScript support (if you're using TypeScript)
  preset: 'ts-jest',
  testEnvironment: 'node',
};