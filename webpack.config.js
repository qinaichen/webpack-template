const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader']
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        }, {
            test: /\.(jpg|jpeg|png|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 8 * 1024,
                esModule: false
            }
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            exclude: /\.(css|js|html|sass|less|jpg|jpeg|png|gif)$/,
            loader: 'file-loader',
            options: {
                name: '[hash:10].[ext]'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3000
    }
}