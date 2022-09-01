const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template:'./src/index.html',
    filename:'./index.html'

})
module.exports = {
	// npm i webpack webpack-cli -D
    // npm i html-webpack-plugin -D
	// mode 用来指定构建模式
	// 编译模式 : development 开发模式 , production 生产模式
	// 在 production 模式下 , webpack执行编译 , 压缩和混淆
	// 在 development 模式下 , webpack执行编译
	mode: "development",
	entry: path.join(__dirname, "./src/index.js"),
	output: {
		path: path.join(__dirname, "./dist"),
		filename: "bundle.js",
	},
    plugins:[htmlPlugin]
};
