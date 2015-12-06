
var db = require('./db.js');


var getRating = function getRating(product_id, callback) {
    var get = {product_id: product_id};
    db.pool.getConnection(function (err, connection) {
        // Use the connection
        //connection.query('SELECT * FROM PRODUCTS WHERE ?', get, function (err, results) {
        //connection.query('SELECT CAST(AVG(rating) AS DECIMAL(3,2)) FROM test.ratings WHERE ?', get, function (err, results) {
        /*connection.query('SELECT test.products.product_id, test.products.product, ' +
            'CAST(AVG(test.ratings.rating) AS decimal(3,2)) ' +
            'FROM test.ratings ' +
            'LEFT JOIN test.products ' +
            'ON test.ratings.product_id = test.products.product_id ' +
            'WHERE ?', get, function (err, results) {*/
        connection.query('SELECT products.product_id, products.product,cast(AVG(ratings.rating) AS decimal(3,2)) FROM ratings LEFT JOIN products ON ratings.product_id = products.product_id WHERE products.product_id = ' + product_id +';', function (err, results) {
            if (!err) {
                if (results[0].product_id != null) {
                    callback(null, results);
                } else {
                    callback("Product not yet rated.", null);
                }
            } else {
                callback(err, null);
            }
            //release
            connection.release();
        });

    });
}


var insertRating = function insertRating(data, callback)
{
    var get = {product_id: data.product_id, rating: data.rating};
    //Make sure rating is a number 0-5
    if (isNaN(data.rating))
    {
        callback("Rating must be a number 0-5", null);
    }
    else if(data.rating > 5)
    {
        callback("Rating cannot be greater than 5", null);
    }
    else if (data.rating < 0)
    {
        callback("Rating cannot be less than 0", null);
    }
    else
    {
        //Need to check to make sure product exists before inserting a rating for it
        db.pool.getConnection(function (err, connection) {
            // Use the connection
            connection.query('INSERT INTO RATINGS SET ?', get, function (err, results) {
                if (!err) {
                    //console.log(results);
                    if (results.affectedRows > 0) {
                        callback(null, results);
                    } else {
                        callback(err, null);
                    }
                }
                else
                {
                    callback(err, null);
                }
                //release
                connection.release();
            });

        });
    }
}


var updateRating = function updateRating(data, callback)
{
    var get = {id: data.id, rating: data.rating};
    //Make sure rating is a number 0-5
    if (isNaN(data.rating))
    {
        callback("Rating must be a number 0-5", null);
    }
    else if(data.rating > 5)
    {
        callback("Rating cannot be greater than 5", null);
    }
    else if (data.rating < 0)
    {
        callback("Rating cannot be less than 0", null);
    }
    else
    {
        db.pool.getConnection(function (err, connection) {
            // Use the connection
            connection.query('UPDATE ratings SET rating='+data.rating+' WHERE id='+data.id, function (err, results) {
                if (!err) {
                    if (results.affectedRows > 0) {
                        callback(null, results);
                    } else {
                        callback("Rating id not found", null);
                    }
                }
                else
                {
                    callback(err, null);
                }
                //release
                connection.release();
            });

        });
    }
}


var deleteRating = function deleteRating(data, callback)
{
    var get = {id: data.id};
    //make sure id is a number
    if (isNaN(data.id) || data.id < 1)
    {
        callback("Rating must be a number greater than 0", null);
    }
    else
    {
        db.pool.getConnection(function (err, connection) {
            // Use the connection
            connection.query('DELETE FROM ratings WHERE ?', get, function (err, results) {
                if (!err) {
                    //console.log(results);
                    if (results.affectedRows > 0) {
                        callback(null, results);
                    } else {
                        callback("Rating not found", null);
                    }
                } else {
                    callback(err, null);
                }
                //release
                connection.release();
            });

        });
    }
}


module.exports.getRating = getRating;
module.exports.deleteRating = deleteRating;
module.exports.insertRating = insertRating;
module.exports.updateRating = updateRating;