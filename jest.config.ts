import type { Config } from '@jest/types';

export const config = async (): Promise<Config.InitialOptions> => ({
  verbose: true,
  name: 'dbinclui',
  rootDir: '.',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{tsx,jsx,ts,js}',
    '!/node_modules/**',
    '!/coverage/**',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  modulePaths: [
    '<rootDir>/src/**/*.{spec,test}.{ts,js}',
    '<rootDir>/tests/**/*.{spec,test}.{ts,js}',
  ],
  passWithNoTests: true,
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
});

export default config;
