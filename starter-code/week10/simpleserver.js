var http = require("http");

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>Button was pressed x times.</h1>");
  response.end();
});

server.listen(process.env.PORT);