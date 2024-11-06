// # flat.mjs
import js from '@eslint/js';
import globals from 'globals';
import config from './index.js';

export default {
	rules: {
		...js.configs.recommended.rules,
		...config.rules,
	},
	languageOptions: {
		globals: {
			...globals.browser,
			...globals.node,
			...globals.mocha,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignores: [
		'node_modules/**',
		'dist/**',
		'eslint.config.js',
	],
};
