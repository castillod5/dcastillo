var http = require('http');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
});

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");
    } else {
        console.log("Error connecting database ... \n\n");
    }
});

function getPrice(id, callback) {

    var get  = {id: id};
    connection.query('SELECT PRICE FROM PRODUCT WHERE ?', get, function(err, results) {
        if(!err) {
            if(results[0]!=null) {
                callback(null, results[0].PRICE);
            }else{
                callback("Product not found.", null);
            }
        } else {
            callback(err,null);
        }

    });
}

function handleRequest(req, res) {
    getPrice(req.url.replace("/", ""), function(err,data){
        var result;
        var httpcode = 200;

        if (err) {
            httpcode = 503;
            result = {
                error_code: 503,
                message: "Product ID: " + req.url.replace("/", "") + " does not exist"
            };
        } else {
            result = {
                id: req.url.replace("/", ""),
                price: data
            };
        }
        res.writeHead(httpcode, {"Content-Type": "application/json"});
        res.end(JSON.stringify(result) + "\n");
    });
}

var server = http.createServer(handleRequest);
server.listen(8080);
