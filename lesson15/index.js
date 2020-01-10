const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index', (req, res) => {
  res.render('index');
});

app.post('/index', urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render('about-succes', { data: req.body });
});

app.get('/news/:id', (req, res) => {
  const obj = { title: 'news', id: 4, paragraphs: ['1', '2', '3'] };
  console.log(req.query);
  res.render('news', { newsId: req.params.id, newParam: 234, obj });
});

app.listen(3000);
