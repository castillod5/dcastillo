/**
 * Created by dancastillo on 10/1/15.
 */

function getConnection(callback){
    var connection;
    try{
        throw new Error('connection failed');

        callback(null, connection);
    }
    catch(error){
        callback(null, connection);
    }
}

getConnection(function(error, connection){
    if(error){
        console.log('Error: ', error.message);
    }
    else
    {
        console.log('Connection was successful: '. connection);
    }
});