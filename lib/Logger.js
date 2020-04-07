const moment = require('moment');

class Logger {
    /**
     * Output debug.
     *
     * @param msg
     */
    static debug(msg, ...args) {
        console.log(msg, args, { timestamp: moment().format() });
    }
}

module.exports = Logger;
