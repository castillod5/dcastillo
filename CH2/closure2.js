/**
 * Created by dancastillo on 10/1/15.
 */

function outerFunction(arg){
    var variableInOuterFunction = arg;
    return function(){
        console.log(variableInOuterFunction);
    }
}

var innerFunction = outerFunction('hello closrue!');

innerFunction();