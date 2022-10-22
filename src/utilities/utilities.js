const db = require('../configs/db.config')
const mysql = require("mysql2");

//creating pool connection to DB
var pool = mysql.createPool({
    connectionLimit: db.CONNLIMIT,
    host: db.HOST,
    port: db.PORT,
    user: db.USER,
    password: db.PASSWORD,
    database: db.DB,
})

//get pageSize from db.config.js file or set default to 10
let pageSize = db.PAGESIZE || 10;


//function is used for filtering page data
exports.paginator = (page, row) => {
    return row.slice(pageSize * (page - 1), pageSize * page);
}

//function is used for making DB cnnection
exports.getConnection = function (callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            return callback(err);
        }
        callback(err, conn);
    });
};