/**************
 * * index.js *
 **************/

'use strict';

/*************
 * * IMPORTS *
 *************/

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
	const nodev = await detect.getDashDashVersion('node')
	console.log(nodev);
	const npmv = await detect.getDashDashVersion('npm')
	console.log(npmv);
	const gitv = await detect.getDashDashVersion('git')
	console.log(gitv);
	const hubv = await detect.getVersion('hub')
	console.log(hubv);
	const javav = await detect.getDashVersion('java')
	console.log(javav);
})();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
