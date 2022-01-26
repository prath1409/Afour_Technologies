// ======== Exercise 4.1 ========
  // Instructions:
  // • Restrict type of `value` to `string OR number`
  // • Fix any resulting errors.

  function doStuff(value: (string|number)): void {
    if (typeof value === 'string') {
      console.log(value.toUpperCase().split('').join(' '));
    } else if (typeof value === 'number') {
      console.log(value.toPrecision(5));
    }

    value; // hover over `value` here
  }

  doStuff(2);
  doStuff(22);
  doStuff(222);
  doStuff('hello');
  doStuff('true');
  doStuff('{}');

  console.log('[Exercise 4.1]');