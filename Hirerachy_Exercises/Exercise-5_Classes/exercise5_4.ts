// ======== Exercise 5.4 ========
  // Goals:
  // • Add complete typing
  // • Make the Snake class inherit from Animal
  // • Make the Pony class inherit from Animal
  // • Make it so that the name member cannot be publicly accessed

  abstract class Animal {
    constructor(protected name:string) {}
    move(meters:number) {
      console.log(`${this.name} moved ${meters}m.`);
    }
  }

  class Snake extends Animal {
    move(meters:number=5) {
      console.log('Slithering...');
      super.move(meters);
      // should call on parent's `move` method, w/ a default
      // slither of 5 meters
    }
  }

  class Pony extends Animal{
    move(meters:number=60) {
      console.log('Galloping...');
      super.move(meters);
      // should call on parent's `move` method, w/ a default
      // gallop of 60 meters
    }
  }

  // The class Animal should not be instantiable.
  // Delete or comment out once the desired error is achieved.
//   const andrew = new Animal("Andrew the Animal");
//   andrew.move(5);

  const sammy = new Snake("Sammy the Snake");
  sammy.move();
  //console.log(sammy.name); // Should return error

  const pokey = new Pony("Pokey the Pony");
  pokey.move(34);
  //console.log(pokey.name); // Should return error