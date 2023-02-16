module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [`@testing-library/jest-dom/extend-expect`],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/test-utils/__mocks__/svgTransform.js',
  },
  testPathIgnorePatterns: ['<rootDir>/src/test-utils/'],
  collectCoverageFrom: ['**/src/**/*.{ts,tsx}'],
  coverageThreshold: {
    './src/graphql/auth/guards': {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95,
    },
  },
};
