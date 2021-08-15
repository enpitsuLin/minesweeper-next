const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
	mode: 'development',
	output: {
		filename: 'js/[name].[hash:8].bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		compress: true,
		port: 2333,
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			inject: 'body',
			hash: false
		}),
		new webpack.HotModuleReplacementPlugin()
	]
});
