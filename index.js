
/**************
 * * index.js *
 **************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const termSize = require('term-size');
const platform = require('platform');

/***************
 * * FUNCTIONS *
 ***************/

const _termsize = termSize();
console.log(_termsize);

const os = platform.os;
// console.log(os);

// const arch = os.architecture;
// console.log(arch);
// const fam = os.family;
// console.log(fam);
const oss = os.toString();
console.log(oss);
// const ver = os.version;
// console.log(ver);

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
