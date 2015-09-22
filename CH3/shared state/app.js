/**
 * Created by Administrator on 9/10/2015.
 */

var foo = require('./foo');

console.log('initial something:', foo.something);

//now modify something
foo.something = 456;

//new load bar:
var bas = require('./bar');

