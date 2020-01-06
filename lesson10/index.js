const fs = require('fs');
const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(`Server started on port${req.url}`);
//   res.writeHead(200, { 'Content-Type': 'text/html; charset= utf-8 ' });
//   const myReadShort = fs.createReadStream(`${__dirname}/index.html`);
//   myReadShort.pipe(res);
// });

const server = http.createServer((req, res) => {
  console.log(`Server started on port${req.url}`);
  res.writeHead(200, { 'Content-Type': 'application/json; charset= utf-8 ' });
  const obj = {
    model: 'Audi',
    speed: '234.4',
    Wheels: 4,
  };
  res.end(JSON.stringify(obj));
});

server.listen(3000, '127.0.0.1');
console.log('Listen port 3000!');
