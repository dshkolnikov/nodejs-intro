var http = require('http');
var Greeting = require('./Greeting');

var greeting = new Greeting('english');

function onRequest (request, response) {

  console.log('request to url ', request.url);

  var urlParts = request.url.split('/');

  greeting.getText(urlParts[1], function (data) {
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    response.end(data);
  });
}

http.createServer(onRequest).listen(8888);
