/* eslint-disable import/no-extraneous-dependencies,no-console */
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const {common} = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'hidden-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    ecma: 5,
                    output: {
                        beautify: false
                    }
                }
            })
        ],

        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }
});
