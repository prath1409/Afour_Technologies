//  EventTarget and Event API

// const target = new EventTarget();

// target.addEventListener('foo', (event) => {
//   console.log('foo event happened!');
// });


//  Event Listener


// function handler1(event) {
//     console.log(event.type);  // Prints 'foo'
//     event.a = 1;
//   }
  
//   async function handler2(event) {
//     console.log(event.type);  // Prints 'foo'
//     console.log(event.a);  // Prints 1
//   }
  
//   const handler3 = {
//     handleEvent(event) {
//       console.log(event.type);  // Prints 'foo'
//     }
//   };
  
//   const handler4 = {
//     async handleEvent(event) {
//       console.log(event.type);  // Prints 'foo'
//     }
//   };
  
//   const target = new EventTarget();
  
//   target.addEventListener('foo', handler1);
//   target.addEventListener('foo', handler2);
//   target.addEventListener('foo', handler3);
//   target.addEventListener('foo', handler4, { once: true });


