
/**************
 * * index.js *
 **************/

'use strict';

// IMPORTS

var Table = require('cli-table3');
const execa = require('execa');
const termSize = require('term-size');

termSize();

(async () => {
	const {stdout} = await execa('echo', ['unicorns']);
	console.log(stdout);
})();

// instantiate
var table = new Table({
	head: ['TH 1 label', 'TH 2 label'],
	// colWidths: [100, 200]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
	['First value', 'Second value'],
	['First value', 'Second value']
);

console.log(table.toString());

// EXPORTS

module.exports = {};

/* EOF */
