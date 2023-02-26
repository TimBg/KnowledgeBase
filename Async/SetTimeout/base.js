'use strict'

setTimeout(function() {
    console.log('Hello');
}, 2000);

// executes the function no earlier than after two seconds
// but it is not certain that exactly after two

setTimeout(function(...args) {
    console.log(args);
}, 2000, 'qwerty', null);

// after delay - arguments for callback

setInterval(function() {
    console.log('10');
}, 5000);

// add to queue the callback every 5 econds, but it's not the guarantee
// of difference in sec between calls of callbacks