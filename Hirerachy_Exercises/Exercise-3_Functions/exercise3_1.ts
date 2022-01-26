// ======== Exercise 3.1 ========
  // Instructions:
  // • Add explicit parameter types and return type
  // • Fix any errors resulting from invalid types

  function add(x:number, y:number):number {
    return x + y;
  }

  function sumArray(numbers:number[]):number {
    return numbers.reduce(add, 0);
  }

  const someSum:number = sumArray([3, 6, 9]);

  console.log('[Exercise 3.1]', `3 + 6 + 9 === ${someSum}`);