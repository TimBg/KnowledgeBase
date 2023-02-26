'use strict'

const registry = new FinalizationRegistry(message => console.log(message));

function example() {
    const x = {};

    registry.register(x, 'x has been collected');

    globalThis.temp = (string) => eval(string);
}

example();

// garbage collector collected nothing because we can call temp('x')
// the garbage collector will be afraid to collect variables even if globalThis.temp = () => eval(1)
// but if globalThis.exec = eval, then eval will executed in the global scope and GC will collect x