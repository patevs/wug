/**************
 * * index.js *
 **************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const execa = require('execa');
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

/**
 *	Gets the version of a given command
 */
const getVersion = async (command) => {
	const {stdout} = await execa(command, ['--version']);
	// console.log(stdout);
	return stdout;
}

/*****************
 * * ENTRY POINT *
 *****************/

(async () => {
	// const col = getTermSize();
	// genTable(col);
	const node = await getVersion('node');
	console.log(node);
	const npm = await getVersion('npm');
	console.log(npm);
})();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
