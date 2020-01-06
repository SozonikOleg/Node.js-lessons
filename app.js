// const express = require('express');
// const jwt = require('jsonwebtoken');

// const app = express();

// // app.get('/api', (req, res) => {
// //   res.json({
// //     message: 'Welcome to the API',
// //   });
// // });

// app.post('/api/post', verifyToken, (req, res) => {
//   jwt.verify(req.token, 'secretkey', (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: 'Post created ...',
//         authData,
//       });
//     }
//   });
// });

// app.post('/api/login', (req, res) => {
//   // Mock user
//   const user = {
//     id: 1,
//     username: 'brad',
//     email: 'brad@mail.com',
//   };

//   jwt.sign({ user }, 'secretkey', (err, token) => {
//     res.json({
//       token,
//     });
//   });
// });


// // FORMAT OF TOKEN
// // Autorization: Bearer <access__token>

// // Veryfy Token

// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers.authorization;
//   // Check if bearer is undefined
//   if (typeof bearerHeader !== 'undefined') {
//     const bearer = bearerHeader.split(' ');
//     const bearerToken = bearer[0];
//     req.token = bearerToken;
//     next();
//   } else {
//     // Forbiten
//     res.sendStatus(403);
//   }
// }

// app.listen(5000, () => console.log('Server start on port to 5000'));
