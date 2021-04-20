const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        bundle: ['babel-polyfill', path.resolve(process.cwd(), 'src', 'main.jsx')],
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'scripts/[name].[hash].js',
        chunkFilename: 'scripts/[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        modules: [
          path.resolve(__dirname + '/src'),
          path.resolve(__dirname + '/node_modules')
        ],
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['cache-loader', 'babel-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                use: 'file-loader?name=assets/images/[name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: 'file-loader?name=assets/fonts/[name].[ext]'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[hash:base64:5]',
                                exportLocalsConvention: 'camelCase'
                            }
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]',
                                exportLocalsConvention: 'camelCase'
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[hash].css',
            chunkFilename: 'styles/[id].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['bundle'],
            filename: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/assets', to: 'assets' }
            ]
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\\/]node_modules[\\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}

module.exports = config;