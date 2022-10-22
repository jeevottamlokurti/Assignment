
const utilities = require("../utilities/utilities")


exports.fetchPage = function (req, res, next) {
    utilities.getConnection(
        function (err, client) {
            if (err) {
                next(err)
            } else {
                client.query('SELECT * FROM programming_languages', function (err, rows) {
                    // And done with the connection.
                    if (err) {
                        console.log('Query Error');
                        next(err);
                    }
                    let page = req.query.page || 1;

                    res.json(utilities.paginator(page, rows));
                    client.release();

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
            } else {
                console.log(req.body)
                client.query(`INSERT INTO programming_languages (id,name,released_year,githut_rank,pypl_rank,tiobe_rank) VALUES (${req.body.id},"${req.body.name}",${req.body.released_year},${req.body.githut_rank},${req.body.pypl_rank},${req.body.tiobe_rank});`, function (err, rows) {
                    // And done with the connection.
                    if (err) {
                        console.log('Query Error',err);
                        next(err);
                    }

                    res.json({
                        success:true,
                        status:200,
                        id: req.body.id,
                        name: req.body.name
                    });
                    client.release();

                    // Don't use the connection here, it has been returned to the pool.
                });
            }
        });
}

exports.updateEntry = function (req, res, next) {
    utilities.getConnection(
        function (err, client) {
            if (err) {
                next(err)
            } else {
                console.log(req.params.id)

                client.query(`SELECT * FROM programming_languages WHERE id = ${req.params.id}`,(err,result)=>{
                    if(err){
                        console.log(err);
                        next(err);
                    }
                    console.log(result[0])
                    client.query(`UPDATE programming_languages SET name= "${req.body.name||result[0].name}" ,released_year= ${req.body.released_year||result[0].released_year},githut_rank= ${req.body.githut_rank||result[0].githut_rank},pypl_rank= ${req.body.pypl_rank||result[0].pypl_rank},tiobe_rank= ${req.body.tiobe_rank||result[0].tiobe_rank} WHERE id= ${req.params.id}`, function (err, rows) {
                        // And done with the connection.
                        if (err) {
                            console.log(err);
                            next(err);
                        }else{
    
                        res.json({
                            success:true,
                            status:200,
                        });
                    }
                        client.release();
    
                        // Don't use the connection here, it has been returned to the pool.
                    });
                })
                
            }
        });
}
exports.deleteEntry = function (req, res, next) {
    utilities.getConnection(
        function (err, client) {
            if (err) {
                next(err)
            } else {
                client.query('DELETE FROM programming_languages WHERE id=?',[req.params.id], function (err, rows) {
                    // And done with the connection.
                    if (err) {
                        console.log('Query Error',err);
                        next(err);
                    }
                    

                    res.json({
                        success:true,
                        status:200,
                    });
                    client.release();

                    // Don't use the connection here, it has been returned to the pool.
                });
            }
        });
}