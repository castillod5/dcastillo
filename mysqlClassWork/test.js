/**
 * Created by dancastillo on 9/30/15.
 */

var http = require('http');
var mysql = require('mysql');
// Create a connection to MySql Server and Database
var connection = mysql.createConnection({
    host : '101.129.108.171',
    port : 3306,
    database: 'mb',
    user : 'user',
    password : 'pass'
});
// Create a simple Web Server to respond to requests
http.createServer(function(req, res){
    // RECEIVED A REQUEST!
    // for this example respond with a HTTP 200 OK
    res.writeHeader(200);
    res.write('Connect to mySql\n');
    // Connect to mySql (if there is an erro, report it and terminate de request)
    connection.connect(function(err){
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }
    });
    // Query the database to some data
    connection.query("SELECT * from mb.g WHERE ref = '806787088'", function(err, rows){
        // There was a error or not?
        if(err != null) {
            res.end("Query error:" + err);
        } else {
            // Shows the result on console window
            console.log(rows[0]);
            res.end("Success!");
        }
        // Close connection
        connection.end();
    });
// The server will be listen on port 8080
}).listen(8080);
