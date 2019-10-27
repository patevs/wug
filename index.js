/**************
 * * index.js *
 **************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const termSize = require('term-size');
const Table = require('cli-table3');

/***************
 * * FUNCTIONS *
 ***************/

const _termsize = termSize();
console.log(_termsize);

// instantiate
// var table = new Table({
// 	head: ['TH 1 label', 'TH 2 label'],
	// colWidths: [100, 200]
// });

// table is an Array, so you can `push`, `unshift`, `splice` and friends
// table.push(
// 	['First value', 'Second value'],
// 	['First value', 'Second value']
// );

// console.log(table.toString());

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
