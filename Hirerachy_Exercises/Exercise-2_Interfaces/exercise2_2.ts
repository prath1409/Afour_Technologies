// ======== Solution 2.2 ========
  // Instructions:
  // • Create and implement an interface on `Person` to ensure it always has accessible
  //   `name` and `age` member properties.

  interface Person {
    name: string;
    age: number;
  }

  class Person implements Person {
    constructor(public name: string, public age: number) {
        this.name=name;
        this.age=age;
    }
  }

  const jane = new Person('Jane', 31);

  console.log('[Solution 2.2]', `${jane.name} is ${jane.age} years old.`);