export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTextEncoder.ts"],
  transform: {
    "\\.[jt]sx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp|mp4|mp3)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  coveragePathIgnorePatterns: ["/node_modules/", "/test/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!src/test/**"],
  coverageDirectory: "<rootDir>/coverage",
  moduleDirectories: ["node_modules", "<rootDir>/src"],
};
