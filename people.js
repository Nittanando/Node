// const people = ['shimul', 'nitto', 'arif'];

// module.exports = people;
const EventEmitter = require('events');

const emitter = new EventEmitter();
function myInfo() {
    console.log('I am Nittanando Sarkar');

    emitter.emit('somedata', {
        fname: 'nittanando',
        lname: 'sarkar',
    });
}
module.exports = myInfo;
