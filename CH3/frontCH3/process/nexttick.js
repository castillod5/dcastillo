/**
 * Created by dancastillo on 9/22/15.
 */

// nexttick.js
process.nextTick(function(){
    console.log('next tick');
});

console.log('immediate');