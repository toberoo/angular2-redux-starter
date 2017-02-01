const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    APP: path.join(__dirname, 'app'),
    POLYFILL: path.join(__dirname, 'app', 'polyfill.browser.ts'),
    MAIN: path.join(__dirname, 'main.ts'),
    DIST: path.join(__dirname, 'dist'),
    IGNORE: path.join(__dirname, "node_modules")
}

module.exports = {
    entry: {
        polyfill: PATHS.POLYFILL,
        app: PATHS.MAIN
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                include: [PATHS.MAIN, PATHS.APP],
                exclude: PATHS.IGNORE
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Angular2 Rx Starter',
            template: 'app/index.html',
        }),
        new webpack.optimize.CommonsChunkPlugin("polyfill")
    ]
}

