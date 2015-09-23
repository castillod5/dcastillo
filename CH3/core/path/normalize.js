/**
 * Created by dancastillo on 9/22/15.
 */

var path = require('path');

console.log(path.normalize('/foo/bar/..'));

console.log(path.normalize('/foo//bar/bas/..'));