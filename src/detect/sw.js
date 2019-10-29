/**********************
 * * src/detect/sw.js *
 **********************/

'use strict';

/*************
 * * IMPORTS *
 *************/

// const execa = require('execa');

/***************
 * * FUNCTIONS *
 ***************/

//
const detect = (name) => {
    //..
    // Run switch on name
    switch (name) {
        case 'node':
            console.log('NodeJS');
            break;
        case 'npm':
            console.log('npm');
            break;
        default:
            console.log('%s command not understood', name);
    };
    //..
}

/*************
 * * EXPORTS *
 *************/

// module.exports = { };

/* EOF */
