/***********************
 * * examples/execa.js *
 ***********************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const execa = require('execa');

/***************
 * * FUNCTIONS *
 ***************/

(async () => {
  const { stdout } = await execa("echo", ["unicorns"]);
  console.log(stdout);
})();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
