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
    console.log('Starting ' + BINARY_NAME + '\n');
    console.log('Version: ' + VERSION + '\n');
}

/*****************
 * * ENTRY POINT *
 *****************/

(() => {
    //..
    logWelcome();
    //..
})();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
