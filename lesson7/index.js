const fs = require('fs');

fs.unlink('./new-one/someNew.txt', () => {});

// fs.mkdirSync('lesson9');
// fs.rmdirSync('lesson8');


fs.rmdir('new-one', () => {});

fs.mkdir('new-one', () => {
  fs.writeFile('./new-one/someNew.txt', 'hello world!', () => {
    console.log('All run!');
  });
});
