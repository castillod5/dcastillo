/**
 * Created by dancastillo on 10/1/15.
 */

function longRunningOperation(callback){
    setTimeout(callback, 3000);
}

function userClick(){
    console.log('startign a long operation');
    longRunningOperation(function(){
        console.log('ending along operation');
    });
}

userClick();
