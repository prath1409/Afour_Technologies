// ======== Exercise 5.1 ========
  // Goals:
  // • Add explicit parameter type to the greet method
  // • Add explicit return type to the greet method

  class MC {
    greet(event: string= 'party'):string {
      return `Welcome to the ${event}`;
    }
  }

  const mc = new MC();
  console.log('[Exercise 5.1]', mc.greet());
  console.log('[Exercise 5.1]', mc.greet('show'));