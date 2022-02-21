const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
//      Basic event and listener implementation         ------(1)

// const mymitter = new MyEmitter();
// mymitter.on('event', ()=> {
//   console.log('an event occurred!');
// });
// mymitter.emit('event');



// Passing arguments and this to listeners            ------(2)      


// const myEmitter = new MyEmitter();
// myEmitter.on('event', function(a, b) {
//   console.log(a, b, this, this === myEmitter);
// });
// myEmitter.emit('event', 'a', 'b');

       // using arrow function

// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//     console.log(a, b, this);
//     // Prints: a b {}
// });
// myEmitter.emit('event', 'a', 'b');



//  Asynchronous vs. synchronous                     ------(3)

// const myEmitter = new MyEmitter();
// myEmitter.on('event', (a, b) => {
//   setImmediate(() => {
//     console.log('this happens asynchronously');
//   });
// });
// myEmitter.emit('event', 'a', 'b');


// Handling events only once                         ------(4)

// const myEmitter = new MyEmitter();
// let m = 0;
// myEmitter.on('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // Prints: 1
// myEmitter.emit('event');
// // Prints: 2
// myEmitter.emit('event');

        // Using myEmmiter.once()

// const myEmitter = new MyEmitter();
// let m = 0;
// myEmitter.once('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // Prints: 1
// myEmitter.emit('event');
// // // Ignored


// Error events                                     ------(5)

// const myEmitter = new MyEmitter();
// myEmitter.on('error', (err) => {
//   console.error('whoops! there was an error');
//   //console.error('whoops! there was an error', err);
// });
// myEmitter.emit('error', new Error('whoops!'));
// // Prints: whoops! there was an error