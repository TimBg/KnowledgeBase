'use strict'

try {
    setTimeout(function() {
        throw new Error();
    }, 1000);
} catch (e) {
    console.log('this console log will not be executed');
}

// try catch will not catch setTimeout

// solution:

setTimeout(function() {
    try {
        throw new Error();
    } catch (e) {
        console.log('this console log will be executed');
    }
}, 1000);
