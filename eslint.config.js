import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';

export default [
	{
		ignores: [
			'.DS_*',
			'*.log',
			'logs',
			'**/*.backup.*',
			'**/*.back.*',
			'node_modules',
			'bower_components',
			'*.sublime*',
			'psd',
			'thumb',
			'sketch',
			'vite.config.js',
			'dist',
			'.env*'
		]
	},
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module'
			}
		},
		settings: { react: { version: '18.3' } },
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			...prettier.rules,
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			],
			indent: [
				'error',
				'tab',
				{
					SwitchCase: 1,
					ignoredNodes: ['JSXElement *']
				}
			],
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
			'comma-dangle': ['error', 'never'],
			'no-unused-vars': 'warn',
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-undefined': 'warn',
			'no-eval': 'warn'
		}
	}
];
