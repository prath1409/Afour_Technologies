const EventEmitter=require('events');
const emitter=new EventEmitter();

var url='https://google.com';

function log(message){
    // Send an HTTP request
    console.log(message);

    // Raise an event 
    emitter.emit('messageLogged', {id: 1, url: 'http://'});
}



module.exports=log;