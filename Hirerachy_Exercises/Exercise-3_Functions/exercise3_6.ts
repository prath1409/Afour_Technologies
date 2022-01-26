// ======== Exercise 3.6 ========
  // Here we've initialized two variables with function types.
  // Later we assign them to functions.
  // Instructions:
  // • Fix the errors

  let multiply: (val1: number, val2: number) => number;
  let capitalize: (val: string) => string;

   capitalize = function(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }

  multiply = function(x: number, y: number): number {
    return x * y;
  }

  console.log('[Exercise 3.6]', capitalize(`nifty ${multiply(5, 10)}`));