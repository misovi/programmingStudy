var http = require('http')

http.createServer(callback).listen(8080);

//create server object
function callback(req, res)
{
  res.writeHead(200, {'Content-Type':'text/html'})
  res.write('Hello World');
  res.write(req.url);
  res.end();
}
/*
http.createServer(function(req, res){
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write('hello world');
  res.end();
}).listen(8080);*/
