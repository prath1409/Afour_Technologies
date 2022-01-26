// ======== Exercise 3.4 ========
  // Instructions:
  // • Add explicit parameter types and return types
  // • Add a default greeting: "hello"
  /*
  function greet(greeting?:string):string {
    if(greeting===undefined)
        return "hello";
    return greeting.toUpperCase();
  }*/

  function greet(greeting:string="hello"):string {
    return greeting.toUpperCase();
  }


  const defaultGreeting:string = greet();
  const portugueseGreeting:string = greet('Oi como vai!');

  console.log('[Exercise 3.4]', defaultGreeting, portugueseGreeting);