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

const version = async command => {
    const { stdout } = await execa(command, ['version']);
    return stdout;
};

const _version = async command => {
    const { stdout } = await execa(command, ['-version']);
    return stdout;
};

const __version = async command => {
    const { stdout } = await execa(command, ['--version']);
    // console.log(stdout);
    return stdout;
};

/*************
 * * EXPORTS *
 *************/

module.exports = {
    version,
    _version,
    __version
};

/* EOF */
