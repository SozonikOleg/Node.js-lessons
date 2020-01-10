const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get('/news/:id', (req, res) => {
  const obj = { title: 'news', id: 4, paragraphs: ['1', '2', '3'] };
  res.render('news', { newsId: req.params.id, newParam: 234, obj });
});

app.listen(3000);
