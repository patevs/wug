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

/**
 *	Gets the version of a given command
 */
const getVersion = async (command) => {
	const {stdout} = await execa(command, ['--version']);
	// console.log(stdout);
	return stdout;
}

/*************
 * * EXPORTS *
 *************/

module.exports = {
	getVersion
};

/* EOF */
