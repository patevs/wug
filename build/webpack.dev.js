/**
 * `webpack.dev.js`
 */

// IMPORTS

const merge = require("webpack-merge");
const common = require("./webpack.common.js");

// EXPORTS

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    }
});

/* EOF */
