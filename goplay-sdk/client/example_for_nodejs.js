//(3-4) for node.js
console.log('example of (3-4)');

const { Tom } = require('../mylib.min.js');
const tom = new Tom();
console.log(tom.sayHello());//-> Hi, I am Tom.
