var http = require('http');
var fs = require('fs');

/*http.createServer(servercallback).listen(8080);

function servercallback(req, res)
{
  fs.readFile('demofile.html', readCallBack);
}

function readCallBack(err, data)
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
}*/

http.createServer(function(req, res) {
  fs.readFile('demofile2.txt', function(err, data){
    var allLakes = [[]];
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    //console.log('test');
    //console.log(data);
    content = data;
    content = content.toString().trim();
    allLakes = parseIntoArray(content);
    console.log(allLakes.length);
    res.end();
  });
}).listen(8080);


function parseIntoArray(contentstring)
{
  return contentstring.split("\n").map(str => str.split("|"));
}
