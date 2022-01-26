// ======== Exercise 1.5 ========
  // Instructions:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  //const sequence:number[] = Array.from(Array(10).keys());
  const animals:string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
  const stringsAndNumbers:(number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
  const allMyArrays:(number | string)[][] = [ animals, stringsAndNumbers];

  console.log('Exercise 1.5', allMyArrays);