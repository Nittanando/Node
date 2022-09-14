const fs = require('fs');
// const path = require('path');
// const os = require('os');
// const fs = require('fs')
// const people = require('./people');

// const myPath = '/home/sarkar/Downloads/amita/10147.pdf';

// console.log(people[0]);
// console.log(path.parse(myPath));
// console.log(os.cpus());

const file = fs.readFileSync('myfile.txt');
console.log(file.toString());
