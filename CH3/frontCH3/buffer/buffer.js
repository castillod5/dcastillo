/**
 * Created by dancastillo on 9/22/15.
 */

//a string
var str = "Hello Buffer World!";
console.log(str);

// From a string to buffer
var buffer = new Buffer(str, 'utf-8');
console.log(buffer);

//from buffer to string
var roundTrip = buffer.toString('utf-8');
console.log(roundTrip); //hello