module.exports = {
	plugins: { '@typescript-eslint': {} },
	rules: {
		'no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
	},
	ignores: ['node_modules/*', 'dist/*', 'webpack.config.js'],
};
