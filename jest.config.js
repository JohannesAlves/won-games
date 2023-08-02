const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
    testEnvironment: "jest-environment-jsdom",
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/**.tsx",
        "!src/**/**.stories.tsx",
        "!src/pages/**/*.tsx",
        "!src/styles/**/*.tsx",
        "!src/pages/**/*.tsx",
        "!src/styles/**/*.ts",
        "!generators/**/*.tsx",
    ],
    transform: {
        "^.+\\.test.(t|j)sx?$": "@swc/jest",
    },
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
    modulePaths: ["<rootDir>"],
    moduleDirectories: ["node_modules", "src"],
    modulePathIgnorePatterns: ["<rootDir>/generators"],
};

module.exports = createJestConfig(customJestConfig);
