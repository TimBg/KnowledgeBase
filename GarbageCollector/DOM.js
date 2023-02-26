'use strict'

const registry = new FinalizationRegistry(message => console.log(message));

function example() {
    const x = document.createElement('div');
    const y = document.createElement('div');
    const z = document.createElement('div');

    z.append(x);
    z.append(y);

    registry.register(x, 'x has been collected');
    registry.register(y, 'y has been collected');
    registry.register(z, 'z has been collected');

    globalThis.temp = x;
}

example();

// garbage collector collected nothing because x has x.parentElement and x.nextSibling
// but if we use temp.remove() then GC will collect z and y but not x because temp has reference to x 