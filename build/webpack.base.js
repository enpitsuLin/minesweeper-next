const path = require('path');

module.exports = {
	entry: {
		index: './src/index.tsx',
		framework: ['react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].[chunkhash:8].js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			maxSize: 30000,
			minChunks: 1,
			cacheGroups: {
				framework: {
					test: 'framework',
					name: 'framework',
					enforce: true
				},
				vendors: {
					priority: -10,
					test: /node_modules/,
					name: 'vendor',
					enforce: true
				}
			}
		}
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			'@': path.resolve('src')
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
		]
	},
	plugins: []
};
