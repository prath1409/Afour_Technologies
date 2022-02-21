

//  events.getEventListeners(emitterOrTarget, eventName)

// const { getEventListeners, EventEmitter } = require('events');

// {
//   const ee = new EventEmitter();
//   const listener = () => console.log('Events are fun');
//   ee.on('foo', listener);
//   getEventListeners(ee, 'foo'); // [listener]
// }
// {
//   const et = new EventTarget();
//   const listener = () => console.log('Events are fun');
//   et.addEventListener('foo', listener);
//   getEventListeners(et, 'foo'); // [listener]
// }


//  events.once(emitter,name[,options])

// const { once, EventEmitter } = require('events');

// async function run() {
//   const ee = new EventEmitter();

//   process.nextTick(() => {
//     ee.emit('myevent', 42);
//   });

//   const [value] = await once(ee, 'myevent');
//   console.log(value);

//   const err = new Error('kaboom');
//   process.nextTick(() => {
//     ee.emit('error', err);
//   });

//   try {
//     await once(ee, 'myevent');
//   } catch (err) {
//     console.log('error happened', err);
//   }
// }

// run();


//  events.once() is used to wait for another event

// const { EventEmitter, once } = require('events');

// const ee = new EventEmitter();

// once(ee, 'error')
//   .then(([err]) => console.log('ok', err.message))
//   .catch((err) => console.log('error', err.message));
// ee.emit('error', new Error('boom'));
// // Prints: ok boom


//  An <AbortSignal> can be used to cancel waiting for the event:

// const { EventEmitter, once } = require('events');

// const ee = new EventEmitter();
// const ac = new AbortController();

// async function foo(emitter, event, signal) {
//   try {
//     await once(emitter, event, { signal });
//     console.log('event emitted!');
//   } catch (error) {
//     if (error.name === 'AbortError') {
//       console.error('Waiting for the event was canceled!');
//     } else {
//       console.error('There was an error', error.message);
//     }
//   }
// }

// foo(ee, 'foo', ac.signal);
// ac.abort(); // Abort waiting for the event
// ee.emit('foo'); // Prints: Waiting for the event was canceled!

//  Awaiting multiple events emitted on process.nextTick()

// const { EventEmitter, once } = require('events');

// const myEE = new EventEmitter();

// async function foo() {
//   await once(myEE, 'bar');
//   console.log('bar');

//   // This Promise will never resolve because the 'foo' event will
//   // have already been emitted before the Promise is created.
//   await once(myEE, 'foo');
//   console.log('foo');
// }

// process.nextTick(() => {
//   myEE.emit('bar');
//   myEE.emit('foo');
// });

// foo().then(() => console.log('done'));

    
    // use of Promise.all(), Promise.race(), or Promise.allSettled()

// const { EventEmitter, once } = require('events');

// const myEE = new EventEmitter();

// async function foo() {
//   await Promise.all([once(myEE, 'bar'), once(myEE, 'foo')]);
//   console.log('foo', 'bar');
// }

// process.nextTick(() => {
//   myEE.emit('bar');
//   myEE.emit('foo');
// });

// foo().then(() => console.log('done'));


//  events.listenerCount(emitter, eventName)

// const { EventEmitter, listenerCount } = require('events');
// const myEmitter = new EventEmitter();
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// console.log(listenerCount(myEmitter, 'event'));


//  events.on(emitter, eventName[, options])

// const { on, EventEmitter } = require('events');

// (async () => {
//   const ee = new EventEmitter();

//   // Emit later on
//   process.nextTick(() => {
//     ee.emit('foo', 'bar');
//     ee.emit('foo', 42);
//   });

//   for await (const event of on(ee, 'foo')) {
//     // The execution of this inner block is synchronous and it
//     // processes one event at a time (even with await). Do not use
//     // if concurrent execution is required.
//     console.log(event); // prints ['bar'] [42]
//   }
//   // Unreachable here
// })();


//  An <AbortSignal> can be used to cancel waiting on events:

// const { on, EventEmitter } = require('events');
// const ac = new AbortController();

// (async () => {
//   const ee = new EventEmitter();

//   // Emit later on
//   process.nextTick(() => {
//     ee.emit('foo', 'bar');
//     ee.emit('foo', 42);
//   });

//   for await (const event of on(ee, 'foo', { signal: ac.signal })) {
//     // The execution of this inner block is synchronous and it
//     // processes one event at a time (even with await). Do not use
//     // if concurrent execution is required.
//     console.log(event); // prints ['bar'] [42]
//   }
//   // Unreachable here
// })();

// process.nextTick(() => ac.abort());



//events.setMaxListeners(n[, ...eventTargets])

// const {
//   setMaxListeners,
//   EventEmitter
// } = require('events');

// const target = new EventTarget();
// const emitter = new EventEmitter();

// setMaxListeners(5, target, emitter);

