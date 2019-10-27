/**************
 * * index.js *
 **************/

'use strict';

/*************
 * * IMPORTS *
 *************/

//
const detect = require('./src/detect');

/***************
 * * FUNCTIONS *
 ***************/

//

/*****************
 * * ENTRY POINT *
 *****************/

(async () => {
	console.log("\nStarting WUG...\n");
	// const col = getTermSize();
	// genTable(col);
	const nodev = await detect.getVersion('node')
	console.log(nodev);
	const npmv = await detect.getVersion('npm')
	console.log(npmv);
})();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
