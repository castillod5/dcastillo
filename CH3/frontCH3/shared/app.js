/**
 * Created by dancastillo on 9/22/15.
 */

var foo = require('./foo');
console.log('initial something:', foo.something); //123

//now modify something
foo.something = 456;

//now load bar
var bas = require('./bar');