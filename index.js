// const fs = require('fs');
const EventEmitter = require('events');
// const path = require('path');
// const os = require('os');
// const fs = require('fs')
// const people = require('./people');

// const myPath = '/home/sarkar/Downloads/amita/10147.pdf';

// console.log(people[0]);
// console.log(path.parse(myPath));
// console.log(os.cpus());

// fs.readFile('myfile.txt', (err, data) => {
//     console.log(data.toString());
// });

const emitter = new EventEmitter();

emitter.on('somedata', ({ fname, lname }) => {
    console.log(`I am ${fname} ${lname}`);
});
