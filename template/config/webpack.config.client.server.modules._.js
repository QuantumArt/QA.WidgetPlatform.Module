const path = require('path');
const baseconfig = require('./webpack.config.client._');
const { merge } = require('webpack-merge');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = env => ({});

module.exports = env => merge(baseconfig(env), webpackConfig(env));