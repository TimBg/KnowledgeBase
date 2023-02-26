'use strict'

setTimeout(function() {
    console.log(10);
}, 0);

// will not add a callback instantly, but will wait a few milliseconds
// it depends on many parameters, including the type of browser
// In an inactive tab, the number of milliseconds increases