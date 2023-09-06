const path = require('path');

module.exports = {
	mode: 'production',
	devtool: 'inline-source-map',
	entry: {
		main: './src/android-tv-card.ts',
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'android-tv-card.js',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
		],
	},
};
