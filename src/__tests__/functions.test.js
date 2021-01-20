const {sum, sayHello} = require('../functions');

test('sayHello returns a string of hello when invoked', () => {
    expect(sayHello()).toBe('hello')
})

test('sum function returns 3 when passed 1 & 2', () => {
    expect(sum(1, 2)).toBe(3);
})

test('sum function does not return NaN when passed 2 & 4', () => {
    expect(sum(2, 4)).not.toBeNaN();
})