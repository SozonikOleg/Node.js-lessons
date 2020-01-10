const events = require('events');
const util = require('util');

const Car = function (model) {
  this.model = model;
};

util.inherits(Car, events.EventEmitter);

const bmw = new Car('BMW');
const audi = new Car('Audi');
const volvo = new Car('Volvo');

const cars = [bmw, audi, volvo];

cars.forEach((car) => {
  car.on('speed', (text) => {
    console.log(`${car.model} speed is - ${text}`);
  });
}, {});

bmw.emit('speed', '254.5 km');
volvo.emit('speed', '184.5 km');
audi.emit('speed', '144.5 km');


// const myEmit = new events.EventEmitter();

// myEmit.on('someEvent', (text) => {
//   console.log(text);
// });

// myEmit.emit('someEvent', 'Обработчик событий сработал');
