/*******************************
 * * docs/examples/platform.js *
 *******************************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const platform = require('platform');

/***************
 * * FUNCTIONS *
 ***************/

const os = platform.os;
console.log(os);

const arch = os.architecture;
console.log(arch);

const fam = os.family;
console.log(fam);

const oss = os.toString();
console.log(oss);

const ver = os.version;
console.log(ver);

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
