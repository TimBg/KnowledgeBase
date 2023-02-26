'use strict'

let promiseWithThen = new Promise(() => {});
let then = promiseWithThen.then(() => {
  console.log("then reached");
});

finalizationRegistry.register(promiseWithThen, " with `then` chain");
finalizationRegistry.register(then, " then callback");

promiseWithThen = then = null;

// garbage collector collected nothing