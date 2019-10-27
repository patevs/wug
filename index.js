/**************
 * * index.js *
 **************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const spawn = require('cross-spawn');
 // const Table = require('cli-table3');
const termSize = require('term-size');

/***************
 * * FUNCTIONS *
 ***************/

const _termsize = termSize();
console.log(_termsize);

const run = () => {
	// Spawn NPM asynchronously
	// const child = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
	// Spawn NPM synchronously
	const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
	console.log(result);
}
run();

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
