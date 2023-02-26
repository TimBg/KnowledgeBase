'use strict'

const registry = new FinalizationRegistry(message => console.log(message));

function asyncOperation() {
    return new Promise((resolve, reject) => {
        /* never settles */
    });
}

function example() {
    const x = {};
    registry.register(x, 'x has been collected');
    asyncOperation().then(() => console.log(x));
}

example();

// garbage collector collected x

let promiseWithResolve = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100000);
});
  
registry.register(promiseWithResolve , " which keeps resolve function"); 
promiseWithResolve = null;

// garbage collector collected nothing because we have ref to resolve
// it also will be working with ref to reject