/*******************
 * * src/output.js *
 *******************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const Table = require('cli-table3');
const termSize = require('term-size');

/***************
 * * FUNCTIONS *
 ***************/

/**
 *	Gets and returns the size of the current terminal window
 */
const getTermSize = () => {
	const _termsize = termSize();
	// console.log(_termsize);
	const columns = _termsize.columns;
	// console.log(columns);
	const col = Math.floor(columns / 4);
	// console.log(col);
	return col;
}

/**
 * Creates and displays a table
 */
const genTable = () => {
	const cw = getTermSize();
	// Instantiate a new table
	let table = new Table({
		head: ['COL 1', 'COL 2', 'COL 3'],
		colWidths: [cw, cw, cw]
	});
	// table is an Array, so you can `push`, `unshift`, `splice` and friends
	table.push(
		['one', 'two', 'three']
	);
	console.log(table.toString());
}

/*************
 * * EXPORTS *
 *************/

module.exports = {
	genTable
};

/* EOF */
