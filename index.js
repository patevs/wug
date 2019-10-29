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

// System Information
// const si = require('systeminformation');

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
};

/*
const getSysInfo = () => {
    si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
*/

/*****************
 * * ENTRY POINT *
 *****************/

(() => {
    //..
    logWelcome();
    // getSysInfo();
    //..
})();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
