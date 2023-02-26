'use strict'

const timerId = setTimeout(() => {}, 1000);

clearTimeout(timerId);

const timerIntervalId = setInterval(() => {}, 1000);

clearInterval(timerId);

// cancel exetution