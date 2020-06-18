const crypto = require('crypto');

/*******
 * Generate Random string
 * @returns {string}
 */
const randomString = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const stringLength = 8;
    let randomString = '';
    for (let i=0; i<stringLength; i++) {
        let rnum = Math.floor(Math.random() * chars.length);
        randomString += chars.substring(rnum,rnum+1);
    }
    return randomString;
};

/*************
 * jwt
 *************/
exports.jwt = {
    cert: "aksguraksgur"
};


