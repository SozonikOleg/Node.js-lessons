const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/news/:id', (req, res) => {
  res.send(`ID is - ${req.params.id}`);
});

app.listen(3000);
console.log('server started to port 3000!');
