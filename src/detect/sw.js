/**********************
 * * src/detect/sw.js *
 **********************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const execa = require('execa');

/***************
 * * FUNCTIONS *
 ***************/

const dynamicDetect = async (command, args) => {
    //..
    const { stdout } = await execa(command, args);
    return stdout;
    //..
}

//
const detect = async (name) => {
    //..
    // Run switch on name
    switch (name) {
        case 'node':
            // console.log('NodeJS');
            return await dynamicDetect('node', '-v');
            // break;
        case 'npm':
            // console.log('npm');
            return await dynamicDetect('npm', '-v');
            // break;
        default:
            console.log('%s command not understood', name);
    };
    //..
}

/*************
 * * EXPORTS *
 *************/

module.exports = {
    detect
};

/* EOF */
