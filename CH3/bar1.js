/** Created by Administrator on 9/10/2015. */
var foo = require('./shared state/foo');
foo();

var iReallyNeedThisModule = true;

if(iReallyNeedThisModule){
    var foo1 = require('./shared state/foo');
    foo1();
}

