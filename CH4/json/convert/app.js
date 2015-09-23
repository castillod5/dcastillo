/**
 * Created by dancastillo on 9/23/15.
 */

var foo = {
    a: 1,
    b: 'a string',
    c: true
};

//converts a JS object to a string

var json = JSON.stringify(foo);
console.log(json);
console.log(typeof json); //string

//convert a JSON string to a JS object

var backtoJS = JSON.parse(json);
console.log(backtoJS);
console.log(backtoJS.a);//1
console.log(backtoJS.b);
console.log(backtoJS.c);
