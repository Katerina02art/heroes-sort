export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  collectCoverageFrom: ["src/**/*.js", "!src/**/index.js"],
  coverageThreshold: {
    global: {
      lines: 100,
    },
  },
};
