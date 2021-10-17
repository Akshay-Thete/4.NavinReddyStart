var http = require('http');
//console.log("Akshay");
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("<center><h1>Hellow Akshay</h1>");
  res.end("It's Beginning </center>");
}).listen(8080)