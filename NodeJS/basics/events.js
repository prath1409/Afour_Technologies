const EventEmitter=require('events');
const emitter=new EventEmitter();

// Register a listener

emitter.on('messageLogged', (arg) => {
    console.log('Listner called', arg);
});

const log = require('./logger');
log('message');