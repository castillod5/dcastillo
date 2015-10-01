/**
 * Created by dancastillo on 10/1/15.
 */

var foo = 123;
if(true){
    (function() {
        var foo = 456;
    })();
}

console.log(foo);