const fs = require('fs')

//Middleware for logging errors

let errorLogger = (err, req, res, next) => {
    if (err) {
        fs.appendFile('errorLogger.txt', new Date() + " - " + err.stack + "\n", (error) => {
            if (error) {
                console.log("Logging error failed!");
            }
        });
        if (err.stack) {
            res.status(err.status);
        } else {
            res.status(500);
        }
        res.json({ "message": err.message });
        next();
    }
}
module.exports=errorLogger;