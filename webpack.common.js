/* eslint-disable import/no-extraneous-dependencies,no-console */
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const {ProvidePlugin, DefinePlugin} = webpack;

const {
    CONTEXT_PATH = '',
    APPLICATION_THEME
} = process.env;

const DEFAULT_THEME = 'purple';

const THEMES = [
    'khaki',
    'olive',
    'indy',
    'navy',
    'purple',
    'pink',
    'ruby'
];

const theme = THEMES.includes(APPLICATION_THEME)
    ? APPLICATION_THEME
    : DEFAULT_THEME;

const devMode = process.env.NODE_ENV !== 'production';

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

const cssLoader = {
    loader: 'css-loader',
    options: {
        importLoaders: 1
    }
};
const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: [autoprefixer]
    }
};

module.exports = {
    srcDir,
    distDir,
    common: {
        entry: `${srcDir}/index.jsx`,
        output: {
            filename: '[name].[hash].bundle.js',
            path: distDir,
            publicPath: `/${CONTEXT_PATH}`
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        cssLoader,
                        postcssLoader,
                        {
                            loader: 'sass-loader', // compiles Sass to CSS,
                            options: {
                                includePaths: [
                                    path.resolve(__dirname, 'src/themes', theme),
                                    path.resolve(__dirname, 'src')
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(eot|woff2?|otf|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[hash].[ext]',
                        publicPath: `/${CONTEXT_PATH}`
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
            new MiniCssExtractPlugin({
                filename: devMode ? '[name].css' : '[name].[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
            }),
            new HtmlWebPackPlugin({
                title: 'React Web Application',
                template: './src/index.hbs',
                filename: './index.html',
                favicon: './src/assets/img/favicon.ico'
            }),
            new ProvidePlugin({
                React: 'react',
                classNames: 'classnames',
                PropTypes: 'prop-types'
            }),
            new DefinePlugin({
                'process.env': {
                    APPLICATION_REPOSITORY: JSON.stringify(process.env.APPLICATION_REPOSITORY),
                    APPLICATION_BRANCH: JSON.stringify(process.env.APPLICATION_BRANCH),
                    CONTEXT_PATH: JSON.stringify(process.env.CONTEXT_PATH)
                }
            })
        ]
    }
};
