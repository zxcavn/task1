global.x = 1;
const context = { x: 2 };

function testThis (y) {
    console.log(`x=${global.x}, y=${y}`);
}

testThis(100); // x=1 y=100

function bind(func, context) {
    return function (...args) {
        return func.call(context, ...args);
    };
}

const boundFunction = bind(testThis, context);
console.log (boundFunction(100)); // x=2 y=100
