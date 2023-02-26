'use strict'

const registry = new FinalizationRegistry(message => console.log(message));

function example() {
    const x = {};
    const y = {};
    const z = { x, y };

    registry.register(x, 'x has been collected');
    registry.register(y, 'y has been collected');
    registry.register(z, 'z has been collected');

    globalThis.temp = () => z.x;
}

example();

// garbage collector collected nothing