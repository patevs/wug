/**
 * `webpack.prod.js`
 */

// IMPORTS

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// EXPORTS

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
});

/* EOF */
