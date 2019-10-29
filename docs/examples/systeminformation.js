/****************************************
 * * docs/examples/systeminformation.js *
 ****************************************/

'use strict';

/*************
 * * IMPORTS *
 *************/

const si = require('systeminformation');

/***************
 * * FUNCTIONS *
 ***************/

const getSysInfo = () => {
    si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
getSysInfo();

/*************
 * * EXPORTS *
 *************/

// module.exports = {};

/* EOF */
