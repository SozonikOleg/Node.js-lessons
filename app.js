const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API',
  });
});

app.post('/api/', (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: 'brad',
    email: 'brad@mail.com',
  };

  jwt.sign({ user }, 'secretkey', (err, token) => {
    res.json({
      token,
    });
  });
});

app.post('/api/login', (req, res) => {
  jwt.sign();
});

app.listen(5000, () => console.log('Server start on port to 5000'));
