const fs = require('fs');

const myReadShort = fs.createReadStream(`${__dirname}/article9.txt`);
const myWriteShort = fs.createWriteStream(`${__dirname}/news9.txt`);

myReadShort.on('data', (chunk) => {
  console.log(`Новые данные полученны:!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${chunk}`);
  myWriteShort.write(chunk);
});
