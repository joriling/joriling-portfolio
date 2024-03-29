const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: ''
	},
	devtool: 'none',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /nodel_modules/
			},
			{
				test: /\.css$/,
				exclude: /nodel_modules/,
				use: [
					{ loader: 'style-loader' },
					{ 
						loader: 'css-loader', 
					   	options: {
							importLoaders: 1,
							modules: {
								localIdentName: '[name]__[local]__[hash:base64:5]'
							}
						}
					},
					{ 
						loader: 'postcss-loader', 
						options: {
							ident: 'postcss',
							plugins: () => [autoprefixer()]
						} 
					}
				]
			},
			{ test: /\.(png|jpe?g|gif|svg)$/, loader: 'file-loader?limit=8000&name=[name].[ext]' }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]
};
