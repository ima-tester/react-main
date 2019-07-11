/* eslint-disable import/no-extraneous-dependencies,no-console */
const merge = require('webpack-merge');
const {srcDir, common} = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: srcDir,
        port: 8081
    }
});
