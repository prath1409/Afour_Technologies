// ======== Exercise 4.4 ========
  //
  // Instructions:
  // • Birds and Fish both lay eggs. Only Birds fly. Only Fish swim. Define
  //   two new types: `BirdLike` and `FishLike` based on these traits.
  // • Create a type alias for `Bird OR Fish` called `Animal`
  // • Use an `instanceof` type guard in `interrogateAnimal` to allow the fishes
  //   to swim the and birds to fly.
  // • Add any missing type annotations, being as explicit as possible.

  interface EggLayer {
    layEggs(): void;
  }

  interface Flyer {
    fly(height: number): void;
  }

  interface Swimmer {
    swim(depth: number): void;
  }

  // add type alias(es) here
  type BirdLike = Flyer & EggLayer;
  type FishLike = Swimmer & EggLayer;
  type Animal = Bird | Fish;
  class Bird implements BirdLike {
    constructor(public species: string) {}

    layEggs(): void {
      console.log('Laying bird eggs.');
    }

    fly(height: number): void {
      console.log(`Flying to a height of ${height} meters.`);
    }
  };

  class Fish implements FishLike {
    constructor(public species: string) {}

    layEggs(): void {
      console.log('Laying fish eggs.');
    }

    swim(depth: number): void {
      console.log(`Swimming to depth of ${depth} meters.`);
    }
  }

  function getRandomAnimal() {
    const animals = [
      new Bird('puffin'),
      new Bird('kittiwake'),
      new Fish('sea robin'),
      new Fish('leafy seadragon'),
    ];

    return animals[Math.floor(Math.random() * animals.length)];
  }

  function interrogateAnimal(animal = getRandomAnimal()) {
    if (animal instanceof Fish) {
        animal.swim(10); // call only if it is a fish
      } else if (animal instanceof Bird) {
        animal.fly(10); // call only if it is a bird
      }
    return animal.species;
  }

  console.log('[Exercise 4.4]', `We've got a ${interrogateAnimal()} on our hands!`);
