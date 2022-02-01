const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}


//  "Event: 'newListener'"                                  ------(1)

// const myEmitter = new MyEmitter();
// // Only do this once so we don't loop forever
// myEmitter.once('newListener', (event, listener) => {
//   if (event === 'event') {
//     // Insert a new listener in front
//     myEmitter.on('event', () => {
//       console.log('B');
//     });
//   }
// });
// myEmitter.on('event', () => {
//   console.log('A');
// });
// myEmitter.emit('event');
// myEmitter.emit('event');
// // Prints:
// //   B
// //   A




// "emitter.emit(eventName[, ...args])"                    ------(2)


// const myEmitter = new EventEmitter();

// // First listener
// myEmitter.on('event', function firstListener() {
//   console.log('Helloooo! first listener');
// });
// // Second listener
// myEmitter.on('event', function secondListener(arg1, arg2) {
//   console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
// });
// // Third listener
// myEmitter.on('event', function thirdListener(...args) {
//   const parameters = args.join(', ');
//   console.log(`event with parameters ${parameters} in third listener`);
// });

// console.log(myEmitter.listeners('event'));

// myEmitter.emit('event', 1, 2, 3, 4, 5);


// "emitter.eventNames()"                                 ------(3)

// const myEE = new EventEmitter();
// myEE.on('foo', () => {});
// myEE.on('bar', () => {});

// const sym = Symbol('symbol');
// myEE.on(sym, () => {});

// console.log(myEE.eventNames());


// //  emitter.on(eventName, listener)                    ------(4)

// const myEE = new EventEmitter();
// myEE.on('foo', () => console.log('a'));
// myEE.prependListener('foo', () => console.log('b'));
// myEE.emit('foo');
// // Prints:
// //   b
// //   a


//  emitter.once(eventName, listener)                     ------(5)

// const myEE = new EventEmitter();
// myEE.once('foo', () => console.log('a'));
// myEE.prependOnceListener('foo', () => console.log('b'));
// myEE.emit('foo');
// myEE.emit('foo');
// // Prints:
// //   b
// //   a


//  emitter.removeListener(eventName, listener)          ------(6)

// const myEmitter = new MyEmitter();

// const callbackA = () => {
//   console.log('A');
//   myEmitter.removeListener('event', callbackB);
// };

// const callbackB = () => {
//   console.log('B');
// };

// myEmitter.on('event', callbackA);

// myEmitter.on('event', callbackB);

// // callbackA removes listener callbackB but it will still be called.
// // Internal listener array at time of emit [callbackA, callbackB]
// myEmitter.emit('event');
// // Prints:
// //   A
// //   B

// // callbackB is now removed.
// // Internal listener array [callbackA]
// myEmitter.emit('event');
// // Prints:
// //   A


//  emitter.rawListeners(eventName)                       ------(7)

// const emitter = new EventEmitter();
// emitter.once('log', () => console.log('log once'));

// // Returns a new Array with a function `onceWrapper` which has a property
// // `listener` which contains the original listener bound above
// const listeners = emitter.rawListeners('log');
// const logFnWrapper = listeners[0];

// // Logs "log once" to the console and does not unbind the `once` event
// logFnWrapper.listener();

// // Logs "log once" to the console and removes the listener
// logFnWrapper();

// emitter.on('log', () => console.log('log persistently'));
// // Will return a new Array with a single function bound by `.on()` above
// const newListeners = emitter.rawListeners('log');

// // Logs "log persistently" twice
// newListeners[0]();
// emitter.emit('log');


