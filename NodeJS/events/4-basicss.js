// const EventEmitter=require('events')
// const myEmitter = new EventEmitter();

// function c1() {
//    console.log('an event occurred!');
// }

// function c2() {
//    console.log('yet another event occurred!');
// }

// myEmitter.on('eventOne', c1); // Register for eventOne
// myEmitter.on('eventOne', c2); // Register for eventOne

// myEmitter.emit('eventOne');

//      Registering for the event to be fired only one time using once.     ----------------------(1)

// const EventEmitter=require('events')
// const myEmitter = new EventEmitter();

// myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));  

// myEmitter.emit('eventOnce');
// myEmitter.emit('eventOnce');


//  Emitting the event with parameters:                                     ----------------------(2)

// const EventEmitter=require('events')
// const myEmitter = new EventEmitter();

// myEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));

// myEmitter.emit('status', 200, 'ok');



// Unregistering events                                                     ----------------------(3)


// const EventEmitter=require('events')
// const myEmitter = new EventEmitter();
// myEmitter.on('eventOne',()=>{}); // Register for eventOne

// myEmitter.emit('eventOne');

// //myEmitter.off('eventOne');



//  Getting Listener count                                                   ----------------------(4)

const EventEmitter=require('events')
const myEmitter = new EventEmitter();
myEmitter.on('eventOne',()=>{}); // Register for eventOne
myEmitter.on('eventOne',()=>{}); // Register for eventOne

myEmitter.emit('eventOne');
console.log(myEmitter.listenerCount('eventOne'));