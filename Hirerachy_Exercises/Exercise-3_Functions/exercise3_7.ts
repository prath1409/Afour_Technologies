// ======== Exercise 3.7 ========
  // Currently, our function `pushToCollection` accepts *any* item and adds it,
  // (indiscriminantly) to *any* kind of array.
  //
  // A couple problems with this:
  //
  //     1. The `any` type causes us to lose ALL typing information on our params.
  //     2. This looseness has come back to back to bite us during runtime. (Just
  //        look at `incrementByTwo`!)
  //
  // Instructions:
  // • Implement `pushToCollection` as a generic function. (This should create
  //   compile-time errors in places where incorrect values are being added to
  //   a given collection. Fix these values to the correct types.)
  // • Once made generic, `pushToCollection` should be *generic* enough to operate
  //   on items and collections of any type while continuing to enforce that they match.

  const numberCollection: number[] = [];
  const stringCollection: string[] = [];

  function pushToCollection<T>(item:T, collection:T[]):T[] {
    collection.push(item);
    return collection;
  }

  // Add some stuff to the collections
  pushToCollection('false', stringCollection);
  pushToCollection('hi', stringCollection);
  pushToCollection('[]', stringCollection);

  pushToCollection(1, numberCollection);
  pushToCollection(2, numberCollection);
  pushToCollection(3, numberCollection);

  const incrementedByTwo = numberCollection.map((num) => num + 2);

  console.log('[Exercise 3.7]', `[${incrementedByTwo}] should deeply equal [3,4,5]`);