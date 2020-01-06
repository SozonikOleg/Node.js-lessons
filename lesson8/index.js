const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Server started on port${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain; charset= utf-8 ' });
  res.end('Привет!!');
  console.log('hello!');
});

server.listen(3000, '127.0.0.1');

console.log('Listen port 3000!');
