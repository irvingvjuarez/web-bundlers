# Webpack
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. https://webpack.js.org/

## Usage
- Setup a project (git & npm)
- Install webpack: `npm install webpack webpack-cli -D`
- Create your config

## Webpack.config.js
Documentation: https://webpack.js.org/configuration/

For a very basic project (Html, css and plain javascript) you would like to install some special loaders in order to webpack to understand and manipulate html or any other asset your project requires.
In addition, babel is required to webpack to understand modern javascript: `npm install @babel/core babel-loader -D`

For this example project, only a Html plugin will be required.

Once you know what assets are going to be using during your project and have installed them, let's make the configuration:

```js
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js"
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
```

This is the initial configuration, where, as you can notice, we are doing several things:

- Setting the entry to the src/index.js
- Stablishing an output directory with all the js named as `main.js`
- Explicitly telling webpack to use babel-loader
- Adding the HtmlWebpackPlugin with a basic configuration