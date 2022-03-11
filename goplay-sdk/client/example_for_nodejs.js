//(3-4) for node.js
console.log('example of (3-4)');

const { Tom } = require('../mylib.min.js');
const tom = new Tom();
console.log(tom.sayHello());//-> Hi, I am Tom.

const { H5SDK, EVENT_TYPES } = require('../mylib.min.js');
const h5 = new H5SDK();
console.log('h5Sdk: ', h5);
console.log('init: ', h5.init);
console.log(EVENT_TYPES);
h5.init({hello: 'world'});
