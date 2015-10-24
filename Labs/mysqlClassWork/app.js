var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test"
});

var productID = 1234567;

con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        console.log(err);
        return;
    }
    console.log('Connection established');

});

    con.query('SELECT price FROM Product WHERE id =' + productID, function(err,rows){
        if(err){
            console.log('error happened');
        }else {

            console.log(rows[0].price);
        }
    })

/*con.query('SELECT * FROM Product',function(err,rows){
    if(err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);
});*/

con.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});


