const fs = require('fs');

//Log the request method,date,time and path
let requestLogger = (req, res, next) => {
    let logMessage = "" + new Date() + " " + req.method + " " + req.url + "\n";
    fs.appendFile("requestLogger.txt", logMessage, (err) => {
        if (err) {
            return next(err);
        }
    });
    next();
}
module.exports = requestLogger;