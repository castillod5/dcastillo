/**
 * Created by Administrator on 9/10/2015.
 */

var t1 = new Date().getTime();
var foo1 = require('./shared state/foo');
console.log(new Date().getTime() - t1);

var t2= new Date().getTime(0);
var foo2 = require('./shared state/foo');
console.log(new Date().getTime() - t2);
