import type { Config } from 'jest';

const config: Config = {
	verbose: true,
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	testMatch: ['<rootDir>/src/**/*.(spec|test).(ts|tsx)'],
};

export default config;
