/**
 * Created by dancastillo on 9/22/15.
 */

var a = function(){
    console.log('a called');
};

var b = function(){
    console.log('b called');
};

module.exports = {
    a: a,
    b: b
};