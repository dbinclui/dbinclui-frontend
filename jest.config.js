/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: ".",
  modulePaths: ["<rootDir>/src/tests/*", "<rootDir>/src/**/**.test.tsx"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.tsx*"],
};
