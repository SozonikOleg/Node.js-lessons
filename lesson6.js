const fs = require('fs');

const fileReaded = fs.readFileSync('text.txt', 'utf8', (err, data) => {
  console.log(data);
});

const writeFile = fs.writeFileSync('some.txt', 'Hi it is me', (err, data) => {
  console.log(data);
});

console.log('Test!');

const message = `This new message! \n${fileReaded}`;
fs.writeFileSync('someNew.txt', message);

console.log(fileReaded);
