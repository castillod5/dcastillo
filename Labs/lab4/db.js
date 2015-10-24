/**
 * Created by Vico on 10/20/2015.
 */
var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'password',
    database: 'test'
});

module.exports.pool = pool;