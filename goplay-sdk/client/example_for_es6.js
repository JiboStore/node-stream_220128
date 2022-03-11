//replace console.log with document.write to make the behavior visible
console.log = (m) => {
    document.write(`${m}<br>`);
};

//(3-4) for ES6
import { Tom } from '../mylib.min.js';
const tom = new Tom();
console.log(tom.sayHello());//-> Hi, I am Tom.

import { H5SDK, EVENT_TYPES } from '../mylib.min.js';
const h5 = new H5SDK();
console.log('h5Sdk: ', h5);
console.log('init: ', h5.init);
console.log(EVENT_TYPES);
h5.init({hello: 'world'});

