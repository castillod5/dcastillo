/**
 * Created by dancastillo on 9/22/15.
 */

var fs = require('fs');

fs.unlink('./test.txt', function(err){
    if(err){
        console.log('Error:', err);
    } else {
        console.log('test.txt successfully deleted');
    }
});