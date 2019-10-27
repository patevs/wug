/**************
 * * index.js *
 **************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const execa = require('execa');
// const spawn = require('cross-spawn');
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
const genTable = (col) => {
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
}

// Get NodeJS version
// const result = spawn.sync('node', ['--version'], { stdio: 'inherit' });
// console.log(result.toString());

/**
 *	Get the current node version
 */
const getNodeVersion = async () => {
	const {stdout} = await execa('node', ['--version']);
	console.log(stdout);
}

/*****************
 * * ENTRY POINT *
 *****************/

(() => {
	const col = getTermSize();
	genTable(col);
	getNodeVersion();
})();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
