/** @type {import('jest').Config} */
const config = {
  testEnvironment: "node",
  setupFilesAfterEnv: ["./jest-mongodb-config.js"],
};

module.exports = config;
