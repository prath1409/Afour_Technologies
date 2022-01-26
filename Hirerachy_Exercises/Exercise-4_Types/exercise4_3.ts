// ======== Exercise 4.3 ========
  // Instructions:
  // • Add type annotations (`any` excluded)
  // • Inspect inferred type of `element` in different code branches
  // • Bonus: turn `flatten` into a generic function

  const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];

  function flatten(array:(number[] | number)[]):number[] {
    const flattened:number[] = [];

    for (const element of array) {
      if (Array.isArray(element)) {
        element; // any[]
        flattened.push(...element);
      } else {
        element; // any
        flattened.push(element);
      }
    }

    return flattened;
  }

  // generic function
  function genericFlatten<T>(array: (T[] | T)[]): T[] {
    const flattened: T[] = [];

    for (const element of array) {
      if (Array.isArray(element)) {
        flattened.push(...element);
      } else {
        flattened.push(element);
      }
    }

    return flattened;
  }

  const flattenedNumbers = flatten(numbers);

  console.log('[Exercise 4.3]', flattenedNumbers);
