/**************
 * * index.js *
 **************/

'use strict';

/*************
 * * IMPORTS *
 *************/

// package.json
var pjson = require('./package.json');

// const detect = require('./src/detect');
const detect = require('./src/detect/sw');

/***************
 * * CONSTANTS *
 ***************/

const BINARY_NAME = pjson.name;
const VERSION = pjson.version;

// Regex to extract simple version - extracts numeric sem-ver style versions
// REGEX_SIMPLE_VERSION="([[:digit:]]+\.?){2,3}"

/***************
 * * FUNCTIONS *
 ***************/

// Log a welcome message
const logWelcome = () => {
    console.log('Starting ' + BINARY_NAME);
    console.log('Version: ' + VERSION + '\n');
};

/*****************
 * * ENTRY POINT *
 *****************/

(async () => {
    //..
    logWelcome();
    const nodev = await detect.detect('node');
    console.log('node: ' + nodev);
    //..
})();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
