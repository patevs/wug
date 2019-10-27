/*******************
 * * src/detect.js *
 *******************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const execa = require('execa');

/***************
 * * FUNCTIONS *
 ***************/

const getVersion = async (command) => {
	const {stdout} = await execa(command, ['version']);
	return stdout;
}

const getDashVersion = async (command) => {
	const {stdout} = await execa(command, ['-version']);
	return stdout;
}

const getDashDashVersion = async (command) => {
	const {stdout} = await execa(command, ['--version']);
	// console.log(stdout);
	return stdout;
}

/*
const getVersion = async (command) => {
	const {stdout} = await execa(command, ['--version']);
	// console.log(stdout);
	return stdout;
}
*/

/*************
 * * EXPORTS *
 *************/

module.exports = {
	getVersion,
	getDashVersion,
	getDashDashVersion
};

/* EOF */
