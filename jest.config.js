const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
    testEnvironment: "jest-environment-jsdom",
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/**.tsx",
        "!src/**/**.stories.tsx",
        "!src/pages/**/*.tsx",
        "!src/styles/**/*.tsx",
    ],
    transform: {
        "^.+\\.test.(t|j)sx?$": "@swc/jest",
    },
    setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};

module.exports = createJestConfig(customJestConfig)
