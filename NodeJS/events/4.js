//  Class: events.EventEmitterAsyncResource extends EventEmitter


// const { EventEmitterAsyncResource } = require('events');
// const { notStrictEqual, strictEqual } = require('assert');
// const { executionAsyncId } = require('async_hooks');

// // Async tracking tooling will identify this as 'Q'.
// const ee1 = new EventEmitterAsyncResource({ name: 'Q' });

// // 'foo' listeners will run in the EventEmitters async context.
// ee1.on('foo', () => {
//   strictEqual(executionAsyncId(), ee1.asyncId);
//   strictEqual(triggerAsyncId(), ee1.triggerAsyncId);
// });

// const ee2 = new EventEmitter();

// // 'foo' listeners on ordinary EventEmitters that do not track async
// // context, however, run in the same async context as the emit().
// ee2.on('foo', () => {
//   notStrictEqual(executionAsyncId(), ee2.asyncId);
//   notStrictEqual(triggerAsyncId(), ee2.triggerAsyncId);
// });

// Promise.resolve().then(() => {
//   ee1.emit('foo');
//   ee2.emit('foo');
// });