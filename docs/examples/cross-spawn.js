/*****************************
 * * examples/cross-spawn.js *
 *****************************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const spawn = require('cross-spawn');

/***************
 * * FUNCTIONS *
 ***************/

const run = () => {
    // Spawn NPM asynchronously
    // const child = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
    // Spawn NPM synchronously
    // const result =
    spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
    // console.log(result);
};
run();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
