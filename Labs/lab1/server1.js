/**
 * Created by dancastillo on 9/19/15.
 */

var http = require('http');

function handle_incoming_request(req, res) {
    console.log("INCOMING REQUEST: " + req.method + " " + req.url);
    res.writeHead(200, { "Content-Type" : "application/json" });
    res.end(JSON.stringify(
            {"products":[
                {"productID":"1234567", "price":"$99.99"},
                {"productID":"5555555", "price":"$4.99"},
                {"productID":"8888888","price":"$19.99"}
            ]}) + "\n");
    //res.end(JSON.stringify( { error: null }) + "\n");
}

function productPrice(err, pp){

}
var s = http.createServer(handle_incoming_request);

s.listen(8080);

