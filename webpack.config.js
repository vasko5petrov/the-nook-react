const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        bundle: ['babel-polyfill', path.resolve(process.cwd(), 'src', 'main.jsx')],
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
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
                test: /\.(jpe?g|png|gif|svg|ttf|otf|woff2?|eot)(\?.+)?$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: '/dist/',
                        name: '[name].[ext]'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]--[local]',
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
    
    devServer: {
        contentBase: './dist',
        historyApiFallback: {
            index: '/dist/index.html'
        },
        host: '0.0.0.0',
        public: 'http://localhost:8080',
        proxy: {
            context: ['/api'],
            target: 'http://localhost:3000',
            changeOrigin: true
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            chunks: ['bundle'],
            filename: './index.html'
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