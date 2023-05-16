const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const styles = require("./src/styles.css")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
		publicPath: "/"
	},
	resolve: {
		extensions: [".js"]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/i,
				use: [ "css-loader", "style-loader" ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: "./public/index.html",
			filename: "./index.html"
		})
	]
}