
/**
 * `webpack.common.js`
 */

// IMPORTS

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// EXPORTS

module.exports = {
    entry: {
        app: './index.js',
    },
    plugins: [
		new CleanWebpackPlugin(),
	],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [],
    },
};

/* EOF */
