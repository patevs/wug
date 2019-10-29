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
  console.log('\nStarting WUG...\n');
  // const col = getTermSize();
  // genTable(col);
  const nodev = await detect.__version('node');
  console.log(nodev);
  const npmv = await detect.__version('npm');
  console.log(npmv);
  const gitv = await detect.__version('git');
  console.log(gitv);
  const hubv = await detect.version('hub');
  console.log(hubv);
  const javav = await detect._version('javac');
  console.log(javav);
})();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
