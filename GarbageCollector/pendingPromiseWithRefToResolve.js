'use strict'

const registry = new FinalizationRegistry(message => console.log(message));

function asyncOperation() {
    return new Promise((resolve) => {
        globalThis.temp = resolve;
    });
}

function example() {
    const x = {};
    registry.register(x, 'x has been collected');
    asyncOperation().then(() => console.log(x));
}

example();

// garbage collector collected nothing