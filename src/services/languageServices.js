
const utilities = require("../utilities/utilities")

exports.fetchCount = function (req, res, next) {
    utilities.getConnection(
        function (err, client) {
            if (err) {
                next(err)
                res.status(500).json({
                    success: false,
                    message: err.sqlMessage||" Some error occured!",
                })
            } else {
                client.query('SELECT count(*) FROM programming_languages', function (err, rows) {
                    // And done with the connection.
                    if (err) {
                        console.log('Query Error');
                        next(err);
                        res.status(500).json({
                            success: false,
                            message: err.sqlMessage||" Some error occured!",
                        })
                    }else{

                    res.json(rows);
                    client.release();
                    }
                    // Don't use the connection here, it has been returned to the pool.
                });
            }
        });
}
exports.fetchPage = function (req, res, next) {
    utilities.getConnection(
        function (err, client) {
            if (err) {
                next(err)
                res.status(500).json({
                    success: false,
                    message: err.sqlMessage||" Some error occured!",
                })
            } else {
                client.query('SELECT * FROM programming_languages', function (err, rows) {
                    // And done with the connection.
                    if (err) {
                        console.log('Query Error');
                        next(err);
                        res.status(500).json({
                            success: false,
                            message: err.sqlMessage||" Some error occured!",
                        })
                    }else{
                    let page = req.query.page || 1;

                    res.json(utilities.paginator(page, rows));
                    client.release();
                    }
                    // Don't use the connection here, it has been returned to the pool.
                });
            }
        });
}
exports.createEntry = function (req, res, next) {
    utilities.getConnection(
        function (err, client) {
            if (err) {
                next(err)
                res.status(500).json({
                    success: false,
                    message: err.sqlMessage||" Some error occured!",
                })
            } else {
                try {
                    console.log(req.body)
                    client.query(`INSERT INTO programming_languages (id,name,released_year,githut_rank,pypl_rank,tiobe_rank) VALUES (${req.body.id},"${req.body.name}",${req.body.released_year},${req.body.githut_rank},${req.body.pypl_rank},${req.body.tiobe_rank});`, function (err, rows) {
                        // And done with the connection.
                        if (err) {
                            console.log('Query Error', err.sqlMessage);

                            next(err);
                            res.status(500).json({
                                success: false,
                                message: err.sqlMessage||" Some error occured!",
                            })
                        } else {

                            res.json({
                                success: true,
                                id: req.body.id,
                                name: req.body.name,
                                message: "Record insertion successful!",
                            });
                            return client.release();
                        }
                        // Don't use the connection here, it has been returned to the pool.
                    });
                } catch (err) {
                    next(err)
                    console.log(err)
                    return
                }
            }
        });
}
exports.updateEntry = function (req, res, next) {
    utilities.getConnection(
        function (err, client) {
            if (err) {
                next(err)
                res.status(500).json({
                    success: false,
                    message: err.sqlMessage||" Some error occured!",
                })
            } else {
                console.log(req.params.id)

                client.query(`SELECT * FROM programming_languages WHERE id = ${req.params.id}`, (err, result) => {
                    if (err) {
                        console.log(err);
                        next(err);
                        res.status(500).json({
                            success: false,
                            message: err.sqlMessage||" Some error occured!",
                        })
                    } else {
                        console.log(result[0])
                        if(result[0]){
                        client.query(`UPDATE programming_languages SET name= "${req.body.name || result[0].name}" ,released_year= ${req.body.released_year || result[0].released_year},githut_rank= ${req.body.githut_rank || result[0].githut_rank},pypl_rank= ${req.body.pypl_rank || result[0].pypl_rank},tiobe_rank= ${req.body.tiobe_rank || result[0].tiobe_rank} WHERE id= ${req.params.id}`, function (err, rows) {
                            // And done with the connection.
                            if (err) {
                                console.log(err);
                                next(err);
                                res.status(500).json({
                                    success: false,
                                    message: err.sqlMessage||" Some error occured!",
                                })
                            } else {

                                res.json({
                                    success: true,
                                    message: `Update Successfull for record id ${req.params.id}`,
                                    status: 200,
                                });
                            }
                            return client.release();

                            // Don't use the connection here, it has been returned to the pool.
                        });
                    }else{
                        res.status(404).json({
                            success: false,
                            message: `Record with ID ${req.params.id} not found in DB!`,
                        }) 
                    }
                    }
                })

            }
        });
}
exports.deleteEntry = function (req, res, next) {
    utilities.getConnection(
        function (err, client) {
            if (err) {
                next(err)
                res.status(500).json({
                    success: false,
                    message: err.sqlMessage||" Some error occured!",
                })
            } else {
                client.query(`DELETE FROM programming_languages WHERE id=${req.params.id}`, function (err, rows) {
                    // And done with the connection.
                    if (err) {
                        console.log('Query Error', err);
                        next(err);
                        res.status(500).json({
                            success: false,
                            message: err.sqlMessage ||" Some error occured!",
                        })
                    }else{

console.log(rows)
if (rows && rows.affectedRows>0){
                    res.json({
                        success: true,
                        status: 200,
                        message: `Record with id ${req.params.id} is deleted from DB!`,
                    });
                }
                else{
                    res.status(404).json({
                        success: false,
                        message: `Record with id ${req.params.id} is not found in DB!`,
                    })
                }
                    return client.release();

                    // Don't use the connection here, it has been returned to the pool.
             } });
            }
        });
}