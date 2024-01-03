module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    },
  };
  