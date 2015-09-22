/**
 * Created by dancastillo on 9/19/15.
 */
var http = require('http');

function handle_incoming_request(req, res) {
    console.log("INCOMING REQUEST: " + req.method + " " + req.url);
    res.writeHead(200, { "Content-Type" : "application/json" });
    var result = {error:"Product not found"};

    products =
        [{"productID":"1234567","price":"$19.99"},
         {"productID":"5555555", "price":"$4.99"},
         {"productID":"8888888","price":"$19.99"}];

    if(req.url==="/1234567"){
        result = JSON.stringify(
            products[0]) + "\n"
    }
    if(req.url==="/5555555"){
        result = JSON.stringify(
            products[1]) + "\n"
    }
    if(req.url==="/8888888"){
        result = JSON.stringify(
            products[2]) + "\n"
    }
    res.end(result + "\n");
}

var s = http.createServer(handle_incoming_request);

s.listen(8080);
