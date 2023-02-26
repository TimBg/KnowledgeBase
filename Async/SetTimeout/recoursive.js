let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 1000);
}, 1000);

// not the same that setTimeout with 1000 and setTimeout with 2000
// because they can not have difference between execution in seconds -
// for example if sync code before setTimeouts will be executiong for 3 seconds