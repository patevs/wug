/**************
 * * index.js *
 **************/

'use strict';

/*************
 * * IMPORTS *
 *************/

// const spawn = require('cross-spawn');
const Table = require('cli-table3');
const termSize = require('term-size');

/***************
 * * FUNCTIONS *
 ***************/

// Get the size of the current terminal window
const _termsize = termSize();
// console.log(_termsize);
const columns = _termsize.columns;
// console.log(columns);
const col = Math.floor(columns / 4);
// console.log(col);

// Instantiate a new table
let table = new Table({
	head: ['COL 1', 'COL 2', 'COL 3'],
	colWidths: [col, col, col]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
	['one', 'two', 'three']
);

console.log(table.toString());

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
