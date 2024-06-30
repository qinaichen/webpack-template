const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|tff|otf)$/i,
                type: "asset/resource",
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
        })
    ],
    devServer: {
        port: 3000,
    }
}