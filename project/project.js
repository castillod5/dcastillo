/**
 * Created by dancastillo on 10/10/15.
 */

var http = require('http');
var fs = require('fs');
var util = require('util');

function handle_request(req, res){

    //choose a video file to play
    var videoPath = 'Ryan_Dahl.mov';
    //var videoPath = 'movie.mp4';
    //var videoPath = 'audio.mp4';

    //synchronously check if the file exists @ videoPath
    var videoCheck = fs.statSync(videoPath);

    //get the total size of the video file
    var totalSize = videoCheck.size;

    if (req.headers['range']) {
        var range = req.headers.range;
        console.log('Getting the range of the vide in bytes: ' + range);

        //get rid of the bytes in range
        //split range into arrray
        var parts = range.replace(/bytes=/, "").split("-");
        console.log('parts[0]:' + parts[0]);
        console.log('parts[1]:' + parts[1] + '\n');

        //where the video starts
        //on page load starts at 0
        var startVideo = parseInt(parts[0], 10);
        console.log('startVideo: ' + startVideo);

        //endVideo = if parts[1] ?==value if true : else endVideo is this
        var endVideo = parts[1] ? parseInt(parts[1], 10) : totalSize-1;
        //end of video should be the same as var totalSize
        console.log('endVideo: ' + endVideo);


        var videoSize = (endVideo-startVideo)+1;
        console.log('Range of video: ' + startVideo + ' - ' + endVideo + ' = ' + videoSize);


        //create a readable stream that opens file (videoPath == video)
        var file = fs.createReadStream(videoPath, {start: startVideo, end: endVideo});
        res.writeHead(206, { 'Content-Range': 'bytes ' + startVideo + '-' + endVideo + '/' + totalSize, 'Accept-Ranges': 'bytes', 'Content-Length': videoSize, 'Content-Type': 'video/mp4' });

        //all streams support a pipe operation that can be used by the pipe function
        file.pipe(res);
    }
    else
    {
        console.log('Total size of the video ' + totalSize);
        res.writeHead(200, { 'Content-Length': totalSize, 'Content-Type': 'video/mp4' });
        //create a readable stream that opens the file (videoPath == video)
        //all streams support a pipe operation that can be used by the pipe function
        console.log('Create a readable stream \n');
        fs.createReadStream(videoPath).pipe(res);
    }

}

var s = http.createServer(handle_request);

s.listen(8080);
