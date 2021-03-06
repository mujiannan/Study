const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devtool: 'sourcemap',
    entry: {
        main: './src/ts/main.ts',
        mainPage: ['./src/js/jmsy-bs-mainpage.js', './src/ts/mainPage/mainPage.ts'],
        projectPage: ['./src/ts/projectPage/projectPage.ts']
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader', // will use tsconfig.json
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader', options: { importLoaders: 1 } }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        esModule: false
                    }
                }]
            },
            {
                test: /\.(jpg|png|jpeg|)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'imgs/',
                        esModule: false
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                use: [{
                    loader: 'html-withimg-loader'
                }]
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './[name].css'
        }),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + './src/index.html',
            chunks: ['main', 'mainPage'],
            filename: "index.html",
            inject: 'body',
            minify: {
                collapseInlineTagWhitespace: true,
                removeComments: true,
                minifyCSS: true
            }
        }),
        new HtmlWebpackPlugin({
            template: 'html-withimg-loader!' + './src/project.html',
            chunks: ['main', 'projectPage'],
            filename: "project.html",
            inject: 'body',
            minify: {
                collapseInlineTagWhitespace: true,
                //removeComments: true,
                minifyCSS: true
            }
        })
    ]
}