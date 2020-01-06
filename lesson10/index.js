const fs = require('fs');

// connect to server

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Server started on port${req.url}`);
  res.writeHead(200, { 'Content-Type': 'text/plain; charset= utf-8 ' });


  const myReadShort = fs.createReadStream(`${__dirname}/article10.txt`);

  myReadShort.pipe(res);
});

server.listen(3000, '127.0.0.1');

console.log('Listen port 3000!');
