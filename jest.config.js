module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  }
};